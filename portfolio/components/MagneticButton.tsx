"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  href,
  variant = "solid",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const id = Date.now();
      setRipples((r) => [
        ...r,
        { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
      ]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    }
    onClick?.();
  };

  const base =
    "relative overflow-hidden inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-signal-cyan text-base shadow-[0_0_25px_rgba(94,234,212,0.35)] hover:shadow-[0_0_40px_rgba(94,234,212,0.55)]"
      : "border border-ink/15 text-ink hover:border-signal-cyan/60 hover:text-signal-cyan";

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor-hover
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className={`${base} ${styles}`}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute h-2 w-2 animate-ping rounded-full bg-white/50"
          style={{ left: r.x - 4, top: r.y - 4 }}
        />
      ))}
    </motion.a>
  );
}
