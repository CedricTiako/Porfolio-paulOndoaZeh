import React, { useState, useEffect } from 'react';
import { Heart, Star, Zap, Sparkles, ThumbsUp, Award } from 'lucide-react';

interface MicroInteractionProps {
  children: React.ReactNode;
  type?: 'like' | 'star' | 'zap' | 'sparkle' | 'thumbs' | 'award';
  onInteraction?: () => void;
  disabled?: boolean;
}

const MicroInteraction: React.FC<MicroInteractionProps> = ({
  children,
  type = 'like',
  onInteraction,
  disabled = false
}) => {
  const [isActive, setIsActive] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
  }>>([]);
  const [count, setCount] = useState(0);

  const icons = {
    like: Heart,
    star: Star,
    zap: Zap,
    sparkle: Sparkles,
    thumbs: ThumbsUp,
    award: Award
  };

  const colors = {
    like: ['#ff6b6b', '#ff8e8e', '#ffb3b3'],
    star: ['#ffd93d', '#ffed4e', '#fff176'],
    zap: ['#4ecdc4', '#45b7aa', '#26a69a'],
    sparkle: ['#a855f7', '#c084fc', '#d8b4fe'],
    thumbs: ['#22d3ee', '#67e8f9', '#a5f3fc'],
    award: ['#f59e0b', '#fbbf24', '#fcd34d']
  };

  const Icon = icons[type];
  const colorPalette = colors[type];

  const createParticles = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX + (Math.random() - 0.5) * 40,
      y: centerY + (Math.random() - 0.5) * 40,
      color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
      size: Math.random() * 4 + 2
    }));

    setParticles(newParticles);
    
    // Clear particles after animation
    setTimeout(() => setParticles([]), 1000);
  };

  const handleClick = (event: React.MouseEvent) => {
    if (disabled) return;

    setIsActive(!isActive);
    setCount(prev => isActive ? prev - 1 : prev + 1);
    createParticles(event);
    
    if (onInteraction) {
      onInteraction();
    }

    // Add haptic feedback if available
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`relative overflow-hidden transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isActive ? 'text-current' : 'text-gray-400 hover:text-gray-600'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{ color: isActive ? colorPalette[0] : undefined }}
      >
        {children}
        
        {/* Icon overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
        }`}>
          <Icon 
            size={16} 
            className={`${isActive ? 'animate-bounce' : ''}`}
            fill={isActive ? colorPalette[0] : 'none'}
          />
        </div>

        {/* Ripple effect */}
        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isActive ? 'animate-ping opacity-75' : 'opacity-0'
        }`} style={{ backgroundColor: colorPalette[0] + '20' }} />
      </button>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none animate-bounce"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            animation: 'float-away 1s ease-out forwards'
          }}
        />
      ))}

      {/* Counter */}
      {count > 0 && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
          {count}
        </div>
      )}

      <style jsx>{`
        @keyframes float-away {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Composant pour les interactions de groupe
export const InteractionGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center space-x-4 p-2 rounded-xl bg-gray-50 dark:bg-gray-800/50">
      {children}
    </div>
  );
};

export default MicroInteraction;