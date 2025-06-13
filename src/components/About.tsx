import React, { useState, useEffect } from 'react';
import { Target, Zap, Users, Sparkles, TrendingUp, Award, Code, Brain } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '2+', label: 'Années d\'expérience', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { number: '15+', label: 'Projets réalisés', icon: Code, color: 'from-blue-500 to-blue-600' },
    { number: '10+', label: 'Clients satisfaits', icon: Users, color: 'from-green-500 to-green-600' },
    { number: '100%', label: 'Taux de satisfaction', icon: Award, color: 'from-orange-500 to-orange-600' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Innovation IA',
      description: 'Utilisation avancée de l\'IA pour optimiser le développement et créer des solutions intelligentes.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Développement d\'applications rapides et optimisées avec les dernières technologies.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travail en équipe agile avec un focus sur l\'expérience utilisateur et la qualité du code.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Éléments d'arrière-plan harmonisés */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-pulse-glow delay-2000"></div>
      </div>

      {/* Grille de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* En-tête de section amélioré */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 glass-card rounded-full px-8 py-4 mb-8 hover:scale-105 transition-transform duration-500">
              <Sparkles className="text-purple-600 animate-float" size={24} />
              <span className="text-purple-800 font-semibold text-lg">Découvrez mon profil</span>
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text-animated">À propos de moi</span>
            </h2>
            
            <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full animate-gradient-shift"></div>
            
            <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Passionné par l'innovation technologique et l'intelligence artificielle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Contenu principal */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="glass-card glass-card-hover rounded-3xl p-10 group">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text">
                    Objectif Professionnel
                  </h3>
                </div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Développeur passionné par les technologies web et mobiles, avec une expertise approfondie 
                    des frameworks modernes. Je travaille en synergie avec l'intelligence artificielle (IA) 
                    pour concevoir des solutions numériques intelligentes et performantes.
                  </p>
                  <p className="text-lg">
                    Mon approche inclut l'usage d'IA pour la génération de code, l'amélioration de projets 
                    existants et l'accélération du développement. Je cherche à intégrer une équipe dynamique 
                    pour concevoir des solutions innovantes, centrées sur les besoins utilisateurs.
                  </p>
                </div>

                {/* Barre de progression des compétences */}
                <div className="mt-8 space-y-4">
                  {[
                    { skill: 'Développement Web', level: 95 },
                    { skill: 'Intelligence Artificielle', level: 85 },
                    { skill: 'Développement Mobile', level: 90 }
                  ].map((item, index) => (
                    <div key={index} className="group/skill">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-800">{item.skill}</span>
                        <span className="text-purple-600 font-bold">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                          style={{ 
                            width: isVisible ? `${item.level}%` : '0%',
                            transitionDelay: `${index * 200}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cartes de fonctionnalités */}
            <div className="space-y-6 animate-fade-in-right">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="glass-card glass-card-hover rounded-3xl p-8 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 bg-gradient-to-r ${feature.color} rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-xl flex-shrink-0`}>
                      <feature.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Indicateur d'animation */}
                  <div className="mt-6 flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          hoveredCard === index 
                            ? 'bg-purple-500 animate-pulse' 
                            : 'bg-gray-300'
                        }`}
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistiques améliorées */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-600">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-8 text-center group"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {isVisible ? stat.number : '0'}
                </div>
                
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Effet de particules au survol */}
                <div className="relative overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-rise"
                      style={{
                        left: `${20 + i * 15}%`,
                        bottom: '10px',
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;