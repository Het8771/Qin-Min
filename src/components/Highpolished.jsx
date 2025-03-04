import React, { useState, useEffect } from 'react';
import tiles from "../image/tiles.svg";
import back from "../image/back.svg";
import { Link, useParams } from 'react-router-dom';

const TileCollection = () => {
    const { productId } = useParams();
    const [openFilter, setOpenFilter] = useState(null);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [activeFilters, setActiveFilters] = useState({});
    const [filteredTiles, setFilteredTiles] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    const tileData = [
        { id: 1, name: 'CALACATTA - VENEZIA', size: '800 x 1200mm', category: 'Marble Collection', color: 'White', collection: 'Calacatta' },
        { id: 2, name: 'STATUARIO - GOLD', size: '600 x 600mm', category: 'Marble Collection', color: 'White', collection: 'Statuario' },
        { id: 3, name: 'CARRARA - CLASSICO', size: '800 x 800mm', category: 'Marble Collection', color: 'White', collection: 'Carrara' },
    ];

    const filters = [
        { name: 'Size', options: ['800 x 1200mm', '600 x 600mm', '800 x 800mm'] },
        { name: 'Category', options: ['Marble Collection', 'Wood Collection'] },
        { name: 'Color', options: ['White', 'Black', 'Beige'] },
        { name: 'Collection', options: ['Calacatta', 'Statuario', 'Carrara'] },
    ];

    const toggleFilter = (filterName) => {
        setOpenFilter(openFilter === filterName ? null : filterName);
    };

    const handleFilterChange = (filterName, option, isChecked) => {
        setActiveFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: {
                ...prevFilters[filterName],
                [option]: isChecked
            }
        }));
    };

    useEffect(() => {
        const newFilteredTiles = tileData.filter(tile => {
            return Object.entries(activeFilters).every(([filterName, options]) => {
                const activeOptions = Object.entries(options)
                    .filter(([_, isActive]) => isActive)
                    .map(([option]) => option);

                if (activeOptions.length === 0) return true;

                return activeOptions.includes(tile[filterName.toLowerCase()]);
            });
        });
        setFilteredTiles(newFilteredTiles);
    }, [activeFilters]);

    const handleInquiryClick = () => {
        const whatsappNumber = '1234567890';
        const message = encodeURIComponent('I would like to inquire about Calacatta - Venezia');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    console.log("productId:", productId);

    if (productId) {
        const product = tileData.find(tile => tile.id === parseInt(productId));

        if (!product) {
            return <div>Product not found</div>;
        }

        // Single Product View
        return (
            <div className="bg-white">
                <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${back})` }}>
                    <div className="absolute inset-0 bg-opacity-50"></div>
                    <h2 className="relative text-4xl font-semibold text-white z-10">{product.name}</h2>
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
                            <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                            <p className="text-gray-600 mt-2">
                                Integer sodales mattis felis, at dignissim ante rutrum hendrerit. Morbi tortor ex, sodales nec nisl vitae, posuere sodales orci.
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-700">
                                <li><strong>Size:</strong> {product.size}</li>
                                <li><strong>Color:</strong> {product.color}</li>
                                <li><strong>Category:</strong> {product.category}</li>
                            </ul>... {/* Packaging Details Table */}
                            <div className="mt-6 border border-gray-300 p-4 overflow-x-auto">
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
                        {tileData.map((item) => (
                            <div
                                key={item.id}
                                className="text-center relative"
                                onMouseEnter={() => setHoveredProduct(item.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <img src={tiles} alt="Related Product" className="w-full h-auto object-cover" />
                                {hoveredProduct === item.id && (
                                    <Link
                                        to={`/product/${item.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-100 hover:opacity-80"
                                    >
                                        View Product Details
                                    </Link>
                                )}
                                <h4 className="text-base font-semibold text-gray-700 mt-2">{item.name}</h4>
                                <p className="text-gray-500 text-sm">{item.size}</p>
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
                <h2 className="relative text-4xl font-semibold text-white z-10">High Gloss Polished</h2>
            </div> {/* Main Content Section */}
            <div className="container mx-auto py-12 px-4">
                <div className="md:flex gap-6">
                    {/* Filters Section */}
                    <div className="w-full md:w-1/4">
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
                                                    <input
                                                        type="checkbox"
                                                        id={option}
                                                        className="mr-2"
                                                        onChange={(e) => handleFilterChange(filter.name, option, e.target.checked)}
                                                        checked={activeFilters[filter.name]?.[option] || false}
                                                    />
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
                    <div className="w-full md:w-3/4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-6">{filteredTiles.length} Found</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {filteredTiles.map((tile) => (
                                <div
                                    key={tile.id}
                                    className="relative group text-center"
                                    onMouseEnter={() => setHoveredProduct(tile.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                >
                                    <img src={tiles} alt={tile.name} className="w-full h-auto object-cover" />
                                    {hoveredProduct === tile.id && (
                                        <Link
                                            to={`/product/${tile.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-100 hover:opacity-80"
                                        >
                                            View Product Details
                                        </Link>
                                    )}
                                    <div className="pt-1">
                                        <h4 className="text-base font-semibold text-gray-700">{tile.name}</h4>
                                        <p className="text-gray-500 text-sm">{tile.size}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileCollection;
