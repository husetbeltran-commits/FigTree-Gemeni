import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { PRAYERS } from '../data/mockData';
import { ChevronLeft, Music2, Youtube } from 'lucide-react';
import { isYouTubeEmbedUrl } from '../utils/mediaHelpers';

const PrayerDetailPage: React.FC = () => {
  const { id } = useParams();
  const prayer = PRAYERS.find(p => p.id === id);

  // Player State
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const hasTracks = prayer?.tracks && prayer.tracks.length > 0;
  const currentTrack = hasTracks ? prayer?.tracks[currentTrackIndex] : null;
  const trackUrl = currentTrack?.audioUrl;
  const isYouTubeTrack = trackUrl ? isYouTubeEmbedUrl(trackUrl) : false;

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
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-secondary">BAKGRUNDSMUSIK</div>
                <p className="text-sm text-primary/90">Tryck på en låt för att öppna spelaren. Tryck igen för att gömma den.</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface text-accent border border-border flex items-center justify-center shrink-0">
                {isYouTubeTrack ? <Youtube size={20} /> : <Music2 size={18} />}
              </div>
            </div>

            {prayer.tracks.length > 0 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar mask-gradient-right pb-1">
                {prayer.tracks.map((track, idx) => (
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
                  {currentTrack.title}
                </div>
                {isYouTubeTrack ? (
                  <iframe
                    key={currentTrack.id}
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
            {prayer.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrayerDetailPage;
