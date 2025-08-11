import React from "react";
import SocialLinks from "./SocialLinks";
import { contactInfo } from "../data/social";

const ProfessionalBranding = ({
  variant = "default",
  showAvailability = true,
  showSocial = true,
  className = "",
}) => {
  const getBrandingContent = () => {
    switch (variant) {
      case "footer":
        return (
          <div className={`bg-gray-800 py-12 ${className}`}>
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Brand Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Suraj Kumar Sah
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Full-Stack Developer at ESSPL specializing in React.js and
                    Python FastAPI development.
                  </p>
                  {showAvailability && (
                    <div className="inline-block px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <p className="text-purple-300 text-sm">
                        🚀 {contactInfo.availability}
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick Contact */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Quick Contact
                  </h4>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="block text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      📧 {contactInfo.email}
                    </a>
                    <p className="text-gray-300">
                      🌍 {contactInfo.location} ({contactInfo.timezone})
                    </p>
                    <p className="text-gray-300">
                      ⚡ Response: {contactInfo.responseTime}
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                {showSocial && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Connect
                    </h4>
                    <SocialLinks
                      variant="compact"
                      showLabels={false}
                      layout="flex"
                      filterType="primary"
                      className="justify-start"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case "sidebar":
        return (
          <div
            className={`bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 ${className}`}
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-white">Suraj Kumar Sah</h3>
              <p className="text-purple-400 text-sm">Full-Stack Developer</p>
              <p className="text-gray-400 text-xs">ESSPL Company</p>
            </div>

            {showAvailability && (
              <div className="mb-6 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center">
                <p className="text-purple-300 text-sm">
                  🚀 Available for Projects
                </p>
              </div>
            )}

            {showSocial && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3 text-center">
                  Connect With Me
                </h4>
                <SocialLinks
                  variant="compact"
                  showLabels={false}
                  layout="flex"
                  filterType="primary"
                  className="justify-center"
                />
              </div>
            )}
          </div>
        );

      case "hero-cta":
        return (
          <div className={`text-center ${className}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={`mailto:${contactInfo.email}?subject=Project Inquiry`}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Start a Project
              </a>
              <a
                href="/contact"
                className="border-2 border-purple-600 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {showSocial && (
              <div>
                <p className="text-gray-400 text-sm mb-4">
                  Or connect with me on:
                </p>
                <SocialLinks
                  variant="minimal"
                  showLabels={false}
                  layout="flex"
                  filterType="primary"
                  className="justify-center"
                />
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className={`bg-gray-800 p-6 rounded-xl ${className}`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👨‍💻</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Suraj Kumar Sah
                </h3>
                <p className="text-purple-400 text-sm">
                  Full-Stack Developer at ESSPL
                </p>
              </div>
            </div>

            {showAvailability && (
              <div className="mb-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-purple-300 text-sm">
                  🚀 {contactInfo.availability}
                </p>
              </div>
            )}

            {showSocial && (
              <SocialLinks
                variant="minimal"
                showLabels={true}
                layout="vertical"
                filterType="primary"
              />
            )}
          </div>
        );
    }
  };

  return getBrandingContent();
};

export default ProfessionalBranding;
