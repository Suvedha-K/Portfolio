"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "booting environment...",
  "loading models...",
  "compiling experience...",
  "ready.",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      const t = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 380);
    return () => clearTimeout(t);
  }, [lineIndex]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-base"
        >
          <div className="w-72 font-mono text-sm text-signal-cyan/90">
            {LINES.slice(0, lineIndex).map((line, i) => (
              <div key={i} className="mb-1 text-ink-dim">
                <span className="text-signal-cyan">$</span> {line}
              </div>
            ))}
            <span className="terminal-cursor h-4" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
