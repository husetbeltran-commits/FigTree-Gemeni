import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
        {/* Simple abstract tree icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white w-5 h-5"
        >
          <path d="M12 22v-9" />
          <path d="M12 13a4 4 0 0 0-4-4 4 4 0 0 1-4-4" />
          <path d="M12 13a4 4 0 0 1 4-4 4 4 0 0 0 4-4" />
          <path d="M8 22h8" />
        </svg>
      </div>
      <span className="font-bold text-xl tracking-tight text-white">FigTree</span>
    </div>
  );
};

export default Logo;
