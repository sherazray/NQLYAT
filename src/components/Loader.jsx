import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-600">
      <motion.div
        className="relative w-20 h-20 flex justify-center items-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <div className="absolute w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 border-4 border-white border-t-transparent rounded-full opacity-75"></div>
        <div className="absolute w-20 h-20 border-4 border-white border-t-transparent rounded-full opacity-50"></div>
      </motion.div>
    </div>
  );
};

export default Loader;
