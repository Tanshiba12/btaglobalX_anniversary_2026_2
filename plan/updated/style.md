# BTA GLOBALx Event Website - Block-Color Style System

## 1. Style Goal

The site should feel like a premium editorial event kit brought to life through GSAP. It should be bold, playful, polished, and custom-made.

Style sentence:

> A luxury gala invitation rebuilt as a moving block-color editorial system: stamps, stickers, passes, magazine pages, speech bubbles, plaques, and scrapbook tiles.

## 2. Core Principles

- Use solid colors as the main visual foundation.
- Use custom objects, not generic panels.
- Use big type as a visual object.
- Use thick borders, hard shadows, printed labels, stamps, tabs, ticket notches, and cutout shapes.
- Every act must look different.
- Keep registration, itinerary, pricing, date, venue, and contact highly readable.
- Use motion to transform objects, not to hide weak layouts.

Avoid:

- Soft blended backgrounds.
- Generic repeated cards.
- Overused dark luxury visuals.
- Long centered paragraphs.
- Thin faint UI.
- Decorative objects that do not support the act story.

## 3. Global Palette

Base colors:

- Ink black: `#080808`
- Paper cream: `#FFF4D7`
- Event white: `#FFFFFF`
- Stamp yellow: `#F6C83F`
- Warm gold: `#C89124`
- Signal red: `#F04B37`
- Press red: `#C5162E`
- Forum blue: `#1E5BFF`
- Wellness mint: `#55E6A5`
- Editorial green: `#05A66B`
- Magazine blue: `#225CFF`
- Market coral: `#FF6B5C`
- Market violet: `#7B4DFF`
- Culture pink: `#FF4EA3`
- Runway cyan: `#42D8FF`
- Silver tier: `#C9D0D6`
- Platinum tier: `#DCE9F6`

Rules:

- Each act gets one dominant background color, one text color, and two accent colors.
- Do not rely on blended color fills for depth.
- Contrast must be strong enough for fast reading.
- Gold is used as a badge/accent, not as a full-site mood.

## 4. Act Palettes

### Loader / RSVP Stamp

- Background: Paper cream
- Text: Ink black
- Accent: Stamp yellow, warm gold
- Objects: stamp seal, ticket punch, percentage type

### Hero / The Gala Opens

- Background: Ink black
- Text: Paper cream
- Accent: Stamp yellow, warm gold
- Objects: invitation card, date label, ticket button, partner tags

### Event Map

- Background: Paper cream
- Text: Ink black
- Accent: signal red, forum blue, wellness mint, market violet
- Objects: stickers, lane labels, arrows, numbered blocks

### Forum / Mind & Life Lab

- Background: Forum blue
- Text: Event white
- Accent: wellness mint, paper cream, ink black
- Objects: speech bubbles, speaker tokens, topic cards

### Creative Market

- Background: Market coral or paper cream
- Text: Ink black
- Accent: market violet, wellness mint, stamp yellow
- Objects: art frames, booth awnings, product blocks, sustainable badges

### THE PREMIERE

- Background: Signal red
- Text: Paper cream
- Accent: editorial green, magazine blue, ink black
- Objects: magazine cover, page spreads, partner badges, flash shapes

### Red Carpet to Culture Runway

- Background: Event white
- Text: Ink black
- Accent: press red, culture pink, runway cyan
- Objects: red carpet strip, microphone, press cards, cultural patterns, runway cards

### Gala + Awards Stage

- Background: Ink black
- Text: Paper cream
- Accent: stamp yellow, warm gold
- Objects: table icons, trophy, plaques, prize capsules

### Schedule + Access Desk

- Background: Paper cream
- Text: Ink black
- Accent: stamp yellow, silver, gold, platinum, press red
- Objects: timeline blocks, access passes, stamp marks

### Gallery + Finale

- Background: Paper cream
- Text: Ink black
- Accent: stamp yellow, signal red, forum blue
- Objects: scrapbook tiles, contact labels, final RSVP stamp

## 5. Typography

Direction:

- Use huge editorial display type for act titles.
- Use compact bold sans-serif for labels, package names, pricing, tags, and controls.
- Use readable sans-serif for body copy.

Suggested font strategy:

- Display: `Georgia`, `Times New Roman`, or later a licensed editorial display face.
- Body/UI: `Inter`, `Manrope`, `Satoshi`, or system sans.

Type rules:

- Large act titles can be 72-150px desktop.
- Mobile act titles should be 42-64px.
- Package prices must be large and obvious.
- Labels should be uppercase, bold, and short.
- Avoid tiny microcopy under 12px.
- Do not use negative letter spacing.

## 6. Object Styling

Buttons:

- Primary button is an event ticket.
- Secondary button is a printed label.
- Icon buttons are punched circles or tabs.
- Hover state: small lift, hard shadow, color swap, or stamp mark.

Information objects:

- Highlights: stickers.
- Speakers: tokens or badges.
- Panel topics: speech bubbles.
- Art/bazaar: frames and booth blocks.
- Magazine: cover and page spreads.
- Partners: badges.
- Red carpet: press cards.
- Fashion: look cards.
- Awards: plaques.
- Registration: passes.
- Gallery: scrapbook tiles.

Borders and shadows:

- Use 2px borders for most objects.
- Use hard offset shadows.
- Use rounded corners selectively; tickets and labels may be sharper.
- Cards may tilt slightly, but text must remain readable.

## 7. Motion Style

Global motion behaviors:

- Stamp hit.
- Label drop.
- Shape wipe.
- Sticker slide.
- Card flip.
- Page hinge.
- Press flash.
- Pattern fold.
- Plaque stamp.
- Ticket compare.
- Scrapbook snap.

Motion timing:

- Micro hover: 160-260ms.
- Object entrance: 500-900ms.
- Act transition: 900-1500ms.
- Page/flip interaction: 600-1000ms.
- Loader: 3000-5000ms.

GSAP rules:

- Use ScrollTrigger for act-local timelines.
- Animate transforms, opacity, clip-path, SVG scale, and CSS custom properties.
- Avoid paid plugin dependencies.
- Keep timelines readable and act-specific.

## 8. Layout Rules

- One-page experience.
- Each act should be full viewport with internal scroll duration.
- Use asymmetrical layouts.
- Do not center everything.
- Keep practical information inside stable readable zones.
- Use object groups instead of repeated generic grids where possible.
- Mobile should stack information but keep the act identity.

## 9. Accessibility

- Every click object must be keyboard-focusable.
- Reduced motion must expose all content.
- No flashing sequence should be intense or rapid.
- Text must meet contrast expectations.
- Registration and itinerary must not depend on hover only.
- Contact links must be real anchors.

## 10. Copy Tone

Use:

- Short, memorable headlines.
- Event-specific language.
- Campaign-like labels.
- Clear package language.

Avoid:

- "Premium experience" repeated everywhere.
- Generic "global excellence" filler.
- Long paragraphs floating over visuals.
- Placeholder phrases that sound like a template.
