import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, Search } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navItems = [
    { label: 'Hem', path: '/', icon: Home },
    { label: 'Verktyg', path: '/tools', icon: Grid },
    { label: 'Sök', path: '/search', icon: Search },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-white/5 pb-safe pt-2 px-6 z-50 h-16 flex items-center justify-around shadow-lg">
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
          <item.icon size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
