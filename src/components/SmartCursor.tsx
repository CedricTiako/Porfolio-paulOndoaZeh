import React, { useState, useEffect } from 'react';
import { MousePointer, Zap, Eye, Hand, ArrowRight } from 'lucide-react';

const SmartCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setIsVisible(true);
      
      // Ajouter au trail
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: trailId++ }];
        return newTrail.slice(-8); // Garder seulement les 8 derniers points
      });
      
      // Détecter le type d'élément survolé
      const element = e.target as HTMLElement;
      if (element.tagName === 'BUTTON' || element.tagName === 'A' || element.closest('button') || element.closest('a')) {
        setCursorType('pointer');
      } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        setCursorType('text');
      } else if (element.closest('.glass-card') || element.closest('.hover-lift')) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  const getCursorIcon = () => {
    switch (cursorType) {
      case 'pointer': return ArrowRight;
      case 'text': return MousePointer;
      case 'hover': return Eye;
      default: return Zap;
    }
  };

  const CursorIcon = getCursorIcon();

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9999] w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.6,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }}
        />
      ))}
      
      {/* Main Cursor */}
      <div
        className={`fixed pointer-events-none z-[10000] transition-all duration-200 ease-out ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: position.x - 16,
          top: position.y - 16,
        }}
      >
        {/* Outer Ring */}
        <div className={`w-8 h-8 border-2 border-purple-400 rounded-full transition-all duration-300 ${
          cursorType === 'pointer' ? 'scale-150 border-green-400' :
          cursorType === 'text' ? 'scale-125 border-blue-400' :
          cursorType === 'hover' ? 'scale-175 border-pink-400' : ''
        }`}>
          {/* Inner Dot */}
          <div className="absolute inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
            <CursorIcon size={8} className="text-white" />
          </div>
        </div>
        
        {/* Ripple Effect on Click */}
        {isClicking && (
          <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-ping opacity-75" />
        )}
      </div>
    </>
  );
};

export default SmartCursor;