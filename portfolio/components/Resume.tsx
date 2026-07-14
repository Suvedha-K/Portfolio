"use client";

import { motion } from "framer-motion";
import { FileText, Download, CheckCircle2 } from "lucide-react";
import MagneticButton from "./MagneticButton";

const SKILLS_HIGHLIGHT = [
  "Data Analytics & Visualization (Power BI, Excel)",
  "Database Querying & Management (SQL)",
  "Programming & Scripting (Python, JS)",
  "Backend Development & APIs (Flask)",
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-32 flex items-center min-h-screen">
      <div className="mx-auto max-w-6xl w-full px-6">
        
        {/* Responsive Grid layout to fill up the empty left and right sides */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Heading and Skills Highlight */}
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              07_resume
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-4 font-display text-3xl font-semibold sm:text-4xl text-white"
            >
              One page, <span className="text-gradient">full picture</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-lg text-ink-dim text-base sm:text-lg leading-relaxed"
            >
              A concise summary of my skills, projects, education, and certifications —
              ready to download as a PDF.
            </motion.p>

            {/* Core Tech Highlights */}
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-4"
            >
              {SKILLS_HIGHLIGHT.map((skill, index) => (
                <li key={index} className="flex items-start gap-3 text-ink-dim">
                  <CheckCircle2 size={18} className="text-signal-cyan shrink-0 mt-1" />
                  <span className="text-sm font-mono tracking-wide">{skill}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right Column: PDF Card + Magnetic Button */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -6 }}
              className="glass glow-border flex aspect-[4/5] w-full max-w-xs flex-col items-center justify-center gap-4 rounded-2xl"
            >
              <FileText size={44} className="text-signal-cyan" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink-dim">
                resume.pdf
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex justify-center"
            >
              <MagneticButton href="/resume.pdf" variant="solid">
                <Download size={14} /> Download Resume
              </MagneticButton>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}