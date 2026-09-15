import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const devProcessSteps = [
  {
    num: "01",
    title: "Discover & Scope",
    subtitle: "PHASE ONE",
    desc: "Understanding the problem, defining goals, mapping project scope, and logic flow."
  },
  {
    num: "02",
    title: "Architecture",
    subtitle: "PHASE TWO",
    desc: "Database modeling with MongoDB, REST API design, and system logic planning."
  },
  {
    num: "03",
    title: "UI/UX Design",
    subtitle: "PHASE THREE",
    desc: "Creating responsive, accessible, and high-converting modern visual components."
  },
  {
    num: "04",
    title: "MERN Core Build",
    subtitle: "PHASE FOUR",
    desc: "Building scalable React frontends and secure Express/Node backend APIs."
  },
  {
    num: "05",
    title: "AI & Automation",
    subtitle: "PHASE FIVE",
    desc: "Integrating OpenAI models, custom workflows, smart bots, and automated tasks."
  },
  {
    num: "06",
    title: "Deploy & Scale",
    subtitle: "PHASE SIX",
    desc: "Cloud deployment, environment configuration, bug fixes, and maintenance."
  }
];

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-Rotate 6-Phase Cylinder Wheel every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % devProcessSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % devProcessSteps.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + devProcessSteps.length) % devProcessSteps.length);
  };

  return (
    <section id="experience" className="w-full bg-[#08080A] text-white py-24 px-6 sm:px-12 relative overflow-hidden">
      
      {/* Crimson Ambient Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] bg-[#B30000]/15 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* LEFT COLUMN: Clean Text */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono font-bold text-[#B30000] uppercase tracking-widest block">
            // EXPERIENCE & PHILOSOPHY
          </span>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Building Digital Solutions That <br />
            <span className="text-[#B30000]">Solve Real Problems</span>
          </h2>

          <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-white font-medium text-lg sm:text-xl">
              I have years of experience in solving problems by building solutions.
            </p>
            <p>
              I build modern digital solutions that go beyond simply creating websites. I focus on understanding the core problem, designing the right solution, building it cleanly, and making sure it works reliably in the real world.
            </p>
            <p>
              I create business websites, SaaS products, landing pages, e-commerce stores, dashboards, and full-stack web applications with modern technologies such as React, Tailwind CSS, Node.js, Express.js, MongoDB, and APIs.
            </p>
            <p>
              I also work on AI integration and automation, helping businesses automate repetitive tasks, add AI-powered features, build intelligent chatbots, connect APIs, and create smarter customer experiences.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: 6-Phase Oval Rotating Wheel */}
        <div 
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Circular Frame */}
          <div className="w-full h-[480px] relative overflow-hidden rounded-[40px] border-2 border-[#B30000]/40 bg-[#0D0D12] shadow-2xl flex items-center justify-center">
            
            {/* Oval Track */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 w-full px-4">
              {devProcessSteps.map((item, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + devProcessSteps.length) % devProcessSteps.length;
                const isNext = index === (currentIndex + 1) % devProcessSteps.length;

                if (!isActive && !isPrev && !isNext) return null;

                return (
                  <motion.div
                    key={item.num}
                    layout
                    onClick={() => setCurrentIndex(index)}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{
                      scale: isActive ? 1 : 0.75,
                      opacity: isActive ? 1 : 0.45,
                      rotateY: isActive ? 0 : isPrev ? -25 : 25,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`cursor-pointer shrink-0 rounded-[100px] p-6 flex flex-col items-center justify-between text-center transition-all duration-500 relative border-2 ${
                      isActive
                        ? 'w-[210px] h-[380px] bg-[#B30000] border-[#D90000] shadow-2xl shadow-[#B30000]/50 text-white z-20'
                        : 'w-[140px] h-[290px] bg-[#14141C] border-neutral-800 text-neutral-400 z-10 hover:border-[#B30000]/50'
                    }`}
                  >
                    {/* Phase Badge */}
                    <div className="w-full flex justify-center pt-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        isActive ? 'bg-black text-white' : 'bg-neutral-900 text-[#B30000]'
                      }`}>
                        {item.subtitle}
                      </span>
                    </div>

                    {/* Step Number & Title */}
                    <div className="my-auto space-y-1">
                      <span className={`font-black tracking-tighter block leading-none ${
                        isActive ? 'text-7xl text-white' : 'text-5xl text-neutral-500'
                      }`}>
                        {item.num}
                      </span>
                      {isActive && (
                        <h3 className="font-extrabold text-base tracking-tight text-white pt-2">
                          {item.title}
                        </h3>
                      )}
                    </div>

                    {/* Description */}
                    {isActive ? (
                      <p className="text-[11px] text-neutral-100 font-medium leading-tight pb-2 px-2">
                        {item.desc}
                      </p>
                    ) : (
                      <span className="text-[10px] font-mono text-neutral-500 uppercase pb-2">
                        {item.title}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              type="button"
              className="p-3 rounded-full bg-[#14141A] border border-neutral-800 text-white hover:bg-[#B30000] hover:border-[#B30000] transition-colors shadow-md"
            >
              <ChevronUp size={20} />
            </button>

            <span className="text-xs font-mono font-bold text-neutral-400 tracking-widest">
              STEP 0{currentIndex + 1} / 0{devProcessSteps.length}
            </span>

            <button
              onClick={handleNext}
              type="button"
              className="p-3 rounded-full bg-[#14141A] border border-neutral-800 text-white hover:bg-[#B30000] hover:border-[#B30000] transition-colors shadow-md"
            >
              <ChevronDown size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}