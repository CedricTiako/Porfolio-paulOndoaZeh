import React, { useEffect, useRef, useState } from 'react';

interface SmartAnimationProps {
  children: React.ReactNode;
  type?: 'fadeIn' | 'slideIn' | 'scaleIn' | 'rotateIn' | 'bounceIn' | 'elastic';
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

const SmartAnimation: React.FC<SmartAnimationProps> = ({
  children,
  type = 'fadeIn',
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true);
            if (once) setHasAnimated(true);
          }, delay);
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold, once, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (type) {
        case 'fadeIn':
          return `${baseClasses} ${durationClass} opacity-0`;
        case 'slideIn':
          const slideTransform = {
            up: 'translate-y-8',
            down: '-translate-y-8',
            left: 'translate-x-8',
            right: '-translate-x-8'
          };
          return `${baseClasses} ${durationClass} opacity-0 ${slideTransform[direction]}`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        case 'rotateIn':
          return `${baseClasses} ${durationClass} opacity-0 rotate-12 scale-95`;
        case 'bounceIn':
          return `${baseClasses} ${durationClass} opacity-0 scale-75 -translate-y-4`;
        case 'elastic':
          return `${baseClasses} ${durationClass} opacity-0 scale-50`;
        default:
          return `${baseClasses} ${durationClass} opacity-0`;
      }
    } else {
      switch (type) {
        case 'fadeIn':
          return `${baseClasses} ${durationClass} opacity-100`;
        case 'slideIn':
          return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} opacity-100 scale-100`;
        case 'rotateIn':
          return `${baseClasses} ${durationClass} opacity-100 rotate-0 scale-100`;
        case 'bounceIn':
          return `${baseClasses} ${durationClass} opacity-100 scale-100 translate-y-0`;
        case 'elastic':
          return `${baseClasses} ${durationClass} opacity-100 scale-100`;
        default:
          return `${baseClasses} ${durationClass} opacity-100`;
      }
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: type === 'elastic' ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' :
                                 type === 'bounceIn' ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' :
                                 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
};

// Composant pour les animations en séquence
export const AnimationSequence: React.FC<{
  children: React.ReactNode[];
  stagger?: number;
  type?: SmartAnimationProps['type'];
}> = ({ children, stagger = 100, type = 'fadeIn' }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <SmartAnimation
          type={type}
          delay={index * stagger}
          key={index}
        >
          {child}
        </SmartAnimation>
      ))}
    </>
  );
};

// Hook pour les animations personnalisées
export const useSmartAnimation = (
  trigger: boolean,
  duration: number = 300
) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), duration);
      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);

  return isAnimating;
};

export default SmartAnimation;