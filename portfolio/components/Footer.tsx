"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/Suvedha-K" },
  { icon: Linkedin, href: "https://linkedin.com/in/suvedha-k" },
  { icon: Mail, href: "mailto:suvedha521@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-lg font-medium">
            Suvedha<span className="text-signal-cyan">.</span>K
          </p>
          <p className="mt-1 font-mono text-[11px] text-ink-faint">
            Aspiring Data Analyst | Turning Data into Meaningful Insights.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor-hover
                className="font-mono text-xs uppercase tracking-wider text-ink-dim hover:text-signal-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="rounded-full border border-ink/10 p-2.5 text-ink-dim transition-colors hover:border-signal-cyan/50 hover:text-signal-cyan"
            >
              <Icon size={15} />
            </a>
          ))}
          <motion.a
            href="#home"
            data-cursor-hover
            whileHover={{ y: -3 }}
            className="rounded-full bg-signal-cyan/10 p-2.5 text-signal-cyan ring-1 ring-signal-cyan/30"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </motion.a>
        </div>
      </div>

      <p className="mt-10 text-center font-mono text-[10px] text-ink-faint">
        © {new Date().getFullYear()} Suvedha K.  All rights reserved.
      </p>
    </footer>
  );
}
