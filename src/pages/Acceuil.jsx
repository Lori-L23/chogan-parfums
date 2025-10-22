import React from "react";
import { useState, useEffect } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer"
import Chogannoir from '../assets/chogan3.jpg'
import Chogannrose from '../assets/chogan1.jpg'
import Chogan from '../assets/chogan4.jpg'
import Vanille from '../assets/Vaniile.jpg'
import nuit from '../assets/nuit.jpg'
import reve from '../assets/chogan8.jpg'
import energie from '../assets/plan2.jpg'
import heroBackground from '../assets/pLan1.jpg'
import ProductCard from "../components/ProductCard";
import { Link } from 'react-router-dom';

import { Star, Truck, Shield, Heart, Users, Award, ChevronRight, Play, X, Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';



// Page d'Accueil
const HomePage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoUrl = "https://www.bing.com/videos/riverview/relatedvideo?q=chogan+parfum&&mid=5E613D8B6361D17829815E613D8B6361D1782981&&mmscn=stvo&FORM=VRDGAR";

  // Données des produits
  const productsData = [
    {
      id: 1,
      name: "Chogan Noir",
      description: "Un parfum intense et mystérieux pour homme avec des notes de bois de santal, cuir et épices noires.",
      price: 30000,
      image: Chogannoir,
      category: "homme",
      featured: true
    },
    {
      id: 2,
      name: "Chogan Rose",
      description: "Une fragrance florale et délicate pour femme avec des notes de rose bulgare, vanille et musc blanc.",
      price: 15000,
      image: Chogannrose,
      category: "femme",
      featured: true
    },
    {
      id: 3,
      name: "Chogan Citrus",
      description: "Une explosion de fraîcheur avec des notes de citron vert, pamplemousse et menthe poivrée.",
      price: 6500,
      image: Chogan,
      category: "unisexe",
      featured: false
    },
    {
      id: 4,
      name: "Chogan Oud Royal",
      description: "Un mélange luxueux d'oud précieux, safran et bois de rose pour un parfum envoûtant.",
      price: 45000,
      image: "https://www.ensaroud.com/wp-content/uploads/2022/09/50ml-Oud-Royale-PP-50ml-2-2.jpg",
      category: "homme",
      featured: true
    },
    {
      id: 5,
      name: "Chogan Vanille",
      description: "Une douceur envoûtante aux notes de vanille de Madagascar, caramel et amande.",
      price: 12000,
      image: Vanille,
      category: "femme",
      featured: false
    },
    {
      id: 6,
      name: "Chogan Bleu",
      description: "Fraîcheur marine avec des notes d'algues, sel marin et bergamote pour l'été.",
      price: 18000,
      image: "https://tse3.mm.bing.net/th/id/OIP.FILIwb1xMF6ll5EcEnHQ_wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "unisexe",
      featured: true
    },
    {
      id: 7,
      name: "Chogan Amber",
      description: "Chaleur orientale avec des notes d'ambre gris, encens et baies rouges.",
      price: 25000,
      image: "https://duftino.de/wp-content/uploads/Chogan-Luxury-Line-Parfum-Duftino-936x1024.jpg",
      category: "femme",
      featured: false
    },
    {
      id: 8,
      name: "Chogan Bois",
      description: "Élégance boisée avec des notes de cèdre, patchouli et vétiver pour l'homme moderne.",
      price: 22000,
      image: "https://tse3.mm.bing.net/th/id/OIP.Oh7PxTVOi3gvCAQkxBjAlQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "homme",
      featured: true
    },
    {
      id: 9,
      name: "Chogan Jardin",
      description: "Bouquet floral printanier avec des notes de jasmin, muguet et pêche blanche.",
      price: 14000,
      image: "https://tse2.mm.bing.net/th/id/OIP.rhRKor-h9-RgtobMBjTzVgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "femme",
      featured: false
    },
    {
      id: 10,
      name: "Chogan Sport",
      description: "Énergisant avec des notes de citron, gingembre et musc pour les actifs.",
      price: 9500,
      image: "https://tse1.mm.bing.net/th/id/OIP.jf2niTcKxBqRrgRlIuj-GQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "unisexe",
      featured: false
    },
    {
      id: 11,
      name: "Shogan Nuit",
      description: "Mystère nocturne avec des notes de tubéreuse, gardenia et bois de nuit.",
      price: 28000,
      image: nuit,
      category: "femme",
      featured: true
    },
    {
      id: 12,
      name: "Chogan Cuir",
      description: "Audacieux avec des notes de cuir suédé, tabac blond et poivre noir.",
      price: 32000,
      image: "https://tse1.mm.bing.net/th/id/OIP.uOvSQ1FuT6oYPf_cZt8RogHaHa?w=500&h=500&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "homme",
      featured: false
    },
    {
      id: 13,
      name: "Chogan Fraîcheur",
      description: "Pureté avec des notes de thé vert, bambou et fleur de lotus.",
      price: 11000,
      image: "https://senteurprestige.com/storage/products/chogan-produit-098.webp",
      category: "unisexe",
      featured: false
    },
    {
      id: 14,
      name: "Chogan Oriental",
      description: "Exotisme avec des notes de cardamome, cannelle et bois précieux.",
      price: 38000,
      image: "https://tse4.mm.bing.net/th/id/OIP.6OfbFSqGupA296bwAZQfvwHaGh?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "homme",
      featured: true
    },
    {
      id: 15,
      name: "Chogan Blanc",
      description: "Pureté avec des notes de coton, musc blanc et fleur d'oranger.",
      price: 16000,
      image: "https://th.bing.com/th/id/OIP.LA5q1qsijHj_fL9FLRaTSQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "femme",
      featured: false
    },
    {
      id: 16,
      name: "Chogan Aventure",
      description: "Audace avec des notes de poivre, genévrier et bois de gaïac.",
      price: 27000,
      image: "https://www.fraginspiration.com/wp-content/uploads/2021/02/image_J5j.webp",
      category: "homme",
      featured: false
    },
    {
      id: 17,
      name: "Chogan Rêve",
      description: "Onirique avec des notes de lavande, camomille et miel sauvage.",
      price: 13000,
      image: reve,
      category: "femme",
      featured: false
    },
    {
      id: 18,
      name: "Chogan Énergie",
      description: "Dynamisme avec des notes de pamplemousse, gingembre et menthe verte.",
      price: 8500,
      image: energie,
      category: "unisexe",
      featured: false
    },
    {
      id: 19,
      name: "Chogan Prestige",
      description: "Luxe avec des notes de caviar, champagne et iris pallida.",
      price: 55000,
      image: "https://th.bing.com/th/id/OIP.KVf-YrL3Gwoo8yjvyQtAdQHaHq?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "homme",
      featured: true
    },
    {
      id: 20,
      name: "Chogan Mystère",
      description: "Envoûtant avec des notes d'orchidée noire, fève tonka et bois d'agar.",
      price: 42000,
      image: "https://www.fraginspiration.com/wp-content/uploads/2021/03/image_Gz8.webp",
      category: "femme",
      featured: true
    }
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const featuredProducts = productsData.filter(product => product.featured);


  const testimonials = [
    {
      name: "Marie Dubois",
      rating: 5,
      comment: "Des parfums d'une qualité exceptionnelle ! Je recommande vivement Chogan.",
      avatar: "👩"
    },
    {
      name: "Jean Martin",
      rating: 5,
      comment: "Service client impeccable et livraison rapide. Mes parfums préférés !",
      avatar: "👨"
    },
    {
      name: "Sophie Laurent",
      rating: 5,
      comment: "Une gamme variée avec des senteurs uniques. J'adore !",
      avatar: "👩‍🦱"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Clients satisfaits", icon: Users },
    { number: "150+", label: "Parfums disponibles", icon: Heart },
    { number: "5★", label: "Note moyenne", icon: Star },
    { number: "24h", label: "Livraison express", icon: Truck }
  ];

  const features = [
    {
      icon: Shield,
      title: "Qualité Premium",
      description: "Nos parfums sont élaborés avec les meilleurs ingrédients"
    },
    {
      icon: Truck,
      title: "Livraison Rapide",
      description: "Livraison express en 24-48h dans tout le Cameroun"
    },
    {
      icon: Award,
      title: "Marque Reconnue",
      description: "Chogan est une marque italienne de renommée internationale"
    }
  ];

  // Auto-slide pour les témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    // Validation de l'email
    if (!email) {
      setStatus('error');
      setMessage('Veuillez entrer votre adresse email');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Veuillez entrer une adresse email valide');
      return;
    }

    // Simulation d'envoi (loading)
    setStatus('loading');
    setMessage('Inscription en cours...');

    // Simuler un délai d'envoi (remplacer par votre vraie logique d'API)
    setTimeout(() => {
      // Simulation de succès
      setStatus('success');
      setMessage('🎉 Merci ! Vous êtes maintenant inscrit à notre newsletter.');

      // Réinitialiser après 5 secondes
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative py-32 bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/60 to-pink-800/40"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Marque Premium Italienne</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                CHOGAN
                <span className="block text-pink-300">PARFUMS</span>
              </h1>

              <p className="text-xl md:text-3xl mb-8 text-white/90 font-light">
                L'élégance en chaque flacon
              </p>

              <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
                Découvrez notre collection exclusive de parfums de luxe italiens,
                créés avec passion et savoir-faire traditionnel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/produits"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <span>Découvrir la Collection</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>

                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full inline-flex items-center transition duration-300 border border-white/30 group"
                >
                  <div className="bg-white/30 rounded-full p-1 mr-3 group-hover:bg-white/50 transition">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  <span>Voir la Vidéo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Modal Vidéo */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div className="relative w-full max-w-4xl">
              {/* Bouton de fermeture */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-pink-400 transition"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Vidéo YouTube intégrée */}
              <div
                className="relative bg-black rounded-lg overflow-hidden shadow-2xl"
                style={{ paddingBottom: '56.25%' }}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={videoUrl}
                  title="Vidéo de démonstration Chogan Parfums"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="text-white text-center mt-4 text-sm">
                Appuyez sur ESC ou cliquez à l'extérieur pour fermer
              </p>
            </div>
          </div>
        )}

        {/* Section Statistiques */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-purple-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Caractéristiques */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Pourquoi Choisir Chogan ?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Une expérience olfactive unique avec des standards de qualité italiens
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-full group-hover:from-purple-200 group-hover:to-pink-200 transition duration-300">
                      <feature.icon className="w-10 h-10 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produits Featured Amélioré */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Best-Sellers</h2>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez les parfums les plus appréciés de notre collection
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/produits"
                className="inline-flex items-center bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300"
              >
                <span>Voir Tous les Produits</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className="py-20 bg-purple-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-800/50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Ce Que Disent Nos Clients</h2>
              <p className="text-xl text-purple-100">
                Plus de 10,000 clients satisfaits nous font confiance
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>

                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl italic mb-6 text-white/90">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>

                <cite className="text-lg font-semibold text-pink-200">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </div>

              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition duration-300 ${index === currentTestimonial ? 'bg-pink-400' : 'bg-white/30'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Restez Informé
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Recevez nos dernières nouveautés et offres exclusives directement dans votre boîte mail
              </p>

              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Votre adresse email"
                    className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-gray-800"
                    disabled={status === 'loading'}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>S'abonner</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Messages de statut */}
              {message && (
                <div
                  className={`max-w-md mx-auto p-4 rounded-lg flex items-center gap-3 transition-all duration-300 ${status === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-300'
                      : status === 'error'
                        ? 'bg-red-100 text-red-800 border border-red-300'
                        : 'bg-blue-100 text-blue-800 border border-blue-300'
                    }`}
                >
                  {status === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                  {status === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                  <p className="text-sm font-medium">{message}</p>
                </div>
              )}

              {/* Avantages de l'inscription */}
              {status === 'idle' && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Offres Exclusives</h3>
                      <p className="text-sm text-gray-600">Réductions réservées aux abonnés</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Nouveautés</h3>
                      <p className="text-sm text-gray-600">Découvrez nos parfums en avant-première</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Conseils</h3>
                      <p className="text-sm text-gray-600">Astuces et guides sur les parfums</p>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-6">
                En vous inscrivant, vous acceptez de recevoir nos emails marketing.
                Vous pouvez vous désabonner à tout moment.
              </p>
            </div>
          </div>
        </section>x

        {/* Call to Action Final */}
        <section className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Prêt à Trouver Votre Parfum Idéal ?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-pink-100">
              Contactez-nous directement pour une expérience personnalisée
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full inline-flex items-center justify-center transition duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span>Commander Maintenant</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/produits"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-10 rounded-full inline-flex items-center justify-center transition duration-300"
              >
                <span>Parcourir le Catalogue</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;