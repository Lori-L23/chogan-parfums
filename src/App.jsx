import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Acceuil';
import ProductsPage from './pages/Produits';
import ProductDetail from './components/Details.jsx';
import ContactPage from './pages/Contact';

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