/**
 * Animation utility functions and configurations
 */

// Common animation configurations
export const animationConfig = {
    // Intersection Observer options
    observer: {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    },

    // Animation durations
    duration: {
        fast: 300,
        normal: 500,
        slow: 700,
    },

    // Stagger delays
    stagger: {
        fast: 50,
        normal: 100,
        slow: 200,
    },

    // Easing functions
    easing: {
        easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
};

// Animation presets
export const animationPresets = {
    fadeUp: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: animationConfig.easing.easeOut },
    },

    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, ease: animationConfig.easing.easeOut },
    },

    slideLeft: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: animationConfig.easing.easeOut },
    },

    slideRight: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: animationConfig.easing.easeOut },
    },

    scale: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: animationConfig.easing.easeOut },
    },

    bounce: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: animationConfig.easing.bounce },
    },
};

// Utility functions
export const createStaggeredAnimation = (baseAnimation, staggerDelay = 100) => {
    return (index) => ({
        ...baseAnimation,
        transition: {
            ...baseAnimation.transition,
            delay: index * (staggerDelay / 1000),
        },
    });
};

export const createScrollTriggeredAnimation = (animation, threshold = 0.1) => {
    return {
        ...animation,
        viewport: { once: true, amount: threshold },
    };
};

// Performance optimization utilities
export const shouldReduceMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getOptimizedAnimation = (animation) => {
    if (shouldReduceMotion()) {
        return {
            initial: animation.initial,
            animate: animation.animate,
            transition: { duration: 0.01 },
        };
    }
    return animation;
};

// Common micro-interaction animations
export const microInteractions = {
    buttonHover: {
        scale: 1.05,
        transition: { duration: 0.2, ease: animationConfig.easing.easeOut },
    },

    buttonPress: {
        scale: 0.95,
        transition: { duration: 0.1, ease: animationConfig.easing.easeOut },
    },

    cardHover: {
        y: -8,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3, ease: animationConfig.easing.easeOut },
    },

    linkHover: {
        color: '#9b59b6',
        transition: { duration: 0.2, ease: animationConfig.easing.easeOut },
    },
};