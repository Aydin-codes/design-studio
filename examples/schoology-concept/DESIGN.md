# DESIGN.md: Schoology student app (redesign concept)

## Thesis
A student's school day, on the bell schedule: what class is next, what's due in it, and what's overdue, readable in five seconds between periods. The one real thing is *their* day: periods, rooms, and the work attached to each.

## Assumptions (made unattended; confirm or override)
- Audience: high-school students on phones, opening the app 5–15 times a day between classes.
- Platform: mobile web / PWA first. Today's Schoology app is a web view, and missing content is the top complaint.
- Picked direction: **Day** as the Today tab, **Ledger** as the Work tab. Next up's "done" gesture becomes the assignment sheet's drag + Mark done.
- Packs: taste, emil (animate, apple-design, mobile-native, prototype, break-ui), copy. Impeccable isn't installed; Mobbin is connected but needs a paid plan, so the reference step fell back to known products.

## Tokens
Color (light / dark)
- bg `#fbfbfc` / `#121316`; surface `#ffffff` / `#1a1c20`; ink `#15171c` / `#eceef2`; muted `#646a75` / `#9aa1ad`; line `#e3e5e9` / `#2a2d33`
- Semantic: now `#e5484d`; late `#d5303a` on `#fdecec`; ok `#1f8a5b`
- Course colors carry identity (Schoology already gives each course a color): bio green, English orange, precalc blue, APUSH ochre, Spanish rose, chem teal. They're functional coding, not decoration. There is no brand accent; the courses are the color.

Type: the system UI font (SF on iPhone, Roboto on Android). It ships optical sizing and is the native-feel choice (emil `apple-design` §15).
- Scale: 11 / 12 / 13 / 15 / 17 / 20 / 26 / 30
- Display 30/1.1, 700, −0.02em; title 20, 650, −0.01em; body 15/1.4, 400–500; meta 12–13, 400; tabular figures on all times, points, and grades

Space: 4 / 8 / 12 / 16 / 20 / 24 / 32. Side gutter 16–20.
Radius by role: rows 0; chips 8; cards 16; sheet 20 (top corners); phone 28. Elevation: hairline ring for cards; the sheet gets a shadow and a scrim.

## Layout
App shell, 390 max width. Bottom tab bar on translucent material (content scrolls under). Tabs: Today, Work, Grades, Updates; nav labels name their contents. Courses push in from the right; assignments open as a bottom sheet.

## Components and states
- Period row: past (50% opacity), current/next (full), has-due (course-colored pill)
- Work row: default, pressed (bg), overdue (late color), done (moves to Completed)
- Chip filter: default, pressed, selected (ink fill), focus ring
- Assignment sheet: closed, opening, open, dragging (scrim follows), dismissing; actions: Submit, Choose file, Turn in, Mark done, Undo
- Toast: enter, visible 4s, exit, with Undo
- Empty states: "You're caught up" plus what fills it next; no fake content

## Motion (numbers from emil `animate` and `apple-design`)
- Press feedback: scale 0.97, 120ms, ease-out `cubic-bezier(0.23,1,0.32,1)`
- Tab switch: no animation (it happens many times a day)
- Course push: translateX 100% → 0, 360ms `cubic-bezier(0.32,0.72,0,1)` (drawer curve); exits the way it entered
- Sheet: translateY 100% → 0, 380ms drawer curve. Drag tracks 1:1 with pointer capture; release velocity is projected (d = 0.99) to choose dismiss or settle; dragging upward rubber-bands; the scrim follows the drag
- Toast: CSS transition (not keyframes), from the bottom, 220ms ease-out; exits downward
- Reduced motion: opacity cross-fades only

## Acceptance
Passes the user's tells (no hero formula, fake numbering, decorative gradients, or invented stats), the swap test (a generic LMS can't reuse it, because it's built on this school's bell schedule), the squint test (the next class leads), break-ui worst case, 375px, keyboard focus, and AA contrast.
