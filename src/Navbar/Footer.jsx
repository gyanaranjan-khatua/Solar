import React from 'react';
import { motion } from 'framer-motion';

// Ensure you have a way to include Framer Motion in your project,
// e.g., by adding <script src="https://cdn.jsdelivr.net/npm/framer-motion@latest/dist/framer-motion.min.js"></script>
// if you're not using a bundler like Webpack/Vite that handles npm packages.
// For a typical React project, you'd install it via npm or yarn:
// npm install framer-motion
// or
// yarn add framer-motion

const Footer = () => {
  // Animation variants for fade-in effect
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for link hover effect
  const linkHoverVariants = {
    hover: { scale: 1.05, color: '#60A5FA', transition: { duration: 0.2 } }, // Tailwind blue-400
  };

  const socialIconHoverVariants = {
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 shadow-inner"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-bold text-white mb-4 rounded-md">
            SolarCo
            <span className="text-yellow-400 ml-1">⚡</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Empowering a sustainable future with cutting-edge solar energy solutions for homes and businesses.
          </p>
        </div>

        {/* Navigation Links Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 rounded-md">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                Our Services
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                About Us
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                Projects
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </div>

        {/* Products Section (New Column) */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 rounded-md">Products</h4>
          <ul className="space-y-2">
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                Residential Panels
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                Commercial Systems
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                Inverters & Batteries
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                Mounting Hardware
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md"
                variants={linkHoverVariants}
                whileHover="hover"
              >
                Monitoring Solutions
              </motion.a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 rounded-md">Contact Us</h4>
          <address className="not-italic space-y-2 text-sm">
            <p>123 Solar Street, Green City, 98765</p>
            <p>Email: <a href="mailto:info@solarco.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md">info@solarco.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-md">+1 (234) 567-890</a></p>
          </address>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 rounded-md">Follow Us</h4>
          <div className="flex space-x-4">
            {/* These are placeholder icons. In a real app, you'd use actual SVG icons or a library like Font Awesome. */}
            <motion.a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-full p-2 bg-gray-800 hover:bg-gray-700"
              variants={socialIconHoverVariants}
              whileHover="hover"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-full p-2 bg-gray-800 hover:bg-gray-700"
              variants={socialIconHoverVariants}
              whileHover="hover"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.7c-.095 0-.187.007-.275.02v.058a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-full p-2 bg-gray-800 hover:bg-gray-700"
              variants={socialIconHoverVariants}
              whileHover="hover"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500 rounded-md">
        &copy; {new Date().getFullYear()} SolarCo. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
