# BTA GLOBALx Event Website - Refactored Structure

## 1. Architecture Goal

The code should support a one-page act-based GSAP experience. The app should keep the current Next.js + TypeScript stack, but replace the old repeated scene visual system with act-specific block-color compositions.

Core model:

- One route.
- One client experience component.
- Nine scroll acts plus loader.
- Data-driven event facts.
- Act-specific visual motifs.
- Reusable kinetic SVG/object primitives.
- Themed overlays for deeper details.

## 2. Recommended Folder Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    experience/
      BlockColorExperience.tsx
      ActVisual.tsx
      DetailModal.tsx
    ui/
      TicketButton.tsx
      StampBadge.tsx
      StickerButton.tsx
      AccessPass.tsx
  data/
    acts.ts
    event.ts
    highlights.ts
    itinerary.ts
    registration.ts
    speakers.ts
    awards.ts
    assets.ts
    index.ts
  types/
    content.ts
  lib/
    motion/
    text/
```

Current first-pass implementation may keep files under `src/components/experience`, but the internal model should use `ActConfig`.

## 3. ActConfig Data Model

Required shape:

```ts
type ActConfig = {
  id: string;
  number: string;
  label: string;
  title: string;
  kicker: string;
  body: string;
  palette: ActPalette;
  motif: ActMotif;
  motion: ActMotion;
  height: number;
  timelineBeats: string[];
  transitionShape: string;
  objects: string[];
  clickTargets: string[];
  assetPromptIds: string[];
  cta?: string;
};
```

Palette values:

- `stamp`
- `invitation`
- `map`
- `forum`
- `market`
- `premiere`
- `runway`
- `awards`
- `desk`
- `finale`

Motif values:

- `stamp`
- `invitation`
- `stickers`
- `speech-board`
- `market-grid`
- `magazine`
- `press-runway`
- `trophy-stage`
- `access-desk`
- `scrapbook`

Motion values:

- `stamp-hit`
- `label-drop`
- `sticker-stack`
- `card-flip`
- `paper-tear`
- `page-hinge`
- `flash-fold`
- `plaque-stamp`
- `ticket-compare`
- `scrapbook-snap`

## 4. Data Responsibilities

`event.ts`:

- Fixed event details, partners, contact, social handle, and campaign copy.

`acts.ts`:

- The nine act definitions and loader copy references.

`highlights.ts`:

- Highlight stickers grouped by act.
- Each highlight points to its related `actId`.

`speakers.ts`:

- Prof. Dr. Mike Chan as Keynote Speaker / Panel Discussion Moderator.
- Six panelists.
- Seven panel topics.

`registration.ts`:

- Five packages: General, Signature, Silver, Gold, Platinum.
- Prices and all benefits.
- Package tier accents and compare labels.

`itinerary.ts`:

- Three schedule segments.
- Activities grouped exactly as event_info_2.

`awards.ts`:

- Four award categories.

`assets.ts`:

- Asset registry plus prompt IDs for Freepik generation.

## 5. Component Responsibilities

`BlockColorExperience`:

- Owns loader, smooth scroll, GSAP setup, act rendering, fixed controls, and modal state.
- Maps `acts` to rendered act sections.
- Keeps event data out of hardcoded JSX where practical.

`ActVisual`:

- Replaces the old generic world visual.
- Renders motif-specific SVG/CSS object groups.
- Uses timeline beats and objects from `ActConfig`.

`DetailModal`:

- Keeps existing overlay behavior but updates styling to match block-color editorial panels.

Reusable object patterns:

- Stamp seal.
- Ticket button.
- Sticker button.
- Speech bubble.
- Magazine page.
- Press flash.
- Award plaque.
- Access pass.
- Scrapbook tile.

## 6. Scroll Architecture

- Each act is a long section with a sticky viewport.
- GSAP creates local timelines per act.
- Animated targets use data attributes such as `data-kinetic`, `data-object`, and `data-text`.
- Different motifs get different timeline recipes.
- Reduced motion disables ScrollTrigger transforms and renders natural document flow.

Act scroll lengths:

- Hero: 300vh.
- Event Map: 360vh.
- Forum: 400vh.
- Creative Market: 380vh.
- THE PREMIERE: 400vh.
- Red Carpet to Culture Runway: 460vh.
- Gala + Awards Stage: 420vh.
- Schedule + Access Desk: 500vh.
- Gallery + Finale: 360vh.

## 7. Mobile Structure

Mobile keeps all content but simplifies motion:

- Sticky acts become shorter.
- Objects stack vertically.
- Detail buttons are larger.
- Itinerary appears before package compare within Act 08.
- Registration CTA remains fixed after Act 01.
- Hover-only interactions become tap interactions.

## 8. Reduced Motion Structure

Reduced motion mode:

- No pinned transform timelines.
- Loader can be skipped quickly.
- Acts render as readable editorial panels.
- Objects may have static placement only.
- All details remain clickable.

## 9. Implementation Order

1. Rewrite docs for the new art direction.
2. Update types and act data.
3. Replace scene rendering with act rendering.
4. Replace visual system with motif-specific object groups.
5. Replace global CSS with block-color act styling.
6. Run lint and build.
7. Search for stale old-direction terms.
8. Start dev server and smoke test.
