# BTA GlobalX Anniversary 2026

Lean Next.js one-page website for **BTA GlobalX Anniversary Gala Night & Excellence Award 2026**.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run start
```

## Project Structure

- `src/app`: App Router entry, metadata, and global CSS imports.
- `src/components/experience`: the page shell, chrome, sections, hooks, config, and shared UI helpers.
- `src/data`: editable event content, registration packages, itinerary, speakers, awards, FAQ, and asset paths.
- `src/styles`: global design tokens, base styles, chrome styles, section styles, responsive rules, and the WebGL world/cinematic override layers.
- `public/assets`: only media currently used by the app.

## Editing Guide

- Change event copy and facts in `src/data`.
- Change section layout in `src/components/experience/sections`.
- Change navigation/contact actions in `src/components/experience/config/navigation.ts`.
- Change colors, typography, spacing, motion timing, and section mood in `src/styles`; `world.css` owns the immersive WebGL environment and pinned chapter presentation.
- Change image or video paths in `src/data/assets.ts`; official media stays under `brand`, `hero`, `partners`, `founder`, `speakers`, and `gallery/previous-events`.
- The project intentionally does not use Tailwind, shadcn, Framer Motion, Swiper/Embla, or Drei for this phase. Three.js + React Three Fiber own the environment layer; GSAP + ScrollTrigger and Lenis own the scroll direction.
- Temporary speaker or award media slots are marked in the section UI/data and should be replaced with official assets when provided.
