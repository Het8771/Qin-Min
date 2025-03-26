import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo.svg";
import backh from "../image/backh.svg";
import Product from "../image/Product.svg";
import map from "../image/map.svg";
import Agri from "../image/Agri.jpg";
import Cattel3 from "../image/Cattel3.jpg";
import Ceramic from "../image/Ceramic.jpg";
import agri1 from "../image/agri1.jpg";
import agri2 from "../image/agri2.jpg";
import agri3 from "../image/agri3.jpg";
import agri4 from "../image/agri4.jpg";
import agri5 from "../image/agri5.jpg";
import agri6 from "../image/agri6.jpg";
import seed1 from "../image/seed1.jpg";
import seed2 from "../image/seed2.jpg";
import seed3 from "../image/seed3.jpg";
import seed4 from "../image/seed4.jpg";
import seed5 from "../image/seed5.png";
import seed6 from "../image/seed6.jpg";


// Dummy Category Data
const categoryData = [
  {
    id: 1,
    name: "Agriculture",
    title: "Agriculture Products",
    description: "We provide high-quality agricultural products.",
    image: Agri,
    products: [
      { id: 1, image: agri1, title: "Java peanuts", desc: "Protect crops from pests & diseases." },
      { id: 2, image: agri2, title: "Bold peanuts", desc: "Efficient water management." },
      { id: 3, image: agri3, title: "Hulled Sesame seed", desc: "High-quality seeds for better farming." },
      { id: 4, image: agri4, title: "Natural Sesame seeds", desc: "Boost crop yield naturally." },
      { id: 5, image: agri5, title: "Groundnut Oil", desc: "Efficient tools for easy harvesting." },
      { id: 6, image: agri6, title: "Raw Cotton,", desc: "Analyze soil quality for better farming." },
    ],
  },
  {
    id: 2,
    name: "Cattle Feed",
    title: "Cattle Feed",
    description: "Best nutrition for livestock with premium quality.",
    image: Cattel3,
    products: [
      { id: 1, image: seed1, title: "Soymeal", desc: "Enhance milk production & nutrition." },
      { id: 2, image: seed2, title: "Cotton seed cake", desc: "Essential nutrition for young cattle." },
      { id: 3, image: seed3, title: "Green millet", desc: "Increase muscle growth & strength." },
      { id: 4, image: seed4, title: "Yellow maize", desc: "Balanced minerals for healthy cattle." },
      { id: 5, image: seed5, title: "Rapeseed meal", desc: "Premium quality grass-based pellets." },
      { id: 6, image: seed6, title: "Castor seed meal", desc: "Boost immunity & overall health." },
    ],
  },
  {
    id: 3,
    name: "Ceramic Parts & Insulators",
    title: "Ceramic Parts & Insulators",
    description: "Specialized ceramic parts & insulators.",
    image: Ceramic,
    products: [
      { id: 1, image: Ceramic, title: "High Voltage Insulators", desc: "Reliable electrical insulation." },
      { id: 2, image: Ceramic, title: "Industrial Ceramic Parts", desc: "Durable & heat-resistant components." },
      { id: 3, image: Ceramic, title: "Ceramic Tubes", desc: "Ideal for high-temperature applications." },
      { id: 4, image: Ceramic, title: "Porcelain Insulators", desc: "Superior quality for power systems." },
      { id: 5, image: Ceramic, title: "Transformer Bushings", desc: "Enhanced electrical safety." },
      { id: 6, image: Ceramic, title: "Thermal Shock Resistant Parts", desc: "Ensuring long-lasting performance." },
    ],
  },
];

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mt-5">
        <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-md">
          {categoryData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${activeTab === category.id
                ? "bg-blue-600 text-white font-bold"
                : "hover:text-white hover:bg-blue-500 text-gray-600"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  // Get selected category data dynamically
  const selectedCategory = categoryData.find((cat) => cat.id === activeTab);

  return (
    <>
      {/* Navbar Section */}
      <nav
        className="bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Product})` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <img src={logo} alt="Globwing logo" className="h-8 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8 font-semibold">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <Link to="/About" className="hover:text-blue-400">
                About us
              </Link>
              <Link to="/Product" className="hover:text-blue-400">
                Product
              </Link>
              <Link to="/Export" className="hover:text-blue-400">
                Export
              </Link>
              <Link to="/Blog" className="hover:text-blue-400">
                Blog
              </Link>
            </div>
            <Link
              to="/contact"
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact us
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 text-gray-800">
              <Link to="/" className="block hover:text-blue-600">
                Home
              </Link>
              <Link to="/About" className="block hover:text-blue-600">
                About us
              </Link>
              <Link to="/Product" className="block hover:text-blue-600">
                Product
              </Link>
              <Link to="/Export" className="block hover:text-blue-600">
                Export
              </Link>
              <Link to="/Blog" className="block hover:text-blue-600">
                Blog
              </Link>
              <Link
                to="/Contact"
                className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
              >
                Contact us
              </Link>
            </div>
          )}
        </div>

        {/* Navbar Hero Section */}
        <div className="py-20 md:py-40 lg:py-60 px-6 md:px-10 text-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold">Product</h1>
          <p className="text-white text-lg md:text-2xl">
            The quality products you trust.
          </p>
        </div>
      </nav>

      {/* Category Tabs */}
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Product Cards (Updated for Dynamic Content) */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {selectedCategory.products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-600">{product.title}</h3>
              <p className="text-gray-700">{product.desc}</p>
              <span onClick={() => {
                console.log("call");

                navigate('/Singlep', { state: { productDetail:   { id: 1, image: seed1, title: "Soymeal", desc: "Enhance milk production & nutrition." }, } })
              }} className="text-blue-600 mt-2 inline-block">Read More →</span>
            </div>
          </div>
        ))}
      </div>


      {/* Contact & Map Section */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden p-8 gap-8 container mx-auto">
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Have Questions?</h2>
          <h1 className="text-3xl font-bold text-blue-600 mb-6">We're Here to Help!</h1>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Phone" className="w-full p-3 border rounded" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded"></textarea>
            <button className="w-full bg-blue-600 text-white p-3 rounded">Send Message</button>
          </form>
        </div>
        <div className="md:w-1/2 w-full">
          <img src={map} alt="Company Location Map" className="w-full h-[300px] md:h-full object-cover rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Navbar;