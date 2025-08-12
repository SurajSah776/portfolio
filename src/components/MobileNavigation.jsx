import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { classes } = useTheme();

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
    { name: "Certifications", path: "/certifications" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
    scrollToTop();
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center space-x-2">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className={`${classes.textSecondary} hover:text-purple-600 transition-colors duration-200 p-2`}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />

          {/* Menu panel */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] ${classes.cardBg} ${classes.border} border-l shadow-xl z-50 md:hidden mobile-nav-panel`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div
                className={`flex items-center justify-between p-4 ${classes.borderLight} border-b flex-shrink-0`}
              >
                <Link
                  to="/"
                  className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                  onClick={handleLinkClick}
                >
                  Portfolio
                </Link>
                <button
                  onClick={closeMenu}
                  className={`${classes.textSecondary} hover:text-purple-600 p-1`}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation */}
              <div
                className="flex-1 overflow-y-auto p-4 mobile-nav-expanded"
                style={{ minHeight: "350px" }}
              >
                <nav className="space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors min-h-[48px] ${
                        location.pathname === item.path
                          ? "bg-purple-600 text-white shadow-md"
                          : `${classes.textSecondary} hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-500/20`
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div
                className={`px-4 py-3 ${classes.borderLight} border-t flex-shrink-0`}
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full bg-primary text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg min-h-[44px]"
                  onClick={handleLinkClick}
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNavigation;
