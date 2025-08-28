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
export default Footer;