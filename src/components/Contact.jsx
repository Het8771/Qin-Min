import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.svg"; // Logo image
import backh from "../image/backh.svg";
import about from "../image/about.svg";
import map1 from "../image/map1.svg";
import map from "../image/map.svg";
import mapPin from "../image/mapPin.png"; // Import the map pin image
import { FaQuoteLeft, FaCheckCircle, FaChevronLeft, FaChevronRight,FaPaperPlane } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   export default function CoreValues() {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mapImageUrl, setMapImageUrl] = useState(map1); // Initialize with imported map

  const [locations, setLocations] = useState([
    { id: 1, x: 28, y: 29, name: 'New York' }, // New York
    { id: 2, x: 45, y: 20, name: 'Europe' }, // Europe
    { id: 3, x: 68, y: 48, name: 'India' }, // India
    { id: 4, x: 58, y: 63, name: 'Africa' }, // Africa
  ]);

  const [hoveredLocation, setHoveredLocation] = useState(null);

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
          <h1 className="text-white text-5xl md:text-7xl font-bold mt-6" style={{ fontFamily: 'Frank Ruhl Libre' }}>
            Contact Us
          </h1>
          <br></br>
          <p className="text-white text-lg sm:text-xl md:text-2xl text-justify mt-4">
            Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns.</p>
          <span className="text-white text-lg sm:text-xl md:text-2xl text-justify mt-4">
            Established in 2020, we have quickly gained recognition for our commitment to quality.</span>
        </div>
      </nav>

      <div className="relative bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[#045CA6] mb-4 relative inline-block">
              OUR GLOBAL PRESENCE
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#045CA6]"></span>
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="relative">
            <img
              src={mapImageUrl}
              alt="Global Map"
              className="w-full "
            />

            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute  cursor-pointer"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: 'translate(-50%, -50%)', /* Center the pin */
                  width: '30px', /* Adjust size as needed */
                  height: 'auto',
                }}
                onMouseEnter={() => setHoveredLocation(location)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <img
                  src={mapPin}
                  alt={location.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            ))}

            {hoveredLocation && (
              <div
                className="absolute bg-yellow-500 text-black px-4 py-2 rounded shadow-md"
                style={{
                  left: `${hoveredLocation.x}%`,
                  top: `${hoveredLocation.y + 3}%`, // Adjust position to appear below the marker
                  transform: 'translateX(-50%)',
                  zIndex: 10, // Ensure it's above the map
                }}
              >
                {hoveredLocation.name}
              </div>
            )}
          </div>
        </div>
      </div>

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

