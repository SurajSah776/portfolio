// Performance optimization utilities

// Debounce function for search inputs and resize events
export const debounce = (func, wait, immediate = false) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
    };

    if (!window.IntersectionObserver) {
        // Fallback for browsers without IntersectionObserver
        callback([{ isIntersecting: true }]);
        return { disconnect: () => { } };
    }

    return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical resources
export const preloadResource = (href, as = "script", crossorigin = null) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = href;
    link.as = as;
    if (crossorigin) link.crossOrigin = crossorigin;
    document.head.appendChild(link);
};

// Preload images
export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
};

// Batch preload multiple images
export const preloadImages = (srcArray) => {
    return Promise.allSettled(srcArray.map(preloadImage));
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Get device performance tier (rough estimation)
export const getDevicePerformanceTier = () => {
    // Basic performance estimation based on available APIs
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const memory = navigator.deviceMemory || 4; // Default to 4GB if not available
    const cores = navigator.hardwareConcurrency || 4; // Default to 4 cores

    let tier = "medium";

    // Low-end device indicators
    if (
        memory <= 2 ||
        cores <= 2 ||
        (connection && (connection.effectiveType === "slow-2g" || connection.effectiveType === "2g"))
    ) {
        tier = "low";
    }
    // High-end device indicators
    else if (memory >= 8 && cores >= 8) {
        tier = "high";
    }

    return tier;
};

// Adaptive loading based on device performance
export const shouldLoadHighQuality = () => {
    const tier = getDevicePerformanceTier();
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    // Don't load high quality on low-end devices or slow connections
    if (tier === "low") return false;
    if (connection && connection.saveData) return false;
    if (connection && (connection.effectiveType === "slow-2g" || connection.effectiveType === "2g")) return false;

    return true;
};

// Memory usage monitoring (if available)
export const getMemoryUsage = () => {
    if (performance.memory) {
        return {
            used: Math.round(performance.memory.usedJSHeapSize / 1048576), // MB
            total: Math.round(performance.memory.totalJSHeapSize / 1048576), // MB
            limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576), // MB
        };
    }
    return null;
};

// Performance timing utilities
export const measurePerformance = (name, fn) => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();

    console.log(`${name} took ${end - start} milliseconds`);

    // Use Performance API if available
    if (performance.mark && performance.measure) {
        performance.mark(`${name}-start`);
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);
    }

    return result;
};

// Async performance measurement
export const measureAsyncPerformance = async (name, asyncFn) => {
    const start = performance.now();
    const result = await asyncFn();
    const end = performance.now();

    console.log(`${name} took ${end - start} milliseconds`);

    if (performance.mark && performance.measure) {
        performance.mark(`${name}-start`);
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);
    }

    return result;
};

// Resource loading optimization
export const loadResourceWithTimeout = (url, timeout = 5000) => {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timeout")), timeout)
        ),
    ]);
};

// Critical resource loading
export const loadCriticalResources = async (resources) => {
    const criticalPromises = resources.map(resource => {
        if (resource.type === "image") {
            return preloadImage(resource.url);
        } else if (resource.type === "font") {
            return new FontFace(resource.family, `url(${resource.url})`).load();
        }
        return loadResourceWithTimeout(resource.url);
    });

    try {
        await Promise.allSettled(criticalPromises);
    } catch (error) {
        console.warn("Some critical resources failed to load:", error);
    }
};

// Bundle size optimization helpers
export const dynamicImport = async (modulePath) => {
    try {
        const module = await import(modulePath);
        return module.default || module;
    } catch (error) {
        console.error(`Failed to load module: ${modulePath}`, error);
        throw error;
    }
};

// Service Worker registration for caching
export const registerServiceWorker = async (swPath = "/sw.js") => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register(swPath);
            console.log("Service Worker registered successfully:", registration);
            return registration;
        } catch (error) {
            console.error("Service Worker registration failed:", error);
            throw error;
        }
    } else {
        console.warn("Service Workers are not supported in this browser");
    }
};

export default {
    debounce,
    throttle,
    createIntersectionObserver,
    preloadResource,
    preloadImage,
    preloadImages,
    prefersReducedMotion,
    getDevicePerformanceTier,
    shouldLoadHighQuality,
    getMemoryUsage,
    measurePerformance,
    measureAsyncPerformance,
    loadResourceWithTimeout,
    loadCriticalResources,
    dynamicImport,
    registerServiceWorker,
};