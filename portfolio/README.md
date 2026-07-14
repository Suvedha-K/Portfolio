# Suvedha K — Portfolio

A premium, animated personal portfolio built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — personalize these

1. **Photo** — already wired up at `public/images/profile.jpg` (your uploaded photo). Swap it for a higher-res version any time; same filename.
2. **Resume** — `public/resume.pdf` is a placeholder. Replace it with your real resume (keep the filename, or update the `href="/resume.pdf"` references in `components/Hero.tsx` and `components/Resume.tsx`).
3. **GitHub username** — open `components/Github.tsx` and change `GITHUB_USERNAME` to your real GitHub handle so the stats, streak, and contribution graph pull real data.
4. **Contact details & socials** — update the email, phone, and links in `components/Contact.tsx` and `components/Footer.tsx`.
5. **Project links** — in `components/Projects.tsx`, replace the `github` and `demo` placeholder `"#"` values with your real repo and live-demo URLs (and add real screenshots if you'd like — swap the placeholder preview block for an `<Image>`).
6. **CGPA** — `components/Education.tsx` has a `CGPA: -- / 10` placeholder.
7. **Contact form** — the form in `components/Contact.tsx` currently simulates a submission. Wire it to [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/), or your own API route to actually receive messages.

## Deploy on Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No extra config needed.
4. Deploy.

## Tech stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS (custom design tokens in `tailwind.config.ts`)
- Framer Motion (scroll reveals, hover/tap micro-interactions, page transitions)
- React Three Fiber + drei (animated neural-network hero background)
- Lenis (smooth scrolling)
- next-themes (dark/light mode)
- lucide-react + react-icons (iconography)

## Design direction

The visual language leans into an "AI console" identity: a dark navy base, cyan/violet/amber signal colors, monospace data-labels (`// 01_about`), a terminal-style boot sequence on load, and a live neural-network particle field in the hero — all chosen to reflect an AI/data engineering profile rather than a generic template.
