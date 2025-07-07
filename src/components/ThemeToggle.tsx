import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-3 rounded-2xl transition-all duration-500 hover:scale-110 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20"
      aria-label={`Basculer vers le mode ${isDark ? 'clair' : 'sombre'}`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      
      {/* Icon container */}
      <div className="relative w-6 h-6 overflow-hidden">
        {/* Sun icon */}
        <Sun 
          size={24} 
          className={`absolute inset-0 text-yellow-400 transition-all duration-700 transform ${
            isDark 
              ? 'opacity-0 rotate-180 scale-75' 
              : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        
        {/* Moon icon */}
        <Moon 
          size={24} 
          className={`absolute inset-0 text-blue-300 transition-all duration-700 transform ${
            isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-75'
          }`} 
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Mode {isDark ? 'clair' : 'sombre'}
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
           style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}>
      </div>
    </button>
  );
};

export default ThemeToggle;