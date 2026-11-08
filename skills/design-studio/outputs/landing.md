# Output: landing page, marketing site or portfolio

**Packs:** taste, emil, motion, copy, assets, refs.

## Rules
- **The hero shows the product,** not a description of it: its UI working, its output, real photos.
- **One actionable headline** that promises what the product does. The gap before the buttons is at least twice the heading-to-subtext gap.
- **Motion identity is required.** A page here with nothing moving reads as unfinished. Define it in the spec (`reference/motion.md`): a hero moment, one or two signature moves repeated across the page, scroll choreography, hover and press responses. Every move shows what the product does.
- **Each direction** has at least one moving moment and one thing to click, drag or swipe. Show directions in a live page that plays, with a replay control, not a static canvas.
- **Real assets.** The hero uses a real asset from the hero asset plan (`reference/assets.md`): the user's photos or product, a real 3D model, or real photo or video. A hand-coded drawing as the hero reads as cheap unless the user chose an illustration-led direction.
- **Pricing** (if any): four plans max; price bigger than plan name; show the real discount and what the next plan adds.
- **Proof** (logos, testimonials, numbers) only if the user provides it. Otherwise leave a marked placeholder.

## Stack (new projects)
Astro or Next.js; GSAP + ScrollTrigger for scroll; Motion for UI transitions; shadcn/ui for components.
