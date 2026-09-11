import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import myFrontImage from '../assets/front-image.jpeg';

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const view1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const view1Y = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const view1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const view1Blur = useTransform(scrollYProgress, [0, 0.3], ['blur(0px)', 'blur(12px)']);

  const view2Opacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const view2Y = useTransform(scrollYProgress, [0.35, 0.65], [30, 0]);

  const imageWidth = useTransform(scrollYProgress, [0, 0.65], ['120px', '360px']);
  const imageHeight = useTransform(scrollYProgress, [0, 0.65], ['150px', '450px']);
  const imageY = useTransform(scrollYProgress, [0, 0.65], ['140px', '0px']);
  const rotateY = useTransform(scrollYProgress, [0.1, 0.6], [0, 180]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Target Anchor placed exactly at 50% scroll height of this section */}
      <div id="about" className="absolute top-[120vh] left-0 w-full h-1 pointer-events-none" />

      <div className="sticky top-4 sm:top-6 mx-auto max-w-6xl px-3 sm:px-4">
        <div className="bg-[#F3F2EE] rounded-[28px] sm:rounded-[40px] h-[92vh] sm:h-[88vh] min-h-[620px] p-4 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl border border-neutral-300/80 flex flex-col justify-between">

          {/* SCREEN 1 */}
          <motion.div
            style={{ 
              opacity: view1Opacity, 
              y: view1Y,
              scale: view1Scale,
              filter: view1Blur
            }}
            className="absolute inset-x-0 top-4 sm:top-8 px-4 sm:px-6 md:px-12 flex flex-col items-center z-10 pointer-events-none transition-all duration-75"
          >
            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-tighter text-black uppercase text-center leading-[0.9] sm:leading-[0.88] mt-2 sm:mt-8 select-none">
              SOFTWARE<br />Developer
            </h1>
          </motion.div>

          {/* SCREEN 2 */}
          <motion.div
            style={{ opacity: view2Opacity, y: view2Y }}
            className="w-full h-full flex flex-col justify-between md:grid md:grid-cols-12 gap-2 md:gap-8 items-stretch md:items-end z-20 pt-6 md:pt-0"
          >
            <div className="md:col-span-4 space-y-1 sm:space-y-3">
              <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-[10px] sm:text-xs font-semibold text-neutral-600">
                About Me
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-black">
                Hey!
              </h2>
              <p className="text-xs sm:text-sm font-medium text-neutral-700 leading-snug sm:leading-relaxed max-w-xs">
                I'm Laraib, a MERN Stack Developer and Problem Solver, passionate about turning ideas into modern, high performing web experiences.
              </p>
            </div>

            <div className="h-36 sm:h-48 md:hidden" />
            <div className="hidden md:block md:col-span-4" />

            <div className="md:col-span-4 space-y-2 sm:space-y-4 text-xs sm:text-sm font-medium text-neutral-700 leading-relaxed bg-white/40 md:bg-transparent p-3 sm:p-0 rounded-xl backdrop-blur-xs md:backdrop-blur-none border border-black/5 md:border-none">
              <p>
                I build SaaS products, business websites, e-commerce platforms, and scalable full-stack applications using React, Node.js, Express, and MongoDB.
              </p>
              <p className="hidden sm:block">
                From turning an idea into a working product to solving complex development challenges, I love building things that make an impact.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/in/laraib-sarwar-a248a2379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#0077B5] hover:bg-[#005E93] text-white rounded-full text-xs font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Laraib481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-black hover:bg-neutral-800 text-white rounded-full text-xs font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* TRANSFORMING IMAGE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 [perspective:1000px]">
            <motion.div
              style={{
                width: imageWidth,
                height: imageHeight,
                y: imageY,
                rotateY: rotateY,
              }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black border-2 border-black/10 [transform-style:preserve-3d] max-w-[170px] max-h-[220px] sm:max-w-[260px] sm:max-h-[320px] md:max-w-none md:max-h-none"
            >
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                <img src={myFrontImage} alt="Front View" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <img src={myFrontImage} alt="Back View" className="w-full h-full object-cover saturate-125 brightness-95" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}