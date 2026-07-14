"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass mx-4" : "mx-4 md:mx-auto"
        }`}
      >
        <a href="#home" data-cursor-hover className="flex items-center gap-2.5">
          <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-signal-cyan/40">
            <Image
              src="/images/profile.jpg"
              alt="Suvedha K"
              fill
              className="object-cover"
            />
          </span>
          <span className="font-display text-sm font-medium tracking-wide">
            Suvedha<span className="text-signal-cyan">.</span>K
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor-hover
                className="font-mono text-xs uppercase tracking-wider text-ink-dim transition-colors hover:text-signal-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              data-cursor-hover
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-ink/10 p-2 text-ink-dim transition-colors hover:text-signal-cyan"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <a
            href="#contact"
            data-cursor-hover
            className="hidden rounded-full bg-signal-cyan/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-signal-cyan ring-1 ring-signal-cyan/30 transition-colors hover:bg-signal-cyan/20 md:block"
          >
            Let&apos;s Talk
          </a>
          <button
            data-cursor-hover
            className="text-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass mx-4 mt-2 rounded-2xl p-5 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-wider text-ink-dim hover:text-signal-cyan"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
