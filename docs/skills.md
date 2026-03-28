# Skills

This project ships with two AI skill packs pre-installed. When you open this repo in Claude Code (or Cursor), these skills are automatically available as slash commands.

---

## Impeccable — Frontend Design Skill Pack

**Source:** [github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)
**Install command:** `npx skills add pbakaus/impeccable`

A design guidance system with 7 reference modules (typography, color, spacing, motion, interaction, responsive design, UX writing) and 20 slash commands for reviewing and improving UI quality.

| Command | What it does |
|---------|-------------|
| `/audit` | Full design quality review |
| `/polish` | Refine details and visual finish |
| `/normalize` | Align spacing, sizing, and rhythm |
| `/animate` | Add or improve motion |
| `/critique` | Honest design critique |
| `/colorize` | Improve color usage |
| `/typeset` | Fix typography |
| `/distill` | Simplify and reduce visual noise |
| `/bolder` | Make the design more assertive |
| `/quieter` | Dial back visual noise |
| `/arrange` | Improve layout and composition |
| `/clarify` | Improve readability and hierarchy |
| `/delight` | Add subtle moments of delight |
| `/harden` | Make the design more robust/accessible |
| `/extract` | Pull design tokens from a design |
| `/adapt` | Adapt a design to a new context |
| `/optimize` | Performance-aware design decisions |
| `/overdrive` | Push the design further |
| `/onboard` | Make onboarding flows clearer |
| `/frontend-design` | General frontend design guidance |

Commands can be combined: `/audit /normalize /polish` runs a full refinement pass.

---

## UI UX Pro Max — Design Intelligence Skill Pack

**Source:** [github.com/nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
**Install command:** `npx skills add nextlevelbuilder/ui-ux-pro-max-skill`

An AI reasoning engine for generating complete design systems. Describe what you're building in plain language and it recommends optimal styles, color palettes, typography, and component patterns based on 161 industry-specific rules.

| Command | What it does |
|---------|-------------|
| `/ui-ux-pro-max` | Generate a complete design system from a description |
| `/ckm-design` | General design guidance |
| `/ckm-design-system` | Design system generation |
| `/ckm-brand` | Brand identity guidance |
| `/ckm-ui-styling` | UI styling recommendations |
| `/ckm-banner-design` | Banner and hero design |
| `/ckm-slides` | Presentation slide design |

**Example usage:**
```
/ui-ux-pro-max Build a dashboard for a healthcare analytics SaaS
```

---

## Adding More Skills

To install additional skills into this project:

```bash
npx skills add <github-user>/<repo>
```

Browse available skills at [skills.sh](https://skills.sh).
