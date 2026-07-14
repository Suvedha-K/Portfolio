# 🚀 Modern Developer Portfolio & Analytics Dashboard

Welcome to my personal portfolio repository! This is a fast, responsive, and visually striking single-page web application designed to showcase my projects, skills, education, and credentials. It features a futuristic glassmorphic UI, a fully integrated database contact system, and custom interactive elements.

---

## ✨ Features

* **Interactive Glassmorphic UI:** Smooth, modern dark-themed aesthetics with custom glowing boundaries and high-fidelity layouts.
* **Fully Responsive Grid:** Optimized for fluid viewing across desktop, tablet, and mobile screen sizes.
* **Automated Contact Form:** Integrated via a custom Google Apps Script micro-database that captures queries directly into Google Sheets in real-time.
* **Interactive Navigation:** Smooth scroll triggers mapping to dynamic routing sections (Home, About, Skills, Projects, Contact).
* **Optimized Build:** Lightweight assets and modular architecture constructed using React / Next.js and Tailwind CSS.

---

## 🛠️ Built With

* **Frontend:** React, Next.js (App Router), Tailwind CSS
* **Backend Utilities:** Google Apps Script, REST APIs
* **Hosting Platform:** [Vercel / Render]

---

## 📂 Project Architecture

```text
├── public/                 # Static assets (images, PDFs, SVGs)
├── src/
│   ├── app/                # Next.js App Router structure
│   │   ├── layout.jsx      # Global layout metadata & configurations
│   │   └── page.jsx        # Landing page orchestrating main sections
│   └── components/         # Modular interface components
│       ├── Navbar.jsx      # Floating header with interactive scroll maps
│       ├── Hero.jsx        # Main intro section
│       ├── About.jsx       # Biography & profile focus
│       ├── Resume.jsx      # Skills highlights & resume download card
│       └── Contact.jsx     # High-fidelity glass contact form
├── package.json            # Script definitions and package dependencies
└── tailwind.config.js      # Custom theme styling & colors configuration
