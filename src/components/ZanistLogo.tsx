import React from 'react';

interface ZanistLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white' | 'red' | 'dark';
  showText?: boolean;
}

const ZanistLogo: React.FC<ZanistLogoProps> = ({ 
  className = '', 
  size = 'md', 
  color = 'red',
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const colorClasses = {
    white: 'text-white',
    red: 'text-red-600',
    dark: 'text-gray-800'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Zanist Logo - Recreated from provided image */}
      <div className={`${sizeClasses[size]} ${colorClasses[color]} relative`}>
        <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
          {/* Open Book at Bottom */}
          <g transform="translate(0, 45)">
            {/* Left page */}
            <path d="M25 35 C25 30, 30 25, 35 25 L55 25 C58 25, 60 27, 60 30 L60 65 C60 68, 58 70, 55 70 L35 70 C30 70, 25 65, 25 60 Z" 
                  fill="currentColor" fillOpacity="0.8" stroke="currentColor" strokeWidth="1"/>
            
            {/* Right page */}
            <path d="M95 35 C95 30, 90 25, 85 25 L65 25 C62 25, 60 27, 60 30 L60 65 C60 68, 62 70, 65 70 L85 70 C90 70, 95 65, 95 60 Z" 
                  fill="currentColor" fillOpacity="0.8" stroke="currentColor" strokeWidth="1"/>
            
            {/* Book spine/binding */}
            <rect x="58" y="25" width="4" height="45" fill="currentColor" fillOpacity="0.6"/>
            
            {/* Book pages lines */}
            <line x1="30" y1="35" x2="55" y2="35" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            <line x1="30" y1="40" x2="55" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            <line x1="30" y1="45" x2="55" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            <line x1="65" y1="35" x2="90" y2="35" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            <line x1="65" y1="40" x2="90" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            <line x1="65" y1="45" x2="90" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
          </g>
          
          {/* Atomic Structure Above Book */}
          <g transform="translate(0, -10)">
            {/* Electron Orbit 1 - Horizontal ellipse */}
            <ellipse cx="60" cy="50" rx="30" ry="10" 
                     fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.9"/>
            
            {/* Electron Orbit 2 - Tilted left */}
            <ellipse cx="60" cy="50" rx="30" ry="10" 
                     fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.9"
                     transform="rotate(-60 60 50)"/>
            
            {/* Electron Orbit 3 - Tilted right */}
            <ellipse cx="60" cy="50" rx="30" ry="10" 
                     fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.9"
                     transform="rotate(60 60 50)"/>
            
            {/* Central Nucleus */}
            <circle cx="60" cy="50" r="5" fill="currentColor"/>
            
            {/* Lightning Bolt in Center */}
            <path d="M56 42 L64 42 L59 50 L66 50 L54 62 L61 54 L54 54 L59 46 Z" 
                  fill="currentColor" opacity="1"/>
            
            {/* Electrons on orbits */}
            <circle cx="90" cy="50" r="2.5" fill="currentColor"/>
            <circle cx="30" cy="50" r="2.5" fill="currentColor"/>
            <circle cx="75" cy="32" r="2.5" fill="currentColor"/>
            <circle cx="45" cy="68" r="2.5" fill="currentColor"/>
            <circle cx="75" cy="68" r="2.5" fill="currentColor"/>
            <circle cx="45" cy="32" r="2.5" fill="currentColor"/>
          </g>
        </svg>
      </div>
      
      {showText && (
        <span className={`font-bold ${textSizes[size]} ${colorClasses[color]}`}>
          Zanist
        </span>
      )}
    </div>
  );
};

export default ZanistLogo;