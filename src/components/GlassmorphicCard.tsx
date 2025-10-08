import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  enableTilt?: boolean;
  enableGlow?: boolean;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className = '',
  intensity = 'medium',
  enableTilt = true,
  enableGlow = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  const intensityStyles = {
    light: {
      background: isDark
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(255, 255, 255, 0.7)',
      blur: '10px',
      border: isDark
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(255, 255, 255, 0.3)',
    },
    medium: {
      background: isDark
        ? 'rgba(255, 255, 255, 0.08)'
        : 'rgba(255, 255, 255, 0.5)',
      blur: '20px',
      border: isDark
        ? 'rgba(255, 255, 255, 0.15)'
        : 'rgba(255, 255, 255, 0.2)',
    },
    strong: {
      background: isDark
        ? 'rgba(255, 255, 255, 0.12)'
        : 'rgba(255, 255, 255, 0.3)',
      blur: '30px',
      border: isDark
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(255, 255, 255, 0.15)',
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const style = intensityStyles[intensity];

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${className}`}
      style={{
        background: style.background,
        backdropFilter: `blur(${style.blur})`,
        WebkitBackdropFilter: `blur(${style.blur})`,
        border: `1px solid ${style.border}`,
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : 'none',
        boxShadow: enableGlow
          ? isDark
            ? '0 25px 50px -12px rgba(139, 92, 246, 0.4), 0 8px 16px -8px rgba(59, 130, 246, 0.3)'
            : '0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 8px 16px -8px rgba(59, 130, 246, 0.2)'
          : 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {enableGlow && (
        <>
          <div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              transform: `translateX(${tilt.y * 5}px)`,
            }}
          />
          <div
            className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 transition-opacity duration-500"
            style={{
              opacity: Math.abs(tilt.x) + Math.abs(tilt.y) > 0 ? 0.5 : 0,
            }}
          />
        </>
      )}

      <div className="relative z-10">{children}</div>

      <div
        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          transform: `translate(${tilt.y * 2}px, ${tilt.x * 2}px)`,
        }}
      />
    </div>
  );
};

export default GlassmorphicCard;
