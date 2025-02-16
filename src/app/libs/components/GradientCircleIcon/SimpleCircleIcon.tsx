import React from "react";

interface SimpleIconProps {
  size?: number;
  color: string;
}

const SimpleCircleIcon: React.FC<SimpleIconProps> = ({ size = 100, color }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Optional shadow filter */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Circle with solid color and shadow */}
      <circle cx="50" cy="50" r="50" fill={color} filter="url(#shadow)" />
    </svg>
  );
};

export default SimpleCircleIcon;