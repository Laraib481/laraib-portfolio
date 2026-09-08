import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Certifcates', href: '#certificates' },
  ];

  return (
    <>
      {/* Tap outside overlay to close menu on small screens */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs md:hidden" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Fixed Positioning with Safe Mobile Spacing */}
      <div className="fixed top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 z-50">
        <motion.div 
          layout
          className="bg-black text-white rounded-2xl p-2 sm:p-2.5 md:px-4 md:py-2.5 shadow-2xl border border-neutral-800 w-auto min-w-0 md:min-w-[200px]"
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div className="flex items-center justify-between gap-2.5 sm:gap-3 md:gap-6">
            <span className="font-bold text-xs sm:text-sm md:text-base tracking-wide text-white pl-1 md:pl-0 select-none">
              Laraib
            </span>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 sm:p-1.5 hover:bg-neutral-800 rounded-xl transition-colors text-neutral-300 hover:text-white cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <>
                  {/* Mobile/Tablet: Clean 3-lines menu icon */}
                  <Menu className="w-4 h-4 md:hidden" />
                  {/* Desktop: Original MoreHorizontal icon */}
                  <MoreHorizontal className="w-5 h-5 hidden md:block" />
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 md:mt-3 flex flex-col gap-0.5 md:gap-1 overflow-hidden border-t border-neutral-800 pt-2 md:pt-3"
              >
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-2.5 py-1.5 md:px-3 md:py-2 text-xs md:text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/80 rounded-lg md:rounded-xl transition-all whitespace-nowrap block"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}