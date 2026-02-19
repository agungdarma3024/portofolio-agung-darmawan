"use client";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Full-stack e-commerce platform with React, Node.js, and MongoDB",
      image: "/project/ecomers.png", // GANTI: /projects/ → /project/
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/agungdarma3024/ecommerce",
      live: "https://ecommerce-demo.vercel.app"
    },
    {
      id: 2,
      title: "movie Web",
      description: "Productivity app for managing tasks and projects with drag & drop functionality",
      image: "/project/movie.png", // GANTI: /projects/ → /project/
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/agungdarma3024/webfilm",
      live: "https://web-film-lovat.vercel.app/"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with beautiful UI and charts",
      image: "/project/dompet.png", // GANTI: /projects/ → /project/
      technologies: ["React", "Chart.js", "API Integration", "CSS3"],
      github: "https://github.com/agungdarma3024/weather-app",
      live: "https://weatherapp-demo.vercel.app"
    }
  ];

  return (
    <div id="projects" className="ml-0 md:ml-20 min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 flex items-center pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-2">
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
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
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.log(`Gambar tidak ditemukan: ${project.image}`);
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                          <div class="text-center text-white">
                            <div class="text-4xl mb-2"></div>
                            <p class="text-sm text-gray-300">${project.title}</p>
                            <p class="text-xs text-gray-400 mt-1">Image: ${project.image}</p>
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
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

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
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 rounded-lg text-sm hover:from-blue-600 hover:to-purple-700 transition-all"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's build something amazing!
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;