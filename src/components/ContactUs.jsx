import React from 'react';

const Contact = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 w-full">
                        Get In Touch With Us. We're Here To Assist You.
                    </h2>
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
                                className="w-full bg-gray-900 text-white py-3 hover:bg-gray-800 focus:outline-none focus:bg-gray-700"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>

                {/* Map Section */}
                <div className="relative w-full h-125 mt-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29418.55777678779!2d70.835028222506!3d22.827657780323356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Bhagwati%20chamber%20-2%2Cshop%20no%205%2C%20Above%20Krishna%20tyre%2C%208%20A%20nation%20highway%2C%20Trajpar%20Chokdi%20Morbi-2%2C363642%20%7C%20Gujarat!5e0!3m2!1sen!2sin!4v1741155708657!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
