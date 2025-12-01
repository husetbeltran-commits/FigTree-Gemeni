import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Search } from 'lucide-react';
import { SONGS, PRAYERS, ARTICLES } from '../data/mockData';

type FilterType = 'Alla' | 'Sånger' | 'Böner' | 'Artiklar';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<FilterType>('Alla');

  const getResults = () => {
    if (!query) return [];
    
    const lowerQ = query.toLowerCase();
    
    const songHits = SONGS.filter(s => s.title.toLowerCase().includes(lowerQ) || s.tags.some(t => t.toLowerCase().includes(lowerQ)))
      .map(s => ({ ...s, type: 'Sång', path: `/songs/${s.id}` }));
      
    const prayerHits = PRAYERS.filter(p => p.title.toLowerCase().includes(lowerQ) || p.tags.some(t => t.toLowerCase().includes(lowerQ)))
      .map(p => ({ ...p, type: 'Bön', path: `/prayers/${p.id}` }));
      
    const articleHits = ARTICLES.filter(a => a.title.toLowerCase().includes(lowerQ) || a.tags.some(t => t.toLowerCase().includes(lowerQ)))
      .map(a => ({ ...a, type: 'Artikel', path: `/articles/${a.id}` }));

    let all = [...songHits, ...prayerHits, ...articleHits];

    if (filter === 'Sånger') return songHits;
    if (filter === 'Böner') return prayerHits;
    if (filter === 'Artiklar') return articleHits;

    return all;
  };

  const results = getResults();

  return (
    <div className="animate-fade-in min-h-screen">
      <Header title="Sök" />
      
      <div className="sticky top-14 bg-background z-30 p-4 border-b border-border space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Sök i sånger, böner och artiklar..."
            className="w-full bg-surface border border-border rounded-full pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-accent text-primary placeholder-secondary/50 transition-all"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {(['Alla', 'Sånger', 'Böner', 'Artiklar'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                filter === f 
                  ? 'bg-accent text-white' 
                  : 'bg-surface border border-border text-secondary hover:text-primary hover:bg-hover'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="p-4 space-y-3">
        {results.length > 0 ? (
          results.map((item: any, idx) => (
            <Link key={idx} to={item.path} className="block bg-surface p-4 rounded-lg border border-border hover:border-accent/30 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-bold mb-1 block">
                    {item.type}
                  </span>
                  <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
                </div>
              </div>
            </Link>
          ))
        ) : (
          query && (
            <div className="text-center py-10 text-secondary">
              Inga resultat hittades.
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;