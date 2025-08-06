import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Phone, Mail, User, LogIn, Headset } from 'lucide-react'; // Added Headset icon

function Topnavbar() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-sm md:text-base py-3 px-4 sm:px-6 lg:px-12 shadow-lg">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
        
        {/* Left Section: 24/7 Support & Special Offer */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
          {/* New: 24/7 Support */}
          <span className="flex items-center space-x-2 text-blue-200 animate-pulse-fast">
            <Headset size={16} className="text-white" />
            <span className="font-semibold">24/7 Expert Support</span>
          </span>

          <span className="hidden sm:inline-block h-4 w-px bg-white/20"></span> {/* Divider */}
          
       
          <a 
            href="#" 
            className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full text-white text-xs sm:text-sm font-semibold 
                       hover:from-green-500 hover:to-teal-600 transition-all duration-300 shadow-md group animate-pop-in"
          >
            <span>✨ Where Every Journey Begins — Aquilo World Tour LLP!</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Right Section: Contact & Auth Links */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2 text-xs sm:text-sm">
          {/* Phone */}
          <a 
            href="tel:+919668504726" 
            className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200"
          >
            <Phone size={16} className="text-blue-300" /> 
            <span>+91 9668504726</span>
          </a>
          
          {/* Email */}
          <a 
            href="mailto:aqualoworldtour@gmail.com" 
            className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200"
          >
            <Mail size={16} className="text-blue-300" />
            <span>aqualoworldtour@gmail.com</span>
          </a>

          {/* Social Icons (hidden on small screens, appear on larger) */}
          <div className="hidden md:flex gap-4 ml-2">
            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200" aria-label="WhatsApp">
              <FaWhatsapp size={16} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200" aria-label="Gmail">
              <SiGmail size={16} />
            </a>
          </div>

          <span className="hidden lg:inline-block h-4 w-px bg-white/20 ml-2"></span> {/* Divider for auth links */}

          {/* Auth Links */}
         
        </div>
      </div>
    </div>
  );
}

export default Topnavbar;