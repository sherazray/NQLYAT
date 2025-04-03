import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track previous scroll position
  const [showNavbar, setShowNavbar] = useState(true); // To toggle navbar visibility

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up or at top
      }

      setLastScrollY(currentScrollY); // Update last scroll position

      // Change navbar background when scrolled
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full px-12 py-4 flex items-center justify-between transition-all duration-300 z-50 ${
        isScrolled ? "bg-[#2C3E50] shadow-lg" : "bg-[#2C3E50]"
      } ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-2" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 font-semibold text-[#aaaab3]">
        {["Home", "Pricing"].map((item) => (
          <li key={item} className="relative group">
            <a href="#" className="hover:text-white transition">
              {item}
            </a>
          </li>
        ))}

        {/* Dropdown for Solution */}
        <li className="relative group ">
          <a href="#" className="hover:text-white transition">
            Solution
          </a>
          {/* Dropdown Menu */}
          <div className="absolute left-0 w-40 font-normal mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-200">
            <ul>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-red-600"
                >
                  Plan 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-red-600"
                >
                  Plan 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-red-600"
                >
                  Plan 3
                </a>
              </li>
            </ul>
          </div>
        </li>

        {/* Dropdown for About Us */}
        <li className="relative group">
          <a href="#" className="hover:text-white transition">
            About Us
          </a>
          {/* Dropdown Menu */}
          <div className="absolute left-0 w-40 font-normal mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-200">
            <ul>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-red-600"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-red-600"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:text-red-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </li>

        {["Services", "🌍int", "🈂️en"].map((item) => (
          <li key={item} className="relative group">
            <a href="#" className="hover:text-white transition">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <button className="bg-white text-black px-4 py-1 rounded-md">
          Login
        </button>
        <button className="bg-red-600 text-white px-4 py-1 rounded-md">
          SignUp
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
