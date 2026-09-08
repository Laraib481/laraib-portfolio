import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TextSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const fullText = "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";
  const words = fullText.split(" ");

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-[#B20000]">
      {/* Sticky Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.35] text-white flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]">
            {words.map((word, index) => {
              // Ensure start and revealPoint never exceed 1.0
              const start = index / words.length;
              const revealPoint = Math.min(start + 0.08, 1);

              return (
                <Word 
                  key={index} 
                  word={word} 
                  progress={scrollYProgress} 
                  start={start}
                  revealPoint={revealPoint}
                />
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

function Word({ word, progress, start, revealPoint }) {
  // If start is equal to revealPoint (at the very end), ensure valid range
  const safeStart = start >= 1 ? 0.99 : start;

  const filter = useTransform(
    progress, 
    [0, safeStart, revealPoint, 1], 
    ['blur(12px)', 'blur(12px)', 'blur(0px)', 'blur(0px)']
  );

  const opacity = useTransform(
    progress, 
    [0, safeStart, revealPoint, 1], 
    [0.2, 0.2, 1, 1]
  );

  return (
    <motion.span
      style={{ 
        filter, 
        opacity,
        color: '#FFFFFF'
      }}
      className="inline-block select-none"
    >
      {word}
    </motion.span>
  );
}