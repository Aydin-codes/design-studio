# design-studio

A tool to make designs that are actually good.

design-studio is a skill for Claude that designs the way a real designer works with a client. It asks what you're making and how deep you want to go, shows you real options to pick from, writes a plan, builds with expert skills you switch on, then checks the result against your own taste.

It doesn't try to know everything itself. It's a **navigator**: it runs the process, keeps the plan, and hands specialist work to skills made by people who ship great UI.

> Status: **v0.6, early.** Tested on a handful of projects. Expect rough edges; see [Known issues](#known-issues).

## Why this exists

Ask an AI for a landing page and you get the same page: small label, headline with one colored word, gray subtext, two buttons, a card on the right. The AI knows every design principle. What it lacks is **experience**: no reps, no memory of what failed, no taste of its own, and nobody making it choose.

| A designer has... | design-studio gives Claude... |
|---|---|
| A process they trust | Fixed steps, from finding your project to logging your taste |
| Checklists from past mistakes | A list of AI tells, plus expert review skills |
| A library of references | Top product sites, quiet brands, your own picks |
| Memory of the client's taste | A `taste-profile.md` that grows every project |
| Engineering discipline | A `DESIGN.md` plan before any code |

## Rule zero

**The design matches what the product is.** Motion shows what the product does, the look comes from the product's world, and the hero shows the product instead of describing it. The test: cover the logo. If you can't tell what the product does, it's generic.

## How it works

```
Find your project → Pick depth → Check packs → (Taste setup, first time)
→ Interview → References → Three directions → You pick
→ Plan (DESIGN.md) → Build → Critique → Log your taste
```

You decide at the points that matter: how deep to go, what you react to, which direction, and every font, color and style choice. Claude drives the rest, and every reply says which step it's on.

**Depth:**

| | Light | Moderate (default) | Deep |
|---|---|---|---|
| Your time | ~2 min | ~10 min | 30+ min |
| Questions | 0–1 | 4, follow-ups if vague | full interview |
| References | skip | 3–4 sites | sites + mood board |
| Directions | 3, one pick | 3, with notes | 3 × 2 rounds |

**Taste comes from you, not from Claude.**
- **Taste setup (first run, ~3 minutes):** quick rounds of real sites, font pairings, palettes and motion demos. Each round asks which you like and why. There's no score; it just learns what you think is good.
- **Picking sheets:** fonts shown with your real headline, palettes applied to your real screen, effects as live demos. You choose by seeing, not from a list.
- **Taste blocks:** if a font, color or style choice comes up that you haven't settled, Claude stops and asks instead of picking.

**Motion has two budgets.** App UI you use all day stays fast and quiet. Landing pages, portfolios and games need a motion identity: a hero moment, one or two signature moves, scroll choreography, and something to click, drag or swipe.

## Packs

Packs are expert skills you switch on per project. Only what you enable gets loaded.

| Pack | Expert | What it does | Install |
|---|---|---|---|
| `emil` | Emil Kowalski (Vercel, Linear; Sonner, Vaul) | Motion, feel, variant picker, stress tests, mobile feel | `npx skills add emilkowalski/skill` |
| `impeccable` | Paul Bakaus | Critique, audit, polish of existing UI | `npx skills add https://github.com/pbakaus/impeccable --skill impeccable` |
| `taste` | Anthropic `frontend-design` + this skill | Direction, anti-slop, copy voice | built in |
| `motion` | GSAP, Motion, Three.js, Spline, Rive, Lottie | Motion identity for marketing pages and games | npm packages |
| `copy`, `dataviz`, `assets` | built in | Words, charts, icons/fonts/colors from free sources | built in |
| `refs` | Mobbin, Figma, Adobe Fonts | References and your own frames | connectors |
| `native-apple` | Apple HIG skills | Native iOS/macOS apps only | `npx skills add raintree-technology/apple-hig-skills` |

**Presets:** `landing`, `app`, `dashboard`, `portfolio`, `game`, `refine`. Adjust inline:

```
/design-studio landing -motion +impeccable
```

## Install

**Claude app:** add `SKILL.md` as a skill in your account. It shows up as `design-studio`.

**Claude Code (VS Code / terminal):**

```
your-project/.claude/skills/design-studio/SKILL.md
```

Then install the packs you want. Claude shows which are missing, with the command for each.

## Files

```
design-studio/
├── SKILL.md                        the skill itself
├── README.md
├── CHANGELOG.md
├── LICENSE                         MIT
├── docs/
│   └── DECISIONS.md                why it's built this way
├── sources/                        expert rules, credited
│   ├── kole-jain.md
│   └── mobbin-dashboards.md
├── templates/
│   └── taste-profile.md
└── examples/
    └── schoology-concept/DESIGN.md
```

The skill writes two files **into your project**: `.studio/taste-profile.md` (your taste, growing over time) and `DESIGN.md` (the plan for this project).

## Known issues

- **Mobbin needs a paid plan** for its connector; the skill falls back to free galleries.
- **It can't watch YouTube** or some sites. New sources come in as transcripts or screenshots.
- **One file:** everything loads every time. A later version will split the tells and pack list into separate files.
- **Taste setup and picking sheets are new** and haven't been tested much yet.

See [CHANGELOG.md](CHANGELOG.md) and [docs/DECISIONS.md](docs/DECISIONS.md).

## Credits

Built on ideas and skills from Emil Kowalski (MIT), Paul Bakaus's Impeccable, Anthropic's `frontend-design`, Kole Jain's design videos, Mobbin's dashboard study, and the raintree Apple HIG skills. Expert skills are called, not copied, so they stay current and keep their authors' voice.
