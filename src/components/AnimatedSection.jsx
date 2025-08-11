import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * AnimatedSection component for scroll-based animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.animation - Animation type ('fadeUp', 'fadeIn', 'slideLeft', 'slideRight', 'scale')
 * @param {number} props.delay - Animation delay in milliseconds
 * @param {Object} props.observerOptions - Intersection Observer options
 */
const AnimatedSection = ({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  observerOptions = {},
  ...props
}) => {
  const { ref, isVisible } = useScrollAnimation(observerOptions);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";

    switch (animation) {
      case "fadeUp":
        return `${baseClasses} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`;
      case "fadeIn":
        return `${baseClasses} ${isVisible ? "opacity-100" : "opacity-0"}`;
      case "slideLeft":
        return `${baseClasses} ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`;
      case "slideRight":
        return `${baseClasses} ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`;
      case "scale":
        return `${baseClasses} ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`;
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
