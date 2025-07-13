import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  Smartphone, 
  Globe, 
  Database, 
  Palette, 
  Zap, 
  Users, 
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

const ProjectCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [complexity, setComplexity] = useState('medium');
  const [timeline, setTimeline] = useState('normal');
  const [features, setFeatures] = useState<string[]>([]);
  const [estimate, setEstimate] = useState({ cost: 0, duration: 0 });
  const [showResults, setShowResults] = useState(false);

  const services = [
    {
      id: 'website',
      name: 'Site Web',
      icon: Globe,
      basePrice: 800,
      baseDuration: 2,
      color: 'from-blue-500 to-cyan-500',
      description: 'Site vitrine ou corporate'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      icon: DollarSign,
      basePrice: 1500,
      baseDuration: 4,
      color: 'from-green-500 to-emerald-500',
      description: 'Boutique en ligne complète'
    },
    {
      id: 'mobile',
      name: 'App Mobile',
      icon: Smartphone,
      basePrice: 2000,
      baseDuration: 6,
      color: 'from-purple-500 to-pink-500',
      description: 'Application iOS/Android'
    },
    {
      id: 'webapp',
      name: 'App Web',
      icon: Zap,
      basePrice: 1200,
      baseDuration: 3,
      color: 'from-orange-500 to-red-500',
      description: 'Application web complexe'
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      icon: Palette,
      basePrice: 600,
      baseDuration: 2,
      color: 'from-indigo-500 to-purple-500',
      description: 'Design et prototypage'
    },
    {
      id: 'database',
      name: 'Base de Données',
      icon: Database,
      basePrice: 400,
      baseDuration: 1,
      color: 'from-gray-500 to-slate-500',
      description: 'Architecture et optimisation'
    }
  ];

  const complexityOptions = [
    {
      id: 'simple',
      name: 'Simple',
      multiplier: 0.7,
      description: 'Fonctionnalités de base',
      icon: Target,
      color: 'from-green-400 to-green-500'
    },
    {
      id: 'medium',
      name: 'Moyen',
      multiplier: 1,
      description: 'Fonctionnalités standards',
      icon: TrendingUp,
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 'complex',
      name: 'Complexe',
      multiplier: 1.5,
      description: 'Fonctionnalités avancées',
      icon: Award,
      color: 'from-purple-400 to-purple-500'
    }
  ];

  const timelineOptions = [
    {
      id: 'urgent',
      name: 'Urgent',
      multiplier: 1.5,
      description: 'Livraison rapide',
      color: 'from-red-400 to-red-500'
    },
    {
      id: 'normal',
      name: 'Normal',
      multiplier: 1,
      description: 'Délai standard',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 'flexible',
      name: 'Flexible',
      multiplier: 0.8,
      description: 'Pas de contrainte',
      color: 'from-green-400 to-green-500'
    }
  ];

  const additionalFeatures = [
    { id: 'seo', name: 'Optimisation SEO', price: 300, duration: 0.5 },
    { id: 'analytics', name: 'Analytics avancés', price: 200, duration: 0.3 },
    { id: 'security', name: 'Sécurité renforcée', price: 400, duration: 0.5 },
    { id: 'payment', name: 'Paiement mobile', price: 500, duration: 1 },
    { id: 'multilang', name: 'Multi-langues', price: 350, duration: 0.5 },
    { id: 'api', name: 'API personnalisée', price: 600, duration: 1 },
    { id: 'admin', name: 'Panel admin', price: 450, duration: 0.8 },
    { id: 'maintenance', name: 'Maintenance 6 mois', price: 300, duration: 0 }
  ];

  useEffect(() => {
    calculateEstimate();
  }, [selectedServices, complexity, timeline, features]);

  const calculateEstimate = () => {
    let totalCost = 0;
    let totalDuration = 0;

    // Calcul des services sélectionnés
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        totalCost += service.basePrice;
        totalDuration += service.baseDuration;
      }
    });

    // Calcul des fonctionnalités additionnelles
    features.forEach(featureId => {
      const feature = additionalFeatures.find(f => f.id === featureId);
      if (feature) {
        totalCost += feature.price;
        totalDuration += feature.duration;
      }
    });

    // Application des multiplicateurs
    const complexityMultiplier = complexityOptions.find(c => c.id === complexity)?.multiplier || 1;
    const timelineMultiplier = timelineOptions.find(t => t.id === timeline)?.multiplier || 1;

    totalCost *= complexityMultiplier * timelineMultiplier;
    totalDuration *= complexityMultiplier;

    setEstimate({
      cost: Math.round(totalCost),
      duration: Math.round(totalDuration * 10) / 10
    });

    setShowResults(selectedServices.length > 0);
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleFeature = (featureId: string) => {
    setFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleContactSubmit = () => {
    const selectedServiceNames = selectedServices.map(id => 
      services.find(s => s.id === id)?.name
    ).join(', ');
    
    const selectedFeatureNames = features.map(id => 
      additionalFeatures.find(f => f.id === id)?.name
    ).join(', ');

    const message = `Bonjour ! Je suis intéressé(e) par un devis pour :
    
Services : ${selectedServiceNames}
Complexité : ${complexityOptions.find(c => c.id === complexity)?.name}
Délai : ${timelineOptions.find(t => t.id === timeline)?.name}
Fonctionnalités : ${selectedFeatureNames}

Estimation : ${estimate.cost}€ - ${estimate.duration} semaines

Pouvons-nous discuter de ce projet ?`;

    const whatsappUrl = `https://wa.me/237695249787?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-3 glass-card rounded-full px-8 py-4 mb-8 hover:scale-105 transition-transform duration-500">
            <Calculator className="text-purple-600 animate-float" size={24} />
            <span className="text-purple-800 dark:text-purple-300 font-semibold text-lg">Estimation gratuite</span>
            <Sparkles className="text-cyan-600 animate-float delay-500" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text-animated">Calculateur de Projet</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full animate-gradient-shift"></div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed">
            Obtenez une estimation instantanée du coût et de la durée de votre projet
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <div className="glass-card rounded-3xl p-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Globe className="mr-3 text-purple-600" size={28} />
                Services souhaités
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedServices.includes(service.id)
                        ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                    }`}
                    onClick={() => toggleService(service.id)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl`}>
                        <service.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white">{service.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>À partir de {service.basePrice}€</span>
                          <span>~{service.baseDuration} semaines</span>
                        </div>
                      </div>
                      {selectedServices.includes(service.id) && (
                        <CheckCircle className="text-purple-600" size={24} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complexité */}
            <div className="glass-card rounded-3xl p-8 animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <TrendingUp className="mr-3 text-blue-600" size={28} />
                Niveau de complexité
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {complexityOptions.map((option, index) => (
                  <div 
                    key={option.id}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      complexity === option.id
                        ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                    onClick={() => setComplexity(option.id)}
                  >
                    <div className="text-center">
                      <div className={`inline-flex p-3 bg-gradient-to-r ${option.color} rounded-xl mb-4`}>
                        <option.icon className="text-white" size={24} />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{option.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{option.description}</p>
                      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Multiplicateur: x{option.multiplier}
                      </div>
                    </div>
                    {complexity === option.id && (
                      <div className="absolute top-2 right-2">
                        <CheckCircle className="text-blue-600" size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="glass-card rounded-3xl p-8 animate-fade-in-up delay-400">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Clock className="mr-3 text-green-600" size={28} />
                Délai souhaité
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {timelineOptions.map((option, index) => (
                  <div 
                    key={option.id}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      timeline === option.id
                        ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600'
                    }`}
                    onClick={() => setTimeline(option.id)}
                  >
                    <div className="text-center">
                      <div className={`inline-flex p-3 bg-gradient-to-r ${option.color} rounded-xl mb-4`}>
                        <Clock className="text-white" size={24} />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{option.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{option.description}</p>
                      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Coût: x{option.multiplier}
                      </div>
                    </div>
                    {timeline === option.id && (
                      <div className="absolute top-2 right-2">
                        <CheckCircle className="text-green-600" size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Fonctionnalités additionnelles */}
            <div className="glass-card rounded-3xl p-8 animate-fade-in-up delay-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Zap className="mr-3 text-orange-600" size={28} />
                Fonctionnalités additionnelles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {additionalFeatures.map((feature, index) => (
                  <div 
                    key={feature.id}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-105 ${
                      features.includes(feature.id)
                        ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600'
                    }`}
                    onClick={() => toggleFeature(feature.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        features.includes(feature.id)
                          ? 'border-orange-500 bg-orange-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {features.includes(feature.id) && (
                          <CheckCircle className="text-white" size={16} />
                        )}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{feature.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-orange-600">+{feature.price}€</div>
                      {feature.duration > 0 && (
                        <div className="text-xs text-gray-500 dark:text-gray-400">+{feature.duration}sem</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Estimation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className={`glass-card rounded-3xl p-8 transition-all duration-500 ${
                showResults ? 'animate-scale-in' : 'opacity-50'
              }`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <DollarSign className="mr-3 text-green-600" size={28} />
                  Estimation
                </h3>

                {showResults ? (
                  <div className="space-y-6">
                    {/* Coût */}
                    <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                      <div className="text-4xl font-bold gradient-text-animated mb-2">
                        {estimate.cost.toLocaleString()}€
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Coût estimé</div>
                    </div>

                    {/* Durée */}
                    <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
                      <div className="text-4xl font-bold gradient-text-animated mb-2">
                        {estimate.duration}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Semaines</div>
                    </div>

                    {/* Services sélectionnés */}
                    {selectedServices.length > 0 && (
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">Services inclus:</h4>
                        <div className="space-y-2">
                          {selectedServices.map(serviceId => {
                            const service = services.find(s => s.id === serviceId);
                            return service ? (
                              <div key={serviceId} className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="text-green-500" size={16} />
                                <span className="text-gray-700 dark:text-gray-300">{service.name}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {/* Fonctionnalités */}
                    {features.length > 0 && (
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">Options:</h4>
                        <div className="space-y-2">
                          {features.map(featureId => {
                            const feature = additionalFeatures.find(f => f.id === featureId);
                            return feature ? (
                              <div key={featureId} className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="text-orange-500" size={16} />
                                <span className="text-gray-700 dark:text-gray-300">{feature.name}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {/* Bouton de contact */}
                    <button
                      onClick={handleContactSubmit}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium flex items-center justify-center space-x-2 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span>Demander un devis</span>
                      <ArrowRight size={20} />
                    </button>

                    <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                      * Estimation indicative - Devis personnalisé gratuit
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-500 dark:text-gray-400">
                      Sélectionnez au moins un service pour voir l'estimation
                    </p>
                  </div>
                )}
              </div>

              {/* Garanties */}
              <div className="glass-card rounded-3xl p-6 mt-6 animate-fade-in-up delay-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="mr-2 text-green-600" size={20} />
                  Nos garanties
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 dark:text-gray-300">Devis gratuit et sans engagement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 dark:text-gray-300">Révisions illimitées</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 dark:text-gray-300">Support technique inclus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 dark:text-gray-300">Livraison dans les délais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;