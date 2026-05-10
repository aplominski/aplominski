# aplominski.dev Homepage Design

## Goal
Create a dark-only personal homepage for Aleksander Plominski (C/C++/Rust developer) using Astro + TailwindCSS, with strong visual quality, CSS keyframe animations, and full functionality with JavaScript disabled.

## Scope
- Single-page homepage.
- English content.
- Visual direction: Minimal + Futuristic (70/30).
- 100% no-JS required for core and final experience.

## Information Architecture
- Hero: full name, role statement, primary and secondary links.
- About: concise profile and focus areas.
- Stack: grouped technologies and tools.
- Highlights: selected work blocks with outcomes.
- Contact: email and social links.
- Footer: ownership and short signature.

## UX and Accessibility
- Works fully without JavaScript.
- Semantic HTML sections and heading order.
- Keyboard-focus styles for all links and buttons.
- Responsive layout for mobile and desktop.
- `prefers-reduced-motion` support to reduce/disable motion.

## Visual System
- Dark palette only.
- High contrast text on dark background.
- Accent tones in steel-blue/cyan family.
- Subtle grid and glow layers through CSS backgrounds.
- Motion from CSS keyframes only (gradient drift, glow pulse, reveal).

## Technical Decisions
- Astro static site structure.
- TailwindCSS for utility styling plus small custom CSS layer.
- No client scripts.
- `noscript` element included with visible confirmation and fallback guidance.

## Out of Scope
- CMS/blog engine.
- Dynamic contact form backend.
- JavaScript-powered interactions.
