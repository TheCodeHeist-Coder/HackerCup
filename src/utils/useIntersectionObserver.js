import { useEffect, useRef, useState } from 'react';

// Shared IntersectionObserver instance
let sharedObserver = null;
const observerCallbacks = new WeakMap();

function getSharedObserver() {
    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const callback = observerCallbacks.get(entry.target);
                    if (callback) {
                        callback(entry);
                    }
                });
            },
            {
                threshold: 0.2, // Reduced from 0.35 for better performance
                rootMargin: '50px' // Start loading slightly before element is visible
            }
        );
    }
    return sharedObserver;
}

/**
 * Optimized hook for IntersectionObserver
 * - Uses shared observer instance
 * - Automatically disconnects after first trigger (if once=true)
 * - Reduces callback frequency
 */
export function useIntersectionObserver(options = {}) {
    const { once = true } = options;
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasTriggeredRef = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = getSharedObserver();

        const callback = (entry) => {
            if (entry.isIntersecting && (!once || !hasTriggeredRef.current)) {
                setIsVisible(true);
                hasTriggeredRef.current = true;

                // Disconnect after first trigger if once=true
                if (once) {
                    observer.unobserve(element);
                    observerCallbacks.delete(element);
                }
            }
        };

        observerCallbacks.set(element, callback);
        observer.observe(element);

        return () => {
            observer.unobserve(element);
            observerCallbacks.delete(element);
        };
    }, [once]);

    return [elementRef, isVisible];
}
