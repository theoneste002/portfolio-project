import React, { useState } from "react";
import pick from "../assets/pick.jpeg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="home" className="bg-green-300 z-10">
      <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <img src={pick} alt="Theoneste Logo" className="h-12 w-auto rounded-2xl" />

          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-yellow-400 focus:outline-none transition duration-300"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-blue-900 md:static md:flex md:space-x-6 md:bg-transparent md:w-auto md:items-center`}
          >
            <li>
              <a
                href="#home"
                className="block px-4 py-2 md:py-0 hover:text-yellow-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-4 py-2 md:py-0 hover:text-yellow-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block px-4 py-2 md:py-0 hover:text-yellow-400 transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 md:py-0 hover:text-yellow-400 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#hero"
                className="block px-4 py-2 md:py-0 hover:text-yellow-400 transition duration-300"
              >
                Hero
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;





