import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.svg"; // Logo image
import backh from "../image/backh.svg";
import about from "../image/about.svg";
import map from "../image/map.svg";
import { FaQuoteLeft, FaCheckCircle, FaChevronLeft, FaChevronRight,FaPaperPlane } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <div>
      {/* Navbar Section */}
      <nav
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${backh})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Globwing logo" className="h-8 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
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

            {/* Contact Button */}
            <Link
              to="/Contact"
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Contact us
            </Link>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {isMenuOpen ? (
                    // Close Icon
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    // Hamburger Icon
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 font-semibold text-gray-800">
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
                className="w-full block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 text-center"
              >
                Contact us
              </Link>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <div className="py-20 md:py-40 lg:py-60 px-6 md:px-10">
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ fontFamily: "Frank Ruhl Libre" }}
          >
            Export
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl text-justify mt-4">
            Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns.
          </p>
          <span className="text-white text-lg sm:text-xl md:text-2xl text-justify block mt-2">
            Established in 2020, we have quickly gained recognition for our commitment to quality.
          </span>
        </div>

      </nav>
      {/* About Us Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="w-4/6 mx-auto">
            <img src={about} alt="Agriculture Products" className="rounded-full shadow-lg" />
          </div>

          {/* Text Content Section */}
          <div className="text-gray-700">
            <h3 className="text-[#026498] font-bold text-4xl sm:text-4xl">Leading Exporter of Agriculture & Textiles</h3>
            <p className="mt-4 text-1xl text-black text-justify">
              Globwing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. Established in 2020, we have quickly gained recognition for our commitment to quality, reliability, and customer satisfaction. With a diverse portfolio of products and a global network of partners, we aim to contribute significantly to the international trade of agricultural commodities and textile materials.
              <br></br>
              <br></br>
              Globwing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. Established in 2020, we have quickly gained recognition for our commitment to quality, reliability, and customer satisfaction. With a diverse portfolio of products and a global network of partners, we aim to contribute significantly to the international trade of agricultural commodities and textile materials.</p>
          </div>
        </div>
      </section>



      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}


          {/* Text Content Section */}
          <div className="text-gray-700">
            <h3 className="text-[#026498] font-bold text-4xl sm:text-4xl">Leading Exporter of Agriculture & Textiles</h3>
            <p className="mt-4 text-1xl text-black text-justify">
              Globwing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. Established in 2020, we have quickly gained recognition for our commitment to quality, reliability, and customer satisfaction. With a diverse portfolio of products and a global network of partners, we aim to contribute significantly to the international trade of agricultural commodities and textile materials.
              <br></br>
              <br></br>
              Globwing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. Established in 2020, we have quickly gained recognition for our commitment to quality, reliability, and customer satisfaction. With a diverse portfolio of products and a global network of partners, we aim to contribute significantly to the international trade of agricultural commodities and textile materials.</p>
          </div>
          <div className="w-4/6 mx-auto">
            <img src={about} alt="Agriculture Products" className="rounded-full shadow-lg" />
          </div>
        </div>
      </section>
      {/* Contact Form & Map Section */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden p-8 gap-8 container mx-auto">
        {/* Form Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-[#026498] mb-4">Have Questions?</h2>
          <h1 className="text-3xl font-bold text-[#026498] mb-6">We're Here to Help!</h1>

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

            <button className="w-full bg-[#026498] text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
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

