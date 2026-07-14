import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#080B14",
          soft: "#0D1220",
          raised: "#111827",
        },
        ink: {
          DEFAULT: "#E9EDF6",
          dim: "#8B93A7",
          faint: "#5A6178",
        },
        signal: {
          cyan: "#5EEAD4",
          violet: "#8B7CF6",
          amber: "#F5A623",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "aurora": "radial-gradient(60% 60% at 20% 20%, rgba(94,234,212,0.16) 0%, rgba(94,234,212,0) 60%), radial-gradient(50% 50% at 85% 15%, rgba(139,124,246,0.18) 0%, rgba(139,124,246,0) 60%), radial-gradient(55% 55% at 50% 90%, rgba(245,166,35,0.08) 0%, rgba(245,166,35,0) 60%)",
        "grid": "linear-gradient(rgba(233,237,246,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(233,237,246,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "spin-slower": "spin 34s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
