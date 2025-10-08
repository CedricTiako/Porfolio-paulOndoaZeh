import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavItem {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
}

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark } = useTheme();

  const navItems: NavItem[] = [
    { id: 'hero', icon: Home, label: 'Accueil', href: '#hero' },
    { id: 'about', icon: User, label: 'Profil', href: '#about' },
    { id: 'skills', icon: Code, label: 'Skills', href: '#skills' },
    { id: 'experience', icon: Briefcase, label: 'Exp', href: '#experience' },
    { id: 'projects', icon: FolderOpen, label: 'Projets', href: '#projects' },
    { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      if ('vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }
  };

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden transition-all duration-500 ${
        isDark
          ? 'bg-gray-900/95 backdrop-blur-2xl'
          : 'bg-white/95 backdrop-blur-2xl'
      } rounded-3xl shadow-2xl border ${
        isDark ? 'border-gray-700/50' : 'border-gray-200/50'
      } px-4 py-3`}
      style={{
        maxWidth: 'calc(100vw - 2rem)',
      }}
    >
      <div className="flex items-center justify-around gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className={`relative flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 min-w-[60px] ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110'
                  : isDark
                    ? 'text-gray-400 hover:text-purple-400 hover:bg-gray-800/50'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              <Icon
                size={20}
                className={`transition-transform duration-300 ${
                  isActive ? 'scale-110' : ''
                }`}
              />
              <span className={`text-xs font-medium transition-all duration-300 ${
                isActive ? 'opacity-100' : 'opacity-70'
              }`}>
                {item.label}
              </span>

              {isActive && (
                <>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-50" />
                </>
              )}
            </button>
          );
        })}
      </div>

      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full ${
        isDark ? 'bg-gray-700' : 'bg-gray-200'
      }`} />
    </nav>
  );
};

export default BottomNavigation;
