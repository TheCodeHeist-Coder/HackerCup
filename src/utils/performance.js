/**
 * Debounce function - delays execution until after wait time has elapsed
 * Perfect for resize handlers and input events
 */
export function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function - limits execution to once per specified time period
 * Perfect for scroll handlers and frequently called functions
 */
export function throttle(func, limit = 100) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

/**
 * RequestAnimationFrame-based throttle
 * More performant for visual updates
 */
export function rafThrottle(func) {
    let rafId = null;
    return function executedFunction(...args) {
        if (rafId === null) {
            rafId = requestAnimationFrame(() => {
                func(...args);
                rafId = null;
            });
        }
    };
}

/**
 * Detect if device is low-end based on various signals
 */
export function isLowEndDevice() {
    // Check for navigator.deviceMemory (Chrome/Edge)
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
        return true;
    }

    // Check for hardware concurrency (CPU cores)
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        return true;
    }

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return true;
    }

    return false;
}

/**
 * Get optimal spark count based on device capabilities
 */
export function getOptimalSparkCount() {
    if (isLowEndDevice()) {
        return 5;
    }

    if (window.innerWidth < 768) {
        return 8;
    }

    if (window.innerWidth < 1024) {
        return 15;
    }

    return 20;
}

/**
 * Generate random spark/ember positions
 * Call this outside of render to avoid purity warnings
 */
export function generateSparkPositions(count, config = {}) {
    const {
        leftMax = 100,
        topMax = 200,
        bottomMax = 40,
        animationDelayMax = 2,
        useBottom = false
    } = config;

    return Array.from({ length: count }, (_, i) => ({
        key: i,
        left: `${Math.random() * leftMax}%`,
        ...(useBottom
            ? { bottom: `${Math.random() * bottomMax}%` }
            : { top: `${Math.random() * topMax}%` }
        ),
        animationDelay: `${Math.random() * animationDelayMax}s`,
    }));
}
