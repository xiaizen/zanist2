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
      {/* Zanist Logo - Atomic Book Design from provided image */}
      <div className={`${sizeClasses[size]} ${colorClasses[color]} relative`}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          {/* Open Book Base */}
          <path d="M20 75 L20 30 Q20 25 25 25 L45 25 Q50 30 50 35 L50 70 Q45 75 40 75 L25 75 Q20 75 20 75 Z" 
                fillOpacity="0.9" />
          <path d="M80 75 L80 30 Q80 25 75 25 L55 25 Q50 30 50 35 L50 70 Q55 75 60 75 L75 75 Q80 75 80 75 Z" 
                fillOpacity="0.9" />
          
          {/* Book Spine */}
          <path d="M48 25 L48 75 L52 75 L52 25 Z" fillOpacity="0.3" />
          
          {/* Atomic Structure - Multiple Electron Orbits */}
          {/* Orbit 1 - Horizontal */}
          <ellipse cx="50" cy="50" rx="25" ry="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
          
          {/* Orbit 2 - 60 degrees */}
          <ellipse cx="50" cy="50" rx="25" ry="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" 
                   transform="rotate(60 50 50)"/>
          
          {/* Orbit 3 - 120 degrees */}
          <ellipse cx="50" cy="50" rx="25" ry="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" 
                   transform="rotate(120 50 50)"/>
          
          {/* Central Nucleus */}
          <circle cx="50" cy="50" r="4" fill="currentColor"/>
          
          {/* Lightning/Energy Symbol in Center */}
          <path d="M47 42 L53 42 L49 50 L55 50 L45 62 L51 54 L45 54 L49 46 Z" 
                fill="currentColor" opacity="0.9"/>
          
          {/* Electrons on Orbits */}
          <circle cx="75" cy="50" r="2" fill="currentColor"/>
          <circle cx="25" cy="50" r="2" fill="currentColor"/>
          <circle cx="62" cy="35" r="2" fill="currentColor"/>
          <circle cx="38" cy="65" r="2" fill="currentColor"/>
          <circle cx="62" cy="65" r="2" fill="currentColor"/>
          <circle cx="38" cy="35" r="2" fill="currentColor"/>
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