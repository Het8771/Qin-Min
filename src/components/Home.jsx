import React from 'react';
import Home1 from "../image/Home1.svg"; // Hero Image
import about from "../image/about.svg"; // Import new About Us Image
import cromatic from "../image/cromatic.svg";
import diamond from "../image/diamond.svg";
import earth from "../image/earth.svg";
import ferror from "../image/ferror.svg";
import forever from "../image/forever.svg";
import multi from "../image/multi.svg";
import book from "../image/book.svg";
import opula from "../image/opula.svg";

const Home = () => {
    const tiles = [
    { name: 'CROMATIC', imageUrl: cromatic},
    { name: 'DIAMOND', imageUrl: diamond},
    { name: 'EARTH', imageUrl: earth },
    { name: 'FERRO 2.0', imageUrl: ferror},
    { name: 'FOREVER', imageUrl: forever},
    { name: 'MULTI COLOR', imageUrl: multi },
    { name: 'BOOK MATCH', imageUrl: book},
    { name: 'OPULA', imageUrl: opula},
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={Home1}
          alt="Living Room"
          className="inset-0 w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Porcelain Prestige: Unmatched Elegance
            </h1>
            <p className="text-lg text-white hidden sm:block">
              Indulge in sophistication with our premium porcelain tiles, renowned
              for their timeless beauty and unmatched durability.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Welcome</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={about} //USE THIS
              alt="Example"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Featured Collection */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Featured Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tiles.map((tile) => (
              <div key={tile.name} className="text-center">
                <img
                  src={tile.imageUrl}
                  alt={tile.name}
                  className="w-full h-auto rounded-lg shadow-md aspect-square object-cover"
                />
                <p className="mt-2 text-gray-600">{tile.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pb-8">
            <h2 className="text-2xl font-semibold text-gray-800   text-center uppercase">
              Contact Us
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Get In Touch With Us. We're Here To Assist You.
            </p>
            <form className="max-w-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm  mb-2 sr-only">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name" // Added placeholder
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm  mb-2 sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email Address" // Added placeholder
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm  mb-2 sr-only"
                  >
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Phone Number (optional)" // Added placeholder
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mt-4">
                <label htmlFor="message" className="block text-gray-700 text-sm  mb-2 sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Message" // Added placeholder
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-6 text-center">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Leave us a Message
                </button>
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
