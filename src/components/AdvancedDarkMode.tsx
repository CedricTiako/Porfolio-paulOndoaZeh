import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor, Palette, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

type ThemeMode = 'light' | 'dark' | 'auto';
type AccentColor = 'purple' | 'blue' | 'green' | 'orange' | 'pink';

const AdvancedDarkMode = () => {
  const { isDark, toggleTheme } = useTheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');
  const [accentColor, setAccentColor] = useState<AccentColor>('purple');
  const [showSettings, setShowSettings] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const themeOptions = [
    { id: 'light' as ThemeMode, name: 'Clair', icon: Sun, color: 'from-yellow-400 to-orange-400' },
    { id: 'dark' as ThemeMode, name: 'Sombre', icon: Moon, color: 'from-blue-600 to-purple-600' },
    { id: 'auto' as ThemeMode, name: 'Auto', icon: Monitor, color: 'from-gray-500 to-gray-600' }
  ];

  const accentColors = [
    { id: 'purple' as AccentColor, name: 'Violet', color: 'bg-purple-500', gradient: 'from-purple-500 to-purple-600' },
    { id: 'blue' as AccentColor, name: 'Bleu', color: 'bg-blue-500', gradient: 'from-blue-500 to-blue-600' },
    { id: 'green' as AccentColor, name: 'Vert', color: 'bg-green-500', gradient: 'from-green-500 to-green-600' },
    { id: 'orange' as AccentColor, name: 'Orange', color: 'bg-orange-500', gradient: 'from-orange-500 to-orange-600' },
    { id: 'pink' as AccentColor, name: 'Rose', color: 'bg-pink-500', gradient: 'from-pink-500 to-pink-600' }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode') as ThemeMode;
    const savedAccent = localStorage.getItem('accent-color') as AccentColor;
    
    if (savedTheme) setThemeMode(savedTheme);
    if (savedAccent) setAccentColor(savedAccent);
  }, []);

  const handleThemeChange = (mode: ThemeMode) => {
    setIsAnimating(true);
    setThemeMode(mode);
    localStorage.setItem('theme-mode', mode);
    
    if (mode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if ((prefersDark && !isDark) || (!prefersDark && isDark)) {
        toggleTheme();
      }
    } else {
      const shouldBeDark = mode === 'dark';
      if (shouldBeDark !== isDark) {
        toggleTheme();
      }
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleAccentChange = (color: AccentColor) => {
    setAccentColor(color);
    localStorage.setItem('accent-color', color);
    
    // Appliquer la couleur d'accent au document
    const root = document.documentElement;
    const colorMap = {
      purple: { primary: '#8b5cf6', secondary: '#7c3aed' },
      blue: { primary: '#3b82f6', secondary: '#2563eb' },
      green: { primary: '#10b981', secondary: '#059669' },
      orange: { primary: '#f59e0b', secondary: '#d97706' },
      pink: { primary: '#ec4899', secondary: '#db2777' }
    };
    
    root.style.setProperty('--primary-color', colorMap[color].primary);
    root.style.setProperty('--secondary-color', colorMap[color].secondary);
  };

  return (
    <div className="relative">
      {/* Main Toggle Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className={`group relative p-3 rounded-2xl transition-all duration-500 hover:scale-110 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 ${
          isAnimating ? 'animate-theme-switch' : ''
        }`}
        aria-label="Paramètres de thème"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        
        {/* Icon container */}
        <div className="relative w-6 h-6 overflow-hidden">
          <Settings 
            size={24} 
            className={`absolute inset-0 text-purple-400 transition-all duration-700 transform ${
              showSettings ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
            }`} 
          />
        </div>
      </button>

      {/* Settings Panel */}
      <div className={`absolute top-full right-0 mt-4 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl transition-all duration-500 transform origin-top-right ${
        showSettings 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
              <Palette className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Personnalisation
            </h3>
          </div>

          {/* Theme Mode Selection */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Mode d'affichage
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {themeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleThemeChange(option.id)}
                  className={`relative p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    themeMode === option.id
                      ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                  }`}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-2 bg-gradient-to-r ${option.color} rounded-lg mb-2`}>
                      <option.icon className="text-white" size={16} />
                    </div>
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {option.name}
                    </div>
                  </div>
                  {themeMode === option.id && (
                    <div className="absolute top-1 right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Accent Color Selection */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Couleur d'accent
            </h4>
            <div className="flex space-x-3">
              {accentColors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => handleAccentChange(color.id)}
                  className={`relative w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 ${color.color} ${
                    accentColor === color.id ? 'ring-4 ring-offset-2 ring-gray-400 dark:ring-gray-600' : ''
                  }`}
                  title={color.name}
                >
                  {accentColor === color.id && (
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl">
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Aperçu</div>
            <div className={`h-2 bg-gradient-to-r ${accentColors.find(c => c.id === accentColor)?.gradient} rounded-full mb-2`}></div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Thème: <span className="font-semibold">{themeOptions.find(t => t.id === themeMode)?.name}</span>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Accent: <span className="font-semibold">{accentColors.find(c => c.id === accentColor)?.name}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Vos préférences sont sauvegardées automatiquement
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showSettings && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setShowSettings(false)}
        />
      )}
    </div>
  );
};

export default AdvancedDarkMode;