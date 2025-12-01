import React from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  title?: string;
  backButton?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, backButton }) => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/5 px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {backButton}
        {title ? <h1 className="text-lg font-semibold">{title}</h1> : <Logo />}
      </div>
      {/* Optional menu placeholder - could link to About page later */}
      {!title && (
        <button className="text-secondary hover:text-primary transition-colors">
          <Menu size={24} />
        </button>
      )}
    </header>
  );
};

export default Header;
