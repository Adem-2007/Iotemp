import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const AboutUsSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "High Precision",
      description: "Our sensors provide accuracy within ±0.1% for all environmental measurements, ensuring you get the most reliable data."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-time Updates",
      description: "Data refreshes every 5 seconds, providing you with the most current environmental conditions around the clock."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Historical Analytics",
      description: "Access trend data going back up to 12 months to analyze patterns and make informed environmental decisions."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cost-Effective Solution",
      description: "Get enterprise-level environmental monitoring at a significantly lower cost than traditional systems, maximizing your ROI."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Reliable Support",
      description: "We stand by you. Our dedicated support team is always ready to assist, ensuring you're never alone, even when challenges arise."
    },
    {
      icon: (
        <FaMapMarkerAlt className="w-10 h-10 text-blue-400" /> // Replaced img with FaMapMarkerAlt icon
      ),
      title: "Nationwide Coverage",
      description: "We operate and provide our services in all parts of Algeria.",
    },
  ];
  return (
    <motion.section // Changed section to motion.section
      className="py-24 "
      initial={{ opacity: 0 }} // Initial opacity is 0
      whileInView={{ opacity: 1 }} // Animate to opacity 1 when in view
      transition={{ duration: 0.1 }} // Animation duration
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="bg-gray-800 text-blue-400 px-4 py-1  rounded-full text-[40px] font-medium tracking-wider mb-4"> {/* Increased text size to text-[40px] */}
            WHY CHOOSE US
          </span>
          <p className="text-gray-300 text-lg leading-relaxed mt-4 mx-auto max-w-2xl"> {/* Added paragraph with styling */}
            Our environmental monitoring solution provides real-time, precise data, ensuring the safety and integrity of sensitive materials with complete regulatory compliance and at a lower cost.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div // Optional: Animate each feature box individually
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-blue-500/5 group"
              initial={{ opacity: 0, y: 50 }} // Initial opacity and y position for each feature box
              whileInView={{ opacity: 1, y: 0 }} // Animate to opacity 1 and y 0 when in view
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation for each feature box
            >
              <div className="mb-5 p-3 bg-gray-900/60 rounded-lg w-fit group-hover:bg-blue-900/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;