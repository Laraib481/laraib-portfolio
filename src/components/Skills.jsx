import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Bot, 
  Globe, 
  Palette, 
  Layers, 
  Server, 
  CloudUpload, 
  Cpu, 
  Wrench, 
  Plus, 
  Minus 
} from 'lucide-react';

const skillCategories = [
  {
    id: "frontend",
    title: "Front-End Development",
    icon: Code2,
    skills: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Vite", 
      "Tailwind CSS", "Responsive Web Design", "Component-Based Architecture", 
      "State Management", "React Hooks", "Forms & Validation", 
      "API Integration", "UI/UX Implementation", "Performance Optimization", 
      "Cross-Browser Compatibility"
    ]
  },
  {
    id: "backend",
    title: "Back-End Development",
    icon: Server,
    skills: [
      "Node.js", "Express.js", "REST APIs", "API Architecture", 
      "Authentication", "Authorization", "JWT", "OTP Verification", 
      "Password Hashing", "Middleware", "Error Handling", 
      "Server-Side Logic", "API Security", "CORS", 
      "Environment Variables", "Third-Party API Integration"
    ]
  },
  {
    id: "database",
    title: "Database Management",
    icon: Database,
    skills: [
      "MongoDB", "MongoDB Atlas", "Mongoose", "MySQL", "SQL", 
      "Database Design", "CRUD Operations", "Data Modeling", 
      "Schema Design", "Relationships", "Query Optimization", "Database Security"
    ]
  },
  {
    id: "devops",
    title: "Deployment & DevOps",
    icon: CloudUpload,
    skills: [
      "Git", "GitHub", "Version Control", "Vercel", "Netlify", 
      "Deployment Configuration", "Environment Variables", "Production Builds", 
      "CI/CD Fundamentals", "Server Configuration", "API Deployment", 
      "Frontend & Backend Deployment", "Debugging Production Issues", "Deployment Troubleshooting"
    ]
  },
  {
    id: "ai-automation",
    title: "AI Automation & Integration",
    icon: Bot,
    skills: [
      "LLM Integration", "OpenAI API", "AI-Powered Websites", "AI Chatbots", 
      "AI Agents", "AI Automation", "Prompt Engineering", "AI Workflow Automation", 
      "API-Based AI Integration", "Conversational AI", "AI Customer Support", 
      "AI Lead Generation", "AI Content Automation", "Voice AI Integration", 
      "WhatsApp AI Automation", "AI Business Solutions"
    ]
  },
  {
    id: "uiux",
    title: "UI/UX & Web Design",
    icon: Palette,
    skills: [
      "Figma", "UI Design", "UX Principles", "Wireframing", "Prototyping", 
      "Design Systems", "Responsive Design", "Landing Page Design", 
      "Website Redesign", "Modern UI", "Glassmorphism", "Component Design", 
      "User-Friendly Interfaces", "Mobile-First Design"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    icon: Globe,
    skills: [
      "Shopify", "Shopify Storefront", "Shopify Store Customization", 
      "Storefront API", "GraphQL", "Headless Shopify", "Product Management", 
      "E-Commerce UI", "Shopping Cart", "Checkout Integration", 
      "Responsive E-Commerce", "WordPress", "WooCommerce"
    ]
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    icon: Layers,
    skills: [
      "MERN Stack", "React", "Node.js", "Express.js", "MongoDB", 
      "REST APIs", "Authentication", "Frontend–Backend Integration", 
      "Database Integration", "Full-Stack Architecture", "CRUD Applications", 
      "Deployment", "Production Debugging"
    ]
  },
  {
    id: "problem-solving",
    title: "Problem Solving & Software Engineering",
    icon: Cpu,
    skills: [
      "Problem Solving", "Logical Thinking", "Debugging", "Code Optimization", 
      "Algorithmic Thinking", "Data Structures Fundamentals", "OOP Concepts", 
      "Software Architecture", "Clean Code", "Modular Development", 
      "Error Handling", "Troubleshooting", "Analytical Thinking"
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Workflow",
    icon: Wrench,
    skills: [
      "VS Code", "Git", "GitHub", "npm", "Postman", "Chrome DevTools", 
      "REST API Testing", "JSON", "Environment Configuration", 
      "Debugging Tools", "Package Management", "Documentation"
    ]
  }
];

export default function SkillsMatrix() {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="skills" className="w-full bg-[#08080A] text-white py-24 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Background Red Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B30000]/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-6">

        {/* Title */}
        <div className="border-b border-neutral-800 pb-6 mb-8">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Skills <span className="text-[#B30000]">&</span> Expertise
          </h2>
        </div>

        {/* Accordion Categories */}
        <div className="space-y-4">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isOpen = openCategoryId === cat.id;

            return (
              <div
                key={cat.id}
                className="rounded-3xl overflow-hidden border-2 transition-all duration-300 shadow-2xl bg-[#B30000] border-[#D90000] hover:border-white"
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors bg-[#B30000] hover:bg-[#A00000]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-black text-white shadow-md">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="p-2.5 rounded-full bg-black text-white shadow-md">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {/* Big Clean Skill Pills */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="bg-[#0D0D11] border-t-2 border-[#D90000]"
                    >
                      <div className="p-6 sm:p-8 flex flex-wrap gap-3">
                        {cat.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-sm sm:text-base font-bold px-5 py-3 rounded-2xl bg-black text-white border-2 border-[#B30000] hover:bg-[#B30000] transition-all shadow-md tracking-wide"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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