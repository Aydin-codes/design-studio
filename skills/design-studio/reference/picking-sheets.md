# Picking sheets

People can't choose what they can't see. Picking sheets follow four rules:
- **Start from the chosen reference.** Options are variations on what the user took from it, not on your defaults.
- **Show options in the real thing:** the actual page or screen with real content, not a card or a specimen.
- **Vary more than one thing.** Options that differ only in hue teach nothing. Vary weight, size contrast, density and how much color is used.
- **No labels on the design.** Font and palette names go in a small key outside the preview, never on it.

**Fonts: use `templates/font-picker.html`.** Put your 3 to 4 suggested pairings (picked for this product, with one line on why) and the real headline and body text in its JSON, and open it. The user can take a suggestion or search the full library (every Google Font plus Fontshare, about 1,900), filter by category, hide common AI picks, and see each font on their own words. Their choice comes back by "Copy choice". Never pick a font for them.

For colors and fonts, follow the `color-and-type-spark` skill: it builds the sheet from real color scales and non-default fonts. The rules below cover everything else. For any taste choice that isn't settled (fonts, colors, effects, libraries), show a visual sheet in an artifact or page, not a list of names:
- **Type:** 4-6 pairings, each with this project's real headline and body text, at real sizes.
- **Color:** 4-6 palettes, each applied to the same piece of this project's real screen.
- **Effects:** 4-6 live demos of techniques that fit the product, each labeled with its library and a one-line "ask for it like this."
- **Libraries:** what each option looks and feels like in this project.

Narrow the options with rule 1 first. The user picks one (or "none of these") and can say why. Record picks and reasons in the taste profile.
