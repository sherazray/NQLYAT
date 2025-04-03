import React from "react";
import { FaPlane, FaTruck, FaShip } from "react-icons/fa"; // Importing icons
import train from "../assets/services-tran.png";
import airplane from "../assets/footer-left-trns.png";

const Features = () => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center">
      <div className="relative bg-white h-[500px] mt-5 px-4 sm:px-10 overflow-hidden">
        {/* Background Images */}
        <img
          src={train}
          alt="Train"
          className="absolute bottom-0 right-0 w-1/2 max-w-[500px] h-auto opacity-10 pointer-events-none"
        />
        <img
          src={airplane}
          alt="Airplane"
          className="absolute top-10 left-0 w-1/4 max-w-[300px] opacity-10 pointer-events-none"
        />

        {/* Section Heading */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {" "}
          <div className="text-left mb-10">
            <h4 className="text-red-600 font-bold text-lg">
              Our Premier Features
            </h4>
            <h2 className="text-5xl font-bold text-gray-900 mt-2">
              Secure & <br /> Dependable <br /> Cargo Solutions
            </h2>
          </div>
          {/* Features Grid */}
          {/* Card 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-100 relative z-20 group hover:bg-gray-900 hover:text-white transition duration-300 flex items-start gap-4 h-[150px] overflow-hidden">
            {/* Background Image on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-[url('/path-to-image.jpg')] bg-cover bg-center"></div>

            {/* Left Column - Icons and Number */}
            <div className="flex flex-col items-center z-10">
              <FaPlane className="text-red-600 text-3xl group-hover:text-white transition" />
              <span className="flex flex-col justify-center text-gray-300 text-5xl font-bold opacity-20 group-hover:opacity-60 transition">
                01
              </span>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex-1 z-10">
              <h3 className="text-2xl font-bold">Vendor Partnerships</h3>
              <p className="text-gray-600 group-hover:text-gray-200 transition mt-1">
                Discover Truckloads & Freight via Our Digital Platforms
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-100 relative z-20 group hover:bg-gray-900 hover:text-white transition duration-300 flex items-start gap-4 h-[180px] overflow-hidden">
            {/* Background Image on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-[url('/path-to-image.jpg')] bg-cover bg-center"></div>

            {/* Left Column - Icons and Number */}
            <div className="flex flex-col items-center z-10">
              <FaShip className="text-red-600 text-3xl group-hover:text-white transition" />
              <span className="text-gray-300 text-5xl font-bold opacity-20 group-hover:opacity-60 transition">
                02
              </span>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex-1 z-10">
              <h3 className="text-2xl font-bold">Brokerage Excellence</h3>
              <p className="text-gray-600 group-hover:text-gray-200 transition mt-1">
                Secure High-Paying Loads for <br /> Profitable Journeys{" "}
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-100 relative z-20 group hover:bg-gray-900 hover:text-white transition duration-300 flex items-start gap-4 h-[150px] overflow-hidden">
            {/* Background Image on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-[url('/path-to-image.jpg')] bg-cover bg-center"></div>

            {/* Left Column - Icons and Number */}
            <div className="flex flex-col items-center z-10">
              <FaTruck className="text-red-600 text-3xl group-hover:text-white transition" />
              <span className="text-gray-300 text-5xl font-bold opacity-20 group-hover:opacity-60 transition">
                03
              </span>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex-1 z-10">
              <h3 className="text-2xl font-bold">Shipper Services</h3>
              <p className="text-gray-600 group-hover:text-gray-200 transition mt-1">
                Efficient Load Routing with Precise Mileage & Costs{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
