// InputField.js (or wherever you have this component)
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const InputField = ({ label, type, placeholder, name, Icon, value, onChange, error }) => {
  return (
    <motion.div className="mb-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <label htmlFor={name} className="block text-gray-300 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="text-gray-400" />
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500 ring-red-500' : 'border-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-shadow duration-200'} ${Icon ? 'pl-10' : ''} bg-gray-700 text-white`}
        />
      </div>
      {error && <p className="text-red-500 text-xs italic mt-1">Required</p>}
    </motion.div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool, // New error prop
};

export default InputField;