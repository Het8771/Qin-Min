import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo.svg";
import Product from "../image/Product.svg";
import map from "../image/map.svg";
import Agri from "../image/Agri.jpg";
import Cattel3 from "../image/Cattel3.jpg";
import Ceramic from "../image/Ceramic.jpg";
import agri1 from "../image/agri1.jpg";
import agri2 from "../image/agri2.jpg";
import agri3 from "../image/agri3.jpg";
import agri4 from "../image/agri4.jpg";
import agri5 from "../image/agri5.jpg";
import agri6 from "../image/agri6.jpg";
import seed1 from "../image/seed1.jpg";
import seed2 from "../image/seed2.jpg";
import seed3 from "../image/seed3.jpg";
import seed4 from "../image/seed4.jpg";
import seed5 from "../image/seed5.png";
import seed6 from "../image/seed6.jpg";
import cremic1 from "../image/cremic1.webp";
import cremic2 from "../image/cremic2.webp";
import cremic3 from "../image/cremic3.jpeg";
import cremic4 from "../image/cremic4.webp";
import creamic5 from "../image/creamic5.jpeg";
import cremic6 from "../image/cremic6.webp";


// Dummy Category Data
const categoryData = [
  {
    id: 1,
    name: "Agriculture",
    title: "Agriculture Products",
    description: "We provide high-quality agricultural products.",
    image: Agri,
    products: [
      {
        id: 1,
        image: agri1,
        title: "Java Peanuts",
        desc: "Protect crops from pests & diseases.",
        singleDesc: `
        Java Peanuts are high-quality, protein-rich peanuts known for their superior taste, nutritional benefits, and versatile applications. They are carefully cultivated to ensure maximum purity, freshness, and export-quality standards.
        Java peanuts are rich in proteins, healthy fats, fiber, and essential minerals, making them highly valuable in the food industry. They are widely used for snack production, peanut butter, oil extraction, and animal feed. Additionally, their nitrogen-fixing properties contribute to soil fertility, making them an environmentally sustainable crop choice.`},
      {
        id: 2, image: agri2, title: "Bold peanuts", desc: "Efficient water management.", singleDesc: `
       Bold peanuts, also known as Runner peanuts, are a popular variety of peanuts renowned for their high fat and protein content, making them ideal for peanut paste and butter production. They are characterized by their red or dark red skin and elongated shape. These peanuts have a high oil content, typically exceeding 25%, which is higher than other varieties like Java peanuts. Bold peanuts are widely cultivated in India, particularly in states like Gujarat and Rajasthan, and account for a significant portion of the country's oilseed production `},

      {
        id: 3, image: agri3, title: "Hulled Sesame seed", desc: "High-quality seeds for better farming.", singleDesc: `
      Hulled sesame seeds are sesame seeds with their outer husk removed, making them easier to digest and enhancing their culinary appeal. They are often white or whitish in color and have a softer texture compared to natural sesame seeds. Hulled sesame seeds are rich in nutrients such as protein, healthy fats, dietary fiber, and minerals like calcium and iron. They are widely used in bakery products, confectionery, and as a topping for various dishes due to their nutty flavor and nutritional benefits` },
      {
        id: 4, image: agri4, title: "Natural Sesame seeds", desc: "Boost crop yield naturally.", singleDesc: `
       Natural sesame seeds are sesame seeds that have not undergone the hulling process, meaning they retain their outer husk. They are available in various colors, including white, black, and brown, and are known for their nutty flavor and crunchy texture. These seeds are rich in nutrients such as protein, healthy fats, vitamins, and minerals like calcium and iron. They are widely used in culinary applications, health foods, and as a source of sesame oil.`},
      {
        id: 5, image: agri5, title: "Groundnut Oil", desc: "Efficient tools for easy harvesting.", singleDesc: `
       Groundnut oil, also known as peanut oil, is a popular cooking oil extracted from groundnuts (peanuts). It is rich in healthy fats, including monounsaturated and polyunsaturated fatty acids, which are beneficial for heart health by reducing bad cholesterol levels and increasing good cholesterol. Groundnut oil is also a good source of antioxidants like Vitamin E, which protects cells from damage and supports skin health. It has a high smoke point, making it ideal for high-temperature cooking and frying.`},
      {
        id: 6, image: agri6, title: "Raw Cotton,", desc: "Analyze soil quality for better farming.", singleDesc: `
      Raw cotton, also known as seed cotton, is the raw material obtained from cotton plants. It consists of cotton fibers attached to the seeds within the cotton bolls. The fibers are soft, fluffy, and grow in a protective case around the seeds. Raw cotton is harvested from the cotton plant using mechanical pickers or strippers, which remove the fibers from the bolls. After harvesting, raw cotton undergoes processing to separate the fibers from the seeds and other debris, resulting in lint cotton, which is used in textile production.`},
    ],
  },
  {
    id: 2,
    name: "Cattle Feed",
    title: "Cattle Feed",
    description: "Best nutrition for livestock with premium quality.",
    image: Cattel3,
    products: [
      {
        id: 1, image: seed1, title: "Soymeal", desc: "Enhance milk production & nutrition.", singleDesc: `
      Soybean meal is a high-protein feed supplement derived from soybeans after the oil extraction process. It contains about 45-50% protein, making it an essential ingredient in animal feed, particularly for poultry and livestock. Soybean meal is also used in human food products, such as soy flour, soy grits, and as a component in meat or dairy substitutes like tofu and soymilk. Its high nutritional value and versatility make it a crucial product in both agricultural and food industries.`},
      {
        id: 2, image: seed2, title: "Cotton seed cake", desc: "Essential nutrition for young cattle.", singleDesc: `
       Cottonseed cake, also known as cottonseed meal cake, is a by-product obtained after extracting oil from cottonseeds. It is a valuable source of protein, energy, and fiber, making it an excellent supplement for animal feed, particularly for cattle. The nutritional content of cottonseed cake varies depending on factors like the method of oil extraction and the degree of decortication. It contains around 20-42% protein, depending on the processing method, and is rich in phosphorus and other essential nutrients.`},
      {
        id: 3, image: seed3, title: "Green millet", desc: "Increase muscle growth & strength.", singleDesc: `
      Green millet, commonly known as Bajra or Pearl Millet (Pennisetum glaucum), is a highly nutritious cereal crop widely cultivated in India and Africa. It is rich in carbohydrates, dietary fiber, and essential minerals like magnesium, phosphorus, and iron. Green millet is a drought-tolerant crop that thrives in well-drained soils and can grow under extreme weather conditions, making it ideal for rainfed agriculture.`},
      {
        id: 4, image: seed4, title: "Yellow maize", desc: "Balanced minerals for healthy cattle.", singleDesc: `
       Yellow maize, also known as yellow corn, is a variety of maize characterized by its yellow kernels, which derive their color from carotenoids like lutein and zeaxanthin. These pigments not only contribute to the yellow color but also provide nutritional benefits, such as supporting eye health. Yellow maize is widely used as a source of energy and nutrients in both human food and animal feed. It is particularly valued for its high content of β-carotene, a precursor to vitamin A, making it beneficial for regions where vitamin A deficiency is prevalent.`},
      {
        id: 5, image: seed5, title: "Rapeseed meal", desc: "Premium quality grass-based pellets.", singleDesc: `
       Rapeseed meal, a by-product of rapeseed oil extraction, is a high-protein feed ingredient widely used in animal nutrition. It contains approximately 30-40% protein, making it an excellent source of essential amino acids like lysine, methionine, and threonine. Rapeseed meal is rich in minerals such as calcium, phosphorus, and potassium, which are crucial for bone development and overall animal health. However, it has a higher fiber content compared to soybean meal, which can affect its digestibility.`},
      {
        id: 6, image: seed6, title: "Castor seed meal", desc: "Boost immunity & overall health.", singleDesc: `
       Castor seed meal is a by-product obtained after extracting oil from castor seeds. It is rich in nutrients such as nitrogen, phosphorus, and potassium, making it an excellent organic fertilizer for enhancing soil fertility. Castor seed meal is also known for its ability to neutralize the detrimental effects of chemical fertilizers and improve soil health by promoting beneficial bacteria and controlling nematodes. However, it contains ricin, a toxic compound that makes it unsuitable for animal feed unless detoxified`},
    ],
  },
  {
    id: 3,
    name: "Ceramic Parts & Insulators",
    title: "Ceramic Parts & Insulators",
    description: "Specialized ceramic parts & insulators.",
    image: Ceramic,
    products: [
      {
        id: 1, image: cremic1, title: "High Voltage Insulators", desc: "Reliable electrical insulation.", singleDesc: `
        High voltage insulators are critical components in electrical power systems, designed to prevent the flow of electrical current between conductors and supporting structures, such as transmission towers. These insulators are made from materials like porcelain, glass, or composite polymers, each offering unique advantages in terms of durability, electrical resistance, and environmental resilience.`},
      {
        id: 2, image: cremic2, title: "Industrial Ceramic Parts", desc: "Durable & heat-resistant components.", singleDesc: `
       Industrial ceramic parts are made from advanced ceramic materials that offer superior properties such as high thermal stability, wear resistance, and electrical insulation. These parts are used in a wide range of industrial applications, including aerospace, automotive, electronics, and healthcare. The materials used for these parts include alumina, zirconia, silicon carbide, and steatite, each providing unique benefits depending on the application.` },
      {
        id: 3, image: cremic3, title: "Ceramic Tubes", desc: "Ideal for high-temperature applications.", singleDesc: `
       Ceramic tubes are advanced components used in various industrial applications due to their exceptional thermal stability, corrosion resistance, and electrical insulation properties. These tubes are made from materials like alumina, silicon carbide, zirconia, and quartz, each offering unique benefits depending on the application. Ceramic tubes are widely used in high-temperature environments such as industrial furnaces, kilns, and laboratory equipment, where they provide structural support and insulation.` },
      {
        id: 4, image: cremic4, title: "Porcelain Insulators", desc: "Superior quality for power systems.", singleDesc: `
       Porcelain insulators are widely used in electrical power transmission systems due to their excellent dielectric properties and mechanical strength. They are made from a mixture of clay, kaolin, feldspar, and quartz, which are heated at high temperatures to create a dense, non-porous material. Porcelain insulators are suitable for high-voltage applications, offering resistance to environmental factors like pollution and moisture. They are available in various types, including plug, disc, tensile, corrugated, string, and post insulators, each designed for specific uses and voltage levels.` },
      {
        id: 5, image: creamic5, title: "Transformer Bushings", desc: "Enhanced electrical safety.", singleDesc: `
        Transformer bushings are critical components in electrical transformers, serving as insulators for conductors that pass through the transformer tank. They provide electrical insulation, mechanical support, and protection against environmental factors like moisture and contaminants. Bushings ensure the safe and reliable operation of transformers by preventing electrical breakdowns and short circuits between high-voltage and low-voltage windings or the grounded tank.` },
      {
        id: 6, image: cremic6, title: "Thermal Shock Resistant Parts", desc: "Ensuring long-lasting performance.", singleDesc: `
        Thermal shock resistant parts are designed to withstand rapid and extreme temperature changes without suffering damage. These components are crucial in various industries, including aerospace, automotive, electronics, and manufacturing, where they are exposed to fluctuating thermal conditions. Materials used for these parts include advanced ceramics like silicon carbide (SiC), silicon nitride (Si3N4), alumina (Al2O3), and zirconia (ZrO2), as well as specialized polymers and composites.` },
    ],
  },
];

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mt-5">
        <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-md">
          {categoryData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${activeTab === category.id
                ? "bg-blue-600 text-white font-bold"
                : "hover:text-white hover:bg-blue-500 text-gray-600"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  // Get selected category data dynamically
  const selectedCategory = categoryData.find((cat) => cat.id === activeTab);

  return (
    <>
      {/* Navbar Section */}
      <nav
        className="bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Product})` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <img src={logo} alt="Globwing logo" className="h-8 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8 font-semibold">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <Link to="/About" className="hover:text-blue-400">
                About us
              </Link>
              <Link to="/Product" className="hover:text-blue-400">
                Product
              </Link>
              {/* <Link to="/Export" className="hover:text-blue-400">
                Export
              </Link>
              <Link to="/Blog" className="hover:text-blue-400">
                Blog
              </Link> */}
            </div>
            <Link
              to="/contact"
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact us
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 text-gray-800">
              <Link to="/" className="block hover:text-blue-600">
                Home
              </Link>
              <Link to="/About" className="block hover:text-blue-600">
                About us
              </Link>
              <Link to="/Product" className="block hover:text-blue-600">
                Product
              </Link>
              {/* <Link to="/Export" className="block hover:text-blue-600">
                Export
              </Link>
              <Link to="/Blog" className="block hover:text-blue-600">
                Blog
              </Link> */}
              <Link
                to="/Contact"
                className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
              >
                Contact us
              </Link>
            </div>
          )}
        </div>

        {/* Navbar Hero Section */}
        <div className="py-20 md:py-40 lg:py-60 px-6 md:px-10 ">
          <h1 className="text-white text-5xl md:text-7xl font-bold mt-6" style={{ fontFamily: 'Frank Ruhl Libre' }}>Product</h1>
          <p className="text-white text-lg md:text-2xl">
            The quality products you trust.
          </p>
        </div>
      </nav>

      {/* Category Tabs */}
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Product Cards (Updated for Dynamic Content) */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {selectedCategory.products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-600">{product.title}</h3>
              <p className="text-gray-700">{product.desc}</p>
              <span
                onClick={() => {
                  navigate('/Singlep', {
                    state: {
                      productDetail: {
                        id: product.id,
                        image: product.image,
                        title: product.title,
                        desc: product.desc, // Ensure this is being passed
                        singleDesc: product.singleDesc, // Ensure long description is passed
                      }
                    }
                  });
                }}
                className="text-blue-600 mt-2 inline-block cursor-pointer"
              >
                Read More →
              </span>


            </div>
          </div>
        ))}
      </div>


      {/* Contact & Map Section */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden p-8 gap-8 container mx-auto">
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Have Questions?</h2>
          <h1 className="text-3xl font-bold text-blue-600 mb-6">We're Here to Help!</h1>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Phone" className="w-full p-3 border rounded" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded"></textarea>
            <button className="w-full bg-blue-600 text-white p-3 rounded">Send Message</button>
          </form>
        </div>
        <div className="md:w-1/2 w-full">
          <img src={map} alt="Company Location Map" className="w-full h-[300px] md:h-full object-cover rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Navbar;