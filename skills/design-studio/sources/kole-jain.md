# Source: Kole Jain

Product designer and YouTuber. Rules below are distilled from three of his videos, in our own words. Credit him when they're used.

Videos: (1) redesigning a vibe-coded SaaS dashboard, (2) designing your first mobile UI, (3) teardown and redesign of a restaurant-software landing page.

---

## Tells (add to critique)
- Emoji used as icons
- Gradient circles with initials as avatars
- The same KPI row repeated across screens
- Cards or buttons that do nothing when tapped
- Icon grids on a landing page where product screenshots should be
- **No images anywhere on a landing page.** It reads as vibe-coded and robotic
- A site that says who it's for but looks like it has never met them ("for restaurant owners," with nothing that looks like a restaurant)

## Color
- Never let AI pick colors. Build the palette from the brand's own images, then add one or two accents.
- Color comes from data (charts, status) more than from decorated buttons and icons.

## Layout and structure (apps)
- Information goes where people look for it. Rarely used nav goes into a popover.
- Busy cards get simpler: actions into a ••• menu, chips to icons, the number people care about on the right.
- Match the container to the content: a sparse side panel becomes a modal; advanced options are collapsed by default.
- Use tabs on pages that will grow, so new features slot in.
- Pick the chart that fits the data (a map with the numbers beside it, not a default bar chart).
- Look for low-effort, high-value features (for example, a toggle to compare items).

## Pricing
- Four plans max. The price is bigger than the plan name.
- Show the actual discount, and show what the next plan adds.

## Mobile
- **Nav:** a bottom bar with 3–4 tabs (5 is the hard limit), with the main action broken out. If there's too much for a bar, make the sidebar a home page (the Notion pattern).
- Tap targets are at least 44px.
- **Type gets bigger on mobile, not smaller.** iOS body text is 17px; macOS is 13px.
- **One screen does one thing.** The home screen is the only exception. Need something new? Add a page, not a busier layout.
- **One direction per section:** stack vertically or scroll horizontally, never both.
- **Four building blocks:** cards, text/links, images, inputs. Don't nest cards inside cards; group with whitespace instead.
- **Bottom sheets** for choices made in context (pick a template without leaving the editor).
- **Actions are contextual:** the tab bar hides in an editor, and a picker shows only confirm and close.

**Gestures**
- **Swipe back:** the background shifts about 35% and slides in with it.
- **Sheets:** the background scales down as the sheet rises.
- **Long press:** blur the rest of the screen and show actions or a preview.
- **Swipe up:** search.

**Empty states, two kinds**
- **First run:** point at the main action, then a short popover explaining how it works.
- **No results:** say nothing matched, suggest fixes for typos, and offer a way out.

## Landing pages: his process
1. **Identity first, no formula.** Start from one mood image. Crop, darken, add noise, set the brand name on it. Collect a few more images with the same mood.
2. Pull the palette **from those images**; add accents.
3. Add texture from the subject's world (a kitchen counter, a tablet in use).
4. **Fonts fit the subject.** A serif can feel like a printed menu. A serif is fine when the subject calls for it; the tell is a serif used as decoration with no reason.
5. Make feature icons in the accent colors, then a logomark.
6. **Frankenstein the wireframe.** For each section, take one from a real site you like and note what you'd change: "this hero, but with restaurant objects scattered"; "these tabs, but a bigger image and 90% less text." Keep only the wireframe; throw away their styling.
7. **Layout and identity are separate.** The same wireframe with a different identity feels like a different site.

## Landing page craft
- One actionable headline that promises exactly what the product does.
- The gap before the buttons is at least twice the gap between the heading and subtext.
- "Scattered" images are ordered: large below, small on top, a safe margin around the text.
- Darken the edges to pull the eye to the center; noise adds texture and helps text contrast.
- Sections can switch treatment (moody image section, then a clean cream section with a graph-paper texture) as long as the identity holds.

## Motion
- **A motion identity is 1–2 moves repeated across the site,** not a different effect per section.
- Motion directs the eye. Smooth hard breaks between sections: slide the old section away and blur its text while the new one slides over.
- Rotate important items on a timer when you want people to see all of them. A slight zoom on hover.

## Tools he uses
- Mobbin (references; the MCP needs a paid plan)
- Relume (paid component library with an MCP)
- An accent-color site called "Anchor" (exact name unverified)
- His Figma assets are linked under each video
