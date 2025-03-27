import { useLocation } from "react-router-dom";

const Singlep = () => {
  const location = useLocation();
  const { productDetail } = location.state || {}; // Ensure it does not break if no state

  // Debugging: Check what data is received
  console.log("Received productDetail:", productDetail);

  return (
    <div className="container mx-auto p-6">
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6">
      {/* Product Image */}
      <img 
        src={productDetail.image} 
        alt={productDetail.title} 
        className="w-full md:w-1/3 h-60 object-cover rounded-lg"
      />
      
      {/* Product Details */}
      <div className="md:w-2/3">
        <h1 className="text-2xl font-bold text-blue-600">{productDetail.title}</h1>
        <p className="text-gray-600 mt-2">{productDetail.desc}</p>
  
        {/* Single Description with Formatting */}
        <div className="mt-4 text-gray-700">
          {productDetail.singleDesc.split("\n").map((line, index) => (
            <p key={index} className="mb-2">{line}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Singlep;
