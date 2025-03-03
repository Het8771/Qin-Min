import React, { useState } from 'react';
import book from "../image/book.svg";
import ferror from "../image/ferror.svg";
import diamond from "../image/diamond.svg";
import earth from '../image/earth.svg';
import multi from '../image/multi.svg';
import opula from '../image/opula.svg';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-72">
            <img src={testimonial.image} alt="Testimonial" className="mb-4 rounded-md w-full h-40 object-cover" />
            <p className="text-gray-700 text-sm mb-4">{testimonial.text}</p>
            <hr className="border-gray-300 mb-2" />
            <div className="flex flex-col">
                <span className="font-semibold text-gray-800">{testimonial.name}</span>
                <span className="text-gray-500 text-xs">{testimonial.date}</span>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const testimonialsData = [
        {
            image: book,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Anamoul',
            date: 'August 10, 2021',
        },
        {
            image: ferror,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'John Doe',
            date: 'January 10, 2025',
        },
        {
            image: diamond,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Anamoul',
            date: 'August 10, 2021',
        },
        {
            image: earth,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Jane Smith',
            date: 'September 15, 2022',
        },
        {
            image: multi,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            name: 'Mike Johnson',
            date: 'Novemsber 2, 2023 ',
        },
        {
            image: opula,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            name: 'Emily Brown',
            date: 'December 20, 2024',
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const testimonialsPerPage = 3;

    const handleNext = () => {
        if (startIndex + testimonialsPerPage < testimonialsData.length) {
            setStartIndex(startIndex + testimonialsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - testimonialsPerPage);
        }
    };

    const visibleTestimonials = testimonialsData.slice(startIndex, startIndex + testimonialsPerPage);

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">What Our Customers Say</h2>
                <p className="text-gray-600 mb-8">Discover the stories behind each perfect fit and cherished ethnic moment.</p>
                <div className="flex justify-center items-center space-x-4">
                    {visibleTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full mr-2 disabled:opacity-50"
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                    >
                        &lt;
                    </button>
                    <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full disabled:opacity-50"
                        onClick={handleNext}
                        disabled={startIndex + testimonialsPerPage >= testimonialsData.length}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
