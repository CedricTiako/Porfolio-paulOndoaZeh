import React from 'react';
import { Heart, Code, MapPin, Mail, Phone, Linkedin, Github, MessageCircle, ArrowUp, Sparkles, Zap } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#experience', label: 'Expérience' },
    { href: '#projects', label: 'Projets' }
  ];

  const services = [
    'Développement Web',
    'Applications Mobile',
    'Intégration IA',
    'Consultation Tech'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Paul Ondoa Zeh
              </h3>
              <p className="text-xl text-purple-300 font-semibold mb-4">
                Développeur Web & Mobile | Spécialiste IA
              </p>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Créateur de solutions numériques innovantes, alliant expertise technique et intelligence artificielle 
                pour transformer vos idées en expériences digitales exceptionnelles.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin size={16} />
                </div>
                <span>Douala, Cameroun</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Mail size={16} />
                </div>
                <a href="mailto:paulondoa@gmail.com">paulondoa@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Phone size={16} />
                </div>
                <span>+237 695249787</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-200">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Sparkles className="mr-2 text-purple-400" size={20} />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up delay-400">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Zap className="mr-2 text-cyan-400" size={20} />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up delay-600">
          <a
            href="https://linkedin.com/in/paul-ondoa-zeh-38666936b"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2"
          >
            <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-blue-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="https://github.com/paulondoa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2"
          >
            <Github size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="https://wa.me/237695249787"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2"
          >
            <MessageCircle size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 to-green-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0 animate-fade-in-up delay-800">
              <span>Fait avec</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>et</span>
              <Code size={16} className="text-blue-500" />
              <span>à Douala, Cameroun</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 animate-fade-in-up delay-1000">
                <p>&copy; 2024 Paul Ondoa Zeh. Tous droits réservés.</p>
              </div>
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="group p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 animate-fade-in-up delay-1200"
                aria-label="Retour en haut"
              >
                <ArrowUp size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Availability Banner */}
        <div className="mt-8 text-center animate-fade-in-up delay-1400">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-full px-6 py-3 border border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium">Disponible pour de nouveaux projets</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;