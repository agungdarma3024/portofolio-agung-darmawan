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
            
            {/* H1 dengan keyword SEO */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              className="text-5xl md:text-8xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
            >
              Agung Darmawan
            </motion.h1>
            
            {/* Deskripsi dengan keyword natural */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-4 text-lg md:text-2xl text-gray-300"
            >
              Jasa Pembuatan Website UMKM Profesional & Terjangkau
            </motion.p>
            
            {/* Tambahan deskripsi untuk SEO */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="mt-3 text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4"
            >
              Spesialis pembuatan website untuk UMKM, toko online, dan bisnis kecil. 
              Website responsif, modern, dan SEO-friendly untuk meningkatkan penjualan Anda.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="#contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Konsultasi Gratis
              </a>
              <a 
                href="#projects"
                className="inline-block border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Lihat Portfolio
              </a>
            </motion.div>

            {/* Keyword natural untuk lokasi */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.9 }}
              className="mt-6 text-sm text-gray-500"
            >
              📍 Melayani seluruh Indonesia • Berbasis di Jakarta
            </motion.p>
          </div>
        </main>

        {/* About Section dengan heading SEO */}
        <section id="about">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section dengan heading SEO */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* Footer dengan keyword SEO */}
        <footer className="bg-gray-950 text-gray-400 py-8 px-4 text-center border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <p className="mb-2">
              <strong className="text-white">Agung Darmawan</strong> - Jasa Pembuatan Website UMKM Profesional
            </p>
            <p className="text-sm mb-4">
              Website Toko Online • Company Profile • Landing Page • Katalog Produk
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Agung Darmawan. Melayani pembuatan website di seluruh Indonesia.
            </p>
            <div className="mt-4 flex justify-center gap-6 text-sm">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}