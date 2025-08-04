import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, FolderOpen, Mail, Calculator, BookOpen, Sparkles } from 'lucide-react';
import AdvancedDarkMode from './AdvancedDarkMode';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'calculator', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Accueil', icon: Home, id: 'hero' },
    { href: '#about', label: 'À propos', icon: User, id: 'about' },
    { href: '#skills', label: 'Compétences', icon: Code, id: 'skills' },
    { href: '#experience', label: 'Expérience', icon: Briefcase, id: 'experience' },
    { href: '#education', label: 'Formation', icon: GraduationCap, id: 'education' },
    { href: '#projects', label: 'Projets', icon: FolderOpen, id: 'projects' },
    { href: '#user-experience', label: 'UX/UI', icon: Heart, id: 'user-experience' },
    { href: '#calculator', label: 'Calculateur', icon: Calculator, id: 'calculator' },
    { href: '#blog', label: 'Blog', icon: BookOpen, id: 'blog' },
    { href: '#testimonials', label: 'Témoignages', icon: Sparkles, id: 'testimonials' },
    { href: '#contact', label: 'Contact', icon: Mail, id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? isDark 
            ? 'bg-gray-900/95 backdrop-blur-2xl shadow-2xl border-b border-gray-700/50' 
            : 'bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-gray-200/50'
          : 'bg-transparent'
      }`}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
        
        <nav className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo with enhanced animations */}
            <div className="relative group cursor-pointer" onClick={() => handleNavClick('#hero')}>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <div className={`relative flex items-center space-x-3 p-3 rounded-2xl backdrop-blur-lg border group-hover:scale-105 transition-all duration-500 ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-600/50 group-hover:bg-gray-700/50' 
                  : 'bg-white/50 border-white/50 group-hover:bg-white/70'
              }`}>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  PO
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Paul Ondoa
                  </div>
                  <div className={`text-xs transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : isScrolled ? 'text-gray-600' : 'text-purple-300'
                  }`}>
                    Développeur Full Stack
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation - Ultra Modern */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`group relative flex items-center space-x-2 px-4 py-3 rounded-2xl font-medium transition-all duration-500 hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : isDark
                        ? 'text-gray-300 hover:text-purple-400 hover:bg-gray-800/50'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50' 
                          : 'text-white hover:text-purple-300 hover:bg-white/10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    activeSection === item.id ? 'opacity-100' : ''
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-2">
                    <item.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </a>
              ))}
              
              {/* Theme Toggle */}
              <div className="ml-4">
                <AdvancedDarkMode />
              </div>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <div className="lg:hidden flex items-center space-x-3">
              <AdvancedDarkMode />
              <button
                className={`relative p-3 rounded-2xl transition-all duration-500 hover:scale-110 backdrop-blur-lg border ${
                  isDark
                    ? 'text-gray-300 hover:bg-gray-800/50 bg-gray-800/50 border-gray-600/50'
                    : isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100 bg-white/50 border-gray-200/50' 
                      : 'text-white hover:bg-white/10 bg-white/10 border-white/20'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                
                <div className="relative w-6 h-6">
                  <Menu 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-500 ${
                      isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`} 
                  />
                  <X 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-500 ${
                      isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Menu - Ultra Modern Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] backdrop-blur-2xl border-l shadow-2xl transform transition-all duration-700 ${
          isDark 
            ? 'bg-gray-900/95 border-gray-700/50' 
            : 'bg-white/95 border-gray-200/50'
        } ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className={`p-6 border-b ${
            isDark 
              ? 'border-gray-700/50 bg-gradient-to-r from-purple-900/20 to-blue-900/20' 
              : 'border-gray-200/50 bg-gradient-to-r from-purple-50 to-blue-50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  PO
                </div>
                <div>
                  <div className="text-lg font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Paul Ondoa
                  </div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Menu Navigation</div>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className={`p-2 rounded-xl transition-colors duration-300 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <X size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
              </button>
            </div>
          </div>
          
          {/* Navigation Items */}
          <div className="p-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-500 hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : isDark
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-blue-900/20'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.5s ease ${index * 100}ms`
                }}
              >
                {/* Icon with enhanced animations */}
                <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                  activeSection === item.id
                    ? 'bg-white/20'
                    : isDark
                      ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 group-hover:from-purple-800/40 group-hover:to-blue-800/40'
                      : 'bg-gradient-to-r from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200'
                }`}>
                  <item.icon size={20} className={`transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : isDark 
                        ? 'text-purple-400' 
                        : 'text-purple-600'
                  }`} />
                </div>
                
                {/* Label */}
                <div className="flex-1">
                  <div className="font-semibold">{item.label}</div>
                  {activeSection === item.id && (
                    <div className={`text-xs ${isDark ? 'text-white/80' : 'text-white/80'}`}>Section active</div>
                  )}
                </div>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* Footer */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 border-t ${
            isDark 
              ? 'border-gray-700/50 bg-gradient-to-r from-purple-900/20 to-blue-900/20' 
              : 'border-gray-200/50 bg-gradient-to-r from-purple-50 to-blue-50'
          }`}>
            <div className={`flex items-center justify-center space-x-2 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <Sparkles size={16} className="text-purple-600" />
              <span>Portfolio 2024</span>
              <Sparkles size={16} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;