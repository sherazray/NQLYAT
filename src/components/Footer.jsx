import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Visa from "../assets/visa-logo.jpg";
import mastercard from "../assets/Mastercard-logo.png";
import gpay from "../assets/gpay.png";
import mada from "../assets/mada-logo.webp";
import stcpay from "../assets/Stc_pay-1.png";
import logo from "../assets/logo.png";


const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Footer Section */}
      <footer className="bg-[#232331] h-[500px] text-white py-12 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
 {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 mr-2" />
      </div>            <p className="mt-4 text-[#9898a0]">
              Join over 150+ satisfied owner-operators who trust our load board
              to find and book loads.
            </p>
            <div className="mt-4 space-y-2 text-[#9898a0] ">
              <p className="flex items-center space-x-2 cursor-pointer ">
                <FaPhone className="text-red-500 " />{" "}
                <span>+966 54 615 7307 (Local)</span>
              </p>
              <p className="flex items-center space-x-2 cursor-pointer">
                <FaPhone className="text-red-500 " />{" "}
                <span>+18188779546 (International)</span>
              </p>
              <p className="flex items-center space-x-2 cursor-pointer">
                <FaWhatsapp className="text-red-500 " /> <span>Whatsapp</span>
              </p>
              <p className="flex items-center space-x-2 cursor-pointer">
                <FaEnvelope className="text-red-500 " />{" "}
                <span>support@nqlyat.com</span>
              </p>
              <p className="flex items-center space-x-2 cursor-pointer">
                <FaMapMarkerAlt className="text-red-500 " />{" "}
                <span>King Saud Rd, Abhur, Jeddah Saudi Arabia</span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold">Our Navigation</h3>
            <ul className="mt-4 space-y-2 text-[#9898a0] cursor-pointer">
              <li>About</li>
              <li>Meet the Team</li>
              <li>News & Media</li>
              <li>Our Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Subscription & Social Media */}
          <div>
            <h3 className="text-lg font-semibold">SUBSCRIBE</h3>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 w-full bg-gray-800 border border-gray-700 text-white"
              />
              <button className="bg-red-500 px-4 py-2">SUBSCRIBE</button>
            </div>
            <p className="mt-4 text-[#9898a0]">
              Our expertise, as well as our passion for web design, sets us
              agencies.
            </p>
            <div className="mt-4 flex space-x-4">
              <FaFacebookF className="text-gray-200 hover:text-white cursor-pointer" />
              <FaInstagram className="text-gray-200 hover:text-white cursor-pointer" />
              <FaLinkedinIn className="text-gray-200 hover:text-white cursor-pointer" />
              <FaTwitter className="text-gray-200 hover:text-white cursor-pointer" />
            </div>
          </div>
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
      </footer>
      {/* Bottom Section with Copyright & Payments */}
      <div className="bg-[#1d1d29] text-white py-4 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between relative">
        <p className="text-gray-400">&copy; 2023 All Rights Reserved.</p>
        <div className="flex space-x-6 my-6 md:my-0 bg-white p-1">
  <img
    src={Visa}
    alt="Visa"
    className="h-10 w-auto mt-1 object-contain"
  />
  <img
    src={mastercard}
    alt="Mastercard"
    className="h-10 w-auto object-contain"
  />
  <img
    src={gpay}
    alt="Google Pay"
    className="h-14 w-auto object-contain"
  />
  <img
    src={mada}
    alt="Mada"
    className="h-14 w-auto object-contain"
  />
  <img
    src={stcpay}
    alt="STC Pay"
    className="h-6 w-auto mt-3 object-contain"
  />
</div>


        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
