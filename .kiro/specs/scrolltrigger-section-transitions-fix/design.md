# ScrollTrigger Section Transitions Fix - Bugfix Design

## Overview

This bugfix addresses ScrollTrigger conflicts between the Timeline section and EventJourneySection that cause Timeline flickering and abrupt Forum section unpinning. The root cause is two consecutive pinned sections with overlapping trigger ranges and missing coordination mechanisms. The fix implements proper pinSpacing, sequential trigger coordination, and smooth transition callbacks to achieve Apple-style section transitions.

## Glossary

- **Bug_Condition (C)**: The condition that triggers the bug - when Timeline section's ScrollTrigger is active AND EventJourneySection's ScrollTrigger initializes, causing overlapping pin states
- **Property (P)**: The desired behavior - smooth, sequential pinning where Timeline unpins completely before EventJourney pins, with no flickering or abrupt transitions
- **Preservation**: Existing scroll behaviors (Hero parallax, Registration pinning, Gallery parallax, mobile horizontal scroll, Lenis smooth scroll) that must remain unchanged
- **ScrollTrigger.create()**: GSAP method that creates scroll-based animations with pinning, scrubbing, and callbacks
- **pin**: ScrollTrigger property that fixes an element in place during scroll
- **pinSpacing**: ScrollTrigger property that adds spacing after pinned elements to prevent overlap (default: true, but can cause issues if not explicitly managed)
- **anticipatePin**: ScrollTrigger property that pre-calculates pin spacing to prevent layout shifts (value: 1 recommended)
- **scrub**: ScrollTrigger property that links animation progress directly to scroll position (value: true or number for smoothing)
- **Timeline Section**: The horizontal scrolling timeline at `.timeline-section` with ~10 beats, pinned for `window.innerHeight * Math.max(1, timelineBeats.length - 1)` duration
- **EventJourneySection**: The Forum section at `.event-journey-section`, pinned for `window.innerHeight * 4` duration with 5 act pairs

## Bug Details

### Bug Condition

The bug manifests when the user scrolls from the Timeline section into the EventJourneySection (Forum). The Timeline section flickers (appears and reappears) when initially reached, and the Forum section transitions abruptly to the next section without smooth unpinning. This occurs because both sections use `pin: true` with overlapping trigger ranges and no coordination mechanism.

**Formal Specification:**
```
FUNCTION isBugCondition(input)
  INPUT: input of type ScrollEvent
  OUTPUT: boolean
  
  RETURN (input.scrollY >= timelineSectionTop AND input.scrollY <= timelineSectionEnd)
         AND (eventJourneySectionTop - timelineSectionEnd < window.innerHeight)
         AND timelineScrollTrigger.isActive
         AND eventJourneyScrollTrigger.isInitializing
         AND NOT (timelineScrollTrigger.pinSpacing === true AND eventJourneyScrollTrigger.anticipatePin === 1)
END FUNCTION
```

### Examples

- **Timeline Flickering**: User scrolls to Timeline section → Timeline appears → Timeline disappears briefly → Timeline reappears → This happens because EventJourneySection's ScrollTrigger initializes while Timeline is still pinned, causing a conflict in pin states
- **Abrupt Forum Unpinning**: User scrolls through Forum section (5 act pairs) → Reaches end of Forum → Next section (ForumDeepDiveSection) appears instantly without transition → Expected: smooth unpinning with easing
- **Premature Timeline Unpin**: User scrolls through Timeline beats → Before reaching final beat, Timeline unpins abruptly → EventJourneySection pins immediately → Expected: Timeline completes full pin cycle before EventJourney starts
- **Edge Case - Rapid Scroll**: User rapidly scrolls from Hero to Forum → Timeline flickers multiple times → Forum may not pin correctly → Expected: smooth transitions even during rapid scroll

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- Hero section parallax effects (hero-media img y: -42 to 44, scale: 1.1 to 1.02) must continue to work
- All `[data-animate]` and `[data-stagger]` fade-in animations must continue to trigger at their current viewport thresholds (84%, 82%)
- Registration section pinning and horizontal slide scrolling must remain unchanged
- Gallery section alternating parallax (odd: y: -36, even: y: 28) must remain unchanged
- Mobile viewport (< 901px) native horizontal scroll for Timeline and Registration must remain unchanged
- Lenis smooth scroll configuration (lerp: 0.08, wheelMultiplier: 0.86) must remain unchanged
- Reduced motion preference handling must continue to skip all animations

**Scope:**
All inputs that do NOT involve scrolling through Timeline or EventJourneySection should be completely unaffected by this fix. This includes:
- Mouse clicks and interactions
- Keyboard navigation
- Touch gestures on mobile
- Window resize events
- All other ScrollTrigger instances (Hero, Registration, Gallery)

## Hypothesized Root Cause

Based on the bug description and code analysis, the most likely issues are:

1. **Missing pinSpacing Coordination**: Both Timeline and EventJourney sections use `pin: true` but don't explicitly configure `pinSpacing`. ScrollTrigger's default behavior may add spacing that causes the next section to start before the previous section unpins, creating overlap and flickering.

2. **Overlapping Trigger Ranges**: Timeline section ends at `+=${window.innerHeight * Math.max(1, timelineBeats.length - 1)}` (approximately 9-10 viewport heights), and EventJourneySection starts immediately after with `start: 'top top'`. If Timeline's end trigger and EventJourney's start trigger overlap due to pinSpacing calculations, both sections will be pinned simultaneously, causing conflicts.

3. **Missing anticipatePin**: EventJourneySection doesn't use `anticipatePin: 1`, which means ScrollTrigger may not pre-calculate the pin spacing correctly, leading to layout shifts and flickering when the section first pins.

4. **No Transition Callbacks**: Neither section uses `onLeave`, `onLeaveBack`, `onEnter`, or `onEnterBack` callbacks to coordinate smooth transitions. When EventJourneySection unpins, there's no easing or transition animation, causing the abrupt jump to the next section.

5. **EventJourneySection useEffect Dependency**: The EventJourneySection's ScrollTrigger is recreated whenever `activeIndex` changes (dependency array: `[activeIndex]`). This means the ScrollTrigger is killed and recreated multiple times during scrolling, which can cause flickering and state conflicts with the Timeline section's ScrollTrigger.

## Correctness Properties

Property 1: Bug Condition - Smooth Sequential Pinning

_For any_ scroll event where the user scrolls from Timeline section to EventJourneySection (isBugCondition returns true), the fixed ScrollTrigger configuration SHALL ensure Timeline unpins completely before EventJourneySection pins, with no flickering, overlap, or visual glitches during the transition.

**Validates: Requirements 2.1, 2.3, 2.4**

Property 2: Preservation - Non-Conflicting ScrollTrigger Behavior

_For any_ scroll event that does NOT involve Timeline or EventJourneySection transitions (isBugCondition returns false), the fixed code SHALL produce exactly the same scroll behavior as the original code, preserving Hero parallax, Registration pinning, Gallery parallax, mobile horizontal scroll, and Lenis smooth scroll.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7**

## Fix Implementation

### Changes Required

Assuming our root cause analysis is correct:

**File**: `src/components/experience/ShowcaseExperience.tsx`

**Function**: `loadMotion` (Timeline ScrollTrigger) and `EventJourneySection` (EventJourney ScrollTrigger)

**Specific Changes**:

1. **Add anticipatePin to Timeline ScrollTrigger**: In the `loadMotion` function, add `anticipatePin: 1` to the Timeline section's ScrollTrigger.create() configuration. This pre-calculates pin spacing and prevents layout shifts.
   - Location: Line ~570 (Timeline ScrollTrigger.create block)
   - Change: Add `anticipatePin: 1,` after `pin: true,`

2. **Add anticipatePin to EventJourneySection ScrollTrigger**: In the `EventJourneySection` component, add `anticipatePin: 1` to the ScrollTrigger.create() configuration.
   - Location: Line ~1130 (EventJourneySection ScrollTrigger.create block)
   - Change: Add `anticipatePin: 1,` after `pin: true,`

3. **Fix EventJourneySection useEffect Dependency**: Remove `activeIndex` from the useEffect dependency array to prevent ScrollTrigger recreation during scrolling. The ScrollTrigger should only be created once on mount and cleaned up on unmount.
   - Location: Line ~1150 (EventJourneySection useEffect return statement)
   - Change: `}, [activeIndex]);` → `}, []);`
   - Rationale: The `onUpdate` callback already handles `activeIndex` changes via `setActiveIndex`, so recreating the entire ScrollTrigger is unnecessary and causes flickering

4. **Add Smooth Unpinning Transition to EventJourneySection**: Add `onLeave` and `onLeaveBack` callbacks to EventJourneySection's ScrollTrigger to animate smooth unpinning with Apple-style easing.
   - Location: Line ~1130 (EventJourneySection ScrollTrigger.create block)
   - Add callbacks:
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

5. **Ensure Proper Trigger Spacing**: Verify that Timeline section's `end` trigger and EventJourneySection's `start` trigger don't overlap. Add explicit spacing if needed.
   - Timeline end: `+=${window.innerHeight * Math.max(1, timelineBeats.length - 1)}`
   - EventJourneySection start: `'top top'`
   - If overlap detected, adjust EventJourneySection start to: `'top-=${window.innerHeight * 0.1} top'` (start 10% viewport height before reaching top)

6. **Add invalidateOnRefresh to EventJourneySection**: Add `invalidateOnRefresh: true` to EventJourneySection's ScrollTrigger to ensure proper recalculation on window resize.
   - Location: Line ~1130 (EventJourneySection ScrollTrigger.create block)
   - Change: Add `invalidateOnRefresh: true,` after `anticipatePin: 1,`

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the bug on unfixed code (Timeline flickering, abrupt Forum unpinning), then verify the fix works correctly (smooth transitions) and preserves existing behavior (other ScrollTriggers unchanged).

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the bug BEFORE implementing the fix. Confirm or refute the root cause analysis (missing anticipatePin, overlapping triggers, useEffect dependency issue). If we refute, we will need to re-hypothesize.

**Test Plan**: Manually test scrolling behavior on the UNFIXED code to observe flickering and abrupt transitions. Use browser DevTools to inspect ScrollTrigger states and pin spacing calculations. Document specific scroll positions where bugs occur.

**Test Cases**:
1. **Timeline Flickering Test**: Scroll slowly to Timeline section → Observe if Timeline appears, disappears, then reappears (will fail on unfixed code)
2. **Forum Abrupt Unpin Test**: Scroll through all 5 Forum act pairs → Observe transition to next section (will show abrupt jump on unfixed code)
3. **Rapid Scroll Test**: Rapidly scroll from Hero to Forum → Observe if Timeline flickers multiple times (will fail on unfixed code)
4. **ScrollTrigger Overlap Test**: Use `ScrollTrigger.getAll()` in console to inspect active triggers when Timeline is pinned → Check if EventJourney trigger initializes prematurely (will show overlap on unfixed code)
5. **Pin Spacing Calculation Test**: Inspect DOM to measure actual spacing added by ScrollTrigger → Compare Timeline end position with EventJourney start position (will show insufficient spacing on unfixed code)

**Expected Counterexamples**:
- Timeline section flickers (appears/disappears/reappears) when first reached
- Forum section unpins abruptly without smooth transition
- ScrollTrigger.getAll() shows both Timeline and EventJourney triggers active simultaneously
- Possible causes: missing anticipatePin, overlapping trigger ranges, useEffect recreation, missing transition callbacks

### Fix Checking

**Goal**: Verify that for all inputs where the bug condition holds (scrolling from Timeline to EventJourney), the fixed function produces the expected behavior (smooth sequential pinning, no flickering).

**Pseudocode:**
```
FOR ALL scrollEvent WHERE isBugCondition(scrollEvent) DO
  result := scrollBehavior_fixed(scrollEvent)
  ASSERT expectedBehavior(result)
    WHERE expectedBehavior(result) = 
      (result.timelineFlickering === false)
      AND (result.forumUnpinningSmooth === true)
      AND (result.transitionEasing === 'cubic-bezier(0.4, 0, 0.2, 1)')
      AND (result.scrollTriggerOverlap === false)
END FOR
```

**Testing Approach**: Manual testing with visual inspection and ScrollTrigger state logging. Property-based testing is not practical for visual scroll behavior, but we can use automated scroll simulation with Puppeteer or Playwright to verify no flickering occurs.

**Test Cases**:
1. **Smooth Timeline Pin Test**: Scroll to Timeline → Verify Timeline pins smoothly without flickering
2. **Smooth Forum Unpin Test**: Scroll through Forum → Verify smooth unpinning with easing when transitioning to next section
3. **Sequential Pinning Test**: Scroll from Timeline to Forum → Verify Timeline unpins completely before Forum pins
4. **No ScrollTrigger Overlap Test**: Use `ScrollTrigger.getAll()` to verify only one section is pinned at a time
5. **Rapid Scroll Stability Test**: Rapidly scroll from Hero to Forum → Verify no flickering or state conflicts

### Preservation Checking

**Goal**: Verify that for all inputs where the bug condition does NOT hold (scrolling through other sections), the fixed function produces the same result as the original function.

**Pseudocode:**
```
FOR ALL scrollEvent WHERE NOT isBugCondition(scrollEvent) DO
  ASSERT scrollBehavior_original(scrollEvent) = scrollBehavior_fixed(scrollEvent)
END FOR
```

**Testing Approach**: Property-based testing is recommended for preservation checking because:
- It generates many test cases automatically across the input domain (different scroll positions, viewport sizes, scroll speeds)
- It catches edge cases that manual unit tests might miss (e.g., scroll during window resize, scroll with reduced motion)
- It provides strong guarantees that behavior is unchanged for all non-buggy inputs

**Test Plan**: Observe behavior on UNFIXED code first for Hero parallax, Registration pinning, Gallery parallax, and mobile scroll, then write property-based tests capturing that behavior. Compare fixed code output to baseline.

**Test Cases**:
1. **Hero Parallax Preservation**: Scroll through Hero section → Verify hero-media img parallax (y: -42 to 44, scale: 1.1 to 1.02) continues to work
2. **Registration Pinning Preservation**: Scroll through Registration section → Verify pinning and horizontal slide scrolling unchanged
3. **Gallery Parallax Preservation**: Scroll through Gallery section → Verify alternating parallax (odd: y: -36, even: y: 28) unchanged
4. **Mobile Scroll Preservation**: Test on viewport < 901px → Verify Timeline and Registration use native horizontal scroll instead of pinning
5. **Lenis Smooth Scroll Preservation**: Verify Lenis configuration (lerp: 0.08, wheelMultiplier: 0.86) unchanged
6. **Reduced Motion Preservation**: Enable reduced motion preference → Verify all animations skip correctly
7. **Data-Animate Preservation**: Scroll through sections with `[data-animate]` elements → Verify fade-in animations trigger at 84% viewport

### Unit Tests

- Test Timeline ScrollTrigger configuration (anticipatePin, pin, scrub, start, end)
- Test EventJourneySection ScrollTrigger configuration (anticipatePin, pin, scrub, start, end, invalidateOnRefresh)
- Test EventJourneySection useEffect dependency array (should be empty `[]`)
- Test smooth unpinning callbacks (onLeave, onLeaveBack with cubic-bezier easing)
- Test ScrollTrigger cleanup on component unmount

### Property-Based Tests

- Generate random scroll positions and verify no flickering occurs at Timeline section
- Generate random scroll speeds and verify smooth transitions between Timeline and Forum
- Generate random viewport sizes and verify ScrollTrigger recalculation works correctly
- Test that all non-Timeline/Forum ScrollTriggers continue to work across many scroll scenarios

### Integration Tests

- Test full scroll flow from Hero → Timeline → Forum → ForumDeepDive with smooth transitions
- Test rapid scrolling through entire page without flickering or state conflicts
- Test window resize during Timeline/Forum pinning to verify invalidateOnRefresh works
- Test reduced motion preference with full page scroll to verify all animations skip correctly
