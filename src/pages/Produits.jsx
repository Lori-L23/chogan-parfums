import Chogannoir from '../assets/chogan3.jpg'
import Chogannrose from '../assets/chogan1.jpg'
import Chogan from '../assets/chogan4.jpg'
import Vanille from '../assets/Vaniile.jpg'
import nuit from '../assets/nuit.jpg'
import reve from '../assets/chogan8.jpg'
import energie from '../assets/plan2.jpg'
import { useState } from "react";
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import ProductCard from "../components/ProductCard";




// Page Produits
const ProductsPage = () => {
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

export default ProductsPage;
