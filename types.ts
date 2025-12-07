
export type ISODateTimeString = string;

export interface Song {
  id: string;
  title: string;
  lyrics: string;
  categories: string[];
  tags: string[];
  createdAt: ISODateTimeString;
  featured?: boolean;
  pinned?: boolean;
  youtubeUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  youtubeUrl?: string;
  // Can be a direct audio file URL or a YouTube share/embed link
  audioUrl?: string;
}

export interface Prayer {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
  categories: string[];
  tags: string[];
  createdAt: ISODateTimeString;
  featured?: boolean;
  tracks: AudioTrack[];
  imageUrl?: string;
}

// Dedicated type to keep blessings distinct from prayers in the UI flows.
export interface Blessing {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
  categories: string[];
  tags?: string[];
  createdAt: ISODateTimeString;
  featured?: boolean;
  tracks?: AudioTrack[];
  imageUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  body: string;
  categories: string[];
  tags: string[];
  createdAt: ISODateTimeString;
  featured?: boolean;
  pinned?: boolean;
  mainImageUrl?: string;
  galleryImageUrls?: string[];
}

export interface BibleVerse {
  id: string;
  reference: string;
  text: string;
  isDailyWord?: boolean;
  reflection?: string;
}

