# BTA GlobalX 3DDD Creative Fix Brief

## Direction
- Professional festive event invitation, not a generic dark poster and not random neon.
- Palette: black, white/ivory, BTA gold, deep maroon, subtle emerald wellness accents, polished metallic neutrals.
- Shape language: sliced/parallelogram UI instead of capsule pills.
- Motion language: sponsor advert roll, staged section reveals, cinematic scroll scenes, restrained 3D depth.

## Rewritten Section Messaging
- Hero: the event opens as a gala invitation with a visible sponsor advert banner, cue-style countdown, and a bigger top logo near `Presents`.
- Overview: `Why this day matters` / `A room built for recognition, partnership, and momentum`.
- Founder: a concise founder invitation around purpose, community, recognition, and the Sheraton Johor Bahru gathering.
- Programme route: `Arrival & Registration`, `Life Management Forum`, `Wellness Market`, `Media Premiere`, `Red Carpet & Runway`, `Gala Awards`, `Closing Memory`.
- Forum: seven speaker scenes, each pairing one speaker with one topic. Missing portraits show `Photo will be added: [Speaker Name]`.

## Asset Map
- `public/assets/generated/overview-stage-orbit.png`
- `public/assets/generated/journey-arrival-registration.png`
- `public/assets/generated/journey-life-management-forum.png`
- `public/assets/generated/journey-wellness-market.png`
- `public/assets/generated/journey-media-premiere.png`
- `public/assets/generated/journey-red-carpet-runway.png`
- `public/assets/generated/journey-gala-awards.png`
- `public/assets/generated/forum-ambient-wellness-scenes.png`

## Sponsor Logos
Use exactly these 8 partner assets:
- Ayu Herba
- BTA GlobalX
- BTA Productions
- BTV International
- European Wellness
- ISEIGUR
- Shindo
- Tycoon Global

## Generated Image Prompt Pattern
Photorealistic professional hotel-ballroom event atmosphere inspired by Sheraton Johor Bahru; black glossy floor, BTA gold stage light, deep maroon velvet, subtle emerald wellness accents, polished metallic details, realistic depth, no fake portraits, no logos, no readable text, no watermark, no cartoon/vector look.

## QA Checklist
- Sponsor strip shows 3 logos on phone, 4 on tablet, 5 on desktop and moves continuously.
- No `Act`, `Slide`, `Loader & RSVP`, `Hero Invitation`, or `14 core highlights` language appears in client-facing sections.
- Missing speaker photos are named placeholders, not AI-generated portraits.
- Capsule/pill UI is visually replaced by sliced/parallelogram geometry.
- Hero countdown, sponsor strip, title, and meta do not collide on mobile.
- Journey and forum sections use realistic generated backgrounds and remain readable.
- Run `npm run lint`, `npm run build`, and Playwright QA at desktop/tablet/mobile.
