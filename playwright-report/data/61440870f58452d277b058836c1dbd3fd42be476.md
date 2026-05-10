# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scrolltrigger-bug-condition.spec.ts >> ScrollTrigger Bug Condition Exploration >> Property 1: Forum should unpin smoothly with easing
- Location: tests\scrolltrigger-bug-condition.spec.ts:72:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic "BTA GlobalX":
      - link "BTA GlobalX home" [ref=e3] [cursor=pointer]:
        - /url: "#top"
    - navigation "Sticky page actions":
      - generic [ref=e4]:
        - generic [ref=e5]:
          - generic [ref=e6]: Get social
          - generic "Social links":
            - link "Facebook" [ref=e7] [cursor=pointer]:
              - /url: "#facebook"
              - img [ref=e8]
            - link "YouTube" [ref=e10] [cursor=pointer]:
              - /url: "#youtube"
              - img [ref=e11]
            - link "Instagram" [ref=e14] [cursor=pointer]:
              - /url: "#instagram"
              - img [ref=e15]
        - generic "Page sections" [ref=e19]:
          - link "Overview" [ref=e20] [cursor=pointer]:
            - /url: "#overview"
          - link "Program" [ref=e21] [cursor=pointer]:
            - /url: "#program"
          - link "Timeline" [ref=e22] [cursor=pointer]:
            - /url: "#timeline"
          - link "Register" [ref=e23] [cursor=pointer]:
            - /url: "#register"
          - link "Location" [ref=e24] [cursor=pointer]:
            - /url: "#location"
        - generic [ref=e25]:
          - generic "Contact links":
            - link "WhatsApp" [ref=e26] [cursor=pointer]:
              - /url: "#whatsapp"
              - img [ref=e27]
          - generic [ref=e29]: Get In touch
    - generic [ref=e30]:
      - img "BTA GlobalX awards ceremony audience" [ref=e33]
      - generic [ref=e38]:
        - generic [ref=e39]:
          - paragraph [ref=e40]: Anniversary Gala Night / Excellence Award 2026
          - heading "BTA 3RD ANNIVERSARY & EXCELLENCE AWARDS 2026" [level=1] [ref=e41]:
            - generic [ref=e42]: BTA 3RD ANNIVERSARY
            - generic [ref=e43]: "&"
            - generic [ref=e44]: EXCELLENCE AWARDS 2026
        - generic "Event partners" [ref=e45]:
          - generic [ref=e46]: Sponsored by
          - generic [ref=e47]: AYU HERBA PTE LTD
          - generic [ref=e48]: Organized by BTA GLOBALX
          - generic [ref=e49]: Media with Tycoon Global
        - generic [ref=e50]:
          - generic "Countdown to event" [ref=e51]:
            - generic [ref=e52]:
              - strong [ref=e53]: "89"
              - emphasis [ref=e54]: Days
            - generic [ref=e55]:
              - strong [ref=e56]: "00"
              - emphasis [ref=e57]: Hours
            - generic [ref=e58]:
              - strong [ref=e59]: "54"
              - emphasis [ref=e60]: Min
          - link "Hotel Sheraton Johor Bahru, Malaysia 1 August 2026 3:00 PM - 10:30 PM" [ref=e61] [cursor=pointer]:
            - /url: "#location"
            - img [ref=e62]
            - generic [ref=e65]:
              - strong [ref=e66]: Hotel Sheraton Johor Bahru, Malaysia
              - emphasis [ref=e67]:
                - img [ref=e68]
                - text: 1 August 2026
              - emphasis [ref=e70]:
                - img [ref=e71]
                - text: 3:00 PM - 10:30 PM
    - generic [ref=e75]:
      - generic [ref=e76]:
        - paragraph [ref=e77]: Event overview
        - heading "Where purpose meets recognition" [level=2] [ref=e78]
      - generic [ref=e79]:
        - paragraph [ref=e80]: "An anniversary built as a living stage: wellness insight, cultural expression, media visibility, strategic alliance, gala networking, and public recognition moving through one day."
        - paragraph [ref=e81]: The experience is designed for guests, nominees, partners, sponsors, artists, speakers, and changemakers who need more than attendance. They need a room where their story is seen clearly.
        - paragraph [ref=e82]: "From the forum opening to the award finale, every movement connects back to one promise: purpose meets recognition, and excellence finds its stage."
      - generic [ref=e83]:
        - strong [ref=e84]: "14"
        - generic [ref=e85]: core highlights across one continuous landing page
    - generic [ref=e87]:
      - generic [ref=e88]:
        - generic "Founder portrait placeholder" [ref=e89]:
          - generic [ref=e90]: H.E.
          - strong [ref=e91]: SB
        - paragraph [ref=e92]: Image placeholder
      - generic [ref=e93]:
        - paragraph [ref=e94]: Founder's Message
        - heading "Celebrating 3 Years of BTA GlobalX Anniversary" [level=2] [ref=e95]
        - generic [ref=e96]:
          - paragraph [ref=e97]: "BTA GlobalX began as a spark of an idea fueled by late nights, deep conversations, and a desire to build more than a network: a purpose-driven ecosystem where people, passion, and impact align."
          - paragraph [ref=e98]: "Supporting entrepreneurs across Asia, the Middle East, and Europe, I witnessed firsthand how powerful transformation happens when driven individuals unite with purpose. That is how BTA GlobalX was born: a platform where your network becomes your catalyst for change."
          - paragraph [ref=e99]: Since then, we have grown not just in size, but in intention and impact. We have built trusted relationships, fostered meaningful partnerships, and cultivated a culture of Givers Get, where success is shared and purpose comes first.
          - paragraph [ref=e100]: "To my team, the quiet warriors behind the scenes, the dreamers who dared, and the doers who delivered: you are the soul of BTA GlobalX. To every partner who trusted us and every member who showed up with open minds and open hearts, thank you for believing in this vision."
          - paragraph [ref=e101]: The future holds deeper learning, stronger alliances, and bold innovation. We are not just building a brand. We are shaping a legacy of excellence with impact.
          - paragraph [ref=e102]: Join us on 1 August 2026 at Hotel Sheraton Johor Bahru, Malaysia for an inspiring and memorable day of networking, recognition, wellness, cultural celebration, and meaningful connection as we celebrate the Excellence Awards.
        - generic [ref=e103]:
          - generic [ref=e104]: With gratitude,
          - strong [ref=e105]: H.E. Amb. Dr. Sangeeta Biswas. M.D.
          - paragraph [ref=e106]: Founder of Ayu Herba and BTA GlobalX
    - generic [ref=e108]:
      - generic [ref=e109]:
        - paragraph [ref=e110]: Event highlights
        - img [ref=e111]
        - heading "What happens here" [level=2] [ref=e113]
        - paragraph [ref=e114]: "The day is mapped as a sequence of scenes: guests learn, explore, become visible, and then celebrate. Every highlight has a role in the larger gala journey."
      - img "BTA GlobalX event highlight moment" [ref=e116]
      - generic [ref=e117]:
        - article [ref=e118]:
          - generic [ref=e119]: 02 signals
          - heading "Learn" [level=3] [ref=e120]
          - paragraph [ref=e121]: Forum, speakers, panel discussion, and practical mind-life management.
          - generic [ref=e122]:
            - link "Life Management & Mental Well-being Forum 2026" [ref=e123] [cursor=pointer]:
              - /url: "#forum"
              - img [ref=e124]
              - text: Life Management & Mental Well-being Forum 2026
            - link "Speakers' Speech" [ref=e128] [cursor=pointer]:
              - /url: "#forum"
              - img [ref=e129]
              - text: Speakers' Speech
        - article [ref=e134]:
          - generic [ref=e135]: 02 signals
          - heading "Explore" [level=3] [ref=e136]
          - paragraph [ref=e137]: Bazaar, wellness fair, sustainable art, and creative entrepreneurship.
          - generic [ref=e138]:
            - link "Bazaar & Wellness Fair" [ref=e139] [cursor=pointer]:
              - /url: "#creative-market"
              - img [ref=e140]
              - text: Bazaar & Wellness Fair
            - link "Sustainable Creative Art Exhibition" [ref=e142] [cursor=pointer]:
              - /url: "#creative-market"
              - img [ref=e143]
              - text: Sustainable Creative Art Exhibition
        - article [ref=e149]:
          - generic [ref=e150]: 03 signals
          - heading "Be Seen" [level=3] [ref=e151]
          - paragraph [ref=e152]: Magazine launch, strategic alliance, red carpet, interviews, and media exposure.
          - generic [ref=e153]:
            - link "THE PREMIERE" [ref=e154] [cursor=pointer]:
              - /url: "#premiere"
              - img [ref=e155]
              - text: THE PREMIERE
            - link "Unveil Strategic Alliance" [ref=e157] [cursor=pointer]:
              - /url: "#premiere"
              - img [ref=e158]
              - text: Unveil Strategic Alliance
            - link "Red Carpet & Exclusive Interviews" [ref=e163] [cursor=pointer]:
              - /url: "#red-carpet-runway"
              - img [ref=e164]
              - text: Red Carpet & Exclusive Interviews
        - article [ref=e167]:
          - generic [ref=e168]: 07 signals
          - heading "Celebrate" [level=3] [ref=e169]
          - paragraph [ref=e170]: Culture, fashion, gala dinner, awards, lucky draw, ceremony, and gallery.
          - generic [ref=e171]:
            - link "Inter-cultural Music & Dance" [ref=e172] [cursor=pointer]:
              - /url: "#red-carpet-runway"
              - img [ref=e173]
              - text: Inter-cultural Music & Dance
            - link "Heritage Fashion Show" [ref=e176] [cursor=pointer]:
              - /url: "#red-carpet-runway"
              - img [ref=e177]
              - text: Heritage Fashion Show
            - link "Gala Dinner & Global Networking" [ref=e180] [cursor=pointer]:
              - /url: "#gala-awards"
              - img [ref=e181]
              - text: Gala Dinner & Global Networking
            - link "Excellence Award 2026" [ref=e186] [cursor=pointer]:
              - /url: "#gala-awards"
              - img [ref=e187]
              - text: Excellence Award 2026
            - link "Lucky Draw" [ref=e193] [cursor=pointer]:
              - /url: "#gallery-finale"
              - img [ref=e194]
              - text: Lucky Draw
            - link "Anniversary Ceremony" [ref=e198] [cursor=pointer]:
              - /url: "#gallery-finale"
              - img [ref=e199]
              - text: Anniversary Ceremony
            - link "Our Previous Gallery" [ref=e202] [cursor=pointer]:
              - /url: "#gallery-finale"
              - img [ref=e203]
              - text: Our Previous Gallery
    - generic [ref=e210]:
      - generic [ref=e211]:
        - generic [ref=e212]:
          - paragraph [ref=e213]: Event timeline
          - heading "Event Day Timeline" [level=2] [ref=e214]
          - generic [ref=e215]: 3:00 PM - 10:30 PM
        - generic [ref=e216]:
          - generic [ref=e217]: Current segment
          - strong [ref=e218]: 7:00 PM - 10:30 PM
          - paragraph [ref=e219]: Dinner, Fashion, Awards, Finale
      - generic "Event day timeline slides" [ref=e222]:
        - generic [ref=e223]:
          - article [ref=e224]:
            - generic [ref=e226]: "01"
            - generic [ref=e227]:
              - paragraph [ref=e228]: 3:00 PM - 5:00 PM
              - heading "Segment 1" [level=3] [ref=e229]
              - strong [ref=e230]: Forum, Bazaar, Art, Magazine
              - list [ref=e231]:
                - listitem [ref=e232]: Event Opening
                - listitem [ref=e233]: Life Management & Mental Well-being Forum 2026 opening
                - listitem [ref=e234]: Speakers' Speech
                - listitem [ref=e235]: "Panel Discussion: The Mind & Life Management"
                - listitem [ref=e236]: Bazaar & Wellness Fair
                - listitem [ref=e237]: Sustainable Creative Art Exhibition
                - listitem [ref=e238]: Magazine Launch & Media Exposure
                - listitem [ref=e239]: Unveiling Strategic Alliance
          - article [ref=e240]:
            - generic [ref=e242]: "02"
            - generic [ref=e243]:
              - paragraph [ref=e244]: 6:00 PM - 7:00 PM
              - heading "Segment 2" [level=3] [ref=e245]
              - strong [ref=e246]: Anniversary, Red Carpet, Culture
              - list [ref=e247]:
                - listitem [ref=e248]: Anniversary Celebration
                - listitem [ref=e249]: Red Carpet & Exclusive Interviews
                - listitem [ref=e250]: Networking & Photoshoot
                - listitem [ref=e251]: Intercultural Music & Dance Performance
          - article [ref=e252]:
            - generic [ref=e254]: "03"
            - generic [ref=e255]:
              - paragraph [ref=e256]: 7:00 PM - 10:30 PM
              - heading "Segment 3" [level=3] [ref=e257]
              - strong [ref=e258]: Dinner, Fashion, Awards, Finale
              - list [ref=e259]:
                - listitem [ref=e260]: Gala Dinner & Global Networking
                - listitem [ref=e261]: Heritage Fashion Show
                - listitem [ref=e262]: Excellence Award 2026
                - listitem [ref=e263]: Lucky Draw
                - listitem [ref=e264]: Photo Session & Closing
    - generic [ref=e266]:
      - generic [ref=e267]:
        - paragraph [ref=e268]: Event Journey
        - heading "From Forum to Gala Stage" [level=2] [ref=e269]
        - generic [ref=e270]: Scroll through 5 act pairs as the anniversary day builds toward recognition.
      - generic [ref=e271]:
        - generic [ref=e272]:
          - button "ACT 1" [ref=e273] [cursor=pointer]
          - button "ACT 3" [ref=e274] [cursor=pointer]
          - button "ACT 5" [ref=e275] [cursor=pointer]
          - button "ACT 7" [ref=e276] [cursor=pointer]
          - button "ACT 9" [ref=e277] [cursor=pointer]
        - generic [ref=e278]:
          - heading "Creative Market" [level=3] [ref=e280]
          - paragraph [ref=e281]: Immerse yourself in a vibrant marketplace celebrating creativity, wellness, and sustainable entrepreneurship. Discover unique products, art exhibitions, and innovative solutions.
          - generic [ref=e282]:
            - img [ref=e284]
            - img [ref=e287]
            - img [ref=e294]
        - generic [ref=e298]:
          - heading "Premiere Magazine" [level=3] [ref=e300]
          - paragraph [ref=e301]: Witness the unveiling of Tycoon Global Magazine's special edition featuring BTA GLOBALX. Discover strategic alliances, partner spotlights, and the ecosystem of excellence.
          - generic [ref=e302]:
            - img [ref=e304]
            - img [ref=e308]
            - img [ref=e314]
        - generic [ref=e319]:
          - button "ACT 2" [ref=e320] [cursor=pointer]
          - button "ACT 4" [ref=e321] [cursor=pointer]
          - button "ACT 6" [ref=e322] [cursor=pointer]
          - button "ACT 8" [ref=e323] [cursor=pointer]
          - button "ACT 10" [ref=e324] [cursor=pointer]
      - generic [ref=e325]:
        - img "Creative Market" [ref=e327]
        - img "Premiere Magazine" [ref=e329]
    - generic [ref=e331]:
      - generic [ref=e332]:
        - paragraph [ref=e333]: Speakers + topics
        - heading "The mind and life management board" [level=2] [ref=e334]
      - generic [ref=e335]:
        - article [ref=e336]:
          - generic [ref=e337]: Keynote Speaker / Moderator
          - strong [ref=e338]: Prof. Dr. Mike Chan
          - paragraph [ref=e339]: Panel discussion leadership, keynote direction, and holistic life management framing.
        - generic [ref=e340]:
          - article [ref=e341]:
            - generic [ref=e342]: WS
            - strong [ref=e343]: Dr. Way Sun
            - paragraph [ref=e344]: Wellness, science, and mind-life management perspective.
          - article [ref=e345]:
            - generic [ref=e346]: SB
            - strong [ref=e347]: Dr. Sangeeta Biswas
            - paragraph [ref=e348]: Global leadership and holistic wellbeing perspective.
          - article [ref=e349]:
            - generic [ref=e350]: AS
            - strong [ref=e351]: Amelia Saleha
            - paragraph [ref=e352]: Beauty, wellness, emotional balance, and modern lifestyle insight.
          - article [ref=e353]:
            - generic [ref=e354]: F
            - strong [ref=e355]: Dato Sri Dr. Fams
            - paragraph [ref=e356]: Professional development and cross-sector contribution.
          - article [ref=e357]:
            - generic [ref=e358]: RT
            - strong [ref=e359]: Rendi Tan Ravi
            - paragraph [ref=e360]: Purpose, discipline, and personal balance.
          - article [ref=e361]:
            - generic [ref=e362]: EQ
            - strong [ref=e363]: Dr. Elle Quan
            - paragraph [ref=e364]: Wellbeing, emotional health, and sustainable personal growth.
      - generic [ref=e365]:
        - article [ref=e366]:
          - generic [ref=e367]: "01"
          - paragraph [ref=e368]: "Mastering Life Through Shindo: a holistic approach to personal balance and purpose."
        - article [ref=e369]:
          - generic [ref=e370]: "02"
          - paragraph [ref=e371]: "Ayurveda & Inner Radiance: beauty, wellness, and emotional balance."
        - article [ref=e372]:
          - generic [ref=e373]: "03"
          - paragraph [ref=e374]: "The Science of Youth: stem cells for cognitive vitality and aesthetic longevity."
        - article [ref=e375]:
          - generic [ref=e376]: "04"
          - paragraph [ref=e377]: "Breaking the Silence: mental health awareness, challenges, and solutions."
        - article [ref=e378]:
          - generic [ref=e379]: "05"
          - paragraph [ref=e380]: "Mind Over Matter: yoga and meditation in mental wellness."
        - article [ref=e381]:
          - generic [ref=e382]: "06"
          - paragraph [ref=e383]: "Embracing Holistic Wellness in Modern Lifestyle: self-discovery, simplicity, sustainable well-being, fitness, immunity, and digital detox."
        - article [ref=e384]:
          - generic [ref=e385]: "07"
          - paragraph [ref=e386]: "Integrated Living: traditional wisdom and modern science for a healthier mind and life."
    - generic [ref=e388]:
      - img "BTA GlobalX performance moment" [ref=e390]
      - generic [ref=e391]:
        - paragraph [ref=e392]: A Tapestry of Southeast Asia
        - heading "Culture moves into legacy and luxury" [level=2] [ref=e393]
        - paragraph [ref=e394]: The performance segment celebrates Southeast Asian heritage through music, dance, costume, rhythm, and storytelling before the site transitions into contemporary heritage fashion.
        - generic [ref=e395]:
          - generic [ref=e396]:
            - img [ref=e397]
            - text: Art & Luxury
          - generic [ref=e400]:
            - img [ref=e401]
            - text: Artisanal Heritage
          - generic [ref=e404]:
            - img [ref=e405]
            - text: Global Sophistication
          - generic [ref=e408]:
            - img [ref=e409]
            - text: The Power Aesthetic
          - generic [ref=e412]:
            - img [ref=e413]
            - text: Inner & Outer Radiance
          - generic [ref=e416]:
            - img [ref=e417]
            - text: Beautiful Life Naturally
          - generic [ref=e420]:
            - img [ref=e421]
            - text: Nature Meets Couture
          - generic [ref=e424]:
            - img [ref=e425]
            - text: Sensory Elegance
    - generic "Registration package slides" [ref=e435]:
      - generic [ref=e436]:
        - article [ref=e437]:
          - generic [ref=e438]:
            - generic [ref=e439]: Slide 01
            - heading "General" [level=3] [ref=e440]
            - paragraph [ref=e441]: Entry and table access for guests joining the full event journey.
        - article [ref=e443]:
          - generic [ref=e444]:
            - generic [ref=e445]: Slide 02
            - heading "Nominee" [level=3] [ref=e446]
            - paragraph [ref=e447]: Award nominee packages with profile, media, and recognition benefits.
  - button "Open Next.js Dev Tools" [ref=e464] [cursor=pointer]:
    - img [ref=e465]
  - alert [ref=e468]
```

# Test source

```ts
  16  |  */
  17  | 
  18  | import { test, expect } from '@playwright/test';
  19  | 
  20  | test.describe('ScrollTrigger Bug Condition Exploration', () => {
  21  |     test.beforeEach(async ({ page }) => {
  22  |         await page.goto('/');
  23  |         // Wait for page to load and animations to settle
  24  |         await page.waitForLoadState('networkidle');
  25  |         await page.waitForTimeout(1500); // Reduced wait time for loader animation
  26  |     });
  27  | 
  28  |     test('Property 1: Timeline should pin smoothly without flickering', async ({ page }) => {
  29  |         // Scroll to Timeline section
  30  |         const timelineSection = page.locator('.timeline-section');
  31  |         await timelineSection.scrollIntoViewIfNeeded();
  32  |         await page.waitForTimeout(500);
  33  | 
  34  |         // Observe Timeline section visibility over time to detect flickering
  35  |         const flickerDetected = await page.evaluate(async () => {
  36  |             const timeline = document.querySelector('.timeline-section');
  37  |             if (!timeline) return { flickering: true, reason: 'Timeline section not found' };
  38  | 
  39  |             const observations: boolean[] = [];
  40  |             const checkInterval = 100; // Increased interval for faster execution
  41  |             const duration = 500; // Reduced observation time
  42  | 
  43  |             // Record visibility states
  44  |             for (let i = 0; i < duration / checkInterval; i++) {
  45  |                 const rect = timeline.getBoundingClientRect();
  46  |                 const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;
  47  |                 observations.push(isVisible);
  48  |                 await new Promise(resolve => setTimeout(resolve, checkInterval));
  49  |             }
  50  | 
  51  |             // Detect flickering: if visibility toggles (true -> false -> true)
  52  |             let flickerCount = 0;
  53  |             for (let i = 1; i < observations.length - 1; i++) {
  54  |                 if (observations[i] === false && observations[i - 1] === true && observations[i + 1] === true) {
  55  |                     flickerCount++;
  56  |                 }
  57  |             }
  58  | 
  59  |             return {
  60  |                 flickering: flickerCount > 0,
  61  |                 flickerCount,
  62  |                 observations: observations.slice(0, 10), // First 10 observations for debugging
  63  |             };
  64  |         });
  65  | 
  66  |         // **EXPECTED OUTCOME**: Test FAILS on unfixed code (flickering detected)
  67  |         // When fixed, this assertion will pass (no flickering)
  68  |         expect(flickerDetected.flickering).toBe(false);
  69  |         console.log('Timeline flickering result:', flickerDetected);
  70  |     });
  71  | 
  72  |     test('Property 1: Forum should unpin smoothly with easing', async ({ page }) => {
  73  |         // Scroll to EventJourneySection (Forum)
  74  |         const forumSection = page.locator('.event-journey-section');
  75  |         await forumSection.scrollIntoViewIfNeeded();
  76  |         await page.waitForTimeout(500);
  77  | 
  78  |         // Scroll through all 5 Forum act pairs
  79  |         await page.evaluate(async () => {
  80  |             const forum = document.querySelector('.event-journey-section');
  81  |             if (!forum) return;
  82  | 
  83  |             // Scroll past the forum section to trigger unpinning
  84  |             window.scrollBy({ top: window.innerHeight * 5, behavior: 'smooth' });
  85  |             await new Promise(resolve => setTimeout(resolve, 1000)); // Reduced wait time
  86  |         });
  87  | 
  88  |         // Check if unpinning transition has smooth easing
  89  |         const unpinningResult = await page.evaluate(() => {
  90  |             const forum = document.querySelector('.event-journey-section') as HTMLElement;
  91  |             if (!forum) return { smooth: false, reason: 'Forum section not found' };
  92  | 
  93  |             // Check computed styles for transition properties
  94  |             const computedStyle = window.getComputedStyle(forum);
  95  |             const transition = computedStyle.transition || computedStyle.webkitTransition;
  96  |             const hasEasing = transition.includes('cubic-bezier') || transition.includes('ease');
  97  | 
  98  |             // Check if ScrollTrigger has onLeave/onLeaveBack callbacks
  99  |             const ScrollTrigger = (window as any).ScrollTrigger;
  100 |             if (!ScrollTrigger) return { smooth: false, reason: 'ScrollTrigger not found' };
  101 | 
  102 |             const triggers = ScrollTrigger.getAll();
  103 |             const forumTrigger = triggers.find((t: any) => t.trigger === forum);
  104 |             const hasCallbacks = forumTrigger && (forumTrigger.vars.onLeave || forumTrigger.vars.onLeaveBack);
  105 | 
  106 |             return {
  107 |                 smooth: hasEasing && hasCallbacks,
  108 |                 hasEasing,
  109 |                 hasCallbacks,
  110 |                 transition,
  111 |             };
  112 |         });
  113 | 
  114 |         // **EXPECTED OUTCOME**: Test FAILS on unfixed code (no smooth unpinning)
  115 |         // When fixed, this assertion will pass (smooth unpinning with easing)
> 116 |         expect(unpinningResult.smooth).toBe(true);
      |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  117 |         console.log('Forum unpinning result:', unpinningResult);
  118 |     });
  119 | 
  120 |     test('Property 1: No ScrollTrigger overlap between Timeline and Forum', async ({ page }) => {
  121 |         // Scroll to Timeline section
  122 |         const timelineSection = page.locator('.timeline-section');
  123 |         await timelineSection.scrollIntoViewIfNeeded();
  124 |         await page.waitForTimeout(500); // Reduced wait time
  125 | 
  126 |         // Check for ScrollTrigger overlap
  127 |         const overlapResult = await page.evaluate(() => {
  128 |             const ScrollTrigger = (window as any).ScrollTrigger;
  129 |             if (!ScrollTrigger) return { overlap: true, reason: 'ScrollTrigger not found' };
  130 | 
  131 |             const triggers = ScrollTrigger.getAll();
  132 |             const timelineTrigger = triggers.find((t: any) =>
  133 |                 t.trigger?.classList?.contains('timeline-section')
  134 |             );
  135 |             const forumTrigger = triggers.find((t: any) =>
  136 |                 t.trigger?.classList?.contains('event-journey-section')
  137 |             );
  138 | 
  139 |             if (!timelineTrigger || !forumTrigger) {
  140 |                 return {
  141 |                     overlap: true,
  142 |                     reason: 'Timeline or Forum trigger not found',
  143 |                     timelineFound: !!timelineTrigger,
  144 |                     forumFound: !!forumTrigger,
  145 |                 };
  146 |             }
  147 | 
  148 |             // Check if both triggers are active simultaneously
  149 |             const bothActive = timelineTrigger.isActive && forumTrigger.isActive;
  150 | 
  151 |             // Check trigger ranges
  152 |             const timelineEnd = timelineTrigger.end;
  153 |             const forumStart = forumTrigger.start;
  154 |             const rangeOverlap = timelineEnd >= forumStart;
  155 | 
  156 |             // Check for anticipatePin configuration
  157 |             const timelineHasAnticipatePin = timelineTrigger.vars.anticipatePin === 1;
  158 |             const forumHasAnticipatePin = forumTrigger.vars.anticipatePin === 1;
  159 | 
  160 |             return {
  161 |                 overlap: bothActive || rangeOverlap,
  162 |                 bothActive,
  163 |                 rangeOverlap,
  164 |                 timelineHasAnticipatePin,
  165 |                 forumHasAnticipatePin,
  166 |                 timelineEnd,
  167 |                 forumStart,
  168 |             };
  169 |         });
  170 | 
  171 |         // **EXPECTED OUTCOME**: Test FAILS on unfixed code (overlap detected)
  172 |         // When fixed, this assertion will pass (no overlap)
  173 |         expect(overlapResult.overlap).toBe(false);
  174 |         console.log('ScrollTrigger overlap result:', overlapResult);
  175 |     });
  176 | 
  177 |     test('Property 1: Rapid scroll from Hero to Forum should not cause flickering', async ({ page }) => {
  178 |         // Start at top
  179 |         await page.evaluate(() => window.scrollTo(0, 0));
  180 |         await page.waitForTimeout(500);
  181 | 
  182 |         // Rapidly scroll to Forum section
  183 |         const flickerResult = await page.evaluate(async () => {
  184 |             const observations: Array<{ time: number; timelineVisible: boolean; forumVisible: boolean }> = [];
  185 |             const timeline = document.querySelector('.timeline-section');
  186 |             const forum = document.querySelector('.event-journey-section');
  187 | 
  188 |             if (!timeline || !forum) {
  189 |                 return { flickering: true, reason: 'Sections not found' };
  190 |             }
  191 | 
  192 |             // Rapid scroll
  193 |             window.scrollBy({ top: window.innerHeight * 8, behavior: 'auto' });
  194 | 
  195 |             // Observe during scroll
  196 |             const checkInterval = 50; // Increased interval
  197 |             const duration = 800; // Reduced observation time
  198 | 
  199 |             for (let i = 0; i < duration / checkInterval; i++) {
  200 |                 const timelineRect = timeline.getBoundingClientRect();
  201 |                 const forumRect = forum.getBoundingClientRect();
  202 | 
  203 |                 observations.push({
  204 |                     time: i * checkInterval,
  205 |                     timelineVisible: timelineRect.top >= 0 && timelineRect.top <= window.innerHeight,
  206 |                     forumVisible: forumRect.top >= 0 && forumRect.top <= window.innerHeight,
  207 |                 });
  208 | 
  209 |                 await new Promise(resolve => setTimeout(resolve, checkInterval));
  210 |             }
  211 | 
  212 |             // Detect flickering: Timeline visibility should not toggle rapidly
  213 |             let timelineFlickers = 0;
  214 |             for (let i = 1; i < observations.length - 1; i++) {
  215 |                 const prev = observations[i - 1];
  216 |                 const curr = observations[i];
```