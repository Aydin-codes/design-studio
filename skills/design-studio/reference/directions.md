# Directions (step 6)

Show three real options the user can open and compare, with real content. (Polish job: a list of fixes instead; see `jobs/polish.md`.)

## They must differ meaningfully
The job decides the axis:
- **Three layouts** (new or redesign): from product-as-hero, type-led, full-bleed image, tool-first, index or catalog, narrative scroll (marketing only), document.
- **Three identities on one layout** (rebrand, reskin, or new): different color, type, texture and motion personality.

Say which axis you chose and why. Three versions that differ only in color teach the user nothing.

## Rules
- If the user brought their own idea, direction 1 is built from it, faithfully. The other two branch off it.
- All three follow the rules in SKILL.md and the output file. They differ in *how* they show the product, not in whether they do.
- Text-left, image-right may appear at most once, and only on purpose.
- Each direction gets one line on the idea behind it, one on its cost, one naming its hero asset and source (`reference/assets.md`), and one naming its **signature element**: the one thing only this site would have (a custom illustration style, real photography of the actual thing, a custom or unusual typeface, a layout or interaction that teaches the product). Cover the logo: the signature should still say whose it is. A tilt, a gradient or a color isn't a signature.
- Moving outputs (landing, portfolio, game): show directions in a live page that plays, with a replay control. Static UI: a canvas is fine.
- Show one direction at a time, full size, with instant switching (emil `prototype` pattern).

## Review board (every depth)
Copy `templates/review-board.html` next to the direction files, fill in its JSON (name, file, idea, cost, hero asset, reference) and open it, or tell the user to. It works offline in any browser, whatever AI tool built it. The user switches between directions, marks each Pick, Take parts or Reject, and writes notes. Their notes come back to you by "Copy feedback" (pasted into the chat) or "Download feedback.md" (saved in `.studio/`); read whichever arrives. Every like and dislike in it goes into the taste profile with its reason.
- In the Claude app, a published artifact can use its own comments instead; still accept pasted feedback.
- Reuse the board for picking sheets and for before/after views of fixes.
- If no browser is available, show the directions and collect notes in chat.

## After the pick
Record the user's words verbatim in `.studio/state.json` (`direction`) and the taste profile. "None of these": ask what each got wrong, then make three new ones that move away from all of them.
