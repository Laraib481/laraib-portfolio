import React from 'react';
import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden pt-16 pb-12 px-6 sm:px-12 md:px-20 font-sans border-t border-neutral-900">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-16">
          
          {/* Left Column: Quote & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
              "Crafting digital experiences with precision & passion."
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Turning complex logic into seamless, modern web applications. Always learning, building, and innovating.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
              /Quick links
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white rounded-lg transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact & Social Profiles */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
              /Connect
            </h4>
            
            <div className="space-y-3">
              <a
                href="mailto:laraib15869@gmail.com"
                className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-neutral-500" />
                <span>laraib15869@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                {/* GitHub */}
                <a
                  href="https://github.com/Laraib481"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="www.linkedin.com/in/laraib-sarwar-a248a2379"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.48 1.48 0 1 0 0 2.95 1.48 1.48 0 0 0 0-2.95Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-8 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
          <p>© {new Date().getFullYear()} Laraib. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={13} className="text-red-500 fill-current inline" /> using React & Tailwind
          </p>
        </div>
      </div>

      {/* Large Background Watermark Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 w-full text-center">
        <h1 className="text-[14vw] font-black uppercase text-neutral-800/20 tracking-tighter leading-none opacity-80 blur-[1px]">
          LARAIB
        </h1>
      </div>
    </footer>
  );
}