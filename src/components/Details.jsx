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
export default ProductDetail;