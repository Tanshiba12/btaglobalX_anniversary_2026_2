# Requirements Document

## Introduction

The Event Journey Scroll Layout is a scroll-triggered interface that presents 10 acts of an event in an immersive, interactive format. The layout features dual sidebars displaying act numbers, paired center content panels showing act details with typewriter-style animations, and synchronized media content. As users scroll, acts are selected in pairs (odd/even), creating a cohesive narrative journey through the event experience.

## Glossary

- **Event_Journey_Section**: The full-page scroll-triggered section containing the entire act navigation and display system
- **Act_Sidebar**: A vertical navigation panel displaying act numbers (odd acts on left, even acts on right)
- **Content_Panel**: A center display area showing act name, description, icons, and media for a single act
- **Act_Pair**: Two acts displayed simultaneously (one odd-numbered, one even-numbered)
- **Typewriter_Animation**: A text reveal animation that displays content character-by-character or word-by-word
- **Scroll_Trigger**: A scroll position threshold that activates a specific act pair
- **Media_Asset**: A video, image, or animation associated with an act
- **SVG_Icon**: An animated scalable vector graphic representing act features
- **Global_Palette**: The CSS custom properties defined in globals.css (--ink, --red, --lime, --paper, --cream, --muted, --radius, --radius-small)

## Requirements

### Requirement 1: Layout Structure

**User Story:** As a user, I want to see a structured layout with sidebars and content panels, so that I can easily navigate through the event acts.

#### Acceptance Criteria

1. THE Event_Journey_Section SHALL display a left Act_Sidebar containing odd-numbered acts (ACT 1, ACT 3, ACT 5, ACT 7, ACT 9)
2. THE Event_Journey_Section SHALL display a right Act_Sidebar containing even-numbered acts (ACT 2, ACT 4, ACT 6, ACT 8, ACT 10)
3. THE Event_Journey_Section SHALL display two Content_Panels positioned between the left and right Act_Sidebars
4. THE Event_Journey_Section SHALL use the --red CSS variable from Global_Palette for Act_Sidebar backgrounds
5. THE Event_Journey_Section SHALL apply border styling using --radius from Global_Palette to all bordered elements

### Requirement 2: Content Panel Display

**User Story:** As a user, I want each content panel to show act details with visual elements, so that I can understand what each act offers.

#### Acceptance Criteria

1. WHEN an Act_Pair is selected, THE Content_Panel SHALL display the act name as a heading
2. WHEN an Act_Pair is selected, THE Content_Panel SHALL display act description and information using Typewriter_Animation
3. WHEN an Act_Pair is selected, THE Content_Panel SHALL display 3 to 4 animated SVG_Icons
4. WHEN an Act_Pair is selected, THE Content_Panel SHALL display one Media_Asset (video, image, or animation) below the act information
5. THE Content_Panel SHALL use typography styles consistent with Global_Palette (--font-display for headings, --font-body for descriptions)

### Requirement 3: Scroll-Based Act Selection

**User Story:** As a user, I want acts to change as I scroll, so that I can progress through the event journey naturally.

#### Acceptance Criteria

1. WHEN the Event_Journey_Section first loads, THE Event_Journey_Section SHALL select ACT 1 and ACT 2 as the initial Act_Pair
2. WHEN the user scrolls down past the first Scroll_Trigger, THE Event_Journey_Section SHALL select ACT 3 and ACT 4 as the active Act_Pair
3. WHEN the user scrolls down past the second Scroll_Trigger, THE Event_Journey_Section SHALL select ACT 5 and ACT 6 as the active Act_Pair
4. WHEN the user scrolls down past the third Scroll_Trigger, THE Event_Journey_Section SHALL select ACT 7 and ACT 8 as the active Act_Pair
5. WHEN the user scrolls down past the fourth Scroll_Trigger, THE Event_Journey_Section SHALL select ACT 9 and ACT 10 as the active Act_Pair
6. WHEN an Act_Pair becomes selected, THE Event_Journey_Section SHALL update both Content_Panels with the corresponding act data
7. WHEN an Act_Pair becomes selected, THE Event_Journey_Section SHALL update both Content_Panels with the corresponding Media_Assets

### Requirement 4: Sidebar Visual State

**User Story:** As a user, I want to see which acts are currently selected in the sidebars, so that I know my position in the journey.

#### Acceptance Criteria

1. WHEN an act is part of the active Act_Pair, THE Act_Sidebar SHALL apply a visual highlight to that act number
2. WHEN an act is not part of the active Act_Pair, THE Act_Sidebar SHALL display that act number in an inactive visual state
3. THE Act_Sidebar SHALL use --lime CSS variable from Global_Palette for active act highlighting
4. THE Act_Sidebar SHALL use rgba opacity values for inactive act states to maintain visual hierarchy

### Requirement 5: Typewriter Animation

**User Story:** As a user, I want to see act descriptions appear with a typewriter effect, so that the content feels dynamic and engaging.

#### Acceptance Criteria

1. WHEN an Act_Pair becomes selected, THE Typewriter_Animation SHALL reveal description text progressively
2. THE Typewriter_Animation SHALL display text point-by-point or line-by-line
3. THE Typewriter_Animation SHALL complete before the next Scroll_Trigger can activate a new Act_Pair
4. THE Typewriter_Animation SHALL use timing values that ensure readability (minimum 30ms per character, maximum 100ms per character)

### Requirement 6: SVG Icon Animation

**User Story:** As a user, I want to see animated icons for each act, so that I can quickly identify act features visually.

#### Acceptance Criteria

1. WHEN an Act_Pair becomes selected, THE Content_Panel SHALL display 3 to 4 SVG_Icons
2. WHEN SVG_Icons are displayed, THE Content_Panel SHALL apply entrance animations to each SVG_Icon
3. THE SVG_Icon animations SHALL use staggered timing (each icon animates sequentially with 100ms to 200ms delay between icons)
4. THE SVG_Icons SHALL use colors from Global_Palette (--lime, --red, --ink, --paper) for visual consistency

### Requirement 7: Media Asset Display

**User Story:** As a user, I want to see relevant videos, images, or animations for each act, so that I can visualize the event experience.

#### Acceptance Criteria

1. WHEN an Act_Pair becomes selected, THE Content_Panel SHALL load the corresponding Media_Asset for each act
2. WHEN a Media_Asset is a video, THE Content_Panel SHALL display video controls for play, pause, and volume
3. WHEN a Media_Asset is an image, THE Content_Panel SHALL display the image with object-fit contain or cover to maintain aspect ratio
4. WHEN a Media_Asset is an animation, THE Content_Panel SHALL play the animation automatically when the Act_Pair becomes selected
5. THE Content_Panel SHALL apply --radius border-radius from Global_Palette to Media_Asset containers

### Requirement 8: Section Transition

**User Story:** As a user, I want to see the next section after all acts are shown, so that I can continue exploring the website.

#### Acceptance Criteria

1. WHEN the user scrolls past the final Scroll_Trigger for ACT 9 and ACT 10, THE Event_Journey_Section SHALL allow scrolling to continue to the next section
2. THE Event_Journey_Section SHALL maintain a fixed or sticky positioning until all Act_Pairs have been displayed
3. WHEN transitioning to the next section, THE Event_Journey_Section SHALL apply a smooth exit animation or transition

### Requirement 9: Responsive Layout

**User Story:** As a user on different devices, I want the layout to adapt to my screen size, so that I can experience the event journey on any device.

#### Acceptance Criteria

1. WHEN the viewport width is less than 1024px, THE Event_Journey_Section SHALL stack Content_Panels vertically
2. WHEN the viewport width is less than 768px, THE Event_Journey_Section SHALL hide Act_Sidebars or collapse them into a compact navigation
3. WHEN the viewport width is less than 768px, THE Event_Journey_Section SHALL display one act at a time instead of Act_Pairs
4. THE Event_Journey_Section SHALL use clamp() functions for font sizes to ensure readability across viewport sizes
5. THE Event_Journey_Section SHALL respect --site-safe-inset from Global_Palette for safe area padding on all devices

### Requirement 10: Performance and Accessibility

**User Story:** As a user, I want the scroll experience to be smooth and accessible, so that I can enjoy the journey without performance issues or accessibility barriers.

#### Acceptance Criteria

1. THE Event_Journey_Section SHALL use CSS transforms and opacity for animations to ensure GPU acceleration
2. THE Event_Journey_Section SHALL lazy-load Media_Assets that are not part of the currently active Act_Pair
3. THE Event_Journey_Section SHALL provide keyboard navigation support for Act_Sidebar buttons
4. THE Event_Journey_Section SHALL include ARIA labels for all interactive elements (act buttons, media controls)
5. THE Event_Journey_Section SHALL provide reduced-motion alternatives WHEN the user has prefers-reduced-motion enabled
6. THE Event_Journey_Section SHALL maintain a scroll performance of 60fps during Act_Pair transitions
