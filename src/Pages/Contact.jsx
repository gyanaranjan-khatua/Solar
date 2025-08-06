import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";

const ContactPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State for form submission status
  const [status, setStatus] = useState(""); // 'success', 'error', 'submitting'

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      console.log("Form Data Submitted:", formData);
      setStatus("success");
      setFormData({
        // Clear form after success
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  // Animation variants for section titles
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Animation variants for content blocks
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for form inputs
  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-inter text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section: Contact Us Title */}
        <div className="text-center mb-20 relative overflow-hidden rounded-3xl p-10 bg-white shadow-2xl border border-blue-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-emerald-100 opacity-50 rounded-3xl"></div>
          <motion.h1
            className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight relative z-10"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            Connect With <span className="text-blue-600">SolarCo</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative z-10"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            We're dedicated to empowering your sustainable future. Have
            questions, need a quote, or ready to start your solar journey? Reach
            out to our expert team today!
          </motion.p>
        </div>

        {/* Contact Form & Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-xl border-l-4 border-blue-600 hover:border-emerald-500 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Success/Error Messages */}
              {status === "success" && (
                <motion.p
                  className="mt-4 text-center text-emerald-600 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  className="mt-4 text-center text-red-600 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Failed to send message. Please try again later.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-xl border-l-4 border-emerald-600 hover:border-blue-500 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-4">
              Our Details
            </h2>
            <div className="space-y-8 text-gray-700 text-base">
              {/* Location */}
              <div className="flex items-start gap-4">
                <FiMapPin className="text-emerald-600 text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                  <p>123 Solar Street, Green City, State, 98765</p>
                  <p>Country</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <FiMail className="text-emerald-600 text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p>
                    <a
                      href="mailto:info@solarco.com"
                      // className="text-blue-600 hover:underline"
                    >
                      info@solarco.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:support@solarco.com"
                      // className="text-blue-600 hover:underline"
                    >
                      support@solarco.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <FiPhone className="text-emerald-600 text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p>
                    <a
                      href="tel:+1234567890"
                      // className="text-blue-600 hover:underline"
                    >
                      +1 (234) 567-890
                    </a>{" "}
                    (Sales)
                  </p>
                  <p>
                    <a
                      href="tel:+1987654321"
                      // className="text-blue-600 hover:underline"
                    >
                      +1 (987) 654-321
                    </a>{" "}
                    (Support)
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <FiClock className="text-emerald-600 text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Business Hours
                  </h3>
                  <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM (Appointments only)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mb-20">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-12 relative pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            Find Us on the Map
            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
          >
            {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2201399000004!2d-122.41941568468162!3d37.7749294797593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087e35b0b2b%3A0x4c28b6d8a7c2e3a!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location on Map"
                className="rounded-3xl"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Section (Reused from About Page) */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-emerald-300 text-white py-20 px-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]"></div>
          <motion.h2
            className="text-5xl font-bold mb-6 leading-tight relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            Ready to Embrace Solar Energy?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
          >
            Join the growing number of homes and businesses that have chosen
            SolarCo for their energy needs. Contact us today for a
            comprehensive, no-obligation consultation! Let's power your future
            together.
          </motion.p>
          <motion.a
            href="#"
            className="inline-flex items-center px-10 py-5 border border-transparent text-lg font-bold rounded-full shadow-lg text-blue-800 bg-white hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-white transition-all duration-300 relative z-10"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Solar Quote
            <svg
              className="ml-3 -mr-1 h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
