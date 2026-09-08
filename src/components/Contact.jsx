import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch("https://formspree.io/f/xjyvaglk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.project,
          _replyto: formData.email,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', project: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="w-full bg-white text-[#0A0A0A] py-20 px-6 sm:px-12 md:px-20 font-sans border-t border-neutral-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Text & Social Icons */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-7xl font-black tracking-tight leading-none text-[#0A0A0A]">
              Let’s talk.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-medium max-w-md">
              Have a project or need help? Fill out the form, and we'll get back to you soon.
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-3 pt-6">
            
            {/* GitHub */}
            <a
              href="https://github.com/Laraib481"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-11 h-11 bg-[#E2DFD8] border border-[#D0CDC5] rounded-xl flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/laraib-sarwar-a248a2379"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-11 h-11 bg-[#E2DFD8] border border-[#D0CDC5] rounded-xl flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.48 1.48 0 1 0 0 2.95 1.48 1.48 0 0 0 0-2.95Z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:laraib15869@gmail.com"
              title="Email"
              className="w-11 h-11 bg-[#E2DFD8] border border-[#D0CDC5] rounded-xl flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <Mail size={18} />
            </a>

          </div>
        </div>

        {/* Right Form Card */}
        <div className="md:col-span-6">
          <div className="bg-[#0D0D0D] text-white p-6 sm:p-8 rounded-[28px] shadow-2xl border border-neutral-800">
            
            {status.success ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle size={48} className="text-green-500" />
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-xs text-neutral-400">Thanks for reaching out. Email will be sent to laraib15869@gmail.com shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-300 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#141414] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-300 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#141414] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                {/* Message / Project Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-300 tracking-wide">
                    Your Project
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full bg-[#141414] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                  />
                </div>

                {status.error && (
                  <p className="text-xs text-red-500 font-semibold">Something went wrong. Please check your Formspree Form ID.</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-3.5 px-6 bg-white text-[#0A0A0A] font-bold text-sm rounded-xl hover:bg-neutral-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50"
                >
                  {status.loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>Submit <Send size={14} /></>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}