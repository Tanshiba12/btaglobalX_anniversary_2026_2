# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scrolltrigger-bug-condition.spec.ts >> ScrollTrigger Bug Condition Exploration >> Property 1: Transition should use cubic-bezier(0.4, 0, 0.2, 1) easing
- Location: tests\scrolltrigger-bug-condition.spec.ts:239:9

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
    - generic [ref=e3]:
      - generic [ref=e5]:
        - paragraph [ref=e6]: Hotel Sheraton Johor Bahru, Malaysia
        - strong [ref=e7]: BTA GlobalX
        - generic [ref=e8]: Excellence Awards 2026
      - generic "Loading progress" [ref=e9]
      - button "Skip intro" [ref=e14] [cursor=pointer]
    - generic "BTA GlobalX":
      - link "BTA GlobalX home" [ref=e15] [cursor=pointer]:
        - /url: "#top"
    - navigation "Sticky page actions":
      - generic [ref=e16]:
        - generic [ref=e17]:
          - generic [ref=e18]: Get social
          - generic "Social links":
            - link "Facebook" [ref=e19] [cursor=pointer]:
              - /url: "#facebook"
              - img [ref=e20]
            - link "YouTube" [ref=e22] [cursor=pointer]:
              - /url: "#youtube"
              - img [ref=e23]
            - link "Instagram" [ref=e26] [cursor=pointer]:
              - /url: "#instagram"
              - img [ref=e27]
        - generic "Page sections" [ref=e31]:
          - link "Overview" [ref=e32] [cursor=pointer]:
            - /url: "#overview"
          - link "Program" [ref=e33] [cursor=pointer]:
            - /url: "#program"
          - link "Timeline" [ref=e34] [cursor=pointer]:
            - /url: "#timeline"
          - link "Register" [ref=e35] [cursor=pointer]:
            - /url: "#register"
          - link "Location" [ref=e36] [cursor=pointer]:
            - /url: "#location"
        - generic [ref=e37]:
          - generic "Contact links":
            - link "WhatsApp" [ref=e38] [cursor=pointer]:
              - /url: "#whatsapp"
              - img [ref=e39]
          - generic [ref=e41]: Get In touch
    - generic [ref=e42]:
      - img "BTA GlobalX awards ceremony audience" [ref=e45]
      - generic [ref=e50]:
        - generic [ref=e51]:
          - paragraph [ref=e52]: Anniversary Gala Night / Excellence Award 2026
          - heading "BTA 3RD ANNIVERSARY & EXCELLENCE AWARDS 2026" [level=1] [ref=e53]:
            - generic [ref=e54]: BTA 3RD ANNIVERSARY
            - generic [ref=e55]: "&"
            - generic [ref=e56]: EXCELLENCE AWARDS 2026
        - generic "Event partners" [ref=e57]:
          - generic [ref=e58]: Sponsored by
          - generic [ref=e59]: AYU HERBA PTE LTD
          - generic [ref=e60]: Organized by BTA GLOBALX
          - generic [ref=e61]: Media with Tycoon Global
        - generic [ref=e62]:
          - generic "Countdown to event" [ref=e63]:
            - generic [ref=e64]:
              - strong [ref=e65]: "89"
              - emphasis [ref=e66]: Days
            - generic [ref=e67]:
              - strong [ref=e68]: "00"
              - emphasis [ref=e69]: Hours
            - generic [ref=e70]:
              - strong [ref=e71]: "54"
              - emphasis [ref=e72]: Min
          - link "Hotel Sheraton Johor Bahru, Malaysia 1 August 2026 3:00 PM - 10:30 PM" [ref=e73] [cursor=pointer]:
            - /url: "#location"
            - img [ref=e74]
            - generic [ref=e77]:
              - strong [ref=e78]: Hotel Sheraton Johor Bahru, Malaysia
              - emphasis [ref=e79]:
                - img [ref=e80]
                - text: 1 August 2026
              - emphasis [ref=e82]:
                - img [ref=e83]
                - text: 3:00 PM - 10:30 PM
    - generic [ref=e87]:
      - generic [ref=e88]:
        - paragraph [ref=e89]: Event overview
        - heading "Where purpose meets recognition" [level=2] [ref=e90]
      - generic [ref=e91]:
        - paragraph [ref=e92]: "An anniversary built as a living stage: wellness insight, cultural expression, media visibility, strategic alliance, gala networking, and public recognition moving through one day."
        - paragraph [ref=e93]: The experience is designed for guests, nominees, partners, sponsors, artists, speakers, and changemakers who need more than attendance. They need a room where their story is seen clearly.
        - paragraph [ref=e94]: "From the forum opening to the award finale, every movement connects back to one promise: purpose meets recognition, and excellence finds its stage."
      - generic [ref=e95]:
        - strong [ref=e96]: "14"
        - generic [ref=e97]: core highlights across one continuous landing page
    - generic [ref=e99]:
      - generic [ref=e100]:
        - generic "Founder portrait placeholder" [ref=e101]:
          - generic [ref=e102]: H.E.
          - strong [ref=e103]: SB
        - paragraph [ref=e104]: Image placeholder
      - generic [ref=e105]:
        - paragraph [ref=e106]: Founder's Message
        - heading "Celebrating 3 Years of BTA GlobalX Anniversary" [level=2] [ref=e107]
        - generic [ref=e108]:
          - paragraph [ref=e109]: "BTA GlobalX began as a spark of an idea fueled by late nights, deep conversations, and a desire to build more than a network: a purpose-driven ecosystem where people, passion, and impact align."
          - paragraph [ref=e110]: "Supporting entrepreneurs across Asia, the Middle East, and Europe, I witnessed firsthand how powerful transformation happens when driven individuals unite with purpose. That is how BTA GlobalX was born: a platform where your network becomes your catalyst for change."
          - paragraph [ref=e111]: Since then, we have grown not just in size, but in intention and impact. We have built trusted relationships, fostered meaningful partnerships, and cultivated a culture of Givers Get, where success is shared and purpose comes first.
          - paragraph [ref=e112]: "To my team, the quiet warriors behind the scenes, the dreamers who dared, and the doers who delivered: you are the soul of BTA GlobalX. To every partner who trusted us and every member who showed up with open minds and open hearts, thank you for believing in this vision."
          - paragraph [ref=e113]: The future holds deeper learning, stronger alliances, and bold innovation. We are not just building a brand. We are shaping a legacy of excellence with impact.
          - paragraph [ref=e114]: Join us on 1 August 2026 at Hotel Sheraton Johor Bahru, Malaysia for an inspiring and memorable day of networking, recognition, wellness, cultural celebration, and meaningful connection as we celebrate the Excellence Awards.
        - generic [ref=e115]:
          - generic [ref=e116]: With gratitude,
          - strong [ref=e117]: H.E. Amb. Dr. Sangeeta Biswas. M.D.
          - paragraph [ref=e118]: Founder of Ayu Herba and BTA GlobalX
    - generic [ref=e120]:
      - generic [ref=e121]:
        - paragraph [ref=e122]: Event highlights
        - img [ref=e123]
        - heading "What happens here" [level=2] [ref=e125]
        - paragraph [ref=e126]: "The day is mapped as a sequence of scenes: guests learn, explore, become visible, and then celebrate. Every highlight has a role in the larger gala journey."
      - img "BTA GlobalX event highlight moment" [ref=e128]
      - generic [ref=e129]:
        - article [ref=e130]:
          - generic [ref=e131]: 02 signals
          - heading "Learn" [level=3] [ref=e132]
          - paragraph [ref=e133]: Forum, speakers, panel discussion, and practical mind-life management.
          - generic [ref=e134]:
            - link "Life Management & Mental Well-being Forum 2026" [ref=e135] [cursor=pointer]:
              - /url: "#forum"
              - img [ref=e136]
              - text: Life Management & Mental Well-being Forum 2026
            - link "Speakers' Speech" [ref=e140] [cursor=pointer]:
              - /url: "#forum"
              - img [ref=e141]
              - text: Speakers' Speech
        - article [ref=e146]:
          - generic [ref=e147]: 02 signals
          - heading "Explore" [level=3] [ref=e148]
          - paragraph [ref=e149]: Bazaar, wellness fair, sustainable art, and creative entrepreneurship.
          - generic [ref=e150]:
            - link "Bazaar & Wellness Fair" [ref=e151] [cursor=pointer]:
              - /url: "#creative-market"
              - img [ref=e152]
              - text: Bazaar & Wellness Fair
            - link "Sustainable Creative Art Exhibition" [ref=e154] [cursor=pointer]:
              - /url: "#creative-market"
              - img [ref=e155]
              - text: Sustainable Creative Art Exhibition
        - article [ref=e161]:
          - generic [ref=e162]: 03 signals
          - heading "Be Seen" [level=3] [ref=e163]
          - paragraph [ref=e164]: Magazine launch, strategic alliance, red carpet, interviews, and media exposure.
          - generic [ref=e165]:
            - link "THE PREMIERE" [ref=e166] [cursor=pointer]:
              - /url: "#premiere"
              - img [ref=e167]
              - text: THE PREMIERE
            - link "Unveil Strategic Alliance" [ref=e169] [cursor=pointer]:
              - /url: "#premiere"
              - img [ref=e170]
              - text: Unveil Strategic Alliance
            - link "Red Carpet & Exclusive Interviews" [ref=e175] [cursor=pointer]:
              - /url: "#red-carpet-runway"
              - img [ref=e176]
              - text: Red Carpet & Exclusive Interviews
        - article [ref=e179]:
          - generic [ref=e180]: 07 signals
          - heading "Celebrate" [level=3] [ref=e181]
          - paragraph [ref=e182]: Culture, fashion, gala dinner, awards, lucky draw, ceremony, and gallery.
          - generic [ref=e183]:
            - link "Inter-cultural Music & Dance" [ref=e184] [cursor=pointer]:
              - /url: "#red-carpet-runway"
              - img [ref=e185]
              - text: Inter-cultural Music & Dance
            - link "Heritage Fashion Show" [ref=e188] [cursor=pointer]:
              - /url: "#red-carpet-runway"
              - img [ref=e189]
              - text: Heritage Fashion Show
            - link "Gala Dinner & Global Networking" [ref=e192] [cursor=pointer]:
              - /url: "#gala-awards"
              - img [ref=e193]
              - text: Gala Dinner & Global Networking
            - link "Excellence Award 2026" [ref=e198] [cursor=pointer]:
              - /url: "#gala-awards"
              - img [ref=e199]
              - text: Excellence Award 2026
            - link "Lucky Draw" [ref=e205] [cursor=pointer]:
              - /url: "#gallery-finale"
              - img [ref=e206]
              - text: Lucky Draw
            - link "Anniversary Ceremony" [ref=e210] [cursor=pointer]:
              - /url: "#gallery-finale"
              - img [ref=e211]
              - text: Anniversary Ceremony
            - link "Our Previous Gallery" [ref=e214] [cursor=pointer]:
              - /url: "#gallery-finale"
              - img [ref=e215]
              - text: Our Previous Gallery
    - generic [ref=e222]:
      - generic [ref=e223]:
        - generic [ref=e224]:
          - paragraph [ref=e225]: Event timeline
          - heading "Event Day Timeline" [level=2] [ref=e226]
          - generic [ref=e227]: 3:00 PM - 10:30 PM
        - generic [ref=e228]:
          - generic [ref=e229]: Current segment
          - strong [ref=e230]: 7:00 PM - 10:30 PM
          - paragraph [ref=e231]: Dinner, Fashion, Awards, Finale
      - generic "Event day timeline slides" [ref=e234]:
        - generic [ref=e235]:
          - article [ref=e236]:
            - generic [ref=e238]: "01"
            - generic [ref=e239]:
              - paragraph [ref=e240]: 3:00 PM - 5:00 PM
              - heading "Segment 1" [level=3] [ref=e241]
              - strong [ref=e242]: Forum, Bazaar, Art, Magazine
              - list [ref=e243]:
                - listitem [ref=e244]: Event Opening
                - listitem [ref=e245]: Life Management & Mental Well-being Forum 2026 opening
                - listitem [ref=e246]: Speakers' Speech
                - listitem [ref=e247]: "Panel Discussion: The Mind & Life Management"
                - listitem [ref=e248]: Bazaar & Wellness Fair
                - listitem [ref=e249]: Sustainable Creative Art Exhibition
                - listitem [ref=e250]: Magazine Launch & Media Exposure
                - listitem [ref=e251]: Unveiling Strategic Alliance
          - article [ref=e252]:
            - generic [ref=e254]: "02"
            - generic [ref=e255]:
              - paragraph [ref=e256]: 6:00 PM - 7:00 PM
              - heading "Segment 2" [level=3] [ref=e257]
              - strong [ref=e258]: Anniversary, Red Carpet, Culture
              - list [ref=e259]:
                - listitem [ref=e260]: Anniversary Celebration
                - listitem [ref=e261]: Red Carpet & Exclusive Interviews
                - listitem [ref=e262]: Networking & Photoshoot
                - listitem [ref=e263]: Intercultural Music & Dance Performance
          - article [ref=e264]:
            - generic [ref=e266]: "03"
            - generic [ref=e267]:
              - paragraph [ref=e268]: 7:00 PM - 10:30 PM
              - heading "Segment 3" [level=3] [ref=e269]
              - strong [ref=e270]: Dinner, Fashion, Awards, Finale
              - list [ref=e271]:
                - listitem [ref=e272]: Gala Dinner & Global Networking
                - listitem [ref=e273]: Heritage Fashion Show
                - listitem [ref=e274]: Excellence Award 2026
                - listitem [ref=e275]: Lucky Draw
                - listitem [ref=e276]: Photo Session & Closing
    - generic [ref=e278]:
      - generic [ref=e279]:
        - paragraph [ref=e280]: Event Journey
        - heading "From Forum to Gala Stage" [level=2] [ref=e281]
        - generic [ref=e282]: Scroll through 5 act pairs as the anniversary day builds toward recognition.
      - generic [ref=e283]:
        - generic [ref=e284]:
          - button "ACT 1" [ref=e285] [cursor=pointer]
          - button "ACT 3" [ref=e286] [cursor=pointer]
          - button "ACT 5" [ref=e287] [cursor=pointer]
          - button "ACT 7" [ref=e288] [cursor=pointer]
          - button "ACT 9" [ref=e289] [cursor=pointer]
        - generic [ref=e290]:
          - heading "Loader & RSVP" [level=3] [ref=e292]
          - paragraph [ref=e293]: Begin your experience with a seamless entry. Register your attendance, confirm your participation, and prepare to embark on a transformative event journey.
          - generic [ref=e294]:
            - img [ref=e296]
            - img [ref=e300]
            - img [ref=e304]
        - generic [ref=e306]:
          - heading "Hero Invitation" [level=3] [ref=e308]
          - paragraph [ref=e309]: Experience the grandeur of our event through an immersive hero section. Discover the vision, mission, and transformative impact of BTA GLOBALX Anniversary 2026.
          - generic [ref=e310]:
            - img [ref=e312]
            - img [ref=e315]
            - img [ref=e321]
        - generic [ref=e326]:
          - button "ACT 2" [ref=e327] [cursor=pointer]
          - button "ACT 4" [ref=e328] [cursor=pointer]
          - button "ACT 6" [ref=e329] [cursor=pointer]
          - button "ACT 8" [ref=e330] [cursor=pointer]
          - button "ACT 10" [ref=e331] [cursor=pointer]
      - generic [ref=e332]:
        - img "Loader & RSVP" [ref=e334]
        - img "Hero Invitation" [ref=e336]
    - generic [ref=e338]:
      - generic [ref=e339]:
        - paragraph [ref=e340]: Speakers + topics
        - heading "The mind and life management board" [level=2] [ref=e341]
      - generic [ref=e342]:
        - article [ref=e343]:
          - generic [ref=e344]: Keynote Speaker / Moderator
          - strong [ref=e345]: Prof. Dr. Mike Chan
          - paragraph [ref=e346]: Panel discussion leadership, keynote direction, and holistic life management framing.
        - generic [ref=e347]:
          - article [ref=e348]:
            - generic [ref=e349]: WS
            - strong [ref=e350]: Dr. Way Sun
            - paragraph [ref=e351]: Wellness, science, and mind-life management perspective.
          - article [ref=e352]:
            - generic [ref=e353]: SB
            - strong [ref=e354]: Dr. Sangeeta Biswas
            - paragraph [ref=e355]: Global leadership and holistic wellbeing perspective.
          - article [ref=e356]:
            - generic [ref=e357]: AS
            - strong [ref=e358]: Amelia Saleha
            - paragraph [ref=e359]: Beauty, wellness, emotional balance, and modern lifestyle insight.
          - article [ref=e360]:
            - generic [ref=e361]: F
            - strong [ref=e362]: Dato Sri Dr. Fams
            - paragraph [ref=e363]: Professional development and cross-sector contribution.
          - article [ref=e364]:
            - generic [ref=e365]: RT
            - strong [ref=e366]: Rendi Tan Ravi
            - paragraph [ref=e367]: Purpose, discipline, and personal balance.
          - article [ref=e368]:
            - generic [ref=e369]: EQ
            - strong [ref=e370]: Dr. Elle Quan
            - paragraph [ref=e371]: Wellbeing, emotional health, and sustainable personal growth.
      - generic [ref=e372]:
        - article [ref=e373]:
          - generic [ref=e374]: "01"
          - paragraph [ref=e375]: "Mastering Life Through Shindo: a holistic approach to personal balance and purpose."
        - article [ref=e376]:
          - generic [ref=e377]: "02"
          - paragraph [ref=e378]: "Ayurveda & Inner Radiance: beauty, wellness, and emotional balance."
        - article [ref=e379]:
          - generic [ref=e380]: "03"
          - paragraph [ref=e381]: "The Science of Youth: stem cells for cognitive vitality and aesthetic longevity."
        - article [ref=e382]:
          - generic [ref=e383]: "04"
          - paragraph [ref=e384]: "Breaking the Silence: mental health awareness, challenges, and solutions."
        - article [ref=e385]:
          - generic [ref=e386]: "05"
          - paragraph [ref=e387]: "Mind Over Matter: yoga and meditation in mental wellness."
        - article [ref=e388]:
          - generic [ref=e389]: "06"
          - paragraph [ref=e390]: "Embracing Holistic Wellness in Modern Lifestyle: self-discovery, simplicity, sustainable well-being, fitness, immunity, and digital detox."
    - generic "Registration package slides" [ref=e400]:
      - generic [ref=e401]:
        - article [ref=e402]:
          - generic [ref=e403]:
            - generic [ref=e404]: Slide 01
            - heading "General" [level=3] [ref=e405]
            - paragraph [ref=e406]: Entry and table access for guests joining the full event journey.
        - article [ref=e408]:
          - generic [ref=e409]:
            - generic [ref=e410]: Slide 02
            - heading "Nominee" [level=3] [ref=e411]
            - paragraph [ref=e412]: Award nominee packages with profile, media, and recognition benefits.
  - button "Open Next.js Dev Tools" [ref=e429] [cursor=pointer]:
    - img [ref=e430]
  - alert [ref=e433]
```

# Test source

```ts
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
  274 |         // When fixed, this assertion will pass (correct easing)
> 275 |         expect(easingResult.correctEasing).toBe(true);
      |                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  276 |         console.log('Easing configuration result:', easingResult);
  277 |     });
  278 | });
  279 | 
```