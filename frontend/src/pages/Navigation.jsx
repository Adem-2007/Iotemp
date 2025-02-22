// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { GiEarthAmerica } from 'react-icons/gi';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { FaDollarSign, FaPhone } from 'react-icons/fa';
import logo2 from '../../images/logo2.jpeg'

const Navigation = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-white font-bold text-xl flex items-center space-x-2">
          <Link to="/"><img src={logo2} alt="Logo" className="w-16 h-10"  /></Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white flex items-center space-x-1"> {/* Changed to Link and to="/" */}
            <AiFillHome size={20} />
            <span>Home</span>
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white flex items-center space-x-1"> {/* Changed to Link and to="/about" */}
            <AiFillInfoCircle size={20} />
            <span>About Us</span>
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white flex items-center space-x-1"> {/* Changed to Link and to="/about" */}
            <FaPhone size={20} />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
