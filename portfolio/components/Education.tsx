"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          03_education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 mb-14 font-display text-3xl font-semibold sm:text-4xl"
        >
          Academic timeline
        </motion.h2>

        <div className="relative border-l border-ink/10 pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "top" }}
            className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-signal-cyan via-signal-violet to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass relative rounded-2xl p-7"
          >
            <span className="absolute -left-[52px] top-8 flex h-8 w-8 items-center justify-center rounded-full bg-base ring-2 ring-signal-cyan">
              <GraduationCap size={16} className="text-signal-cyan" />
            </span>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">
                Bachelor of Technology (B.Tech)
              </h3>
              <span className="font-mono text-xs uppercase tracking-widest text-signal-amber">
                2023 – 2027
              </span>
            </div>
            <p className="mt-1 text-ink-dim">
              Information Science and Engineering
            </p>
            <p className="mt-1 text-sm text-ink-faint">
              Women&apos;s Engineering College — Affiliated to Pondicherry
              Technological University
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-signal-violet/10 px-4 py-1.5 font-mono text-xs text-signal-violet ring-1 ring-signal-violet/25">
              CGPA: 7.25 / 10
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
