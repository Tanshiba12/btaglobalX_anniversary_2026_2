# Implementation Plan

- [x] 1. Write bug condition exploration test
  - **Property 1: Bug Condition** - Timeline Flickering and Forum Abrupt Unpinning
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate the bug exists
  - **Scoped PBT Approach**: For deterministic bugs, scope the property to the concrete failing case(s) to ensure reproducibility
  - Test implementation details from Bug Condition in design:
    - Scroll to Timeline section and observe if Timeline appears, disappears, then reappears (flickering)
    - Scroll through all 5 Forum act pairs and observe transition to next section (abrupt jump)
    - Use `ScrollTrigger.getAll()` to inspect if both Timeline and EventJourney triggers are active simultaneously
    - Measure DOM spacing between Timeline end position and EventJourney start position
    - Test rapid scroll from Hero to Forum to observe multiple flickers
  - The test assertions should match the Expected Behavior Properties from design:
    - Timeline should pin smoothly without flickering (result.timelineFlickering === false)
    - Forum should unpin smoothly with easing (result.forumUnpinningSmooth === true)
    - Transition should use cubic-bezier(0.4, 0, 0.2, 1) easing
    - No ScrollTrigger overlap (result.scrollTriggerOverlap === false)
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (this is correct - it proves the bug exists)
  - Document counterexamples found to understand root cause:
    - Timeline section flickers when first reached
    - Forum section unpins abruptly without smooth transition
    - ScrollTrigger.getAll() shows both triggers active simultaneously
    - Missing anticipatePin, overlapping trigger ranges, useEffect recreation, or missing transition callbacks
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Non-Conflicting ScrollTrigger Behavior
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for non-buggy inputs:
    - Hero section: hero-media img parallax (y: -42 to 44, scale: 1.1 to 1.02)
    - Registration section: pinning and horizontal slide scrolling
    - Gallery section: alternating parallax (odd: y: -36, even: y: 28)
    - Mobile viewport (< 901px): native horizontal scroll for Timeline and Registration
    - Lenis smooth scroll: lerp: 0.08, wheelMultiplier: 0.86
    - Reduced motion: all animations skip correctly
    - Data-animate elements: fade-in animations trigger at 84% viewport
  - Write property-based tests capturing observed behavior patterns from Preservation Requirements:
    - Test Hero parallax continues to work across scroll positions
    - Test Registration pinning and horizontal scrolling unchanged
    - Test Gallery parallax unchanged across scroll positions
    - Test mobile viewport uses native scroll instead of pinning
    - Test Lenis configuration unchanged
    - Test reduced motion preference skips all animations
    - Test data-animate fade-in animations trigger correctly
  - Property-based testing generates many test cases for stronger guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [ ] 3. Fix ScrollTrigger conflicts between Timeline and EventJourneySection

  - [ ] 3.1 Add anticipatePin to Timeline ScrollTrigger
    - Open `src/components/experience/ShowcaseExperience.tsx`
    - Locate Timeline ScrollTrigger.create() block (around line 570 in loadMotion function)
    - Add `anticipatePin: 1,` after `pin: true,`
    - This pre-calculates pin spacing and prevents layout shifts
    - _Bug_Condition: isBugCondition(input) where Timeline is pinned AND EventJourney initializes_
    - _Expected_Behavior: Timeline pins smoothly without flickering_
    - _Preservation: Hero parallax, Registration pinning, Gallery parallax unchanged_
    - _Requirements: 2.1, 2.3, 2.4_

  - [ ] 3.2 Add anticipatePin to EventJourneySection ScrollTrigger
    - Locate EventJourneySection ScrollTrigger.create() block (around line 1130)
    - Add `anticipatePin: 1,` after `pin: true,`
    - This pre-calculates pin spacing for EventJourneySection
    - _Bug_Condition: isBugCondition(input) where EventJourney initializes while Timeline is active_
    - _Expected_Behavior: EventJourney pins smoothly after Timeline unpins_
    - _Preservation: Other ScrollTriggers unchanged_
    - _Requirements: 2.3, 2.4_

  - [ ] 3.3 Fix EventJourneySection useEffect dependency
    - Locate EventJourneySection useEffect return statement (around line 1150)
    - Change `}, [activeIndex]);` to `}, []);`
    - Remove activeIndex from dependency array to prevent ScrollTrigger recreation during scrolling
    - The onUpdate callback already handles activeIndex changes via setActiveIndex
    - _Bug_Condition: isBugCondition(input) where ScrollTrigger is recreated during scroll_
    - _Expected_Behavior: ScrollTrigger created once on mount, cleaned up on unmount_
    - _Preservation: EventJourney scroll behavior unchanged_
    - _Requirements: 1.1, 2.3_

  - [ ] 3.4 Add smooth unpinning transition callbacks to EventJourneySection
    - Locate EventJourneySection ScrollTrigger.create() block (around line 1130)
    - Add onLeave and onLeaveBack callbacks after scrub property:
      ```typescript
      onLeave: () => {
        gsap.to(sectionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        });
      },
      onLeaveBack: () => {
        gsap.to(sectionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        });
      },
      ```
    - This adds Apple-style easing to unpinning transitions
    - _Bug_Condition: isBugCondition(input) where EventJourney unpins abruptly_
    - _Expected_Behavior: Smooth unpinning with cubic-bezier easing_
    - _Preservation: Other section transitions unchanged_
    - _Requirements: 2.2, 2.5_

  - [ ] 3.5 Add invalidateOnRefresh to EventJourneySection
    - Locate EventJourneySection ScrollTrigger.create() block (around line 1130)
    - Add `invalidateOnRefresh: true,` after `anticipatePin: 1,`
    - This ensures proper recalculation on window resize
    - _Bug_Condition: isBugCondition(input) where window resize causes trigger miscalculation_
    - _Expected_Behavior: ScrollTrigger recalculates correctly on resize_
    - _Preservation: Other ScrollTriggers with invalidateOnRefresh unchanged_
    - _Requirements: 2.4_

  - [ ] 3.6 Verify proper trigger spacing between Timeline and EventJourneySection
    - Check Timeline section's end trigger: `+=${window.innerHeight * Math.max(1, timelineBeats.length - 1)}`
    - Check EventJourneySection's start trigger: `'top top'`
    - If overlap detected (Timeline end position >= EventJourney start position), adjust EventJourneySection start to: `'top-=${window.innerHeight * 0.1} top'`
    - This adds 10% viewport height spacing to prevent overlap
    - Use browser DevTools to measure actual DOM positions and verify no overlap
    - _Bug_Condition: isBugCondition(input) where trigger ranges overlap_
    - _Expected_Behavior: Timeline unpins completely before EventJourney pins_
    - _Preservation: Other section trigger spacing unchanged_
    - _Requirements: 2.3, 2.4_

  - [ ] 3.7 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Smooth Sequential Pinning
    - **IMPORTANT**: Re-run the SAME test from task 1 - do NOT write a new test
    - The test from task 1 encodes the expected behavior
    - When this test passes, it confirms the expected behavior is satisfied
    - Run bug condition exploration test from step 1:
      - Scroll to Timeline section → Verify Timeline pins smoothly without flickering
      - Scroll through Forum → Verify smooth unpinning with easing
      - Verify Timeline unpins completely before Forum pins
      - Use ScrollTrigger.getAll() to verify only one section pinned at a time
      - Test rapid scroll from Hero to Forum → Verify no flickering or state conflicts
    - **EXPECTED OUTCOME**: Test PASSES (confirms bug is fixed)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

  - [ ] 3.8 Verify preservation tests still pass
    - **Property 2: Preservation** - Non-Conflicting ScrollTrigger Behavior
    - **IMPORTANT**: Re-run the SAME tests from task 2 - do NOT write new tests
    - Run preservation property tests from step 2:
      - Hero parallax: Verify hero-media img parallax (y: -42 to 44, scale: 1.1 to 1.02) continues to work
      - Registration pinning: Verify pinning and horizontal slide scrolling unchanged
      - Gallery parallax: Verify alternating parallax (odd: y: -36, even: y: 28) unchanged
      - Mobile scroll: Test on viewport < 901px → Verify Timeline and Registration use native horizontal scroll
      - Lenis smooth scroll: Verify configuration (lerp: 0.08, wheelMultiplier: 0.86) unchanged
      - Reduced motion: Enable preference → Verify all animations skip correctly
      - Data-animate: Scroll through sections → Verify fade-in animations trigger at 84% viewport
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions)
    - Confirm all tests still pass after fix (no regressions)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [ ] 4. Checkpoint - Ensure all tests pass
  - Verify bug condition exploration test passes (Timeline pins smoothly, Forum unpins smoothly)
  - Verify preservation tests pass (Hero parallax, Registration pinning, Gallery parallax, mobile scroll, Lenis, reduced motion, data-animate all unchanged)
  - Verify no ScrollTrigger overlap using ScrollTrigger.getAll()
  - Test full scroll flow from Hero → Timeline → Forum → ForumDeepDive with smooth transitions
  - Test rapid scrolling through entire page without flickering or state conflicts
  - Test window resize during Timeline/Forum pinning to verify invalidateOnRefresh works
  - Ask the user if questions arise or if additional testing is needed
