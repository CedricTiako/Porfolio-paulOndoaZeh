import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, MessageCircle, ChevronDown, Sparkles, Zap } from 'lucide-react';
import profilImage from '../images/profil.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Générer des particules
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Curseur interactif */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />

      {/* Arrière-plan animé amélioré */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl animate-pulse-glow delay-1500"></div>
      </div>

      {/* Particules flottantes améliorées */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-particle-rise opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Grille de fond subtile */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge de statut */}
          <div className="mb-8 animate-bounce-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 glass-card">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <Sparkles className="text-purple-400" size={16} />
              <span className="text-purple-300 font-medium text-sm">Disponible pour de nouveaux projets</span>
              <Zap className="text-cyan-400" size={16} />
            </div>
          </div>

          {/* Avatar avec effets améliorés */}
          <div className="mb-12 animate-scale-in delay-200">
            <div className="relative w-48 h-48 mx-auto mb-8 group">
              {/* Anneaux rotatifs */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full animate-spin-slow opacity-80"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-60" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              
              {/* Avatar principal avec image de profil */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl group-hover:scale-110 transition-all duration-500">
                <div className="relative w-full h-full">
                  <img 
                    src={profilImage} 
                    alt="Profil" 
                    className="w-full h-full object-cover"
                  />
                  {/* Effet de surbrillance au survol */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Effet de lueur */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-purple-400/30 group-hover:animate-pulse transition-all duration-700"></div>
                </div>
              </div>
              
              {/* Effet de lueur */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-cyan-500/50 rounded-full blur-2xl animate-pulse-glow"></div>
              
              {/* Particules orbitales */}
              {/* {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateX(120px) translateY(-50%)`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${6 + i * 0.5}s`
                  }}
                />
              ))} */}
            </div>
            
            {/* Nom avec effet de frappe */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up delay-400">
              <span className="gradient-text-animated animate-text-glow">
                Paul Ondoa Zeh
              </span>
            </h1>
            
            {/* Titre avec animations */}
            <div className="relative mb-8 animate-fade-in-up delay-600">
              <p className="text-3xl md:text-4xl text-purple-300 font-semibold mb-4 animate-float-gentle">
                Développeur Web & Mobile
              </p>
              <div className="flex items-center justify-center space-x-3 text-cyan-300 animate-slide-in-blur delay-800">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xl font-medium">Spécialiste IA & Technologies Modernes</span>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
            
            {/* Description avec effet de révélation */}
            <div className="relative overflow-hidden animate-fade-in-up delay-1000">
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 animate-shimmer">
                Créateur de solutions numériques innovantes, alliant expertise technique et intelligence artificielle 
                pour transformer vos idées en expériences digitales exceptionnelles.
              </p>
            </div>
          </div>

          {/* Cartes d'informations avec micro-interactions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 animate-fade-in-up delay-1200">
            {[
              { icon: MapPin, text: 'Douala, Cameroun', color: 'from-purple-500 to-purple-600' },
              { icon: Phone, text: '+237 695249787', color: 'from-blue-500 to-blue-600' },
              { icon: Mail, text: 'paulondoa@gmail.com', color: 'from-cyan-500 to-cyan-600' }
            ].map((item, index) => (
              <div key={index} className={`glass-card glass-card-hover p-6 rounded-2xl group micro-bounce ripple delay-${(index + 1) * 100}`}>
                <div className="flex items-center justify-center space-x-4 text-white">
                  <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon size={24} />
                  </div>
                  <span className="font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Liens sociaux avec effets 3D */}
          <div className="flex justify-center space-x-8 mb-20 animate-fade-in-up delay-1400">
            {[
              { 
                href: 'https://linkedin.com/in/paul-ondoa-zeh-38666936b', 
                icon: Linkedin, 
                color: 'from-blue-600 to-blue-700',
                hoverColor: 'from-blue-500 to-blue-600',
                name: 'LinkedIn'
              },
              { 
                href: 'https://github.com/paulondoa', 
                icon: Github, 
                color: 'from-gray-800 to-gray-900',
                hoverColor: 'from-gray-700 to-gray-800',
                name: 'GitHub'
              },
              { 
                href: 'https://wa.me/237695249787', 
                icon: MessageCircle, 
                color: 'from-green-600 to-green-700',
                hoverColor: 'from-green-500 to-green-600',
                name: 'WhatsApp'
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-5 bg-gradient-to-r ${social.color} rounded-2xl hover:${social.hoverColor} transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-3 micro-bounce ripple`}
                style={{ animationDelay: `${1600 + index * 100}ms` }}
              >
                <social.icon size={32} className="text-white group-hover:scale-110 transition-transform duration-300" />
                
                {/* Effet de lueur au survol */}
                <div className={`absolute inset-0 bg-gradient-to-r ${social.hoverColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10`}></div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.name}
                </div>
              </a>
            ))}
          </div>

          {/* Indicateur de défilement animé */}
          <div className="animate-fade-in-up delay-1800">
            <button 
              onClick={scrollToNext}
              className="group flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
            >
              <span className="text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">Découvrir mon profil</span>
              <div className="relative">
                <ChevronDown size={32} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Effet de vague en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;