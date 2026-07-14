"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, LayoutGrid } from "lucide-react";

const PROJECTS = [
  {
    name: "AI Job Market Analysis",
    tagline: "Data Analytics & Visualization",
    description:
      "Analyzed AI job market data using Python, SQL, Excel, and Power BI to identify hiring trends, in-demand skills, salary patterns, and job distributions through interactive dashboards.",
    features: [
      "Data cleaning and preprocessing",
      "Interactive Power BI dashboards",
      "Salary and skills trend analysis",
    ],
    tech: ["Python", "SQL", "Excel", "Power BI"],
    github: "https://github.com/Suvedha-K/Ai-job-analyser",
    demo: "#",
  },
  {
    name: "DataNova",
    tagline: "Data Analytics Web Application",
    description:
      "Developed a Flask-based web application that enables users to upload datasets, perform basic data analysis, and visualize insights through an easy-to-use interface.",
    features: [
      "Dataset upload and processing",
      "Basic data analysis",
      "Interactive visualizations",
    ],
    tech: ["Python", "Flask", "SQLAlchemy", "HTML", "CSS"],
    github: "https://github.com/Suvedha-K/datanova-app",
    demo: "https://datanova-app.onrender.com/",
  },
  {
    name: "Finance Tracker",
    tagline: "Personal Expense Management",
    description:
      "Built a finance tracking application using Flask and SQLite to help users record, categorize, and monitor daily income and expenses with a simple interface.",
    features: [
      "Income and expense management",
      "Expense categorization",
      "Financial summary dashboard",
    ],
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    name: "Support Ticket Search System",
    tagline: "Intelligent Ticket Search",
    description:
      "Created a support ticket search application using TF-IDF text matching to retrieve relevant tickets efficiently and improve information search.",
    features: [
      "TF-IDF based search",
      "Keyword matching",
      "Fast ticket retrieval",
    ],
    tech: ["Python", "Flask", "TF-IDF", "SQLite"],
    github: "#",
    demo: "#",
  },
];

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -py * 6, y: px * 6 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      className="tilt glass group flex flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-signal-cyan/10 via-signal-violet/10 to-transparent">
        <LayoutGrid
          size={40}
          className="text-ink-faint/40 transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          preview
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-semibold">{project.name}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-signal-cyan/80">
          {project.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-dim">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-xs text-ink-dim"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-cyan" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-ink/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-dim"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex gap-3">
          <a
            href={project.github}
            data-cursor-hover
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 py-2.5 font-mono text-xs uppercase tracking-wide text-ink-dim transition-colors hover:border-signal-cyan/50 hover:text-signal-cyan"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={project.demo}
            data-cursor-hover
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-signal-cyan/10 py-2.5 font-mono text-xs uppercase tracking-wide text-signal-cyan ring-1 ring-signal-cyan/30 transition-colors hover:bg-signal-cyan/20"
          >
            <ExternalLink size={14} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          05_projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 mb-14 font-display text-3xl font-semibold sm:text-4xl"
        >
          Selected work
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
