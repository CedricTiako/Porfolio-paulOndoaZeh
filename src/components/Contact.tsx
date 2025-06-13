import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, User, FileText, Zap, CheckCircle, Clock, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'paulondoa@gmail.com',
      href: 'mailto:paulondoa@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+237 695249787',
      href: 'tel:+237695249787',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      secondary: '+237 673816149'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Douala, Cameroun',
      href: '#',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/paul-ondoa-zeh-38666936b',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'from-blue-500 to-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/paulondoa',
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'from-gray-700 to-gray-800'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      href: 'https://wa.me/237695249787',
      color: 'from-green-600 to-green-700',
      hoverColor: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
            <Sparkles className="text-purple-600" size={20} />
            <span className="text-purple-800 font-medium">Restons connectés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités. 
            Je réponds généralement sous 24h.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 bg-gradient-to-r ${info.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 text-sm font-medium mb-1">{info.label}</p>
                        <a 
                          href={info.href} 
                          className="text-gray-900 font-semibold hover:text-purple-600 transition-colors duration-300 text-lg"
                        >
                          {info.value}
                        </a>
                        {info.secondary && (
                          <p className="text-gray-700 text-sm mt-1">{info.secondary}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
                Réseaux sociaux
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 bg-gradient-to-r ${social.color} rounded-2xl hover:${social.hoverColor} transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 text-center`}
                  >
                    <social.icon size={24} className="text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white text-sm font-medium">{social.name}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.hoverColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-2xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">Disponible pour de nouveaux projets</span>
              </div>
              <p className="text-green-100 text-sm">
                Actuellement ouvert aux opportunités freelance et collaborations à long terme.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
                Envoyez-moi un message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h4>
                  <p className="text-gray-600">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors duration-300" size={20} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors duration-300" size={20} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors duration-300" size={20} />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Sujet de votre message"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                      placeholder="Décrivez votre projet ou votre demande..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock size={20} className="animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Envoyer le message</span>
                        <Zap size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;