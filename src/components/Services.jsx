import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const servicesData = [
  {
    id: "01",
    title: "Website Design & Development",
    description: "I design and develop modern, responsive, and high-performance websites that look great on every device and deliver a seamless user experience.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "02",
    title: "SaaS Product Development",
    description: "From idea to deployment, I build scalable SaaS applications with modern architecture, intuitive interfaces, authentication, dashboards, APIs, and database integration.",
    tags: ["MERN Stack", "REST APIs", "Authentication", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "03",
    title: "Dashboard & Admin Panels",
    description: "I create powerful and intuitive dashboards that turn complex data into clear, actionable interfaces for businesses and SaaS products.",
    tags: ["Analytics", "Charts", "Data Tables", "Role-Based Access", "CRUD"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "04",
    title: "E-Commerce Development",
    description: "I build conversion-focused e-commerce experiences with product management, responsive storefronts, shopping flows, and scalable backend systems.",
    tags: ["React", "Node.js", "MongoDB", "APIs"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "05",
    title: "Full-Stack Web Applications",
    description: "I develop complete full-stack applications with seamless frontend-backend integration, secure APIs, database architecture, and reliable functionality.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "06",
    title: "UI Development & Frontend",
    description: "I transform designs and ideas into pixel-focused, responsive interfaces with clean, reusable, and maintainable frontend code.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Component UI"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "07",
    title: "API & Backend Development",
    description: "I build secure and scalable backend systems, REST APIs, authentication systems, database integrations, and server-side functionality.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "08",
    title: "Deployment & Optimization",
    description: "I help take applications from development to production with performance optimization, deployment, debugging, and production-ready configurations.",
    tags: ["Git", "GitHub", "Vercel", "Railway", "Performance"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState("01");

  return (
    <section id="services" className="w-full bg-[#B20000] py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 text-black shadow-2xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-500">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
            Services Provided
          </h2>
        </div>

        {/* Services List Accordion */}
        <div className="flex flex-col space-y-4">
          {servicesData.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`relative rounded-3xl cursor-pointer transition-all duration-300 border ${
                  isActive 
                    ? 'bg-black text-white border-black p-6 sm:p-8 shadow-xl' 
                    : 'bg-transparent text-black border-neutral-200 hover:border-neutral-400 p-6 sm:py-7 sm:px-8'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Number & Title */}
                  <div className="md:col-span-5 flex items-center gap-6">
                    <span className={`text-lg font-mono font-bold ${isActive ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {service.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Middle Description & Tech Tags */}
                  <div className="md:col-span-5 space-y-3">
                    <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isActive ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {service.description}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                            isActive 
                              ? 'bg-neutral-800 text-neutral-300 border border-neutral-700' 
                              : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Arrow Button */}
                  <div className="md:col-span-2 flex justify-end">
                    <div className={`p-3 rounded-full transition-all ${
                      isActive ? 'bg-white text-black' : 'border border-neutral-300 text-black'
                    }`}>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                </div>

                {/* Floating Preview Image (Top-Right on Active State) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      animate={{ opacity: 1, scale: 1, rotate: 6 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="hidden lg:block absolute -top-6 right-16 w-48 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white pointer-events-none z-20"
                    >
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}