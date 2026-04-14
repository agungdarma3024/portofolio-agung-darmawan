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
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
                A G U N G<br />
                <span className="tracking-widest">D A R M A W A N</span>
              </h3>
            </motion.div>

            {/* Title dengan keyword SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h4 className="text-3xl md:text-4xl font-bold text-white">
                Jasa Pembuatan Website
              </h4>
              <h5 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                untuk UMKM & Bisnis
              </h5>
            </motion.div>

            {/* Description dengan keyword natural */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Saya adalah <strong className="text-white">web developer profesional</strong> yang 
                berfokus pada <strong className="text-white">pembuatan website untuk UMKM, toko online, 
                dan bisnis kecil</strong>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Dengan keahlian dalam <strong className="text-white">full-stack development, 
                UI/UX design, dan SEO optimization</strong>, saya siap membantu bisnis Anda 
                berkembang melalui website yang profesional, responsif, dan mudah ditemukan di Google.
              </p>
            </motion.div>

            {/* Layanan singkat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xl">✓</span>
                <span className="text-gray-300 text-sm">Website Toko Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xl">✓</span>
                <span className="text-gray-300 text-sm">Company Profile</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xl">✓</span>
                <span className="text-gray-300 text-sm">Landing Page</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xl">✓</span>
                <span className="text-gray-300 text-sm">SEO Optimization</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm uppercase tracking-wider"
              >
                Lihat Portfolio
              </button>

              <a 
                href="#contact"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-wider inline-block text-center"
              >
                Konsultasi Gratis
              </a>
            </motion.div>

            {/* Lokasi info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Jakarta, Indonesia • Melayani Seluruh Indonesia</span>
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
                  alt="Agung Darmawan - Web Developer Jakarta untuk UMKM"
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
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
              >
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
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
              >
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;