---
name: toolkit
description: "Builder's reference library, free and open-source first: stack choices, UI kits, fonts, assets with licenses, back ends, print and PDF tools, repos to learn from, connectors, numbered rules and quality checks. Helps scope the project and pick 1-3 options with reasons. Use when planning, building or polishing any site, app or document."
---

# Builder's toolkit

Reference and operating rules for building websites, web apps, mobile/desktop apps and 3D web experiences. Compiled Nov 2026. Prices, free tiers and maintenance status change: verify anything cost- or license-critical before relying on it (Context7 or official docs/pricing pages).

It also covers typography, print and PDF, back ends, assets and shipping. Every tool in the reference files has a link and a search term in brackets. Links are checked before each release (date in the README); if one fails, search the bracket text instead.

Written for people who direct an AI coding agent (Claude Code, Codex, Cursor, Gemini CLI and others) rather than hand-writing every line. Aim for professional results, not generic AI output, and explain the architecture so the user can steer.

## How to use this skill

This skill tells the agent what exists (stacks, libraries, free assets, example repos) and how to check the work. For taste decisions (colour, type, layout direction) use a design skill such as design-studio (check my repositories for it) if available, then use this skill to build it.

At the start of a task:
1. Name the project type and pick the matching row in **Default stacks**. Say which row and why in one line.
2. List the assets the project needs and where each will come from, in this order:
   1. the user's own photos, product, CAD or 3D files
   2. a real 3D model or real photo/video from a free source (the assets page is coming soon; until then, read the license on the source's own site)
   3. generated, and labelled as generated
   4. hand-coded, only by choice
   Ask the user for anything only they have: screenshots, logos, real content.
3. If the stack has an example repo below, read its relevant example or source before writing code (clone shallowly or fetch the file), and say which one you used.
4. Build, then run the **Quality gate**.

## Decision model

Use this whenever the user has to choose a tool, library or asset source.

1. **Scope first.** Ask only what you can't infer: what it is, who uses it, what already exists (logo, photos, data, a repo), free only or paid OK, deadline.
2. **Open one branch file** from **Where to look**. Don't load other branches. If the page is marked *coming soon*, use this file's stack table and rules plus the official docs, and say so.
3. **Rank** the options in that file by, in order: fits the stack → free → license allows this use → commits in the last 12 months → an agent can install it (npm, shadcn registry, MCP or download) → popularity.
4. **Answer with 1-3 picks**, one line each: name, link, why it fits, license. Start with the file's **Default** unless there's a reason not to.
5. If nothing fits, use the file's **Big lists** links, or the Context Awesome MCP if connected, and apply the same ranking.

Each branch file has three tiers: **Default** (one pick), **Strong alternatives** (3-5, each with "use when"), **Big lists** (links to larger awesome lists, not copied in).

## Operating rules

1. **Plan in plain English first.** Before writing code, state the plan: stack, why each piece, data flow, what the user must supply. Name the concepts ("this is the back end", "this is an MCP tool") so the user learns the vocabulary. Wait for a go-ahead on anything expensive to redo.
2. **Real material beats generated.** Ask for a Figma file, screenshots of reference sites (Mobbin if connected), brand colours, logos, real copy, real data. If none exist, propose specific sources from this skill. Never ship placeholder images (`placehold.co`, lorem ipsum, fake screenshots, fake testimonials, invented numbers) as final.
3. **Use current docs.** Libraries change fast (Tailwind v4, Next.js, Three.js). If the Context7 connector is available, use it; otherwise check official docs before writing setup code. Don't guess APIs.
4. **Check licenses** for every asset you add. Record it in `CREDITS.md` or `ASSETS.md`: name, source URL, license, where used.
5. **Prefer boring, popular defaults** (below) unless the project needs otherwise. Fewer services = fewer failure points.
6. **Security and data:** never build auth or payments by hand; use a provider. Never commit secrets; use `.env` + `.env.example`. With personal data, default to read-only access, minimal data, the user's own account only, and flag privacy implications.
7. **Check your work before calling it done** (see Quality gate).
8. **Explain trade-offs briefly** when choosing; one line each, not essays.
9. **Free and open source first.** Default to free, open-source tools and CC0/public-domain assets. Only suggest a paid service when no free option does the job; then label it **(paid)**, say why, and give the closest free alternative. If the user asks for paid options, list them separately at the end.

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
| MCP server (connect an app to an AI agent) | TypeScript or Python MCP SDK | the app's API; read-only tools first | — | stdio locally; Streamable HTTP when hosted (Cloudflare Workers, Render, Vercel) |
| Chrome extension | Vite + TypeScript (WXT or Plasmo framework) | chrome.storage or Supabase | Tailwind | Chrome Web Store |
| Printed document / PDF | Typst, or HTML + Paged.js | data files (CSV, JSON) | fonts from `reference/frontend/type.md` | PDF file |

Links for every name in this table will be in the matching branch file. Until that page is written, use the official docs.

## Where to look

Open only the file the task needs. Only the fonts page is written so far; the others are marked *coming soon*.

| Need | Open |
| --- | --- |
| Scoping questions, project types | *coming soon* |
| Frameworks | *coming soon* |
| Components (base and animated kits, blocks), icons, colour | *coming soon* |
| Real-app references, flows, forms, accessibility, copy | *coming soon* |
| Fonts by style, type scale, overused AI fonts | `reference/frontend/type.md` |
| Animation libraries, effects, shaders, smooth scroll, Lottie, Rive | *coming soon* |
| 3D engines, helpers, performance rules | *coming soon* |
| Charts and maps | *coming soon* |
| Databases, auth, payments, email, files, search, realtime, jobs, AI features | *coming soon* |
| Photos, public domain, illustration, icons, 3D models, textures, video, audio | *coming soon* |
| Tools to make your own assets (Blender, Krita, Inkscape…) | *coming soon* |
| AI image, 3D, video, voice and music generators | *coming soon* |
| Mobile, desktop, extensions, games, MCP servers | *coming soon* |
| Make, edit, read and OCR PDFs; print templates | *coming soon* |
| Hosting, CI, domains, analytics, errors, SEO | *coming soon* |
| Tests, accessibility, performance, security tools | *coming soon* |
| Full MUST / SHOULD / NEVER list | *coming soon* |
| Connectors, skills, plugins, shadcn registries | *coming soon* |
| Repos to read, awesome lists, courses | *coming soon* |

## Top rules

A full list, with sources, is coming soon on its own page.

- MUST: Hit targets at least 24 px, and at least 44 px on mobile. ([Vercel](https://github.com/vercel-labs/web-interface-guidelines))
- MUST: Mobile input text at least 16 px, so iOS doesn't zoom. ([Vercel](https://github.com/vercel-labs/web-interface-guidelines))
- MUST: Body text contrast at least 4.5:1 (WCAG AA). ([WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/))
- MUST: Visible focus ring on everything you can click or type in. ([Vercel](https://github.com/vercel-labs/web-interface-guidelines))
- MUST: Honour `prefers-reduced-motion`. UI motion 150-300 ms.
- MUST: Spacing on a 4/8 px scale; at most 2 corner-radius values.
- MUST: Works at 375 px wide with no horizontal scroll.
- MUST: At most 2 typefaces; body lines under 80 characters. ([frontend-design](https://github.com/anthropics/skills))
- MUST: Status shown by more than colour (icon or text too). ([Vercel](https://github.com/vercel-labs/web-interface-guidelines))
- NEVER: Disable browser zoom. ([Vercel](https://github.com/vercel-labs/web-interface-guidelines))
- NEVER: Block paste in inputs. ([Vercel](https://github.com/vercel-labs/web-interface-guidelines))
- NEVER: Ship placeholder images, lorem ipsum, fake testimonials or invented numbers.

## Quality gate (run before saying "done")

- Runs from a clean clone with the documented commands; `.env.example` complete; no secrets committed.
- Visual check: take screenshots (Playwright) at 375 px and 1440 px, light and dark; fix overflow, alignment, contrast, empty/loading/error states.
- Accessibility: keyboard-only pass, visible focus, labels/alt text, axe-core or Lighthouse a11y ≥ 90, `prefers-reduced-motion` honoured.
- Performance: Lighthouse performance on mobile; images sized and lazy-loaded; 3D assets compressed; no layout shift on load.
- SEO/sharing for public pages: title, meta description, Open Graph image, real 404 status, `robots.txt`, `sitemap.xml`.
- No placeholder content, template leftovers or invented claims; `ASSETS.md` lists every third-party asset and license.
- README follows github-repo-polish if the repo is public.

## License rules

CC0/public domain: use freely. CC-BY: credit the creator (CREDITS.md and in-app credits page). NC (non-commercial) or editorial-only: not in anything sold or monetised. AI tool free tiers: often non-commercial. Brand names/logos/characters (NASA, game IPs): no implied endorsement; follow their trademark guidelines. Code: check package licenses (MIT/Apache/BSD fine; GPL/AGPL has obligations; some "free" libraries like GSAP use their own license; tldraw needs a license key in production).

Some libraries can be installed into a user's project but never copied into another repo (React Bits, Aceternity UI, Animate UI). Each branch file marks these.

## Adding a new tool

A new find goes in as a **candidate** with a link and a search term. It becomes **verified** only when all five are true:
1. License read; it's clear whether it can be installed, bundled or only linked.
2. Commits in the last 12 months.
3. An agent can install it (npm, shadcn registry, MCP or download).
4. Works with the stack it's listed under.
5. A free demo you can actually see.
