
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { SONGS, PRAYERS, ARTICLES, VERSES } from '../data/mockData';
import { ArrowRight, Music, BookOpen, FileText, MessageCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  // Get featured items
  const featuredSong = SONGS.find(s => s.featured);
  const featuredPrayer = PRAYERS.find(p => p.featured);
  const featuredArticle = ARTICLES.find(a => a.featured);
  
  // Combine for "Utvalt" section
  const featuredItems = [
    { type: 'Sång', data: featuredSong, path: `/songs/${featuredSong?.id}`, image: featuredSong?.imageUrl },
    { type: 'Bön', data: featuredPrayer, path: `/prayers/${featuredPrayer?.id}`, image: featuredPrayer?.imageUrl },
    { type: 'Artikel', data: featuredArticle, path: `/articles/${featuredArticle?.id}`, image: featuredArticle?.mainImageUrl },
  ].filter(item => item.data);

  // Daily Word
  const dailyVerse = VERSES.find(v => v.isDailyWord) || VERSES[0];

  // Latest Content logic
  const latestSong = [...SONGS].sort((a,b) => b.createdAt.localeCompare(a.createdAt))[0];
  const latestPrayer = [...PRAYERS].sort((a,b) => b.createdAt.localeCompare(a.createdAt))[0];
  const latestArticle = [...ARTICLES].sort((a,b) => b.createdAt.localeCompare(a.createdAt))[0];

  return (
    <div className="animate-fade-in">
      <Header />
      
      <div className="px-4 py-6 space-y-8">
        
        {/* Utvalt Section - Redesigned with Image Cards */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-primary">Utvalt</h2>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4 snap-x">
            {featuredItems.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className="relative flex-shrink-0 w-72 h-44 rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all snap-center group shadow-md"
              >
                {/* Background Image with Gradient Overlay */}
                {item.image ? (
                  <>
                    <img 
                      src={item.image} 
                      alt={item.data?.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
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

        {/* Dagens Ord */}
        <section>
          <h2 className="text-lg font-bold text-primary mb-3">Dagens ord</h2>
          <div className="bg-surface relative overflow-hidden p-6 rounded-xl border border-white/5 shadow-sm">
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <p className="font-serif italic text-lg leading-relaxed mb-4 text-white relative z-10">
              "{dailyVerse.text}"
            </p>
            <p className="text-sm font-bold text-accent text-right relative z-10">
              {dailyVerse.reference}
            </p>
          </div>
        </section>

        {/* Senaste Innehåll - List with Thumbnails */}
        <section>
          <h2 className="text-lg font-bold text-primary mb-3">Senaste innehåll</h2>
          <div className="space-y-3">
            {[
              { label: 'Senaste artikel', item: latestArticle, path: `/articles/${latestArticle.id}`, image: latestArticle.mainImageUrl },
              { label: 'Senaste bön', item: latestPrayer, path: `/prayers/${latestPrayer.id}`, image: latestPrayer.imageUrl },
              { label: 'Senaste sång', item: latestSong, path: `/songs/${latestSong.id}`, image: latestSong.imageUrl },
            ].map((row, idx) => (
              <Link key={idx} to={row.path} className="flex items-center gap-3 bg-surface p-2.5 rounded-xl border border-white/5 hover:bg-white/5 transition-all group">
                {/* Thumbnail */}
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/5">
                  {row.image ? (
                     <img src={row.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
                
                <div className="pr-2 text-secondary group-hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Verktyg Navigation Grid */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-primary">Verktyg</h2>
            <Link to="/tools" className="text-xs text-accent font-medium hover:text-white transition-colors">Visa alla</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ToolCard to="/songs" title="Sångbank" icon={Music} desc="Hitta sånger" />
            <ToolCard to="/prayers" title="Bön" icon={BookOpen} desc="Meditationer" />
            <ToolCard to="/articles" title="Artiklar" icon={FileText} desc="Läs om tro" />
            <ToolCard to="/chat" title="Fråga om tro" icon={MessageCircle} desc="AI-guide" />
          </div>
        </section>
      </div>
    </div>
  );
};

// Internal Helper
const ToolCard = ({ to, title, icon: Icon, desc }: { to: string, title: string, icon: any, desc: string }) => (
  <Link to={to} className="bg-surface p-4 rounded-xl border border-white/5 flex flex-col items-start hover:bg-white/5 active:scale-[0.98] transition-all">
    <div className="bg-white/5 p-2 rounded-lg mb-3 text-accent group-hover:text-white transition-colors">
      <Icon size={20} />
    </div>
    <h3 className="font-bold text-sm mb-1">{title}</h3>
    <p className="text-xs text-secondary">{desc}</p>
  </Link>
);

export default HomePage;
