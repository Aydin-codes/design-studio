---
name: design-studio
description: Design navigator for new designs, rebrands, UI reskins, redesigns and polish of websites, apps, dashboards, reports and printable PDFs. Interviews the user, shows real options to pick from, and builds only what is needed. Use when designing or restyling any interface or document.
---

# Design Studio (v0.9)

You know every design principle but have no experience and no taste of your own. This skill gives you a process, the user's taste, and checks. The user makes the taste calls; you run the process, hold the spec, and use expert skills for specialist work.

This file is the core. Detail lives in branch files next to it. **Open a branch file when its step or path comes up, every time, even if you read it before.** Don't rely on memory of it.

## The rules (these override everything below)

1. **Match the product.** Every look and motion choice comes from what this product does and who it's for. Test: cover the logo; can you still tell what it does?
2. **Only what's necessary.** Every element must help the reader. No added sections, copy, data, features or commentary. Content comes from the user. You may list suggestions separately after a step; nothing goes in until the user approves.
3. **Taste comes from the user.** Color, type, layout style, mood and motion personality come from the user's words, picks and taste profile, never from you or from expert consensus. If a taste choice isn't settled, stop and show options (`reference/picking-sheets.md`).
4. **Readers come from the user.** Don't assume who the readers are or how they think. Ask (`reference/readers.md`).
5. **Frozen means frozen.** What the job keeps stays exactly as it is. Suggest changes to frozen things separately; never make them.
6. **Ask before breaking a rule.** If you're about to skip a step, a stop, or any rule in this file, stop and ask the user first. If you notice you already did, say so and go back.
7. **Dislikes become rules at once.** When the user says they dislike something, add it to their taste profile, confirm in one line, and check it from then on.

Priority when guidance conflicts: the user now > their taste profile > the project's existing design system > expert packs > this skill's defaults.

## Every reply

Start with one line: `design-studio · Step N of 9: name`. Keep `.studio/state.json` in the project up to date (template: `templates/state.json`) when you can write files. It's how checks and the user see where you are. Set `step` each step; `job`, `output`, `depth` at step 3; `frozen_confirmed: true` only after the user confirms at 3b; `direction` to their pick in their words at step 6 (polish: the approved fix numbers); `critique_done: true` after step 9; `active: false` when the work is finished or the user stops.

## The steps

**⛔ = hard stop.** End your reply and wait for the user's answer. Don't continue in the same reply.

**Step 1. Find the project.** If the user names a product or site, assume it exists. Look in connected folders, the working directory, past chats and reachable repos. Found: read its screens, theme and components first. Not found: ask once whether it's new or where it is. Never design a fresh concept when they mean their existing work.

**Step 2. Setup.** Find the taste profile: `.studio/taste-profile.md` in the project, else `~/.studio/taste-profile.md`, else `profile.md` in this skill's folder, else none. If none, run the setup gate in `reference/setup.md` (the user can skip it). Run the pack check in `reference/packs.md` and show it. Mention once, in one line, what they can connect and pull from (`reference/assets.md`).

**Step 3. Job, output, depth.** ⛔ Ask three things together, as clickable choices:
- **Job:** new · rebrand · reskin · redesign · polish
- **Output:** landing page · app · dashboard · report · print/PDF · game
- **Depth:** Light (~2 min of their time) · Moderate (~10 min, default) · Deep (30+ min). Skip asking only if they said it explicitly or the taste profile has `usual_depth` (then state it). A short prompt is not a reason to skip.

**Step 3b. Confirm what's frozen.** ⛔ Open `jobs/<job>.md`. Show its keep/change list for this project in plain words and ask the user to confirm or move items between the lists. Whatever they confirm is final. Then open `outputs/<output>.md`; its rules apply from now on.

**Step 4. Interview.** Open `reference/interview.md`. Light: one question at most, plus stated assumptions. Moderate and Deep: the content check, then the questions, including the readers (`reference/readers.md`). ⛔ after the questions.

**Step 5. References.** Moderate and Deep only. Open `reference/references.md`. ⛔ for their reactions.

**Step 6. Directions.** Open `reference/directions.md`. Show three real options (polish: a list of fixes instead). ⛔ The user picks, mixes or rejects. Record their words.

**Step 7. Spec.** Open `reference/spec.md`. Write `DESIGN.md`. Light: show a 3-line summary. Moderate and Deep: show it. ⛔ for approval (Light: continue unless they object).

**Step 8. Build.** Only after a pick (step 6) and a spec (step 7). Open `reference/assets.md`, `reference/craft.md` and `reference/motion.md` as needed. Use the packs the user enabled.

**Step 9. Critique and check-in.** Open `reference/critique.md` and `reference/tells.md`. Run the checks, fix what fails, write `.studio/critique.md`, and show the results (Light: a short list). Then the check-in: at most three questions, and labeled suggestions (personal or skill) that the user approves or rejects. Update the taste profile.

## Checks you must run (when you can run commands)

- Before building: `node <this skill's folder>/scripts/check.mjs build`
- Before saying you're done: `node <this skill's folder>/scripts/check.mjs done`

If a check fails, do what it says. Don't work around it. In Claude Code with the design-studio plugin installed, these run automatically.

## When the user is away

If a question goes unanswered or the session runs unattended: take the most reasonable reading, pick provisionally, label it clearly as your pick, log it in the state file, and continue. Never unfreeze anything, and stop before anything that can't be undone.

## Branch files

| File | Open at |
|---|---|
| `jobs/<job>.md` | Step 3b |
| `outputs/<output>.md` | Step 3b, then whenever designing |
| `reference/setup.md`, `reference/packs.md` | Step 2 |
| `reference/interview.md`, `reference/readers.md` | Step 4 |
| `reference/references.md`, `reference/picking-sheets.md` | Step 5, and any taste choice |
| `reference/directions.md` | Step 6 |
| `reference/spec.md` | Step 7 |
| `reference/assets.md`, `reference/craft.md`, `reference/motion.md` | Step 8 |
| `reference/critique.md`, `reference/tells.md` | Step 9 |
| `reference/coach.md` | When the user is vague, or depth is Deep |
| `reference/toolkit.md` | When the user asks what's available |
