import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import Chogannoir from './assets/chogan3.jpg'
import Chogannrose from './assets/chogan1.jpg'
import Chogan from './assets/chogan4.jpg'
import Chogan1 from './assets/chogan5.jpg'
import Vanille from './assets/Vaniile.jpg'
import nuit from './assets/nuit.jpg'
import reve from './assets/chogan8.jpg'
import energie from './assets/plan2.jpg'
import heroBackground from './assets/plan1.jpg'
import { Star, Truck, Shield, Heart, Users, Award, ChevronRight, Play } from 'lucide-react';
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

// Composant Header
const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-800 hover:text-purple-700">
          CHOGAN PARFUMS
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`hover:text-pink-600 ${location.pathname === '/' ? 'text-pink-600 font-bold' : 'text-gray-700'}`}
          >
            Accueil
          </Link>
          <Link 
            to="/produits" 
            className={`hover:text-pink-600 ${location.pathname === '/produits' ? 'text-pink-600 font-bold' : 'text-gray-700'}`}
          >
            Nos Parfums
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-pink-600 ${location.pathname === '/contact' ? 'text-pink-600 font-bold' : 'text-gray-700'}`}
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden text-2xl">☰</div>
      </div>
    </header>
  );
};

// Composant Footer
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CHOGAN PARFUMS</h3>
            <p>L'excellence en flacon</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact rapide</h3>
            <a href="tel:+237694647583" className="block hover:text-pink-400">+237 6 94 64 75 83</a>
            <a href="mailto:rudytezembong@icloud.com" className="block hover:text-pink-400 mt-2">rudytezembong@icloud.com</a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Réseaux sociaux</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-400">Instagram</a>
              <a href="#" className="hover:text-pink-400">Facebook</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2024 Chogan Parfums. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

// Composant ProductCard
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description.substring(0, 60)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-purple-800 font-bold text-lg">{product.price.toLocaleString()} Fcfa</span>
          <Link 
            to={`/produit/${product.id}`}
            className="bg-purple-800 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-200"
          >
            Voir détails
          </Link>
        </div>
      </div>
    </div>
  );
};

// Composant ProductDetail
const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Produit non trouvé</h2>
            <Link to="/produits" className="text-purple-600 hover:text-purple-700 mt-4 inline-block">
              Retour aux produits
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Link to="/produits" className="text-purple-600 hover:text-purple-700 mb-6 inline-block">
            ← Retour aux produits
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image du produit */}
            <div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* Détails du produit */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Caractéristiques :</h3>
                <p className="text-gray-600">{product.details}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Catégorie :</h3>
                <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {product.category === 'homme' ? 'Pour Homme' : 
                   product.category === 'femme' ? 'Pour Femme' : 'Unisexe'}
                </span>
              </div>
              
              <div className="mb-8">
                <span className="text-2xl font-bold text-purple-800">
                  {product.price.toLocaleString()} Fcfa
                </span>
              </div>
              
              <div className="flex space-x-4">
                <Link 
                  to="/contact"
                  state={{ product: product.name }}
                  className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded transition duration-200"
                >
                  Commander maintenant
                </Link>
                <Link 
                  to="/produits"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-3 px-8 rounded transition duration-200"
                >
                  Continuer mes achats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Page d'Accueil
const HomePage = () => {
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
                
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full inline-flex items-center transition duration-300 border border-white/30">
                  <Play className="mr-2 w-5 h-5" />
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
                    className={`w-3 h-3 rounded-full transition duration-300 ${
                      index === currentTestimonial ? 'bg-pink-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Restez Informé</h2>
            <p className="text-xl text-gray-600 mb-8">
              Recevez nos dernières nouveautés et offres exclusives
            </p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
                S'abonner
              </button>
            </div>
          </div>
        </section>

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

// Page Produits
const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  
  const filteredProducts = selectedCategory === 'tous' 
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Tous nos parfums</h1>
          
          {/* Filtres */}
          <div className="mb-8 flex flex-wrap gap-4">
            <button 
              onClick={() => setSelectedCategory('tous')}
              className={`px-4 py-2 rounded transition duration-200 ${
                selectedCategory === 'tous' 
                  ? 'bg-purple-800 text-white' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Tous
            </button>
            <button 
              onClick={() => setSelectedCategory('homme')}
              className={`px-4 py-2 rounded transition duration-200 ${
                selectedCategory === 'homme' 
                  ? 'bg-purple-800 text-white' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Pour Homme
            </button>
            <button 
              onClick={() => setSelectedCategory('femme')}
              className={`px-4 py-2 rounded transition duration-200 ${
                selectedCategory === 'femme' 
                  ? 'bg-purple-800 text-white' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Pour Femme
            </button>
            <button 
              onClick={() => setSelectedCategory('unisexe')}
              className={`px-4 py-2 rounded transition duration-200 ${
                selectedCategory === 'unisexe' 
                  ? 'bg-purple-800 text-white' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Unisexe
            </button>
          </div>
          
          {/* Grille de produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Page Contact
const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: location.state?.product 
      ? `Je suis intéressé par le parfum ${location.state.product}` 
      : 'Je suis intéressé par vos parfums'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/237694647583?text=Bonjour, je m'appelle ${formData.name}. ${formData.message}. Mon numéro est ${formData.phone}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Contactez-nous</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Passer commande</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">Votre nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700">Numéro de téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded transition duration-200"
                >
                  Envoyer via WhatsApp
                </button>
              </form>
            </div>
            
            {/* Contact direct */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact direct</h2>
              <div className="bg-gray-100 p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Par téléphone</h3>
                  <a 
                    href="tel:+237694647583" 
                    className="text-2xl font-bold text-purple-800 hover:text-purple-700"
                  >
                    +237 6 94 64 75 83
                  </a>
                  <p className="mt-2 text-gray-600">Disponible du lundi au vendredi, 9h-18h</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Par email</h3>
                  <a 
                    href="mailto:rudytezembong@icloud.com" 
                    className="text-lg text-purple-800 hover:text-purple-700"
                  >
                    rudytezembong@icloud.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Adresse</h3>
                  <p className="text-gray-600">Alimentation Repere-Bangue<br />Bonnamoussadi, Kotto</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Modes de paiement</h3>
                  <p className="text-gray-600">Mobile Money, Espèces à la livraison</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Composant principal App
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;