"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CERTS = [
  {
    name: "NPTEL – Design Innovation and technology",
    org: "IIT Bombay (nptel)",
    year: "2025",
  },
  {
    name: "NPTEL – Human Behaviour (Elite)",
    org: "IIT Guwahait (NPTEL)",
    year: "2025",
  },
  {
    name: "IBM SkillsBuild – AI Fundamentals",
    org: "IBM",
    year: "2025",
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    org: "Microsoft",
    year: "2025",
  },
  {
    name: "Microsoft Generative AI",
    org: "Microsoft",
    year: "2025",
  },
  {
    name: "Google Analytics Certification",
    org: "Google",
    year: "2025",
  },
  {
    name: "Data Analysis with python",
    org: "Freecodecamp",
    year: 2026

  },
  {
    name: "Cisco Data Science",
    org: "Cisco",
    year: "2025",
  },
  {
    name: "Tata – Empowering Business with Data Visualisation",
    org: "Forage",
    year: "2025",
  },
  {
    name: "Academy Europe – Cloud Computing Certification Program",
    org: "Academy Europe",
    year: "2025",
  },
  {
    name: "Forage Virtual Experience Programs",
    org: "Forage",
    year: "2025",
  },
  {
    name: "Microsoft Azure Cloud Skills",
    org: "Microsoft",
    year: "2025",
  },
  {
    name: "Building with bedrock/LLM",
    org: "Anthropic",
    year: "2025",
  },
  {
    name: "Hospital Internship – Nethra Guard (Dristi App) & Post-Operative Patient Care",
    org: "Aravind Eye hospital Puducherry",
    year: "2024",
  },
  {
    name: "Full-Stack Development Internship",
    org: "Alfrin technologies Puducherry",
    year: "2025",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          04_certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 mb-14 font-display text-3xl font-semibold sm:text-4xl"
        >
          Credentials &amp; learning
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8, rotateX: 2 }}
              className="glass group relative flex flex-col justify-between rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_10px_40px_rgba(139,124,246,0.18)]"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-signal-cyan/10 ring-1 ring-signal-cyan/30">
                  <Award size={18} className="text-signal-cyan" />
                </div>
                <h3 className="font-display text-base font-medium leading-snug">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm text-ink-dim">{cert.org}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-mono text-xs text-ink-faint">
                  {cert.year}
                </span>
                <ExternalLink
                  size={14}
                  className="text-ink-faint transition-colors group-hover:text-signal-cyan"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
