"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiVsco,
  SiDocker,
  SiAmazon,
  SiTrello,
  SiTailwindcss
} from "react-icons/si";
import { FaDatabase, FaCode, FaCloud } from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95, icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", level: 90, icon: <SiCss3 className="text-blue-500" /> },
        { name: "JavaScript", level: 88, icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-600" /> },
        { name: "React.js", level: 90, icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss className="text-teal-400" /> }
      ]
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 87, icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", level: 75, icon: <SiExpress className="text-gray-400" /> },
        { name: "MongoDB", level: 50, icon: <SiMongodb className="text-green-600" /> },
        { name: "PostgreSQL", level: 78, icon: <SiPostgresql className="text-blue-700" /> },
        { name: "Python", level: 42, icon: <SiPython className="text-blue-400" /> },
        { name: "REST API", level: 70, icon: <FaCode className="text-green-400" /> },
        { name: "Database", level: 83, icon: <FaDatabase className="text-purple-400" /> }
      ]
    },
    tools: {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 88, icon: <SiGit className="text-orange-500" /> },
        { name: "GitHub", level: 90, icon: <SiGithub className="text-white" /> },
        { name: "Figma", level: 75, icon: <SiFigma className="text-purple-500" /> },
        { name: "VS Code", level: 95, icon: <SiVsco className="text-blue-500" /> },
        { name: "Docker", level: 40, icon: <SiDocker className="text-blue-400" /> },
        { name: "AWS", level: 35, icon: <SiAmazon className="text-orange-400" /> },
        { name: "Agile/Scrum", level: 30, icon: <SiTrello className="text-blue-500" /> },
        { name: "Cloud", level: 72, icon: <FaCloud className="text-cyan-400" /> }
      ]
    }
  };

  return (
    <div id="skills" className="ml-0 md:ml-20 min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 flex items-center pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-2">
            Technical Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies & Tools
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 border-transparent"
                  : "bg-transparent text-gray-300 border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30"
                }`}
            >
              {skillCategories[category as keyof typeof skillCategories].title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    {skill.icon}
                  </div>
                  <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                </div>
                <span className="text-blue-400 font-bold text-sm bg-blue-500/20 px-2 py-1 rounded">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2 mb-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full relative"
                >
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                  />
                </motion.div>
              </div>

              {/* Skill Level Indicator */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>Basic</span>
                <span>Advanced</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="text-xl font-bold text-white mb-4">
              Continuous Learning Journey
            </h4>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              I believe in constant growth and staying updated with the latest technologies.
              Currently expanding my knowledge in advanced cloud architectures and AI integration.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm flex items-center space-x-2">
                <SiAmazon className="text-orange-400" />
                <span>AWS Solutions</span>
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm flex items-center space-x-2">
                <SiReact className="text-cyan-400" />
                <span>React Native</span>
              </span>
              <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm flex items-center space-x-2">
                <FaCode className="text-green-400" />
                <span>AI/ML Integration</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;