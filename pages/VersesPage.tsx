import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { VERSES } from '../data/mockData';
import { ChevronLeft, RefreshCw, Quote } from 'lucide-react';
import { BibleVerse } from '../types';

const REFLECTIONS = [
  "Låt dessa ord sjunka in i ditt hjärta idag. Gud ser dig.",
  "Detta är ett löfte att hålla fast vid när stormen blåser.",
  "En påminnelse om att du aldrig vandrar ensam.",
  "Guds trofasthet varar från evighet till evighet.",
  "Ta en stund i tystnad och begrunda vad detta betyder för dig just nu."
];

const VersesPage: React.FC = () => {
  const [currentVerse, setCurrentVerse] = useState<BibleVerse | null>(null);
  const [currentReflection, setCurrentReflection] = useState<string>('');

  const pickRandom = () => {
    const randomV = VERSES[Math.floor(Math.random() * VERSES.length)];
    const randomR = REFLECTIONS[Math.floor(Math.random() * REFLECTIONS.length)];
    setCurrentVerse(randomV);
    setCurrentReflection(randomR);
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in flex flex-col">
      <Header 
        title="Slumpa en vers" 
        backButton={<Link to="/tools" className="text-secondary"><ChevronLeft /></Link>}
      />

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto w-full">
        
        {!currentVerse ? (
          <div className="space-y-8 animate-fade-in">
            <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto text-accent mb-6 border border-white/5">
              <RefreshCw size={40} />
            </div>
            <h2 className="text-2xl font-bold text-primary">Behöver du ett ord på vägen?</h2>
            <p className="text-secondary leading-relaxed">
              Klicka nedan för att få en slumpad bibelvers att reflektera över. 
              Slumpen är bara ett verktyg – låt orden leda dig till eftertanke.
            </p>
            <button 
              onClick={pickRandom}
              className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-accent-hover transition-transform active:scale-95 w-full"
            >
              Slumpa en vers
            </button>
          </div>
        ) : (
          <div className="space-y-8 w-full animate-fade-in">
            <Quote size={32} className="text-accent/50 mx-auto" />
            
            <div className="space-y-4">
              <h3 className="text-3xl font-serif font-medium leading-snug text-white">
                "{currentVerse.text}"
              </h3>
              <p className="text-accent font-bold uppercase tracking-widest text-sm">
                {currentVerse.reference}
              </p>
            </div>

            <div className="bg-surface/50 p-6 rounded-xl border border-white/5">
              <p className="text-secondary italic text-sm">
                Reflektion: {currentReflection}
              </p>
            </div>

            <button 
              onClick={pickRandom}
              className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors mx-auto mt-8 py-4"
            >
              <RefreshCw size={16} />
              <span>Ny vers</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VersesPage;
