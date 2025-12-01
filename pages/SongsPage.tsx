import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { SONGS } from '../data/mockData';
import { ChevronLeft, Search } from 'lucide-react';

const SongsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  // Extract all unique categories
  const categories = Array.from(new Set(SONGS.flatMap(s => s.categories)));

  const filteredSongs = SONGS.filter(song => {
    const matchSearch = song.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCat ? song.categories.includes(selectedCat) : true;
    return matchSearch && matchCat;
  }).sort((a, b) => a.title.localeCompare(b.title)); // Alphabetical sort

  return (
    <div className="animate-fade-in min-h-screen">
      <Header 
        title="Sångbank" 
        backButton={
          <Link to="/" className="text-secondary hover:text-primary"><ChevronLeft /></Link>
        }
      />
      
      <div className="p-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Sök sång..." 
            className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-accent text-primary placeholder-secondary/50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setSelectedCat(null)}
            className={`px-3 py-1 rounded-full text-xs border transition-colors ${!selectedCat ? 'bg-accent border-accent text-white' : 'bg-transparent border-border text-secondary'}`}
          >
            Alla
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat === selectedCat ? null : cat)}
              className={`px-3 py-1 rounded-full text-xs border transition-colors ${cat === selectedCat ? 'bg-accent border-accent text-white' : 'bg-transparent border-border text-secondary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="grid gap-3">
          {filteredSongs.map(song => (
            <Link key={song.id} to={`/songs/${song.id}`} className="bg-surface p-4 rounded-xl border border-border hover:border-accent/30 flex flex-col transition-colors">
              <h3 className="font-bold text-lg mb-1 text-primary">{song.title}</h3>
              <div className="flex gap-2">
                {song.categories.map(c => (
                  <span key={c} className="text-[10px] bg-surface-variant px-2 py-0.5 rounded text-secondary">
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

export default SongsPage;