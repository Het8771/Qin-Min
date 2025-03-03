import React from 'react';
import about1 from "../image/about1.svg";
import about2 from "../image/about2.svg";
import about3 from "../image/about3.svg";
import about4 from "../image/about4.svg";
import back from "../image/back.svg";
import team1 from "../image/team1.svg";
import team2 from "../image/team2.svg";
import team3 from "../image/team3.svg";
import team4 from "../image/team4.svg";

const About = () => {
        const teamMembers = [
            {
                name: 'Harmeet Godhani',
                role: 'Founder',
                image: team1
            },
            {
                name: 'Harmeet Godhani',
                role: 'Founder',
                image: team2
            },
            {
                name: 'Harmeet Godhani',
                role: 'Founder',
                image: team3
            },
            {
                name: 'Harmeet Godhani',
                role: 'Founder',
                image: team4
            },
        ];
    return (
        <>
        <div className="bg-white">
            {/* Top Section with Background Image */}
            <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${back})` }}>
                <div className="absolute inset-0  bg-opacity-50"></div>
                <h2 className="relative text-4xl font-semibold text-white z-10">About Us</h2>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto py-16 px-4">
                {/* Description */}
                <div className="text-black-700 leading-relaxed mb-12 text-center text-justify text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Image 1 */}
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src={about1} alt="About Us" className="w-full h-full object-cover" />
                    </div>

                    {/* Image 2 (Split) */}
                    <div className="md:col-span-1 grid grid-cols-1 grid-rows-2 gap-6">
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img src={about2} alt="About Us" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img src={about4} alt="About Us" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src={about3} alt="About Us" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Our Vision */}
                <div className="mb-8">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                    <p className=" text-lg text-gray-700 text-justify leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
                </div>

                {/* Our Mission */}
                <div>
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-700 text-justify leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
                </div>
            </div>
            <div className="bg-white py-5">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Our Core Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-[400] h-[400]  shadow-md aspect-square object-cover mb-2"
                            />
                            <p className="text-gray-800 font-semibold mr-20">{member.name}</p>
                            <p className="text-red-500 mr-20">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default About;
