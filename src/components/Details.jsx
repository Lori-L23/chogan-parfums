import { useParams } from "react-router-dom";
import Header from "../layouts/header";
import Footer from "../layouts/footer";


// Composant ProductDetail
const ProductDetail = () => {
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
export default ProductDetail;