import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import truck1 from "../assets/slider-img.webp";
import truck2 from "../assets/slider-img-2.webp";
import truck3 from "../assets/slider-img-3.webp";

const slides = [
  {
    image: truck1,
    text: "Efficient Freight Matching with Nqlyat Loadboard",
  },
  {
    image: truck2,
    text: "Seamless Logistics Solutions for Your Business",
  },
  {
    image: truck3,
    text: "Smart Transportation and Load Optimization",
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mt-16 w-full h-[650px] overflow-hidden ">
      {/* Slide Images */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 "
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      ></div>

      <div className="absolute top-0 left-0 w-[35%] h-full bg-[#232331] "></div>

      {/* Social Media Links */}
      <div className="absolute top-1/3 left-14 space-y-4 text-[#3A3A4A]">
        <a href="#" className="block p-2 border border-[#3A3A4A] hover:bg-red-700 hover:text-white rounded">
          {" "}
          <Facebook />
        </a>
        <a href="#" className="block p-2 border border-[#3A3A4A] hover:bg-red-700  hover:text-white rounded">
          <Twitter />
        </a>
        <a href="#" className="block p-2 border border-[#3A3A4A] hover:bg-red-700  hover:text-white rounded">
          <Linkedin />
        </a>
        <a href="#" className="block p-2 border border-[#3A3A4A] hover:bg-red-700 hover:text-white rounded">
          <Instagram />
        </a>
      </div>

      {/* Text Overlay */}
      <div className="absolute top-[8%] left-1/4 w-[550px] h-[550px] bg-[#411f26] text-white transform scale-110 opacity-80 rounded-full shadow-lg flex flex-col items-center justify-center text-center p-6 opacity-none">
        <h1 className="text-6xl justify-center font-bold text-white">
          {slides[currentIndex].text}
        </h1><br />
        <button className="relative bg-red-600 text-white font-bold text-captilized px-8 py-3 rounded-md transition-colors duration-500 ease-in-out hover:bg-yellow-400 hover:text-black active:bg-red-600 active:text-white opacity-none">
  Learn More About the Services
</button>

      </div>

      {/* Slide Navigation */}
      <button
        onClick={prevSlide}
        className="absolute bottom-5 right-24 bg-white p-3 rounded-full shadow-md hover:bg-[#232331] transition-colors duration-300"
      >
        <ChevronLeft
          size={24}
          className="transition-colors duration-300 hover:text-white"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute bottom-5 right-8 bg-white p-3 rounded-full shadow-md hover:bg-[#232331] transition-colors duration-300"
      >
        <ChevronRight
          size={24}
          className="transition-colors duration-300 hover:text-white"
        />
      </button>
      {/* Slide Counter */}
      <div className="absolute bottom-5 left-14 text-7xl font-bold text-[#3A3A4A]">
        0{currentIndex + 1}
      </div>
    </div>
  );
};

export default Carousel;
