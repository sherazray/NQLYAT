import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[400px] bg-white mt-22 px-6 text-center space-y-6">
      {/* Subheading */}
      <h3 className="text-lg font-bold text-yellow-500 tracking-wide">
        Why Choose Nqlyat Solutions
      </h3>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight">
        Seeking Top-Tier Logistics 
        Transport Services?
      </h1>

      {/* Button */}
      <button className="relative text-lg bg-yellow-400 text-black font-semibold text-capitalize  px-10 py-5 rounded-md transition-colors duration-500 ease-in-out hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white opacity-none">
  Request a Custom Quote
</button>
    </section>
  );
};

export default WhyChooseUs;
