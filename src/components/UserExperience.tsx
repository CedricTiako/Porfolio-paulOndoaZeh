import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Zap, 
  Users, 
  Target, 
  Heart, 
  Sparkles, 
  MousePointer, 
  Smartphone,
  Monitor,
  Accessibility,
  TrendingUp,
  Award,
  Eye,
  Lightbulb
} from 'lucide-react';

const UserExperience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

    const element = document.getElementById('user-experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const uxPrinciples = [
    {
      icon: Eye,
      title: 'Design Centré Utilisateur',
      description: 'Conception intuitive basée sur les besoins réels des utilisateurs avec des tests d\'utilisabilité réguliers.',
      features: ['Recherche utilisateur', 'Personas détaillées', 'Tests A/B', 'Feedback continu'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      darkBgColor: 'from-purple-900/20 to-pink-900/20',
      stats: { satisfaction: '98%', retention: '+45%' }
    },
    {
      icon: Zap,
      title: 'Performance Optimisée',
      description: 'Applications ultra-rapides avec des temps de chargement minimaux et une expérience fluide.',
      features: ['Lazy loading', 'Code splitting', 'Optimisation images', 'Cache intelligent'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      darkBgColor: 'from-yellow-900/20 to-orange-900/20',
      stats: { speed: '< 2s', performance: '95+' }
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Expérience parfaite sur tous les appareils avec une approche mobile-first.',
      features: ['Mobile-first', 'Breakpoints fluides', 'Touch-friendly', 'Adaptive UI'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      darkBgColor: 'from-green-900/20 to-emerald-900/20',
      stats: { devices: '100%', mobile: '85%' }
    },
    {
      icon: Accessibility,
      title: 'Accessibilité Universelle',
      description: 'Interfaces accessibles à tous, respectant les standards WCAG et les bonnes pratiques.',
      features: ['WCAG 2.1 AA', 'Navigation clavier', 'Lecteurs d\'écran', 'Contraste optimisé'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      darkBgColor: 'from-blue-900/20 to-cyan-900/20',
      stats: { accessibility: '100%', compliance: 'WCAG 2.1' }
    },
    {
      icon: MousePointer,
      title: 'Micro-interactions',
      description: 'Animations subtiles et feedback visuel pour une expérience engageante et intuitive.',
      features: ['Hover effects', 'Loading states', 'Transitions fluides', 'Feedback visuel'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      darkBgColor: 'from-indigo-900/20 to-purple-900/20',
      stats: { engagement: '+60%', interactions: '+40%' }
    },
    {
      icon: Lightbulb,
      title: 'Innovation Continue',
      description: 'Intégration des dernières tendances UX et technologies émergentes pour rester à la pointe.',
      features: ['Veille technologique', 'Prototypage rapide', 'Tests utilisateurs', 'Itération continue'],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      darkBgColor: 'from-pink-900/20 to-rose-900/20',
      stats: { innovation: '95%', adoption: '+30%' }
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: 'Recherche & Analyse',
      description: 'Étude des besoins utilisateurs et analyse concurrentielle',
      icon: Target,
      color: 'from-purple-500 to-blue-500'
    },
    {
      step: '02',
      title: 'Conception & Prototypage',
      description: 'Wireframes, maquettes et prototypes interactifs',
      icon: Palette,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '03',
      title: 'Développement & Tests',
      description: 'Implémentation avec tests utilisateurs continus',
      icon: Monitor,
      color: 'from-cyan-500 to-green-500'
    },
    {
      step: '04',
      title: 'Optimisation & Suivi',
      description: 'Amélioration continue basée sur les données',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="user-experience" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-particle-rise opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-3 glass-card rounded-full px-8 py-4 mb-8 hover:scale-105 transition-transform duration-500">
            <Heart className="text-purple-600 animate-float" size={24} />
            <span className="text-purple-800 dark:text-purple-300 font-semibold text-lg">Expérience Utilisateur</span>
            <Sparkles className="text-cyan-600 animate-float delay-500" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text-animated">UX/UI Design</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full animate-gradient-shift"></div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Création d'expériences numériques exceptionnelles centrées sur l'utilisateur, 
            alliant esthétique moderne et fonctionnalité intuitive.
          </p>
        </div>

        {/* UX Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {uxPrinciples.map((principle, index) => (
            <div 
              key={index}
              className="glass-card glass-card-hover rounded-3xl p-8 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`p-4 bg-gradient-to-r ${principle.color} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <principle.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                  {principle.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                {principle.description}
              </p>
              
              {/* Features */}
              <div className="space-y-2 mb-6">
                {principle.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${principle.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                {Object.entries(principle.stats).map(([key, value], statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className={`text-lg font-bold bg-gradient-to-r ${principle.color} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
              
              {/* Hover Animation */}
              <div className="relative overflow-hidden">
                {hoveredCard === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full animate-particle-rise"
                        style={{
                          left: `${20 + i * 15}%`,
                          bottom: '10px',
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Design Process */}
        <div className="mb-20 animate-fade-in-up delay-600">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold gradient-text-animated mb-6">Processus de Design</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une approche méthodique pour créer des expériences utilisateur exceptionnelles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${800 + index * 150}ms` }}
              >
                {/* Connection Line */}
                {index < designProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 dark:from-purple-600 dark:to-blue-600 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                )}
                
                <div className="glass-card glass-card-hover rounded-3xl p-8 text-center relative z-10">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    {process.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <process.icon size={32} className="text-gray-600 dark:text-gray-300 mx-auto group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up delay-1200">
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
            <Users className="text-purple-600 mx-auto mb-6 animate-float" size={48} />
            <h3 className="text-3xl font-bold gradient-text-animated mb-6">
              Créons Ensemble une Expérience Exceptionnelle
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Chaque projet est une opportunité de créer quelque chose d'unique et de mémorable. 
              Collaborons pour transformer vos idées en expériences digitales extraordinaires.
            </p>
            <div className="flex justify-center space-x-8">
              {[
                { label: 'Projets UX/UI', value: '25+', icon: Award },
                { label: 'Satisfaction client', value: '98%', icon: Heart },
                { label: 'Temps de chargement', value: '< 2s', icon: Zap }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon size={20} className="text-purple-600 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold gradient-text-animated">{stat.value}</div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserExperience;