import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon

const ContactUs = ({ backgroundImage }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState(null);
    const [formSuccess, setFormSuccess] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loading

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(null);
        setFormSuccess(null);

        if (!name || !email || !message) {
            setFormError('Please fill in all fields. 😓');
            return;
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
            setFormError('Please enter a valid email address. 😓');
            return;
        }

        setIsSubmitting(true); // Set loading state to true before submission

        try {
            const response = await fetch('http://localhost:5000/api/contact', { // Make sure this matches your backend endpoint path
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setFormSuccess('Message sent successfully! 🎉 We will get back to you soon. 😉');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                const errorData = await response.json();
                setFormError(errorData.message || 'Oops! Something went wrong. Please try again later. 😞');
                console.error('Form submission error:', errorData);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setFormError('Oops! Something went wrong. Please try again later. 😞');
        } finally {
            setIsSubmitting(false); // Set loading state to false after submission (success or error)
        }
    };

    return (
        <motion.div
            className="min-h-screen  text-white flex flex-col items-center justify-center p-6 md:p-10 lg:p-20 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            aria-label="Contact Us Page"
        >
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt="Abstract background"
                    className="w-full h-full object-cover opacity-20"
                    aria-hidden="true"
                />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-5xl bg-gray-800 bg-opacity-95 shadow-lg rounded-xl overflow-hidden">
                <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-indigo-500 animate-pulse"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Let's Get in Touch! 🤝
                    </motion.h2>
                    <motion.p
                        className="text-gray-300 mb-6 md:mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
                    </motion.p>

                    {formSuccess && (
                        <motion.div
                            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <p className="font-bold">Success</p>
                            <p>{formSuccess}</p>
                        </motion.div>
                    )}
                    {formError && (
                        <motion.div
                            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <p className="font-bold">Error</p>
                            <p>{formError}</p>
                        </motion.div>
                    )}

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                aria-required="true"
                                disabled={isSubmitting} // Disable input while submitting
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-required="true"
                                disabled={isSubmitting} // Disable input while submitting
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="mt-1 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                aria-required="true"
                                disabled={isSubmitting} // Disable textarea while submitting
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-wait"
                            disabled={isSubmitting} // Disable button while submitting
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <FaSpinner className="animate-spin mr-2" /> {/* Spinner icon with animation */}
                                    Sending...
                                </div>
                            ) : (
                                'Send Message ✨'
                            )}
                        </button>
                    </motion.form>
                </div>

                <div className="lg:w-1/2 bg-gray-700 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-6 text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Contact Information ℹ️
                    </motion.h3>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-indigo-500 mr-3" />
                            <p className="text-gray-300">123 Tech Park, Innovation Avenue, 🌆 City, State, Zip Code</p>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="text-indigo-500 mr-3" />
                            <a href="tel:+15551234567" className="text-gray-300 hover:text-indigo-400 transition-colors">+1 (555) 123-4567 📞</a>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-indigo-500 mr-3" />
                            <a href="mailto:contact@example.com" className="text-gray-300 hover:text-indigo-400 transition-colors">contact@example.com 📧</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

ContactUs.propTypes = {
    backgroundImage: PropTypes.string,
};

ContactUs.defaultProps = {
    backgroundImage: 'https://placekitten.com/450/300',
};

export default ContactUs;