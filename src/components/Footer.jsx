import { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaArrowUp } from "react-icons/fa";
import logof from "../image/logof.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <footer className="bg-[#3270DF] text-white py-10 px-5 md:px-20 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="md:w-1/3">
          <div className="flex items-center">
            <Link to="/">
              <img src={logof} alt="Logo" className="h-12 mr-3" />
            </Link>
          </div>
          <p className="mt-3 text-sm md:text-base">
            Glowing Group of Company is a leading exporter specializing in the
            global trade of agricultural products and textile yarns.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl cursor-pointer" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-xl cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="text-xl cursor-pointer" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-xl cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:space-x-16 mt-6 md:mt-0">
          <div>
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-2 space-y-2 space-x-10 text-sm md:text-base">
              <Link to="/About">About Us</Link>
              <li>Collection</li>
              <li>Exports</li>
              <li>Blog</li>
              <Link to="/Contact">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Industry</h3>
            <ul className="mt-2 space-y-2 text-sm md:text-base">
              <Link to="/Product">
                <li>Agriculture</li>
              </Link>
              <Link to="/Product">
                <li>Cattle Feed</li>
              </Link>
              <Link to="/Product">
                <li>Ceramic Parts & Insulator</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-2 space-y-2 text-sm md:text-base">
              <li>Sourcing & Processing</li>
              <li>Recycling & Sustainability</li>
              <li>Supply Chain & Logistics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm md:text-base">
        &copy; 2025 All rights reserved by Glowing International
      </div>

      {/* Floating Icons */}
      <div className="fixed right-5 bottom-5 flex flex-col items-center space-y-3">
        {showIcons && (
          <>
            <a href="mailto:example@example.com" aria-label="Email">
              <HiMail className="bg-white p-2 rounded-full text-blue-500 text-5xl cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="bg-white p-2 rounded-full text-blue-500 text-5xl cursor-pointer" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <IoLogoWhatsapp className="bg-white p-2 rounded-full text-blue-500 text-5xl cursor-pointer" />
            </a>
          </>
        )}
        <button
          className="bg-white p-3 rounded-full text-blue-500 text-2xl shadow-lg"
          onClick={() => setShowIcons(!showIcons)}
        >
          {showIcons ? <RxCross2 /> : <FaArrowUp />}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
