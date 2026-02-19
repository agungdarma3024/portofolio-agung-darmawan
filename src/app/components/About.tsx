"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="ml-0 md:ml-20 min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 flex items-center pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header dengan nama */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                AD
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
                A G U N G<br />
                <span className="tracking-widest">D A R M A W A N</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Full Stack
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Developer
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                A junior fullstack developer who currently focused on Web Development.
                Other than that, I also interested in UI/UX Design, Mobile and AI Development.
                I love to learn new things and always open to new opportunities.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-4 pt-4"
            >
              <button 
                onClick={() => {
                const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });}}}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm uppercase tracking-wider">
                  View My Work
               </button>

              <a 
                href="/Agung_Darmawan_Resume.pdf"
                download="Agung_Darmawan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-wider inline-block text-center">
                Download CV
              </a>

            </motion.div>
          </div>

          {/* Right Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Photo Container */}
              <div className="w-72 h-96 md:w-80 md:h-104 lg:w-96 lg:h-128 rounded-xl overflow-hidden border-4 border-white/20 shadow-lg shadow-black/30">
                <img
                  src="/AD.jpg"
                  alt="Agung Darmawan"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}              >
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}              >
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;