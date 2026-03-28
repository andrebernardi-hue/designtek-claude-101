# DesignTek 101 — Project Guide for Claude

## What this project is

This is a tutorial repository for a design team learning to build React applications with AI assistance. Students are designers — not necessarily engineers. They have cloned this repo and will build a small web app from scratch inside the `projects/` folder.

## First time setup — guide the student through this

When a student opens this project for the first time, greet them warmly and walk them through each step below in order. Do not skip ahead. Confirm each step succeeds before moving to the next.

### Step 1 — Check Node.js
Run `node -v` and confirm the version is v20 or later.
- If it is: tell them they're good and move on.
- If not, or if the command fails: tell them to install Node.js from https://nodejs.org (LTS version), then restart their terminal before continuing.

### Step 2 — Install starter template dependencies
```bash
cd starter-template
npm install
```
Tell them this downloads all the libraries the app needs. It only takes a minute.

### Step 3 — Start the dev server and open the browser
```bash
npm run dev
```
After it starts, tell them to open their browser and go to:

**http://localhost:5173**

Tell them what they should see: a dark screen with an animated card that fades in and says "Start building." Ask them to confirm it loaded before continuing. If it didn't load, check whether the terminal shows any errors.

### Step 4 — Create their personal project folder
Once the starter app is confirmed working, stop the dev server (Ctrl+C) and run:
```bash
cd ..
cp -r starter-template projects/your-name
```
Replace `your-name` with their actual first name or handle, lowercase, no spaces. For example: `projects/sofia` or `projects/marco`.

### Step 5 — Install dependencies in their own folder and launch it
```bash
cd projects/your-name
npm install
npm run dev
```
Then tell them to go back to their browser and open:

**http://localhost:5173**

They should see the same animated card — but now it's running from their personal folder. This is their canvas. Everything they build from now on lives here.

### Step 6 — Confirm they're ready
Tell them:
- Their working folder is `projects/your-name/`
- All their edits happen inside `projects/your-name/src/`
- The browser will update automatically every time they save a file
- They can start building

## Project structure

```
designtek-claude-101/
├── CLAUDE.md               ← This file (instructions for you)
├── HOW-TO-INSTALL.md       ← Human-readable step-by-step for students
├── README.md               ← Project overview
├── docs/                   ← Skills reference, resources, links
├── starter-template/       ← Base app — students copy this, do not edit it
└── projects/               ← One folder per student — all work happens here
    └── _example/           ← Reference only, do not modify
```

## Skills available

28 design skills are pre-installed and active as slash commands:

**From Impeccable** — design quality and refinement:
- `/audit` — full design quality review
- `/polish` — visual finish and details
- `/animate` — add or improve motion
- `/normalize` — spacing and rhythm consistency
- `/critique` — honest design feedback
- `/typeset` — fix typography
- `/colorize` — improve color usage
- `/distill` — simplify and reduce visual noise
- `/frontend-design` — general frontend design guidance
- (and 12 more — see `docs/skills.md`)

**From UI UX Pro Max** — design system generation:
- `/ui-ux-pro-max` — generate a full design system from a plain description
- `/ckm-design-system` — design system scaffolding
- `/ckm-brand` — brand identity guidance
- `/ckm-ui-styling` — styling recommendations

## How to help students

- Students are **designers first**. Explain code in visual and spatial terms when possible.
- Always **show small, working changes** rather than large rewrites.
- Before writing code for a new feature, **suggest the relevant skill** (e.g. `/ui-ux-pro-max` before building a new section, `/animate` before adding motion).
- After every change, **remind them to save and look at the browser** — the live reload is the most motivating part.
- All their edits happen in `projects/<their-name>/src/`. Never touch `starter-template/` or another student's folder.

## Tech stack

- React 18 + TypeScript
- Vite 5 (dev server at http://localhost:5173)
- Tailwind CSS v3
- Framer Motion v11
