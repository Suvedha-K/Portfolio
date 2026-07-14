"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsSubmitting(true);

    try {
      const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwSxCaqqzTA4ODEPxTlACJsbBnBd5k4LGgq5nwlyUG9EoiL-8eUaZ18YotdNI-RyE7k/exec";

      await fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setStatus('Awesome! Message sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      
      {/* Main Grid Wrapper */}
      <div className="mx-auto max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* ==================== LEFT COLUMN: TEXT & DETAILS ==================== */}
        <div className="md:col-span-6 flex flex-col justify-center pr-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#4ae5ca]">
            // 08_contact
          </p>
          
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl text-white">
            Let&apos;s build <span className="text-[#4ae5ca]">together</span>
          </h2>
          
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-md">
            Have an exciting project, a database layout to optimize, or simply want to say hello? Drop a line and let&apos;s talk shop.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[#4ae5ca]/30 flex items-center justify-center text-[#4ae5ca] text-xs">✓</span>
              <span>Available for freelance &amp; full-time contracts.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[#4ae5ca]/30 flex items-center justify-center text-[#4ae5ca] text-xs">✓</span>
              <span>Quick response rate (usually within 24 hours).</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[#4ae5ca]/30 flex items-center justify-center text-[#4ae5ca] text-xs">✓</span>
              <a href="mailto:suvedha.work@gmail.com" className="hover:text-[#4ae5ca] transition-colors">suvedha.work@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* ==================== RIGHT COLUMN: EXPANDED FORM & BUTTON ==================== */}
        <div className="md:col-span-6 flex flex-col items-center justify-center gap-6">
          
          {/* Form Card */}
          <div className="glass glow-border w-full max-w-lg rounded-2xl p-8 bg-slate-900/60 backdrop-blur-md border border-white/10 flex flex-col justify-between min-h-[520px]">
            {/* Added id="contact-form" to link with the external button */}
            <form 
              id="contact-form" 
              onSubmit={handleSubmit} 
              className="flex flex-col gap-5 h-full justify-between"
            >
              
              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-white/10 bg-[#0a0c10]/80 text-white placeholder-slate-500 focus:border-[#4ae5ca] outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-white/10 bg-[#0a0c10]/80 text-white placeholder-slate-500 focus:border-[#4ae5ca] outline-none transition-all"
                />
              </div>

              {/* Subject Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-white/10 bg-[#0a0c10]/80 text-white placeholder-slate-500 focus:border-[#4ae5ca] outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-white/10 bg-[#0a0c10]/80 text-white placeholder-slate-500 focus:border-[#4ae5ca] outline-none resize-none transition-all"
                />
              </div>

            </form>
          </div>

          {/* Glowing Submit Button (Linked using form="contact-form") */}
          <button 
            form="contact-form"
            type="submit" 
            disabled={isSubmitting}
            className={`flex items-center gap-2 px-10 py-3 font-bold font-mono text-xs tracking-wider rounded-full uppercase transition-all duration-300 ${
              isSubmitting 
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                : 'bg-[#4ae5ca] text-[#0a0c10] shadow-[0_0_15px_rgba(74,229,202,0.3)] hover:shadow-[0_0_25px_rgba(74,229,202,0.6)] hover:-translate-y-[1px]'
            }`}
          >
            {isSubmitting ? '⏳ Sending...' : '✉ Send Message'}
          </button>

          {/* Submission Feedback Status */}
          {status && (
            <p className={`font-mono text-[11px] mt-1 ${status.includes('Awesome') ? 'text-[#4ae5ca]' : 'text-rose-400'}`}>
              {status}
            </p>
          )}

        </div>

      </div>
    </section>
  );
}