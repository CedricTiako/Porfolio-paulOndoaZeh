import React from 'react';
import { Briefcase, Calendar, MapPin, Zap, Target, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Développeur Full Stack',
      company: 'Freelance',
      location: 'Douala, Cameroun',
      period: 'Janvier 2023 - Présent',
      type: 'Freelance',
      achievements: [
        'Création de sites vitrines et e-commerces (Laravel, React, WordPress)',
        'Développement d\'applications mobiles (React Native + Firebase/Supabase)',
        'Intégration de systèmes de paiement mobile (Orange Money, MTN MoMo)',
        'Utilisation d\'outils IA pour automatiser des tâches de développement et documenter les projets',
        'Maintenance technique et support client'
      ],
      stats: { projects: '15+', clients: '10+', satisfaction: '100%' }
    },
    {
      title: 'Stagiaire Développeur',
      company: 'Startup XYZ',
      location: 'Yaoundé, Cameroun',
      period: 'Juin 2022 - Décembre 2022',
      type: 'Stage',
      achievements: [
        'Participation au développement d\'une plateforme web de réservation',
        'Mise en place de l\'authentification et de la base de données Supabase',
        'Test et débogage des fonctionnalités en équipe Agile'
      ],
      stats: { features: '8', bugs: '25+', team: '5' }
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-6 border border-white/20">
            <Briefcase className="text-purple-400" size={20} />
            <span className="text-purple-300 font-medium">Mon parcours</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expérience Professionnelle
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Animated Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-lg"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-16 animate-fade-in-up" style={{ animationDelay: `${index * 300}ms` }}>
                {/* Glowing Timeline Dot */}
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-white shadow-2xl animate-pulse z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md opacity-70 animate-ping"></div>
                </div>
                
                {/* Experience Card */}
                <div className="ml-20 w-full group">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-purple-400 font-semibold mb-2">{exp.company}</p>
                        <div className="flex items-center space-x-4 text-gray-300">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start lg:items-end">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                          exp.type === 'Freelance' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        }`}>
                          {exp.type}
                        </span>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {Object.entries(exp.stats).map(([key, value], statIndex) => (
                            <div key={statIndex} className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                              <div className="text-lg font-bold text-white">{value}</div>
                              <div className="text-xs text-gray-300 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div 
                          key={achIndex} 
                          className="flex items-start text-gray-300 group-hover:text-white transition-colors duration-300"
                          style={{ animationDelay: `${index * 300 + achIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-4 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect Icons */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                          <TrendingUp size={16} className="text-green-400" />
                        </div>
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                          <Award size={16} className="text-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;