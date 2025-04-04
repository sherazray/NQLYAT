import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-[400px] bg-white mt-22 px-6 text-center space-y-6"
    >
      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg font-bold text-yellow-500 tracking-wide"
      >
        Why Choose Nqlyat Solutions
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight"
      >
        Seeking Top-Tier Logistics
        <br className="hidden md:block" />
        Transport Services?
      </motion.h1>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative text-lg bg-yellow-400 text-black font-semibold text-capitalize  px-10 py-5 rounded-md transition-colors duration-500 ease-in-out hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white"
      >
        Request a Custom Quote
      </motion.button>
    </motion.section>
  );
};

export default WhyChooseUs;
