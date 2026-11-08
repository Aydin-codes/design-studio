# Assets

**Assets decide whether it looks premium.** Hand-coded drawings and CSS shapes look cheap next to real photos, renders and models, however well they're coded. Never make your own when a library has one.

## Hero asset plan (before building)
Every direction names its hero asset and where it comes from, in this order:
1. **The user's own:** product photos, screenshots, footage, CAD or 3D files. Ask for them first.
2. **A real 3D model**, shown with Three.js, React Three Fiber or Spline, lit with an HDRI from Poly Haven: Sketchfab (filter to downloadable, CC licences), Poly Pizza, Spline community, Kenney, Quaternius.
3. **Real photo or video:** Unsplash, Pexels, Wikimedia Commons, NASA, Pexels Videos, Mixkit.
4. **Generated, labeled as generated:** 3D from Meshy or Tripo, images from an image model. Check the licence for commercial use.
5. **Hand-coded illustration or type-only**, only when the user picked that direction on purpose.

If you can't download (no network, sign-in needed), stop and tell the user exactly what to get: the link, the file, and where to put it. Don't fall back to drawing it yourself without saying so. A finished page with a marked "asset goes here" slot beats a hand-drawn stand-in.

What makes a 3D or photo hero look premium: good lighting (HDRI, soft shadows), real materials, one confident camera angle, and restraint (one object, lots of space).

## Sources

 No hand-drawn icons, no invented palettes, no emoji as icons. Tell the user once what they can pull from; the full list, with licences, is the `toolkit` skill.

| Need | Free source | Rule |
|---|---|---|
| Icons | Phosphor, Lucide, Tabler, Iconify | one set per project |
| Fonts | Google Fonts, Fontshare, Geist; Adobe Fonts if connected | two families max, chosen for the subject |
| Color | Radix Colors, Catppuccin, or pulled from brand images | scales, not hand-picked hex |
| Components | shadcn/ui, Radix (web); react-native-reusables (Expo) | start from their code; restyle to the spec |
| Charts | Recharts, Chart.js (web); victory-native (Expo) | the chart that fits the data |
| Maps | MapLibre | only when location is real data |
| Motion | LottieFiles, Rive | product moments only |
| Photos | Unsplash, Pexels, Wikimedia Commons, NASA | placeholders; real photos ship; never fake people |
| Video | Pexels Videos, Mixkit | only when it shows something real |
| Sound | Freesound, Pixabay Music | check each licence |
| 3D | Sketchfab (CC, downloadable), Poly Pizza, Spline community, Kenney, Quaternius; Poly Haven HDRIs and materials; Mixamo for animation | real models, never hand-built shapes |
| Image edits | Adobe or Canva connectors | edit real assets; don't fake them |

**Build from components, not from scratch.** Hand-written CSS for buttons, cards, menus and effects is where most of the "made by AI" look comes from. Start from shadcn/ui (theme it with tweakcn or the spec's tokens) and, for motion and effects, Magic UI, Aceternity, React Bits or 21st.dev. Copy their code, then restyle it to the spec; never leave their default look.

## Licences
CC0 or public domain: use freely. CC-BY: credit the creator. Non-commercial or editorial: never in anything sold or earning money. AI tool free tiers are often non-commercial. Keep an asset sheet in the project: name, source link, licence, where it's used.
