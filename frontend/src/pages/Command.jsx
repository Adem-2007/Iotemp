import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard } from 'react-icons/fa';
import InputField from '../components/price/InputField'; // Assuming InputField is correctly placed
import Message from '../components/price/Message'; // Import the Message component

const UserInfoForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // State to store input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  // State to store error status for each field
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors before validation
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setNumberError(false);
    setAddressError(false);

    let isValid = true;

    // Validation checks
    if (!firstName) {
      setFirstNameError(true);
      isValid = false;
    }
    if (!lastName) {
      setLastNameError(true);
      isValid = false;
    }
    if (!email) {
      setEmailError(true);
      isValid = false;
    }
    if (!number) {
      setNumberError(true);
      isValid = false;
    }
    if (!address) {
      setAddressError(true);
      isValid = false;
    }

    if (isValid) {
      // Form submission logic here (e.g., sending data to a server)
      setTimeout(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 2000);
      }, 0);
    }
  };

  return (
    <motion.div
      className=" min-h-screen p-8 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
      >
        <div className="text-center mb-6">
          <motion.h2
            className="text-3xl font-bold text-white mb-2 animate-pulse"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaIdCard className="inline-block mr-2 align-middle" /> User Information 📝
          </motion.h2>
          <p className="text-gray-400">Enter your personal details below 🚀</p>
        </div>

        <InputField
          label="First Name"
          type="text"
          placeholder="John"
          name="firstName"
          Icon={FaUser}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={firstNameError} // Pass error state
        />
        <InputField
          label="Last Name"
          type="text"
          placeholder="Doe"
          name="lastName"
          Icon={FaUser}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={lastNameError} // Pass error state
        />
        <InputField
          label="Email Address"
          type="email"
          placeholder="john.doe@example.com"
          name="email"
          Icon={FaEnvelope}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError} // Pass error state
        />
        <InputField
          label="Phone Number"
          type="tel"
          placeholder="+1-555-123-4567"
          name="number"
          Icon={FaPhone}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          error={numberError} // Pass error state
        />
        <InputField
          label="Address"
          type="text"
          placeholder="123 Main Street"
          name="address"
          Icon={FaMapMarkerAlt}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          error={addressError} // Pass error state
        />

        <div className="flex items-center justify-between">
          <motion.button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:scale-105 transition-transform duration-200"
            type="submit"
            whileTap={{ scale: 0.95 }}
          >
            Submit <span role="img" aria-label="submit">✅</span>
          </motion.button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </motion.form>
      {isSubmitted && <Message />} {/* Conditionally render Message component */}
    </motion.div>
  );
};

UserInfoForm.propTypes = {};

export default UserInfoForm;