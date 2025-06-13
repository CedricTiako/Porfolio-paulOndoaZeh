import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, DollarSign, Eye, Code2, Zap, Star, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'GeoFriends App',
      description: 'Application mobile de géolocalisation d\'amis avec intégration de fonctionnalités IA pour suggérer des points de rencontre optimaux.',
      longDescription: 'Une application révolutionnaire qui utilise l\'IA pour analyser les préférences des utilisateurs et suggérer des lieux de rencontre parfaits.',
      technologies: ['React Native', 'Supabase', 'IA', 'Géolocalisation', 'Maps API'],
      type: 'Mobile',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      stats: { users: '500+', rating: '4.8', downloads: '2K+' },
      features: ['Géolocalisation temps réel', 'Suggestions IA', 'Chat intégré', 'Notifications push']
    },
    {
      title: 'MonBudget',
      description: 'Application web de gestion de finances personnelles avec tableaux de bord interactifs et analyses de dépenses.',
      longDescription: 'Plateforme complète de gestion financière avec analyses prédictives et conseils personnalisés basés sur l\'IA.',
      technologies: ['Vue.js', 'Firebase', 'Chart.js', 'PWA', 'AI Analytics'],
      type: 'Web',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      stats: { transactions: '10K+', savings: '€50K+', users: '200+' },
      features: ['Analyses prédictives', 'Budgets intelligents', 'Alertes automatiques', 'Rapports détaillés']
    },
    {
      title: 'MonPortfolio',
      description: 'Site personnel de présentation avec code partiellement généré avec l\'aide d\'IA pour optimiser les performances et l\'expérience utilisateur.',
      longDescription: 'Portfolio moderne développé avec les dernières technologies et optimisé par l\'IA pour une expérience utilisateur exceptionnelle.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'IA', 'Vite'],
      type: 'Web',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      stats: { visitors: '1K+', performance: '98%', accessibility: '100%' },
      features: ['Design responsive', 'Animations fluides', 'SEO optimisé', 'Performance maximale']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-6 border border-white/20">
            <Code2 className="text-purple-400" size={20} />
            <span className="text-purple-300 font-medium">Mes créations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projets Personnels
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl h-full">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}></div>
                
                {/* Project Header */}
                <div className={`h-40 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Floating Icons */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${2 + Math.random() * 3}s`
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="absolute top-6 right-6">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <project.icon size={28} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                      {project.type}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(project.stats).map(([key, value], statIndex) => (
                          <div key={statIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                            <div className="text-white font-bold text-sm">{value}</div>
                            <div className="text-white/80 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {hoveredProject === index ? project.longDescription : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium border border-white/20 group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features (shown on hover) */}
                  <div className={`mb-6 transition-all duration-300 ${hoveredProject === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Fonctionnalités clés:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <Star size={10} className="mr-1 text-yellow-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-sm font-medium group-hover:scale-105 shadow-lg">
                      <Eye size={16} />
                      <span>Voir le projet</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-3 bg-white/10 text-gray-300 rounded-xl hover:bg-white/20 hover:text-white transition-all duration-300 text-sm font-medium border border-white/20">
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up delay-600">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <Zap className="text-yellow-400 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">Découvrez plus de projets</h3>
            <p className="text-gray-300 mb-6">
              Explorez mon GitHub pour voir l'ensemble de mes créations et contributions open source
            </p>
            <a 
              href="https://github.com/paulondoa" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              <span>Voir sur GitHub</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;