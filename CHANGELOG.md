# Changelog

## v0.10
- The plugin now includes two companion skills: `toolkit` (stacks, libraries and asset sources with licences) and `color-and-type-spark` (live picking sheets for colors and fonts). design-studio points to them instead of keeping its own copies.
- Teaches the words: when you describe something in plain language, it tells you the design term and the source.
- Copy rule: every line must pass "could this sentence describe any other product?"
- Starts from human-made references, always: your own first, otherwise two or three real ones it finds and shows. Building is blocked until one is recorded.
- Picking sheets show options in the real page, vary more than hue, and never label the design.
- New tells for Claude's decoration habits: short colored bar under headings, uppercase mono labels, colored table headers, swatch rows.
- A tell scan (`check.mjs tells`) searches the built files for known AI tells. Placeholders, invented social proof and design notes on the page block finishing.
- Real assets first: every direction names its hero asset and source (your photos, a real 3D model, real photo or video, then generated). No hand-coded drawings as the hero unless you pick that.
- Builds from component libraries (shadcn/ui, Magic UI, React Bits) instead of hand-written CSS.
- A fresh-eyes `design-critic` agent reviews screenshots without seeing the builder's chat; you pick which fixes to apply.
- References are shown as real screenshots; new reference set for tech-forward hardware sites.
- More tells: the uppercase-label + serif + pill-button kit, pastel color soup, leftover placeholders, design notes on the page.
- For learning products, it offers three research-backed rules (no distracting detail, no countdown pressure, feedback that explains why). You approve each one.

## v0.9
- Split into a short core plus branch files that open by job, output and step, so Claude reads only what it needs and re-reads it at each step.
- Confirms what the job keeps and changes before doing anything; you can move items between the lists.
- Readers come from you. The skill asks who they are and never invents personas or rules about them.
- Checks that actually stop it: a small script blocks building before you've picked a direction and approved the plan, and blocks finishing before the critique. Runs automatically in Claude Code; any other tool can run it by hand.
- Installs as a Claude Code plugin, with `npx skills add`, or as a zip in the Claude app.

## v0.8
- Pick the job first: new, rebrand, reskin (new UI, same UX), redesign or polish. What's frozen stays frozen.
- Rule one: only what's necessary. Content comes from you; Claude only suggests, separately.
- Designs for the reader's state of mind; first-run setup; an end-of-run check-in; a full toolkit of what you can pull from.

## v0.7
- Asks for your own idea and how the design will really be used (desk, phone, print).
- Every image or diagram must have a job; print and PDF rules added.
- Your dislikes become rules the moment you say them.

## v0.6
- First-run taste setup: pick what you like, and say why.
- Fonts, colors and effects are chosen from visual sheets, never picked for you.
- Every landing-page direction moves and has something to interact with.

## v0.5
- Rule zero: the design must match what the product is.

## v0.4
- Each screen gets a planned look order: what you see first, second, third.

## v0.3
- Always asks how deep to go, and shows which step it's on.
- Motion identity for landing pages; quiet motion for app UI.

## v0.2
- Finds your existing project before designing.
- Light, Moderate and Deep modes.

## v0.1
- First version.
