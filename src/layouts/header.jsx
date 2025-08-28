import React from "react";

const whatsappNumber = "+237694647583"; // Remplacez par le numéro WhatsApp réel

const Header = () => (
    <header className="bg-gradient-to-r from-[#f8e7d3] to-white py-6 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-8">
            <div className="flex items-center">
                <img
                    src="https//"
                    alt="Chogan Logo"
                    className="h-12 mr-4"
                />
                <h1 className="font-playfair font-bold text-3xl text-[#7a5c2e] tracking-wider m-0">
                    Parfums Chogan
                </h1>
            </div>
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold text-lg shadow-md hover:bg-[#1ebe5d] transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="mr-2"
                >
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .14.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.25-.19-.53-.33z"/>
                </svg>
                Contact WhatsApp
            </a>
        </div>
    </header>
);

export default Header;
