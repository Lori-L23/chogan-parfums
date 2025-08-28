import React from "react";
import { useState } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { useLocation } from 'react-router-dom';



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

export default ContactPage;