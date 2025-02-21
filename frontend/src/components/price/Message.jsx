// Message.js
import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md shadow-lg z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      Form Submitted Successfully! 🎉
    </motion.div>
  );
};

export default Message;