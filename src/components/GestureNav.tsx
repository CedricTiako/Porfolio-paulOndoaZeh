import React, { useState, useRef } from 'react';
import { useHapticFeedback } from '../hooks/useHapticFeedback';

interface GestureNavProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onLongPress?: () => void;
  children: React.ReactNode;
  className?: string;
}

const GestureNav: React.FC<GestureNavProps> = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onLongPress,
  children,
  className = '',
}) => {
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const { trigger } = useHapticFeedback();

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
    setTouchEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });

    if (onLongPress) {
      longPressTimer.current = setTimeout(() => {
        trigger('heavy');
        onLongPress();
      }, 500);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });

    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }

    const deltaX = touchEnd.x - touchStart.x;
    const deltaY = touchEnd.y - touchStart.y;

    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
    const isVerticalSwipe = Math.abs(deltaY) > Math.abs(deltaX);

    if (isHorizontalSwipe && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0 && onSwipeRight) {
        trigger('light');
        onSwipeRight();
      } else if (deltaX < 0 && onSwipeLeft) {
        trigger('light');
        onSwipeLeft();
      }
    }

    if (isVerticalSwipe && Math.abs(deltaY) > minSwipeDistance) {
      if (deltaY > 0 && onSwipeDown) {
        trigger('light');
        onSwipeDown();
      } else if (deltaY < 0 && onSwipeUp) {
        trigger('light');
        onSwipeUp();
      }
    }
  };

  return (
    <div
      className={className}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default GestureNav;
