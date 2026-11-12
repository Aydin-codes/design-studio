# Critique (step 9)

Screenshot at desktop and phone width where possible.

**Fresh-eyes review first.** The builder can't judge its own work well; it reads its own choices as reasonable. Where you can run a separate agent (in Claude Code, the plugin's `design-critic` agent), give it only: the screenshots, `DESIGN.md`, `reference/tells.md`, the taste profile and the job's keep list. Not the chat, your reasoning or the code. Show its findings to the user, who picks which to fix. Elsewhere, offer the user a short prompt to paste into a fresh chat with the screenshots.

Then run `node <skill folder>/scripts/check.mjs tells`. It finds placeholders, invented social proof, design notes on the page, default fonts, eyebrow labels, purple gradients and other known tells. It's the floor, not the ceiling.

Then run these in order and fix what fails:
1. **Cover the logo:** can you still tell what the product does?
2. **Tells:** the user's rules from the taste profile (including any added this session), then `tells.md`. A hit gets fixed, not explained away.
3. **Frozen check:** nothing on the job's keep list changed.
4. **Nothing extra:** no sections, copy, data or features the user didn't provide or approve.
5. **Every visual has a job.** If you can't say what it helps the reader do, remove it.
6. **Readers and real use:** check it as the readers would use it (phone at arm's length, printed in grayscale, a two-second glance).
7. **Look order:** blur the screenshot; does the eye hit the spec's 1st, 2nd and 3rd in order?
8. **Motion:** moving outputs have the hero moment and signature moves; app UI has no motion on frequent actions.
9. **Signature element:** the one thing only this site has is actually built and visible above the fold, not just named in the spec. Sections made only of boxes, borders, pills and lines, with no real asset, fail.
10. **Remove one accessory.**
11. **Placeholder sweep:** search the built files for "placeholder", "lorem", "TODO", "group colour", "Item 1" and similar, and for notes about the design itself. Remove or replace each.
12. emil `break-ui` (worst-case data) and `review-animations`; Impeccable `critique` if enabled.

Write the results to `.studio/critique.md`: each check, pass or fixed, and what changed. Show the user (Light: a short list; Moderate and Deep: before/after with why). Set `critique_done: true` in `.studio/state.json`.

## Check-in
Ask at most three short questions (Light: just the first): What felt off? Anything to always or never do? Was the process too long or too short?

Then offer suggestions, each labeled, applied only if the user approves:
- **Personal:** goes into their taste profile.
- **Skill:** a change to this skill (shown as an updated skill to save, a SKILL.md edit, or a pull request to the design-studio repo).

Record the run's likes and dislikes as notes and offer at most 3 suggested rules (`reference/taste-rules.md`). Append a short dated line to the taste profile's project log: job, depth, picks, rejections and why.
