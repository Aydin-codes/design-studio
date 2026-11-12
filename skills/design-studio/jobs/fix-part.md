# Job: fix a part

For when the user points at one part ("this section looks like Claude", a screenshot with a circle, "the pricing cards").

**Keeps (frozen):** everything outside the part they pointed at.
**Changes:** only that part.

**Confirm with the user:** name the part back in one line ("the 'How it works' section, from its heading to the timeline") and confirm the edges. ⛔

Then, in this order:
1. **Say what's wrong, in plain words.** List each problem you see in that part, most important first, and give the design term for each once ("the tilted card is decoration posing as personality"). Check it against the user's taste rules and `reference/tells.md`. Ask: "Anything I missed, or anything you actually like here?" ⛔
2. **Three fixes for just that part,** on the review board (`templates/review-board.html`), shown in place on the real page so the user sees it with its neighbours. They should differ in approach, not shade: for example, replace the diagram with real output; same structure with one accent and real type; a different layout for the same content. Each names its signature element and its asset.
3. **The user picks or mixes.** Record it as `direction` in `.studio/state.json`.
4. **Apply only that,** then run `check.mjs tells` and the critique on that part, and check nothing outside it changed.

No interview, no references step and no spec beyond a short note in `DESIGN.md` (create it if missing) saying which part changed and why. Any rule the user states along the way goes into their taste profile.
