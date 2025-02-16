import React from "react";

interface IconProps {
  size?: number;
  colors: string[];
}

const GradientCircleIcon: React.FC<IconProps> = ({ size = 100, colors }) => {
  const getGradientId = (index: number) => `grad-${index}-${colors.join("-")}`;

  const getGradientStops = (color: string) => (
    <>
      <stop offset="30%" stopColor={lighten(color, 0.6)} />
      <stop offset="100%" stopColor={darken(color, 0.6)} />
    </>
  );

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        {/* Define shadow filter */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.4" />
        </filter>

        {/* Define gradients for each section */}
        {colors.length === 1 && (
          <radialGradient id={getGradientId(0)} cx="50%" cy="50%" r="50%">
            {getGradientStops(colors[0])}
          </radialGradient>
        )}

        {colors.length === 2 && (
          <>
            <linearGradient id={getGradientId(0)} x1="0%" y1="50%" x2="100%" y2="50%">
              {getGradientStops(colors[0])}
            </linearGradient>
            <linearGradient id={getGradientId(1)} x1="0%" y1="50%" x2="100%" y2="50%">
              {getGradientStops(colors[1])}
            </linearGradient>
          </>
        )}

        {colors.length === 4 && (
          <>
            <linearGradient id={getGradientId(0)} x1="0%" y1="0%" x2="100%" y2="100%">
              {getGradientStops(colors[0])}
            </linearGradient>
            <linearGradient id={getGradientId(1)} x1="100%" y1="0%" x2="0%" y2="100%">
              {getGradientStops(colors[1])}
            </linearGradient>
            <linearGradient id={getGradientId(2)} x1="0%" y1="100%" x2="100%" y2="0%">
              {getGradientStops(colors[2])}
            </linearGradient>
            <linearGradient id={getGradientId(3)} x1="100%" y1="100%" x2="0%" y2="0%">
              {getGradientStops(colors[3])}
            </linearGradient>
          </>
        )}
      </defs>

      {/* Render the circle with different styles based on color count */}
      <g filter="url(#shadow)">
        {colors.length === 1 && (
          <circle cx="50" cy="50" r="50" fill={`url(#${getGradientId(0)})`} />
        )}

        {colors.length === 2 && (
          <>
            <rect x="0" y="0" width="50" height="100" fill={`url(#${getGradientId(0)})`} />
            <rect x="50" y="0" width="50" height="100" fill={`url(#${getGradientId(1)})`} />
            <circle cx="50" cy="50" r="50" fill="none" stroke="black" strokeWidth="1" />
          </>
        )}

        {colors.length === 4 && (
          <>
            <path d="M 50 0 A 50 50 0 0 1 100 50 L 50 50 Z" fill={`url(#${getGradientId(0)})`} />
            <path d="M 100 50 A 50 50 0 0 1 50 100 L 50 50 Z" fill={`url(#${getGradientId(1)})`} />
            <path d="M 50 100 A 50 50 0 0 1 0 50 L 50 50 Z" fill={`url(#${getGradientId(2)})`} />
            <path d="M 0 50 A 50 50 0 0 1 50 0 L 50 50 Z" fill={`url(#${getGradientId(3)})`} />
            <circle cx="50" cy="50" r="50" fill="none" stroke="black" strokeWidth="1" />
          </>
        )}
      </g>
    </svg>
  );
};

// Utility functions for adjusting brightness
const lighten = (color: string, percent: number) => {
  return adjustColor(color, percent);
};

const darken = (color: string, percent: number) => {
  return adjustColor(color, -percent);
};

const adjustColor = (color: string, percent: number) => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(255 * percent);
  const r = Math.min(255, Math.max(0, (num >> 16) + amt));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return `rgb(${r},${g},${b})`;
};

export default GradientCircleIcon;
