import React, { useState } from 'react';
import logo from "../image/logo.svg";
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);
    const [isTileSizeOpen, setIsTileSizeOpen] = useState(false);
    const [activeTileSize, setActiveTileSize] = useState(null);
    const [activeCollection, setActiveCollection] = useState(null);

    const handleWhatsAppClick = () => {
        const phoneNumber = "+91 12345 67890"; 
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleCollection = () => {
        setIsCollectionOpen(!isCollectionOpen);
    };

    const closeCollection = () => {
        setIsCollectionOpen(false);
        setActiveCollection(null);
    };

    const toggleTileSize = () => {
        setIsTileSizeOpen(!isTileSizeOpen);
    };

    const closeTileSize = () => {
        setIsTileSizeOpen(false);
        setActiveTileSize(null);
    };

    const collectionLinks = [
        { name: 'Chromatic Collection', path: '/chromatic' },
        { name: 'Opula Collection', path: '/Opula' },
        { name: 'Diamond Collection', path: '/Diamond' },
        { name: 'Rock Solid Collection', path: '/Rock' },
        { name: 'Earth Collection', path: '/Earth' },
        { name: 'Foiltech Collection', path: '/Foiltech' },
        { name: 'Ferro 2.0 Collection', path: '/Error' },
        { name: 'LUX Collection', path: '/LUX' },
        { name: 'Forever Collection', path: '/Forever' },
        { name: 'Stone Deck Collection', path: '/Stone' },
        { name: 'Multi Color Collection', path: '/Multi' },
        { name: 'Wood Collection', path: '/Wood' },
        { name: 'Book Match Collection', path: '/Book' },
        { name: 'Serenity Collection', path: '/Serenity' },
    ];

    const tileSizeLinks = [
        { name: '1200 x 2400mm', path: '/1200x2400', subcategories: ['CarvingMatt', 'Grano', 'Highgloss', 'HighPolished', 'LuxSurface', 'Polished', 'Superwhite'] },
        { name: '1200 x 1800mm', path: '/1200x1800', subcategories: ['CarvingMatt', 'Grano', 'Highgloss', 'HighPolished', 'LuxSurface', 'Polished', 'SuperWhite'] },
        { name: '800 x 2400mm', path: '/800x2400', subcategories: ['CarvingMatt', 'Grano', 'Highgloss', 'HighPolished', 'LuxSurface', 'Polished', 'SuperWhite'] },
        { name: '800 x 1600mm', path: '/800x1600', subcategories: ['CarvingMatt', 'Grano', 'Highgloss', 'HighPolished', 'LuxSurface', 'Polished', 'SuperWhite'] },
        { name: '600 x 1200mm', path: '/600x1200', subcategories: ['CarvingMatt', 'Grano', 'Highgloss', 'HighPolished', 'LuxSurface', 'Polished', 'SuperWhite'] },
        { name: '600 x 600mm', path: '/600x600', subcategories: ['CarvingMatt', 'Grano', 'Highgloss', 'HighPolished', 'LuxSurface', 'Polished', 'SuperWhite'] },
        { name: '400 x 400mm', path: '/400x400', subcategories: ['CarvingMatt', 'Grano', 'Highgloss', 'HighPolished', 'LuxSurface', 'Polished', 'SuperWhite'] },
    ];

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto py-4 px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link to="/"> <img src={logo} alt="Logo" className="h-8" /></Link>
                </div>

                {/* Mobile Menu Button (Hamburger Icon) */}
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

                {/* Mobile Menu (Full Screen Overlay) */}
                <div className={`md:hidden ${isOpen ? 'fixed top-0 left-0 w-full h-screen bg-white shadow-md z-20 p-4 overflow-y-auto' : 'hidden'}`}>
                    <div className="flex justify-between items-center mb-4">
                        {/* Logo (Mobile) */}
                        <div className="text-xl font-bold">
                            <Link to="/" onClick={toggleMenu}>
                                <img src={logo} alt="Logo" className="h-8" />
                            </Link>
                        </div>
                        {/* Close Button (X Icon) */}
                        <div>
                            <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700" aria-label="Close Menu">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        <Link to="/" className="hover:text-red-500" onClick={toggleMenu}>Home</Link>
                        {/* Collection Dropdown (Mobile) */}
                        <div>
                            <button
                                onClick={toggleCollection}
                                className="flex items-center justify-between w-full hover:text-red-500"
                            >
                                Collection
                                <svg className={`w-4 h-4 ml-1 transition-transform ${isCollectionOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isCollectionOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {collectionLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            to={link.path}
                                            className="block hover:text-red-500"
                                            onClick={() => {
                                                closeCollection();
                                                toggleMenu();
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* Tile Size Dropdown (Mobile) */}
                        <div>
                            <button
                                onClick={toggleTileSize}
                                className="flex items-center justify-between w-full hover:text-red-500"
                            >
                                Tile Size
                                <svg className={`w-4 h-4 ml-1 transition-transform ${isTileSizeOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isTileSizeOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {tileSizeLinks.map((link, index) => (
                                        <div key={index}>
                                            <button
                                                className="flex items-center justify-between w-full hover:text-red-500"
                                                onClick={() => setActiveTileSize(activeTileSize === link.name ? null : link.name)}
                                            >
                                                {link.name}
                                                <svg className={`w-4 h-4 ml-1 transition-transform ${activeTileSize === link.name ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            {activeTileSize === link.name && (
                                                <div className="pl-4 mt-2 space-y-2">
                                                    {link.subcategories.map((sub, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            to={`${link.path}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="block hover:text-red-500"
                                                            onClick={toggleMenu}
                                                        >
                                                            {sub}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link to="/About" className="hover:text-red-500" onClick={toggleMenu}>About</Link>
                        <Link to="/ContactUs" className="hover:text-red-500" onClick={toggleMenu}>Contact</Link>
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
                <nav className="hidden md:flex space-x-8 items-center">
                    <Link to="/" className="hover:text-red-500">Home</Link>
                    <div className="relative">
                        <button
                            onClick={toggleCollection}
                            className={`flex items-center hover:text-red-500 ${activeCollection ? 'bg-red-100' : ''}`}
                        >
                            Collection
                            <svg className={`w-4 h-4 ml-1 transition-transform ${isCollectionOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isCollectionOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
                                <div className="py-1">
                                    {collectionLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            to={link.path}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                closeCollection();
                                                setActiveCollection(null);
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Tile Size Dropdown (Desktop) */}
                    <div className="relative ">
                        <button onClick={toggleTileSize} className="flex items-center hover:text-red-500">
                            Tile Size
                            <svg className={`w-4 h-4 ml-1 transition-transform ${isTileSizeOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isTileSizeOpen && (
                            <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-md z-10">
                                <div className="py-1">
                                    {tileSizeLinks.map((link, index) => (
                                        <React.Fragment key={index}>
                                            <div className="relative">
                                                <button
                                                    className={`flex justify-between w-full text-left items-center py-2 px-4 rounded hover:bg-gray-100 ${activeTileSize === link.name ? 'bg-red-100' : 'hover:text-gray-500'}`}
                                                    onClick={() => setActiveTileSize(activeTileSize === link.name ? null : link.name)}
                                                    aria-expanded={activeTileSize === link.name}
                                                >
                                                    <span>{link.name}</span>
                                                    <svg className={`w-4 h-4 transition-transform ${activeTileSize === link.name ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                {activeTileSize === link.name && link.subcategories && (
                                                    <div className="absolute left-full top-0 ml-2 bg-white border border-gray-200 rounded shadow-md z-10 w-48">
                                                        <div className="py-1">
                                                            {link.subcategories.map((sub, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    to={`${link.path}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                                                                    className="hover:text-gray-500 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    onClick={closeTileSize}
                                                                >
                                                                    {sub}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to="/About" className="hover:text-red-500">About</Link>
                    <Link to="/ContactUs" className="hover:text-red-500">Contact</Link>
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
