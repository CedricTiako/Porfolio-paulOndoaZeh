import React, { useState, useEffect, useRef } from 'react';

interface SmoothTransitionProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const SmoothTransition: React.FC<SmoothTransitionProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SmoothTransition;
