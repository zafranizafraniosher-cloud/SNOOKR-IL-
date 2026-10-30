import React from 'react';

interface RobloxIconProps {
  className?: string;
  size?: number;
}

export const RobloxIcon: React.FC<RobloxIconProps> = ({ className = "w-6 h-6", size }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Official Roblox tilted chevrons/square logo */}
      <path d="M5.165 0 0 19.324 18.834 24 24 4.676 5.165 0Zm9.37 14.59-4.993-1.24.966-3.882 4.993 1.24-.966 3.882Z" />
    </svg>
  );
};
