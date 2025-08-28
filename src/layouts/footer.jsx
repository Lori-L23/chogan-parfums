const whatsappNumber = "+237694647583"; // Remplacez par le numéro WhatsApp réel

const Footer = () => (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-200 text-gray-800 py-8 text-center font-montserrat shadow-inner">
        <div className="max-w-2xl mx-auto">
            <h2 className="font-bold tracking-wider mb-2 text-2xl">Chogan Parfums</h2>
            <p className="text-lg mb-6">
                Découvrez l'élégance et la qualité des parfums Chogan.<br />
                Pour toute commande ou information, contactez-nous !
            </p>
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full font-semibold text-lg shadow-md transition-colors"
            >
                <span className="mr-2 flex items-center">
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#25D366" />
                        <path d="M22.5 18.8c-.3-.2-1.7-.8-2-1s-.5-.2-.7.1c-.2.3-.7 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.2-.4-2.3-1.3-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.7.1-.1.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.8 4.3 3.8.6.2 1.1.4 1.5.5.6.2 1.1.2 1.5.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4z" fill="#fff"/>
                    </svg>
                </span>
                WhatsApp
            </a>
        </div>
    </footer>
);

export default Footer;
