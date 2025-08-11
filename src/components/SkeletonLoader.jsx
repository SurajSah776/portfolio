import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const SkeletonLoader = ({
  variant = "default",
  className = "",
  count = 1,
  height = "h-4",
  width = "w-full",
}) => {
  const { classes } = useTheme();

  const skeletonVariants = {
    default: `${height} ${width} bg-gray-200 dark:bg-gray-700 rounded animate-pulse`,
    card: `${classes.cardBg} rounded-xl shadow-lg overflow-hidden`,
    project: `${classes.cardBg} rounded-2xl shadow-xl overflow-hidden`,
    text: `${height} ${width} bg-gray-200 dark:bg-gray-700 rounded animate-pulse`,
    avatar: "w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse",
    button: "h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse",
  };

  const renderSkeleton = () => {
    switch (variant) {
      case "card":
        return (
          <div
            className={`${skeletonVariants.card} ${className} transition-colors duration-300`}
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            <div className="p-6 space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-6 w-18 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case "project":
        return (
          <div className={`${skeletonVariants.project} ${className}`}>
            <div className="h-48 sm:h-56 lg:h-64 bg-gray-700 animate-pulse"></div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-16"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-2/3"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-6 w-16 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-6 w-20 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-6 w-18 bg-gray-700 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                <div className="h-8 w-32 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="flex gap-3 justify-center sm:justify-end">
                  <div className="h-6 w-6 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-6 w-6 bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case "skill":
        return (
          <div
            className={`rounded-xl p-4 sm:p-6 border-2 bg-white ${className}`}
          >
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-200 rounded-xl animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mx-auto"></div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 rounded-lg p-2 sm:p-3"
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-200 rounded-full animate-pulse"
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "hero":
        return (
          <div
            className={`min-h-screen flex items-center justify-center ${className}`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                  <div className="mb-4 sm:mb-6">
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-48 mx-auto lg:mx-0"></div>
                    <div className="h-16 bg-gray-200 rounded animate-pulse mb-3 sm:mb-4"></div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse mb-4 sm:mb-6 w-3/4 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-6 sm:mb-8"></div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                    <div className="h-12 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-12 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-36 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="flex-shrink-0 order-1 lg:order-2">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gray-200 rounded-2xl animate-pulse mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${skeletonVariants.default} ${className}`}></div>
        );
    }
  };

  if (count === 1) {
    return renderSkeleton();
  }

  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
