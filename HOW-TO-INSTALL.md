# How to Install — DesignTek 101

Welcome. If you're reading this, you've already cloned the repository — good. You're almost there.

This document tells you exactly what to do next, step by step. You'll be working inside **Claude Code**. Claude is your co-pilot for the entire class — it will run commands, install things, and guide you. Your job is to follow along and confirm things look right.

By the end of this guide, your personal app will be running live in your browser.

---

## Step 1 — Open the project in Claude Code

In your terminal, navigate to the project folder and launch Claude Code:

```bash
cd designtek-claude-101
claude
```

**What happens next:** Claude reads the project automatically and will greet you. It already knows what to do — you don't need to explain anything.

> If Claude doesn't start on its own, type: *"I just cloned this project, can you help me get set up?"*

---

## Step 2 — Claude checks Node.js

**What Claude does:** runs `node -v` to make sure the right version is installed.

**What you do:** nothing — just wait. If there's an issue, Claude will tell you exactly how to fix it before continuing.

---

## Step 3 — Claude installs the starter template

**What Claude does:** runs `npm install` inside the `starter-template` folder. You'll see a lot of text scroll by — that's normal. It's downloading the libraries the app needs.

**What you do:** wait for it to finish. Usually takes 30–60 seconds.

---

## Step 4 — Claude starts the app

**What Claude does:** runs `npm run dev`. The terminal will show:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

**What you do:**
1. Open your browser (Chrome, Firefox, or Safari)
2. Go to **http://localhost:5173**
3. You should see a dark screen with an animated card that fades in and says **"Start building."**

Tell Claude it loaded. If it didn't, paste any error from the terminal into the Claude chat and it will fix it.

---

## Step 5 — Create your personal project folder

**What you type to Claude:**
> *"Create my project folder. My name is [your name]."*

**What Claude does:** copies the starter template into `projects/your-name/`, installs dependencies, and starts your personal dev server.

**What you do:** wait for Claude to finish.

---

## Step 6 — Confirm your app is running

**What you do:**
1. Go back to your browser
2. Open **http://localhost:5173**
3. You should see the same animated card — now running from your personal folder

This is your canvas. Everything you build lives in:

```
projects/your-name/src/
```

---

## You're ready

Tell Claude you're ready to start building and the class begins.

---

## Useful things to know

**The browser updates automatically.**
Every time you save a file, the browser refreshes instantly. No need to reload.

**Your working folder.**
All your files are inside `projects/your-name/src/`. The main file you'll edit is `App.tsx`.

**The dev server.**
Keep the terminal with `npm run dev` running while you work. If you close it by accident, just run `npm run dev` again from inside your project folder.

**The AI skills.**
This project has 28 design skills pre-loaded. Use them at any time:
- `/audit` — design quality review
- `/animate` — add motion to your UI
- `/polish` — refine the visual details
- `/ui-ux-pro-max` — generate a full design system from a description

**Don't touch other folders.**
Only edit files inside your own `projects/your-name/` folder. Leave `starter-template/` and other students' folders alone.

---

## If something goes wrong

Describe what happened to Claude and it will help you fix it. Paste any error messages directly into the chat.

See you in class.
