import logo from "../image/logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect,useRef } from "react";
import Home1 from "../image/Home1.svg";
import Home2 from "../image/Home2.svg";
import Home3 from "../image/Home3.svg";
import sample1 from "../image/sample1.jpg";
import sample2 from "../image/sample2.jpg";
import sample3 from "../image/sample3.jpg";
import sample4 from "../image/sample4.jpg";
import sample5 from "../image/sample5.jpg";
import sample6 from "../image/sample6.jpg";
import backh from "../image/backh.svg";
import cate from "../image/cate.svg";
import emoji1 from "../image/emoji1.svg";
import emoji2 from "../image/emoji2.svg";
import emoji3 from "../image/emoji3.svg";
import emoji4 from "../image/emoji4.svg";
import emoji5 from "../image/emoji5.svg";
import emoji6 from "../image/emoji6.svg";
import { FaQuoteLeft, FaCheckCircle, FaChevronLeft, FaChevronRight,FaPaperPlane } from "react-icons/fa";
import user from "../image/user.svg";
import map from "../image/map.svg";
import img1 from "../image/img1.jpg"
import img2 from "../image/img2.svg";
import img3 from "../image/img3.jpg";
import img4 from "../image/img4.jpg";
import Agri from "../image/Agri.jpg";
import Agri2 from "../image/Agri2.jpg";
import Agri3 from "../image/Agri3.jpg";
import Agri4 from "../image/Agri4.jpg";
import Agri5 from "../image/Agri5.jpg";
import Agri6 from "../image/Agri6.jpg";
import  Cattel from "../image/ Cattel.jpg";
import  Cattel2 from "../image/ Cattel2.jpg";
import  Cattel3 from "../image/Cattel3.jpg";
import  Cattel4 from "../image/Cattel4.jpg";
import  Cattel5 from "../image/Cattel5.jpg";
import  Cattel6 from "../image/Cattel6.jpg";
import Ceramic from "../image/Ceramic.jpg";
import Ceramic2 from "../image/Ceramic2.jpg";
import Ceramic3 from "../image/Ceramic3.jpg";
import Ceramic4 from "../image/Ceramic4.jpg";
import Ceramic5 from "../image/Ceramic5.jpg";
import Ceramic6 from "../image/Ceramic6.jpg";
import Agriculure from "../image/Agriculure.jpg";
import Abc from "../image/Abc.jpg";
import abc2 from "../image/abc2.jpg";
import abc3 from "../image/abc3.jpg";
import abc4 from "../image/abc4.jpg";
import abc5 from "../image/abc5.jpg";
import { FaStar, FaStarHalf } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./AutoScroll.css";

const AgricultureSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const productImages = [Ceramic,Ceramic2,Ceramic3,Ceramic4,Ceramic5,Ceramic];
  // const categoryImages = [cate, cate, cate, cate, cate, cate];
  const productImages1 = [Home1, Home1, Home1, Home1, Home1, Home1];

  const slides = [
    {
      img: img1,
      title: 'Agriculture',
      products: [" Reaping Nature's Best and Delivering It Worldwide with Integrity"],
      description:
        'Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products. Established in 2020, we have quickly gained recognition for our commitment to quality.',
    },
    {
      img: img2,
      title: 'Agriculture',
      products: [" Reaping Nature's Best and Delivering It Worldwide with Integrity"],
      description:
        'Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products. Established in 2020, we have quickly gained recognition for our commitment to quality.',

    },
    {
      img: img3,
      title: 'Agriculture',
      products: [" Reaping Nature's Best and Delivering It Worldwide with Integrity"],
      description:
        'Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products. Established in 2020, we have quickly gained recognition for our commitment to quality.',

    },
    {
      img: img4,
      title: 'Agriculture',
      products: [" Reaping Nature's Best and Delivering It Worldwide with Integrity"],
      description:
        'Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products. Established in 2020, we have quickly gained recognition for our commitment to quality.',

    },
  ];

  const cardData = [
    { title: 'Commitment to Quality', description: 'We ensure premium quality in all our agricultural products.', image: emoji1 },
    { title: 'Reliable Export Services', description: 'Our efficient supply chain guarantees timely and secure global deliveries.', image: emoji2 },
    { title: 'Customer Satisfaction', description: 'We prioritize building long-term relationships through excellent service and support.', image: emoji3 },
    { title: 'Diverse Product Portfolio', description: 'We offer a wide range of agricultural  materials to meet varied market demands.', image: emoji4 },
    { title: 'Strong Global Network', description: 'Our extensive partnerships enable smooth international trade and business growth.', image: emoji5 },
    { title: 'Ethical and Sustainable Practices', description: 'We prioritize building long-term relationships through excellent service and support.', image: emoji6 },
  ];

  const testimonials = [
    { text: "Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products.", name: "John Week", designation: "Bogy Man", stars: 5 },
    { text: "Their commitment to quality and customer satisfaction is unmatched in the industry.", name: "Sarah Lee", designation: "Entrepreneur", stars: 4 },
    { text: "Reliable export services with a strong global network. Highly recommended!", name: "Michael Smith", designation: "Business Owner", stars: 5 },
  ];
  const categories = [
    "Agriculture",
    "Cattel feed",
    "Ceramic Parts & Insulators",
    "Textile Products"
  ]


  const categoriesData = {
    "Agriculture": [
      Agri,
      Agri2,
      Agri3,
      Agri4,
      Agri5,
      Agri6
    ],
    " Cattel feed":[
       Cattel,
      Cattel2,
      Cattel3,
      Cattel4,
      Cattel5,
      Cattel6

    ],
    "Ceramic Parts & Insulators": [
      Ceramic,
      Ceramic2,
      Ceramic3,
      Ceramic4,
      Ceramic5,
      Ceramic6,
    ]
  };

  const [activeCategory, setActiveCategory] = useState("Agriculture")

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const categoryImages = categoriesData[activeCategory] || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (count) => {
    return Array(5).fill().map((_, i) => (
      <span key={i} className={`text-yellow-500 ${i < count ? "" : "opacity-25"}`}>
        ★
      </span>
    ));
  };
 
  const scrollRef = useRef(null)

  // Sample testimonial data
  const testimonials1 = [
    {
      text:
        "Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products.",
      stars: 5,
      name: "John Week",
      designation: "Body Man",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      text:
        "Their commitment to quality and customer satisfaction is unmatched in the industry.",
      stars: 4,
      name: "Sarah Lee",
      designation: "Entrepreneur",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      text:
        "Reliable export services with a strong global network. Highly recommended!",
      stars: 5,
      name: "Michael Smith",
      designation: "Business Owner",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      text:
        "Exceptional service and product quality. They've been our trusted partner for years.",
      stars: 5,
      name: "Emma Johnson",
      designation: "Supply Chain Manager",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      text:
        "Their agricultural exports meet the highest international standards. Very impressed!",
      stars: 4,
      name: "David Chen",
      designation: "Import Specialist",
      image: "/placeholder.svg?height=200&width=200"
    }
  ]

  const scrollToTestimonial = index => {
    setCurrentIndex(index)
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / testimonials.length
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth"
      })
    }
  }

  // Update current index based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const cardWidth = scrollRef.current.scrollWidth / testimonials.length
      const newIndex = Math.round(scrollPosition / cardWidth)
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    }
  }

  // Add scroll event listener
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [currentIndex])



  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      let scrollAmount = 0;
      const speed = 2; // Adjust speed (higher = faster)

      const scroll = () => {
        if (scrollContainer) {
          scrollAmount += speed;
          if (scrollAmount >= scrollContainer.scrollWidth / 2) {
            scrollAmount = 0; // Reset when reaching half of duplicate list
          }
          scrollContainer.scrollLeft = scrollAmount;
        }
        requestAnimationFrame(scroll);
      };

      scroll();
    }
  }, []);
  const productImage = [
    Agriculure,
    Abc,
    abc2,
    abc3,
    abc4,
    abc5,
  ];
  
  return (
    <>
      <nav className="bg-white">
        <div className="container mx-auto px-4 sticky z-50">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Globwing logo" className="h-8 w-auto mr-2" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-semibold">
              <Link to="/" className="text-black hover:text-blue-600">
                Home
              </Link>
              <Link to="/About" className="text-black hover:text-blue-600">
                About us
              </Link>
              <Link to="/Product" className="text-black hover:text-blue-600">
                Product
              </Link>
              <Link to="/Export" className="text-black hover:text-blue-600">
                Export
              </Link>
              <a href="/Blog" className="text-black hover:text-blue-600">
                Blog
              </a>
            </div>

            {/* Contact Button */}
            <Link to="/Contact" button className="hidden md:block bg-[#3270DF] text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Contact us
            </Link>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {isMenuOpen ? (
                    // Close Icon
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    // Hamburger Icon
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 font-semibold">
              <Link to="/" className="block text-black hover:text-blue-600">
                Home
              </Link>
              <Link to="/About" className="block text-black hover:text-blue-600">
                About us
              </Link>
              <Link to="/Product" className="block text-black hover:text-blue-600">
                Product
              </Link>
              <Link to="/Export" className="block text-black hover:text-blue-600">
                Export
              </Link>
              <Link to="/Blog" className="block text-black hover:text-blue-600">
                Blog
              </Link>
              <Link to="/Contact" className="block bg-blue-600 text-white px-4 py-2 rounded text-center">Contact us</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
      <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      className="w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-screen">
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="space-y-2 sm:space-y-4 lg:space-y-6">
                <h2
                  className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-tight sm:leading-tight lg:leading-[83px]"
                  style={{ fontFamily: 'Frank Ruhl Libre' }}
                >
                  {slide.title}
                </h2>
                {slide.products.map((product, idx) => (
                  <p
                    key={idx}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                    style={{ fontFamily: 'Frank Ruhl Libre' }}
                  >
                    {product}
                  </p>
                ))}
                <p className="text-base sm:text-lg lg:text-xl max-w-3xl tracking-wide mt-4 sm:mt-6 lg:mt-8">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

        <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2">
          <button className="bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition">
            <FaChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2">
          <button className="bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition">
            <FaChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="w-3/5 mx-auto">
              <img src={Home2} alt="Agriculture Products" className="rounded-full shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-10 w-1/3">
              <img src={Home3} alt="Crops and Seeds" className="rounded-full shadow-lg" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-gray-700">
            <h4 className="text-[#3270DF] text-xl">Cattle feed</h4>
            <h3 className="text-[#3270DF] font-bold text-4xl sm:text-4xl">Beyond Feed - Nourishing Global Herds with precision and care.</h3>
            <p className="mt-4 text-1xl text-black text-justify">
              Glowing Group of Company is a leading exporter specializing in the global trade of agricultural products and textile yarns. Established in 2020, we have quickly gained recognition for our commitment to quality, reliability, and customer satisfaction.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-[#3270DF] mt-1" size={19} />
                <span className="text-sm font-medium text-justify">Cattle feed plays a crucial role in ensuring the health, productivity, and sustainability of livestock farming.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-[#3270DF] mt-1" size={24} />
                <span className="text-sm font-medium text-justify"> Beyond Feed, we are committed to providing high-quality, nutrient-rich feed solutions that support farmers in raising healthier, stronger, and more productive herds.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-[#3270DF] mt-1" size={32} />
                <span className="text-sm font-medium text-justify">Ceramic Parts & Insulators (Band Heater, End Sealing Bead, Ignition Electrode, Ceramic Alumina, Mechanical Seal Ring, Terminal Block for Thermocouple, Thermostat Parts, Ceramic Connector).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br></br>

      {/* Our Product Section */}
      <section className="py-12" style={{ backgroundImage: `url(${backh})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className="container mx-auto px-4">
          <div className=" mb-8">
            <p className="text-xl text-white">Ceramic insulater</p>
            <h2 className="text-4xl font-bold text-white mr">Powering Progress with unmatched protection & precision</h2>
            <p className="text-white mt-2 ">Ceramic insulators are essential components in modern electrical and agricultural infrastructure. They provide superior insulation, durability, and resistance to extreme environmental conditions, ensuring safe and efficient power transmission.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {productImages.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt="Hulled Sesame seed" className="w-full h-60 object-cover rounded-md" />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                  {/* <a href="#" className="text-white">Hulled Sesame seed</a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Category Section */}
      <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-left mb-8">
          <p className="text-[#3270DF] tracking-wider text-xl">Our Category</p>
          <h2 className="text-4xl font-bold text-[#3270DF]">
          Our Range of Products
          </h2>
          <p className="text-black mt-2 text-base">
          we are dedicated to providing high-quality, innovative, and sustainable agricultural solutions. Our diverse range of products is designed to enhance productivity, improve efficiency, and ensure long-term sustainability for farmers and agribusinesses.
          </p>
        </div>

        {/* Categories and Image Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Category List (Sticky) */}
          <div className="lg:w-1/4">
            <div className="sticky top-0 bg-white rounded-lg p-2 shadow-md">
              <ul className="space-y-2">
                {Object.keys(categoriesData).map(category => (
                  <li key={category}>
                    <button
                      className={`text-black py-2 px-4 rounded-md w-full text-left transition-colors duration-200 ${
                        activeCategory === category
                          ? "bg-[#3270DF] text-white"
                          : "hover:bg-[#3270DF] hover:text-white"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Grid - Changes based on selected category */}
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categoryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md shadow-md group"
              >
                <img
                  src={image}
                  alt={`${activeCategory} product ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#026498]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


      {/* Why Choose Us Section */}
      <section className="py-12" style={{ backgroundImage: `url(${Home1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <div className=" mb-8">
            <p className="text-white tracking-wider text-xl">Why Choose Us?</p>
            <h2 className="text-4xl font-bold text-white"> Your global partner for Excellence and Tailored Solutions.</h2>
            <p className="text-gray-300 mt-2">Cattle feed and fertilizers to modern irrigation, farm equipment, and smart agriculture solutions, we help drive agricultural success with innovation and precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <div key={index} className="bg-white/30 rounded-md p-6 border-2 border-white">
                <div className="flex justify-center h-24 items-center mb-4">
                  <img src={card.image} alt={card.title} className="h-24 w-24 bg-[#026498] rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="text-white">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Product Section */}
      <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-[#3270DF] tracking-wider text-xl">Best Selling Product</p>
          <h2 className="text-4xl font-bold text-[#3270DF]">Top Choice for Global Markets.</h2>
          <p className="text-gray-700 mt-2 text-lg">
          Glowing Group of Company,we take pride in being the top choice for global markets, offering high-quality, innovative, and sustainable solutions across the agricultural industry. Our commitment to excellence, precision, and customer satisfaction makes us a trusted partner for farmers, agribusinesses, and industries worldwide.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {productImage.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-64 object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Google Line Section */}
      <section className="bg-white py-4 overflow-hidden">
      <div className="relative w-full flex items-center">
        <div className="scrolling-text">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex space-x-6">
              {Array(6)
                .fill("Google")
                .map((word, i) => (
                  <span
                    key={i}
                    className="text-gray-400 text-2xl md:text-3xl lg:text-4xl mx-2 md:mx-4 lg:mx-6"
                  >
                    {word}
                  </span>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Testimonial Section */}
      <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-[#3270DF] tracking-wider text-xl">Testimonial</p>
          <h2 className="text-4xl font-bold text-[#3270DF]">
            What Our Users Say
          </h2>
          <p className="text-gray-700 mt-2">
            Glowing Group of Company is a leading exporter specializing in the
            global trade of agricultural products. Established
            in 2020, we have quickly gained recognition for our commitment to
            quality
          </p>
        </div>

        {/* Scrollable testimonial container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials1.map((testimonial1, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] snap-center bg-white rounded-md p-6 shadow-md"
            >
              <div className="text-gray-600 mb-4 relative">
                <FaQuoteLeft className="absolute top-0 left-0 text-gray-300 text-2xl" />
                <p className="pl-8">{testimonial1.text}</p>
              </div>
              <div className="flex justify-center mt-4">
                {renderStars(testimonial1.stars)}
              </div>
              <div className="flex flex-col items-center mt-4">
                <img
                  src={user}
                  alt={testimonial1.name}
                  className="w-20 h-20 rounded-full object-cover mb-2"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {testimonial1.name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonial1.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-[#026498]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden ">

        {/* Form Section */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden mb-10 p-8 gap-8 container mx-auto ">
          {/* Contact Form Section */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-xl font-semibold text-[#3270DF] mb-4">Have Questions?</h2>
            <h1 className="text-3xl font-bold text-[#3270DF] mb-6">We're Here to Help!</h1>

            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded focus:ring focus:ring-blue-200" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded focus:ring focus:ring-blue-200" />
              <input type="tel" placeholder="Phone" className="w-full p-3 border rounded focus:ring focus:ring-blue-200" />

              <select className="w-full p-3 border rounded focus:ring focus:ring-blue-200">
                <option>Choose Subject</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Sales</option>
              </select>

              <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded focus:ring focus:ring-blue-200"></textarea>

              <div className="flex items-center">
                <input type="checkbox" id="robot" className="mr-2" />
                <label htmlFor="robot" className="text-sm">I AM Not a Robot</label>
              </div>

              <button className="w-full bg-[#3270DF] text-white p-3 rounded focus:outline-none">
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="md:w-1/2 w-full">
            <img src={map} alt="Company Location Map" className="w-full h-[300px] md:h-full object-cover rounded-lg" />
          </div>
        </div>
      

      </div>
      <div className="bg-[#3270DF] text-white p-6 flex flex-col md:flex-row justify-between items-center w-full mb-2">
      <h2 className="text-lg font-semibold">Connect with Us for Business Solutions</h2>
      <div className="flex items-center bg-white  p-2 w-full md:w-auto mt-4 md:mt-0  rounded-lg">
        <input
          type="email"
          placeholder="Enter Mail"
          className="px-4 py-2 outline-none text-black w-full"
        />
        <button className="bg-[#3270DF] text-white p-2 rounded-lg">
          <FaPaperPlane size={16} />
        </button>
      </div>
    </div>
    </>
  );
};

export default AgricultureSection;
