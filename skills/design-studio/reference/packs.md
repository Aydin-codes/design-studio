# Packs

Packs are expert skills and tools the user switches on. Check what's installed and show a short table: pack, installed or missing, install command. Ask whether to continue without the missing ones. Never assume a pack is there.

| Pack | Source | Use for | Install |
|---|---|---|---|
| emil | Emil Kowalski: `emil-design-eng`, `animate`, `apple-design`, `prototype`, `mobile-native`, `break-ui`, `review-animations`, `pick-ui-library`, `animation-vocabulary` | motion, feel, the direction picker, stress tests, native feel | `npx skills add emilkowalski/skill` |
| impeccable | Paul Bakaus | critique, audit, polish of existing UI | `npx skills add https://github.com/pbakaus/impeccable --skill impeccable` |
| taste | Anthropic `frontend-design` + this skill | direction, anti-generic, voice | built in |
| motion | GSAP + ScrollTrigger, Motion, Lenis; Three.js / React Three Fiber, Spline; Rive, Lottie | motion identity for landing pages, portfolios, games | npm packages |
| dataviz | built-in `dataviz` skill | charts, dashboards, reports | built in |
| copy | `copy` section of `craft.md` | headlines, buttons, empty and error states | built in |
| assets | `assets.md` | icons, fonts, colors, photos, 3D, sound | built in |
| refs | Mobbin, Figma, Canva, Adobe connectors; free galleries | references, the user's own designs, image edits | connectors |
| native-apple | Apple HIG skills (raintree-technology) | real native iOS/macOS apps only | `npx skills add raintree-technology/apple-hig-skills` |

Load a pack only when its specialty comes up. Never use a style catalog as a pack; picking a style from a catalog is templating.
