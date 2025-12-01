import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { PRAYERS } from '../data/mockData';
import { ChevronLeft, Play, Pause, Repeat, Music2, Volume2 } from 'lucide-react';

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

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

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
        <div className="bg-surface border-b border-border relative z-10 shadow-sm sticky top-14 transition-colors">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              
              {/* Vänster: Spårinfo */}
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-full bg-surface-variant flex items-center justify-center text-accent shrink-0 border border-border">
                  <Music2 size={18} />
                </div>
                <div className="min-w-0 flex flex-col justify-center">
                  <span className="text-[10px] text-accent font-bold uppercase tracking-wider leading-none mb-1">
                    Ljudmiljö
                  </span>
                  <span className="text-sm font-medium text-primary truncate leading-none">
                    {currentTrack.title}
                  </span>
                </div>
              </div>

              {/* Höger: Kontroller */}
              <div className="flex items-center gap-3 shrink-0">
                 {/* Repeat Button */}
                 <button 
                    onClick={toggleRepeat}
                    className={`p-2 transition-colors relative ${repeatMode !== 'none' ? 'text-accent' : 'text-secondary/50 hover:text-secondary'}`}
                    title="Repetera"
                  >
                    <Repeat size={18} />
                    {repeatMode === 'one' && (
                      <span className="absolute top-1 right-0.5 text-[8px] font-bold">1</span>
                    )}
                  </button>

                 {/* Play/Pause Button */}
                 <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-accent hover:bg-accent-hover text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95"
                >
                  {isPlaying ? (
                    <Pause size={18} fill="currentColor" />
                  ) : (
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  )}
                 </button>
              </div>
            </div>

            {/* Spellista (Visas bara om det finns fler spår) */}
            {prayer.tracks.length > 1 && (
              <div className="mt-3 pt-2 border-t border-border flex gap-2 overflow-x-auto no-scrollbar mask-gradient-right">
                {prayer.tracks.map((track, idx) => (
                  <button
                    key={track.id}
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      setIsPlaying(true);
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
            
            {/* Hidden Audio Element */}
            <audio 
              ref={audioRef}
              src={currentTrack.audioUrl}
              onEnded={handleTrackEnd}
            />
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