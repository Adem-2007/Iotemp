import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, FaSpinner } from 'react-icons/fa'; // Import FaSpinner
import InputField from '../components/price/InputField'; // Assuming InputField is correctly placed
import Message from '../components/price/Message'; // Import the Message component

const UserInfoForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

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

  const handleSubmit = async (event) => { // Make handleSubmit async
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
      setIsSubmitting(true); // Start loading

      try {
        const response = await fetch('http://localhost:5000/api/user-info', { // Backend endpoint for user info
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firstName, lastName, email, number, address }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 2000);
          // Clear form fields on success
          setFirstName('');
          setLastName('');
          setEmail('');
          setNumber('');
          setAddress('');
        } else {
          const errorData = await response.json(); // Or response.text() if backend sends plain text
          console.error('Submission error:', errorData);
          alert(`Submission failed: ${errorData.message || 'Something went wrong.'}`); // Simple error alert
        }
      } catch (error) {
        console.error('Fetch error:', error);
        alert('Fetch error occurred. Please try again.'); // Simple fetch error alert
      } finally {
        setIsSubmitting(false); // End loading regardless of success or failure
      }
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
          error={firstNameError}
          disabled={isSubmitting} // Disable input while submitting
        />
        <InputField
          label="Last Name"
          type="text"
          placeholder="Doe"
          name="lastName"
          Icon={FaUser}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={lastNameError}
          disabled={isSubmitting} // Disable input while submitting
        />
        <InputField
          label="Email Address"
          type="email"
          placeholder="john.doe@example.com"
          name="email"
          Icon={FaEnvelope}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          disabled={isSubmitting} // Disable input while submitting
        />
        <InputField
          label="Phone Number"
          type="tel"
          placeholder="+1-555-123-4567"
          name="number"
          Icon={FaPhone}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          error={numberError}
          disabled={isSubmitting} // Disable input while submitting
        />
        <InputField
          label="Address"
          type="text"
          placeholder="123 Main Street"
          name="address"
          Icon={FaMapMarkerAlt}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          error={addressError}
          disabled={isSubmitting} // Disable input while submitting
        />

        <div className="flex items-center justify-between">
          <motion.button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-wait"
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <FaSpinner className="animate-spin mr-2" /> {/* Spinner Icon */}
                Submitting...
              </div>
            ) : (
              'Submit ✅'
            )}
          </motion.button>
        </div>
      </motion.form>
      {isSubmitted && <Message />} {/* Conditionally render Message component */}
    </motion.div>
  );
};

UserInfoForm.propTypes = {};

export default UserInfoForm;