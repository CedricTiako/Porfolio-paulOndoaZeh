import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, MapPin, Briefcase, Heart, Sparkles, Award } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Directrice Marketing',
      company: 'TechStart Cameroun',
      location: 'Yaoundé, Cameroun',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Paul a transformé notre vision en une application mobile exceptionnelle. Son expertise en IA nous a permis d\'automatiser 70% de nos processus. Un développeur passionné et très professionnel !',
      project: 'Application de gestion commerciale',
      tags: ['React Native', 'IA', 'Automatisation'],
      date: 'Janvier 2024'
    },
    {
      id: 2,
      name: 'Jean-Claude Mbarga',
      role: 'CEO',
      company: 'E-Commerce Plus',
      location: 'Douala, Cameroun',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Notre site e-commerce a dépassé toutes nos attentes ! Paul a intégré les paiements mobiles parfaitement et l\'interface est magnifique. Nos ventes ont augmenté de 150% !',
      project: 'Plateforme e-commerce',
      tags: ['Laravel', 'Paiement Mobile', 'UX/UI'],
      date: 'Décembre 2023'
    },
    {
      id: 3,
      name: 'Fatima Nkomo',
      role: 'Fondatrice',
      company: 'BeautyTech',
      location: 'Bafoussam, Cameroun',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Paul a créé notre application de réservation beauté avec une UX incroyable. Ses conseils en IA pour les recommandations personnalisées ont révolutionné notre service client !',
      project: 'App de réservation beauté',
      tags: ['Vue.js', 'Firebase', 'IA Recommandations'],
      date: 'Novembre 2023'
    },
    {
      id: 4,
      name: 'Samuel Fotso',
      role: 'Directeur Technique',
      company: 'AgriTech Solutions',
      location: 'Bamenda, Cameroun',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Collaboration exceptionnelle ! Paul a développé notre plateforme agricole avec des fonctionnalités IA pour prédire les rendements. Code propre, délais respectés, résultat parfait !',
      project: 'Plateforme AgriTech',
      tags: ['React', 'IA Prédictive', 'Analytics'],
      date: 'Octobre 2023'
    },
    {
      id: 5,
      name: 'Grace Tchoumi',
      role: 'Responsable Digital',
      company: 'EduCameroun',
      location: 'Douala, Cameroun',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Notre plateforme éducative est un succès grâce à Paul ! L\'intégration de l\'IA pour personnaliser l\'apprentissage a impressionné nos 5000+ étudiants. Merci pour cette innovation !',
      project: 'Plateforme e-learning',
      tags: ['Next.js', 'IA Éducative', 'Supabase'],
      date: 'Septembre 2023'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentClient = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-80 md:w-[500px] h-80 md:h-[500px] bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-particle-rise opacity-60"
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
        <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 md:space-x-3 glass-card rounded-full px-4 md:px-8 py-2 md:py-4 mb-6 md:mb-8 hover:scale-105 transition-transform duration-500">
            <Heart className="text-purple-600 animate-float" size={20} />
            <span className="text-purple-800 dark:text-purple-300 font-semibold text-sm md:text-lg">Avis clients</span>
            <Sparkles className="text-cyan-600 animate-float delay-500" size={16} />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8">
            <span className="gradient-text-animated">Témoignages</span>
          </h2>
          
          <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full animate-gradient-shift"></div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed px-4">
            Découvrez ce que mes clients disent de notre collaboration
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-20">
          <div className="glass-card glass-card-hover rounded-3xl p-6 md:p-12 relative overflow-hidden animate-fade-in-up delay-300">
            {/* Quote Icon */}
            <div className="absolute top-4 md:top-8 left-4 md:left-8 opacity-20">
              <Quote size={60} className="text-purple-600 transform rotate-180" />
            </div>
            
            <div className="relative z-10">
              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-8">
                <div className="relative group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-700 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={currentClient.avatar} 
                      alt={currentClient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Award size={16} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {currentClient.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
                    {currentClient.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {currentClient.company}
                  </p>
                  <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{currentClient.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={14} className="mr-1" />
                      <span>{currentClient.project}</span>
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex flex-col items-center">
                  <div className="flex space-x-1 mb-2">
                    {[...Array(currentClient.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{currentClient.date}</span>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 md:mb-8 italic text-center md:text-left">
                "{currentClient.text}"
              </blockquote>
              
              {/* Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {currentClient.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-12 md:mb-16">
          <button
            onClick={prevTestimonial}
            className="p-3 md:p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-purple-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-3 md:p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto animate-fade-in-up delay-600">
          {[
            { number: '15+', label: 'Projets réalisés', icon: Briefcase },
            { number: '100%', label: 'Clients satisfaits', icon: Heart },
            { number: '4.9/5', label: 'Note moyenne', icon: Star },
            { number: '2+', label: 'Années d\'expérience', icon: Award }
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card rounded-2xl p-4 md:p-6 hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-3 md:mb-4">
                <stat.icon className="text-white" size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text-animated mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-20 animate-fade-in-up delay-800">
          <div className="glass-card rounded-3xl p-6 md:p-12 max-w-4xl mx-auto">
            <User className="text-purple-600 mx-auto mb-4 md:mb-6 animate-float" size={40} />
            <h3 className="text-2xl md:text-3xl font-bold gradient-text-animated mb-4 md:mb-6">
              Rejoignez mes clients satisfaits
            </h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 md:mb-8 px-4">
              Transformons ensemble votre projet en succès. Contactez-moi pour une consultation gratuite !
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-sm md:text-base"
            >
              <span>Démarrer mon projet</span>
              <Heart size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;