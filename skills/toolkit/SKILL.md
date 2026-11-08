---
name: "toolkit"
description: "Builder's reference for web/app/3D projects: stack choices, assets with licences, connectors, UI and anti-slop rules, and quality checks. Use when planning, building or polishing any site or app."
---

# Builder's toolkit

Reference and operating rules for building websites, web apps, mobile/desktop apps and 3D web experiences. Compiled Nov 2026. Prices, free tiers and maintenance status change: verify anything cost- or licence-critical before relying on it (Context7 or official docs/pricing pages).

Written for people who direct Claude rather than hand-writing every line. Aim for professional results, not generic AI output, and explain the architecture so the user can steer.

## Operating rules

1. **Plan in plain English first.** Before writing code, state the plan: stack, why each piece, data flow, what the user must supply. Name the concepts ("this is the back end", "this is an MCP tool") so the user learns the vocabulary. Wait for a go-ahead on anything expensive to redo.
2. **Real material beats generated.** Ask for a Figma file, screenshots of reference sites (Mobbin if connected), brand colours, logos, real copy, real data. If none exist, propose specific sources from this skill. Never ship placeholder images (`placehold.co`, lorem ipsum, fake screenshots, fake testimonials, invented numbers) as final.
3. **Use current docs.** Libraries change fast (Tailwind v4, Next.js, Three.js). If the Context7 connector is available, use it; otherwise check official docs before writing setup code. Don't guess APIs.
4. **Check licences** for every asset you add. Record it in `CREDITS.md` or `ASSETS.md`: name, source URL, licence, where used.
5. **Prefer boring, popular defaults** (below) unless the project needs otherwise. Fewer services = fewer failure points.
6. **Security and data:** never build auth or payments by hand; use a provider. Never commit secrets; use `.env` + `.env.example`. With student or personal data (e.g. school LMS data), default to read-only access, minimal data, the user's own account only, and flag privacy implications (COPPA/FERPA for US K-12).
7. **Check your work before calling it done** (see Quality gate).
8. **Explain trade-offs briefly** when choosing; one line each, not essays.

## Default stacks by project type

| Building | Front end | Back end / data | Look & motion | Host |
| --- | --- | --- | --- | --- |
| Landing page / portfolio | Astro (or Next.js) + Tailwind | none, or Tally/Formspree form | shadcn/ui or custom, GSAP or Motion | Vercel / Netlify / Cloudflare Pages |
| SaaS / web app with accounts | Next.js + TypeScript + Tailwind + shadcn/ui | Supabase (Postgres + auth + storage) + Stripe | Motion, Lucide icons | Vercel |
| Online store | Shopify (or Next.js + Shopify Storefront API) | Shopify | theme or shadcn/ui | Shopify / Vercel |
| Blog / content site | Astro or Next.js | Sanity or Payload CMS (or MDX files) | Google Fonts / Fontshare | Vercel / Netlify |
| Mobile app | Expo + React Native + TypeScript | Supabase or Firebase; RevenueCat for subscriptions | Reanimated, Rive, Lottie | EAS Build → App Store / Google Play |
| Desktop app | Tauri (small) or Electron (mature) | local SQLite or Supabase | shadcn/ui | GitHub Releases |
| 3D web experience | React Three Fiber + drei (or plain Three.js) + Vite/Next | Supabase if accounts needed | postprocessing, Theatre-style camera moves, Mixamo characters | Vercel + Cloudflare R2 for large assets |
| Browser game | Phaser (2D) or Three.js/R3F + Rapier (3D) | Colyseus / Socket.IO / Convex for multiplayer | Kenney, Quaternius assets | Cloudflare Pages / itch.io |
| Internal tool / dashboard | Next.js + shadcn/ui + Recharts | Supabase or Airtable | — | Vercel |
| MCP server (connect an app to Claude) | TypeScript or Python MCP SDK | the app's API; read-only tools first | — | stdio locally; Streamable HTTP when hosted (Cloudflare Workers, Render, Vercel) |
| Chrome extension | Vite + TypeScript (WXT or Plasmo framework) | chrome.storage or Supabase | Tailwind | Chrome Web Store |

## Back-end choices

- **Database / backend:** Supabase (default; Postgres, auth, storage, realtime, has connector + plugin) · Neon (serverless Postgres, DB branching) · PlanetScale · Firebase (mobile-first, NoSQL) · Convex (realtime TypeScript backend, good for multiplayer/live state) · MongoDB Atlas · Turso (edge SQLite) · Upstash Redis (caches, rate limits, session state that must survive restarts) · Cloudflare R2 (large files, no egress fees) / D1 / KV · Airtable (non-coders edit data) · Appwrite (open source). ORMs: Drizzle or Prisma.
- **Auth:** Clerk (fastest, hosted UI; can be proxied through your own domain via `/__clerk` to avoid school/corporate filters) · Supabase Auth (if on Supabase) · Better Auth or Auth.js (self-hosted, open source) · Firebase Auth · Auth0 / WorkOS (enterprise SSO) · Clever / ClassLink / Google Classroom (US K-12 rostering and SSO).
- **Payments:** Stripe (default; subscriptions, checkout, invoices) · Lemon Squeezy / Paddle (merchant of record, handle global sales tax) · RevenueCat (mobile in-app subscriptions).
- **Email:** Resend + React Email (transactional) · Postmark / SendGrid · Mailchimp / Beehiiv / Kit (newsletters).
- **CMS:** Sanity, Payload, Contentful; or WordPress / Webflow / Framer for site-builder style.
- **Analytics & errors:** PostHog (product analytics, session replay, feature flags) · Plausible / Fathom (privacy-friendly, no cookie banner) · Google Analytics · Sentry (errors and crashes).
- **Search:** Algolia, Meilisearch, Typesense. **Forms:** Tally, Typeform. **Automation:** Zapier, Make, n8n.
- **Hosting:** Vercel (Next.js), Netlify, Cloudflare Pages/Workers, Render (servers + Postgres), Railway, Fly.io, Replit, GitHub Pages (static).
- **AI in the product:** Anthropic API (docs.claude.com), OpenAI, Replicate, Hugging Face.

## UI and design

**Kits:** shadcn/ui (default; copy-paste React + Tailwind on Radix) · Radix UI / Headless UI (accessible primitives) · Magic UI, Aceternity UI (animated landing sections; use sparingly) · Tailwind Plus (paid official templates) · daisyUI · Mantine · MUI · Chakra.
**Icons:** Lucide (default), Phosphor, Heroicons, Tabler, Iconify (200k+ across sets; check each set's licence).
**Fonts:** Google Fonts, Fontshare (free, high quality), Adobe Fonts. Pair one display + one text face max.
**Colour:** Realtime Colors, Coolors; build a token scale (50–950) and semantic tokens (bg, fg, muted, accent, border, danger). Check contrast (WCAG AA 4.5:1 body text).
**Design tools:** Figma (connector + plugin available: read frames and tokens, implement exactly), Framer, Webflow, Spline (3D scenes for the web), Penpot, Canva.
**References:** Mobbin (real app screens; connector), Godly, Awwwards, Land-book, Dribbble, Figma Community.

**Anti-slop design rules:**
- One clear focal point per screen; real hierarchy (size, weight, spacing), not everything bold.
- Consistent spacing scale (4/8 px) and max ~2 radii values; restrained shadows.
- Specific copy: concrete nouns, numbers, the actual product. Delete any sentence that could describe any product.
- No gradient-blob hero + generic 3-card feature grid + emoji bullets by default. Start from a reference the user likes.
- Real screenshots/demos of the product beat illustrations.
- Motion should explain (state change, hierarchy, spatial continuity), 150–300 ms for UI, respect `prefers-reduced-motion`.
- Dark mode via tokens, not by inverting colours.
- Design mobile width (375 px) first; no horizontal scroll.

## Motion

GSAP (timelines, ScrollTrigger; free incl. plugins, own licence) · Motion (React, formerly Framer Motion) · Lottie / LottieFiles (After Effects exports) · Rive (interactive state-machine animations, mascots, buttons) · Anime.js · AutoAnimate (one-line list transitions) · React Native Reanimated (mobile) · View Transitions API (native page transitions).

## 3D on the web

**Libraries:** Three.js (core) · React Three Fiber + drei (helpers: cameras, loaders, Environment, Text, controls) · pmndrs/postprocessing (bloom, DoF, tone mapping) · Rapier (physics) · Babylon.js / PlayCanvas (full engines) · Needle Engine (Unity/Blender → web) · gltfjsx (model → React component) · Zustand (game state) · Howler.js (audio).

**Performance rules:**
- Use glTF/GLB. Compress with glTF-Transform (`gltf-transform optimize`): Draco or Meshopt geometry, KTX2/WebP textures, resize textures to what's visible (1k–2k usually).
- Budget: aim < 5 MB initial download for a page scene; lazy-load the rest. Show a loading state.
- Instance repeated objects; merge static meshes; bake lighting into textures where possible; cap device pixel ratio (`dpr={[1, 2]}`) and lower it on mobile/touch.
- Test on a mid-range phone/Chromebook, not just a desktop GPU. Handle WebGL context loss.
- Serve big assets from a CDN (Cloudflare R2, Vercel Blob) with long cache headers.

**Asset sources (check each item's licence):**
| Source | What | Licence |
| --- | --- | --- |
| Poly Haven | models, textures, HDRIs | CC0 |
| ambientCG | PBR materials | CC0 |
| Kenney | low-poly game kits, UI, audio | CC0 |
| Quaternius | low-poly characters, props, animation library | CC0 (some paid packs) |
| Poly Pizza | low-poly models | CC0 / CC-BY |
| Smithsonian 3D | scanned specimens and artefacts | many CC0 |
| NASA 3D Resources / NASA images | spacecraft, planets, imagery | generally free; no NASA logo or implied endorsement |
| NIH 3D, RCSB PDB (+ Mol* viewer) | molecules, proteins, anatomy | mostly free; check entry |
| Sketchfab | huge library, many free downloads | per model (CC-BY common: credit required) |
| Fab (Epic) | replaced Sketchfab Store + Unreal Marketplace (Oct 2024); Quixel Megascans | free + paid, Fab licence |
| TurboSquid, CGTrader | professional stock | paid (some free) |
| Unity Asset Store | Unity assets | per asset; many are Unity-only |

**AI 3D generators (drafts/props, clean up before hero use):** Meshy (free 100 credits/mo), Tripo (free 200 credits/mo but non-commercial; has auto-rigging), Rodin/Hyper3D, Tencent Hunyuan 3D, TRELLIS.2 (self-hosted, MIT). Free tiers are often non-commercial.

**Character animation:** Mixamo (free with Adobe ID, royalty-free; humanoids only) · Quaternius Universal Animation Library · AccuRIG (free rigging) / ActorCore (paid motions) · Rokoko, Move.ai, DeepMotion (mocap incl. from phone video) · Cascadeur (physics-assisted keyframing) · Blender (free, everything).

**How pros get 3D:** artists in Blender/Maya/ZBrush + Substance; marketplaces; photogrammetry/scans; motion capture; AI only for drafts. Claude cannot author production 3D art; it wires in, lights, optimises and animates assets the user supplies. If an asset is missing, propose 2–3 specific sources with licences, or a simple procedural/primitive stand-in clearly marked TODO.

## Images, video, audio

Photos: Unsplash, Pexels (free licences), Wikimedia Commons (per file), NASA Image Library (generally public domain); paid: Adobe Stock, Shutterstock, Getty. Illustration: unDraw, Storyset. Video: Pexels Videos, Mixkit (free); Artgrid, Storyblocks (paid); host with Mux or Cloudinary. Audio: Freesound (per sound, CC0/CC-BY), Pixabay Music, Kenney audio; Epidemic Sound, Artlist (paid). AI: Adobe Firefly (licensed training data), Midjourney, Ideogram (text in images), Runway / Google Veo (video), ElevenLabs (voice), Suno (music). For logos and main characters, recommend a human designer; AI output may not be copyrightable and looks generic.

## Code libraries worth knowing

Frameworks: Next.js, Astro, SvelteKit, React Router/Remix, Vite. Mobile/desktop: Expo, React Native, Flutter, Capacitor, Electron, Tauri. Data/state: TanStack Query, Zustand, Zod (validation), React Hook Form. Realtime: Socket.IO, Liveblocks (paid), Colyseus, Supabase Realtime. Charts: Recharts, Chart.js, D3. Content: KaTeX (maths), Tiptap (rich text), MDX. 2D games/physics: Phaser, Matter.js.

## Connectors and plugins to suggest

Check which are connected before relying on them; if a useful one isn't, tell the user it can be connected in claude.ai Settings → Connectors.
- **Design:** Figma, Canva, Adobe for creativity, Mobbin, Webflow, Wonder.
- **Build/ship:** GitHub (attach repo), Vercel, Netlify, Render, Cloudflare, Context7 (current docs), Sentry, BrowserStack.
- **Data:** Supabase, Neon, PlanetScale, MongoDB Atlas, Airtable, Notion, Google Drive.
- **Business:** Stripe, Shopify, Clerk, Resend, Mailchimp, HubSpot, Sanity, WordPress.com, PostHog, Cloudinary.
- **AI/automation:** Hugging Face, ElevenLabs, Zapier, Linear.
- **Plugins/skills:** frontend-design, web-artifacts-builder, design-studio, dataviz (Anthropic); Figma plugin; Supabase plugin; audit-suite (design/UX/perf/a11y audits); A11y Enforcer (WCAG 2.2); React/React Native engineer skills (GSAP, Reanimated, Tailwind); github-repo-polish (README and repo page).

## MCP servers (quick model)

Client = the AI app; server = your code exposing **tools** (actions, e.g. `list_assignments`), **resources** (readable data) and **prompts** (templates). Transport: **stdio** (local) or **Streamable HTTP** (hosted, needs auth, typically OAuth). Test with MCP Inspector. Start read-only, minimal scopes, one user's own data; validate inputs with Zod/Pydantic; return concise structured results; write clear tool descriptions (they are the model's only guide).

## Quality gate (run before saying "done")

- Runs from a clean clone with the documented commands; `.env.example` complete; no secrets committed.
- Visual check: take screenshots (Playwright) at 375 px and 1440 px, light and dark; fix overflow, alignment, contrast, empty/loading/error states.
- Accessibility: keyboard-only pass, visible focus, labels/alt text, axe-core or Lighthouse a11y ≥ 90, `prefers-reduced-motion` honoured.
- Performance: Lighthouse performance on mobile; images sized and lazy-loaded; 3D assets compressed; no layout shift on load.
- SEO/sharing for public pages: title, meta description, Open Graph image, real 404 status, `robots.txt`, `sitemap.xml`.
- No placeholder content, template leftovers or invented claims; `ASSETS.md` lists every third-party asset and licence.
- README follows github-repo-polish if the repo is public.

## Licence rules

CC0/public domain: use freely. CC-BY: credit the creator (CREDITS.md and in-app credits page). NC (non-commercial) or editorial-only: not in anything sold or monetised. AI tool free tiers: often non-commercial. Brand names/logos/characters (NASA, game IPs, College Board "AP"): no implied endorsement; follow their trademark guidelines. Code: check package licences (MIT/Apache/BSD fine; GPL/AGPL has obligations; some "free" libraries like GSAP use their own licence; tldraw needs a licence key in production).

## Plain-English glossary (for explaining to the user)

Front end = what you see in the browser · back end = server work you don't see · database = stored data · API = a menu one program uses to ask another for things · Node.js = JavaScript on a server · npm = JavaScript package store · React = UI from reusable components · Next.js = React + routing + server pages + SEO · Vite = fast bundler/dev server · Tailwind = styling with short class names · TypeScript = JavaScript with type checks · React Native/Expo = phone apps in React · Electron/Tauri = desktop apps from web code · C# = Unity/Microsoft language · Three.js/WebGL = 3D in the browser · glTF/GLB = web 3D model format · OAuth = "sign in with Google" · CDN = files cached worldwide · serverless = code that runs on demand · PWA = installable, offline-capable website · MCP = plug that lets an AI use an app · skill = saved instructions that teach Claude a job.