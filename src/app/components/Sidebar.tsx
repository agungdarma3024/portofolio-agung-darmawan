"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaWhatsapp,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: <FaHome size={20} />, ariaLabel: "Ke halaman utama" },
    { id: "about", label: "About", icon: <FaUser size={20} />, ariaLabel: "Tentang jasa pembuatan website" },
    { id: "skills", label: "Skills", icon: <FaCode size={20} />, ariaLabel: "Teknologi yang dikuasai" },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram size={20} />, ariaLabel: "Portfolio website UMKM" },
    { id: "contact", label: "Contact", icon: <FaEnvelope size={20} />, ariaLabel: "Hubungi untuk konsultasi" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/agungdarma3024",
      icon: <FaGithub size={18} />,
      label: "GitHub",
      ariaLabel: "Kunjungi GitHub Agung Darmawan",
      external: true
    },
    {
      href: "https://linkedin.com/in/agung-darmawan-854b2523b",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      ariaLabel: "Hubungi via LinkedIn",
      external: true
    },
    {
      href: "https://wa.me/628211001473",
      icon: <FaWhatsapp size={18} />,
      label: "WhatsApp",
      ariaLabel: "Chat WhatsApp untuk konsultasi gratis",
      external: true
    },
    {
      href: "/Agung_Darmawan_Resume.pdf",
      icon: <FaFileDownload size={18} />,
      label: "Resume",
      ariaLabel: "Download CV Agung Darmawan",
      external: true
    },
  ];

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed left-0 top-0 h-full w-20 bg-gray-900/95 backdrop-blur-lg border-r border-white/20 flex-col items-center py-8 z-40"
        role="navigation"
        aria-label="Menu navigasi utama"
      >
        {/* Logo/Inisial */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-8 flex items-center justify-center text-white font-bold text-sm border-2 border-white/20"
          title="Agung Darmawan - Web Developer"
        >
          AD
        </motion.div>

        {/* Menu Navigasi */}
        <nav className="w-full flex-1 flex flex-col items-center space-y-6">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              onClick={() => handleScrollToSection(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              aria-label={item.ariaLabel}
              aria-current={activeSection === item.id ? "page" : undefined}
              className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group ${
                activeSection === item.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.icon}
              {hoveredItem === item.id && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute left-14 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none border border-white/10 z-50"
                  role="tooltip"
                >
                  {item.label}
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </motion.span>
              )}
            </motion.button>
          ))}
        </nav>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col space-y-4"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : "_self"}
              rel={social.external ? "noopener noreferrer" : ""}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoveredItem(social.label)}
              onMouseLeave={() => setHoveredItem(null)}
              aria-label={social.ariaLabel}
              className="relative flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group"
            >
              {social.icon}
              {hoveredItem === social.label && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute left-12 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none border border-white/10 z-50"
                  role="tooltip"
                >
                  {social.label}
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </motion.span>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright Year */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 text-xs mt-6 text-center rotate-90 whitespace-nowrap origin-center"
          style={{ writingMode: "vertical-rl" }}
        >
          2025
        </motion.p>
      </motion.aside>

      {/* ================= MOBILE HAMBURGER MENU ================= */}
      
      {/* Tombol Hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-[60]">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
          aria-expanded={isMobileMenuOpen}
          className="w-12 h-12 flex items-center justify-center bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-xl text-white shadow-lg shadow-black/50 transition-transform active:scale-95"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Overlay Background */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[50]"
          aria-hidden="true"
        />
      )}

      {/* Slide-out Menu Panel */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-white/10 shadow-2xl z-[55] flex flex-col pt-24 px-6"
        role="navigation"
        aria-label="Menu navigasi mobile"
      >
        {/* Menu Items */}
        <div className="flex flex-col space-y-4 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
              aria-label={item.ariaLabel}
              aria-current={activeSection === item.id ? "page" : undefined}
              className={`flex items-center space-x-4 w-full p-4 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <div className={activeSection === item.id ? "scale-110" : "scale-100"}>
                {item.icon}
              </div>
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Social Links di Mobile */}
        <div className="mt-auto mb-10 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-4">
            Hubungi Kami
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : "_self"}
                rel={social.external ? "noopener noreferrer" : ""}
                aria-label={social.ariaLabel}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all border border-white/10"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;