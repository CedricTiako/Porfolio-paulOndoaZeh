import React, { useState, useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  animationType?: 'bounce' | 'rotate' | 'pulse' | 'scale' | 'shake' | 'flip';
  trigger?: 'hover' | 'click' | 'always';
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon: Icon,
  size = 24,
  className = '',
  animationType = 'bounce',
  trigger = 'hover',
}) => {
  const [isAnimating, setIsAnimating] = useState(trigger === 'always');
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger === 'always') {
      setIsAnimating(true);
    }
  }, [trigger]);

  const handleInteraction = () => {
    if (trigger === 'click') {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsAnimating(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsAnimating(false);
    }
  };

  const animationClasses = {
    bounce: isAnimating ? 'animate-elastic-bounce' : '',
    rotate: isAnimating ? 'animate-spin' : '',
    pulse: isAnimating ? 'animate-pulse' : '',
    scale: isAnimating ? 'animate-scale-in' : '',
    shake: isAnimating ? 'animate-magnetic-pull' : '',
    flip: isAnimating ? 'animate-theme-switch' : '',
  };

  return (
    <div
      ref={iconRef}
      className={`inline-flex items-center justify-center transition-all duration-300 ${
        animationClasses[animationType]
      } ${className}`}
      onClick={handleInteraction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon size={size} />
    </div>
  );
};

export default AnimatedIcon;
