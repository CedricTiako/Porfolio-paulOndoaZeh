import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Globe, Star, Sparkles } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Licence Professionnelle en Génie Logiciel',
      institution: 'Université de Douala',
      period: '2019 - 2022',
      type: 'Diplôme',
      grade: 'Mention Bien',
      description: 'Formation complète en développement logiciel, bases de données et gestion de projet'
    }
  ];

  const certifications = [
    {
      name: 'Développement Web Full Stack',
      provider: 'OpenClassrooms',
      type: 'Certification',
      year: '2023',
      skills: ['React', 'Node.js', 'MongoDB']
    },
    {
      name: 'React & Firebase Masterclass',
      provider: 'Udemy',
      type: 'Certification',
      year: '2023',
      skills: ['React', 'Firebase', 'Authentication']
    },
    {
      name: 'Mobile Development with React Native',
      provider: 'Coursera',
      type: 'Certification',
      year: '2022',
      skills: ['React Native', 'Mobile UI', 'API Integration']
    }
  ];

  const languages = [
    { name: 'Français', level: 'Natif', percentage: 100, color: 'from-blue-500 to-blue-600' },
    { name: 'Anglais', level: 'Intermédiaire', percentage: 75, color: 'from-green-500 to-green-600' }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
            <BookOpen className="text-purple-600" size={20} />
            <span className="text-purple-800 font-medium">Mon apprentissage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Formation & Langues
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-1 animate-fade-in-up delay-200">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 h-full">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mr-4">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-cyan-800 bg-clip-text text-transparent">Formation</h3>
              </div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="border-l-4 border-gradient-to-b from-blue-500 to-cyan-500 pl-6 pb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{edu.degree}</h4>
                      <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <Star className="text-yellow-500 mr-2" size={16} />
                        <span className="text-sm font-medium text-gray-700">{edu.grade}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1 animate-fade-in-up delay-400">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 h-full">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mr-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-800 to-emerald-800 bg-clip-text text-transparent">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-green-600 font-semibold text-sm mb-3">{cert.provider}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-white text-green-700 px-2 py-1 rounded-full border border-green-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="lg:col-span-1 animate-fade-in-up delay-600">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 h-full">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mr-4">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-800 to-red-800 bg-clip-text text-transparent">Langues</h3>
              </div>
              
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-gray-900 text-lg">{lang.name}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${lang.color} text-white`}>
                          {lang.level}
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ width: `${lang.percentage}%` }}
                          >
                            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>Débutant</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <div className="flex items-center mb-2">
                  <Sparkles className="text-purple-600 mr-2" size={16} />
                  <span className="text-sm font-semibold text-purple-800">En apprentissage</span>
                </div>
                <p className="text-xs text-purple-600">
                  Amélioration continue de l'anglais technique et exploration de nouvelles langues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;