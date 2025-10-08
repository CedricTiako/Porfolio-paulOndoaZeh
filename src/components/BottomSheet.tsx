import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useHapticFeedback } from '../hooks/useHapticFeedback';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  snapPoints?: number[];
  enableSwipe?: boolean;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
  snapPoints = [0.4, 0.7, 0.95],
  enableSwipe = true,
}) => {
  const [currentSnap, setCurrentSnap] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const sheetRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();
  const { trigger } = useHapticFeedback();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enableSwipe) return;
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !enableSwipe) return;
    const deltaY = e.touches[0].clientY - startY;
    if (deltaY > 0) {
      setCurrentY(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || !enableSwipe) return;
    setIsDragging(false);

    const deltaY = currentY - startY;
    const threshold = 50;

    if (deltaY > threshold) {
      if (currentSnap > 0) {
        setCurrentSnap(currentSnap - 1);
        trigger('selection');
      } else {
        onClose();
        trigger('light');
      }
    } else if (deltaY < -threshold) {
      if (currentSnap < snapPoints.length - 1) {
        setCurrentSnap(currentSnap + 1);
        trigger('selection');
      }
    }

    setCurrentY(0);
    setStartY(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!enableSwipe) return;
    setIsDragging(true);
    setStartY(e.clientY);
    setCurrentY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !enableSwipe) return;
    const deltaY = e.clientY - startY;
    if (deltaY > 0) {
      setCurrentY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging || !enableSwipe) return;
    setIsDragging(false);

    const deltaY = currentY - startY;
    const threshold = 50;

    if (deltaY > threshold) {
      if (currentSnap > 0) {
        setCurrentSnap(currentSnap - 1);
        trigger('selection');
      } else {
        onClose();
        trigger('light');
      }
    } else if (deltaY < -threshold) {
      if (currentSnap < snapPoints.length - 1) {
        setCurrentSnap(currentSnap + 1);
        trigger('selection');
      }
    }

    setCurrentY(0);
    setStartY(0);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, currentY, startY]);

  if (!isOpen) return null;

  const height = snapPoints[currentSnap] * 100;
  const dragOffset = isDragging ? Math.max(0, currentY - startY) : 0;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        <div
          ref={sheetRef}
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            isDark ? 'bg-gray-900' : 'bg-white'
          } rounded-t-3xl shadow-2xl`}
          style={{
            height: `${height}%`,
            transform: `translateY(${dragOffset}px)`,
            transition: isDragging ? 'none' : 'all 0.3s',
          }}
        >
          <div
            className="flex flex-col items-center p-4 cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            <div
              className={`w-12 h-1.5 rounded-full mb-2 ${
                isDark ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            />

            {title && (
              <div className="flex items-center justify-between w-full px-2 mb-4">
                <h3
                  className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {title}
                </h3>
                <button
                  onClick={() => {
                    trigger('light');
                    onClose();
                  }}
                  className={`p-2 rounded-xl transition-colors ${
                    isDark
                      ? 'hover:bg-gray-800 text-gray-400'
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <X size={24} />
                </button>
              </div>
            )}
          </div>

          <div className="overflow-y-auto px-6 pb-6" style={{ maxHeight: 'calc(100% - 80px)' }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSheet;
