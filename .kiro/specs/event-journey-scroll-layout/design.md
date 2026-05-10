# Design Document: Event Journey Scroll Layout

## Overview

The Event Journey Scroll Layout is a scroll-triggered interactive section that presents 10 event acts in an immersive dual-sidebar layout. The design leverages GSAP ScrollTrigger for scroll-based animations, React for component architecture, and CSS custom properties from the existing global.css palette for visual consistency.

### Key Design Principles

1. **Scroll-Driven Narrative**: Acts are revealed in pairs (odd/even) as users scroll, creating a cohesive journey
2. **Performance-First**: GPU-accelerated animations, lazy loading, and optimized rendering
3. **Visual Consistency**: Leverages existing --red, --lime, --ink, --paper CSS variables
4. **Responsive Adaptation**: Graceful degradation from desktop dual-panel to mobile single-panel
5. **Accessibility**: Keyboard navigation, ARIA labels, and reduced-motion support

## Architecture

### Component Hierarchy

```
EventJourneySection (Container)
├── EventJourneyProgress (Progress Bar)
├── EventJourneyViewport (Scroll Container)
│   └── EventJourneyTrack (Horizontal Track)
│       ├── ActSidebar (Left - Odd Acts)
│       │   └── ActButton[] (ACT 1, 3, 5, 7, 9)
│       ├── ContentPanelGrid (Center)
│       │   ├── ContentPanel (Left Panel)
│       │   │   ├── ActHeading
│       │   │   ├── TypewriterText
│       │   │   ├── IconGrid
│       │   │   └── MediaAsset
│       │   └── ContentPanel (Right Panel)
│       │       ├── ActHeading
│       │       ├── TypewriterText
│       │       ├── IconGrid
│       │       └── MediaAsset
│       └── ActSidebar (Right - Even Acts)
│           └── ActButton[] (ACT 2, 4, 6, 8, 10)
```

### Technology Stack Integration

- **Framework**: Next.js 16.2.4 with React 19
- **Animation**: GSAP 3.13.0 with ScrollTrigger plugin
- **Smooth Scroll**: Lenis 1.3.15 for smooth scrolling behavior
- **Icons**: lucide-react 0.475.0 for SVG icons
- **Styling**: CSS Modules or global CSS with existing palette
- **TypeScript**: Full type safety with strict mode

## Components and Interfaces

### 1. EventJourneySection (Main Container)

**Purpose**: Root container managing scroll state, act selection, and GSAP ScrollTrigger lifecycle

**Props**:
```typescript
interface EventJourneySectionProps {
  acts: JourneyAct[];
  className?: string;
  reducedMotion?: boolean;
}
```

**State Management**:
```typescript
interface EventJourneyState {
  activeActPairIndex: number; // 0-4 (5 pairs total)
  scrollProgress: number; // 0-1
  isScrolling: boolean;
  loadedMediaIndices: Set<number>;
}
```

**Responsibilities**:
- Initialize GSAP ScrollTrigger on mount
- Track active act pair based on scroll position
- Manage media lazy loading
- Handle responsive breakpoint changes
- Clean up GSAP instances on unmount

### 2. ActSidebar

**Purpose**: Vertical navigation displaying act numbers with active state highlighting

**Props**:
```typescript
interface ActSidebarProps {
  acts: JourneyAct[];
  activeIndices: number[];
  side: 'left' | 'right';
  onActClick?: (index: number) => void;
}
```

**Styling**:
- Background: `var(--red)`
- Active state: `var(--lime)` background
- Inactive state: `rgba(255, 255, 255, 0.4)` opacity
- Border radius: `var(--radius)`
- Sticky positioning on desktop

### 3. ContentPanel

**Purpose**: Display act details with typewriter animation, icons, and media

**Props**:
```typescript
interface ContentPanelProps {
  act: JourneyAct;
  isActive: boolean;
  onMediaLoad?: () => void;
}
```

**Sub-components**:
- **ActHeading**: Display act number and title
- **TypewriterText**: Animated description reveal
- **IconGrid**: 3-4 animated SVG icons
- **MediaAsset**: Video/image/animation display

### 4. TypewriterText

**Purpose**: Progressive text reveal animation

**Props**:
```typescript
interface TypewriterTextProps {
  text: string;
  isActive: boolean;
  speed?: number; // 30-100ms per character
  onComplete?: () => void;
}
```

**Implementation Strategy**:
```typescript
// Use CSS animation for performance
// Fallback to JS for complex timing
const TypewriterText: React.FC<TypewriterTextProps> = ({ text, isActive, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    if (!isActive) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [isActive, text, speed]);
  
  return <p className="typewriter-text">{displayedText}</p>;
};
```

### 5. IconGrid

**Purpose**: Display and animate 3-4 SVG icons with staggered entrance

**Props**:
```typescript
interface IconGridProps {
  icons: Array<{
    id: string;
    label: string;
    icon: LucideIcon;
  }>;
  isActive: boolean;
}
```

**Animation**:
- Stagger delay: 100-200ms between icons
- Entrance: fade + scale (0.8 → 1)
- Colors: Rotate through --lime, --red, --ink, --paper

### 6. MediaAsset

**Purpose**: Display video, image, or animation with lazy loading

**Props**:
```typescript
interface MediaAssetProps {
  src: string;
  type: 'video' | 'image' | 'animation';
  alt: string;
  isActive: boolean;
  onLoad?: () => void;
}
```

**Features**:
- Lazy loading when act pair becomes active
- Video: autoplay when active, pause when inactive
- Border radius: `var(--radius)`
- Object-fit: cover for images, contain for videos

## Data Models

### JourneyAct Type

```typescript
interface JourneyAct {
  id: string;
  number: number; // 1-10
  title: string;
  subtitle: string;
  description: string;
  highlights: Array<{
    id: string;
    label: string;
    icon: LucideIcon;
  }>;
  subSections: Array<{
    id: string;
    label: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  image: string; // Path to media asset
  mediaType?: 'video' | 'image' | 'animation';
}
```

### Act Pair Mapping

```typescript
const actPairs: Array<[number, number]> = [
  [0, 1], // ACT 1 & ACT 2
  [2, 3], // ACT 3 & ACT 4
  [4, 5], // ACT 5 & ACT 6
  [6, 7], // ACT 7 & ACT 8
  [8, 9], // ACT 9 & ACT 10
];
```

## Scroll Interaction Logic

### GSAP ScrollTrigger Configuration

```typescript
const setupScrollTrigger = (
  viewport: HTMLElement,
  track: HTMLElement,
  onProgress: (progress: number) => void
) => {
  const getTravel = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
  
  ScrollTrigger.create({
    trigger: viewport.closest('.event-journey-section'),
    start: 'top top',
    end: () => `+=${window.innerHeight * 4}`, // 4 scroll sections for 5 pairs
    pin: true,
    scrub: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.set(track, { x: -getTravel() * progress });
      onProgress(progress);
    }
  });
};
```

### Act Pair Selection Logic

```typescript
const getActiveActPairIndex = (scrollProgress: number): number => {
  // Map scroll progress (0-1) to act pair index (0-4)
  return Math.min(4, Math.round(scrollProgress * 4));
};

const getActiveActIndices = (pairIndex: number): [number, number] => {
  return [pairIndex * 2, pairIndex * 2 + 1];
};
```

### Scroll Trigger Thresholds

- **Trigger 1** (0.0 - 0.2): ACT 1 & ACT 2
- **Trigger 2** (0.2 - 0.4): ACT 3 & ACT 4
- **Trigger 3** (0.4 - 0.6): ACT 5 & ACT 6
- **Trigger 4** (0.6 - 0.8): ACT 7 & ACT 8
- **Trigger 5** (0.8 - 1.0): ACT 9 & ACT 10

## Animation System

### Typewriter Effect Implementation

**CSS-Based Approach** (Preferred for performance):

```css
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typewriter-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 2s steps(40) forwards;
}
```

**JavaScript Approach** (For complex timing):

```typescript
const useTypewriter = (text: string, isActive: boolean, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    if (!isActive) {
      setDisplayedText('');
      setIsComplete(false);
      return;
    }
    
    let index = 0;
    const words = text.split(' ');
    const interval = setInterval(() => {
      if (index < words.length) {
        setDisplayedText(words.slice(0, index + 1).join(' '));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [isActive, text, speed]);
  
  return { displayedText, isComplete };
};
```

### SVG Icon Animations

**GSAP Stagger Animation**:

```typescript
useEffect(() => {
  if (!isActive || !iconRefs.current.length) return;
  
  gsap.fromTo(
    iconRefs.current,
    {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15, // 150ms between icons
      ease: 'power3.out'
    }
  );
}, [isActive]);
```

### Content Panel Transitions

```typescript
const panelVariants = {
  inactive: {
    opacity: 0.3,
    scale: 0.95,
    filter: 'blur(4px)'
  },
  active: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};
```

## Styling Approach

### CSS Architecture

**Option 1: CSS Modules** (Recommended)
- Scoped styles per component
- Type-safe with TypeScript
- Better code splitting

**Option 2: Global CSS**
- Consistent with existing globals.css
- Simpler for shared utilities
- Easier theme integration

### Color Palette Usage

```css
.event-journey-section {
  --journey-bg: var(--paper);
  --journey-text: var(--ink);
  --journey-sidebar-bg: var(--red);
  --journey-active: var(--lime);
  --journey-inactive: rgba(255, 255, 255, 0.4);
  --journey-border: var(--radius);
}
```

### Layout Grid

```css
.event-journey-track {
  display: grid;
  grid-template-columns: 
    minmax(8rem, 0.15fr)    /* Left sidebar */
    minmax(0, 1fr)          /* Left panel */
    minmax(0, 1fr)          /* Right panel */
    minmax(8rem, 0.15fr);   /* Right sidebar */
  gap: clamp(0.75rem, 2vw, 1.5rem);
  height: 100vh;
  padding: var(--site-safe-inset);
}
```

### Typography

```css
.act-heading {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 0.88;
  text-transform: uppercase;
  color: var(--ink);
}

.act-description {
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  font-weight: 500;
  line-height: 1.55;
  color: var(--ink-soft);
}
```

## Responsive Design

### Breakpoints

```typescript
const breakpoints = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)'
};
```

### Mobile Layout (< 768px)

- **Stack vertically**: One act at a time
- **Hide sidebars**: Replace with compact navigation dots
- **Horizontal scroll**: Swipe between acts
- **Simplified animations**: Reduce motion complexity

```css
@media (max-width: 767px) {
  .event-journey-track {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  
  .act-sidebar {
    display: none;
  }
  
  .content-panel-grid {
    flex-direction: column;
    gap: 1rem;
  }
}
```

### Tablet Layout (768px - 1023px)

- **Stack panels vertically**: One column layout
- **Compact sidebars**: Reduced width
- **Adjusted typography**: Smaller font sizes

```css
@media (min-width: 768px) and (max-width: 1023px) {
  .event-journey-track {
    grid-template-columns: 
      minmax(6rem, 0.12fr)
      minmax(0, 1fr)
      minmax(6rem, 0.12fr);
  }
  
  .content-panel-grid {
    flex-direction: column;
  }
}
```

### Desktop Layout (>= 1024px)

- **Full dual-panel**: Side-by-side content panels
- **Visible sidebars**: Full act navigation
- **Enhanced animations**: Full typewriter and icon effects

## Performance Optimizations

### 1. Lazy Loading Strategy

```typescript
const useLazyMedia = (actIndex: number, activeIndices: number[]) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  
  useEffect(() => {
    // Load media for active acts and adjacent acts
    const isActive = activeIndices.includes(actIndex);
    const isAdjacent = activeIndices.some(i => Math.abs(i - actIndex) === 1);
    
    if (isActive || isAdjacent) {
      setShouldLoad(true);
    }
  }, [actIndex, activeIndices]);
  
  return shouldLoad;
};
```

### 2. GPU Acceleration

```css
.content-panel,
.act-sidebar,
.typewriter-text,
.icon-grid svg {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU layer */
}
```

### 3. Debounced Scroll Updates

```typescript
const useDebouncedScroll = (callback: (progress: number) => void, delay: number = 16) => {
  const timeoutRef = useRef<number>();
  
  return useCallback((progress: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      callback(progress);
    }, delay);
  }, [callback, delay]);
};
```

### 4. Memoization

```typescript
const MemoizedContentPanel = React.memo(ContentPanel, (prev, next) => {
  return prev.isActive === next.isActive && prev.act.id === next.act.id;
});
```

### 5. Intersection Observer for Visibility

```typescript
const useInView = (ref: RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [ref]);
  
  return isInView;
};
```

## Error Handling

### Media Loading Errors

```typescript
const MediaAsset: React.FC<MediaAssetProps> = ({ src, type, alt, onError }) => {
  const [error, setError] = useState(false);
  
  const handleError = () => {
    setError(true);
    onError?.();
  };
  
  if (error) {
    return (
      <div className="media-fallback">
        <span>Media unavailable</span>
      </div>
    );
  }
  
  return type === 'video' ? (
    <video src={src} onError={handleError} />
  ) : (
    <img src={src} alt={alt} onError={handleError} />
  );
};
```

### GSAP Initialization Errors

```typescript
useEffect(() => {
  let cleanup: (() => void) | null = null;
  
  const initGSAP = async () => {
    try {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);
      
      // Setup animations
      cleanup = setupScrollTrigger();
    } catch (error) {
      console.error('Failed to initialize GSAP:', error);
      // Fallback to CSS-only animations
    }
  };
  
  initGSAP();
  
  return () => cleanup?.();
}, []);
```

## Testing Strategy

### Unit Tests

**Component Rendering**:
- Test each component renders with correct props
- Verify conditional rendering based on `isActive` state
- Check accessibility attributes (ARIA labels, roles)

**State Management**:
- Test act pair selection logic
- Verify scroll progress calculations
- Test media lazy loading triggers

**Animation Hooks**:
- Test typewriter text progression
- Verify icon stagger timing
- Test reduced motion fallbacks

### Integration Tests

**Scroll Behavior**:
- Test GSAP ScrollTrigger integration
- Verify act pair transitions on scroll
- Test horizontal track movement

**Media Loading**:
- Test lazy loading triggers
- Verify video autoplay/pause
- Test error handling for missing media

**Responsive Behavior**:
- Test layout changes at breakpoints
- Verify mobile swipe navigation
- Test sidebar visibility toggles

### Property-Based Tests

This feature is **NOT suitable for property-based testing** because:
1. **UI Rendering**: Visual layout and animations are not computable properties
2. **External Dependencies**: GSAP and Lenis behavior is deterministic but not our code
3. **User Interaction**: Scroll behavior varies by device and cannot be universally quantified

**Alternative Testing Approach**:
- **Snapshot tests**: Capture component output at different states
- **Visual regression tests**: Compare screenshots across builds
- **Example-based tests**: Test specific scroll positions and state transitions

### Example-Based Test Cases

```typescript
describe('EventJourneySection', () => {
  it('should display ACT 1 and ACT 2 on initial load', () => {
    const { getByText } = render(<EventJourneySection acts={mockActs} />);
    expect(getByText('ACT 1')).toBeInTheDocument();
    expect(getByText('ACT 2')).toBeInTheDocument();
  });
  
  it('should update active acts when scroll progress changes', () => {
    const { rerender } = render(<EventJourneySection acts={mockActs} />);
    // Simulate scroll to 50% progress
    act(() => {
      // Trigger scroll update
    });
    expect(getByText('ACT 5')).toHaveClass('is-active');
  });
  
  it('should lazy load media for adjacent acts', () => {
    const { container } = render(<EventJourneySection acts={mockActs} />);
    const mediaElements = container.querySelectorAll('video, img');
    // Verify only active + adjacent acts have loaded media
    expect(mediaElements.length).toBeLessThanOrEqual(6); // 2 active + 2 adjacent
  });
});
```

## Accessibility

### Keyboard Navigation

```typescript
const ActButton: React.FC<ActButtonProps> = ({ act, isActive, onClick }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(act.number);
    }
  };
  
  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-label={`Navigate to ${act.title}`}
      tabIndex={isActive ? 0 : -1}
      onKeyDown={handleKeyDown}
      onClick={() => onClick?.(act.number)}
    >
      ACT {act.number}
    </button>
  );
};
```

### ARIA Labels

```typescript
<section
  className="event-journey-section"
  role="region"
  aria-label="Event Journey Timeline"
>
  <div
    className="event-journey-track"
    role="tablist"
    aria-orientation="horizontal"
  >
    {/* Content */}
  </div>
</section>
```

### Reduced Motion Support

```typescript
const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return reducedMotion;
};
```

```css
@media (prefers-reduced-motion: reduce) {
  .typewriter-text {
    animation: none;
  }
  
  .icon-grid svg {
    transition: none;
  }
  
  .content-panel {
    transition: opacity 0.2s ease;
  }
}
```

### Focus Management

```typescript
useEffect(() => {
  if (isActive && panelRef.current) {
    // Move focus to active panel for screen readers
    const firstFocusable = panelRef.current.querySelector<HTMLElement>(
      'button, a, [tabindex="0"]'
    );
    firstFocusable?.focus();
  }
}, [isActive]);
```

## Implementation Checklist

### Phase 1: Core Structure
- [ ] Create EventJourneySection component
- [ ] Implement ActSidebar with act buttons
- [ ] Build ContentPanel layout
- [ ] Set up data models and types

### Phase 2: Scroll Integration
- [ ] Integrate GSAP ScrollTrigger
- [ ] Implement horizontal scroll tracking
- [ ] Add progress bar component
- [ ] Handle act pair selection logic

### Phase 3: Animations
- [ ] Implement typewriter text effect
- [ ] Add icon stagger animations
- [ ] Create panel transition effects
- [ ] Add reduced motion fallbacks

### Phase 4: Media Handling
- [ ] Implement lazy loading system
- [ ] Add video autoplay/pause logic
- [ ] Handle media loading errors
- [ ] Optimize image loading

### Phase 5: Responsive Design
- [ ] Implement mobile layout
- [ ] Add tablet breakpoint styles
- [ ] Test touch/swipe interactions
- [ ] Verify sidebar collapse behavior

### Phase 6: Accessibility
- [ ] Add ARIA labels and roles
- [ ] Implement keyboard navigation
- [ ] Test with screen readers
- [ ] Add focus management

### Phase 7: Performance
- [ ] Add GPU acceleration hints
- [ ] Implement memoization
- [ ] Optimize re-renders
- [ ] Test 60fps scroll performance

### Phase 8: Testing
- [ ] Write unit tests for components
- [ ] Add integration tests for scroll
- [ ] Create snapshot tests
- [ ] Perform visual regression testing

## Future Enhancements

1. **Gesture Support**: Add swipe gestures for mobile navigation
2. **Deep Linking**: Support URL hash navigation to specific acts
3. **Analytics**: Track which acts users engage with most
4. **Preloading**: Intelligent preloading of upcoming media
5. **Transitions**: Custom transition effects between act pairs
6. **Audio**: Optional ambient audio for each act
7. **Parallax**: Subtle parallax effects on media assets
8. **Bookmarking**: Allow users to bookmark favorite acts

## References

- [GSAP ScrollTrigger Documentation](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)
- [Web Animations Performance](https://web.dev/animations-guide/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
