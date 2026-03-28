# DesignTek Claude 101

> A hands-on tutorial for designers to build their first React application using modern, production-quality tooling.

This repository is the starting point for Andre Bernardi's DesignTek workshop series. By the end of the class, you'll have built and shipped a small interactive web app using the same tools used in professional design engineering teams.

---

## Who This Is For

Designers with little or no coding experience who want to understand the modern design-to-engineering workflow — and build something real with it.

---

## The Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI component framework |
| [Vite](https://vitejs.dev) | Fast build tool and dev server |
| [TypeScript](https://www.typescriptlang.org) | Typed JavaScript (autocomplete + fewer bugs) |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animation and motion design |

---

## Prerequisites

Before the class, make sure you have the following installed:

- **Node.js v20+** — [nodejs.org](https://nodejs.org)
- **Git** — [git-scm.com](https://git-scm.com)
- **VS Code** (recommended editor) — [code.visualstudio.com](https://code.visualstudio.com)
- Basic comfort opening a terminal

---

## Getting Started

> **Students: read [HOW-TO-INSTALL.md](HOW-TO-INSTALL.md) instead.** It walks you through every step in plain language, including what Claude will do and what you need to do.

### 1. Clone the repository

```bash
git clone https://github.com/andrebernardi-hue/designtek-claude-101.git
cd designtek-claude-101
```

### 2. Run the starter template

```bash
cd starter-template
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. You should see the animated starter app.

### 3. Create your project folder

```bash
# From the repo root
cp -r starter-template projects/your-name
cd projects/your-name
npm install
npm run dev
```

Rename `your-name` to your actual first name or handle. This folder is yours — build freely inside it.

---

## Folder Structure

```
designtek-claude-101/
├── README.md               ← You are here
├── docs/                   ← Course materials (skills, resources, links)
├── starter-template/       ← The base app every student copies from
└── projects/               ← One folder per student
    └── _example/           ← Reference structure (do not edit)
```

---

## For Students: Where to Put Your Work

1. Copy `starter-template/` into `projects/` and name it after yourself
2. Run `npm install` inside your folder
3. Build your app — only edit files inside your folder
4. When ready, open a pull request

See [`projects/README.md`](projects/README.md) for step-by-step instructions.

---

## Skills

This repo ships with **28 AI skills** pre-installed for Claude Code and Cursor. They activate as slash commands the moment you open the project.

| Pack | Commands | What it covers |
|------|----------|----------------|
| [Impeccable](https://github.com/pbakaus/impeccable) | 21 commands | Typography, color, spacing, motion, layout, UX writing |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 7 commands | Design system generation, brand, styling, banners |

**Quick examples:**
```
/audit          → full design quality review
/polish         → visual refinement pass
/animate        → add or improve motion
/ui-ux-pro-max  → generate a complete design system from a description
```

See [`docs/skills.md`](docs/skills.md) for the full command reference.

---

## Resources

> Andre will add content here.

See [`docs/resources.md`](docs/resources.md) for books, articles, and videos.

---

## Links

> Andre will add content here.

See [`docs/links.md`](docs/links.md) for tools, communities, and references.

---

## License

[CC0 1.0 Universal](LICENSE) — public domain, use freely.
