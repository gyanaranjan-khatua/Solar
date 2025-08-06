import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy FAQ data
const faqData = [
  {
    id: 1,
    question: 'How much can I save by switching to solar energy?',
    answer: 'The savings from switching to solar energy can vary significantly based on your current electricity consumption, local utility rates, solar panel system size, and available incentives. On average, homeowners can save anywhere from 50% to 100% on their monthly electricity bills. Many even see a positive return on investment within 5-10 years, with the system continuing to generate free electricity for decades.',
  },
  {
    id: 2,
    question: 'What is the lifespan of a typical solar panel system?',
    answer: 'Modern solar panels are incredibly durable and designed to last. Most manufacturers offer performance warranties of 25 to 30 years, guaranteeing that the panels will produce at least 80% of their original power rating by the end of the warranty period. The inverters and other components typically have shorter warranties (5-15 years) but are also built for longevity.',
  },
  {
    id: 3,
    question: 'Is my roof suitable for solar panel installation?',
    answer: 'Most roofs are suitable for solar, but key factors include roof size, angle, and sun exposure. Ideally, your roof should have ample unshaded space, especially facing south (in the Northern Hemisphere). We conduct a comprehensive site assessment to determine your roof\'s suitability and recommend the optimal system design.',
  },
  {
    id: 4,
    question: 'What happens if there is a power outage?',
    answer: 'Without a battery storage system, your grid-tied solar panels will automatically shut down during a power outage for safety reasons (to prevent back-feeding electricity into the grid and endangering utility workers). If you have a solar battery storage system, your home can continue to draw power from the stored energy during an outage, providing backup power for essential appliances.',
  },
  {
    id: 5,
    question: 'What kind of maintenance do solar panels require?',
    answer: 'Solar panels require very little maintenance. Rain often helps to keep them clean. However, occasional cleaning (once or twice a year) to remove dust, leaves, or debris can help maintain optimal efficiency. We also recommend periodic professional inspections to ensure all components are functioning correctly.',
  },
  {
    id: 6,
    question: 'Are there any government incentives or tax credits for solar?',
    answer: 'Yes, there are often federal, state, and local incentives available, which can significantly reduce the upfront cost of solar. The most common is the federal solar tax credit (Investment Tax Credit - ITC), which allows you to deduct a percentage of the cost of your solar system from your federal taxes. Many states also offer their own rebates, tax exemptions, or SRECs (Solar Renewable Energy Credits). We can help you navigate these options.',
  },
];

const FaqPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

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

  // Animation variants for FAQ items
  const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Animation variants for accordion content
  const accordionContentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
  <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-inter text-gray-800">
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16 sm:mb-20 relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-white shadow-2xl border border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-emerald-100 opacity-50 rounded-3xl"></div>
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight relative z-10"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative z-10"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          Find quick answers to the most common questions about solar energy, installations, savings, and our services at SolarCo.
        </motion.p>
      </div>

      {/* FAQ Section */}
      <div className="mb-16 sm:mb-20 bg-white px-4 sm:px-8 py-6 sm:py-8 rounded-3xl shadow-2xl border-t-4 border-blue-600">
        <motion.h2
          className="text-2xl sm:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-12 relative pb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Your Solar Questions Answered
          <span className="block w-20 sm:w-24 h-1 bg-emerald-600 mx-auto mt-2 rounded-full"></span>
        </motion.h2>

        <div className="space-y-4 sm:space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-gray-50 rounded-xl shadow-md border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={faqItemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-4 sm:p-6 text-left text-base sm:text-xl font-semibold text-gray-900 hover:bg-blue-50 transition-colors duration-200 focus:outline-none"
                onClick={() => toggleQuestion(faq.id)}
                aria-expanded={openQuestion === faq.id}
              >
                <span className="flex-1 pr-4">{faq.question}</span>
                <motion.svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </motion.svg>
              </button>
              <AnimatePresence>
                {openQuestion === faq.id && (
                  <motion.div
                    className="px-4 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={accordionContentVariants}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-emerald-300 text-white py-16 sm:py-20 px-6 sm:px-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]"></div>
        <motion.h2
          className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Still Have Questions?
        </motion.h2>
        <motion.p
          className="text-base sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          Our team of solar experts is here to provide personalized answers and guidance. Don’t hesitate to reach out!
        </motion.p>
        <motion.a
          href="#"
          className="inline-flex items-center px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg font-bold rounded-full shadow-lg text-blue-800 bg-white hover:bg-blue-50 transition-all duration-300 relative z-10"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Our Experts
          <svg className="ml-3 -mr-1 h-5 w-5 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.a>
      </div>
    </div>
  </div>
);

};

export default FaqPage;
