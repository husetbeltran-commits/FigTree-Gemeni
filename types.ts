
export interface Song {
  id: string;
  title: string;
  lyrics: string;
  categories: string[];
  tags: string[];
  createdAt: string;
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
  audioUrl?: string;
}

export interface Prayer {
  id: string;
  title: string;
  body: string;
  categories: string[];
  tags: string[];
  createdAt: string;
  featured?: boolean;
  tracks: AudioTrack[];
  imageUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  body: string;
  categories: string[];
  tags: string[];
  createdAt: string;
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
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  createdAt: string;
}
