# How to Install — DesignTek 101

Welcome. This document walks you through everything you need to do to get set up for the tutorial — step by step, in order. You will be working inside **Claude Code**, an AI-powered terminal app. Claude will be your co-pilot throughout the class.

By the end of this guide, you will have a working web app running live in your browser, ready to build on.

---

## Before you start

You need two things installed on your Mac:

### 1. Node.js
Node.js is the engine that runs your app locally.

1. Go to https://nodejs.org
2. Download the **LTS** version (the one labeled "Recommended For Most Users")
3. Open the downloaded file and follow the installer
4. When it's done, open your Terminal app and type:
   ```
   node -v
   ```
   You should see a version number like `v20.x.x`. If you do, you're good.

### 2. Claude Code
Claude Code is the AI terminal you'll use throughout the class.

1. Install it by running this in Terminal:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
2. Then launch it:
   ```
   claude
   ```
3. Follow the login steps to connect your Anthropic account.

---

## Step 1 — Clone the repository

Open Terminal and run:

```bash
git clone https://github.com/andrebernardi-hue/designtek-claude-101.git
cd designtek-claude-101
```

This downloads the entire project to your computer.

---

## Step 2 — Open the project in Claude Code

While inside the project folder, launch Claude Code:

```bash
claude
```

**What happens next:** Claude will read the project automatically and greet you. It knows this is a tutorial project and it knows what you need to do. You don't need to explain anything — just follow what it says.

> If Claude doesn't start talking right away, type: *"I just cloned this project, can you help me get set up?"*

---

## Step 3 — Claude checks your Node.js version

Claude will run a quick check to make sure your Node.js is up to date.

**What Claude does:** runs `node -v` in the terminal and reads the version.

**What you do:** nothing — just wait. If there's a problem, Claude will tell you exactly what to do.

---

## Step 4 — Install the starter template

Claude will install the app's dependencies for you.

**What Claude does:** runs `npm install` inside the `starter-template` folder. You'll see a lot of text scroll by — that's normal. It's downloading the libraries the app needs.

**What you do:** wait for it to finish. It usually takes about 30–60 seconds.

---

## Step 5 — Start the app and open it in your browser

Claude will start the development server.

**What Claude does:** runs `npm run dev`. The terminal will show something like:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

**What you do:**
1. Open your browser (Safari, Chrome, or Firefox)
2. Go to **http://localhost:5173**
3. You should see a dark screen with an animated card that fades in and says **"Start building."**

Tell Claude it loaded. If it didn't, paste any error messages from the terminal into the Claude chat and it will help you fix it.

---

## Step 6 — Create your personal project folder

Now you'll make a copy of the starter app that belongs to you.

**What Claude does:** stops the server and copies the starter template into a new folder under `projects/` named after you.

**What you do:** tell Claude your name or handle when it asks. For example:
> *"My name is Sofia"* → your folder becomes `projects/sofia`

Claude will run the copy and install commands automatically.

---

## Step 7 — Start your app and confirm it works

Claude starts your personal app.

**What Claude does:** runs `npm run dev` inside your new folder.

**What you do:**
1. Go back to your browser
2. Open **http://localhost:5173** again
3. You should see the same animated card — but now it's running from your folder

This is your canvas. Everything you build from here lives in:

```
projects/your-name/src/
```

---

## You're ready

When your app is running in the browser, you're set up. Tell Claude you're ready to start building and the tutorial begins.

---

## Useful things to know

**The browser updates automatically.**
Every time you save a file, the browser refreshes instantly. You don't need to reload manually.

**Your working folder.**
All your files are inside `projects/your-name/src/`. The main file you'll edit is `App.tsx`.

**The dev server.**
Keep the terminal with `npm run dev` running while you work. If you close it by accident, just run `npm run dev` again from your project folder.

**The AI skills.**
This project has 28 design skills pre-loaded. You can ask Claude to use them at any time:
- `/audit` — get a design review of what you've built
- `/animate` — add motion to your UI
- `/polish` — refine the visual details
- `/ui-ux-pro-max` — generate a full design system from a description

Just type the command in the Claude chat.

**Don't touch other folders.**
Only edit files inside your own `projects/your-name/` folder. Leave `starter-template/` and other students' folders alone.

---

## If something goes wrong

Don't panic — just describe what happened to Claude and it will help you fix it. You can also paste any error messages directly into the chat.

See you in class.
