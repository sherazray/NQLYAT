import React from "react";
import { FaBox, FaGlobe, FaShippingFast, FaHeadset, FaClock } from "react-icons/fa";
import Feature from "./Feature";

const ContactUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center justify-center bg-white px-12 md:px-6 py-12 gap-12 mt-16">
      {/* Left Section - Text & Features */}
      <div className="md:w-1/2 mb-55  flex flex-col justify-center ">
        <h3 className="text-red-700 font-bold captilized tracking-wide">
          Your Partner in Logistics Excellence <span className="font-semibold text-black text-4xl ">__</span>
        </h3>
        <h1 className="text-5xl font-bold text-gray-900 mt-5 leading-tight">
          Creating Opportunities to Reach New Heights
        </h1>
        <p className="text-gray-500 mt-6 mb-6">
          Nqliyat Solutions: Your Partner in Supply Chain Excellence
        </p>

        {/* Features Section - Aligned with the Form */}
        <div className="grid grid-cols-1 text-3xl font-bolder md:grid-cols-2 gap-8  mt-6 hover:text-yellow ">
          <Feature icon={<FaBox />} text="Safe & Reliable  Cargo Solutions" />
          <Feature icon={<FaGlobe />} text="Global Tracking System" />
          <Feature icon={<FaShippingFast />} text="Worldwide Shipping Services" />
          <Feature icon={<FaHeadset />} text="24/7 Customer Support" />
          <Feature icon={<FaClock />} text="On-Time Delivery Guarantee" />
        </div>
      </div>

      {/* Right Section - Quote Form */}
      <div className="md:w-1/2 bg-[#FAF6F2] p-10 mb-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900">
          Get a Competitive Quote
        </h2>

        <form className="mt-6 flex flex-col gap-y-6">
          <input type="text" placeholder="Pickup Location" className="input-field" />
          <input type="text" placeholder="Delivery Location" className="input-field" />

          <div className="grid grid-cols-2 gap-6">
            <input type="date" className="input-field" />
            <input type="number" placeholder="Weight (Tons)" className="input-field" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <select className="input-field">
              <option>Flatbed</option>
              <option>Reefer</option>
              <option>Dry Van</option>
            </select>
            <input type="text" placeholder="Load Category" className="input-field" />
          </div>

          <input type="tel" placeholder="Contact Number" className="input-field" />
          <input type="email" placeholder="Email Address" className="input-field" />

          <button className="w-1/2 relative bg-red-600 text-white font-bold text-captilized px-3 py-3 rounded-md transition-colors duration-500 ease-in-out hover:bg-yellow-400 hover:text-black active:bg-red-600 active:text-white ">
            REQUEST YOUR QUOTE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
