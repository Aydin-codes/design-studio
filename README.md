<h1 align="center">design-studio</h1>

<p align="center"><b>design-studio makes Claude ask first, show you real options, and build only what you pick.</b><br>
<sub>Works in Claude Code, the Claude app, Cursor, Codex and other AI coding tools.</sub></p>

<p align="center">
  <a href="CHANGELOG.md"><img src="https://img.shields.io/github/v/tag/Aydin-codes/design-studio?style=flat-square&color=e4572e&label=version" alt="Latest version"></a>
  <a href="https://github.com/Aydin-codes/design-studio/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/Aydin-codes/design-studio/ci.yml?style=flat-square&label=tests" alt="Tests"></a>
  <a href="#install"><img src="https://img.shields.io/badge/Claude_Code-plugin-D97757?style=flat-square&logo=claude&logoColor=white" alt="Claude Code plugin"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-161616?style=flat-square" alt="MIT license"></a>
</p>

<p align="center">
  <a href="#install"><b>Install</b></a> ·
  <a href="#what-ai-makes-alone">What AI makes alone</a> ·
  <a href="#see-it-work">See it work</a> ·
  <a href="#how-it-works">How it works</a> ·
  <a href="https://github.com/Aydin-codes/toolkit">Toolkit</a> ·
  <a href="CHANGELOG.md">Changelog</a>
</p>

<p align="center">If design-studio helps you, please give it a star ⭐</p>

<p align="center">
  <img src=".github/assets/hero.png" width="838" alt="design-studio in one picture. A blue command bar reads /design-studio followed by what you're making, and works in Claude Code, the Claude app, Cursor and Codex. Below it, nine coloured step cards with 3D icons: 1 Find project, 2 Setup, 3 Job and depth, 4 Confirm frozen, 5 Interview, 6 References, 7 Directions, 8 Plan, 9 Build and check, under the line: Nine steps, and it stops for you at every decision. Lines lead to a panel: What you get, three real directions, DESIGN.md, your taste profile, a build checked for AI tells, and large numbers: 9 steps, 6 jobs, 6 outputs, 3 depths.">
</p>

## What it is

Getting an AI to build a page is easy. Getting it to build *your* page means it has to stop and ask.

Left alone, the AI guesses. It knows every design rule but nothing about your customers, the sites you love or the things that make you cringe, so every guess lands on the same average page: a purple gradient, a small label over a big headline, "Trusted by 10,000+ teams" and the Inter font. Then you fix it by hand, or live with it.

design-studio turns the AI into a designer working for you. It asks what you're making and what you like. It shows three real directions and waits for your pick. It writes the plan down, builds only that, and checks the result for AI tells and your own dislikes before it calls the work done. Next project, it already knows your taste.

One rule runs through all of it: **taste comes from you.** The AI never picks your colors, fonts or style on its own. You don't need design words either. You react to what you see, and it tells you what the thing you liked is called.

It works for websites, app screens, dashboards, reports, printable PDFs and game screens.

## What AI makes alone

<p align="center">
  <img src=".github/assets/ai-slop.png" width="838" alt="Five kinds of AI slop. design-studio checks for all of them. A glowing robot in a graduation cap sits among five made-up pages, each tagged in red: a dark console page, Every API Standard. One Reference., tagged Every X. One Y. and code-shape panels; a cream editorial page, Wisdom over noise., tagged italic word and sans plus italic serif; a stock-photo startup page, You built the thing. Now fund it., tagged stock photo and one coloured line; a newsprint page, LAUNCH. GET SEEN. RISE., tagged everything shouts and no reading order; and a local landscaping template with a photo and quote form, tagged template hero and unchecked ratings.">
</p>
<p align="center"><sub>Five looks an AI falls back on when nobody asks you anything first. Each page is made up, modelled on real sites launched with AI builders, and every red tag is a tell design-studio checks for.</sub></p>

<!-- BENCHMARKS: before/after results go here. -->

## See it work

<table>
  <tr>
    <td width="50%"><img src=".github/assets/sample-page.png" alt="A sample landing page for a made-up product called Flowly: dark purple gradient, an uppercase AI-POWERED WORKFLOWS label, the headline Supercharge your team's productivity with productivity in gradient text, Trusted by 10,000+ teams worldwide, and a glass card with Feature 1 and Lorem ipsum."></td>
    <td width="50%"><img src=".github/assets/tell-scan.png" alt="Terminal output of node check.mjs tells on that page: 11 possible tells such as default AI font, frosted glass blur, uppercase spaced label, purple gradient and gradient text, then Must fix: social proof the user didn't give and placeholder text left in."></td>
  </tr>
  <tr>
    <td><sub><b>A typical AI page.</b> We wrote this sample the way AI tools usually do, to test the checks. Nothing on it came from a real client.</sub></td>
    <td><sub><b>design-studio catches it.</b> Its check script found 14 problems in that page, including the made-up "10,000+ teams" and leftover "Lorem ipsum".</sub></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><img src=".github/assets/hook-block.png" width="640" alt="Terminal output: design-studio blocked this edit, you're not at the build step yet, followed by the four things still missing: confirmed keep and change lists, a human-made reference, a picked direction, and DESIGN.md."></td>
  </tr>
  <tr>
    <td colspan="2"><sub><b>It can't skip steps.</b> In Claude Code, if Claude tries to edit your app before you've picked a direction, the edit is blocked and Claude is told exactly what's missing.</sub></td>
  </tr>
</table>

## How it works

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/how-it-works-dark.png">
    <img src=".github/assets/how-it-works-light.png" width="760" alt="Diagram, How design-studio works: four numbered stages on a winding path. 1. Talk: sites you love and hate; job, output and depth; what must stay the same; questions about your readers. 2. Pick: real references you like; three directions side by side; pick, mix or reject; fonts and colors you choose. 3. Plan: the plan goes in DESIGN.md; only what's needed; you approve it. A red label on the path says Claude Code blocks UI edits until here. 4. Build and check: builds only what you picked; scans for AI tells; checks it against your taste; remembers your taste.">
  </picture>
</p>

Every reply starts with the step it's on, and it stops and waits for you at each decision. You choose how much of your time it takes: **Light** (about 2 minutes), **Moderate** (about 10, the default) or **Deep** (30 or more).

<details>
<summary><b>See all nine steps</b></summary>

```mermaid
flowchart LR
  A[Find your project] --> B[Setup] --> C{{"Job, output, depth ⛔"}} --> D{{"Confirm what's frozen ⛔"}}
  D --> E{{"Interview ⛔"}} --> F{{"References ⛔"}} --> G{{"Three directions: you pick ⛔"}}
  G --> H{{"Plan: DESIGN.md ⛔"}} --> I[Build] --> J[Critique and check-in]
```

⛔ marks a stop where Claude waits for your answer.

</details>

## Install

In Claude Code (this includes the automatic checks):

```
/plugin marketplace add Aydin-codes/design-studio
/plugin install design-studio@design-studio
```

<details>
<summary><b>Other tools</b></summary>

**Any agent that supports skills:**
```
npx skills add Aydin-codes/design-studio
```

**Claude app:** zip the `skills/design-studio` folder and upload it under Customize → Skills → Upload a skill (code execution must be on).

**Anything else:** copy `skills/design-studio/` into your project and point your AI at `SKILL.md`.

</details>

## Use

Type `/design-studio` and say what you want, or just ask for a design in your own words:

```text
/design-studio a landing page for my AI startup
/design-studio reskin this dashboard, keep how everything works
/design-studio polish the pricing page
/design-studio fix the hero, it looks AI-made
```

It starts by asking what the job is, what you're making and how much time you want to spend.

## What you can ask for

| Job | Keeps | Changes |
|---|---|---|
| New | nothing (unless you say so) | everything |
| Rebrand | layout, flows, content | look, type, color, voice |
| Reskin | how everything works (UX) | how it looks (UI) |
| Redesign | content and goals | layout and look |
| Polish | everything you have | the details |
| Fix a part | everything else | one section you point at |

It shows what it will keep and change, and you confirm before anything happens. Then it asks what matters most: **how it looks, how it works, or both.** Pick "works" and it skips the taste questions and spends your time on tasks, steps and clarity instead.

## Works in

| | Tool | What you get |
|:-:|---|---|
| <picture><source media="(prefers-color-scheme: dark)" srcset=".github/assets/logos/claude-dark.svg"><img src=".github/assets/logos/claude.svg" alt="" width="28"></picture> | Claude Code | Everything, and the checks run by themselves through hooks |
| <picture><source media="(prefers-color-scheme: dark)" srcset=".github/assets/logos/claude-dark.svg"><img src=".github/assets/logos/claude.svg" alt="" width="28"></picture> | Claude app | The full skill; the checks run when the AI runs them |
| <picture><source media="(prefers-color-scheme: dark)" srcset=".github/assets/logos/cursor-dark.svg"><img src=".github/assets/logos/cursor.svg" alt="" width="28"></picture> | Cursor | The full skill; the checks run when the AI runs them |
| <img src=".github/assets/icons/laptop.png" alt="" width="28"> | Codex and other tools that read `SKILL.md` | The full skill; the checks run when the AI runs them |

## More of what it does

<details>
<summary><b>It remembers your taste</b></summary>

- **Open talk first.** Every run starts by asking about sites you love and why, and what you hate. All of it goes into your taste profile, and your dislikes become rules straight away.
- **Rules you confirm.** Likes and dislikes are saved with how strongly you feel and where they apply. Patterns that repeat become suggested rules, at most 3 per session, asked at the end. You keep up to 15.
- **Review board.** Directions open in a page where you switch between them, mark each Pick, Take parts or Reject, and write notes. "Copy feedback" pastes them back to the AI, so it works with any tool.
- **Fix one part.** Point at a section ("this looks AI-made") and it locks the rest, says what's wrong in plain words, and shows three fixes for just that part.
- **Other skills.** If other design skills or rules files are loaded, it tells you which could conflict and asks which one wins.

The profile is saved as `.studio/taste-profile.md` in your project, or `~/.studio/taste-profile.md` for all your projects.

</details>

<details>
<summary><b>The checks, in detail</b></summary>

1. **Short core, branch files.** `SKILL.md` is about 90 lines. The detail for each job, output and step lives in its own file, opened only when that path comes up.
2. **State file.** The skill keeps `.studio/state.json` in your project: the step, the job, whether you confirmed what's frozen, and your pick.
3. **A check script** (`scripts/check.mjs`, Node, no dependencies):
   - Won't let it edit UI files before you've confirmed the job, picked a direction and the plan exists.
   - Won't let it finish before the critique is done.
   - Scans the built files for known AI tells (placeholders, invented reviews, default fonts, eyebrow labels, design notes left on the page).
   - Does nothing in projects where design-studio isn't active.

There's also an optional [GitHub workflow](skills/design-studio/templates/github-workflow.yml) that checks `DESIGN.md` on every push.

</details>

<details>
<summary><b>Expert packs</b></summary>

Expert skills you switch on per project; only what you enable gets loaded. See [packs.md](skills/design-studio/reference/packs.md).

| Pack | From | For |
|---|---|---|
| `emil` | Emil Kowalski | Motion, feel, variant picker, stress tests |
| `impeccable` | Paul Bakaus | Critique and polish of existing UI |
| `motion` | GSAP, Motion, Three.js, Rive, Lottie | Motion identity for landing pages and games |
| `native-apple` | Apple HIG skills | Native iOS and macOS apps |

Fonts, icons, photos and other assets come from the [toolkit](https://github.com/Aydin-codes/toolkit), which ships with this plugin.

</details>

<details>
<summary><b>Finding your way around the repo</b></summary>

```
.claude-plugin/          plugin and marketplace manifests
hooks/hooks.json         Claude Code hooks that run the checks
agents/design-critic.md  fresh-eyes reviewer that sees only screenshots and the plan
tests/                   tests for the check script (node --test)
skills/toolkit/          copy of github.com/Aydin-codes/toolkit: stacks, libraries and asset sources, with licenses
skills/color-and-type-spark/  live picking sheets for colors and fonts
skills/design-studio/
├── SKILL.md             the core: rules and the nine steps
├── jobs/                new, rebrand, reskin, redesign, polish, fix a part
├── outputs/             landing, app, dashboard, report, print, game
├── reference/           one file per step, plus craft, motion and tells
├── scripts/check.mjs    the checks
├── sources/             expert rules, credited
└── templates/           state, taste profile, review board, font picker, GitHub workflow
```

In your project it writes `DESIGN.md` (the plan) and `.studio/` (state, critique, taste profile).

</details>

## Built with

| | | What it does here |
|:-:|---|---|
| <img src=".github/assets/logos/nodedotjs.svg" alt="" width="28"> | [Node.js](https://nodejs.org) | Runs the check script. No packages to install |
| <img src=".github/assets/logos/githubactions.svg" alt="" width="28"> | [GitHub Actions](https://github.com/features/actions) | Runs the tests on Windows, macOS and Linux on every push |
| <img src=".github/assets/icons/toolbox.png" alt="" width="28"> | [toolkit](https://github.com/Aydin-codes/toolkit) | The list of real fonts, icons and assets it pulls from |

## Current limits

- It's early: v0.13, tried on a handful of projects. Feedback and issues are welcome.
- The automatic checks only run in Claude Code. In other tools they depend on the AI running them.
- Mobbin's connector needs a paid plan; without it the skill uses free galleries.
- It can't watch YouTube; new design sources come in as transcripts or screenshots.

## Contributing

Found a step it skipped, or a page that still looks AI-made? [Open an issue](https://github.com/Aydin-codes/design-studio/issues/new/choose). Pull requests are welcome; [CONTRIBUTING.md](CONTRIBUTING.md) has the rules. Report security problems privately, as [SECURITY.md](SECURITY.md) explains.

## License

MIT. See [LICENSE](LICENSE).

<sub>Built on ideas and skills from Emil Kowalski (MIT), Paul Bakaus's Impeccable, Anthropic's <code>frontend-design</code>, Kole Jain's design videos, Mobbin's dashboard study and the raintree Apple HIG skills; expert skills are called, not copied. Icons from Microsoft <a href="https://github.com/microsoft/fluentui-emoji">Fluent Emoji</a> (MIT) and <a href="https://simpleicons.org">Simple Icons</a> (CC0). Flowly, specindex, The Quiet Lyceum, Seedline, Shipday and Greenleaf Landscaping are made-up examples. Photos from Wikimedia Commons: <a href="https://commons.wikimedia.org/wiki/File:Laptop_and_a_mug_(Unsplash).jpg">Laptop and a mug</a> (CC0) and <a href="https://commons.wikimedia.org/wiki/File:Messina_Orchard_garden_and_lawn.jpg">Messina Orchard garden and lawn</a> by Greghenderson2006 (CC BY-SA 4.0).</sub>
