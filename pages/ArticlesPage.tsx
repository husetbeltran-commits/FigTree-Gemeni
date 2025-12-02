import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ARTICLES } from '../data/mockData';
import { ChevronLeft, Search, Pin } from 'lucide-react';
import { compareByCreatedAtDesc } from '../utils/dateHelpers';

const ArticlesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  
  // Sort: Pinned first, then by date desc
  const sortedArticles = [...ARTICLES].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return compareByCreatedAtDesc(a, b);
  });

  const filtered = sortedArticles.filter(a => 
    a.title.toLowerCase().includes(search.toLowerCase()) || 
    a.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="animate-fade-in min-h-screen">
      <Header 
        title="Artiklar" 
        backButton={<Link to="/" className="text-secondary hover:text-primary"><ChevronLeft /></Link>}
      />
      
      <div className="p-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Sök artikel..." 
            className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-accent text-primary placeholder-secondary/50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* List */}
        <div className="space-y-4">
          {filtered.map(article => (
            <Link key={article.id} to={`/articles/${article.id}`} className="block group">
              <div className="bg-surface rounded-xl overflow-hidden border border-border hover:border-accent/30 transition-all shadow-sm">
                {article.mainImageUrl && (
                  <div className="h-40 w-full overflow-hidden">
                    <img 
                      src={article.mainImageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {article.pinned && <Pin size={12} className="text-accent rotate-45" />}
                    <span className="text-[10px] uppercase tracking-wider text-secondary font-medium">
                      {article.categories[0]}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-primary mb-2 leading-tight">{article.title}</h3>
                  <p className="text-sm text-secondary line-clamp-3 leading-relaxed">
                     {/* Naive excerpt */}
                     {article.body.substring(0, 120).replace(/#/g, '')}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;