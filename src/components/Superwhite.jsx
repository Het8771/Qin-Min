import React, { useState } from 'react';
import tiles from "../image/tiles.svg";
import back from "../image/back.svg";
import { Link, useParams } from 'react-router-dom';

const TileCollection = () => {
    const { productId } = useParams();
    const [openFilter, setOpenFilter] = useState(null);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const tileData = [
        { id: 1, name: 'CALACATTA - VENEZIA', size: '800 x 1200mm' },
        { id: 2, name: 'CALACATTA - VENEZIA', size: '800 x 1200mm' },
        { id: 3, name: 'CALACATTA - VENEZIA', size: '800 x 1200mm' },
    ];

    const filters = [
        { name: 'Size', options: ['120 x 180 MM', '60 x 120 MM', '80 x 160 MM'] },
        { name: 'Category', options: ['Ferro 2.0 Collection', 'Marble Collection', 'Wood Collection'] },
        { name: 'Color', options: ['Gray', 'White', 'Black', 'Beige'] },
        { name: 'Collection', options: ['Calacatta', 'Statuario', 'Carrara'] },
    ];

    const toggleFilter = (filterName) => {
        setOpenFilter(openFilter === filterName ? null : filterName);
    };

    const handleInquiryClick = () => {
        const whatsappNumber = '1234567890';
        const message = encodeURIComponent('I would like to inquire about Calacatta - Venezia');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    if (productId) {
        // Single Product View
        return (
            <div className="bg-white">
                <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${back})` }}>
                    <div className="absolute inset-0 bg-opacity-50"></div>
                    <h2 className="relative text-4xl font-semibold text-white z-10">Calacatta - Venezia</h2>
                </div>

                {/* Product Details Section */}
                <div className="container mx-auto py-10 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Images */}
                        <div className="flex flex-col gap-4">
                            <div className="relative">
                                <img src={tiles} alt="Product" className="w-full h-auto object-cover" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img src={tiles} alt="Product" className="w-full h-auto object-cover" />
                                <img src={tiles} alt="Product" className="w-full h-auto object-cover" />
                            </div>
                        </div>

                        {/* Product Information */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Calacatta - Venezia</h3>
                            <p className="text-gray-600 mt-2">
                                Integer sodales mattis felis, at dignissim ante rutrum hendrerit. Morbi tortor ex, sodales nec nisl vitae, posuere sodales orci.
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-700">
                                <li><strong>Size:</strong> 120 x 180 MM</li>
                                <li><strong>Color:</strong> Gray</li>
                                <li><strong>Category:</strong> Ferro 2.0 Collection</li>
                            </ul>

                            {/* Packaging Details Table */}
                            <div className="mt-6 border border-gray-300 p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Packaging Details</h4>
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="py-2">Weight</th>
                                            <th>Dimensions</th>
                                            <th>Total Sq.ft in Box</th>
                                            <th>Thickness</th>
                                            <th>Per Box Pcs.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2">24kg</td>
                                            <td>11x120x180mm</td>
                                            <td>31</td>
                                            <td>9mm</td>
                                            <td>10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Inquiry Button */}
                            <button
                                onClick={handleInquiryClick}
                                className="mt-6 flex items-center bg-black text-white px-4 py-2 uppercase text-sm font-semibold hover:bg-gray-800"
                            >
                                Inquiry Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="container mx-auto py-10 px-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">Related Products</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                            <div 
                                key={item} 
                                className="text-center relative"
                                onMouseEnter={() => setHoveredProduct(item)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <img src={tiles} alt="Related Product" className="w-full h-auto object-cover" />
                                {hoveredProduct === item && (
                                    <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-100 hover:opacity-80">
                                        View Product Details
                                    </button>
                                )}
                                <h4 className="text-base font-semibold text-gray-700 mt-2">Calacatta - Venezia</h4>
                                <p className="text-gray-500 text-sm">800 x 1200mm</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Collection View
    return (
        <div className="bg-white">
            {/* Top Section with Background Image */}
            <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${back})` }}>
                <div className="absolute inset-0 bg-opacity-50"></div>
                <h2 className="relative text-4xl font-semibold text-white z-10">Super white </h2>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto py-12 px-4 flex gap-6">
                {/* Filters Section */}
                <div className="w-1/4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Filters</h3>
                    <div className="space-y-2">
                        {filters.map((filter) => (
                            <div key={filter.name} className="border border-gray-300">
                                <button
                                    className="w-full py-2 px-4 text-left flex justify-between items-center bg-gray-100"
                                    onClick={() => toggleFilter(filter.name)}
                                >
                                    <span>Filter by {filter.name}</span>
                                    <span>{openFilter === filter.name ? '▲' : '▼'}</span>
                                </button>
                                {openFilter === filter.name && (
                                    <div className="p-4 bg-white">
                                        {filter.options.map((option) => (
                                            <div key={option} className="flex items-center mb-2">
                                                <input type="checkbox" id={option} className="mr-2" />
                                                <label htmlFor={option}>{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tiles Section */}
                <div className="w-3/4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">"03" Found</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {tileData.map((tile) => {
                            const [isHovered, setIsHovered] = useState(false);
                            return (
                                <div 
                                    key={tile.id} 
                                    className="relative group text-center"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <img src={tiles} alt={tile.name} className="w-full h-auto object-cover" />
                                    {isHovered && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 text-sm">
                                            <Link to={`/product/${tile.id}`}>View Product Details</Link>
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

export default TileCollection;
