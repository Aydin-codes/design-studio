# Toolkit

Everything design-studio can plug into, pull from or build with. Connectors and plugins were checked against Claude's directories on 28 Oct 2026. Prices and free tiers change often; check each site before relying on it.

**Why this matters:** AI-made designs look generic when there's nothing real to work with. Give Claude real material (your Figma designs, real photos, connected tools) and it does the wiring.

## Connectors (claude.ai → Settings → Connectors)

| Connector | What Claude can do |
|---|---|
| **Design** | |
| Figma | Read designs and tokens, turn designs into code |
| Canva | Search, create and export designs |
| Adobe for creativity | Edit images, remove backgrounds, Express designs, PDFs |
| Mobbin | Real app screens and flows for reference (MCP needs a paid plan) |
| Webflow | Build pages, manage CMS, add motion, publish |
| Wonder | Design canvas where designs are real code |
| **Build and ship** | |
| Vercel, Netlify, Render, Cloudflare | Deploy and host |
| Context7 | Up-to-date docs for any code library |
| Sentry | Find and debug errors |
| BrowserStack | Test across real browsers and phones |
| **Data and content** | |
| Supabase, Neon, PlanetScale, MongoDB Atlas, Airtable | Databases |
| Notion, Google Drive | Pages, docs and files |
| Sanity, WordPress.com | Content management |
| **Business** | |
| Stripe, Shopify | Payments, stores |
| Clerk | Login |
| Resend, Mailchimp, HubSpot | Email and CRM |
| PostHog | Product analytics |
| Cloudinary | Store and resize images and video |
| **AI and automation** | |
| Hugging Face, ElevenLabs, Zapier, Linear | Models, voice, automation, issues |

GitHub is attached per session so Claude can read and push code.

## Skills and plugins that pair well

| Name | Made by | What it adds |
|---|---|---|
| frontend-design | Anthropic | Distinctive, non-templated UI |
| web-artifacts-builder | Anthropic | React + Tailwind + shadcn/ui pages |
| dataviz | Anthropic | Professional charts and dashboards |
| Emil Kowalski's skills | Emil Kowalski | Motion, feel, prototypes, stress tests |
| Impeccable | Paul Bakaus | Critique, audit, polish |
| Figma | Figma | Design-to-code, design systems, motion, shaders |
| audit-suite | Community | Design, UX, performance and accessibility audits |
| A11y Enforcer | Community | Accessibility fixes (WCAG 2.2) |
| UI Color Palette | Community | Colour systems and contrast checks |
| Superdesign | Partner | Design UI on an infinite canvas |
| Codesign | Community (IMG.LY) | Editable designs, print PDFs, videos |

## Design tools, kits, icons, fonts

- **Design tools:** Figma, Framer, Webflow, Spline (3D), Penpot, Canva, Photoshop / Illustrator, Coolors / Realtime Colors
- **Component kits:** shadcn/ui, Radix UI, Headless UI (free, accessible; restyle them). Magic UI and Aceternity are flashy; use as ideas only.
- **Icons:** Lucide, Phosphor, Heroicons, Tabler, Iconify (200,000+), Font Awesome
- **Fonts:** Google Fonts, Fontshare, Adobe Fonts
- **Inspiration:** Mobbin, Godly, Awwwards, Land-book, Dribbble, Figma Community

## Images, video, audio

| Source | What | Licence |
|---|---|---|
| Unsplash, Pexels | Photos (Pexels also video) | Free |
| Wikimedia Commons | Photos, diagrams, maps | Per file |
| NASA Image and Video Library | Space imagery | Generally public domain |
| Mixkit | Stock video | Free |
| Freesound | Sound effects | Per sound (CC0 / CC-BY) |
| Pixabay Music | Background music | Free |
| Adobe Stock, Shutterstock, Getty, Artgrid, Epidemic Sound | Professional stock | Paid |

**AI generation** (Firefly, Midjourney, Ideogram, Runway, Veo, ElevenLabs, Suno) is fine for drafts and backgrounds. For logos and main characters, use a person: AI images may not be copyrightable, and they look generic.

## 3D and animation

| Source | What | Licence |
|---|---|---|
| Poly Haven | Models, textures, HDRI skies | CC0 |
| ambientCG | Materials and textures | CC0 |
| Kenney, Quaternius, Poly Pizza | Low-poly game kits and characters | CC0 (some CC-BY) |
| Smithsonian 3D, NASA 3D | Scanned real objects | Many free / CC0 |
| Fab, Sketchfab, TurboSquid, CGTrader | Marketplaces | Free + paid |
| Mixamo | Auto-rigging and character animations | Free with Adobe ID |
| Meshy, Tripo, Rodin | AI 3D drafts | Free tiers, often non-commercial |

**Web and UI motion:** GSAP (scroll and timelines), Motion (React), Lottie, Rive, Theatre.js (3D timelines). All have free versions.

## Code libraries (design-relevant)

- **Frameworks:** Next.js, Astro, SvelteKit; Expo + React Native for phones; Electron / Tauri for desktop
- **3D and games:** Three.js, React Three Fiber + drei, Phaser (2D), Babylon.js
- **Charts and content:** Recharts, Chart.js, D3, KaTeX (maths), Tiptap (rich text)
- **Quality checks:** Playwright (screenshots and tests), axe-core (accessibility), Lighthouse

## Starter stacks

| Building | Front end | Look and feel |
|---|---|---|
| Landing page / portfolio | Astro or Framer | shadcn/ui, GSAP |
| SaaS web app | Next.js + Tailwind + shadcn/ui | Motion, Lucide |
| Phone app | Expo + React Native | Reanimated, Rive |
| Dashboard / report | Next.js + Recharts | shadcn/ui |
| 3D web experience | React Three Fiber + drei | Poly Haven, Mixamo, Theatre.js |
| Browser game | Phaser (2D) or Three.js (3D) | Kenney, Quaternius |
| Printable / PDF | HTML + CSS to PDF | Google Fonts, print rules in SKILL.md |

## Licence rules

- **CC0 / public domain:** use for anything.
- **CC-BY:** free if you credit the creator.
- **Non-commercial or editorial:** never in anything you sell or that earns money.
- **AI tool free tiers:** often non-commercial; check the plan.
- **Brands and logos:** don't use them in ways that imply endorsement.
- **Keep an asset sheet:** name, source link, licence, where it's used.
