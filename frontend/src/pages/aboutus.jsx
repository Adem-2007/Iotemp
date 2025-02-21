import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaStethoscope, FaHeartbeat, FaUsers, FaEnvelope, FaPhone, FaHandsHelping, FaMedal, FaLightbulb } from 'react-icons/fa';
import  Wassim from './../../images/Wassim.jpeg'
import  terkman from './../../images/terkman.jpeg'
import  younes from './../../images/younes.jpeg'

const AboutUsPage = () => {
    // const imageBaseUrl = 'https://via.placeholder.com/'; // Removed imageBaseUrl as per critique
    const memeberImage = "https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai_117038-5477.jpg?w=900"

    return (
        <motion.div
            className="bg-gradient-to-b from-gray-900 to-black text-white font-sans antialiased overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="py-20 " >
                <div className="container mx-auto px-4 md:px-0 text-center h-[300px] items-center flex  flex-col justify-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >💖 Welcome to MedCare Plus 🏥</motion.h2>
                    <motion.p
                        className="text-lg text-gray-300 mb-8 md:w-2/3 mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        Dedicated to providing exceptional medical care with compassion and innovation. Learn more about our mission, values, and the team behind MedCare Plus.
                    </motion.p>

                </div>
            </section>

            <section className="py-16 ">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            className="md:order-2"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {/* Replaced placeholder image with critiqueImageUrl as per critique */}
                            <img src={memeberImage} alt="Modern medical facility" className="rounded-lg shadow-md" aria-hidden="true" />
                        </motion.div>
                        <motion.div
                            className="md:order-1"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-3xl font-semibold text-blue-400 mb-4 flex items-center"><FaStethoscope className="mr-2" /> Our Mission</h3>
                            <p className="text-gray-300 leading-relaxed">
                                A company that aims to develop the health field and works to solve contemporary problems and reduce human and material losses                            </p>
                            <motion.p
                                className="text-gray-300 leading-relaxed mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                We strive to be a leading healthcare provider recognized for our clinical expertise, advanced technology, and dedication to personalized care.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 ">
                <div className="container mx-auto px-4">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 flex justify-center items-center"><FaUsers className="mr-2" /> Meet Our Dedicated Team 🧑‍⚕️👩‍⚕️</h2>
                        <p className="text-gray-300 md:w-2/3 mx-auto">Our team of highly skilled and compassionate professionals is dedicated to providing you with the best possible care.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <motion.div className="bg-gray-900 rounded-lg shadow-md p-6 text-center hover:scale-105 transition duration-300" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            {/* Replaced placeholder image with critiqueImageUrl as per critique */}
                            <img src={memeberImage} alt="Dr. Smith" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500" aria-hidden="true" />
                            <h4 className="text-xl font-semibold text-white">Chelabi Adem</h4>
                            <p className="text-blue-200 mb-2">Web dev</p>
                            <p className="text-gray-400">"Responsable of the website and its creator "</p>
                        </motion.div>
                        {/* Team Member 2 */}
                        <motion.div className="bg-gray-900 rounded-lg shadow-md p-6 text-center hover:scale-105 transition duration-300" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                            {/* Replaced placeholder image with memeberImage as per critique */}
                            <img src={terkman} alt="Dr. Johnson" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500" aria-hidden="true" />
                            <h4 className="text-xl font-semibold text-white">Terkmane Soheib</h4>
                            <p className="text-blue-200 mb-2">3D designer </p>
                            <p className="text-gray-400">"The cretor of the 3D model of the project"</p>
                        </motion.div>
                        {/* Team Member 3 */}
                        <motion.div className="bg-gray-900 rounded-lg shadow-md p-6 text-center hover:scale-105 transition duration-300" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                            {/* Replaced placeholder image with memeberImage as per critique */}
                            <img src={younes} alt="Dr. Williams" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500" aria-hidden="true" />
                            <h4 className="text-xl font-semibold text-white">Younes Habel</h4>
                            <p className="text-blue-200 mb-2">Graphic Designer</p>
                            <p className="text-gray-400">"The responsable of the presontation "</p>
                        </motion.div>
                        <motion.div className="bg-gray-900 rounded-lg shadow-md p-6 text-center hover:scale-105 transition duration-300" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                            {/* Replaced placeholder image with memeberImage as per critique */}
                            <img src={Wassim} alt="Dr. Williams" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500" aria-hidden="true" />
                            <h4 className="text-xl font-semibold text-white">Bahloul Wassim</h4>
                            <h4 className="text-xl font-semibold text-white">Bahloul Wassim </h4>
                            <p className="text-blue-200 mb-2">SoftxHardware</p>
                            <p className="text-gray-400">"The responsable for build the product "</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 ">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 flex justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        ><FaHeartbeat className="mr-2" /> Our Core Values ❤️</motion.h2>
                        <motion.p
                            className="text-gray-300 md:w-2/3 mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >Our values are the foundation of our practice and guide us in everything we do.</motion.p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <motion.div className="bg-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                            <h4 className="text-xl font-semibold text-white mb-2 flex items-center justify-center"><FaHandsHelping className="mr-2" /> Compassion 💖</h4>
                            <p className="text-white-400">We approach every patient interaction with empathy, kindness, and understanding.</p>
                        </motion.div>
                        {/* Value 2 */}
                        <motion.div className="bg-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                            <h4 className="text-xl font-semibold text-white mb-2 flex items-center justify-center"><FaMedal className="mr-2" /> Excellence ✨</h4>
                            <p className="text-white-400">We are committed to the highest standards of clinical care and continuous improvement.</p>
                        </motion.div>
                        {/* Value 3 */}
                        <motion.div className="bg-blue-600   p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                            <h4 className="text-xl font-semibold text-white mb-2 flex items-center justify-center"><FaLightbulb className="mr-2" /> Innovation 🚀</h4>
                            <p className="text-white-400">We embrace new technologies and approaches to provide cutting-edge medical treatments.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

AboutUsPage.propTypes = {
    // No props expected for this component as per the initial request, but PropTypes import is added as requested.
};

export default AboutUsPage;
