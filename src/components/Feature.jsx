import React from "react";

const Feature = ({ icon, text }) => {
  return (
    <div className="group flex items-center gap-4 text-gray-900 transition duration-300">
      {/* Icon Wrapper with Beige Background, changes to Yellow on Hover */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FAF6F2] transition duration-300 group-hover:bg-yellow-300 group-hover:text-black">
        <span className="text-2xl text-red-500 transition duration-300 group-hover:text-black">
          {icon}
        </span>
      </div>

      {/* Text remains unchanged */}
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
};

export default Feature;
