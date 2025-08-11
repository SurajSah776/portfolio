import { useEffect, useState, useCallback } from "react";
import {
    getDevicePerformanceTier,
    shouldLoadHighQuality,
    getMemoryUsage,
    prefersReducedMotion
} from "../utils/performance";

// Hook for performance monitoring and optimization
export const usePerformance = () => {
    const [performanceTier, setPerformanceTier] = useState("medium");
    const [shouldUseHighQuality, setShouldUseHighQuality] = useState(true);
    const [memoryUsage, setMemoryUsage] = useState(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        // Initialize performance settings
        setPerformanceTier(getDevicePerformanceTier());
        setShouldUseHighQuality(shouldLoadHighQuality());
        setMemoryUsage(getMemoryUsage());
        setReducedMotion(prefersReducedMotion());

        // Monitor memory usage periodically (if available)
        const memoryInterval = setInterval(() => {
            const usage = getMemoryUsage();
            if (usage) {
                setMemoryUsage(usage);

                // Warn if memory usage is high
                if (usage.used / usage.limit > 0.8) {
                    console.warn("High memory usage detected:", usage);
                }
            }
        }, 30000); // Check every 30 seconds

        return () => clearInterval(memoryInterval);
    }, []);

    const measureComponentRender = useCallback((componentName, renderFn) => {
        const start = performance.now();
        const result = renderFn();
        const end = performance.now();

        if (end - start > 16) { // Longer than one frame (60fps)
            console.warn(`Slow render detected for ${componentName}: ${end - start}ms`);
        }

        return result;
    }, []);

    return {
        performanceTier,
        shouldUseHighQuality,
        memoryUsage,
        reducedMotion,
        measureComponentRender,
    };
};

// Hook for intersection observer with performance considerations
export const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [target, setTarget] = useState(null);

    useEffect(() => {
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: "50px",
                ...options,
            }
        );

        observer.observe(target);

        return () => {
            observer.disconnect();
        };
    }, [target, options]);

    return [setTarget, isIntersecting];
};

// Hook for debounced values (useful for search inputs)
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

// Hook for throttled callbacks (useful for scroll events)
export const useThrottle = (callback, delay) => {
    const [isThrottled, setIsThrottled] = useState(false);

    const throttledCallback = useCallback((...args) => {
        if (!isThrottled) {
            callback(...args);
            setIsThrottled(true);
            setTimeout(() => setIsThrottled(false), delay);
        }
    }, [callback, delay, isThrottled]);

    return throttledCallback;
};

// Hook for preloading images
export const useImagePreloader = (imageSources = []) => {
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [failedImages, setFailedImages] = useState(new Set());
    const [isLoading, setIsLoading] = useState(false);

    const preloadImages = useCallback(async (sources) => {
        if (!sources.length) return;

        setIsLoading(true);
        const loaded = new Set(loadedImages);
        const failed = new Set(failedImages);

        const promises = sources.map(src => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    loaded.add(src);
                    resolve({ src, success: true });
                };
                img.onerror = () => {
                    failed.add(src);
                    resolve({ src, success: false });
                };
                img.src = src;
            });
        });

        await Promise.allSettled(promises);

        setLoadedImages(loaded);
        setFailedImages(failed);
        setIsLoading(false);
    }, [loadedImages, failedImages]);

    useEffect(() => {
        if (imageSources.length > 0) {
            preloadImages(imageSources);
        }
    }, [imageSources, preloadImages]);

    return {
        loadedImages,
        failedImages,
        isLoading,
        preloadImages,
    };
};

// Hook for adaptive loading based on connection
export const useAdaptiveLoading = () => {
    const [connectionType, setConnectionType] = useState("4g");
    const [saveData, setSaveData] = useState(false);

    useEffect(() => {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        if (connection) {
            setConnectionType(connection.effectiveType || "4g");
            setSaveData(connection.saveData || false);

            const handleConnectionChange = () => {
                setConnectionType(connection.effectiveType || "4g");
                setSaveData(connection.saveData || false);
            };

            connection.addEventListener("change", handleConnectionChange);

            return () => {
                connection.removeEventListener("change", handleConnectionChange);
            };
        }
    }, []);

    const shouldLoadHighQualityContent = () => {
        if (saveData) return false;
        if (connectionType === "slow-2g" || connectionType === "2g") return false;
        return true;
    };

    const shouldPreloadContent = () => {
        if (saveData) return false;
        if (connectionType === "slow-2g" || connectionType === "2g" || connectionType === "3g") return false;
        return true;
    };

    return {
        connectionType,
        saveData,
        shouldLoadHighQualityContent: shouldLoadHighQualityContent(),
        shouldPreloadContent: shouldPreloadContent(),
    };
};

export default usePerformance;