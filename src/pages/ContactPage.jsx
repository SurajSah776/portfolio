import React from "react";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import AvailabilityStatus from "../components/AvailabilityStatus";
import { contactInfo, serviceContactPreferences } from "../data/social";
import { useTheme } from "../contexts/ThemeContext";

const ContactPage = () => {
  const { classes } = useTheme();

  return (
    <div
      className={`container mx-auto p-8 ${classes.bg} min-h-screen transition-colors duration-300`}
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className={`text-5xl font-bold mb-4 ${classes.text}`}>
          Let's Work Together
        </h1>
        <p className={`text-xl ${classes.textMuted} max-w-3xl mx-auto mb-6`}>
          Have a project in mind? I'd love to hear about it and discuss how we
          can make it happen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={serviceContactPreferences.projectInquiry}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Quick Project Inquiry
          </a>
          <a
            href={serviceContactPreferences.consultationBooking}
            className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Enhanced Contact Form */}
        <ContactForm />

        {/* Contact Info & Social */}
        <div className="space-y-8">
          {/* Availability Status */}
          <div
            className={`${classes.cardBg} rounded-2xl shadow-lg ${classes.border} overflow-hidden transition-colors duration-300`}
          >
            <AvailabilityStatus compact={true} />
          </div>

          {/* Contact Information */}
          <div
            className={`${classes.cardBg} p-8 rounded-2xl shadow-lg ${classes.border} transition-colors duration-300`}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-600">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.58l9.615-6.759h.749c.904 0 1.636.732 1.636 1.636z" />
                  </svg>
                </div>
                <div>
                  <p className={`${classes.textLight} text-sm`}>Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className={`${classes.text} hover:text-purple-600 transition-colors duration-300`}
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className={`${classes.textLight} text-sm`}>
                    Location & Timezone
                  </p>
                  <p className={classes.text}>
                    {contactInfo.location} ({contactInfo.timezone})
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <p className={`${classes.textLight} text-sm`}>
                    Response Time
                  </p>
                  <p className={classes.text}>{contactInfo.responseTime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Social Media */}
          <div
            className={`${classes.cardBg} p-8 rounded-2xl shadow-lg ${classes.border} transition-colors duration-300`}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-600">
              Connect With Me
            </h3>
            <SocialLinks variant="card" />
          </div>

          {/* Enhanced Availability */}
          <div
            className={`${classes.cardBg} p-8 rounded-2xl shadow-lg ${classes.border} transition-colors duration-300`}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-600">
              Availability & Services
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={classes.textMuted}>Monday - Friday</span>
                <span className={classes.text}>9:00 AM - 5:00 PM IST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={classes.textMuted}>Weekend</span>
                <span className={classes.textLight}>By appointment</span>
              </div>
              <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-500/20 rounded-lg border border-purple-200 dark:border-purple-500/30 transition-colors duration-300">
                <p className="text-purple-700 dark:text-purple-400 text-sm mb-2">
                  🚀 {contactInfo.availability}
                </p>
                <p className={`${classes.textMuted} text-xs`}>
                  Specializing in React.js Frontend & Python FastAPI Backend
                  Development
                </p>
              </div>

              {/* Service Highlights */}
              <div className="mt-6 space-y-3">
                <h4 className={`text-lg font-semibold ${classes.text}`}>
                  Available Services:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className={`${classes.textSecondary} text-sm`}>
                      React.js Frontend Development
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className={`${classes.textSecondary} text-sm`}>
                      Python FastAPI Backend APIs
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className={`${classes.textSecondary} text-sm`}>
                      Full-Stack E-commerce Solutions
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className={`${classes.textSecondary} text-sm`}>
                      Technical Consulting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
