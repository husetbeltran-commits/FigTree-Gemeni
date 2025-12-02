import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { PRAYERS } from '../data/mockData';
import { ChevronLeft, Play, Pause, Repeat, Music2, Youtube } from 'lucide-react';
import { isYouTubeEmbedUrl } from '../utils/mediaHelpers';

const PrayerDetailPage: React.FC = () => {
  const { id } = useParams();
  const prayer = PRAYERS.find(p => p.id === id);

  // Player State
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'none' | 'one' | 'all'>('all');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const hasTracks = prayer?.tracks && prayer.tracks.length > 0;
  const currentTrack = hasTracks ? prayer?.tracks[currentTrackIndex] : null;
  const trackUrl = currentTrack?.audioUrl;
  const isYouTubeTrack = trackUrl ? isYouTubeEmbedUrl(trackUrl) : false;

  const getYouTubeEmbedWithAutoplay = (url: string, autoplay: boolean) => {
    const sanitizedUrl = url.replace(/([&?])autoplay=\d/, '').replace(/\?$/, '');
    const separator = sanitizedUrl.includes('?') ? '&' : '?';
    return `${sanitizedUrl}${separator}autoplay=${autoplay ? 1 : 0}`;
  };

  useEffect(() => {
    if (!audioRef.current || isYouTubeTrack || !trackUrl) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex, isYouTubeTrack, trackUrl]);

  useEffect(() => {
    if (isYouTubeTrack && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isYouTubeTrack]);

  useEffect(() => {
    if (isYouTubeTrack) {
      setIsPlaying(false);
    }
  }, [currentTrackIndex, isYouTubeTrack]);

  const handleTrackEnd = () => {
    if (!hasTracks || !prayer) return;

    if (repeatMode === 'one') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else if (repeatMode === 'all') {
      if (currentTrackIndex < prayer.tracks.length - 1) {
        setCurrentTrackIndex(prev => prev + 1);
      } else {
        setCurrentTrackIndex(0);
      }
    } else {
      // none
      if (currentTrackIndex < prayer.tracks.length - 1) {
        setCurrentTrackIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }
  };

  const toggleRepeat = () => {
    if (repeatMode === 'none') setRepeatMode('all');
    else if (repeatMode === 'all') setRepeatMode('one');
    else setRepeatMode('none');
  };

  if (!prayer) return <div className="p-8 text-center text-primary">Bönen hittades inte.</div>;

  return (
    <div className="min-h-screen bg-background animate-fade-in pb-20">
      <Header 
        title={prayer.title}
        backButton={<Link to="/prayers" className="text-secondary hover:text-primary transition-colors"><ChevronLeft /></Link>}
      />

      {/* COMPLEMENTARY TOP PLAYER */}
      {/* Placerad högst upp för synlighet, men kompakt design för att inte ta fokus från bönen */}
      {hasTracks && currentTrack && (
        <div className="bg-surface border-b border-border relative z-10 shadow-sm transition-colors">
          <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
            <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-secondary">Ljudmiljö</div>

            <div className="flex items-center gap-3 rounded-xl bg-surface-variant/60 border border-border px-3 py-2.5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-surface text-accent border border-border flex items-center justify-center shrink-0">
                {isYouTubeTrack ? <Youtube size={20} /> : <Music2 size={18} />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-secondary uppercase tracking-wide leading-none mb-1">Nu spelas</p>
                <p className="text-sm font-medium text-primary truncate leading-tight">{currentTrack.title}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleRepeat}
                  className={`p-2 rounded-full transition-colors relative border border-transparent hover:border-border ${
                    repeatMode !== 'none' ? 'text-accent bg-accent/10' : 'text-secondary hover:text-primary'
                  }`}
                  title="Repetera"
                >
                  <Repeat size={18} />
                  {repeatMode === 'one' && (
                    <span className="absolute top-1 right-1 text-[8px] font-bold">1</span>
                  )}
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95 text-white ${
                    isPlaying ? 'bg-accent' : 'bg-primary'
                  }`}
                  title={isPlaying ? 'Pausa' : 'Spela upp'}
                >
                  {isPlaying ? (
                    <Pause size={18} fill="currentColor" />
                  ) : (
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  )}
                </button>
              </div>
            </div>

            {prayer.tracks.length > 1 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar mask-gradient-right pb-1">
                {prayer.tracks.map((track, idx) => (
                  <button
                    key={track.id}
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      const selectedTrack = prayer.tracks[idx];
                      const isYouTubeSelection = isYouTubeEmbedUrl(selectedTrack.audioUrl);
                      setIsPlaying(!isYouTubeSelection);
                    }}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 border ${
                      currentTrackIndex === idx
                        ? 'bg-accent/10 border-accent/30 text-accent'
                        : 'bg-transparent border-border text-secondary hover:bg-surface-variant'
                    }`}
                  >
                    <span>{idx + 1}. {track.title}</span>
                    {currentTrackIndex === idx && isPlaying && (
                       <span className="block w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            )}

            <div className="rounded-lg border border-border bg-surface-variant/40 overflow-hidden">
              {isYouTubeTrack ? (
                <iframe
                  key={`${currentTrack.id}-${isPlaying}`}
                  src={getYouTubeEmbedWithAutoplay(trackUrl!, isPlaying)}
                  width="100%"
                  height="120"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={false}
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              ) : (
                <audio
                  ref={audioRef}
                  src={trackUrl}
                  onEnded={handleTrackEnd}
                  className="w-full"
                  controls
                />
              )}
              {isYouTubeTrack && (
                <div className="px-3 py-2 text-[12px] text-secondary bg-surface/60">
                  Starta eller pausa från knappen ovan eller spelaren här – videon hålls kompakt så att bönen är i fokus.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TEXT CONTENT */}
      <div className="p-6 max-w-2xl mx-auto">
        <div className="prose dark:prose-invert prose-lg prose-headings:text-primary prose-p:text-primary">
          <p className="whitespace-pre-wrap font-serif text-xl leading-relaxed">
            {prayer.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrayerDetailPage;