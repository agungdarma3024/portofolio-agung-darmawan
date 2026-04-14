"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    // 1. Menggunakan tag semantic <section> alih-alih <div> untuk area utama
    <section id="contact" className="ml-0 md:ml-20 min-h-screen bg-gradient-to-br from-black to-gray-900 p-8 flex items-center py-24" aria-label="Kontak dan Konsultasi Jasa Website">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header dengan Keyword SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-2">
            Konsultasi Gratis
          </h2>
          {/* Menggunakan h3 dengan keyword spesifik */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kontak Jasa Pembuatan Website
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Punya ide project atau ingin mendigitalkan bisnis UMKM Anda? Jangan ragu untuk menghubungi saya untuk mendiskusikan kebutuhan website Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Menggunakan tag semantic <address> */}
          <motion.address 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 not-italic"
          >
            <h4 className="text-2xl font-semibold text-white mb-6">Mari Bangun Website Profesional Anda!</h4>
            <p className="text-gray-400 mb-8">
              Sebagai Web Developer, saya siap membantu mengembangkan website company profile, toko online, maupun aplikasi custom untuk bisnis Anda.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400" aria-hidden="true">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-400">Email</h5>
                  {/* Link mailto: sangat bagus untuk SEO dan User Experience */}
                  <a href="mailto:wand21931@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors" title="Kirim email untuk penawaran project">
                    wand21931@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400" aria-hidden="true">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-400">Telepon / WhatsApp</h5>
                  {/* Link tel: memungkinkan user langsung menelepon dari HP */}
                  <a href="tel:+628211001473" className="text-white font-medium hover:text-purple-400 transition-colors" title="Hubungi via Telepon">
                    +62 821 1001 473
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400" aria-hidden="true">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-400">Lokasi Operasional</h5>
                  {/* Menggunakan lokasi akurat untuk Local SEO */}
                  <p className="text-white font-medium">Bekasi, Jawa Barat, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.address>

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
              aria-label="Formulir Kontak Jasa Website"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  {/* Aksesibilitas: Menghubungkan label "htmlFor" dengan input "id" */}
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Alamat Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    placeholder="email@perusahaan.com"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subjek Diskusi</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  required
                  placeholder="Contoh: Pembuatan Website E-commerce"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Pesan / Detail Project</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Jelaskan kebutuhan website atau pertanyaan Anda di sini..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 md:py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                aria-label="Kirim Pesan Konsultasi"
              >
                Kirim Pesan Sekarang
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;