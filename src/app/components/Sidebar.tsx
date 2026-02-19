"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaUsers,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaWhatsapp
} from "react-icons/fa";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { id: "home", label: "Home", icon: <FaHome size={20} /> },
    { id: "about", label: "About", icon: <FaUser size={20} /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram size={20} /> },
    { id: "skills", label: "Skills", icon: <FaCode size={20} /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope size={20} /> },
  ];

  const socialLinks = [
    {
      href: "https://github.com/agungdarma3024",
      icon: <FaGithub size={16} />,
      label: "GitHub",
      external: true
    },
    {
      href: "https://linkedin.com/in/agung-darmawan-854b2523b",
      icon: <FaLinkedin size={16} />,
      label: "LinkedIn",
      external: true
    },
    {
      href: "https://wa.me/628211001473",
      icon: <FaWhatsapp size={16} />,
      label: "WhatsApp",
      external: true
    },
    {
      href: "/Agung_Darmawan_Resume.pdf",
      icon: <FaFileDownload size={16} />,
      label: "Resume",
      external: true
    },
  ];

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed left-0 top-0 h-full w-20 bg-gray-900/95 backdrop-blur-lg border-r border-white/20 flex-col items-center py-8 z-40"
      >
        {/* Logo/Inisial Kecil */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-8 flex items-center justify-center text-white font-bold text-sm border-2 border-white/20"
        >
          AD
        </motion.div>

        {/* Navigation Menu - Icon Only */}
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
              className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group ${activeSection === item.id
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
            >
              {item.icon}

              {/* Tooltip */}
              {hoveredItem === item.id && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute left-14 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none border border-white/10 z-50"
                >
                  {item.label}
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </motion.span>
              )}
            </motion.button>
          ))}
        </nav>

        {/* Social Links - Icon Only */}
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
              className="relative flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group"
            >
              {social.icon}

              {hoveredItem === social.label && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute left-12 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none border border-white/10 z-50"
                >
                  {social.label}
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </motion.span>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright - Minimal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 text-xs mt-6 text-center rotate-90 whitespace-nowrap origin-center"
          style={{ writingMode: "vertical-rl" }}
        >
          2024
        </motion.p>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full h-16 bg-gray-900/95 backdrop-blur-lg border-t border-white/20 flex md:hidden items-center justify-around z-50 px-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-300 ${activeSection === item.id ? "text-blue-500" : "text-gray-400 hover:text-white"
              }`}
          >
            <div className={`${activeSection === item.id ? "scale-110" : "scale-100"} transition-transform duration-200`}>
              {item.icon}
            </div>
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;