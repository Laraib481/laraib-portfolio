// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';

// const servicesData = [
//   {
//     id: "01",
//     title: "Website Design & Development",
//     description: "I design and develop modern, responsive, and high-performance websites that look great on every device and deliver a seamless user experience.",
//     tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
//     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     id: "02",
//     title: "SaaS Product Development",
//     description: "From idea to deployment, I build scalable SaaS applications with modern architecture, intuitive interfaces, authentication, dashboards, APIs, and database integration.",
//     tags: ["MERN Stack", "REST APIs", "Authentication", "MongoDB"],
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     id: "03",
//     title: "Dashboard & Admin Panels",
//     description: "I create powerful and intuitive dashboards that turn complex data into clear, actionable interfaces for businesses and SaaS products.",
//     tags: ["Analytics", "Charts", "Data Tables", "Role-Based Access", "CRUD"],
//     image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     id: "04",
//     title: "E-Commerce Development",
//     description: "I build conversion-focused e-commerce experiences with product management, responsive storefronts, shopping flows, and scalable backend systems.",
//     tags: ["React", "Node.js", "MongoDB", "APIs"],
//     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     id: "05",
//     title: "Full-Stack Web Applications",
//     description: "I develop complete full-stack applications with seamless frontend backend integration, secure APIs, database architecture, and reliable functionality.",
//     tags: ["React", "Node.js", "Express", "MongoDB"],
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     id: "06",
//     title: "UI Development & Frontend",
//     description: "I transform designs and ideas into pixel-focused, responsive interfaces with clean, reusable, and maintainable frontend code.",
//     tags: ["React", "JavaScript", "Tailwind CSS", "Component UI"],
//     image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     id: "07",
//     title: "API & Backend Development",
//     description: "I build secure and scalable backend systems, REST APIs, authentication systems, database integrations, and server side functionality.",
//     tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     id: "08",
//     title: "Deployment & Optimization",
//     description: "I help take applications from development to production with performance optimization, deployment, debugging, and production ready configurations.",
//     tags: ["Git", "GitHub", "Vercel", "Railway", "Performance"],
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
//   }
// ];

// export default function Services() {
//   const [activeId, setActiveId] = useState("01");

//   return (
//     <section id="services" className="w-full bg-[#B20000] py-24 px-4 sm:px-8">
//       <div className="max-w-6xl mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 text-black shadow-2xl">
        
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-2">
//           <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-500">
//             What I Do
//           </p>
//           <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
//             Services Provided
//           </h2>
//         </div>

//         {/* Services List Accordion */}
//         <div className="flex flex-col space-y-4">
//           {servicesData.map((service) => {
//             const isActive = activeId === service.id;

//             return (
//               <div
//                 key={service.id}
//                 onClick={() => setActiveId(service.id)}
//                 className={`relative rounded-3xl cursor-pointer transition-all duration-300 border ${
//                   isActive 
//                     ? 'bg-black text-white border-black p-6 sm:p-8 shadow-xl' 
//                     : 'bg-transparent text-black border-neutral-200 hover:border-neutral-400 p-6 sm:py-7 sm:px-8'
//                 }`}
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
//                   {/* Left Number & Title */}
//                   <div className="md:col-span-5 flex items-center gap-6">
//                     <span className={`text-lg font-mono font-bold ${isActive ? 'text-neutral-400' : 'text-neutral-500'}`}>
//                       {service.id}
//                     </span>
//                     <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
//                       {service.title}
//                     </h3>
//                   </div>

//                   {/* Middle Description & Tech Tags */}
//                   <div className="md:col-span-5 space-y-3">
//                     <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isActive ? 'text-neutral-300' : 'text-neutral-600'}`}>
//                       {service.description}
//                     </p>
                    
//                     {/* Tech Badges */}
//                     <div className="flex flex-wrap gap-1.5 pt-1">
//                       {service.tags.map((tag, i) => (
//                         <span 
//                           key={i} 
//                           className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
//                             isActive 
//                               ? 'bg-neutral-800 text-neutral-300 border border-neutral-700' 
//                               : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
//                           }`}
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Right Arrow Button */}
//                   <div className="md:col-span-2 flex justify-end">
//                     <div className={`p-3 rounded-full transition-all ${
//                       isActive ? 'bg-white text-black' : 'border border-neutral-300 text-black'
//                     }`}>
//                       <ArrowUpRight size={20} />
//                     </div>
//                   </div>

//                 </div>

//                 {/* Floating Preview Image (Top-Right on Active State) */}
//                 <AnimatePresence>
//                   {isActive && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
//                       animate={{ opacity: 1, scale: 1, rotate: 6 }}
//                       exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
//                       transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                       className="hidden lg:block absolute -top-6 right-16 w-48 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white pointer-events-none z-20"
//                     >
//                       <img 
//                         src={service.image} 
//                         alt={service.title} 
//                         className="w-full h-full object-cover"
//                       />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Sparkles, Layers, CheckCircle2, MessageSquare } from 'lucide-react';

const servicesData = [
  {
    id: "01",
    title: "Website Design & Development",
    description: "I design and develop modern, responsive, and high-performance websites that look great on every device and deliver a seamless user experience.",
    detailedDescription: "Empower your brand with custom web solutions tailored for high performance, smooth interactivity, and aesthetic design. Focused on core web vitals, speed optimization, and cross-browser accessibility.",
    features: [
      "Responsive & Mobile-First Design",
      "SEO Friendly HTML Structural Hierarchy",
      "Interactive Framer Motion Animations",
      "Cross-Browser Testing & Speed Optimization"
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "02",
    title: "SaaS Product Development",
    description: "From idea to deployment, I build scalable SaaS applications with modern architecture, intuitive interfaces, authentication, dashboards, APIs, and database integration.",
    detailedDescription: "Complete end-to-end multi-tenant SaaS architecture designed for reliability, modern user onboarding, secure subscription handling, and robust backend logic.",
    features: [
      "User Authentication & Session Management",
      "Scalable MERN Architecture",
      "RESTful API Integration",
      "Database Schema Design & Security"
    ],
    tags: ["MERN Stack", "REST APIs", "Authentication", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "03",
    title: "Dashboard & Admin Panels",
    description: "I create powerful and intuitive dashboards that turn complex data into clear, actionable interfaces for businesses and SaaS products.",
    detailedDescription: "Transform raw data streams into insightful analytics dashboards. Built with customizable charts, dynamic filters, and secure role-based access controls.",
    features: [
      "Data Visualization & Dynamic Charts",
      "Role-Based Access Control (RBAC)",
      "Interactive Data Tables & Sorting",
      "CRUD Operations Setup"
    ],
    tags: ["Analytics", "Charts", "Data Tables", "Role-Based Access", "CRUD"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "04",
    title: "E-Commerce Development",
    description: "I build conversion-focused e-commerce experiences with product management, responsive storefronts, shopping flows, and scalable backend systems.",
    detailedDescription: "High-converting storefront designs featuring real-time inventory synchronization, smooth cart interactions, GraphQL API integration, and mobile checkout flows.",
    features: [
      "Shopify Storefront GraphQL Integration",
      "Live Cart State & Variant Pickers",
      "Headless E-Commerce Solutions",
      "Mobile Optimized Checkout Experience"
    ],
    tags: ["React", "Node.js", "MongoDB", "APIs"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "05",
    title: "Full-Stack Web Applications",
    description: "I develop complete full-stack applications with seamless frontend backend integration, secure APIs, database architecture, and reliable functionality.",
    detailedDescription: "Unified client and server architecture using Node.js, Express, and React. Built with clear separation of concerns, scalable codebases, and maintainable data models.",
    features: [
      "End-to-End MERN Integration",
      "Custom RESTful APIs & Middleware",
      "Database Modeling (MongoDB/Mongoose)",
      "State Management & Async Data Fetching"
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "06",
    title: "UI Development & Frontend",
    description: "I transform designs and ideas into pixel-focused, responsive interfaces with clean, reusable, and maintainable frontend code.",
    detailedDescription: "Translating Figma or design blueprints into high-performance React components with Tailwind CSS styling and smooth micro-interactions.",
    features: [
      "Pixel-Perfect UI Translation",
      "Reusable React Component Architecture",
      "Tailwind CSS Utility Styling",
      "Micro-Interactions & Hover States"
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "Component UI"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "07",
    title: "API & Backend Development",
    description: "I build secure and scalable backend systems, REST APIs, authentication systems, database integrations, and server side functionality.",
    detailedDescription: "Production-ready backend API servers engineered for security, structured JSON responses, JWT authentication headers, and database connectivity.",
    features: [
      "JWT Authentication & Password Hashing",
      "RESTful Endpoint Architecture",
      "Third-Party API Integrations",
      "Error Handling & Input Validation"
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "08",
    title: "Deployment & Optimization",
    description: "I help take applications from development to production with performance optimization, deployment, debugging, and production ready configurations.",
    detailedDescription: "Streamlining deployment workflows across cloud platforms like Vercel, Netlify, and Render, alongside Git version control best practices.",
    features: [
      "Vercel & Netlify Production Deployment",
      "Git Branching & CI/CD Setup",
      "Environment Variable Configuration",
      "Production Build & Asset Optimization"
    ],
    tags: ["Git", "GitHub", "Vercel", "Railway", "Performance"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState("01");
  const [modalService, setModalService] = useState(null);

  return (
    <section id="services" className="w-full bg-[#B20000] py-20 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 text-black shadow-2xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Layers size={14} className="text-[#B20000]" /> Capabilities & Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
            Services Provided
          </h2>
        </div>

        {/* --- MOBILE & TABLET HORIZONTAL SWIPE VIEW (< md) --- */}
        <div className="block md:hidden overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
          <div className="flex gap-4 w-max px-2">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="w-[82vw] max-w-[340px] snap-center bg-neutral-950 text-white rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl border border-neutral-800"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {service.id}
                    </span>
                    <button
                      onClick={() => setModalService(service)}
                      className="p-2 rounded-full bg-[#B20000] text-white hover:bg-red-700 transition-colors"
                      title="View Service Details"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setModalService(service)}
                    className="w-full py-2.5 rounded-xl bg-white text-black text-xs font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all"
                  >
                    Explore Service Details <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- DESKTOP ACCORDION VIEW (>= md) --- */}
        <div className="hidden md:flex flex-col space-y-4">
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
                <div className="grid grid-cols-12 gap-6 items-center">
                  
                  {/* Left Number & Title */}
                  <div className="col-span-5 flex items-center gap-6">
                    <span className={`text-lg font-mono font-bold ${isActive ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {service.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Middle Description & Tech Tags */}
                  <div className="col-span-5 space-y-3">
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

                  {/* Right Arrow Button (Opens Lightbox Modal) */}
                  <div className="col-span-2 flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalService(service);
                      }}
                      title="Open Service Details"
                      className={`p-3 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#B20000] text-white hover:bg-red-700 hover:scale-110' 
                          : 'border border-neutral-300 text-black hover:bg-neutral-100 hover:border-black'
                      }`}
                    >
                      <ArrowUpRight size={20} />
                    </button>
                  </div>

                </div>

                {/* Floating Hover/Active Preview Image */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      animate={{ opacity: 1, scale: 1, rotate: 6 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="hidden lg:block absolute -top-6 right-20 w-48 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white pointer-events-none z-20"
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

      {/* --- DETAILED SERVICE LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {modalService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setModalService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-white"
            >
              {/* Modal Top Header */}
              <div className="p-4 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#B20000] px-2.5 py-1 rounded-md bg-[#B20000]/10 border border-[#B20000]/20">
                    Service {modalService.id}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold">{modalService.title}</h4>
                </div>
                <button
                  onClick={() => setModalService(null)}
                  className="p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {modalService.detailedDescription}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-3">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B20000] flex items-center gap-1.5">
                    <Sparkles size={14} /> Deliverables & Scope
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-300">
                    {modalService.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 bg-neutral-950 p-3 rounded-xl border border-neutral-800">
                        <CheckCircle2 size={16} className="text-[#B20000] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {modalService.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono px-3 py-1 bg-neutral-950 text-neutral-300 rounded-lg border border-neutral-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between gap-4">
                <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                  Ready to start a project?
                </span>
                <a
                  href="#contact"
                  onClick={() => setModalService(null)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#B20000] text-white rounded-xl text-xs font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#B20000]/20"
                >
                  Inquire About This Service <MessageSquare size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}