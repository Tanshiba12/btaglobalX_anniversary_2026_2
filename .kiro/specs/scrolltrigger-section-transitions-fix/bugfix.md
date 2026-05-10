# Bugfix Requirements Document

## Introduction

This bugfix addresses critical ScrollTrigger conflicts in the ShowcaseExperience component that cause visual glitches during scroll-based section transitions. The Timeline section flickers (appears and reappears) when initially reached, and the Forum section transitions abruptly to the next section without smooth unpinning. These issues stem from conflicting ScrollTrigger configurations between the Timeline section and EventJourneySection, both using `pin: true` without proper spacing and transition coordination.

The fix will ensure smooth, Apple-style transitions between all pinned sections while preserving existing scroll behavior for non-conflicting sections.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN the user scrolls to the Timeline section THEN the section flickers (appears and reappears) instead of smoothly pinning in place

1.2 WHEN the user scrolls past the Forum section (EventJourneySection) THEN the next section appears abruptly without a smooth unpinning transition

1.3 WHEN Timeline section's ScrollTrigger is active AND EventJourneySection's ScrollTrigger starts THEN the two pinned sections conflict, causing Timeline to unpin prematurely

1.4 WHEN EventJourneySection initializes its ScrollTrigger THEN it may trigger before Timeline completes its pin cycle, causing visual interference

### Expected Behavior (Correct)

2.1 WHEN the user scrolls to the Timeline section THEN the system SHALL smoothly pin the section without any flickering or visual glitches

2.2 WHEN the user scrolls past the Forum section (EventJourneySection) THEN the system SHALL smoothly unpin with proper easing (cubic-bezier(0.4, 0, 0.2, 1)) and transition to the next section

2.3 WHEN Timeline section's ScrollTrigger is active AND EventJourneySection's ScrollTrigger starts THEN the system SHALL coordinate the transitions so Timeline unpins completely before EventJourneySection pins

2.4 WHEN EventJourneySection initializes its ScrollTrigger THEN the system SHALL configure proper `pinSpacing` and start/end triggers to prevent premature activation

2.5 WHEN any pinned section unpins THEN the system SHALL use smooth transition callbacks (`onLeave`, `onLeaveBack`) with Apple-style easing

### Unchanged Behavior (Regression Prevention)

3.1 WHEN the user scrolls through the Hero section THEN the system SHALL CONTINUE TO apply parallax effects to hero media and title animations

3.2 WHEN the user scrolls through sections with `[data-animate]` elements THEN the system SHALL CONTINUE TO trigger fade-in animations at 84% viewport

3.3 WHEN the user scrolls through the Registration section THEN the system SHALL CONTINUE TO pin and horizontally scroll registration slides

3.4 WHEN the user scrolls through the Gallery section THEN the system SHALL CONTINUE TO apply alternating vertical parallax to gallery tiles

3.5 WHEN the user is on mobile (viewport < 901px) THEN the system SHALL CONTINUE TO use native horizontal scroll for Timeline and Registration sections instead of ScrollTrigger pinning

3.6 WHEN Lenis smooth scroll is active THEN the system SHALL CONTINUE TO use `lerp: 0.08` and `wheelMultiplier: 0.86` configuration

3.7 WHEN the user has reduced motion preferences enabled THEN the system SHALL CONTINUE TO skip all GSAP animations and ScrollTrigger effects
