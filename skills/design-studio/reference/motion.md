# Motion

Motion follows how often people see it (from Emil Kowalski's `animate` skill):
- **App UI people use daily:** fast and subtle, or none. It confirms actions and shows where things came from. Keyboard and 100+/day actions never animate.
- **Landing pages, portfolios, onboarding, games:** the delight budget lives here. Define a motion identity in the spec:
  1. **Hero moment:** what moves on load and why; prefer the product doing its job over decoration.
  2. **One or two signature moves** repeated across the page, not a new effect per section.
  3. **Scroll choreography:** what's pinned, revealed or scrubbed (GSAP ScrollTrigger); smooth on phones.
  4. **Micro-interactions:** hover and press responses on everything clickable.
  5. **Fallbacks:** a reduced-motion version; nothing important hidden until it animates.
- **Dashboards and reports:** motion only to show change.
- **Print:** none.

Take durations and easing from the emil pack, not from habit. Tools by need: CSS or Motion for UI transitions; GSAP + ScrollTrigger for scroll; Three.js, React Three Fiber or Spline only when 3D is earned; Rive or Lottie for product animations.
