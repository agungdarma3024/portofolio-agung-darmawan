"use client";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Website Toko Sepatu Online",
      description: "E-commerce platform lengkap untuk UMKM dengan sistem manajemen produk, keranjang belanja, dan integrasi pembayaran",
      image: "/project/ecomers.png",
      technologies: ["React", "Node.js", "CMS", "Tailwind CSS"],
      category: "Toko Online",
      github: "https://github.com/agungdarma3024/toko-sepatu-new.git",
      live: "https://toko-sepatu-wolak-walik.vercel.app/"
    },
    {
      id: 2,
      title: "Website Katalog Film",
      description: "Website katalog film interaktif dengan integrasi API untuk menampilkan informasi film terkini",
      image: "/project/movie.png",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      category: "Website Katalog",
      github: "https://github.com/agungdarma3024/webfilm",
      live: "https://web-film-lovat.vercel.app/"
    },
    {
      id: 3,
      title: "Aplikasi Keuangan Web",
      description: "Aplikasi manajemen keuangan real-time untuk membantu bisnis mengelola arus kas dan laporan keuangan",
      image: "/project/dompet.png",
      technologies: ["Axios", "FastAPI", "MongoDB Atlas", "Next.js"],
      category: "Aplikasi Bisnis",
      github: "https://github.com/agungdarma3024/financial-web.git",
      live: "https://financial-web-l2ny.vercel.app"
    }
  ];

  return (
    <div id="projects" className="ml-0 md:ml-20 min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 flex items-center pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header dengan keyword SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-2">
            Portfolio Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Project Website untuk UMKM & Bisnis
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Berikut adalah beberapa project <strong className="text-white">pembuatan website</strong> yang 
            telah kami kerjakan untuk klien UMKM, toko online, dan bisnis kecil
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                
                <img
                  src={project.image}
                  alt={`${project.title} - Contoh Project Website UMKM oleh Agung Darmawan`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.log(`Gambar tidak ditemukan: ${project.image}`);
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                          <div class="text-center text-white p-4">
                            <div class="text-4xl mb-2">🌐</div>
                            <p class="text-sm text-gray-300 font-semibold">${project.title}</p>
                            <p class="text-xs text-gray-400 mt-1">${project.category}</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 text-white text-center py-2 rounded-lg text-sm hover:bg-white/20 transition-colors"
                    aria-label={`Lihat source code ${project.title}`}
                  >
                    Source Code
                  </a>
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 rounded-lg text-sm hover:from-blue-600 hover:to-purple-700 transition-all"
                    aria-label={`Lihat live demo ${project.title}`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Section - Keunggulan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <h4 className="text-2xl font-bold text-white mb-6 text-center">
            Mengapa Memilih Jasa Website Kami?
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h5 className="text-white font-semibold mb-2">Loading Cepat</h5>
              <p className="text-gray-400 text-sm">
                Website optimized untuk kecepatan maksimal dan user experience terbaik
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h5 className="text-white font-semibold mb-2">Mobile Responsive</h5>
              <p className="text-gray-400 text-sm">
                Tampilan sempurna di semua perangkat - desktop, tablet, dan smartphone
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h5 className="text-white font-semibold mb-2">SEO Friendly</h5>
              <p className="text-gray-400 text-sm">
                Mudah ditemukan di Google untuk meningkatkan visibilitas bisnis Anda
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action dengan keyword */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h4 className="text-2xl font-bold text-white mb-4">
            Siap Membuat Website untuk Bisnis Anda?
          </h4>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Dapatkan <strong className="text-white">konsultasi gratis</strong> dan 
            penawaran harga terbaik untuk pembuatan website UMKM profesional
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Hubungi Kami Sekarang
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;