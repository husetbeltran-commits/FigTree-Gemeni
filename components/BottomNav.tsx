import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import FigTreeIconSolid from './icons/FigTreeIconSolid';
import FigTreeIconOutline from './icons/FigTreeIconOutline';

const BottomNav: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { 
      label: 'Hem', 
      path: '/', 
      // Dynamically select icon based on theme
      Icon: theme === 'light' ? FigTreeIconSolid : FigTreeIconOutline 
    },
    { label: 'Verktyg', path: '/tools', Icon: Grid },
    { label: 'Sök', path: '/search', Icon: Search },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border pb-safe pt-2 px-6 z-50 h-16 flex items-center justify-between shadow-lg transition-colors duration-200">
      
      {/* Navigation Items */}
      <div className="flex items-center justify-around flex-1 mr-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-colors duration-200 ${
                isActive ? 'text-accent' : 'text-secondary hover:text-primary'
              }`
            }
          >
            <item.Icon className="w-6 h-6" strokeWidth={2} />
            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* Theme Toggle */}
      <div className="pl-4 border-l border-border">
        <button
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Byt till mörkt läge' : 'Byt till ljust läge'}
          className="flex flex-col items-center gap-1 text-secondary hover:text-accent transition-colors duration-200"
        >
          {theme === 'light' ? (
            <>
              <Moon size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium tracking-wide">Mörkt</span>
            </>
          ) : (
            <>
              <Sun size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium tracking-wide">Ljust</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;