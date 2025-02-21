import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden flex items-center justify-center">
      {" "}
      {/* Added flex items-center justify-center to section */}
      <div className="container mx-auto px-[120px] w-[1000px] md:px-12 relative z-10  text-center">
        {" "}
        {/* Added text-center to container to center text within */}
        <div className="md:grid-cols-1 items-center">
          {" "}
          {/* Changed to single column grid */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400">
              Protecting Treatments with Precision.
            </h1>

            <p className="text-gray-300 mb-8 leading-relaxed text-lg  mx-auto">
              {" "}
              {/* Added mx-auto to paragraph to center it if needed */}
              We ensure real-time temperature monitoring in medical cold rooms,
              preserving the safety of treatments and biological materials.
              Precise control, instant alerts, and full compliance to prevent
              any spoilage.
            </p>
          </motion.div>
          <Link to="/price">
            <motion.button className="bg-blue-950 p-4 rounded-lg text-white hover:bg-blue-800 duration-200 hover:scale-105 hover:cursor-pointer">command</motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
