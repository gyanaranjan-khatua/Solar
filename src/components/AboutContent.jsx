import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  // Animation variants for section titles
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Animation variants for content blocks
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  // Animation variants for image entrance
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  // Animation variants for individual team cards
  const teamCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' },
  };

  // Dummy team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Elena Petrova',
      title: 'CEO & Founder',
      image: 'https://placehold.co/300x300/4CAF50/FFFFFF?text=Elena', // Greenish tone
      bio: 'With over 20 years in renewable energy, Elena envisioned a world powered by clean, accessible solar. Her leadership drives our innovation.',
    },
    {
      id: 2,
      name: 'Marcus Chen',
      title: 'Chief Technology Officer',
      image: 'https://placehold.co/300x300/2196F3/FFFFFF?text=Marcus', // Bluish tone
      bio: 'Marcus is the engineering genius behind our high-efficiency solar solutions, constantly pushing the boundaries of what\'s possible in solar tech.',
    },
    {
      id: 3,
      name: 'Sarah Williams',
      title: 'Head of Customer Relations',
      image: 'https://placehold.co/300x300/FFC107/FFFFFF?text=Sarah', // Yellowish tone
      bio: 'Sarah ensures every client experience is seamless and satisfying, building lasting relationships through her dedication and expertise.',
    },
    {
      id: 4,
      name: 'David Lee',
      title: 'Lead Installation Manager',
      image: 'https://placehold.co/300x300/9C27B0/FFFFFF?text=David', // Purplish tone
      bio: 'David leads our expert installation teams, guaranteeing precision, safety, and optimal performance for every solar system we deploy.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section: Mission & Vision */}
        <div className="text-center mb-20 relative overflow-hidden rounded-3xl p-10 bg-white shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-50 rounded-3xl"></div>
          <motion.h1
            className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight relative z-10"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            Illuminating Tomorrow with <span className="text-blue-600">Solar Power</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative z-10"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            At **SolarCo**, we are dedicated to fostering a sustainable world powered by clean, abundant solar energy. Our mission is to make solar accessible, efficient, and reliable for every home and business, driving a brighter, greener future. We believe in harnessing the sun's power to create a positive impact on both the environment and your wallet.
          </motion.p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20 bg-white p-8 rounded-3xl shadow-xl">
          <motion.div
            className="order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Our Journey, Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Founded in <span className="font-semibold text-blue-600">20XX</span> by a team of passionate environmentalists and visionary engineers, SolarCo began with a simple yet profound idea: to revolutionize energy consumption through innovative solar solutions. What started as a modest startup has blossomed into a leading provider of cutting-edge renewable energy systems, relentlessly driven by an unwavering commitment to unparalleled quality and supreme customer satisfaction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the years, we've proudly installed thousands of high-performance solar panels, empowering countless clients to significantly reduce their carbon footprint and achieve substantial energy savings. Our remarkable journey stands as a powerful testament to the transformative power of sustainable technology and the boundless dedication of our exceptional team. We've consistently adapted to industry advancements, ensuring our clients always receive the most efficient and reliable solar solutions available.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              From initial consultation to installation and ongoing support, we're with you every step of the way. Our success is built on trust, transparency, and a shared vision for a greener planet.
            </p>
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <img
              src="https://placehold.co/600x400/28A745/FFFFFF?text=SolarCo+History" // A more vibrant green
              alt="Our Story"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transform hover:scale-102 transition-transform duration-300"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Not+Found'; }}
            />
          </motion.div>
        </div>

        {/* Why Choose Us Section (New Premium Section) */}
        <div className="mb-20 bg-white p-8 rounded-3xl shadow-xl">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-12 relative pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            Why Choose SolarCo?
            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-emerald-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
              transition={{ delay: 0.1 }}
            >
              <div className="text-emerald-600 text-4xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise & Experience</h3>
                <p className="text-gray-700 text-base">
                  Benefit from our deep industry knowledge and years of successful solar installations, ensuring top-tier service.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-blue-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="text-blue-600 text-4xl flex-shrink-0">⚙️</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-700 text-base">
                  We utilize only the latest and most efficient solar panels and equipment, maximizing your energy production.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-yellow-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
              transition={{ delay: 0.3 }}
            >
              <div className="text-yellow-600 text-4xl flex-shrink-0">💰</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Savings & ROI</h3>
                <p className="text-gray-700 text-base">
                  Our solutions are designed to significantly reduce your electricity bills and provide excellent long-term return on investment.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-purple-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
              transition={{ delay: 0.4 }}
            >
              <div className="text-purple-600 text-4xl flex-shrink-0">🌟</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Unmatched Customer Support</h3>
                <p className="text-gray-700 text-base">
                  From consultation to post-installation, our dedicated team provides personalized and responsive support.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-red-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
              transition={{ delay: 0.5 }}
            >
              <div className="text-red-600 text-4xl flex-shrink-0">🌱</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Impact</h3>
                <p className="text-gray-700 text-base">
                  Join us in contributing to a cleaner, greener planet by reducing your carbon footprint with solar energy.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-indigo-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
              transition={{ delay: 0.6 }}
            >
              <div className="text-indigo-600 text-4xl flex-shrink-0">🛡️</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability & Durability</h3>
                <p className="text-gray-700 text-base">
                  Our systems are built to last, offering robust performance and peace of mind for decades to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-12 relative pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            Our Guiding Principles
            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-t-4 border-blue-600 hover:border-emerald-500 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
              transition={{ delay: 0.1 }}
            >
              <div className="text-blue-600 text-6xl mb-4">💡</div> {/* Lightbulb emoji */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                We relentlessly explore new technologies and pioneering methods to deliver the most advanced and highly efficient solar solutions, setting new industry benchmarks.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-t-4 border-emerald-600 hover:border-blue-500 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="text-emerald-600 text-6xl mb-4">🌍</div> {/* Earth emoji */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-700 leading-relaxed">
                Our unwavering core commitment is to safeguard our planet by vigorously promoting clean energy and significantly reducing global carbon emissions for a healthier future.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-t-4 border-yellow-600 hover:border-blue-500 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
              transition={{ delay: 0.3 }}
            >
              <div className="text-yellow-600 text-6xl mb-4">🤝</div> {/* Handshake emoji */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                We profoundly prioritize our clients' unique needs, providing unparalleled personalized service and exceptional support at every stage of their solar journey.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-20">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-12 relative pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            Meet Our Visionary Team
            <span className="block w-24 h-1 bg-emerald-600 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 border border-gray-200"
                variants={teamCardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-md transition-transform duration-300 hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/CCCCCC/000000?text=Profile'; }}
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
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
            Join the growing number of homes and businesses that have chosen SolarCo for their energy needs. Contact us today for a comprehensive, no-obligation consultation! Let's power your future together.
          </motion.p>
          <motion.a
            href="#"
            className="inline-flex items-center px-10 py-5 border border-transparent text-lg font-bold rounded-full shadow-lg text-blue-800 bg-white hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-white transition-all duration-300 relative z-10"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Solar Quote
            <svg className="ml-3 -mr-1 h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
