// import React from 'react';
// import { Mail, Phone, MessageCircle } from 'lucide-react';

// export default function Footer() {
//   const quickLinks = [
//     { name: 'Services', href: '#services' },
//     { name: 'Works', href: '#projects' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <footer className="relative bg-[#0A0A0A] text-white overflow-hidden pt-16 pb-12 px-6 sm:px-12 md:px-20 font-sans border-t border-neutral-900">
//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-10">
          
//           {/* Left Column: Quote, Tagline & Social Links */}
//           <div className="md:col-span-5 space-y-6">
//             <div className="space-y-3">
//               <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
//                 "Crafting digital experiences with precision & passion."
//               </h3>
//               <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
//                 Turning complex logic into seamless, modern web applications. Always learning, building, and innovating.
//               </p>
//             </div>

//             {/* GitHub & LinkedIn Links */}
//             <div className="flex items-center gap-3 pt-2">
//               <a
//                 href="https://github.com/Laraib481"
//                 target="_blank"
//                 rel="noreferrer"
//                 title="GitHub Profile"
//                 className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-300"
//               >
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                 </svg>
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/laraib-sarwar-a248a2379"
//                 target="_blank"
//                 rel="noreferrer"
//                 title="LinkedIn Profile"
//                 className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-300"
//               >
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.48 1.48 0 1 0 0 2.95 1.48 1.48 0 0 0 0-2.95Z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Middle Column: Quick Links */}
//           <div className="md:col-span-3 space-y-4">
//             <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
//               / Quick Links
//             </h4>
//             <div className="flex flex-col space-y-2">
//               {quickLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-sm font-medium text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Contact Information */}
//           <div className="md:col-span-4 space-y-4">
//             <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
//               / Contact Information
//             </h4>
            
//             <div className="space-y-3">
//               <a
//                 href="mailto:laraib15869@gmail.com"
//                 className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
//               >
//                 <Mail size={16} className="text-neutral-400" />
//                 <span>laraib15869@gmail.com</span>
//               </a>

//               <a
//                 href="tel:+923496015869"
//                 className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
//               >
//                 <Phone size={16} className="text-neutral-400" />
//                 <span>+92 349 6015869</span>
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Rights Row (Border Removed) */}
//         <div className="pt-4 flex items-center justify-between text-xs text-neutral-500 font-medium">
//           <p>© {new Date().getFullYear()} Laraib. All rights reserved.</p>
//         </div>
//       </div>

//       {/* Large Background Watermark Text */}
//       <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 w-full text-center">
//         <h1 className="text-[14vw] font-black uppercase text-neutral-500/25 tracking-tighter leading-none">
//           LARAIB
//         </h1>
//       </div>

//       {/* Floating WhatsApp Popup */}
//       <a
//         href="https://wa.me/923496015869"
//         target="_blank"
//         rel="noreferrer"
//         title="Chat on WhatsApp"
//         className="fixed bottom-6 right-6 z-50 p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-bounce"
//       >
//         <MessageCircle size={26} className="fill-current" />
//       </a>
//     </footer>
//   );
// }

import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden pt-16 pb-12 px-6 sm:px-12 md:px-20 font-sans border-t border-neutral-900">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-10">
          
          {/* Left Column: Quote, Tagline & Social Links */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                "Crafting digital experiences with precision & passion."
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Turning complex logic into seamless, modern web applications. Always learning, building, and innovating.
              </p>
            </div>

            {/* GitHub & LinkedIn Links */}
            <div className="flex items-center gap-3 pt-2">
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

              <a
                href="https://www.linkedin.com/in/laraib-sarwar-a248a2379"
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

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              / Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Information */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              / Contact Information
            </h4>
            
            <div className="space-y-3">
              <a
                href="mailto:laraib15869@gmail.com"
                className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-neutral-400" />
                <span>laraib15869@gmail.com</span>
              </a>

              <a
                href="tel:+923496015869"
                className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-neutral-400" />
                <span>+92 349 6015869</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-4 flex items-center justify-between text-xs text-neutral-500 font-medium">
          <p>© {new Date().getFullYear()} Laraib. All rights reserved.</p>
        </div>
      </div>

      {/* Large Background Watermark Text */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 w-full text-center">
        <h1 className="text-[14vw] font-black uppercase text-neutral-500/25 tracking-tighter leading-none">
          LARAIB
        </h1>
      </div>

      {/* Floating Direct Email Popup */}
      <a
        href="mailto:laraib15869@gmail.com"
        title="Send an Email"
        className="fixed bottom-6 right-6 z-50 p-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-bounce"
      >
        <Mail size={24} />
      </a>
    </footer>
  );
}