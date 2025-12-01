import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PRAYERS } from '../data/mockData';
import { ChevronLeft, Search } from 'lucide-react';

const PrayersPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const categories = Array.from(new Set(PRAYERS.flatMap(p => p.categories)));

  const filtered = PRAYERS.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCat ? p.categories.includes(selectedCat) : true;
    return matchSearch && matchCat;
  });

  return (
    <div className="animate-fade-in min-h-screen">
      <Header 
        title="Bön och meditation" 
        backButton={<Link to="/" className="text-secondary"><ChevronLeft /></Link>}
      />
      
      <div className="p-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Sök bön..." 
            className="w-full bg-surface border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-accent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setSelectedCat(null)}
            className={`px-3 py-1 rounded-full text-xs border transition-colors ${!selectedCat ? 'bg-accent border-accent text-white' : 'bg-transparent border-white/20 text-secondary'}`}
          >
            Alla
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat === selectedCat ? null : cat)}
              className={`px-3 py-1 rounded-full text-xs border transition-colors ${cat === selectedCat ? 'bg-accent border-accent text-white' : 'bg-transparent border-white/20 text-secondary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="grid gap-3">
          {filtered.map(prayer => (
            <Link key={prayer.id} to={`/prayers/${prayer.id}`} className="bg-surface p-5 rounded-xl border border-white/5 hover:border-white/20">
              <h3 className="font-bold text-lg mb-2 text-primary">{prayer.title}</h3>
              <p className="text-sm text-secondary mb-3 line-clamp-2 italic font-serif">
                {prayer.body}
              </p>
              <div className="flex gap-2">
                {prayer.categories.map(c => (
                  <span key={c} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-secondary/80">
                    {c}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrayersPage;
