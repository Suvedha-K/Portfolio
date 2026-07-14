"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BADGES = [
  "Aspiring Data Analyst",
  "Python",
  "SQL",
  "Power BI",
  "Machine Learning",
  "Generative AI",
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          01_about
        </motion.p>

        <div className="mt-6 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glow-border glass relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl p-3"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              {/* UPDATED: Points to your new about section image 'now.png' */}
              <Image
                  src="/images/now.png"
                  alt="Suvedha K"
                  fill
                  className="object-cover transition-all duration-700" // Grayscale classes removed
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-semibold sm:text-4xl"
            >
              {/* FIXED: Removed the repeated text typo */}
              Turning Data into,{" "}
              <span className="text-gradient">Insights.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-ink-dim sm:text-lg"
            >
              I am Suvedha K, a third-year Information Science & Engineering student at WOMEN'S ENGINEERING COLLEGE with a strong interest in Data Analytics and Artificial Intelligence. I have gained practical experience in Python, SQL, Excel, Power BI, and Flask through academic projects, internships, certifications, and continuous self-learning.
              <br /><br />
              My projects, including AI Job Market Analysis, Finance Tracker, DataNova, and Support Ticket Search, have strengthened my analytical thinking, problem-solving, and technical skills. I enjoy exploring emerging technologies such as Machine Learning, Generative AI, and Cloud Computing while continuously expanding my knowledge through hands-on learning.
              <br /><br />
              My career goal is to begin my professional journey as a Data Analyst, where I can apply my analytical skills, learn from experienced professionals, and contribute to building data-driven solutions that create real business value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="glass rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider text-signal-cyan/90"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}