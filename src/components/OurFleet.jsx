import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import brand from "../assets/brand-bg.jpg";


const OurFleet = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#232331] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-bold">
            Our Fleet Meets Your Logistics Needs
          </h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center space-x-3">
              <span className="bg-yellow-400 p-2 rounded-full">
                <FaCheckCircle className="text-black text-xl" />
              </span>
              <p>Expert Logistics Advice for Optimal Solutions</p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-yellow-400 p-2 rounded-full">
                <FaCheckCircle className="text-black text-xl" />
              </span>
              <p>Tailored Logistics Strategies for Your Business</p>
            </li>
          </ul>
        </div>
      </div>

   {/* Client Logos */}
   <div className="mt-16 grid grid-cols-1 font-bold md:grid-cols-4 border-gray-700 pt-8 ">
  {["vodafone", "ASP.NET ZERO", "FUJIFILM", "TRUMAN"].map((client, index) => (
    <div
      key={index}
      className="relative group flex justify-center items-center border border-gray-600 w-full h-40 overflow-hidden cursor-pointer"
    >
      {/* Blue Slide Overlay (darker blue, animated left to right) */}
      <div className="absolute inset-0 z-0">
        <div className="w-0 h-full bg-[#0b1a2d] group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]" />
      </div>

      {/* Image (black & white, only fades in after animation) */}
      <img
        src={brand}
        alt={client}
        className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-0 group-hover:opacity-40 transition-opacity duration-700 delay-500 z-0"
      />

      {/* Text */}
      <p className="text-gray-400 text-lg z-10 group-hover:text-white group-hover:scale-105 transition-all duration-300">
        {client}
      </p>
    </div>
  ))}
</div>




      {/* Scroll to Top Button */}
      {showButton && (
        <button
          className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </section>
  );
};

export default OurFleet;
