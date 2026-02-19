"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="ml-0 md:ml-20 min-h-screen bg-gradient-to-br from-black to-gray-900 p-8 flex items-center pb-24 md:pb-8">
            <div className="max-w-4xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-2">
                        Get In Touch
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Let's Work Together
                    </h3>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                        I'm currently available for freelance projects and full-time opportunities.
                        If you have a project that needs some creative touch, let's chat!
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {/* WhatsApp Card */}
                    <motion.a
                        href="https://wa.me/628211001473"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 group text-center cursor-pointer"
                    >
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-colors">
                            <FaWhatsapp className="text-3xl text-green-400" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">WhatsApp Me</h4>
                        <p className="text-gray-400 text-sm opacity-50">Click to chat</p>
                    </motion.a>

                    {/* LinkedIn Card */}
                    <motion.a
                        href="https://linkedin.com/in/agung-darmawan-854b2523b"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group text-center cursor-pointer"
                    >
                        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-colors">
                            <FaLinkedin className="text-2xl text-purple-400" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">LinkedIn</h4>
                        <p className="text-gray-400 text-sm">Let's connect professionally</p>
                    </motion.a>

                    {/* Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 group text-center"
                    >
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-colors">
                            <FaMapMarkerAlt className="text-2xl text-green-400" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Location</h4>
                        <p className="text-gray-400 text-sm">Indonesia</p>
                    </motion.div>
                </div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-center"
                >
                    <p className="text-gray-500 text-sm">
                        © 2024 Agung Darmawan. Built with Next.js & Framer Motion.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
