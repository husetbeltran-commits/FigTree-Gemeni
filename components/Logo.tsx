import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import FigTreeIconSolid from './icons/FigTreeIconSolid';
import FigTreeIconOutline from './icons/FigTreeIconOutline';

const Logo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 flex items-center justify-center">
        {theme === 'light' ? (
          <FigTreeIconSolid className="w-8 h-8 text-[#6A4C7D]" />
        ) : (
          <FigTreeIconOutline className="w-8 h-8 text-white" />
        )}
      </div>
      <span className="font-bold text-xl tracking-tight text-primary transition-colors duration-200">FigTree</span>
    </div>
  );
};

export default Logo;