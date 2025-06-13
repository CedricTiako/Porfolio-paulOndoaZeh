import React, { useState, useEffect } from 'react';
import { Code, Database, Smartphone, Wrench, Brain, Globe, Sparkles, Zap, Star } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      skills: [
        { name: 'Génération de code assistée', level: 95 },
        { name: 'Amélioration de projets existants', level: 90 },
        { name: 'Prototypage rapide', level: 88 },
        { name: 'Optimisation de performances', level: 85 },
        { name: 'Documentation technique', level: 92 }
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      delay: 0
    },
    {
      icon: Code,
      title: 'Développement Web',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'React.js/Next.js', level: 92 },
        { name: 'Vue.js/Nuxt.js', level: 88 },
        { name: 'Node.js/Express', level: 90 },
        { name: 'PHP/Laravel', level: 85 }
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      delay: 200
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      skills: [
        { name: 'React Native', level: 90 },
        { name: 'Flutter/Dart', level: 85 },
        { name: 'Applications hybrides', level: 88 },
        { name: 'UI/UX Mobile', level: 92 },
        { name: 'Optimisation mobile', level: 87 }
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      delay: 400
    },
    {
      icon: Database,
      title: 'Bases de données',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'Supabase', level: 95 },
        { name: 'Firebase', level: 92 },
        { name: 'MongoDB', level: 85 }
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      delay: 600
    },
    {
      icon: Wrench,
      title: 'Outils & DevOps',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'VS Code', level: 98 },
        { name: 'Figma/Design', level: 85 },
        { name: 'CI/CD', level: 78 }
      ],
      color: 'from-gray-500 to-slate-500',
      bgColor: 'from-gray-50 to-slate-50',
      delay: 800
    },
    {
      icon: Globe,
      title: 'Technologies Avancées',
      skills: [
        { name: 'API REST/GraphQL', level: 92 },
        { name: 'Authentification JWT', level: 90 },
        { name: 'Géolocalisation', level: 88 },
        { name: 'Paiement mobile', level: 85 },
        { name: 'PWA', level: 87 }
      ],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      delay: 1000
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow delay-2000"></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-particle-rise"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 mb-8 border border-white/20 hover:scale-105 transition-transform duration-500">
            <Sparkles className="text-purple-400 animate-float" size={24} />
            <span className="text-purple-300 font-semibold text-lg">Mes expertises</span>
            <Zap className="text-cyan-400 animate-float delay-500" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="gradient-text-animated">
              Compétences Techniques
            </span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full animate-gradient-shift"></div>
        </div>

        {/* Navigation des catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up delay-300">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <category.icon size={20} />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`glass-card glass-card-hover rounded-3xl p-8 group transition-all duration-700 ${
                activeCategory === categoryIndex 
                  ? 'scale-105 ring-2 ring-purple-500/50' 
                  : 'opacity-60 hover:opacity-100'
              }`}
              style={{ 
                animationDelay: `${category.delay}ms`,
                transform: activeCategory === categoryIndex ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {/* En-tête de carte */}
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white mr-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <category.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < 4 ? 'text-yellow-400' : 'text-gray-400'} mr-1`}
                        fill={i < 4 ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Liste des compétences */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group/skill"
                    style={{ animationDelay: `${category.delay + skillIndex * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 font-bold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Barre de progression */}
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible && activeCategory === categoryIndex ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 200}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicateur de niveau global */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Niveau d'expertise</span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}></div>
                    <span className="text-sm text-purple-400 font-semibold">Expert</span>
                  </div>
                </div>
              </div>

              {/* Effet de particules au survol */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-rise"
                    style={{
                      left: `${10 + i * 15}%`,
                      bottom: '20px',
                      animationDelay: `${i * 150}ms`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section de résumé */}
        <div className="mt-20 text-center animate-fade-in-up delay-1200">
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
            <Brain className="text-purple-400 mx-auto mb-6 animate-float" size={48} />
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="gradient-text-animated">Approche Innovante</span>
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Mon expertise combine les technologies traditionnelles avec l'intelligence artificielle 
              pour créer des solutions plus efficaces, plus rapides et plus intelligentes.
            </p>
            <div className="flex justify-center space-x-8">
              {[
                { label: 'Technologies maîtrisées', value: '25+' },
                { label: 'Années d\'expérience', value: '2+' },
                { label: 'Projets avec IA', value: '80%' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text-animated mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;