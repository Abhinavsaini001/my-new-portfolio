import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-opacity-30 backdrop-blur-md bg-[#292b2e] fixed w-full z-10">
      <div className="flex w-full text-white p-2 md:p-4 justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-[#FF014F]">Abhi</div>

        {/* Desktop Navigation */}
        <ul className="gap-4 hidden md:flex font-semibold cursor-pointer">
          <li className="m-2 hover:text-[#FF014F] transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="m-2 hover:text-[#FF014F] transition duration-300">
            <a href="#about">About</a>
          </li>
          <li className="m-2 hover:text-[#FF014F] transition duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="m-2 hover:text-[#FF014F] transition duration-300">
            <a href="#skills">Skills</a>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div
          className="hidden md:block hover:bg-[#1F2226] px-3 shadow-lg bg-opacity-50 backdrop-blur-lg 
                     bg-[#292b2e] text-white font-bold pt-2 cursor-pointer rounded-xl transition duration-300"
        >
          Contact Us
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={handleMenuToggle} className="md:hidden cursor-pointer text-4xl font-semibold">
          &#8801;
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-opacity-50 backdrop-blur-lg bg-[#1F2226] md:hidden text-white p-4 transition-all">
          <ul className="font-semibold space-y-2 cursor-pointer">
            <li className="p-2 border-b border-gray-700">
              <a href="#home">Home</a>
            </li>
            <li className="p-2 border-b border-gray-700">
              <a href="#about">About</a>
            </li>
            <li className="p-2 border-b border-gray-700">
              <a href="#skills">Skills</a>
            </li>
            <li className="p-2 border-b border-gray-700">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
