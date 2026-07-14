"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PhotoOrb({ size = 340 }: { size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -py * 14, y: px * 14 });
  };

  const handleLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative mx-auto animate-float"
      style={{ width: size, height: size }}
    >
      {/* rotating conic glow ring */}
      <div className="absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,#5EEAD4,#8B7CF6,#F5A623,#5EEAD4)] opacity-60 blur-md animate-spin-slow" />
      <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_180deg,#8B7CF6,#5EEAD4,#F5A623,#8B7CF6)] opacity-40 blur-lg animate-spin-slower" />

      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="tilt relative h-full w-full rounded-full"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="glass absolute inset-0 rounded-full p-2 shadow-[0_0_60px_rgba(94,234,212,0.25)]">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src="/images/profile.jpg"
              alt="Suvedha K — Data Analyst"
              fill
              priority
              className="object-cover"
              sizes="340px"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-signal-cyan/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* floating badge chips */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -right-4 top-6 rounded-xl px-3 py-1.5 font-mono text-[10px] text-signal-cyan shadow-lg"
      >
        model: Data_Analyst.v1
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="glass absolute -left-6 bottom-8 rounded-xl px-3 py-1.5 font-mono text-[10px] text-signal-violet shadow-lg"
      >
        status: online
      </motion.div>
    </motion.div>
  );
}
