import React from "react";
import { socialLinks } from "../data/social";
import { useTheme } from "../contexts/ThemeContext";
import SocialMediaTracker from "./SocialMediaTracker";

const SocialLinks = ({
  variant = "default",
  showLabels = true,
  className = "",
  iconSize = "w-6 h-6",
  layout = "grid",
  filterType = null, // 'professional', 'social', 'primary'
}) => {
  const { classes } = useTheme();
  const getSocialIcon = (name) => {
    const icons = {
      Gmail: (
        <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.58l9.615-6.759h.749c.904 0 1.636.732 1.636 1.636z" />
        </svg>
      ),
      LinkedIn: (
        <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      GitHub: (
        <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      Facebook: (
        <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      Instagram: (
        <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      Twitter: (
        <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      Threads: (
        <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.74-1.811-.365-.479-.856-.735-1.414-.735-.71 0-1.259.29-1.606.841-.532.845-.241 1.711.314 2.262l-1.344 1.306c-.92-.94-1.308-2.202-.73-3.525.539-1.273 1.406-2.173 2.749-2.173 1.06 0 1.914.674 2.652 1.624.737.95 1.18 2.108 1.18 3.496 0 .69-.062 1.36-.186 2.007.54.46.949 1.016 1.187 1.668.238.652.295 1.383.171 2.179-.24 1.507-1.009 2.793-2.298 3.849-1.684 1.381-3.91 1.989-7.034 1.989z" />
        </svg>
      ),
    };
    return (
      icons[name] || (
        <span className={iconSize}>
          {socialLinks.find((link) => link.name === name)?.icon}
        </span>
      )
    );
  };

  const getVariantStyles = (variant) => {
    const baseStyles = "transition-all duration-300 group";

    switch (variant) {
      case "compact":
        return `${baseStyles} flex items-center justify-center p-3 rounded-full ${classes.cardBg} hover:bg-purple-600 hover:scale-110`;

      case "card":
        return `${baseStyles} flex items-center space-x-3 p-4 ${classes.cardBg} rounded-xl ${classes.hover}`;

      case "minimal":
        return `${baseStyles} flex items-center justify-center p-2 rounded-lg hover:bg-purple-500/10`;

      case "floating":
        return `${baseStyles} flex items-center justify-center p-4 rounded-full ${classes.cardBg} shadow-lg hover:shadow-xl hover:bg-purple-600 hover:scale-110`;

      default:
        return `${baseStyles} flex items-center space-x-3 p-4 ${classes.cardBg} rounded-xl ${classes.hover}`;
    }
  };

  const getLayoutClass = () => {
    switch (layout) {
      case "flex":
        return "flex flex-wrap gap-4 justify-center";
      case "vertical":
        return "flex flex-col space-y-4";
      case "horizontal":
        return "flex flex-row gap-4 justify-center";
      default:
        return "grid grid-cols-2 gap-4";
    }
  };

  // Filter links based on type
  const filteredLinks = filterType
    ? socialLinks.filter((link) => {
        switch (filterType) {
          case "professional":
            return link.type === "professional" || link.type === "email";
          case "social":
            return link.type === "social";
          case "primary":
            return link.primary;
          default:
            return true;
        }
      })
    : socialLinks;

  return (
    <div className={`${getLayoutClass()} ${className}`}>
      {filteredLinks.map((link) => (
        <SocialMediaTracker
          key={link.name}
          platform={link.name}
          url={link.url}
          className={getVariantStyles(variant, link)}
        >
          <div
            className={`${classes.textLight} group-hover:text-purple-400 transition-colors duration-300`}
          >
            {getSocialIcon(link.name)}
          </div>
          {showLabels && (
            <span
              className={`${classes.text} group-hover:text-purple-400 transition-colors duration-300`}
            >
              {link.name}
            </span>
          )}
        </SocialMediaTracker>
      ))}
    </div>
  );
};

export default SocialLinks;
