import React from 'react';
import Logo from './Logo';

interface HeaderProps {
  title?: string;
  backButton?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, backButton }) => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border px-4 h-14 flex items-center justify-between transition-colors duration-200">
      <div className="flex items-center gap-3 text-primary">
        {backButton}
        {title ? <h1 className="text-lg font-semibold">{title}</h1> : <Logo />}
      </div>
      {/* Menu removed completely */}
    </header>
  );
};

export default Header;