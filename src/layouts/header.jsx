import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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

export default Header;