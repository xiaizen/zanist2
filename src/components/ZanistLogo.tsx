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
      {/* Custom Zanist Logo - Atomic Book Design */}
      <div className={`${sizeClasses[size]} ${colorClasses[color]} relative`}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          {/* Open Book Base */}
          <path d="M15 75 L15 25 Q15 20 20 20 L45 20 Q50 25 50 30 L50 70 Q45 75 40 75 L20 75 Q15 75 15 75 Z" />
          <path d="M85 75 L85 25 Q85 20 80 20 L55 20 Q50 25 50 30 L50 70 Q55 75 60 75 L80 75 Q85 75 85 75 Z" />
          
          {/* Book Pages */}
          <line x1="20" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <line x1="20" y1="35" x2="45" y2="35" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <line x1="20" y1="40" x2="45" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <line x1="55" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <line x1="55" y1="35" x2="80" y2="35" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <line x1="55" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          
          {/* Atomic Structure */}
          {/* Central Nucleus */}
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
          
          {/* Electron Orbits */}
          <ellipse cx="50" cy="50" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
          <ellipse cx="50" cy="50" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="50" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" transform="rotate(120 50 50)"/>
          
          {/* Electrons */}
          <circle cx="70" cy="50" r="1.5" fill="currentColor"/>
          <circle cx="35" cy="44" r="1.5" fill="currentColor"/>
          <circle cx="65" cy="56" r="1.5" fill="currentColor"/>
          
          {/* Energy/Lightning Symbol in Center */}
          <path d="M48 45 L52 45 L49 50 L53 50 L47 58 L51 52 L47 52 L50 47 Z" fill="currentColor" opacity="0.9"/>
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