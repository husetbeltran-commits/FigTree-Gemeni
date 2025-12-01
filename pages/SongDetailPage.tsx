import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SONGS } from '../data/mockData';
import { ChevronLeft, Maximize2, Minimize2, Type, Music, ExternalLink } from 'lucide-react';

const SongDetailPage: React.FC = () => {
  const { id } = useParams();
  const song = SONGS.find(s => s.id === id);
  const [fontSize, setFontSize] = useState(18); // Base font size
  const [fullscreen, setFullscreen] = useState(false);

  if (!song) return <div className="p-8 text-center text-primary">Sången hittades inte.</div>;

  // Helper to create a watch URL from embed URL for the fallback link
  const getWatchUrl = (embedUrl: string) => {
    return embedUrl.replace('embed/', 'watch?v=');
  };

  return (
    <div className={`min-h-screen bg-background animate-fade-in ${fullscreen ? 'z-[100] fixed inset-0 overflow-y-auto bg-background' : ''}`}>
      
      {/* Top Controls */}
      <div className="sticky top-0 bg-background/90 backdrop-blur p-4 flex items-center justify-between border-b border-border z-20 transition-colors">
        <div className="flex items-center gap-4 text-primary">
          {!fullscreen && (
            <Link to="/songs" className="text-secondary hover:text-primary">
              <ChevronLeft />
            </Link>
          )}
          <h1 className="font-bold text-lg truncate max-w-[200px]">{song.title}</h1>
        </div>
        
        <div className="flex items-center gap-4 text-primary">
          <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="text-secondary hover:text-primary">
            <Type size={16} />
          </button>
          <button onClick={() => setFontSize(Math.min(32, fontSize + 2))} className="text-secondary hover:text-primary">
            <Type size={24} />
          </button>
          <button onClick={() => setFullscreen(!fullscreen)} className="text-accent hover:text-accent-hover ml-2">
            {fullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        </div>
      </div>

      {/* Media Player */}
      {(song.youtubeUrl || song.audioUrl) && (
        <div className="bg-surface-variant p-4 border-b border-border">
           {song.youtubeUrl ? (
             <div className="w-full">
               <div className="aspect-video w-full rounded-lg overflow-hidden bg-black shadow-lg">
                 <iframe 
                   src={song.youtubeUrl} 
                   className="w-full h-full" 
                   title={song.title}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen
                 />
               </div>
               {/* Fallback link if video is blocked from embedding */}
               <div className="mt-3 flex justify-center">
                 <a 
                   href={getWatchUrl(song.youtubeUrl)} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-xs text-secondary hover:text-accent transition-colors bg-surface px-3 py-1.5 rounded-full border border-border"
                 >
                   <ExternalLink size={12} />
                   <span>Kan du inte se videon? Öppna i YouTube</span>
                 </a>
               </div>
             </div>
           ) : song.audioUrl ? (
             <div className="flex items-center justify-center p-2 bg-surface rounded-lg border border-border">
                <Music className="mr-3 text-accent" />
                <audio controls className="w-full h-10 rounded">
                   <source src={song.audioUrl} type="audio/mpeg" />
                   Din webbläsare stödjer inte ljudspelaren.
                </audio>
             </div>
           ) : null}
        </div>
      )}

      {/* Lyrics */}
      <div className="p-6 max-w-2xl mx-auto">
        <pre 
          className="whitespace-pre-wrap font-sans text-primary leading-relaxed"
          style={{ fontSize: `${fontSize}px` }}
        >
          {song.lyrics}
        </pre>
      </div>

      {/* Footer padding if fullscreen to avoid edge cutoff */}
      {fullscreen && <div className="h-20" />}
    </div>
  );
};

export default SongDetailPage;