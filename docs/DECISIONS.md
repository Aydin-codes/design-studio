# Design decisions

Each decision records what we chose, why, and what it costs. If a decision turns out wrong, mark it **Superseded** and add a new one; don't edit history.

---

## 1. A navigator, not a mega-skill
**Status:** Accepted

**Context.** Installing many design skills at once makes Claude worse. Apple HIG says one thing, a brutalist style guide says another, and the model averages them into mush.

**Decision.** design-studio owns only the *process* (phases, spec, critique, taste memory). Specialist knowledge lives in expert skills it calls by name.

**Why.** The same separation real studios use: a design lead directs, specialists execute. Each expert keeps one coherent voice.

**Cost.** It depends on other people's skills being installed and staying good.

---

## 2. Call expert skills; don't copy them
**Status:** Accepted

**Context.** We could paste Emil's or Impeccable's rules into our own files.

**Decision.** Point to installed skills (`load emil's animate when...`). Don't vendor their text.

**Why.**
- **Freshness:** experts update their skills; a copy goes stale.
- **Licensing:** Emil's repo is MIT, but Apple's HIG text belongs to Apple. Linking is clean everywhere.
- **Voice:** a rewrite blends styles, which is exactly the problem decision 1 exists to avoid.

**Cost.** One more install step. Mitigated by offering the install command whenever a pack is missing.

---

## 3. One priority ladder for every conflict
**Status:** Accepted

**Decision.** When guidance disagrees: (1) what the user says now, (2) their taste profile and tells, (3) the project's existing design system, (4) enabled packs, with platform beating style, (5) skill defaults.

**Why.** Conflicts are inevitable once several experts are involved. A fixed order means Claude never blends contradictions silently, and can say *which* rule decided.

**Cost.** Lower layers sometimes lose good advice. That's intended.

---

## 4. Opt-in packs with presets
**Status:** Accepted

**Decision.** Every pack is off until a preset or the user turns it on. Packs load lazily, only when their specialty comes up.

**Why.** Context is a budget. A landing page needs about 4 files, not 40. Presets make the common case one word; `+pack` / `-pack` handles the rest.

**Cost.** A user who forgets a pack doesn't get its expertise. Presets cover most cases.

---

## 5. Leave style catalogs out
**Status:** Accepted

**Context.** UI UX Pro Max ships 67 styles and 161 palettes and is popular.

**Decision.** It's not a pack. We borrow only its idea of industry anti-patterns (no neon in banking).

**Why.** Picking from a catalog *is* templating. It's how you get the glassmorphism hero that every AI site has.

**Cost.** Less hand-holding for someone who wants a quick "make it glassmorphism." They can still ask for it directly, since the user's words outrank everything (decision 3).

---

## 6. Interview first, but only 3–4 questions
**Status:** Accepted

**Decision.** Four fixed questions: the one real thing, audience and five-second job, references with *specific reasons*, constraints. Asked as clickable choices.

**Why.** Vague briefs produce average designs. Long questionnaires get skipped. Four questions is the most a person answers carefully.

**Cost.** Some projects need more context; Claude asks follow-ups when an answer is vague.

---

## 7. Three directions, different in structure
**Status:** Accepted

**Decision.** Phase 3 always shows three directions built on three *different* layout archetypes (product-as-hero, type-led, full-bleed image, tool-first, index, narrative scroll, document). Text-left/visual-right may appear at most once.

**Why.** Three color swaps of one layout teach the user nothing (the core rule of Emil's `prototype` skill). Divergence on structure is what makes a pick meaningful.

**Cost.** Three real directions take longer than one.

---

## 8. Spec before pixels
**Status:** Accepted

**Decision.** Before building, write `DESIGN.md`: thesis, tokens, layout, **a state matrix for every component**, motion with real numbers, and acceptance criteria.

**Why.** AI reliably skips states (loading, empty, error, disabled) and invents motion values from habit. A spec forces both, and it's how real teams hand off work.

**Cost.** One extra file per project. It doubles as documentation.

---

## 9. Your tells, seeded from evidence
**Status:** Accepted

**Decision.** The skill ships with a personal checklist built from a blind test: 50 sites rated, 26 of 33 judged correctly. It includes the user's **blind spots**, not just their hits.

**Why.** Generic anti-slop lists catch generic slop. This user's eye was fooled by *plain* AI pages and by real photos over templated layouts, so the critique checks hardest there.

**Cost.** It's tuned to one person. Another user should run their own blind test.

---

## 10. Taste memory lives in the project
**Status:** Accepted

**Decision.** `taste-profile.md` is written to `.studio/` in the project (or `~/.studio/`), never into the skill.

**Why.** Saved skill files are read-only for Claude, so a skill can't learn by editing itself. A project file can grow every run and is easy for the user to read and edit.

**Cost.** A new machine or project starts empty unless the user copies the file.

---

## 11. Coach mode on by default
**Status:** Accepted

**Decision.** Claude translates vague words ("make it pop" → contrast of scale), names the principle behind each choice, and occasionally asks the user to diagnose a screen first.

**Why.** The user is learning to direct design. Better direction compounds faster than better output.

**Cost.** More words per reply. Turn it off with `coach_mode: off`.

---

## 12. Objective critique tests
**Status:** Accepted

**Decision.** Phase 7 runs fixed tests: the user's tells, swap test, squint test, five-second test, "remove one accessory," and `break-ui` with worst-case data. Findings are reported as Before / After / Why.

**Why.** "Does it look good?" can't be checked. "Would a competitor's logo fit?" can. The first test run caught a real bug this way (the next-class card showed another course's quiz under worst-case data).

**Cost.** Takes a screenshot-capable environment to do fully.

---

## 13. One SKILL.md
**Status:** Accepted, revisit in v0.2

**Context.** The plan was a folder (core/, packs/, presets).

**Decision.** The skill is a single SKILL.md (about 230 lines in v0.1, about 335 in v0.6) with the router, phases, tells and pack registry inline.

**Why.** Saving a skill from the Claude app stores exactly one SKILL.md. Shipping one file meant it could be installed in one click today.

**Cost.** All 230 lines load every time, even for a small task. v0.2 will split the tells and pack registry into reference files once multi-file installs are routine.

---

## 14. Rule zero: match the product
**Status:** Accepted (v0.5)

**Decision.** Every look and motion choice must come from what the product does. It outranks every other rule. First critique check: cover the logo.

**Why.** Borrowed tricks (multiplayer cursors on a solo app, an infra diagram on a bakery) were the most common way "good-looking" designs still felt generic.

---

## 15. Taste comes only from the user, and blocks
**Status:** Accepted (v0.2, tightened v0.6)

**Decision.** Experts supply craft (correct or incorrect). Taste (color, type, style, mood) comes only from the user. If a taste choice isn't settled, Claude stops and shows options instead of picking.

**Why.** Averaging many experts' taste produces the generic look the skill exists to avoid. Choices made for someone feel generic even when they're fine.

**Cost.** More questions. Depth (decision 16) controls how many.

---

## 16. The user picks the depth first
**Status:** Accepted (v0.2, always asked since v0.3)

**Decision.** Light, Moderate or Deep is the first question, and everything after scales to it.

**Why.** Some people want two minutes, some want thirty. v0.2 skipped the question for short prompts and the bakery test showed that broke the whole process.

---

## 17. Preference, not AI detection
**Status:** Accepted (v0.6). Supersedes the blind-test-as-onboarding idea.

**Decision.** First-run taste setup asks "which do you like, and why?" with no score. It does not test whether the user can tell AI from human work.

**Why.** Spotting AI helped find one person's tells, but what matters for everyone else is what *they* think is good design.

---

## 18. Show options, don't list them
**Status:** Accepted (v0.6)

**Decision.** Fonts, colors, effects and libraries are chosen from visual sheets rendered with the project's real content, not from names or links.

**Why.** People can't choose what they can't see.

---

## 19. Two motion budgets
**Status:** Accepted (v0.3)

**Decision.** App UI used all day stays quiet (Emil's frequency rule). Landing pages, portfolios and games need a motion identity, and a page there with nothing moving is unfinished.

**Why.** The bakery test produced a page where nothing moved, and it felt plain. The best product sites use motion to show the product working.
