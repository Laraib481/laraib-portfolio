import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Sparkles, Eye, Download, X, ExternalLink } from 'lucide-react';

// =========================================================================
// 1. Assets Folder (src/assets/) se Images aur PDFs ke Exact Imports
// =========================================================================

import metaImg from '../assets/Meta.png';
import ibmImg from '../assets/ibm.png';
import michImg from '../assets/mich.png';
import cImg from '../assets/c.png';
import pearImg from '../assets/pear.png';

import fullStackPdf from '../assets/full-stack.pdf';
import devopsPdf from '../assets/devops.pdf';
import websitePdf from '../assets/website.pdf';
import aiAgentPdf from '../assets/AI Agent.pdf';
import genrativeAiPdf from '../assets/genrative AI.pdf';
import pythonPdf from '../assets/python.pdf';
import cPlusPlusPdf from '../assets/c++.pdf';
import sqlPdf from '../assets/sql.pdf';

const certificates = [
  {
    id: "01",
    title: "META FULL-STACK DEVELOPER",
    issuer: "Meta / Coursera",
    date: "2026",
    description: "Professional certification covering full-stack web development, frontend frameworks, and backend API integration.",
    tags: ["React", "Node.js", "Express", "Full-Stack"],
    image: metaImg,
    pdfUrl: fullStackPdf
  },
  {
    id: "02",
    title: "DEVOPS ENGINEERING",
    issuer: "IBM",
    date: "2026",
    description: "Hands-on training in CI/CD pipelines, containerization, cloud deployment, and infrastructure automation.",
    tags: ["DevOps", "CI/CD", "Docker", "Cloud"],
    image: ibmImg,
    pdfUrl: devopsPdf
  },
  {
    id: "03",
    title: "FRONT-END WEB DEVELOPMENT",
    issuer: "Meta",
    date: "2026",
    description: "Specialized credentials in building modern, responsive user interfaces and optimized web applications.",
    tags: ["JavaScript", "React", "CSS3", "UI/UX"],
    image: metaImg,
    pdfUrl: websitePdf
  },
  {
    id: "04",
    title: "AI AGENTS DEVELOPMENT",
    issuer: "IBM",
    date: "2026",
    description: "Building intelligent AI agents, integrating LLM APIs, prompt engineering, and autonomous workflows.",
    tags: ["AI Agents", "Python", "LLMs", "Automation"],
    image: ibmImg,
    pdfUrl: aiAgentPdf
  },
  {
    id: "05",
    title: "GENERATIVE AI FUNDAMENTALS",
    issuer: "IBM",
    date: "2026",
    description: "Core concepts of generative models, transformer architectures, and practical AI application development.",
    tags: ["Generative AI", "Deep Learning", "AI Models"],
    image: ibmImg,
    pdfUrl: genrativeAiPdf
  },
  {
    id: "06",
    title: "PROGRAMMING IN PYTHON",
    issuer: "University of Michigan",
    date: "2026",
    description: "Comprehensive Python programming, data structures, object-oriented principles, and script development.",
    tags: ["Python", "Data Structures", "OOP"],
    image: michImg,
    pdfUrl: pythonPdf
  },
  {
    id: "07",
    title: "C++ PROGRAMMING & ALGORITHMS",
    issuer: "Computer Science Dept",
    date: "2026",
    description: "Low-level memory management, object-oriented programming, and core data structure implementations in C++.",
    tags: ["C++", "Algorithms", "Data Structures"],
    image: cImg,
    pdfUrl: cPlusPlusPdf
  },
  {
    id: "08",
    title: "SQL & DATABASE MANAGEMENT",
    issuer: "Pearson",
    date: "2026",
    description: "Relational database design, writing complex SQL queries, indexing, and data modeling strategies.",
    tags: ["SQL", "Databases", "Queries", "Data Modeling"],
    image: pearImg,
    pdfUrl: sqlPdf
  }
];

export default function Certificates() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [activePdf, setActivePdf] = useState(null);

  // Measure desktop scroll range dynamically
  useEffect(() => {
    const calculateScroll = () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        const clientWidth = containerRef.current.clientWidth;
        setScrollRange(scrollWidth - clientWidth);
      }
    };

    calculateScroll();
    window.addEventListener('resize', calculateScroll);
    return () => window.removeEventListener('resize', calculateScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={targetRef} className="relative bg-[#0A0A0A] text-white md:h-[400vh]">
      
      {/* Container Frame */}
      <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col justify-center overflow-hidden py-8">
        
        {/* Top Marquee Header */}
        <div className="w-full overflow-hidden mb-4 sm:mb-6 bg-[#B20000] py-2 sm:py-3 shadow-lg">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex whitespace-nowrap gap-8 md:gap-12 font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white uppercase"
          >
            <span className="flex items-center gap-2"><Sparkles size={14} /> VERIFIED CREDENTIALS & CERTIFICATES</span>
            <span>✦ COMPUTER SCIENCE & WEB SPECIALIZATIONS</span>
            <span>✦ ACADEMIC COURSEWORK & SKILLS</span>
            <span className="flex items-center gap-2"><Sparkles size={14} /> VERIFIED CREDENTIALS & CERTIFICATES</span>
            <span>✦ COMPUTER SCIENCE & WEB SPECIALIZATIONS</span>
            <span>✦ ACADEMIC COURSEWORK & SKILLS</span>
          </motion.div>
        </div>

        {/* Section Header */}
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 mb-4 sm:mb-6">
          <div className="flex items-center justify-center p-3 sm:p-5 bg-black border border-neutral-800 rounded-2xl shadow-xl">
            <h2 id="certificates" className="text-lg sm:text-3xl md:text-4xl font-black tracking-tight uppercase text-white text-center">
              CERTIFICATES & <span className="text-[#B20000]">SPECIALIZATIONS</span>
            </h2>
          </div>
        </div>

        {/* --- MOBILE VIEW: NATIVE HARDWARE ACCELERATED SMOOTH SWIPE (< md) --- */}
        <div className="block md:hidden w-full overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory px-4">
          <div className="flex gap-4 w-max">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="w-[85vw] max-w-[340px] snap-center bg-white text-black rounded-[24px] p-5 shadow-2xl border border-neutral-200 flex-shrink-0 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/10] bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden relative flex items-center justify-center p-3">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-2 left-2 bg-black text-white font-mono text-[10px] px-2 py-0.5 rounded-full font-bold">
                      {cert.id}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#B20000]">
                      <span>{cert.issuer}</span>
                      <span className="text-neutral-500 font-mono">{cert.date}</span>
                    </div>

                    <h3 className="text-base font-black tracking-tight text-black line-clamp-1">
                      {cert.title}
                    </h3>

                    <p className="text-neutral-600 text-xs leading-relaxed font-medium line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-semibold px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-md border border-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-neutral-200 mt-3">
                  <button
                    onClick={() => setActivePdf(cert)}
                    className="flex-1 py-2 px-3 bg-black text-white rounded-full text-xs font-bold hover:bg-[#B20000] transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Eye size={14} /> Live Preview
                  </button>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-neutral-100 text-neutral-900 rounded-full text-xs font-bold hover:bg-neutral-200 transition-all flex items-center justify-center gap-1 border border-neutral-300 cursor-pointer"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- DESKTOP VIEW: STICKY FRAMER MOTION ANIMATION (>= md) --- */}
        <div ref={containerRef} className="hidden md:block w-full overflow-hidden px-8">
          <motion.div style={{ x }} className="flex gap-8 w-max">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="w-[700px] lg:w-[800px] bg-white text-black rounded-[36px] p-8 shadow-2xl border border-neutral-200 flex-shrink-0"
              >
                <div className="grid grid-cols-12 gap-6 items-center">
                  
                  <div className="col-span-5 aspect-square bg-neutral-50 rounded-[28px] border border-neutral-200 overflow-hidden relative group flex items-center justify-center p-6">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-black text-white font-mono text-xs px-3 py-1 rounded-full font-bold">
                      {cert.id}
                    </div>
                  </div>

                  <div className="col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#B20000]">
                        <span>{cert.issuer}</span>
                        <span className="text-neutral-500 font-mono">{cert.date}</span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-black">
                        {cert.title}
                      </h3>

                      <p className="text-neutral-600 text-xs lg:text-sm leading-relaxed font-medium">
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md border border-neutral-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-neutral-200">
                      <button
                        onClick={() => setActivePdf(cert)}
                        className="flex-1 py-3 px-4 bg-black text-white rounded-full text-xs font-bold hover:bg-[#B20000] transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <Eye size={16} /> Live Preview
                      </button>

                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-5 bg-neutral-100 text-neutral-900 rounded-full text-xs font-bold hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 border border-neutral-300 cursor-pointer"
                        title="Open PDF in new tab"
                      >
                        <ExternalLink size={16} /> Open
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* PDF Modal */}
      {activePdf && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#121212] text-white w-full max-w-5xl h-[88vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-800">
            
            <div className="px-5 py-4 bg-black flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 bg-[#B20000]/20 rounded-xl text-[#B20000] shrink-0">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-white truncate max-w-xs sm:max-w-md">
                    {activePdf.title}
                  </h3>
                  <p className="text-[10px] text-neutral-400 font-mono">
                    Official Credential Document • {activePdf.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activePdf.pdfUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-full transition-colors"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                
                <a
                  href={activePdf.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={14} />
                </a>

                <button
                  onClick={() => setActivePdf(null)}
                  className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer ml-1"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-neutral-900 w-full h-full relative">
              <iframe
                src={`${activePdf.pdfUrl}#toolbar=0`}
                title={activePdf.title}
                className="w-full h-full border-none"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}