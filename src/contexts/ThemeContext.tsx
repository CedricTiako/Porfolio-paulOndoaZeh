import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    const autoMode = localStorage.getItem('autoThemeMode');

    if (autoMode === 'enabled') {
      return getAutoTheme();
    }

    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const getAutoTheme = () => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6;
  };

  useEffect(() => {
    const autoMode = localStorage.getItem('autoThemeMode');

    if (autoMode === 'enabled') {
      const checkTime = () => {
        const shouldBeDark = getAutoTheme();
        if (shouldBeDark !== isDark) {
          setIsDark(shouldBeDark);
        }
      };

      const interval = setInterval(checkTime, 60000);
      checkTime();

      return () => clearInterval(interval);
    }
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const batteryCheck = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          if (battery.level < 0.2 && !battery.charging) {
            setIsDark(true);
            localStorage.setItem('batteryMode', 'active');
          }
        } catch (error) {
          console.log('Battery API not supported');
        }
      }
    };

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const autoMode = localStorage.getItem('autoThemeMode');
      if (autoMode !== 'enabled' && !localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    batteryCheck();

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('autoThemeMode', 'disabled');
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};