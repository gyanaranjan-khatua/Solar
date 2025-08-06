"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Import images from assets
import service1 from '../assets/id1.jpg';
import service2 from '../assets/id2.jpg';
import service3 from '../assets/img.jpg';
import service4 from '../assets/in11.jpg';
import service5 from '../assets/in13.jpg';
import service6 from '../assets/in15.jpg';
import bgImage from '../assets/bg.png'; // Background image

const services = [
  {
    image: service1,
    title: "Installation of Panels",
    description: "Professional solar panel installation ensuring maximum efficiency, safety, and long-term energy performance for your property.",
  },
  {
    image: service2,
    title: "Annual Maintenance",
    description: "Ensure peak performance year-round with our reliable, expert annual maintenance services for your solar energy system.",
  },
  {
    image: service3,
    title: "Cruise Vacations",
    description: "Sail across oceans on premium cruise lines with curated experiences.",
  },
  {
    image: service4,
    title: "VIP Event Access",
    description: "Front-row seats to world events, concerts, and exclusive galas.",
  },
  {
    image: service5,
    title: "Personal Concierge",
    description: "24/7 support to ensure your journey is smooth, luxurious, and personal.",
  },
  {
    image: service6,
    title: "Exotic Car Rentals",
    description: "Drive premium sports cars and luxury sedans wherever you go.",
  },
];

export default function Service() {
  return (
    <div
      className="relative py-16 px-4 sm:px-8 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight">Our Premium Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              transitionSpeed={700}
              glareEnable={false}
              className="rounded-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden"
              >
                {/* Glowing Border */}
                

                {/* Card Content */}
                <div className="relative z-10 hover:bg-green-600 bg-black/40 backdrop-blur-lg  rounded-xl shadow-lg shadow-zinc-800/30 hover:shadow-xl hover:shadow-zinc-700/40">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover rounded-t-2xl"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-white text-base">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}
