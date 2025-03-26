import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProductDetailSection = ({ productDetail }) => {
  if (!productDetail) return null; // Avoid rendering if data is missing

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 mt-[30px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="w-4/6 mx-auto">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Text Content Section */}
        <div className="text-gray-700">
          <h3 className="text-[#3270DF] font-bold text-4xl sm:text-4xl">
            {productDetail.title}
          </h3>
          <p className="mt-4 text-lg text-black text-justify">
            {productDetail.desc}
          </p>
          <ul className="mt-6 space-y-4">
            {productDetail.features?.map((text, index) => (
              <li key={index} className="flex items-start space-x-3">
                <FaCheckCircle className="text-[#3270DF] mt-1" size={20} />
                <span className="text-sm font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
