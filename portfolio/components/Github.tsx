"use client";

import { motion } from "framer-motion";
import { Github as GithubIcon } from "lucide-react";

const GITHUB_USERNAME = "suvedha-k";

export default function Github() {
  return (
    <section id="github" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          06_github
        </motion.p>

        <div className="mt-4 mb-14 flex flex-wrap items-center justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-semibold sm:text-4xl"
          >
            Live from GitHub
          </motion.h2>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink-dim transition-colors hover:border-signal-cyan/50 hover:text-signal-cyan"
          >
            <GithubIcon size={14} /> @{GITHUB_USERNAME}
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass overflow-hidden rounded-2xl p-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=5EEAD4&icon_color=8B7CF6&text_color=8B93A7`}
            alt="GitHub stats"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass overflow-hidden rounded-2xl p-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=5EEAD4&text_color=8B93A7`}
              alt="Top languages"
              className="w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass overflow-hidden rounded-2xl p-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=5EEAD4&fire=F5A623&currStreakLabel=5EEAD4`}
              alt="GitHub streak"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass mt-6 overflow-x-auto rounded-2xl p-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/5EEAD4/${GITHUB_USERNAME}`}
            alt="GitHub contribution graph"
            className="min-w-[600px] w-full"
            loading="lazy"
          />
        </motion.div>

        <p className="mt-4 font-mono text-[11px] text-ink-faint">
          Stats update automatically from live GitHub data.
        </p>
      </div>
    </section>
  );
}
