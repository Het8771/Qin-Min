import React from 'react';
import logof from "../image/logof.svg"

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={logof} alt="Company Logo" className="h-25 mb-2" />
          <p className="text-lg">Qin Min Impex</p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-bold mb-2">Pages</h4>
          <ul className="text-sm">
            <li className="mb-1"><a href="#" className="hover:text-gray-300">Home</a></li>
            <li className="mb-1"><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h4 className="font-bold mb-2">Policy</h4>
          <ul className="text-sm">
            <li className="mb-1"><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-bold mb-2">Contact Information</h4>
          <ul className="text-sm">
            <li><p className="text-sm mb-1">Address: Bhagwati chamber -2,shop no 5, Above Krishna tyre, 8 A nation highway, Trajpar Chokdi Morbi-2,363642 | Gujarat</p></li>
                <li><p className="text-sm mb-1">Mobile: +91 12345 67890</p></li>
                <li><p className="text-sm">Email: qinminimpex@gmail.com</p></li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Icons */}
      <div className="container mx-auto px-4 mt-6 py-2 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-xs">Copyright © 2025 | All Right Reserved</p>
        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
