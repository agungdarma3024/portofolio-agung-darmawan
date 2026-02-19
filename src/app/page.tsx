"use client";

import { motion } from "framer-motion";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Sidebar />

      {/* WADAH UTAMA KONTEN 
        Margin kiri (md:ml-20) sudah dihapus. 
        Sekarang halamannya 100% full screen dan Sidebar murni melayang di atasnya.
      */}
      <div className="w-full pb-16 md:pb-0">
        
        {/* Hero Section */}
        <main id="home" className="flex items-center justify-center min-h-screen text-white">
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

        <About />
        <Skills />
        <Projects />
        <Contact />

      </div>
    </div>
  );
}