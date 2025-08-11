import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * PageTransition component for smooth page transitions
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    // Start transition
    setIsLoading(true);

    // Small delay to show loading state
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  return (
    <div className="relative min-h-screen">
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      )}

      {/* Page content with fade transition */}
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {displayChildren}
      </div>
    </div>
  );
};

export default PageTransition;
