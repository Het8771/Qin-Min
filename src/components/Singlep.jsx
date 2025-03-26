import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../image/logo.svg"; // Logo image
import backh from "../image/backh.svg";
import about from "../image/about.svg";
import map from "../image/map.svg";
import { FaQuoteLeft, FaCheckCircle, FaChevronLeft, FaChevronRight,FaPaperPlane } from "react-icons/fa";
import ProductDetailSection from "./Singleproduct";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation()
  const productDetail = location.state.productDetail

  return (
    <>
    <div>
      {/* Navbar Section */}
      <nav className="relative bg-cover bg-center text-white" style={{ backgroundImage: `url(${backh})` }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
              <Link to="/">
                <img src={logo} alt="Globwing logo" className="h-8 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-semibold">
              {["Home", "About us", "Product", "Export", "Blog"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-blue-400">
                  {item}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <Link to="/contact" className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Contact us
            </Link>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 font-semibold text-gray-800">
              {["Home", "About us", "Product", "Export", "Blog"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="block hover:text-blue-600">
                  {item}
                </Link>
              ))}
              <Link to="/Contact" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center">
                Contact us
              </Link>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <div className="py-60 px-6 md:px-12">
        <h1 className="text-white text-5xl md:text-7xl font-bold mt-6" style={{ fontFamily: 'Frank Ruhl Libre' }}>
            Product
          </h1>
          <p className="text-white text-lg md:text-2xl">
            Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. 
          </p>  
            <span className="text-white text-lg md:text-2xl max-w-2xl">Established in 2020, we have quickly gained recognition for our commitment to quality.</span>
          
        </div>
      </nav>

      {/* About Us Section */}
      {/* <section className="py-12 px-4 sm:px-6 lg:px-8 mt-[30px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
          <div className="w-4/6 mx-auto">
            <img src={about} alt="Agriculture Products" className="rounded-full shadow-lg" />
          </div>

         
          <div className="text-gray-700">
            <h3 className="text-[#3270DF] font-bold text-4xl sm:text-4xl">Leading Exporter of Agriculture & Textiles</h3>
            <p className="mt-4 text-lg text-black text-justify">
            Globwing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. 
            Established in 2020, we have quickly gained recognition for our commitment to quality, reliability, and customer satisfaction.
             With a diverse portfolio of products and a global network of partners, we aim to contribute significantly to the international trade of agricultural commodities and textile materials.
             Globwing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. Established in 2020, we have quickly gained recognition for our commitment to quality, reliability, and customer satisfaction.
              With a diverse portfolio of products and a global network of partners, we aim to contribute significantly to the international trade of agricultural commodities and textile materials.            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Agriculture (Java peanuts, Sesame seeds, Groundnut Oil, Raw Cotton).",
                "Cattle feed (Soymeal, Peanut cake, Green millet, Yellow maize).",
                "Ceramic Parts & Insulators (Band Heater, Ignition Electrode, Mechanical Seal Ring)."
              ].map((text, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-[#3270DF] mt-1" size={20} />
                  <span className="text-sm font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}
       <ProductDetailSection productDetail={productDetail} />

      {/* Contact Form & Map Section */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg  overflow-hidden p-8 gap-8 container mx-auto">
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
