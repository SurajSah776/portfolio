import { useState } from "react";

/**
 * AnimatedButton component with micro-interactions
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button variant ('primary', 'secondary', 'outline')
 * @param {string} props.size - Button size ('sm', 'md', 'lg')
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Disabled state
 * @param {boolean} props.loading - Loading state
 * @param {string} props.className - Additional CSS classes
 */
export const AnimatedButton = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  loading = false,
  className = "",
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md";
      case "outline":
        return "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:shadow-md";
      default:
        return "bg-primary text-white hover:shadow-lg hover:shadow-purple-500/25";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "lg":
        return "px-8 py-4 text-lg";
      default:
        return "px-6 py-3";
    }
  };

  return (
    <button
      className={`
        relative overflow-hidden rounded-lg font-medium
        transition-all duration-300 ease-out
        transform hover:scale-105 active:scale-95
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${isPressed ? "scale-95" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      {...props}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>

      {/* Content */}
      <span className="relative flex items-center justify-center space-x-2">
        {loading && (
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        <span>{children}</span>
      </span>
    </button>
  );
};

/**
 * AnimatedCard component with hover interactions
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.hoverable - Enable hover effects
 */
export const AnimatedCard = ({
  children,
  className = "",
  onClick,
  hoverable = true,
  ...props
}) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-lg overflow-hidden
        transition-all duration-300 ease-out
        ${
          hoverable
            ? "hover:shadow-xl hover:-translate-y-2 hover:shadow-purple-500/10"
            : ""
        }
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * AnimatedLink component with underline animation
 * @param {Object} props
 * @param {React.ReactNode} props.children - Link content
 * @param {string} props.href - Link URL
 * @param {string} props.className - Additional CSS classes
 */
export const AnimatedLink = ({ children, href, className = "", ...props }) => {
  return (
    <a
      href={href}
      className={`
        relative inline-block text-purple-600 font-medium
        transition-colors duration-300 hover:text-purple-700
        ${className}
      `}
      {...props}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 hover:w-full"></span>
    </a>
  );
};

/**
 * FloatingActionButton component with pulse animation
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.position - Position ('bottom-right', 'bottom-left')
 * @param {string} props.className - Additional CSS classes
 */
export const FloatingActionButton = ({
  children,
  onClick,
  position = "bottom-right",
  className = "",
  ...props
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-6 left-6";
      default:
        return "bottom-6 right-6";
    }
  };

  return (
    <button
      className={`
        fixed z-40 w-14 h-14 bg-primary text-white rounded-full
        shadow-lg hover:shadow-xl transition-all duration-300
        transform hover:scale-110 active:scale-95
        flex items-center justify-center
        ${getPositionClasses()}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-20"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

/**
 * ProgressBar component with smooth animation
 * @param {Object} props
 * @param {number} props.progress - Progress value (0-100)
 * @param {string} props.color - Progress bar color
 * @param {string} props.className - Additional CSS classes
 */
export const ProgressBar = ({
  progress = 0,
  color = "bg-purple-600",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`w-full bg-gray-200 rounded-full h-2 ${className}`}
      {...props}
    >
      <div
        className={`h-2 rounded-full transition-all duration-700 ease-out ${color}`}
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      ></div>
    </div>
  );
};
