// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../image/logo.svg";
// import backh from "../image/backh.svg";
// import map from "../image/map.svg";
// import product1 from "../image/product1.svg";
// import { FaQuoteLeft, FaCheckCircle, FaChevronLeft, FaChevronRight,FaPaperPlane } from "react-icons/fa";

// const products = [
//     { id: 1, title: "Reliable Export Services", description: "Our efficient supply chain guarantees timely and secure global deliveries.", image: product1 },
//     { id: 2, title: "Premium Textile Yarns", description: "We provide top-quality yarns to meet the growing textile industry's needs.", image: product1 },
//     { id: 3, title: "High-Quality Agricultural Exports", description: "Delivering fresh and organic produce worldwide with guaranteed quality.", image: product1 },
//     { id: 4, title: "Reliable Export Services", description: "Our efficient supply chain guarantees timely and secure global deliveries.", image: product1 },
//     { id: 5, title: "Premium Textile Yarns", description: "We provide top-quality yarns to meet the growing textile industry's needs.", image: product1 },
//     { id: 6, title: "High-Quality Agricultural Exports", description: "Delivering fresh and organic produce worldwide with guaranteed quality.", image: product1 },
// ];

// const itemsPerPage = 4; // Number of items per page

// const ProductCard = ({ product }) => (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <img src={product.image} alt={product.title} className="w-full h-80 object-cover" />
//         <div className="p-4">
//             <h2 className="text-lg font-bold text-[#026498]">{product.title}</h2>
//             <p className="text-gray-600 text-sm mt-2">{product.description}</p>
//             <Link to="/Singleb" className="text-[#026498] mt-2 inline-block hover:underline flex items-center">
//                 Read More →
//             </Link>
//         </div>
//     </div>
// );

// const CategoryTabs = () => {
//     const [activeTab, setActiveTab] = useState();
//     const categories = [
//         { id: 1, name: "Agriculture" },
//         { id: 2, name: "Cattle feed" },
//         { id: 3, name: "Ceramic Parts & Insulators" },
//     ];


//     return (
//         <div className="flex justify-center mt-6">
//             <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-md">
//                 {categories.map((category) => (
//                     <button
//                         key={category.id}
//                         onClick={() => setActiveTab(category.id)}
//                         className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${activeTab === category.id
//                             ? "bg-white text-black cusor-pointer"
//                             : "hover:text-white hover:bg-[#026498]"
//                             }`}
//                     >
//                         {category.name}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(products.length / itemsPerPage);
//     return (
//         <>
//         <div>
//             <nav className=" bg-cover bg-center text-white" style={{ backgroundImage: `url(${backh})` }}>
//                 <div className="container mx-auto px-4">
//                     <div className="flex justify-between items-center h-16">
//                         <Link to="/">
//                             <img src={logo} alt="Globwing logo" className="h-8 w-auto" />
//                         </Link>
//                         <div className="hidden md:flex items-center space-x-8 font-semibold">
//                             <Link to="/" className="hover:text-blue-400">Home</Link>
//                             <Link to="/About" className="hover:text-blue-400">About us</Link>
//                             <Link to="/Product" className="hover:text-blue-400">Product</Link>
//                             <Link to="/Export" className="hover:text-blue-400">Export</Link>
//                             <Link to="/Blog" className="hover:text-blue-400">Blog</Link>
//                         </div>
//                         <Link to="/Contact" className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact us</Link>
//                         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
//                             {isMenuOpen ? "✖" : "☰"}
//                         </button>
//                     </div>
//                     {isMenuOpen && (
//                         <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 text-gray-800">
//                             <Link to="/" className="block hover:text-blue-600">Home</Link>
//                             <Link to="/About" className="block hover:text-blue-600">About us</Link>
//                             <Link to="/Product" className="block hover:text-blue-600">Product</Link>
//                             <Link to="/Export" className="block hover:text-blue-600">Export</Link>
//                             <Link to="/Blog" className="block hover:text-blue-600">Blog</Link>
//                             <Link to="/Contact" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center">Contact us</Link>
//                         </div>
//                     )}
//                 </div>
//                 <div className="py-20 md:py-40 lg:py-60 px-6 md:px-10">
//                     <h1 className="text-white text-5xl md:text-7xl font-bold" style={{ fontFamily: 'Frank Ruhl Libre' }}>Blog</h1>
//                     <p className="text-white text-lg sm:text-xl md:text-2xl text-justify ">Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. Established in 2020, we have quickly gained recognition for our commitment to quality, </p>
//                 </div>
//             </nav>

//             <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center space-x-2 my-6">
//                 <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
//                     <FaChevronLeft />
//                 </button>
//                 {[...Array(totalPages).keys()].map(num => (
//                     <button key={num + 1} onClick={() => setCurrentPage(num + 1)} className={`px-4 py-2 rounded ${currentPage === num + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
//                         {num + 1}
//                     </button>
//                 ))}
//                 <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
//                     <FaChevronRight />
//                 </button>
//             </div>


//             <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden p-8 gap-8 container mx-auto">
//                 {/* Form Section */}
//                 <div className="md:w-1/2 w-full">
//                     <h2 className="text-2xl font-semibold text-[#026498] mb-4">Have Questions?</h2>
//                     <h1 className="text-3xl font-bold text-[#026498] mb-6">We're Here to Help!</h1>

//                     <form className="space-y-4">
//                         {["Your Name", "Your Email", "Phone"].map((placeholder, index) => (
//                             <input key={index} type="text" placeholder={placeholder} className="w-full p-3 border rounded focus:ring focus:ring-blue-200" />
//                         ))}

//                         <select className="w-full p-3 border rounded focus:ring focus:ring-blue-200">
//                             <option>Choose Subject</option>
//                             <option>General Inquiry</option>
//                             <option>Support</option>
//                             <option>Sales</option>
//                         </select>

//                         <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded focus:ring focus:ring-blue-200"></textarea>

//                         <div className="flex items-center">
//                             <input type="checkbox" id="robot" className="mr-2" />
//                             <label htmlFor="robot" className="text-sm">I AM Not a Robot</label>
//                         </div>

//                         <button className="w-full bg-[#026498] text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
//                             Send Message
//                         </button>
//                     </form>
//                 </div>

//                 {/* Map Section */}
//                 <div className="md:w-1/2 w-full">
//                     <img src={map} alt="Company Location Map" className="w-full h-[300px] md:h-full object-cover rounded-lg" />
//                 </div>
//             </div>

//         </div>
//           <div className="bg-[#3270DF] text-white p-6 flex flex-col md:flex-row justify-between items-center w-full mb-2">
//                   <h2 className="text-lg font-semibold">Connect with Us for Business Solutions</h2>
//                   <div className="flex items-center bg-white  p-2 w-full md:w-auto mt-4 md:mt-0  rounded-lg">
//                     <input
//                       type="email"
//                       placeholder="Enter Mail"
//                       className="px-4 py-2 outline-none text-black w-full"
//                     />
//                     <button className="bg-[#3270DF] text-white p-2 rounded-lg">
//                       <FaPaperPlane size={16} />
//                     </button>
//                   </div>
//                 </div>
//                 </>

//     );
// };

// export default Navbar;
