import React, { useState, useEffect, useRef } from 'react';
import { Info, Lightbulb, Star, Zap } from 'lucide-react';

interface SmartTooltipProps {
  content: string;
  children: React.ReactNode;
  type?: 'info' | 'tip' | 'feature' | 'action';
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  interactive?: boolean;
}

const SmartTooltip: React.FC<SmartTooltipProps> = ({
  content,
  children,
  type = 'info',
  position = 'top',
  delay = 500,
  interactive = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [actualPosition, setActualPosition] = useState(position);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const getIcon = () => {
    switch (type) {
      case 'tip': return Lightbulb;
      case 'feature': return Star;
      case 'action': return Zap;
      default: return Info;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'tip': return 'from-yellow-500 to-orange-500';
      case 'feature': return 'from-purple-500 to-pink-500';
      case 'action': return 'from-green-500 to-emerald-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  const checkPosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    let newPosition = position;

    // Vérifier si le tooltip sort de l'écran et ajuster
    if (position === 'top' && triggerRect.top - tooltipRect.height < 0) {
      newPosition = 'bottom';
    } else if (position === 'bottom' && triggerRect.bottom + tooltipRect.height > viewport.height) {
      newPosition = 'top';
    } else if (position === 'left' && triggerRect.left - tooltipRect.width < 0) {
      newPosition = 'right';
    } else if (position === 'right' && triggerRect.right + tooltipRect.width > viewport.width) {
      newPosition = 'left';
    }

    setActualPosition(newPosition);
  };

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      setTimeout(checkPosition, 0);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!interactive) {
      setIsVisible(false);
    }
  };

  const handleTooltipMouseEnter = () => {
    if (interactive) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  const handleTooltipMouseLeave = () => {
    if (interactive) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getPositionClasses = () => {
    switch (actualPosition) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
    }
  };

  const getArrowClasses = () => {
    switch (actualPosition) {
      case 'top':
        return 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent';
      case 'bottom':
        return 'bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent';
      case 'left':
        return 'left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent';
      case 'right':
        return 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent';
      default:
        return 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent';
    }
  };

  const Icon = getIcon();

  return (
    <div 
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 ${getPositionClasses()} animate-fade-in-up`}
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
        >
          <div className={`bg-gradient-to-r ${getColors()} text-white px-4 py-3 rounded-xl shadow-2xl backdrop-blur-lg border border-white/20 max-w-xs`}>
            <div className="flex items-start space-x-2">
              <Icon size={16} className="mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium leading-relaxed">{content}</p>
            </div>
          </div>
          
          {/* Arrow */}
          <div className={`absolute w-0 h-0 border-4 ${getArrowClasses()}`} 
               style={{ 
                 borderTopColor: actualPosition === 'bottom' ? 'transparent' : 
                   type === 'tip' ? '#f59e0b' :
                   type === 'feature' ? '#a855f7' :
                   type === 'action' ? '#10b981' : '#3b82f6',
                 borderBottomColor: actualPosition === 'top' ? 'transparent' :
                   type === 'tip' ? '#f59e0b' :
                   type === 'feature' ? '#a855f7' :
                   type === 'action' ? '#10b981' : '#3b82f6',
                 borderLeftColor: actualPosition === 'right' ? 'transparent' :
                   type === 'tip' ? '#f59e0b' :
                   type === 'feature' ? '#a855f7' :
                   type === 'action' ? '#10b981' : '#3b82f6',
                 borderRightColor: actualPosition === 'left' ? 'transparent' :
                   type === 'tip' ? '#f59e0b' :
                   type === 'feature' ? '#a855f7' :
                   type === 'action' ? '#10b981' : '#3b82f6'
               }} 
          />
        </div>
      )}
    </div>
  );
};

export default SmartTooltip;