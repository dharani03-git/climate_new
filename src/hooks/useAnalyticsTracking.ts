import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackTraffic, trackEngagement, trackBehavior, upsertUserLibrary } from '@/lib/analytics';

export const useAnalyticsTracking = () => {
    const location = useLocation();

    const startTimeRef = useRef<number>(Date.now());
    const clicksRef = useRef<number>(0);
    const maxScrollRef = useRef<number>(0);
    const lastTrackTimeRef = useRef<number>(Date.now());

    useEffect(() => {
        // Reset metrics on route change
        startTimeRef.current = Date.now();
        clicksRef.current = 0;
        maxScrollRef.current = 0;
        lastTrackTimeRef.current = Date.now();

        // Track Page View
        trackTraffic(location.pathname, document.title);

        // Initial setup for the User Behavior Library (runs every page load to essentially keep it "alive")
        upsertUserLibrary({
            pagePath: location.pathname,
            activeTab: document.title,
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language,
        });

    }, [location.pathname]);

    useEffect(() => {
        // Track Clicks
        const handleClick = (e: MouseEvent) => {
            clicksRef.current += 1;

            // Try to find if it's a CTA or button
            const target = e.target as HTMLElement;
            const button = target.closest('button') || target.closest('a');

            if (button) {
                const buttonText = button.textContent?.trim() || button.getAttribute('aria-label') || 'Icon Button';
                trackBehavior('Click', 'Button Click', buttonText, button.tagName);
            }
        };

        // Track Scroll
        const handleScroll = () => {
            const docHeight = document.body.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                const scrolled = (window.scrollY / docHeight) * 100;
                if (scrolled > maxScrollRef.current) {
                    maxScrollRef.current = Math.round(scrolled);
                }
            }
        };

        // Track Session duration periodically
        const interval = setInterval(() => {
            const timeSpentSecs = Math.round((Date.now() - startTimeRef.current) / 1000);

            // Only update if time spent has significantly changed to avoid spamming
            const timeSinceLastTrack = Date.now() - lastTrackTimeRef.current;
            if (timeSinceLastTrack > 15000) { // Every 15 seconds
                lastTrackTimeRef.current = Date.now();

                trackEngagement({
                    duration: timeSpentSecs,
                    scrollDepth: maxScrollRef.current,
                    clickCount: clicksRef.current,
                    // Basic engagement scoring: 1 point per 10s + 2 points per click + 1 point per 10% scroll
                    engagementScore: Math.round((timeSpentSecs / 10) + (clicksRef.current * 2) + (maxScrollRef.current / 10))
                });

                upsertUserLibrary({
                    totalActiveTime: timeSpentSecs,
                    totalClickCount: clicksRef.current,
                    maxScrollDepth: maxScrollRef.current
                });
            }
        }, 15000);

        window.addEventListener('click', handleClick);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);

            // Final engage track before unmount
            const timeSpentSecs = Math.round((Date.now() - startTimeRef.current) / 1000);
            trackEngagement({
                duration: timeSpentSecs,
                scrollDepth: maxScrollRef.current,
                clickCount: clicksRef.current,
                engagementScore: Math.round((timeSpentSecs / 10) + (clicksRef.current * 2) + (maxScrollRef.current / 10))
            });
            upsertUserLibrary({
                totalActiveTime: timeSpentSecs,
                totalClickCount: clicksRef.current,
                maxScrollDepth: maxScrollRef.current
            });
        };
    }, []);
};
