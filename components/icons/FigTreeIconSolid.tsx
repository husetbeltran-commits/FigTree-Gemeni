import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const FigTreeIconSolid: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      {...props}
    >
      {/* 
        Solid Fig Leaf Shape 
        Three rounded lobes with a small stem.
      */}
      <path d="M12 20.5C12.5 20.5 13 22 13 22H11C11 22 11.5 20.5 12 20.5ZM12 18.5C16.5 18.5 20.5 14.5 20 10C19.5 7 17 6.5 15.5 8C15 4 12.5 2 12 2C11.5 2 9 4 8.5 8C7 6.5 4.5 7 4 10C3.5 14.5 7.5 18.5 12 18.5Z" />
    </svg>
  );
};

export default FigTreeIconSolid;