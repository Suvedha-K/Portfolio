"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Download, FolderGit2, Mail, ChevronDown } from "lucide-react";
import { useTypewriter } from "./useTypewriter";
import MagneticButton from "./MagneticButton";
import PhotoOrb from "./PhotoOrb";

const NeuralBackground = dynamic(() => import("./NeuralBackground"), {
  ssr: false,
});

const ROLES = [
  "Aspiring Data Analyst",
  "Information Science Student",
  "Python & SQL Learner",
  "Machine Learning Enthusiast",
  "Generative AI Learner",
  "Cloud Computing Learner",
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <NeuralBackground />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label mb-5"
          >
            hello_world.init()
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Hello <span className="inline-block">👋</span> I&apos;m{" "}
            <span className="text-gradient">Suvedha K</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-8 font-mono text-lg text-signal-cyan sm:text-xl"
          >
            {typed}
            <span className="terminal-cursor h-5 translate-y-0.5" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-dim sm:text-lg"
          >
            I&apos;m Suvedha K, a third-year Information Science & Engineering student passionate about Data Analytics and Artificial Intelligence. I enjoy building real-world projects using Python, SQL, Excel, Power BI, and Flask while continuously improving my skills through certifications, internships, and hands-on learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <MagneticButton href="/resume.pdf" download="Suvedha_Resume.pdf" variant="solid">
              <Download size={14} /> Download Resume
            </MagneticButton>
            <MagneticButton href="#projects" variant="outline">
              <FolderGit2 size={14} /> View Projects
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              <Mail size={14} /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-ink-faint"
          >
            <span>ISE Student</span>
            <span className="h-1 w-1 rounded-full bg-ink-faint" />
            <span>Pondicherry Technological University</span>
          </motion.div>
        </div>

        <PhotoOrb />
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-faint sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          scroll
        </span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}