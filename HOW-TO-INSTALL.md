# How to Install — DesignTek 101

Welcome. By this point you have Claude Code installed, authenticated, and running in your terminal. Andre has sent you the repository link.

Here's what to do next.

---

## Step 1 — Ask Claude to clone the repository

In the Claude Code terminal, paste this:

> *"Please clone this repository and open it: https://github.com/andrebernardi-hue/designtek-claude-101.git"*

**What Claude does:** runs `git clone`, downloads the project to your computer, and navigates into the project folder.

**What you do:** wait for it to finish.

---

## Step 2 — Claude takes over

The moment Claude opens the project, it reads a setup file and knows exactly what to do. It will greet you and start walking through the setup automatically.

> If Claude doesn't start on its own, type: *"I just cloned this project, can you help me get set up?"*

---

## Step 3 — Claude checks Node.js

**What Claude does:** checks that Node.js is installed and up to date.

**What you do:** nothing — if there's an issue, Claude will tell you how to fix it before continuing.

---

## Step 4 — Claude installs the starter template

**What Claude does:** runs `npm install`. You'll see a lot of text scroll by — that's normal.

**What you do:** wait 30–60 seconds for it to finish.

---

## Step 5 — Claude starts the app

**What Claude does:** runs `npm run dev` and gives you a local URL.

**What you do:**
1. Open your browser
2. Go to **http://localhost:5173**
3. You should see a dark screen with an animated card that says **"Start building."**

Tell Claude it loaded. If it didn't, paste the error into the chat and Claude will fix it.

---

## Step 6 — Create your personal project folder

**What you type:**
> *"Create my project folder. My name is [your name]."*

**What Claude does:** copies the starter template into `projects/your-name/`, installs its dependencies, and starts your personal dev server.

---

## Step 7 — Your app is live

Go back to your browser and open **http://localhost:5173** again. You should see the same animated card — now running from your own folder.

This is your canvas. Everything you build lives in:

```
projects/your-name/src/
```

Tell Claude you're ready to start building and the class begins.

---

## Useful things to know

**The browser updates automatically.** Every time you save a file, the browser refreshes instantly.

**Your working folder.** All edits happen inside `projects/your-name/src/`. The main file is `App.tsx`.

**The dev server.** Keep the terminal running while you work. If you close it by accident, run `npm run dev` again from your project folder.

**The AI skills.** 28 design skills are pre-loaded. Use them anytime:
- `/audit` — design quality review
- `/animate` — add motion
- `/polish` — refine visual details
- `/ui-ux-pro-max` — generate a full design system from a description

**Stay in your folder.** Only edit files inside `projects/your-name/`. Leave `starter-template/` and other students' folders alone.

---

## If something goes wrong

Describe it to Claude and it will fix it. Paste any error messages directly into the chat.

See you in class.
