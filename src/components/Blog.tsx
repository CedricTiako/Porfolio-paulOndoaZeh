import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Eye, 
  ArrowRight, 
  Tag, 
  Search,
  Filter,
  Sparkles,
  TrendingUp,
  Code,
  Brain,
  Smartphone,
  Globe,
  Database,
  Zap,
  Star,
  User,
  MessageCircle,
  Share2
} from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
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

    const element = document.getElementById('blog');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'Tous les articles', icon: BookOpen, color: 'from-gray-500 to-gray-600' },
    { id: 'ai', name: 'Intelligence Artificielle', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'web', name: 'Développement Web', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
    { id: 'database', name: 'Base de données', icon: Database, color: 'from-orange-500 to-red-500' },
    { id: 'tips', name: 'Conseils & Astuces', icon: Zap, color: 'from-yellow-500 to-orange-500' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Comment l\'IA révolutionne le développement web en 2024',
      excerpt: 'Découvrez comment l\'intelligence artificielle transforme notre façon de coder et optimise la productivité des développeurs.',
      content: 'L\'IA devient un partenaire indispensable pour les développeurs modernes...',
      category: 'ai',
      readTime: '8 min',
      publishDate: '2024-01-15',
      views: 1250,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['IA', 'Développement', 'Productivité', 'Innovation'],
      featured: true
    },
    {
      id: 2,
      title: 'React vs Vue.js : Guide complet pour choisir en 2024',
      excerpt: 'Comparaison détaillée entre React et Vue.js avec des exemples pratiques et des recommandations selon vos projets.',
      content: 'Le choix entre React et Vue.js dépend de plusieurs facteurs...',
      category: 'web',
      readTime: '12 min',
      publishDate: '2024-01-10',
      views: 890,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Vue.js', 'JavaScript', 'Frontend']
    },
    {
      id: 3,
      title: 'Optimisation des performances mobile avec React Native',
      excerpt: 'Techniques avancées pour améliorer les performances de vos applications React Native et offrir une expérience utilisateur fluide.',
      content: 'Les performances mobile sont cruciales pour le succès d\'une application...',
      category: 'mobile',
      readTime: '10 min',
      publishDate: '2024-01-05',
      views: 675,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Performance', 'Mobile', 'Optimisation']
    },
    {
      id: 4,
      title: 'Supabase vs Firebase : Le guide ultime 2024',
      excerpt: 'Comparaison approfondie entre Supabase et Firebase pour vous aider à choisir la meilleure solution backend.',
      content: 'Le choix du backend est crucial pour le succès de votre projet...',
      category: 'database',
      readTime: '15 min',
      publishDate: '2023-12-28',
      views: 1420,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Supabase', 'Firebase', 'Backend', 'Database']
    },
    {
      id: 5,
      title: '10 astuces pour coder plus efficacement avec l\'IA',
      excerpt: 'Découvrez mes techniques personnelles pour utiliser l\'IA comme assistant de développement et booster votre productivité.',
      content: 'L\'IA peut considérablement améliorer votre workflow de développement...',
      category: 'tips',
      readTime: '6 min',
      publishDate: '2023-12-20',
      views: 980,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['IA', 'Productivité', 'Conseils', 'Workflow'],
      featured: true
    },
    {
      id: 6,
      title: 'Architecture moderne d\'une application web full-stack',
      excerpt: 'Guide complet pour structurer une application moderne avec React, Node.js et une base de données relationnelle.',
      content: 'Une bonne architecture est la fondation d\'une application réussie...',
      category: 'web',
      readTime: '18 min',
      publishDate: '2023-12-15',
      views: 756,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Architecture', 'Full-stack', 'React', 'Node.js']
    }
  ];

  useEffect(() => {
    let filtered = articles;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredArticles(filtered);
  }, [selectedCategory, searchTerm]);

  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.slice(0, 3);

  const handleReadMore = (articleId) => {
    // Simulation d'ouverture d'article
    console.log(`Ouverture de l'article ${articleId}`);
  };

  const handleShare = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            <BookOpen className="text-purple-600 animate-float" size={24} />
            <span className="text-purple-800 dark:text-purple-300 font-semibold text-lg">Expertise & Partage</span>
            <Sparkles className="text-cyan-600 animate-float delay-500" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text-animated">Blog & Articles</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full animate-gradient-shift"></div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Découvrez mes réflexions sur le développement moderne, l'IA et les dernières technologies
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up delay-400">
          <div className="glass-card rounded-3xl p-8">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-2xl font-medium transition-all duration-500 hover:scale-105 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <category.icon size={18} />
                  <span className="text-sm">{category.name}</span>
                  {selectedCategory === category.id && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {selectedCategory === 'all' && (
          <div className="mb-20 animate-fade-in-up delay-600">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text-animated">Articles en vedette</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredArticles.map((article, index) => (
                <div 
                  key={article.id}
                  className="glass-card glass-card-hover rounded-3xl overflow-hidden group cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => handleReadMore(article.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium">
                        Vedette
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(article);
                        }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <Share2 size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(article.publishDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={14} />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                      {article.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <User size={16} />
                        <span>Paul Ondoa Zeh</span>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                        <span>Lire l'article</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="animate-fade-in-up delay-800">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold gradient-text-animated">
              {selectedCategory === 'all' ? 'Tous les articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <Filter size={16} />
              <span className="text-sm">{filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div 
                key={article.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleReadMore(article.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${categories.find(c => c.id === article.category)?.color} text-white rounded-full text-xs font-medium`}>
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <Eye size={14} />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(article.publishDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                        +{article.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(article);
                        }}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300"
                      >
                        <Share2 size={14} className="text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                        <MessageCircle size={14} className="text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-600 dark:text-purple-400 text-sm font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                      <span>Lire</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 animate-fade-in-up delay-1000">
          <div className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <TrendingUp className="text-purple-600 mx-auto mb-6 animate-float" size={48} />
            <h3 className="text-3xl font-bold gradient-text-animated mb-6">
              Restez informé des dernières tendances
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Recevez mes derniers articles sur le développement, l'IA et les technologies modernes directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-xl">
                S'abonner
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Pas de spam, désabonnement en un clic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;