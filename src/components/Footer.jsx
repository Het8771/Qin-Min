import React from 'react';
import logof from "../image/logof.svg";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#026498] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <img
                src={logof}
                alt="Globwing Logo"
                className="h-20 w-auto mr-2"
              />
            </div>
            <p className="mt-4 text-sm text-justify">
              Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-30 ml-0">
            <h6 className="font-semibold text-[#EDA268]">Quick Links</h6>
            <ul className="mt-4 space-y-2">
              <li><Link to="/About" className="hover:text-blue-200 text-sm">About Us</Link></li>
              <li><Link to="/Product" className="hover:text-blue-200 text-sm">Product</Link></li>
              <li><Link to="/Export" className="hover:text-blue-200 text-sm">Exports</Link></li>
              <li><Link to="/Blog" className="hover:text-blue-200 text-sm">Blog</Link></li>
              <li><Link to="/Contact" className="hover:text-blue-200 text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h6 className="font-semibold text-[#EDA268]">Product</h6>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-200 text-sm">Agriculture</a></li>
              <li><a href="#" className="hover:text-blue-200 text-sm">Cattle Feed</a></li>
              <li><a href="#" className="hover:text-blue-200 text-sm">Ceramic Parts & Insulators</a></li>
              <li><a href="#" className="hover:text-blue-200 text-sm">Textile Materials</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex items-start justify-center md:justify-start">
            <h6 className="font-semibold sr-only">Follow Us</h6>
            <div className="flex mt-2 space-x-4">
              <a href="#" aria-label="Instagram" className="hover:opacity-75"><FaInstagram className="h-5 w-5 text-[#EDA268]" /></a>
              <a href="#" aria-label="Facebook" className="hover:opacity-75"><FaFacebook className="h-5 w-5 text-[#EDA268]" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-75"><FaLinkedin className="h-5 w-5 text-[#EDA268]" /></a>
              <a href="#" aria-label="Twitter" className="hover:opacity-75"><FaTwitter className="h-5 w-5 text-[#EDA268]" /></a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs">
          <p>Glowing Group of Company is a leading exporter specializing in...</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
