---
name: "color-and-type-spark"
description: "Use when choosing or critiquing colors or fonts for any design. Builds a live picking sheet from real color-scale packages and non-default fonts so the user recognizes what they want instead of recalling it."
---

# Color & type spark

Color and font choices are where AI design dies. The model picks several mid-saturation, mid-lightness hex values with no dominant hue (muddy, "grayish", lifeless) and defaults to the tell fonts. And it decides alone, which produces generic results even when each choice is fine.

The fix rests on one fact about how people choose: **recognition beats recall.** A user — novice or expert — can't ask for the font or hue they've forgotten exists. The model's job is not to pick; it's to surface real, specific options as a *spark* the user reacts to. This holds for pros too: they know more than the model, they just need reminding what's on the shelf.

So never pick color or fonts alone. Start from a human-made reference, pull from real sources, build a live picking sheet, and let the user choose and criticize.

## Start from a reference

Before building any options, get at least one reference made by people and shipped for real: a site, app, poster, package or printed page whose color or type the user likes. Ask the user first. If they have none, find two or three (no AI galleries, no concept shots) and show them as screenshots. Ask what to take from each ("the black-and-orange of this one", "the type size contrast of that one"). Every option on the sheet is a variation on that, not on your defaults.

## Color: why it looks dead, and the rule

The grayish look comes from three mistakes: (1) several hues all at similar saturation and lightness, so nothing dominates; (2) desaturating "to be tasteful"; (3) neutrals warmed into brown/cream while the accent is cool, or vice versa, so contrast collapses toward gray.

Every palette, instead:
- **Commit to ONE saturated accent**, drawn from the subject's real world (emergency orange from signage, blueprint blue from drawings, topo green from contour maps). Not an invented brand hue.
- **Neutrals are near-black and near-white**, not brown and cream. True darks and lights are what make an accent read vivid. If the "ink" is `#1B1713` and the paper is cream, everything is gray no matter how bright the accent.
- **Use real engineered scales, never hand-picked hex.** The saturated step (Radix step 9–10, Tailwind 500–600, Open Color 6–8) is already tuned; hand-picking lands in the muddy middle.
- **Use color sparingly** over lots of neutral — one accent for links, one rule, one warning color.

Sources (install or fetch, don't invent):
- `@radix-ui/colors` — 12-step scales per hue, light + dark; step 9 is the pure vivid, step 12 the near-black of that hue.
- `open-color` — vivid practical scales.
- Tailwind's default palette; Catppuccin for a themed set.
- Or pull a palette from a real reference image of the subject.

## Type: skip the tells, pick for the subject

Never default to Inter, Geist, Space Grotesk, or Instrument Serif — the slop catalogs list these *because* they're the default. Pick two faces (one display, one text) chosen for the subject, from Google Fonts or Fontshare. Pair for contrast of role, not decoration (a slab display with a humanist sans; a grotesque with a reading serif).

## The picking sheet (the actual deliverable)

Build one live HTML page, not a list of names. Changing fonts and colors doesn't change Claude's default arrangement, so the sheet must avoid it:
- A real slice of *this* project (real headline, a paragraph of real body, a warning line, a couple of data rows, a link) rendered at real sizes.
- 4–6 palettes, each a committed accent over near-black/near-white neutrals, applied live to that slice. Show accent / ink / paper swatches in the key beside the preview, not inside the design.
- 4 type pairings, each rendered live on the slice. If design-studio is installed, use its `templates/font-picker.html` so the user can also search the full font library.
- **Show options in the real thing.** The actual page or screen with its real layout, not a card or a specimen block.
- **Vary more than hue.** Four options that are the same layout with the accent swapped teach nothing. Vary weight, size contrast, density and how much color is used, as well as the hue.
- **No labels on the design.** Font and palette names go in a small key outside the preview, never on the design itself.
- **None of Claude's decoration:** no short colored bar under headings, no uppercase mono labels, no colored uppercase table headers, no single colored callout line, no swatch row inside the design.
- A Light/Dark toggle, so the accent is seen at full strength on true black as well as on white.
- The user taps to apply, and can mix ("Blueprint palette, Utilitarian type, dark") and criticize. Record picks and the reasons in the taste profile.

Options are narrowed by fit-to-subject first; the user makes the final call. After they choose, apply it to the full design, then run a screenshot pass (desktop and phone, light and dark) before calling it done.

## Craft check

- AA contrast (4.5:1 body) in both themes — verify, don't assume.
- The accent works on both the light and dark background.
- Neutrals and accent share a temperature direction so they don't fight.
- No more than two type families; one display, one text.