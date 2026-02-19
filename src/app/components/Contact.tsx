"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="ml-0 md:ml-20 min-h-screen bg-gradient-to-br from-black to-gray-900 p-8 flex items-center py-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Me
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to send me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h4 className="text-2xl font-semibold text-white mb-6">Let&apos;s talk about everything!</h4>
            <p className="text-gray-400 mb-8">
              I&apos;m currently available to take on new projects, so feel free to send me a message about anything that you want me to build.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">wand21931@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium">+62 821 1001 473</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl"
          >
            <form 
              action="https://formspree.io/f/xwvnqjyb" 
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 md:py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;