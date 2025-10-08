import React, { useState, useRef, useEffect } from 'react';
import { useHapticFeedback } from '../hooks/useHapticFeedback';

interface AdvancedMicroInteractionsProps {
  children: React.ReactNode;
  type?: 'button' | 'card' | 'link';
  hapticType?: 'light' | 'medium' | 'heavy' | 'selection';
  enableRipple?: boolean;
  enableMagnetic?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const AdvancedMicroInteractions: React.FC<AdvancedMicroInteractionsProps> = ({
  children,
  type = 'button',
  hapticType = 'light',
  enableRipple = true,
  enableMagnetic = true,
  className = '',
  onClick,
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const { trigger } = useHapticFeedback();

  const handleClick = (e: React.MouseEvent) => {
    trigger(hapticType);

    if (enableRipple) {
      const rect = elementRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        setRipples((prev) => [...prev, { x, y, id }]);

        setTimeout(() => {
          setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
        }, 600);
      }
    }

    onClick?.(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!enableMagnetic || !elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / 8;
    const deltaY = (e.clientY - centerY) / 8;

    setMagneticOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  const baseClasses = {
    button: 'cursor-pointer select-none',
    card: 'cursor-pointer',
    link: 'cursor-pointer',
  };

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden transition-all duration-300 ${baseClasses[type]} ${className}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`,
      }}
    >
      {children}

      {enableRipple &&
        ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple-effect"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 10,
              height: 10,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
    </div>
  );
};

export default AdvancedMicroInteractions;
