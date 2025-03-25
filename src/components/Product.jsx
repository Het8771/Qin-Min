import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.svg"; 
import backh from "../image/backh.svg";
import map from "../image/map.svg";
import product1 from "../image/product1.svg";
import { FaQuoteLeft, FaCheckCircle, FaChevronLeft, FaChevronRight,FaPaperPlane } from "react-icons/fa";

const products = [
  { id: 1, title: "Reliable Export Services", description: "Our efficient supply chain guarantees timely and secure global deliveries.", image: product1 },
  { id: 2, title: "Premium Textile Yarns", description: "We provide top-quality yarns to meet the growing textile industry's needs.", image: product1 },
  { id: 3, title: "High-Quality Agricultural Exports", description: "Delivering fresh and organic produce worldwide with guaranteed quality.", image: product1 },
  { id: 4, title: "Reliable Export Services", description: "Our efficient supply chain guarantees timely and secure global deliveries.", image: product1 },
  { id: 5, title: "Premium Textile Yarns", description: "We provide top-quality yarns to meet the growing textile industry's needs.", image: product1 },
  { id: 6, title: "High-Quality Agricultural Exports", description: "Delivering fresh and organic produce worldwide with guaranteed quality.", image: product1 },
];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={product.image} alt={product.title} className="w-full h-80 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-bold text-[#3270DF]">{product.title}</h2>
      <p className="text-gray-600 text-sm mt-2">{product.description}</p>
      <Link to ="/Singlep" className="text-[#3270DF] mt-2 inline-block hover:underline flex items-center">
        Read More →
      </Link>
    </div>
  </div>
);

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const categories = [
    { id: 1, name: "Agriculture" },
    { id: 2, name: "Cattle feed" },
    { id: 3, name: "Ceramic Parts & Insulators" },
  ];

  const categoryContent = {
    1: {
      title: "Agriculture Products",
      description: "We provide high-quality agricultural products including grains, pulses, and more.",
      image: "/images/agriculture.jpg",
    },
    2: {
      title: "Cattle Feed",
      description: "Our cattle feed ensures the best nutrition for livestock with premium quality ingredients.",
      image: "/images/cattle-feed.jpg",
    },
    3: {
      title: "Ceramic Parts & Insulators",
      description: "We specialize in ceramic parts & insulators for industrial and commercial applications.",
      image: "/images/ceramic.jpg",
    },
  };
  return (
    <div className="flex justify-center mt-[20px]">
      <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-md">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === category.id
                ? "bg-white text-black cusor-pointer"
                : "hover:text-white hover:bg-[#3270DF]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <div>
      <nav className=" bg-cover bg-center text-white" style={{ backgroundImage: `url(${backh})` }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <img src={logo} alt="Globwing logo" className="h-8 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8 font-semibold">
              <Link to="/" className="hover:text-blue-400">Home</Link>
              <Link to="/About" className="hover:text-blue-400">About us</Link>
              <Link to="/Product" className="hover:text-blue-400">Product</Link>
              <Link to="/Export" className="hover:text-blue-400">Export</Link>
              <Link to="/Blog" className="hover:text-blue-400">Blog</Link>
            </div>
            <Link to="/contact" className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact us</Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 text-gray-800">
              <Link to="/" className="block hover:text-blue-600">Home</Link>
              <Link to="/About" className="block hover:text-blue-600">About us</Link>
              <Link to="/Product" className="block hover:text-blue-600">Product</Link>
              <Link to="/Export" className="block hover:text-blue-600">Export</Link>
              <Link to="/Blog" className="block hover:text-blue-600">Blog</Link>
              <Link to="/Contact" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center">Contact us</Link>
            </div>
          )}
        </div>
        <div className="py-20 md:py-40 lg:py-60 px-6 md:px-10">
          <h1 className="text-white text-5xl md:text-7xl font-bold" style={{ fontFamily: 'Frank Ruhl Libre' }}>Product</h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl">The quality products you Trust.</p>
        </div>
      </nav>
      <CategoryTabs />
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
   <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden p-8 gap-8 container mx-auto">
           {/* Form Section */}
           <div className="md:w-1/2 w-full">
             <h2 className="text-2xl font-semibold text-[#3270DF] mb-4">Have Questions?</h2>
             <h1 className="text-3xl font-bold text-[#3270DF] mb-6">We're Here to Help!</h1>
   
             <form className="space-y-4">
               {["Your Name", "Your Email", "Phone"].map((placeholder, index) => (
                 <input key={index} type="text" placeholder={placeholder} className="w-full p-3 border rounded focus:ring focus:ring-blue-200" />
               ))}
   
               <select className="w-full p-3 border rounded focus:ring focus:ring-blue-200">
                 <option>Choose Subject</option>
                 <option>General Inquiry</option>
                 <option>Support</option>
                 <option>Sales</option>
               </select>
   
               <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded focus:ring focus:ring-blue-200"></textarea>
   
               <div className="flex items-center">
                 <input type="checkbox" id="robot" className="mr-2" />
                 <label htmlFor="robot" className="text-sm">I AM Not a Robot</label>
               </div>
   
               <button className="w-full bg-[#3270DF] text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                 Send Message
               </button>
             </form>
           </div>
   
           {/* Map Section */}
           <div className="md:w-1/2 w-full">
             <img src={map} alt="Company Location Map" className="w-full h-[300px] md:h-full object-cover rounded-lg" />
           </div>
         </div>
    </div>
     <div className="bg-[#3270DF] text-white p-6 flex flex-col md:flex-row justify-between items-center w-full mb-2">
                  <h2 className="text-lg font-semibold">Connect with Us for Business Solutions</h2>
                  <div className="flex items-center bg-white  p-2 w-full md:w-auto mt-4 md:mt-0  rounded-lg">
                    <input
                      type="email"
                      placeholder="Enter Mail"
                      className="px-4 py-2 outline-none text-black w-full"
                    />
                    <button className="bg-[#3270DF] text-white p-2 rounded-lg">
                      <FaPaperPlane size={16} />
                    </button>
                  </div>
                </div>
    </>
  );
};

export default Navbar;
