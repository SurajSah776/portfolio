import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", theme);

    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeClasses = {
    light: {
      // Backgrounds
      bg: "bg-gray-50",
      cardBg: "bg-white",
      navBg: "bg-white/95",

      // Text colors
      text: "text-gray-900",
      textSecondary: "text-gray-700",
      textMuted: "text-gray-600",
      textLight: "text-gray-500",

      // Borders
      border: "border-gray-200",
      borderLight: "border-gray-100",

      // Interactive elements
      hover: "hover:bg-gray-50",
      cardHover: "hover:shadow-lg",

      // Form elements
      input: "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500",
      inputFocus: "focus:border-purple-500 focus:ring-purple-500/20",

      // Buttons
      buttonSecondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",

      // Status colors
      success: "text-green-600 bg-green-50 border-green-200",
      warning: "text-yellow-600 bg-yellow-50 border-yellow-200",
      error: "text-red-600 bg-red-50 border-red-200",
      info: "text-blue-600 bg-blue-50 border-blue-200",
    },
    dark: {
      // Backgrounds
      bg: "bg-gray-900",
      cardBg: "bg-gray-800",
      navBg: "bg-gray-800/95",

      // Text colors
      text: "text-white",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      textLight: "text-gray-500",

      // Borders
      border: "border-gray-700",
      borderLight: "border-gray-600",

      // Interactive elements
      hover: "hover:bg-gray-700",
      cardHover: "hover:shadow-2xl hover:border-gray-600",

      // Form elements
      input: "bg-gray-700 border-gray-600 text-white placeholder-gray-400",
      inputFocus: "focus:border-purple-500 focus:ring-purple-500/20",

      // Buttons
      buttonSecondary: "bg-gray-700 text-gray-300 hover:bg-gray-600",

      // Status colors
      success: "text-green-400 bg-green-500/10 border-green-500/30",
      warning: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
      error: "text-red-400 bg-red-500/10 border-red-500/30",
      info: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    },
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
    classes: themeClasses[theme],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
