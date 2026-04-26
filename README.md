<p align="center">
  <img src="https://img.shields.io/badge/Rajora.Ai-Tool_Guide-B6FF2E?style=for-the-badge&labelColor=0B0C10&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNCNkZGMkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMnY0bTAgMTJ2NE0yIDEyaDRtMTIgMGg0Ii8+PC9zdmc+" alt="Rajora.Ai" />
</p>

<h1 align="center">Rajora.Ai — Complete Free Tools Setup Manual 2026</h1>

<p align="center">
  <strong>A curated, interactive guide to 150+ free developer tools across GenAI, DevOps, Cloud, Data Analytics & Full Stack.</strong>
</p>

<p align="center">
  <a href="#features"><img src="https://img.shields.io/badge/Tools-150+-B6FF2E?style=flat-square&labelColor=14161B" alt="150+ Tools" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=14161B" alt="React 19" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white&labelColor=14161B" alt="TypeScript" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=14161B" alt="Vite 7" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=14161B" alt="Tailwind CSS" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat-square&logo=greensock&logoColor=white&labelColor=14161B" alt="GSAP" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-B6FF2E?style=flat-square&labelColor=14161B" alt="MIT License" /></a>
</p>

<br />

## 🎯 About

**Rajora.Ai** is a beautifully crafted, scroll-driven web experience that organizes **150+ free developer tools** into 6 progressive layers — from terminal setup to production-ready full-stack deployment.

Whether you're a beginner setting up your first dev environment or a senior engineer exploring new free-tier services, this guide maps out everything you need — with install commands, free-tier details, and direct links.

<br />

## ✨ Features

| Feature | Description |
|---------|-------------|
| **6 Progressive Layers** | Foundation → Cloud → DevOps → GenAI → Analytics → Full Stack |
| **150+ Curated Tools** | Each with free-tier details, install commands & docs links |
| **Scroll-Driven Animations** | Cinematic GSAP ScrollTrigger transitions between sections |
| **Interactive Directory** | Real-time search & filter across all tools by layer, tag, or name |
| **Tool Detail Modals** | Expand any tool for full details, install commands & external links |
| **Dark Neon Theme** | Premium `#0B0C10` dark background with `#B6FF2E` neon accents |
| **Responsive Design** | Fully optimized for desktop, tablet & mobile viewports |
| **Accessible** | Keyboard navigable, reduced-motion support, semantic HTML |

<br />

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript 5.9 |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 3.4 + Custom CSS |
| **Animations** | GSAP 3.14 (ScrollTrigger) |
| **UI Components** | Radix UI Primitives (53 components) |
| **Typography** | Space Grotesk · Inter · IBM Plex Mono |
| **Icons** | Lucide React |

<br />

## 📁 Project Structure

```
rajora-ai-tool-guide/
├── public/                    # Static assets (hero images, tool visuals)
├── src/
│   ├── components/
│   │   ├── Navigation.tsx     # Fixed navbar with mobile drawer
│   │   └── ui/                # 53 Radix-based UI primitives
│   ├── data/
│   │   ├── tools.ts           # Master tools database (150+ entries)
│   │   ├── manualContent.ts   # Layer content aggregator
│   │   └── layers/            # Per-layer detailed tool guides (L0–L5)
│   ├── sections/
│   │   ├── HeroSection.tsx    # Landing hero with GSAP entrance/exit
│   │   ├── WorkflowSection.tsx # 3-step workflow cards
│   │   ├── LayerSection.tsx   # Reusable layer showcase component
│   │   ├── DirectorySection.tsx # Searchable tools directory
│   │   ├── NewsletterSection.tsx # Email capture section
│   │   └── FooterSection.tsx  # Footer with navigation & socials
│   ├── hooks/
│   │   └── use-mobile.ts     # Mobile breakpoint detection
│   ├── lib/
│   │   └── utils.ts          # Tailwind merge utilities
│   ├── App.tsx               # Root layout with GSAP snap scrolling
│   ├── App.css               # Custom animations & scrollbar styles
│   ├── index.css             # Design tokens & Tailwind config
│   └── main.tsx              # React DOM entry point
├── index.html                # HTML entry with SEO meta tags
├── tailwind.config.js        # Extended Tailwind theme
├── vite.config.ts            # Vite + path aliases
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies & scripts
```

<br />

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/rajeevrajora77-lab/rajora-Ai-tool-guide.git
cd rajora-Ai-tool-guide

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

<br />

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all files |

<br />

## 🗂️ The 6 Layers

```
┌─────────────────────────────────────────────────┐
│  Layer 5 — Full Stack                           │
│  Next.js · Supabase · Auth · UI Kits            │
├─────────────────────────────────────────────────┤
│  Layer 4 — Data Analytics                       │
│  SQL · Python Analytics · Visualization · BI    │
├─────────────────────────────────────────────────┤
│  Layer 3 — GenAI & Data Science                 │
│  LangChain · Vector DBs · Free LLM APIs        │
├─────────────────────────────────────────────────┤
│  Layer 2 — DevOps                               │
│  CI/CD · GitHub Actions · Monitoring            │
├─────────────────────────────────────────────────┤
│  Layer 1 — Cloud Infrastructure                 │
│  AWS · GCP · Azure · Vercel · Railway           │
├─────────────────────────────────────────────────┤
│  Layer 0 — Foundation                           │
│  Terminal · Git · VS Code · Node · Python       │
└─────────────────────────────────────────────────┘
```

<br />

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest new tools.

<br />

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<br />

## 👤 Author

**Rajeev Rajora**

- GitHub: [@rajeevrajora77-lab](https://github.com/rajeevrajora77-lab)

<br />

---

<p align="center">
  <sub>Built with 💚 for developers · Last updated: April 2026 · 150+ tools · Always-free tiers</sub>
</p>
