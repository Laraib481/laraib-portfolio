import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code2, Eye, X, FolderGit2, ExternalLink, Sparkles } from 'lucide-react';

const categories = ["All", "Full-Stack", "E-Commerce"];

const projects = [
  {
    id: "01",
    title: "BEATLY",
    category: "Full-Stack",
    subtitle: "Music Streaming Platform",
    description: "Full-stack music streaming platform allowing users to stream music while empowering artists with dedicated dashboards to manage and upload songs.",
    features: [
      "Music discovery & streaming",
      "JWT authentication",
      "User & Artist dashboards",
      "ImageKit media uploads",
      "RESTful backend APIs"
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "ImageKit", "JWT"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://beatly-l-6jfx.vercel.app/",
    githubUrl: "https://github.com/Laraib481/Beatly.L.git"
  },
  {
    id: "02",
    title: "DEVHUB",
    category: "Full-Stack",
    subtitle: "Developer Collaboration Platform",
    description: "Centralized full-stack platform enabling developers to connect, collaborate, and share tools and snippet libraries through a modern MERN architecture.",
    features: [
      "User authentication & accounts",
      "JWT-based security",
      "Developer profiles & posts",
      "Search & discovery system",
      "Full-stack MERN integration"
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://dev-hub-xq2d.vercel.app/",
    githubUrl: "https://github.com/Laraib481/DevHub.git"
  },
  {
    id: "03",
    title: "LS FASHION STORE",
    category: "E-Commerce",
    subtitle: "Headless E-Commerce Platform",
    description: "Luxury mobile-responsive headless e-commerce store integrated with Shopify Storefront GraphQL API, dynamic filtering, and real-time cart state.",
    features: [
      "Shopify GraphQL API sync",
      "Responsive glassmorphic UI",
      "Dynamic collection tabs",
      "Live cart & badge notifications",
      "Fast client-side routing"
    ],
    tags: ["React", "Shopify API", "GraphQL", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://ls-fashion-store.netlify.app/",
    githubUrl: "https://github.com/Laraib481/LS-Fashion-Store.git"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="w-full bg-[#0A0A0A] py-24 px-4 sm:px-8 text-white relative">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono font-bold uppercase tracking-widest text-neutral-300">
            <FolderGit2 size={14} className="text-[#B20000]" /> Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            FEATURED <span className="text-[#B20000]">PROJECTS</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#B20000] text-white border-[#B20000] shadow-lg shadow-[#B20000]/20"
                  : "bg-neutral-900/80 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Card Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-900/90 border border-neutral-800 rounded-[28px] overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 shadow-xl group"
              >
                {/* Image Box */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/9] bg-neutral-950 overflow-hidden cursor-pointer group/img"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-xs">
                    <span className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl">
                      <Eye size={16} /> Quick Preview
                    </span>
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono font-bold text-white">
                    {project.id}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#B20000] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[11px] text-neutral-400 font-mono">
                        {project.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-neutral-200">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                      {project.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2.5 py-1 bg-neutral-950 text-neutral-300 rounded-md border border-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#B20000] text-white text-xs font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#B20000]/20"
                    >
                      Live Demo <ArrowUpRight size={14} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-neutral-950 text-white border border-neutral-800 text-xs font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                    >
                      <Code2 size={14} /> Code
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal Lightbox for Project Preview */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              <div className="p-4 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
                <div>
                  <h4 className="text-xl font-bold text-white">{selectedProject.title}</h4>
                  <p className="text-xs text-[#B20000] font-mono">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-3">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B20000] flex items-center gap-1.5">
                    <Sparkles size={14} /> Key Features
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 bg-neutral-950 p-2.5 rounded-lg border border-neutral-800">
                        <span className="text-[#B20000] font-bold">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-950 flex flex-wrap items-center justify-end gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-neutral-900 border border-neutral-700 text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-all flex items-center gap-2"
                >
                  Source Code <Code2 size={14} />
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 bg-[#B20000] text-white rounded-xl text-xs font-bold hover:bg-red-700 transition-all flex items-center gap-2"
                >
                  Visit Live Site <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}