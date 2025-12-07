import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { SONGS, PRAYERS, ARTICLES } from '../data/mockData';
import { ArrowRight, Music, BookOpen, FileText, RefreshCw, Sparkles } from 'lucide-react';
import { getDailyVerse, getRandomVerse, getBookCategory, generateReflection } from '../utils/bibleHelpers';
import { Article, BibleVerse, Prayer, Song } from '../types';
import { getOrderedContent } from '../utils/dateHelpers';

const FALLBACK_IMAGES = {
  article: 'https://images.unsplash.com/photo-1473181488821-2d23949a045a?q=80&w=800&auto=format&fit=crop',
  prayer: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
  song: 'https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=800&auto=format&fit=crop',
};

const getCoverImage = (item: Article | Prayer | Song | undefined, type: keyof typeof FALLBACK_IMAGES) => {
  if (!item) return FALLBACK_IMAGES[type];

  const candidates = [
    (item as any).imageUrl,
    (item as any).mainImageUrl,
    (item as any).coverImageUrl,
    (item as any).coverImage,
    (item as any).thumbnailUrl,
    (item as any).heroImageUrl,
  ];

  const validCandidate = candidates.find((src) => typeof src === 'string' && src.trim().length > 0);

  return validCandidate || FALLBACK_IMAGES[type];
};

const HomePage: React.FC = () => {
  // --- Data Preparation ---
  const featuredSong = SONGS.find(s => s.featured);
  const featuredPrayer = PRAYERS.find(p => p.featured);
  const featuredArticle = ARTICLES.find(a => a.featured);
  
  // Future: extend with BLESSINGS when we want featured proclamations in "Utvalt".
  const featuredItems = [
    {
      type: 'Sång',
      data: featuredSong,
      path: `/songs/${featuredSong?.id}`,
      image: getCoverImage(featuredSong, 'song'),
    },
    {
      type: 'Bön',
      data: featuredPrayer,
      path: `/prayers/${featuredPrayer?.id}`,
      image: getCoverImage(featuredPrayer, 'prayer'),
    },
    {
      type: 'Artikel',
      data: featuredArticle,
      path: `/articles/${featuredArticle?.id}`,
      image: getCoverImage(featuredArticle, 'article'),
    },
  ].filter(item => item.data);

  // Future: feed BLESSINGS into getOrderedContent once the latest content rail should include dem.
  const { latestSong, latestPrayer, latestArticle } = getOrderedContent(ARTICLES, PRAYERS, SONGS);

  // --- Dagens Ord State ---
  // Initialize with the deterministic daily verse
  const initialVerse = getDailyVerse();
  const [currentVerse, setCurrentVerse] = useState<BibleVerse>(() => initialVerse);
  const [reflection, setReflection] = useState<string>(() => generateReflection(initialVerse));
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [animatedReference, setAnimatedReference] = useState<string | null>(null);
  const [animatedText, setAnimatedText] = useState<string | null>(null);
  const [reflectionAnimationKey, setReflectionAnimationKey] = useState(0);
  const [isReflectionVisible, setIsReflectionVisible] = useState(true);

  const scrambleIntervalRef = useRef<number | null>(null);

  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö';

  function scrambleString(original: string): string {
    return original
      .split('')
      .map((char) => {
        if (char.trim() === '') return char; // keep spaces
        if ('.,:;!?-–()'.includes(char)) return char; // keep punctuation
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join('');
  }

  const handleRandomizeVerse = () => {
    if (isRandomizing) return;

    setIsRandomizing(true);
    setIsReflectionVisible(false);
    const nextVerse = getRandomVerse();

    if (scrambleIntervalRef.current) {
      clearInterval(scrambleIntervalRef.current);
    }

    scrambleIntervalRef.current = window.setInterval(() => {
      setAnimatedReference(scrambleString(nextVerse.reference));
      setAnimatedText(scrambleString(nextVerse.text));
    }, 50);

    setTimeout(() => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
        scrambleIntervalRef.current = null;
      }

      setAnimatedReference(null);
      setAnimatedText(null);
      setCurrentVerse(nextVerse);
      setReflection(generateReflection(nextVerse));
      setIsRandomizing(false);
      setIsReflectionVisible(true);
      setReflectionAnimationKey((prev) => prev + 1);
    }, 700);
  };

  useEffect(() => {
    return () => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="animate-fade-in">
      <Header />
      
      <div className="px-4 py-6 space-y-8">
        
        {/* Utvalt Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-primary">Utvalt</h2>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4 snap-x">
            {featuredItems.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className="relative flex-shrink-0 w-72 h-44 rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all snap-center group shadow-md"
              >
                {/* Background Image with Gradient Overlay */}
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.data?.title}
                      onError={(e) => {
                        const fallback = item.type === 'Artikel'
                          ? FALLBACK_IMAGES.article
                          : item.type === 'Bön'
                            ? FALLBACK_IMAGES.prayer
                            : FALLBACK_IMAGES.song;

                        if (e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-surface bg-gradient-to-br from-surface to-accent/20" />
                )}

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1 px-2 py-0.5 bg-background/80 backdrop-blur rounded-full w-fit">
                    {item.type}
                  </span>
                  <h3 className="font-bold text-lg leading-tight text-white mb-1 shadow-black drop-shadow-md">
                    {item.data?.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-1 opacity-90">
                     {(item.data as any).body?.substring(0, 50) || (item.data as any).lyrics?.substring(0, 50)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Dagens Ord - New Interactive Card */}
        <section>
          <div className={`bg-surface relative overflow-hidden rounded-xl border border-border shadow-sm transition-all duration-500 ${isRandomizing ? 'opacity-80 scale-[0.99]' : 'opacity-100 scale-100'}`}>
            
            {/* Header / Title */}
            <div className="p-5 pb-0">
               <h2 className="text-lg font-bold text-primary mb-1">Dagens ord</h2>
            </div>

            {/* Content Container */}
            <div className="p-6 pt-4 space-y-6">
              
              {/* Verse & Reference */}
              <div>
                <p className="font-serif italic text-lg leading-relaxed text-primary text-center mb-3">
                  "{isRandomizing && animatedText ? animatedText : currentVerse.text}"
                </p>
                <div className="flex justify-end">
                   <p className="text-sm font-bold text-accent">
                     {isRandomizing && animatedReference ? animatedReference : currentVerse.reference}
                   </p>
                </div>
              </div>

              {/* Source Line */}
              <div className="border-t border-border pt-4">
                 <p className="text-[10px] font-bold text-secondary uppercase tracking-widest text-center">
                   Vår vers kommer från: {getBookCategory(currentVerse.reference)}
                 </p>
              </div>

              {/* Reflection */}
              <div
                key={reflectionAnimationKey}
                className={`bg-surface-variant/50 p-4 rounded-lg border border-border/50 animated-reflection ${isReflectionVisible ? 'reflection-visible' : 'reflection-hidden'}`}
              >
                 <div className="flex items-center gap-2 mb-2">
                   <Sparkles size={12} className="text-accent" />
                   <span className="text-xs font-bold text-primary">Reflektion</span>
                 </div>
                 <p className="text-sm text-secondary leading-relaxed">
                   {reflection}
                 </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleRandomizeVerse}
                disabled={isRandomizing}
                className="w-full bg-accent hover:bg-accent-hover active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <RefreshCw size={18} className={isRandomizing ? 'animate-spin' : ''} />
                <span>{isRandomizing ? 'Slumpar...' : 'Slumpa en vers'}</span>
              </button>

            </div>
          </div>
        </section>

        {/* Senaste Innehåll */}
        <section>
          <h2 className="text-lg font-bold text-primary mb-3">Senaste innehåll</h2>
          <div className="space-y-3">
            {[
              { label: 'Senaste artikel', item: latestArticle, path: `/articles/${latestArticle.id}` },
              { label: 'Senaste bön', item: latestPrayer, path: `/prayers/${latestPrayer.id}` },
              { label: 'Senaste sång', item: latestSong, path: `/songs/${latestSong.id}` },
            ].map((row, idx) => {
              const image = getCoverImage(
                row.item as Article | Prayer | Song | undefined,
                row.label.includes('artikel') ? 'article' : row.label.includes('bön') ? 'prayer' : 'song'
              );

              return (
                <Link key={idx} to={row.path} className="flex items-center gap-3 bg-surface p-2.5 rounded-xl border border-border hover:bg-hover transition-all group">
                  {/* Thumbnail */}
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface-variant border border-border">
                    {image ? (
                      <img
                        src={image}
                        alt={`${row.label} – ${row.item.title}`}
                        onError={(e) => {
                          // Ensures broken image URLs gracefully fall back per content type
                          const fallback = row.label.includes('artikel')
                            ? FALLBACK_IMAGES.article
                            : row.label.includes('bön')
                              ? FALLBACK_IMAGES.prayer
                              : FALLBACK_IMAGES.song;

                          if (e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-secondary">
                        <FileText size={20} />
                      </div>
                    )}
                  </div>
                
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-accent font-bold uppercase tracking-wider block mb-0.5">{row.label}</span>
                  <h4 className="font-medium text-primary truncate leading-tight">{row.item.title}</h4>
                </div>
                
                <div className="pr-2 text-secondary group-hover:text-primary transition-colors">
                  <ArrowRight size={16} />
                </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Verktyg Navigation Grid */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-primary">Verktyg</h2>
            <Link to="/tools" className="text-xs text-accent font-medium hover:text-primary transition-colors">Visa alla</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ToolCard to="/songs" title="Sångbank" icon={Music} desc="Hitta sånger" />
            <ToolCard to="/prayers" title="Bön" icon={BookOpen} desc="Meditationer" />
            <ToolCard to="/blessings" title="Tala välsignelser" icon={Sparkles} desc="Guds kraft i ditt liv" />
            <ToolCard to="/articles" title="Artiklar" icon={FileText} desc="Läs om tro" />
          </div>
        </section>
      </div>
    </div>
  );
};

// Internal Helper
const ToolCard = ({ to, title, icon: Icon, desc }: { to: string, title: string, icon: any, desc: string }) => (
  <Link to={to} className="bg-surface p-4 rounded-xl border border-border flex flex-col items-start hover:bg-hover active:scale-[0.98] transition-all group">
    <div className="bg-surface-variant p-2 rounded-lg mb-3 text-accent group-hover:text-primary transition-colors">
      <Icon size={20} />
    </div>
    <h3 className="font-bold text-sm mb-1 text-primary">{title}</h3>
    <p className="text-xs text-secondary">{desc}</p>
  </Link>
);

export default HomePage;