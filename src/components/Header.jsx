import React, { useState } from 'react';
import logo from "../image/logo.svg";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto py-4 px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <img src={logo} alt="Logo" className="h-8" />
                </div>

                {/* Mobile Menu Button (X Icon) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700" aria-label="Menu">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clipRule="evenodd" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" clipRule="evenodd" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-white shadow-md z-20 p-4`}>
                    <div className="flex justify-between items-center mb-4">
                        {/* Logo (Mobile) */}
                        <div className="text-xl font-bold">
                            <img src={logo} alt="Logo" className="h-8" />
                        </div>
                    {/* Mobile Menu Button (X Icon) */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700" aria-label="Menu">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        <a href="#" className="hover:text-gray-500">Home</a>
                        <a href="#" className="text-red-500 hover:text-red-700">Collection</a>
                        <a href="#" className="hover:text-gray-500">Tile Size</a>
                        <a href="#" className="hover:text-gray-500">About</a>
                        <a href="#" className="hover:text-gray-500">Contact</a>
                    </nav>

                    {/* "Let's Talk" Button in Mobile Menu */}
                    <button
                        className="bg-transparent text-gray-800 py-2 px-4 border border-gray-400 rounded flex items-center justify-center mt-4
                       hover:border-gray-500 hover:text-gray-900 cursor-pointer transition-colors duration-200 w-full"
                        onClick={handleWhatsAppClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 0 11-.75 0 .375.375 0 01.75 0zm-4.875 0a.375.375 0 0 11-.75 0 .375.375 0 01.75 0zm-1.75 0h3.5m-3.5 3.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125v-1.5a.375.375 0 00-.375-.375H9.75a.375.375 0 00-.375.375v1.5zm-3 1.125h.008v.008H5.625V14.25zm1.5 0h.008v.008H7.125V14.25zm9 1.125h-2.25a2.25 2.25 0 01-2.25-2.25v-.375h1.5v.375a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-.375h1.5v.375a2.25 2.25 0 01-2.25 2.25z" />
                        </svg>
                        Let's Talk
                    </button>
                </div>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="hover:text-gray-500">Home</a>
                    <a href="#" className="hover:text-gray-500">Collection</a>
                    <a href="#" className="hover:text-gray-500">Tile Size</a>
                    <a href="#" className="hover:text-gray-500">About</a>
                    <a href="#" className="hover:text-gray-500">Contact</a>
                </nav>

                {/* Let's Talk Button (Desktop) */}
                <div className="hidden md:block">
                    <button
                        className="bg-transparent text-gray-800 py-2 px-4 border border-gray-400 rounded flex items-center
                       hover:border-gray-500 hover:text-gray-900 cursor-pointer transition-colors duration-200"
                        onClick={handleWhatsAppClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 0 11-.75 0 .375.375 0 01.75 0zm-4.875 0a.375.375 0 0 11-.75 0 .375.375 0 01.75 0zm-1.75 0h3.5m-3.5 3.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125v-1.5a.375.375 0 00-.375-.375H9.75a.375.375 0 00-.375.375v1.5zm-3 1.125h.008v.008H5.625V14.25zm1.5 0h.008v.008H7.125V14.25zm9 1.125h-2.25a2.25 2.25 0 01-2.25-2.25v-.375h1.5v.375a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-.375h1.5v.375a2.25 2.25 0 01-2.25 2.25z" />
                        </svg>
                        Let's Talk
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
