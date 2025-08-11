import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-based animations using Intersection Observer API
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Threshold for triggering animation (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Object} - { ref, isVisible, hasAnimated }
 */
export const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = true
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        setHasAnimated(true);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible, hasAnimated };
};

/**
 * Custom hook for staggered animations
 * @param {number} delay - Delay between each item animation in milliseconds
 * @param {Object} observerOptions - Intersection Observer options
 * @returns {Object} - { ref, getItemProps }
 */
export const useStaggeredAnimation = (delay = 100, observerOptions = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
                ...observerOptions,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [observerOptions]);

    const getItemProps = (index) => ({
        className: `transition-all duration-700 ease-out ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`,
        style: {
            transitionDelay: isVisible ? `${index * delay}ms` : '0ms',
        },
    });

    return { ref, getItemProps, isVisible };
};

/**
 * Custom hook for parallax scrolling effect
 * @param {number} speed - Parallax speed multiplier (0-1)
 * @returns {Object} - { ref, transform }
 */
export const useParallax = (speed = 0.5) => {
    const [transform, setTransform] = useState('translateY(0px)');
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleScroll = () => {
            const rect = element.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * -speed;

            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                setTransform(`translateY(${rate}px)`);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return { ref, transform };
};