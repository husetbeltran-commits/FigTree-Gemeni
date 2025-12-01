import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const FigTreeIconOutline: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      {...props}
    >
      {/* 
        Outline Fig Leaf Shape with Veins
        Three rounded lobes.
      */}
      
      {/* Outer Contour */}
      <path d="M12 18.5C16.5 18.5 20.5 14.5 20 10C19.5 7 17 6.5 15.5 8C15 4 12.5 2 12 2C11.5 2 9 4 8.5 8C7 6.5 4.5 7 4 10C3.5 14.5 7.5 18.5 12 18.5Z" />
      
      {/* Stem */}
      <path d="M12 18.5V22" />

      {/* Veins */}
      <path d="M12 18.5V8" />     {/* Center Vein */}
      <path d="M12 14L8 10" />     {/* Left Vein */}
      <path d="M12 14L16 10" />    {/* Right Vein */}
    </svg>
  );
};

export default FigTreeIconOutline;