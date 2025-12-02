const YOUTUBE_HOSTS = ['youtu.be', 'www.youtube.com', 'youtube.com', 'm.youtube.com'];

const getParsedUrl = (url?: string): URL | undefined => {
  if (!url) return undefined;

  try {
    return new URL(url);
  } catch (e) {
    return undefined;
  }
};

export const isYouTubeUrl = (url?: string): boolean => {
  const parsed = getParsedUrl(url);
  if (!parsed) return false;

  return YOUTUBE_HOSTS.includes(parsed.hostname.toLowerCase());
};

/**
 * Normalize audio URLs so that YouTube share links can be used interchangeably
 * with direct audio files. For YouTube links we convert to the standard embed
 * URL format the player expects.
 */
export const normalizeAudioUrl = (url?: string): string | undefined => {
  if (!url) return url;

  const parsed = getParsedUrl(url);
  if (!parsed) return url;

  if (!isYouTubeUrl(url)) return url;

  let videoId = '';

  if (parsed.hostname === 'youtu.be') {
    videoId = parsed.pathname.split('/')[1] ?? '';
  } else if (parsed.pathname.startsWith('/watch')) {
    videoId = parsed.searchParams.get('v') ?? '';
  } else if (parsed.pathname.startsWith('/embed/')) {
    videoId = parsed.pathname.split('/')[2] ?? '';
  } else if (parsed.pathname.startsWith('/shorts/')) {
    videoId = parsed.pathname.split('/')[2] ?? '';
  }

  if (!videoId) return url;

  const searchParams = new URLSearchParams(parsed.searchParams);
  searchParams.delete('v');
  searchParams.set('playsinline', '1');
  searchParams.set('rel', '0');

  const suffix = searchParams.toString();

  return `https://www.youtube.com/embed/${videoId}${suffix ? `?${suffix}` : ''}`;
};

export const buildYouTubeEmbedSrc = (
  url?: string,
  { autoplay = false }: { autoplay?: boolean } = {}
): string | undefined => {
  const normalized = normalizeAudioUrl(url);
  if (!normalized || !isYouTubeUrl(normalized)) return normalized;

  const separator = normalized.includes('?') ? '&' : '?';
  const autoplaySuffix = `${separator}autoplay=${autoplay ? '1' : '0'}`;

  return `${normalized}${autoplaySuffix}`;
};
