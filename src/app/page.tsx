// src/app/page.tsx

"use client";

import { motion } from "framer-motion";
// import Navbar from "./components/Navbar"; // Impor Navbar
import About from "./components/About"; // Impor About - pastikan case sensitive
import Sidebar from "./components/Sidebar"; // Impor Sidebar
import Skills from "./components/Skills"; // Impor Skills - pastikan case sensitive
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Sidebar />

      {/* Hero Section */}
      <main id="home" className="flex items-center justify-center min-h-screen bg-gray-900 text-white ml-0 md:ml-20 pb-20 md:pb-0">
        <div className="text-center p-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-2xl md:text-4xl text-gray-400"
          >
            Hello, I&apos;m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="text-5xl md:text-8xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
          >
            Agung Darmawan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 text-lg md:text-2xl text-gray-300"
          >
            A Creative Web Developer
          </motion.p>
        </div>
      </main>

      {/* About Section */}
      <About />

      {/* Skills Section - HANYA SATU KALI */}
      <Skills />

      {/* Tambahkan seksi lain di sini nanti */}

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}