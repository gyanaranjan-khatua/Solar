"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import logo from "../assets/awt.png"; // Replace with your logo

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between ">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            {/* <img src={logo} alt="Logo" className="h-18 w-25" /> */}
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 font-bold text-black tracking-wider relative">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>

          {/* Tour Dropdown */}
         

          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-blue-600">Blogs</Link></li>
      
          <li><Link to="/faq" className="hover:text-blue-600">Faq</Link></li>
        </ul>

        {/* Right: Button & Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          <Link to="/book">
            <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-sm hover:bg-blue-700 transition hidden md:inline-block">
              Book Now
            </button>
          </Link>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white pl-5 h-screen flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center mb-6 pr-5">
              <img src={logo} alt="Logo" className="h-15 w-auto" />
              <button onClick={() => setMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col bg-white p-5 gap-6 text-lg text-gray-700 font-medium">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>

              {/* Mobile Tour Dropdown */}
              <li>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  Destinations<ChevronDown className={`ml-2 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      <li>
                        <Link
                          to="/internationalTour"
                          className="block"
                          onClick={() => setMenuOpen(false)}
                        >
                          International 
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/nationalTour"
                          className="block"
                          onClick={() => setMenuOpen(false)}
                        >
                          National 
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
              <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
              <li><Link to="/faq" onClick={() => setMenuOpen(false)}>Faq</Link></li>
              <li>
                <Link to="/book">
                  <button
                    className="mt-6 bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    Book Now
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
