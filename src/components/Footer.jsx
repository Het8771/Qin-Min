import { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <footer className="bg-[#3270DF] text-white py-10 px-5 md:px-20 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="md:w-1/3">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 mr-3" />
            <h2 className="text-xl font-semibold">Glowing Group of Company</h2>
          </div>
          <p className="mt-3 text-sm">
            Glowing Group of Company is a leading exporter specializing in the
            global trade of agricultural products and textile yarns.
          </p>
          <div className="flex space-x-3 mt-4">
            <FaInstagram className="text-xl cursor-pointer" />
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaLinkedinIn className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:space-x-16 mt-6 md:mt-0">
          <div>
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>About Us</li>
              <li>Collection</li>
              <li>Exports</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Industry</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Agriculture</li>
              <li>Cattle Feed</li>
              <li>Ceramic Parts & Insulator</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Sourcing & Processing</li>
              <li>Recycling & Sustainability</li>
              <li>Supply Chain & Logistics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        © 2025 All rights reserved by Glowing International
      </div>

      {/* Floating Icons */}
      <div className="fixed right-5 bottom-5 flex flex-col items-center space-y-3">
        {showIcons && (
          <>
            <HiMail className="bg-white p-2 rounded-full text-blue-500 text-5xl cursor-pointer" />
            <FaLinkedinIn className="bg-white p-2 rounded-full text-blue-500 text-5xl cursor-pointer" />
            <IoLogoWhatsapp className="bg-white p-2 rounded-full text-blue-500 text-5xl cursor-pointer" />
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
