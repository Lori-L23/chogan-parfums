import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/produits', label: 'Nos Parfums' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={closeMenu}
            >
              <div className="relative">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                  CHOGAN
                </div>
                <div className="text-xs lg:text-sm font-light text-gray-600 tracking-widest">
                  PARFUMS
                </div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className="relative group px-3 lg:px-6 py-2"
                >
                  <span className={`font-medium text-sm lg:text-base transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? 'text-pink-600' 
                      : 'text-gray-700 group-hover:text-pink-600'
                  }`}>
                    {item.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 origin-left ${
                    location.pathname === item.path 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Bouton Menu Mobile (Hamburger animé) */}
            <button 
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                  isMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}></span>
                <span className={`absolute left-0 top-2 w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                  isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Navigation Mobile avec animation en cascade */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <nav className="py-4 space-y-1 border-t border-gray-200">
              {navItems.map((item, index) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`block py-3 px-4 font-medium rounded-lg transition-all duration-300 transform ${
                    location.pathname === item.path 
                      ? 'text-pink-600 bg-gradient-to-r from-purple-50 to-pink-50 scale-[1.02]' 
                      : 'text-gray-700 hover:text-pink-600 hover:bg-gray-50 active:scale-95'
                  }`}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <span className="flex items-center justify-between">
                    <span className="text-sm sm:text-base">{item.label}</span>
                    {location.pathname === item.path && (
                      <span className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></span>
                    )}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay pour mobile (fond sombre cliquable) */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ 
          top: isScrolled ? '64px' : '80px',
          zIndex: 40 
        }}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      {/* Spacer pour compenser la navbar fixe */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;