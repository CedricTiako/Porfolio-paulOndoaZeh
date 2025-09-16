import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Home, User, Code, Briefcase, FolderOpen, Mail, Eye, Clock } from 'lucide-react';

const SmartNavigation = () => {
  const [currentSection, setCurrentSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [sections, setSections] = useState<Array<{
    id: string;
    name: string;
    icon: any;
    progress: number;
    timeSpent: number;
    visited: boolean;
  }>>([]);

  const sectionData = [
    { id: 'hero', name: 'Accueil', icon: Home },
    { id: 'about', name: 'À propos', icon: User },
    { id: 'skills', name: 'Compétences', icon: Code },
    { id: 'experience', name: 'Expérience', icon: Briefcase },
    { id: 'projects', name: 'Projets', icon: FolderOpen },
    { id: 'contact', name: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    // Initialize sections
    setSections(sectionData.map(section => ({
      ...section,
      progress: 0,
      timeSpent: 0,
      visited: false
    })));

    let startTime = Date.now();
    let currentSectionStartTime = Date.now();

    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrolled / maxScroll) * 100, 100);
      setReadingProgress(progress);

      // Update time spent
      const now = Date.now();
      setTimeSpent(Math.floor((now - startTime) / 1000));

      // Detect current section
      const sectionElements = sectionData.map(s => document.getElementById(s.id)).filter(Boolean);
      let currentSectionId = '';
      
      for (const element of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = element.id;
            break;
          }
        }
      }

      if (currentSectionId !== currentSection) {
        // Update time spent in previous section
        if (currentSection) {
          setSections(prev => prev.map(section => 
            section.id === currentSection 
              ? { ...section, timeSpent: section.timeSpent + Math.floor((now - currentSectionStartTime) / 1000) }
              : section
          ));
        }
        
        setCurrentSection(currentSectionId);
        currentSectionStartTime = now;
        
        // Mark section as visited
        setSections(prev => prev.map(section => 
          section.id === currentSectionId 
            ? { ...section, visited: true }
            : section
        ));
      }

      // Update section progress
      if (currentSectionId) {
        const element = document.getElementById(currentSectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementHeight = element.offsetHeight;
          const viewportHeight = window.innerHeight;
          
          let sectionProgress = 0;
          if (rect.top <= 0) {
            sectionProgress = Math.min(Math.abs(rect.top) / (elementHeight - viewportHeight) * 100, 100);
          }
          
          setSections(prev => prev.map(section => 
            section.id === currentSectionId 
              ? { ...section, progress: sectionProgress }
              : section
          ));
        }
      }

      setIsVisible(scrolled > 200);
    };

    const throttledUpdate = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', throttledUpdate);
    };
  }, [currentSection]);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateDirection = (direction: 'up' | 'down') => {
    const currentIndex = sectionData.findIndex(s => s.id === currentSection);
    let targetIndex;
    
    if (direction === 'up') {
      targetIndex = currentIndex > 0 ? currentIndex - 1 : sectionData.length - 1;
    } else {
      targetIndex = currentIndex < sectionData.length - 1 ? currentIndex + 1 : 0;
    }
    
    navigateToSection(sectionData[targetIndex].id);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
      {/* Reading Progress */}
      <div className="glass-card rounded-2xl p-4 text-center">
        <div className="w-16 h-16 relative mb-2">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="4"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - readingProgress / 100)}`}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-purple-600">
              {Math.round(readingProgress)}%
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
          <Clock size={12} />
          <span>{Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="glass-card rounded-2xl p-2 space-y-1">
        <button
          onClick={() => navigateDirection('up')}
          className="w-full p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-xl transition-colors duration-200 group"
        >
          <ChevronUp size={16} className="text-purple-600 group-hover:scale-110 transition-transform duration-200" />
        </button>
        
        <div className="space-y-1 max-h-64 overflow-y-auto">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => navigateToSection(section.id)}
              className={`w-full p-2 rounded-xl transition-all duration-300 group relative ${
                currentSection === section.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'hover:bg-purple-100 dark:hover:bg-purple-900/30 text-gray-600 dark:text-gray-300'
              }`}
              title={`${section.name} - ${section.visited ? 'Visité' : 'Non visité'}`}
            >
              <div className="flex items-center justify-center">
                <section.icon size={14} className="group-hover:scale-110 transition-transform duration-200" />
              </div>
              
              {/* Progress indicator */}
              {section.visited && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 rounded-full" 
                     style={{ width: `${section.progress}%` }} />
              )}
              
              {/* Visited indicator */}
              {section.visited && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => navigateDirection('down')}
          className="w-full p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-xl transition-colors duration-200 group"
        >
          <ChevronDown size={16} className="text-purple-600 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      {/* Stats */}
      <div className="glass-card rounded-2xl p-3 text-center">
        <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 dark:text-gray-400 mb-1">
          <Eye size={12} />
          <span>Sections vues</span>
        </div>
        <div className="text-sm font-bold text-purple-600">
          {sections.filter(s => s.visited).length}/{sections.length}
        </div>
      </div>
    </div>
  );
};

export default SmartNavigation;