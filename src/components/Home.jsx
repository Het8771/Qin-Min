import React from 'react';
import { Link } from 'react-router-dom';
import Home1 from "../image/Home1.svg";
import about from "../image/about.svg";
import book from "../image/book.svg";
import ferror from "../image/ferror.svg";
import diamond from "../image/diamond.svg";
import earth from "../image/earth.svg";
import forever from "../image/forever.svg";
import multi from "../image/multi.svg";
import opula from "../image/opula.svg";
import Testimonials from '../components/Testimonials';

const Home = () => {
    const featuredCollections = [
        { name: 'Cromatic', image: book, path: '/chromatic' },
        { name: 'Diamond', image: diamond, path: '/diamond' },
        { name: 'Earth', image: earth, path: '/earth' },
        { name: 'Ferro 2.0', image: ferror, path: '/ferro' },
        { name: 'Forever', image: forever, path: '/forever' },
        { name: 'Multi', image: multi, path: '/multi' },
        { name: 'Book Match', image: about, path: '/bookmatch' },
        { name: 'Opula', image: opula, path: '/opula' },
    ];

    return (
        <>
        <div>
            {/* Hero Section */}
            <div className="relative">
                <img src={Home1} alt="Living Room" className="inset-0 w-full h-auto object-cover" />
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
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Welcome</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div>
                        <img src={about} alt="Example" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            {/* Featured Collection Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured Collection</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {featuredCollections.map((collection) => (
                            <Link
                                key={collection.name}
                                to={collection.path}
                                className="block"
                            >
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <img
                                        src={collection.image}
                                        alt={collection.name}
                                        className="w-full h-60 object-cover rounded-t-lg" // Reduced height for better fit
                                    />
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-semibold text-gray-800">{collection.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="">
                    <h2 className="text-xl text-gray-800 justify-start ">CONTACT US</h2>
                    <p className="mt-2 text-3xl font-semibold text-black-600">Get In Touch With Us. We're Here To Assist You.</p>
                </div>

                <div className="mt-10">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (optional)</label>
                                <div className="mt-1">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-red-700 ho focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                Leave us a Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        <Testimonials/>
        </>
        
    );
};

export default Home;
