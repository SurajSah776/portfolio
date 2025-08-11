import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const secondaryNavItems = [
    { name: "Resume", path: "/resume" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Certifications", path: "/certifications" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 p-2"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              aria-label="Close navigation menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation content */}
          <div className="flex-1 overflow-y-auto">
            {/* Main navigation */}
            <div className="px-4 py-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Main Navigation
              </h3>
              <nav className="space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Secondary navigation */}
            <div className="px-4 py-6 border-t border-gray-700">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Professional Pages
              </h3>
              <nav className="space-y-2">
                {secondaryNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <Link
              to="/contact"
              className="block w-full bg-primary text-white text-center px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              onClick={toggleMenu}
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
