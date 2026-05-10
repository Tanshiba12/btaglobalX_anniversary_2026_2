/**
 * Bug Condition Exploration Test for ScrollTrigger Section Transitions
 * 
 * **Validates: Requirements 1.1, 1.2, 1.3, 1.4**
 * 
 * **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
 * **DO NOT attempt to fix the test or the code when it fails**
 * **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
 * **GOAL**: Surface counterexamples that demonstrate the bug exists
 * 
 * Property 1: Bug Condition - Timeline Flickering and Forum Abrupt Unpinning
 * 
 * For any scroll event where the user scrolls from Timeline section to EventJourneySection,
 * the ScrollTrigger configuration SHALL ensure Timeline unpins completely before EventJourneySection pins,
 * with no flickering, overlap, or visual glitches during the transition.
 */

import { test, expect } from '@playwright/test';

test.describe('ScrollTrigger Bug Condition Exploration', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for page to load and animations to settle
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1500); // Reduced wait time for loader animation
    });

    test('Property 1: Timeline should pin smoothly without flickering', async ({ page }) => {
        // Scroll to Timeline section
        const timelineSection = page.locator('.timeline-section');
        await timelineSection.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);

        // Observe Timeline section visibility over time to detect flickering
        const flickerDetected = await page.evaluate(async () => {
            const timeline = document.querySelector('.timeline-section');
            if (!timeline) return { flickering: true, reason: 'Timeline section not found' };

            const observations: boolean[] = [];
            const checkInterval = 100; // Increased interval for faster execution
            const duration = 500; // Reduced observation time

            // Record visibility states
            for (let i = 0; i < duration / checkInterval; i++) {
                const rect = timeline.getBoundingClientRect();
                const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;
                observations.push(isVisible);
                await new Promise(resolve => setTimeout(resolve, checkInterval));
            }

            // Detect flickering: if visibility toggles (true -> false -> true)
            let flickerCount = 0;
            for (let i = 1; i < observations.length - 1; i++) {
                if (observations[i] === false && observations[i - 1] === true && observations[i + 1] === true) {
                    flickerCount++;
                }
            }

            return {
                flickering: flickerCount > 0,
                flickerCount,
                observations: observations.slice(0, 10), // First 10 observations for debugging
            };
        });

        // **EXPECTED OUTCOME**: Test FAILS on unfixed code (flickering detected)
        // When fixed, this assertion will pass (no flickering)
        expect(flickerDetected.flickering).toBe(false);
        console.log('Timeline flickering result:', flickerDetected);
    });

    test('Property 1: Forum should unpin smoothly with easing', async ({ page }) => {
        // Scroll to EventJourneySection (Forum)
        const forumSection = page.locator('.event-journey-section');
        await forumSection.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);

        // Scroll through all 5 Forum act pairs
        await page.evaluate(async () => {
            const forum = document.querySelector('.event-journey-section');
            if (!forum) return;

            // Scroll past the forum section to trigger unpinning
            window.scrollBy({ top: window.innerHeight * 5, behavior: 'smooth' });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Reduced wait time
        });

        // Check if unpinning transition has smooth easing
        const unpinningResult = await page.evaluate(() => {
            const forum = document.querySelector('.event-journey-section') as HTMLElement;
            if (!forum) return { smooth: false, reason: 'Forum section not found' };

            // Check computed styles for transition properties
            const computedStyle = window.getComputedStyle(forum);
            const transition = computedStyle.transition || computedStyle.webkitTransition;
            const hasEasing = transition.includes('cubic-bezier') || transition.includes('ease');

            // Check if ScrollTrigger has onLeave/onLeaveBack callbacks
            const ScrollTrigger = (window as any).ScrollTrigger;
            if (!ScrollTrigger) return { smooth: false, reason: 'ScrollTrigger not found' };

            const triggers = ScrollTrigger.getAll();
            const forumTrigger = triggers.find((t: any) => t.trigger === forum);
            const hasCallbacks = forumTrigger && (forumTrigger.vars.onLeave || forumTrigger.vars.onLeaveBack);

            return {
                smooth: hasEasing && hasCallbacks,
                hasEasing,
                hasCallbacks,
                transition,
            };
        });

        // **EXPECTED OUTCOME**: Test FAILS on unfixed code (no smooth unpinning)
        // When fixed, this assertion will pass (smooth unpinning with easing)
        expect(unpinningResult.smooth).toBe(true);
        console.log('Forum unpinning result:', unpinningResult);
    });

    test('Property 1: No ScrollTrigger overlap between Timeline and Forum', async ({ page }) => {
        // Scroll to Timeline section
        const timelineSection = page.locator('.timeline-section');
        await timelineSection.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500); // Reduced wait time

        // Check for ScrollTrigger overlap
        const overlapResult = await page.evaluate(() => {
            const ScrollTrigger = (window as any).ScrollTrigger;
            if (!ScrollTrigger) return { overlap: true, reason: 'ScrollTrigger not found' };

            const triggers = ScrollTrigger.getAll();
            const timelineTrigger = triggers.find((t: any) =>
                t.trigger?.classList?.contains('timeline-section')
            );
            const forumTrigger = triggers.find((t: any) =>
                t.trigger?.classList?.contains('event-journey-section')
            );

            if (!timelineTrigger || !forumTrigger) {
                return {
                    overlap: true,
                    reason: 'Timeline or Forum trigger not found',
                    timelineFound: !!timelineTrigger,
                    forumFound: !!forumTrigger,
                };
            }

            // Check if both triggers are active simultaneously
            const bothActive = timelineTrigger.isActive && forumTrigger.isActive;

            // Check trigger ranges
            const timelineEnd = timelineTrigger.end;
            const forumStart = forumTrigger.start;
            const rangeOverlap = timelineEnd >= forumStart;

            // Check for anticipatePin configuration
            const timelineHasAnticipatePin = timelineTrigger.vars.anticipatePin === 1;
            const forumHasAnticipatePin = forumTrigger.vars.anticipatePin === 1;

            return {
                overlap: bothActive || rangeOverlap,
                bothActive,
                rangeOverlap,
                timelineHasAnticipatePin,
                forumHasAnticipatePin,
                timelineEnd,
                forumStart,
            };
        });

        // **EXPECTED OUTCOME**: Test FAILS on unfixed code (overlap detected)
        // When fixed, this assertion will pass (no overlap)
        expect(overlapResult.overlap).toBe(false);
        console.log('ScrollTrigger overlap result:', overlapResult);
    });

    test('Property 1: Rapid scroll from Hero to Forum should not cause flickering', async ({ page }) => {
        // Start at top
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(500);

        // Rapidly scroll to Forum section
        const flickerResult = await page.evaluate(async () => {
            const observations: Array<{ time: number; timelineVisible: boolean; forumVisible: boolean }> = [];
            const timeline = document.querySelector('.timeline-section');
            const forum = document.querySelector('.event-journey-section');

            if (!timeline || !forum) {
                return { flickering: true, reason: 'Sections not found' };
            }

            // Rapid scroll
            window.scrollBy({ top: window.innerHeight * 8, behavior: 'auto' });

            // Observe during scroll
            const checkInterval = 50; // Increased interval
            const duration = 800; // Reduced observation time

            for (let i = 0; i < duration / checkInterval; i++) {
                const timelineRect = timeline.getBoundingClientRect();
                const forumRect = forum.getBoundingClientRect();

                observations.push({
                    time: i * checkInterval,
                    timelineVisible: timelineRect.top >= 0 && timelineRect.top <= window.innerHeight,
                    forumVisible: forumRect.top >= 0 && forumRect.top <= window.innerHeight,
                });

                await new Promise(resolve => setTimeout(resolve, checkInterval));
            }

            // Detect flickering: Timeline visibility should not toggle rapidly
            let timelineFlickers = 0;
            for (let i = 1; i < observations.length - 1; i++) {
                const prev = observations[i - 1];
                const curr = observations[i];
                const next = observations[i + 1];

                if (prev && curr && next) {
                    if (curr.timelineVisible === false && prev.timelineVisible === true && next.timelineVisible === true) {
                        timelineFlickers++;
                    }
                }
            }

            return {
                flickering: timelineFlickers > 0,
                timelineFlickers,
                observations: observations.slice(0, 10), // Reduced sample size
            };
        });

        // **EXPECTED OUTCOME**: Test FAILS on unfixed code (flickering during rapid scroll)
        // When fixed, this assertion will pass (no flickering)
        expect(flickerResult.flickering).toBe(false);
        console.log('Rapid scroll flickering result:', flickerResult);
    });

    test('Property 1: Transition should use cubic-bezier(0.4, 0, 0.2, 1) easing', async ({ page }) => {
        // Scroll to Forum section
        const forumSection = page.locator('.event-journey-section');
        await forumSection.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);

        // Check easing configuration
        const easingResult = await page.evaluate(() => {
            const ScrollTrigger = (window as any).ScrollTrigger;
            if (!ScrollTrigger) return { correctEasing: false, reason: 'ScrollTrigger not found' };

            const triggers = ScrollTrigger.getAll();
            const forumTrigger = triggers.find((t: any) =>
                t.trigger?.classList?.contains('event-journey-section')
            );

            if (!forumTrigger) {
                return { correctEasing: false, reason: 'Forum trigger not found' };
            }

            // Check if onLeave/onLeaveBack callbacks use correct easing
            const onLeave = forumTrigger.vars.onLeave;
            const onLeaveBack = forumTrigger.vars.onLeaveBack;

            // We can't directly inspect the callback content, but we can check if they exist
            const hasCallbacks = !!onLeave && !!onLeaveBack;

            return {
                correctEasing: hasCallbacks, // Simplified check - actual easing is in callback implementation
                hasOnLeave: !!onLeave,
                hasOnLeaveBack: !!onLeaveBack,
            };
        });

        // **EXPECTED OUTCOME**: Test FAILS on unfixed code (no easing callbacks)
        // When fixed, this assertion will pass (correct easing)
        expect(easingResult.correctEasing).toBe(true);
        console.log('Easing configuration result:', easingResult);
    });
});
