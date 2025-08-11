import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { classes } = useTheme();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Professional",
      links: [
        { name: "Experience", path: "/experience" },
        { name: "Resume", path: "/resume" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Certifications", path: "/certifications" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "React.js Development", path: "/services#react" },
        { name: "Python FastAPI", path: "/services#python" },
        { name: "Full-Stack Solutions", path: "/services#fullstack" },
        { name: "E-commerce Platforms", path: "/services#ecommerce" },
      ],
    },
  ];

  return (
    <footer
      className={`${classes.cardBg} border-t ${classes.border} transition-colors duration-300`}
    >
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="./logo1.png" alt="Portfolio Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Suraj Kumar Sah
              </span>
            </div>
            <p className={`${classes.textMuted} mb-4 leading-relaxed`}>
              Full-Stack Developer at ESSPL specializing in React.js and Python
              FastAPI. Building modern web applications that solve real-world
              problems.
            </p>
            <div
              className={`flex items-center space-x-2 text-sm ${classes.textLight}`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for freelance projects</span>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className={`${classes.text} font-semibold mb-4`}>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`${classes.textMuted} hover:text-purple-600 transition-colors duration-300 text-sm`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className={`mt-12 pt-8 border-t ${classes.border}`}>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className={`${classes.text} font-semibold mb-2`}>
                Get In Touch
              </h3>
              <p className={`${classes.textMuted} text-sm mb-2`}>
                Ready to start your next project? Let's discuss how I can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 text-center"
                >
                  Start Project
                </Link>
                <a
                  href="mailto:your-email@gmail.com"
                  className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300 text-center"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-right">
              <h3 className={`${classes.text} font-semibold mb-2`}>Connect</h3>
              <SocialLinks
                variant="minimal"
                showLabels={false}
                layout="flex"
                filterType="primary"
                iconSize="w-5 h-5"
                className="justify-center lg:justify-end"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`${classes.bg} border-t ${classes.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div
            className={`flex flex-col sm:flex-row justify-between items-center text-sm ${classes.textLight}`}
          >
            <div className="mb-2 sm:mb-0">
              <p>&copy; {currentYear} Suraj Kumar Sah. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <span>Built with React.js & Tailwind CSS</span>
              <span>•</span>
              <span>Deployed on Render</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
