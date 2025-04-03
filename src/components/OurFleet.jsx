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
      <div className="mt-16 grid grid-cols-1 font-bold md:grid-cols-4 border-gray-700 pt-8">
        {["vodafone", "ASP.NET ZERO", "FUJIFILM", "TRUMAN"].map((client, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center border border-gray-600 w-auto h-62 hover:bg-[#2C3E50] transition group"
          >
            {/* Image initially hidden */}
            <img
              src={brand}  // Use the same image for all clients
              alt={client}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300"
            />

            {/* Text */}
            <p className="text-gray-400 text-lg z-10">{client}</p>
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
