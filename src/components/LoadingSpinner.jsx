/**
 * Enhanced LoadingSpinner component for consistent loading states
 * @param {Object} props
 * @param {string} props.size - Size of the spinner ('sm', 'md', 'lg', 'xl')
 * @param {string} props.color - Color theme ('primary', 'white', 'gray', 'blue', 'green')
 * @param {string} props.text - Optional loading text
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.fullScreen - Whether to show as full screen overlay
 */
const LoadingSpinner = ({
  size = "md",
  color = "primary",
  text = "",
  className = "",
  fullScreen = false,
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "lg":
        return "w-8 h-8";
      case "xl":
        return "w-12 h-12";
      default:
        return "w-6 h-6";
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case "white":
        return "text-white";
      case "gray":
        return "text-gray-600";
      case "blue":
        return "text-blue-600";
      case "green":
        return "text-green-600";
      default:
        return "text-purple-600";
    }
  };

  const getTextSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-sm";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      default:
        return "text-base";
    }
  };

  const spinner = (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <div
        className={`${getSizeClasses()} ${getColorClasses()} animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
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
      </div>
      {text && (
        <p
          className={`${getTextSizeClasses()} ${getColorClasses()} font-medium animate-pulse`}
        >
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

/**
 * SkeletonLoader component for content loading states
 * @param {Object} props
 * @param {number} props.lines - Number of skeleton lines
 * @param {string} props.className - Additional CSS classes
 */
export const SkeletonLoader = ({ lines = 3, className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-gray-200 rounded h-4 mb-3 ${
            index === lines - 1 ? "w-3/4" : "w-full"
          }`}
        ></div>
      ))}
    </div>
  );
};

/**
 * CardSkeleton component for card loading states
 */
export const CardSkeleton = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      <div className="bg-gray-200 h-48 w-full"></div>
      <div className="p-6">
        <div className="bg-gray-200 h-6 rounded mb-2"></div>
        <div className="bg-gray-200 h-4 rounded mb-4 w-3/4"></div>
        <div className="flex space-x-2 mb-4">
          <div className="bg-gray-200 h-6 w-16 rounded-full"></div>
          <div className="bg-gray-200 h-6 w-20 rounded-full"></div>
          <div className="bg-gray-200 h-6 w-14 rounded-full"></div>
        </div>
        <div className="flex space-x-4">
          <div className="bg-gray-200 h-4 w-16 rounded"></div>
          <div className="bg-gray-200 h-4 w-12 rounded"></div>
        </div>
      </div>
    </div>
  );
};

// Specialized loading components
export const PageLoadingSpinner = ({ text = "Loading page..." }) => (
  <LoadingSpinner
    size="lg"
    color="primary"
    text={text}
    className="min-h-screen"
    fullScreen
  />
);

export const ComponentLoadingSpinner = ({ text = "Loading..." }) => (
  <LoadingSpinner size="md" color="primary" text={text} className="py-8" />
);

export const InlineLoadingSpinner = ({ size = "sm" }) => (
  <LoadingSpinner size={size} color="primary" />
);

export default LoadingSpinner;
