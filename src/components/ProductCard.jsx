import { Link } from 'react-router-dom';


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

export default ProductCard;