# Output: app (web or mobile)

**Packs:** taste, emil (including mobile-native), copy, assets, refs.

## Rules
- **Motion is quiet.** Things people use many times a day are fast and subtle, or don't animate. Motion confirms actions and shows where things came from. Keyboard and 100+/day actions never animate.
- **Information where people look for it.** Rarely used navigation goes in a popover or settings.
- **Busy cards get simpler:** actions into a ••• menu, chips to icons, the number people care about on the right.
- **Match the container to the content:** a sparse side panel becomes a modal; advanced options are collapsed.
- **Tabs** on pages that will grow.
- **Color comes from data and state** more than decoration.
- **Every component has every state:** default, hover, pressed, focus, disabled, loading, empty, error.

## Mobile (from Kole Jain)
- Bottom bar with 3-4 tabs (5 max), main action broken out. Tap targets at least 44px.
- Type gets bigger on mobile, not smaller (iOS body is 17px).
- One screen does one thing (home excepted). New needs get a new page, not a busier layout.
- One scroll direction per section. No cards inside cards; group with space.
- Bottom sheets for choices made in context. Hide the tab bar in editors.
- Two empty states: first run (point at the main action) and no results (say so, suggest, offer a way out).

## Stack (new projects)
Next.js + Tailwind + shadcn/ui on web; Expo + React Native with react-native-reusables on phones.
