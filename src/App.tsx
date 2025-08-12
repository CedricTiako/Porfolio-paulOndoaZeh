import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import UserExperience from './components/UserExperience';
import ProjectCalculator from './components/ProjectCalculator';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import PWAInstaller from './components/PWAInstaller';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Analytics trackingId={import.meta.env.VITE_GA_TRACKING_ID} />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <ScrollProgress />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <UserExperience />
            <ProjectCalculator />
            <Testimonials />
            <Blog />
            <Contact />
          </main>
          <Footer />
          <PWAInstaller />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;