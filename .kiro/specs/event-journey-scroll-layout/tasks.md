# Implementation Plan: Event Journey Scroll Layout

## Overview

This implementation plan breaks down the Event Journey Scroll Layout feature into discrete, incremental coding tasks. The feature creates a scroll-triggered interactive section that presents 10 event acts in an immersive dual-sidebar layout using GSAP ScrollTrigger, React 19, and Next.js 16.2.4.

The implementation follows a phased approach: core structure → scroll integration → animations → media handling → responsive design → accessibility → performance optimization.

## Tasks

- [x] 1. Set up data models and type definitions
  - Create `JourneyAct` interface in `src/types/content.ts`
  - Define act pair mapping types
  - Create sample journey acts data in `src/data/journey.ts` with all 10 acts
  - Export journey data from `src/data/index.ts`
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 2. Create core component structure
  - [x] 2.1 Create EventJourneySection component
    - Create `src/components/experience/EventJourneySection.tsx`
    - Implement component with props interface (acts, className, reducedMotion)
    - Set up state management for activeActPairIndex, scrollProgress, isScrolling, loadedMediaIndices
    - Add basic layout structure with viewport and track containers
    - _Requirements: 1.1, 1.2, 1.3, 3.1_
  
  - [x] 2.2 Create ActSidebar component
    - Create `src/components/experience/ActSidebar.tsx`
    - Implement left/right sidebar with act buttons
    - Add active/inactive state styling using --red, --lime CSS variables
    - Implement click handlers for act navigation
    - _Requirements: 1.1, 1.2, 4.1, 4.2, 4.3, 4.4_
  
  - [x] 2.3 Create ContentPanel component
    - Create `src/components/experience/ContentPanel.tsx`
    - Implement panel layout with act heading, description area, icon grid, and media container
    - Add isActive prop to control visibility and animations
    - Apply --radius border styling and typography from globals.css
    - _Requirements: 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 3. Checkpoint - Verify basic structure renders
  - Ensure all components render without errors
  - Verify act data displays correctly in sidebars and panels
  - Check CSS variables are applied correctly
  - Ask the user if questions arise

- [ ] 4. Implement GSAP ScrollTrigger integration
  - [x] 4.1 Set up GSAP ScrollTrigger initialization
    - Import and register GSAP ScrollTrigger plugin in EventJourneySection
    - Create setupScrollTrigger function with pin, scrub, and horizontal scroll configuration
    - Implement scroll progress tracking (0-1 range)
    - Add cleanup function for unmounting
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 8.2_
  
  - [x] 4.2 Implement act pair selection logic
    - Create getActiveActPairIndex function to map scroll progress to pair index (0-4)
    - Create getActiveActIndices function to return [oddIndex, evenIndex] for current pair
    - Update state when scroll progress changes
    - Implement scroll trigger thresholds (0-0.2, 0.2-0.4, 0.4-0.6, 0.6-0.8, 0.8-1.0)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_
  
  - [ ]* 4.3 Write unit tests for scroll logic
    - Test getActiveActPairIndex returns correct index for scroll progress values
    - Test getActiveActIndices returns correct act indices for each pair
    - Test scroll trigger threshold boundaries
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 5. Implement typewriter text animation
  - [x] 5.1 Create TypewriterText component
    - Create `src/components/experience/TypewriterText.tsx`
    - Implement useTypewriter hook with character-by-character or word-by-word reveal
    - Add speed prop (30-100ms per character) with default 50ms
    - Add onComplete callback
    - Reset animation when isActive changes to false
    - _Requirements: 2.2, 5.1, 5.2, 5.3, 5.4_
  
  - [x] 5.2 Add CSS-based typewriter animation fallback
    - Create typewriter keyframe animation in component styles
    - Use steps() timing function for character-by-character effect
    - Add prefers-reduced-motion media query for instant display
    - _Requirements: 5.1, 5.2, 5.4, 10.5_
  
  - [ ]* 5.3 Write unit tests for TypewriterText
    - Test text reveals progressively when isActive is true
    - Test animation resets when isActive changes to false
    - Test onComplete callback fires after full text display
    - Test speed prop affects reveal timing
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 6. Implement icon grid with staggered animations
  - [x] 6.1 Create IconGrid component
    - Create `src/components/experience/IconGrid.tsx`
    - Display 3-4 lucide-react icons from act data
    - Implement GSAP stagger animation (opacity, scale, y transform)
    - Use 100-200ms stagger delay between icons
    - Apply colors from --lime, --red, --ink, --paper palette
    - _Requirements: 2.3, 6.1, 6.2, 6.3, 6.4_
  
  - [ ]* 6.2 Write unit tests for IconGrid
    - Test correct number of icons render based on act data
    - Test icons animate when isActive is true
    - Test stagger timing between icon animations
    - _Requirements: 6.1, 6.2, 6.3_

- [ ] 7. Implement media asset display with lazy loading
  - [x] 7.1 Create MediaAsset component
    - Create `src/components/experience/MediaAsset.tsx`
    - Support video, image, and animation types
    - Implement lazy loading based on isActive prop
    - Add video controls (play, pause, volume) for video type
    - Apply object-fit contain for videos, cover for images
    - Add --radius border-radius styling
    - _Requirements: 2.4, 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [x] 7.2 Implement media loading error handling
    - Add error state for failed media loads
    - Display fallback UI with "Media unavailable" message
    - Call onError callback when media fails to load
    - _Requirements: 7.1, 7.2, 7.3, 7.4_
  
  - [x] 7.3 Add lazy loading strategy
    - Create useLazyMedia hook to determine when to load media
    - Load media for active acts and adjacent acts (preload optimization)
    - Update loadedMediaIndices state in EventJourneySection
    - Implement video autoplay when act becomes active, pause when inactive
    - _Requirements: 7.1, 7.4, 10.2_
  
  - [ ]* 7.4 Write integration tests for media loading
    - Test media loads when act pair becomes active
    - Test adjacent acts preload media
    - Test video autoplay/pause on act change
    - Test error handling displays fallback UI
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 10.2_

- [ ] 8. Checkpoint - Verify animations and media work correctly
  - Test typewriter animation reveals text progressively
  - Test icon stagger animations trigger on act change
  - Test media loads and displays correctly
  - Test video autoplay/pause behavior
  - Ensure all tests pass, ask the user if questions arise

- [ ] 9. Implement responsive design
  - [x] 9.1 Add mobile layout (< 768px)
    - Hide ActSidebar components on mobile
    - Stack ContentPanels vertically (one act at a time)
    - Implement horizontal swipe navigation between acts
    - Add compact navigation dots to indicate current act
    - Adjust typography sizes using clamp() functions
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_
  
  - [x] 9.2 Add tablet layout (768px - 1023px)
    - Reduce ActSidebar width to 6rem
    - Stack ContentPanels vertically
    - Adjust font sizes for tablet viewport
    - Maintain dual-panel structure with reduced spacing
    - _Requirements: 9.1, 9.4, 9.5_
  
  - [x] 9.3 Add desktop layout (>= 1024px)
    - Full dual-panel side-by-side layout
    - Full-width ActSidebars (8rem minimum)
    - Enhanced animations and typewriter effects
    - Apply grid layout with proper gap spacing
    - _Requirements: 1.1, 1.2, 1.3, 9.4, 9.5_
  
  - [ ]* 9.4 Write responsive layout tests
    - Test mobile layout hides sidebars and stacks panels
    - Test tablet layout reduces sidebar width
    - Test desktop layout shows full dual-panel structure
    - Test typography scales correctly at each breakpoint
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 10. Implement accessibility features
  - [x] 10.1 Add keyboard navigation
    - Implement Enter and Space key handlers for ActButton
    - Add proper tabIndex management (0 for active, -1 for inactive)
    - Implement focus management to move focus to active panel
    - Add arrow key navigation between acts
    - _Requirements: 10.3_
  
  - [x] 10.2 Add ARIA labels and roles
    - Add role="region" and aria-label to EventJourneySection
    - Add role="tablist" and aria-orientation to track container
    - Add role="tab" and aria-selected to ActButton
    - Add aria-label to all interactive elements
    - Add aria-label to media controls
    - _Requirements: 10.4_
  
  - [x] 10.3 Implement reduced motion support
    - Create useReducedMotion hook to detect prefers-reduced-motion
    - Disable typewriter animation when reduced motion is enabled
    - Disable icon stagger animations when reduced motion is enabled
    - Use simple opacity transitions instead of complex animations
    - Add @media (prefers-reduced-motion: reduce) CSS rules
    - _Requirements: 10.5_
  
  - [ ]* 10.4 Write accessibility tests
    - Test keyboard navigation works with Enter, Space, and arrow keys
    - Test ARIA labels are present on all interactive elements
    - Test focus management moves focus to active panel
    - Test reduced motion disables animations
    - _Requirements: 10.3, 10.4, 10.5_

- [ ] 11. Implement performance optimizations
  - [x] 11.1 Add GPU acceleration hints
    - Add will-change: transform, opacity to animated elements
    - Add transform: translateZ(0) to force GPU layers
    - Apply to ContentPanel, ActSidebar, TypewriterText, IconGrid SVGs
    - _Requirements: 10.1_
  
  - [x] 11.2 Add component memoization
    - Wrap ContentPanel with React.memo
    - Add custom comparison function to check isActive and act.id
    - Memoize expensive calculations (getActiveActPairIndex, getActiveActIndices)
    - Use useMemo for derived state values
    - _Requirements: 10.1, 10.6_
  
  - [x] 11.3 Add debounced scroll updates
    - Create useDebouncedScroll hook with 16ms delay (60fps)
    - Apply to scroll progress updates
    - Prevent excessive re-renders during scroll
    - _Requirements: 10.6_
  
  - [x] 11.4 Add Intersection Observer for visibility
    - Create useInView hook with IntersectionObserver
    - Use to detect when EventJourneySection is in viewport
    - Pause animations when section is not visible
    - _Requirements: 10.1, 10.6_
  
  - [ ]* 11.5 Write performance tests
    - Test scroll performance maintains 60fps during transitions
    - Test memoization prevents unnecessary re-renders
    - Test debounced scroll updates reduce render frequency
    - Test Intersection Observer pauses animations when not visible
    - _Requirements: 10.1, 10.6_

- [ ] 12. Implement section transition and exit
  - [x] 12.1 Add scroll continuation after final act pair
    - Configure ScrollTrigger end point to allow scroll continuation
    - Implement smooth exit animation when scrolling past ACT 9 & 10
    - Maintain sticky/fixed positioning until all acts displayed
    - Add fade-out or slide-out transition effect
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [ ]* 12.2 Write integration tests for section transition
    - Test scroll continues to next section after final act pair
    - Test exit animation plays smoothly
    - Test section maintains position until all acts shown
    - _Requirements: 8.1, 8.2, 8.3_

- [ ] 13. Add progress indicator component
  - [x] 13.1 Create EventJourneyProgress component
    - Create `src/components/experience/EventJourneyProgress.tsx`
    - Display horizontal progress bar at top of section
    - Update progress bar based on scrollProgress state (0-1)
    - Style with --lime background and rgba inactive background
    - Position fixed at top with z-index above content
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
  
  - [ ]* 13.2 Write unit tests for progress indicator
    - Test progress bar updates correctly based on scroll progress
    - Test progress bar displays at correct position
    - Test progress bar styling matches design
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 14. Integrate EventJourneySection into main page
  - [x] 14.1 Add EventJourneySection to page
    - Import EventJourneySection in `src/app/page.tsx`
    - Add section after existing sections (after hero or highlights)
    - Pass journey acts data from `src/data/journey.ts`
    - Verify section renders in correct position
    - _Requirements: 1.1, 1.2, 1.3_
  
  - [x] 14.2 Test integration with existing sections
    - Verify scroll behavior works with other sections
    - Test GSAP ScrollTrigger doesn't conflict with existing animations
    - Verify Lenis smooth scroll integration
    - Check z-index stacking with sticky header and bottom bar
    - _Requirements: 8.1, 8.2, 10.6_

- [ ] 15. Final checkpoint - End-to-end testing
  - Test complete scroll journey from ACT 1 to ACT 10
  - Verify all animations trigger correctly
  - Test responsive behavior on mobile, tablet, and desktop
  - Test keyboard navigation and accessibility features
  - Test performance (60fps scroll, no jank)
  - Verify media loading and error handling
  - Test reduced motion support
  - Ensure all tests pass, ask the user if questions arise

## Notes

- Tasks marked with `*` are optional testing tasks and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation and allow for user feedback
- The design document does not include a "Correctness Properties" section, so property-based tests are not included
- Testing focuses on unit tests, integration tests, and example-based tests
- All components use TypeScript for type safety
- All styling uses existing CSS custom properties from globals.css (--red, --lime, --ink, --paper, --radius, etc.)
- GSAP ScrollTrigger and Lenis are already installed in package.json
- lucide-react is used for all SVG icons
