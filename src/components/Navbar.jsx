import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const { classes } = useTheme();

  const mainNavItems = [
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`${classes.navBg} backdrop-blur-sm ${classes.border} border-b sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
            aria-label="Home"
          >
            <img
              src="./logo1.png"
              alt="Portfolio Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {mainNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`font-medium transition-all duration-300 relative group ${
                      location.pathname === item.path
                        ? "text-purple-600"
                        : `${classes.textSecondary} hover:text-purple-600`
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${
                        location.pathname === item.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
