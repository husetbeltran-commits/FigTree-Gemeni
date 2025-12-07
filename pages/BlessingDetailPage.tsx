import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { BLESSINGS } from '../data/mockData';
import { ChevronLeft, Music2, Youtube, Sparkles } from 'lucide-react';
import { isYouTubeEmbedUrl } from '../utils/mediaHelpers';

const BlessingDetailPage: React.FC = () => {
  const { id } = useParams();
  const blessing = BLESSINGS.find(b => b.id === id);

  // Player State
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const hasTracks = blessing?.tracks && blessing.tracks.length > 0;
  const currentTrack = hasTracks ? blessing?.tracks?.[currentTrackIndex] : null;
  const trackUrl = currentTrack?.audioUrl;
  const isYouTubeTrack = trackUrl ? isYouTubeEmbedUrl(trackUrl) : false;

  if (!blessing) return <div className="p-8 text-center text-primary">Välsignelsen hittades inte.</div>;

  return (
    <div className="min-h-screen bg-background animate-fade-in pb-20">
      <Header
        title={blessing.title}
        backButton={<Link to="/blessings" className="text-secondary hover:text-primary transition-colors"><ChevronLeft /></Link>}
        actionButton={<div className="p-2 rounded-lg bg-surface-variant text-accent"><Sparkles size={18} /></div>}
      />

      {blessing.subtitle && (
        <div className="px-6 pt-4 pb-2 max-w-2xl mx-auto text-secondary text-sm leading-relaxed">
          {blessing.subtitle}
        </div>
      )}

      {/* Compact top player reused from prayer flow */}
      {hasTracks && currentTrack && (
        <div className="bg-surface border-b border-border relative z-10 shadow-sm transition-colors">
          <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-secondary">BAKGRUNDSMUSIK</div>
                <p className="text-sm text-primary/90">Tryck på en låt för att öppna spelaren. Tryck igen för att gömma den.</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface text-accent border border-border flex items-center justify-center shrink-0">
                {isYouTubeTrack ? <Youtube size={20} /> : <Music2 size={18} />}
              </div>
            </div>

            {blessing.tracks && blessing.tracks.length > 0 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar mask-gradient-right pb-1">
                {blessing.tracks.map((track, idx) => (
                  <button
                    key={track.id}
                    onClick={() => {
                      if (idx === currentTrackIndex) {
                        setIsPlayerOpen(prev => !prev);
                      } else {
                        setCurrentTrackIndex(idx);
                        setIsPlayerOpen(true);
                      }
                    }}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 border ${
                      currentTrackIndex === idx
                        ? 'bg-accent/10 border-accent/30 text-accent'
                        : 'bg-transparent border-border text-secondary hover:bg-surface-variant'
                    }`}
                  >
                    <span>{idx + 1}. {track.title}</span>
                  </button>
                ))}
              </div>
            )}

            {isPlayerOpen && (
              <div className="rounded-lg border border-border bg-surface-variant/40 overflow-hidden">
                <div className="px-3 py-2 bg-surface border-b border-border text-sm font-medium text-primary truncate">
                  {currentTrack?.title}
                </div>
                {isYouTubeTrack ? (
                  <iframe
                    key={currentTrack?.id}
                    src={trackUrl}
                    width="100%"
                    height="160"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={false}
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full h-40 sm:h-56"
                  />
                ) : (
                  <audio
                    src={trackUrl}
                    className="w-full"
                    controls
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TEXT CONTENT */}
      <div className="p-6 max-w-2xl mx-auto">
        <div className="prose dark:prose-invert prose-lg prose-headings:text-primary prose-p:text-primary">
          <p className="whitespace-pre-wrap font-serif text-xl leading-relaxed">
            {blessing.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlessingDetailPage;
