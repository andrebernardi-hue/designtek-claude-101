# How to Install — DesignTek 101

Welcome. This document walks you through everything you need to do to get set up for the tutorial — step by step, in order. You will be working inside **Claude Code**, an AI-powered terminal that becomes your co-pilot for the entire class.

By the end of this guide, you will have a working web app running live in your browser, ready to build on.

---

## Step 1 — Install Claude Code

Claude Code is the only thing you need to install manually. It runs in your Mac's Terminal app.

1. Open **Terminal** (you can find it in Applications → Utilities, or search for it with Cmd+Space)
2. Paste this command and press Enter:
   ```
   npm install -g @anthropic-ai/claude-code
   ```

   > **If you see an error like `npm: command not found`**, it means Node.js is not yet installed. In that case, go to https://nodejs.org, download the **LTS** version, run the installer, restart Terminal, and then run the command above again.

3. Once it's installed, launch Claude Code:
   ```
   claude
   ```

4. Follow the login steps to connect your Anthropic account. Claude will guide you through it.

---

## Step 2 — Ask Claude to install Node.js

Node.js is the engine that runs your app locally. Once you're inside Claude Code, ask it to check and install Node.js for you.

**What you type to Claude:**
> *"Can you check if Node.js is installed and install it if needed?"*

**What Claude does:** checks your Node.js version. If it's missing or outdated, it will walk you through installing it — usually by pointing you to https://nodejs.org or running the install for you directly.

**What you do:** follow what Claude says. When it confirms Node.js is ready, move to the next step.

---

## Step 3 — Ask Claude to clone the repository

Now ask Claude to download the tutorial project to your computer.

**What you type to Claude:**
> *"Please clone this repository for me: https://github.com/andrebernardi-hue/designtek-claude-101.git and open it"*

**What Claude does:** runs the `git clone` command, downloads the project into your current folder, and opens it.

**What you do:** wait for it to finish, then confirm Claude is now working inside the project folder. You'll know because the terminal prompt will show the folder name `designtek-claude-101`.

---

## Step 4 — Claude reads the project and greets you

The moment Claude opens the project, it reads a setup file that tells it exactly what to do next. You don't need to explain anything.

**What Claude does:** reads the project guide automatically and starts walking you through setup.

**What you do:** if Claude doesn't start on its own, type:
> *"I just cloned this project, can you help me get set up?"*

---

## Step 5 — Install the starter template dependencies

Claude installs all the libraries the app needs.

**What Claude does:** runs `npm install` inside the `starter-template` folder. You'll see a lot of text scroll by — that's normal.

**What you do:** wait for it to finish. It usually takes about 30–60 seconds.

---

## Step 6 — Start the app and open it in your browser

Claude starts the development server.

**What Claude does:** runs `npm run dev`. The terminal will show something like:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

**What you do:**
1. Open your browser (Chrome, Firefox, or Safari)
2. Go to **http://localhost:5173**
3. You should see a dark screen with an animated card that fades in and says **"Start building."**

Tell Claude it loaded. If it didn't load, paste any error messages from the terminal into the Claude chat and it will fix it.

---

## Step 7 — Create your personal project folder

Now you make a copy of the starter app that belongs to you.

**What you type to Claude:**
> *"Create my project folder. My name is [your name]."*

**What Claude does:** copies the starter template into a new folder under `projects/` named after you — for example `projects/sofia` — and installs dependencies inside it.

**What you do:** wait for Claude to finish, then move to the next step.

---

## Step 8 — Start your app and confirm it works in the browser

Claude starts your personal version of the app.

**What Claude does:** runs `npm run dev` inside your new folder.

**What you do:**
1. Go back to your browser
2. Open **http://localhost:5173** again
3. You should see the same animated card — but now it's running from your personal folder

This is your canvas. Everything you build from here lives in:

```
projects/your-name/src/
```

---

## You're ready

When your app is running in the browser, setup is complete. Tell Claude you're ready to start building and the class begins.

---

## Useful things to know

**The browser updates automatically.**
Every time you save a file, the browser refreshes instantly. You don't need to reload manually.

**Your working folder.**
All your files are inside `projects/your-name/src/`. The main file you'll edit is `App.tsx`.

**The dev server.**
Keep the terminal with `npm run dev` running while you work. If you close it by accident, just run `npm run dev` again from inside your project folder.

**The AI skills.**
This project has 28 design skills pre-loaded. You can ask Claude to use them at any time:
- `/audit` — design quality review of what you've built
- `/animate` — add motion to your UI
- `/polish` — refine the visual details
- `/ui-ux-pro-max` — generate a full design system from a description

Just type the command in the Claude chat.

**Don't touch other folders.**
Only edit files inside your own `projects/your-name/` folder. Leave `starter-template/` and other students' folders alone.

---

## If something goes wrong

Don't panic — describe what happened to Claude and it will help you fix it. You can also paste any error messages directly into the chat.

See you in class.
