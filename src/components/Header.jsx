// import React, { useState } from "react";
// import logo from "../image/logo.svg";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img src={logo} alt="Globwing logo" className="h-8 w-auto mr-2" />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8 font-semibold">
//             <a href="#" className="text-black hover:text-blue-600">
//               Home
//             </a>
//             <Link to ="/About" className="text-black hover:text-blue-600">
//               About us
//             </Link>
//             <a href="#" className="text-black hover:text-blue-600">
//               Product
//             </a>
//             <a href="#" className="text-black hover:text-blue-600">
//               Export
//             </a>
//             <a href="#" className="text-black hover:text-blue-600">
//               Blog
//             </a>
//           </div>

//           {/* Contact Button */}
//           <button className="hidden md:block bg-[#026498] text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
//             Contact us
//           </button>

//           {/* Hamburger Menu (Mobile) */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-black focus:outline-none"
//             >
//               {/* Hamburger Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 {isMenuOpen ? (
//                   // Close Icon
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   // Hamburger Icon
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 font-semibold">
//             <a href="#" className="block text-black hover:text-blue-600">
//               Home
//             </a>
//             <a href="#" className="block text-black hover:text-blue-600">
//               About us
//             </a>
//             <a href="#" className="block text-black hover:text-blue-600">
//               Product
//             </a>
//             <a href="#" className="block text-black hover:text-blue-600">
//               Export
//             </a>
//             <a href="#" className="block text-black hover:text-blue-600">
//               Blog
//             </a>
//             <button className="w-full bg-[#026498] text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
//               Contact us
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
