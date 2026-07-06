# Adiba Anwar — Portfolio

> A personal portfolio showcasing my projects, skills, and experience as a software engineer and full-stack developer.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white&style=flat-square)](https://www.framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## 🖥️ Demo

> **Live:** _[Add your deployment URL here]_
>
> **Suggested repo name:** `portfolio` · **Short description:** Personal portfolio of Adiba Anwar — software engineer, full-stack developer.

---

## ✨ Features

- **Holographic hero** — 3D floating workspace built with pure CSS 3D transforms
- **3D project device showcase** — interactive glass-panel device frames with tilt and floating animation
- **Scroll-spy navigation** — active section detection with smooth scroll
- **Staggered animations** — section and card entrance animations via Framer Motion
- **Fully responsive** — mobile-first layout, collapses to hamburger nav on small screens
- **Brand icon skills grid** — per-technology color-coded icons using `react-icons/si`
- **Animated name sweep** — CSS gradient animation on page load, respects `prefers-reduced-motion`

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 3 + custom CSS utilities |
| Animation | Framer Motion 12 |
| Icons | Lucide React, React Icons |
| Fonts | Inter, IBM Plex Sans, JetBrains Mono (Google Fonts) |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/
│   │   ├── hero/
│   │   │   └── HolographicWorkspace.jsx   # Animated 3D hero scene
│   │   ├── layout/
│   │   │   ├── Navbar.jsx   # Fixed top nav with scroll-spy
│   │   │   └── Footer.jsx   # Footer with social links
│   │   └── ui/
│   │       ├── AnimatedSection.jsx   # Framer Motion scroll-reveal wrapper
│   │       ├── Button.jsx            # Primary / ghost / icon button variants
│   │       ├── ProjectShowcase.jsx   # 3D glass device frame for projects
│   │       └── SectionTitle.jsx      # Consistent section heading
│   ├── data/
│   │   ├── experience.js    # Work experience entries
│   │   ├── personal.js      # Personal info + education
│   │   ├── projects.js      # Featured + additional projects
│   │   └── skills.js        # Skill categories and items
│   ├── hooks/
│   │   └── useScrollSpy.js  # Active section detection hook
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── Hero.jsx
│   │   ├── MoreProjects.jsx
│   │   └── Skills.jsx
│   ├── styles/
│   │   └── index.css        # Global styles, Tailwind base/components/utilities
│   ├── utils/
│   │   ├── motion.js        # Shared Framer Motion animation variants
│   │   └── skillIcons.jsx   # Skill name → icon + brand color mapping
│   ├── App.jsx              # Root layout component
│   └── main.jsx             # React entry point
├── index.html               # HTML shell with SEO meta tags
├── tailwind.config.js       # Tailwind theme (colors, fonts, animations)
├── vite.config.js           # Vite config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/adiba/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## ✏️ Customization

All content is data-driven — no JSX edits needed for most updates:

| What to change | File |
|----------------|------|
| Name, email, GitHub, LinkedIn | `src/data/personal.js` |
| Education entries | `src/data/personal.js` |
| Work experience | `src/data/experience.js` |
| Featured & additional projects | `src/data/projects.js` |
| Skills list / categories | `src/data/skills.js` |
| Color theme, fonts, animations | `tailwind.config.js` |

---

## 📦 Deployment

This is a standard Vite SPA — deploy to any static host:

- **Vercel:** Connect repo → auto-deploys on push
- **Netlify:** `npm run build` → deploy `dist/`
- **GitHub Pages:** Use [`vite-plugin-gh-pages`](https://github.com/vite-plugin-gh-pages/vite-plugin-gh-pages) or GitHub Actions

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Designed with creativity. Crafted and engineered by Adiba Anwar.</p>
