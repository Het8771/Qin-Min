import React, { useState } from 'react';
import tiles from "../image/tiles.svg";
import back from "../image/back.svg";
import { Link } from 'react-router-dom';

const Error = () => {
    const tileData = [
        { name: 'CALACATTA - VENEZIA', size: '800 x 1200mm' },
        { name: 'CALACATTA - VENEZIA', size: '800 x 1200mm' },
        { name: 'CALACATTA - VENEZIA', size: '800 x 1200mm' },
    ];

    return (
        <div className="bg-white">
            {/* Top Section with Background Image */}
                 <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${back})` }}>
                                <div className="absolute inset-0  bg-opacity-50"></div>
                                <h2 className="relative text-4xl font-semibold text-white z-10">Book Match Collection</h2>
                            </div>
        

            {/* Main Content Section */}
            <div className="container mx-auto py-12 px-4 flex gap-6">
                {/* Filters Section */}
                <div className="w-1/4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Filters</h3>
                    <div className="space-y-2">
                        {['Size', 'Category', 'Color', 'Collection'].map(filter => (
                            <div key={filter} className="bg-gray-100 py-2 px-3 flex items-center justify-between text-sm cursor-pointer">
                                Filter by {filter}
                                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tiles Section */}
                <div className="w-3/4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">"03" Found</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {tileData.map((tile, index) => {
                            const [isHovered, setIsHovered] = useState(false);
                            return (
                                <div 
                                    key={index} 
                                    className="relative group text-center"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={() => setIsHovered(!isHovered)}
                                >
                                    <img src={tiles} alt={tile.name} className="w-full h-auto object-cover" />
                                    {isHovered && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 text-sm">
                                            <Link to ="/Single">View Product Details</Link>
                                        </div>
                                    )}
                                    <div className="pt-1">
                                        <h4 className="text-base font-semibold text-gray-700">{tile.name}</h4>
                                        <p className="text-gray-500 text-sm">{tile.size}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
