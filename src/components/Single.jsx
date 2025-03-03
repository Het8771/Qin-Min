import React, { useState } from 'react';
import tiles from "../image/tiles.svg";
import back from "../image/back.svg";

const Single = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleInquiryClick = () => {
        const whatsappNumber = '1234567890';
        const message = encodeURIComponent('I would like to inquire about Calacatta - Venezia');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="bg-white">
            <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${back})` }}>
                <div className="absolute inset-0  bg-opacity-50"></div>
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
};

export default Single;
