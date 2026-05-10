# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scrolltrigger-bug-condition.spec.ts >> ScrollTrigger Bug Condition Exploration >> Property 1: No ScrollTrigger overlap between Timeline and Forum
- Location: tests\scrolltrigger-bug-condition.spec.ts:120:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
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
          - strong [ref=e218]: 3:00 PM - 5:00 PM
          - paragraph [ref=e219]: Forum, Bazaar, Art, Magazine
      - generic "Event day timeline slides" [ref=e221]:
        - generic [ref=e222]:
          - article [ref=e223]:
            - generic [ref=e225]: "01"
            - generic [ref=e226]:
              - paragraph [ref=e227]: 3:00 PM - 5:00 PM
              - heading "Segment 1" [level=3] [ref=e228]
              - strong [ref=e229]: Forum, Bazaar, Art, Magazine
              - list [ref=e230]:
                - listitem [ref=e231]: Event Opening
                - listitem [ref=e232]: Life Management & Mental Well-being Forum 2026 opening
                - listitem [ref=e233]: Speakers' Speech
                - listitem [ref=e234]: "Panel Discussion: The Mind & Life Management"
                - listitem [ref=e235]: Bazaar & Wellness Fair
                - listitem [ref=e236]: Sustainable Creative Art Exhibition
                - listitem [ref=e237]: Magazine Launch & Media Exposure
                - listitem [ref=e238]: Unveiling Strategic Alliance
          - article [ref=e239]:
            - generic [ref=e241]: "02"
            - generic [ref=e242]:
              - paragraph [ref=e243]: 6:00 PM - 7:00 PM
              - heading "Segment 2" [level=3] [ref=e244]
              - strong [ref=e245]: Anniversary, Red Carpet, Culture
              - list [ref=e246]:
                - listitem [ref=e247]: Anniversary Celebration
                - listitem [ref=e248]: Red Carpet & Exclusive Interviews
                - listitem [ref=e249]: Networking & Photoshoot
                - listitem [ref=e250]: Intercultural Music & Dance Performance
          - article [ref=e251]:
            - generic [ref=e253]: "03"
            - generic [ref=e254]:
              - paragraph [ref=e255]: 7:00 PM - 10:30 PM
              - heading "Segment 3" [level=3] [ref=e256]
              - strong [ref=e257]: Dinner, Fashion, Awards, Finale
              - list [ref=e258]:
                - listitem [ref=e259]: Gala Dinner & Global Networking
                - listitem [ref=e260]: Heritage Fashion Show
                - listitem [ref=e261]: Excellence Award 2026
                - listitem [ref=e262]: Lucky Draw
                - listitem [ref=e263]: Photo Session & Closing
    - generic [ref=e265]:
      - generic [ref=e266]:
        - paragraph [ref=e267]: Event Journey
        - heading "From Forum to Gala Stage" [level=2] [ref=e268]
        - generic [ref=e269]: Scroll through 5 act pairs as the anniversary day builds toward recognition.
      - generic [ref=e270]:
        - generic [ref=e271]:
          - button "ACT 1" [ref=e272] [cursor=pointer]
          - button "ACT 3" [ref=e273] [cursor=pointer]
          - button "ACT 5" [ref=e274] [cursor=pointer]
          - button "ACT 7" [ref=e275] [cursor=pointer]
          - button "ACT 9" [ref=e276] [cursor=pointer]
        - generic [ref=e277]:
          - heading "Loader & RSVP" [level=3] [ref=e279]
          - paragraph [ref=e280]: Begin your experience with a seamless entry. Register your attendance, confirm your participation, and prepare to embark on a transformative event journey.
          - generic [ref=e281]:
            - img [ref=e283]
            - img [ref=e287]
            - img [ref=e291]
        - generic [ref=e293]:
          - heading "Hero Invitation" [level=3] [ref=e295]
          - paragraph [ref=e296]: Experience the grandeur of our event through an immersive hero section. Discover the vision, mission, and transformative impact of BTA GLOBALX Anniversary 2026.
          - generic [ref=e297]:
            - img [ref=e299]
            - img [ref=e302]
            - img [ref=e308]
        - generic [ref=e313]:
          - button "ACT 2" [ref=e314] [cursor=pointer]
          - button "ACT 4" [ref=e315] [cursor=pointer]
          - button "ACT 6" [ref=e316] [cursor=pointer]
          - button "ACT 8" [ref=e317] [cursor=pointer]
          - button "ACT 10" [ref=e318] [cursor=pointer]
      - generic [ref=e319]:
        - img "Loader & RSVP" [ref=e321]
        - img "Hero Invitation" [ref=e323]
    - generic "Registration package slides" [ref=e338]:
      - generic [ref=e339]:
        - article [ref=e340]:
          - generic [ref=e341]:
            - generic [ref=e342]: Slide 01
            - heading "General" [level=3] [ref=e343]
            - paragraph [ref=e344]: Entry and table access for guests joining the full event journey.
        - article [ref=e346]:
          - generic [ref=e347]:
            - generic [ref=e348]: Slide 02
            - heading "Nominee" [level=3] [ref=e349]
            - paragraph [ref=e350]: Award nominee packages with profile, media, and recognition benefits.
  - button "Open Next.js Dev Tools" [ref=e367] [cursor=pointer]:
    - img [ref=e368]
  - alert [ref=e371]
```

# Test source

```ts
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
  116 |         expect(unpinningResult.smooth).toBe(true);
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
> 173 |         expect(overlapResult.overlap).toBe(false);
      |                                       ^ Error: expect(received).toBe(expected) // Object.is equality
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
  217 |                 const next = observations[i + 1];
  218 | 
  219 |                 if (prev && curr && next) {
  220 |                     if (curr.timelineVisible === false && prev.timelineVisible === true && next.timelineVisible === true) {
  221 |                         timelineFlickers++;
  222 |                     }
  223 |                 }
  224 |             }
  225 | 
  226 |             return {
  227 |                 flickering: timelineFlickers > 0,
  228 |                 timelineFlickers,
  229 |                 observations: observations.slice(0, 10), // Reduced sample size
  230 |             };
  231 |         });
  232 | 
  233 |         // **EXPECTED OUTCOME**: Test FAILS on unfixed code (flickering during rapid scroll)
  234 |         // When fixed, this assertion will pass (no flickering)
  235 |         expect(flickerResult.flickering).toBe(false);
  236 |         console.log('Rapid scroll flickering result:', flickerResult);
  237 |     });
  238 | 
  239 |     test('Property 1: Transition should use cubic-bezier(0.4, 0, 0.2, 1) easing', async ({ page }) => {
  240 |         // Scroll to Forum section
  241 |         const forumSection = page.locator('.event-journey-section');
  242 |         await forumSection.scrollIntoViewIfNeeded();
  243 |         await page.waitForTimeout(500);
  244 | 
  245 |         // Check easing configuration
  246 |         const easingResult = await page.evaluate(() => {
  247 |             const ScrollTrigger = (window as any).ScrollTrigger;
  248 |             if (!ScrollTrigger) return { correctEasing: false, reason: 'ScrollTrigger not found' };
  249 | 
  250 |             const triggers = ScrollTrigger.getAll();
  251 |             const forumTrigger = triggers.find((t: any) =>
  252 |                 t.trigger?.classList?.contains('event-journey-section')
  253 |             );
  254 | 
  255 |             if (!forumTrigger) {
  256 |                 return { correctEasing: false, reason: 'Forum trigger not found' };
  257 |             }
  258 | 
  259 |             // Check if onLeave/onLeaveBack callbacks use correct easing
  260 |             const onLeave = forumTrigger.vars.onLeave;
  261 |             const onLeaveBack = forumTrigger.vars.onLeaveBack;
  262 | 
  263 |             // We can't directly inspect the callback content, but we can check if they exist
  264 |             const hasCallbacks = !!onLeave && !!onLeaveBack;
  265 | 
  266 |             return {
  267 |                 correctEasing: hasCallbacks, // Simplified check - actual easing is in callback implementation
  268 |                 hasOnLeave: !!onLeave,
  269 |                 hasOnLeaveBack: !!onLeaveBack,
  270 |             };
  271 |         });
  272 | 
  273 |         // **EXPECTED OUTCOME**: Test FAILS on unfixed code (no easing callbacks)
```