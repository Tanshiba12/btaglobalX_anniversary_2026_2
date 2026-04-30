# BTA GLOBALx Event Website - NVG8-Style Motion Plan

## 1. Purpose

This document describes the new scroll journey after the creative reset. The site is a one-page GSAP experience made from solid-color acts, custom SVG-style objects, strong typography, and clear event information.

Timing note:

- Seconds describe the intended pacing at normal scroll speed.
- Each act is scroll-controlled after the loader.
- The visitor can move faster or slower, but the internal order of each act stays the same.

Total target:

- Loader: 3-5 seconds.
- Main scroll: 9 acts.
- Total scroll length: about 2600-3400vh.
- Quick skim: 90-120 seconds.
- Full experience: 4-6 minutes.

## 2. Act 00 - Loader / RSVP Stamp

Type:

- Time-based intro.
- Duration: 0-5 seconds.

Visual system:

- Solid cream base, black type, gold/yellow stamp accent.
- One oversized RSVP stamp at center.
- Thick circular seal, ticket punch marks, BTA initials.

Timeline:

| Time | What appears | Motion |
|---|---|---|
| 0.0s | Blank cream page. | Tiny black dot pops at center. |
| 0.2s | Dot expands into BTA seal. | Seal scales with a stamp-hit motion. |
| 0.7s | `RSVP RECEIVED` appears. | Text slams down, then tilts 3 degrees. |
| 1.3s | Loading number appears huge. | Number counts upward in chunky type. |
| 2.0s | `GALA NIGHT LOADING` appears. | Yellow block slides behind the line. |
| 2.8s | `1 AUG 2026` appears. | Date drops in as a ticket label. |
| 3.5s | `SHERATON JOHOR BAHRU` appears. | Venue strip scrolls horizontally. |
| 4.2s | Stamp hits one final time. | Stamp grows to fill the screen. |
| 4.6s-5.0s | Hero color appears. | Stamp edge wipes into Act 01. |

Interactions:

- Skip intro.
- Optional sound toggle.

## 3. Act 01 - Hero / The Gala Opens

Type:

- Pinned scroll.
- Scroll length: 280-340vh.

Visual system:

- Solid black, cream, and gold/yellow.
- Hero feels like an oversized printed invitation.
- No generic navbar. Use a compact floating register ticket and act progress.

Timeline:

| Progress | What appears | Motion |
|---|---|---|
| 0-10% | The stamp wipe finishes. | Black panel snaps into place. |
| 10-22% | Invitation card enters from left. | Card rotates slightly and lands. |
| 22-38% | Main event title appears in huge editorial type. | Words enter in blocks, not fades. |
| 38-52% | Date block appears: `1 AUG 2026`. | Date drops like a label. |
| 52-66% | Time and venue strip appear. | Strip moves right-to-left. |
| 66-82% | Register ticket and partner labels appear. | Ticket punches animate at corners. |
| 82-100% | Large arrow pushes the layout sideways. | Hero becomes the Event Map board. |

Primary copy:

- `BTA GlobalX Anniversary 3RD ANNIVERSARY & EXCELLENCE AWARDS 2026`
- `An anniversary made to be seen, shared, and remembered.`
- `1 August 2026 | 3:00 PM - 10:30 PM`
- `Hotel Sheraton Johor Bahru, Malaysia`

Click targets:

- Register Now.
- Partner details.
- Contact quick view.

## 4. Act 02 - Event Map / What Happens Here

Type:

- Pinned scroll.
- Scroll length: 320-400vh.

Visual system:

- Cream base with bright block accents.
- Sticker-like event highlights.
- Four content lanes: Learn, Explore, Be Seen, Celebrate.

Timeline:

| Progress | What appears | Motion |
|---|---|---|
| 0-8% | Large headline `WHAT HAPPENS HERE`. | Headline stretches across the viewport. |
| 8-24% | Learn lane enters. | Forum, speakers, panel stickers slide from top. |
| 24-42% | Explore lane enters. | Bazaar, wellness fair, art blocks slide from left. |
| 42-60% | Be Seen lane enters. | Magazine, media, red carpet labels pop in. |
| 60-76% | Celebrate lane enters. | Culture, fashion, dinner, awards, lucky draw stack in. |
| 76-90% | All lanes compress into a grid. | Blocks snap to a clean map layout. |
| 90-100% | Blue/mint bubble expands. | Map becomes Act 03. |

Click targets:

- Every highlight opens a short preview.

Content included:

- All event highlights from `event_info_2.md`.

## 5. Act 03 - Forum / Mind & Life Lab

Type:

- Pinned scroll.
- Scroll length: 360-440vh.

Visual system:

- Solid blue, mint, white, and ink.
- Speaker tokens, speech bubbles, and topic cards.
- More calm and readable than the map act, but still bold.

Timeline:

| Progress | What appears | Motion |
|---|---|---|
| 0-10% | Blue panel opens with `MIND & LIFE LAB`. | Bubble expands from previous act. |
| 10-24% | Prof. Dr. Mike Chan token appears. | Token stamps in with dual role label. |
| 24-44% | Panelist tokens enter. | Tokens slide on a horizontal rail. |
| 44-62% | Topic cards flip up. | Cards flip one by one like workshop prompts. |
| 62-82% | Selected topic bubbles expand. | Three topics become large readable bubbles. |
| 82-100% | Topic card folds into booth roof. | Blue/mint turns into Creative Market colors. |

Click targets:

- Speaker token.
- Topic card.
- Segment 1 itinerary.

Required content:

- Prof. Dr. Mike Chan as Keynote Speaker and Panel Discussion Moderator.
- Panelists: Dr. Way Sun, Dr. Sangeeta Biswas, Amelia Saleha, Dato Sri Dr. Fams, Rendi Tan Ravi, Dr. Elle Quan.
- Seven panel topics.

## 6. Act 04 - Creative Market / Art + Bazaar

Type:

- Pinned scroll.
- Scroll length: 340-420vh.

Visual system:

- Solid coral, yellow, green, purple, cream, and black.
- Gallery frames, booth awnings, product blocks, sustainable badges.

Timeline:

| Progress | What appears | Motion |
|---|---|---|
| 0-12% | Booth roof lands. | Market grid snaps into place. |
| 12-28% | Art frames assemble. | Frames slide from edges and lock. |
| 28-46% | Bazaar and wellness booth blocks rise. | Product blocks stack upward. |
| 46-64% | Sustainable Creative Art Exhibition headline appears. | Headline wraps around frames. |
| 64-82% | Four story blocks appear. | Artist Spotlights, Formal Recognition, Hybrid Platform, Networking Hub. |
| 82-100% | A magazine page tears across the screen. | Paper shape wipes to Act 05. |

Click targets:

- Art frame.
- Booth block.
- Sustainability story.

## 7. Act 05 - THE PREMIERE / Magazine + Alliance

Type:

- Pinned scroll.
- Scroll length: 360-440vh.

Visual system:

- Solid red, green, blue, cream, and ink.
- Editorial magazine page layouts.
- Thick partner badges and line connectors.

Timeline:

| Progress | What appears | Motion |
|---|---|---|
| 0-10% | Paper wipe lands as magazine cover. | Cover fills the center. |
| 10-24% | `THE PREMIERE` appears. | Title scales from the magazine spine. |
| 24-40% | Cover unveiling. | Cover hinges open. |
| 40-56% | Editor's Speech moment. | Speech block rises like a podium card. |
| 56-72% | Media & Networking Flash-Mob. | Camera flash shapes and guest cards burst out. |
| 72-90% | Partner badges connect. | BTA GLOBALX, AYU HERBA, BTA Productions, Tycoon Global, ISEIGUR join with thick lines. |
| 90-100% | Flash shapes fill the viewport. | Act turns into Red Carpet. |

Click targets:

- Magazine preview.
- Partner badge.
- Media package detail.

## 8. Act 06 - Red Carpet to Culture Runway

Type:

- Pinned scroll.
- Scroll length: 420-520vh.

Visual system:

- First half: white, red, black.
- Second half: cream, black, bright cultural pattern colors.
- Objects: press wall, microphone, flash cards, pattern strips, runway look cards.

Timeline:

| Progress | What appears | Motion |
|---|---|---|
| 0-12% | Flash clears into red carpet strip. | Carpet rolls horizontally. |
| 12-28% | Press wall and microphones appear. | Objects pop forward like stickers. |
| 28-42% | Interview cards appear. | Cards flash on and off. |
| 42-56% | Pattern strips enter. | Press wall folds into cultural pattern board. |
| 56-70% | `A Tapestry of Southeast Asia`. | Type moves with rhythm-like stepping. |
| 70-84% | Runway strip opens. | Pattern board stretches into runway. |
| 84-100% | `A Fusion of Legacy & Luxury` and fashion rounds appear. | Look cards travel across the runway. |

Click targets:

- Interview preview.
- Culture story.
- Fashion round detail.
- ISEIGUR bag note.

## 9. Act 07 - Gala + Awards Stage

Type:

- Pinned scroll.
- Scroll length: 380-460vh.

Visual system:

- Solid black, yellow, cream, and gold.
- Dinner table icons, thick connection lines, trophy, award plaques, prize capsules.

Timeline:

| Progress | What appears | Motion |
|---|---|---|
| 0-14% | Gala dinner board appears. | Table icons slide into rows. |
| 14-30% | Networking labels connect. | Thick lines draw between tables. |
| 30-48% | Trophy object rises. | Trophy scales from table map center. |
| 48-72% | Award plaques stamp in. | Four plaques land with heavy stamp motion. |
| 72-88% | Lucky draw capsules enter. | Capsules bounce into a prize corner. |
| 88-100% | Stage blocks become a desk surface. | Act shifts into Schedule + Access Desk. |

Click targets:

- Table sponsorship.
- Networking detail.
- Award category.
- Lucky draw.

## 10. Act 08 - Schedule + Access Desk

Type:

- Pinned scroll.
- Scroll length: 440-560vh.

Visual system:

- Cream and ink base with package-specific accents.
- Time board on top, pass board below.
- Clear pricing and benefits.

Timeline:

| Progress | What appears | Motion |
|---|---|---|
| 0-12% | Thick timeline line draws. | Segment markers pop in. |
| 12-30% | Segment 1 opens. | 3 PM-5 PM activities expand. |
| 30-44% | Segment 2 opens. | 6 PM-7 PM activities expand. |
| 44-60% | Segment 3 opens. | 7 PM-10:30 PM activities expand. |
| 60-72% | Timeline rotates into pass board. | Activity blocks become tickets. |
| 72-90% | Five packages align. | General, Signature, Silver, Gold, Platinum slide into compare view. |
| 90-100% | Register CTA locks. | Desk stamp points to final act. |

Click targets:

- Itinerary segment.
- Registration package.
- Compare packages.
- Register/contact.

## 11. Act 09 - Gallery + Finale Loop

Type:

- Pinned scroll.
- Scroll length: 320-400vh.

Visual system:

- Cream, black, gold/yellow, and selected accent colors from earlier acts.
- Scrapbook gallery wall, contact labels, final stamp.

Timeline:

| Progress | What appears | Motion |
|---|---|---|
| 0-18% | Gallery tiles slide into a scrapbook wall. | Tiles arrive at different angles. |
| 18-38% | Gallery categories appear. | Ceremony, Red Carpet, Performances, Awards, Networking, Fashion. |
| 38-58% | Lucky draw and closing copy appear. | Prize label and gratitude label stamp in. |
| 58-78% | Contact labels appear. | Email, phones, social, register CTA land as printed tags. |
| 78-92% | `SEE YOU AT THE GALA` appears. | Final stamp grows at center. |
| 92-100% | Stamp collapses back to the loader mark. | Restart state appears. |

Click targets:

- Gallery placeholders.
- Email.
- Phone.
- Register.
- Restart.

## 12. Global Motion Rules

- Every act uses a distinct solid palette.
- Background changes happen through shape takeovers, not soft blended color.
- Major text appears through block reveals, stamps, sliding labels, or type masks.
- Objects must feel custom to the act.
- Buttons should feel like tickets, stamps, labels, or tabs.
- Overlays should inherit the current act color.
- Reduced-motion mode keeps the same content in readable panels.

## 13. Acceptance Criteria

- The demo no longer resembles the previous dark generic scene system.
- The first 10 seconds feel like a custom RSVP/invitation animation.
- The site is still one continuous landing page.
- Event facts remain accurate to `event_info_2.md`.
- Each act has unique colors, objects, copy, motion, and click targets.
- Itinerary and registration are easy to read.
- Five registration packages are present and correct.
- Speakers and roles are present and correct.
- Award categories are present and correct.
- Contact details are present and correct.
