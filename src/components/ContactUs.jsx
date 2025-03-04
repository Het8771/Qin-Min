import React from 'react';
import map from "../image/map.svg";

const Contact = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 w-full">Get In Touch With Us. We're Here To Assist You.</h2>
                    <form>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border-b border-gray-300 text-gray-700 focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Phone Number (optional)"
                                className="w-full px-4 py-2 border-b border-gray-300 text-gray-700 focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-2 border-b border-gray-300 text-gray-700 focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="State"
                                className="w-full px-4 py-2 border-b border-gray-300 text-gray-700 focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full px-4 py-2 border-b border-gray-300 text-gray-700 focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full px-4 py-2 border-b border-gray-300 text-gray-700 focus:outline-none focus:border-red-500"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-100 bg-gray-900 text-white py-3  hover:bg-gray-800 focus:outline-none focus:bg-gray-700"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>

                {/* Map */}
                <div>
                    <img
                        src={map}
                        alt="Surat Map"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
