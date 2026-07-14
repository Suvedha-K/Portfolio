"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFlask,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { BsMicrosoft } from "react-icons/bs";
import { Cloud, BarChart3, Brain, Sparkles, Database } from "lucide-react";

const CATEGORIES = [
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "SQL", Icon: SiMysql },
      { name: "Power BI", Icon: BarChart3 },
      { name: "Microsoft Excel", Icon: BsMicrosoft },
      { name: "Data Analysis", Icon: Database },
      { name: "Data Visualization", Icon: BarChart3 },
      { name: "Google Analytics", Icon: Database },
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning Fundamentals", Icon: Brain },
      { name: "Generative AI", Icon: Sparkles },
      { name: "Prompt Engineering", Icon: Sparkles },
      { name: "Azure AI Fundamentals", Icon: VscAzure },
      { name: "Cloud Computing", Icon: Cloud },
    ],
  },

  {
    title: "Development & Tools",
    icon: SiPython,
    skills: [
      { name: "Python Development", Icon: SiPython },
      { name: "Flask", Icon: SiFlask },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "JavaScript (Basic)", Icon: SiJavascript },
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "WordPress", Icon: BsMicrosoft },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          02_skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display text-3xl font-semibold sm:text-4xl"
        >
          Tools of the Trade
        </motion.h2>

        <div className="mt-14 space-y-14">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.title}>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.05 }}
                className="mb-5 flex items-center gap-2 text-ink-dim"
              >
                <cat.icon size={16} className="text-signal-cyan" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  {cat.title}
                </span>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="glass group flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(94,234,212,0.18)]"
                  >
                    <skill.Icon
                      size={26}
                      className="text-ink-dim transition-colors duration-300 group-hover:text-signal-cyan"
                    />
                    <span className="font-mono text-[11px] uppercase tracking-wide text-ink-dim group-hover:text-ink">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}