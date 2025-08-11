import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const { classes } = useTheme();

  return (
    <section
      className={`min-h-screen flex items-center justify-center ${classes.bg} relative overflow-hidden transition-colors duration-300`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-900/20 dark:to-transparent"></div>
      <div className="absolute top-10 right-4 sm:top-20 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 bg-gradient-to-br from-purple-200/20 to-purple-300/20 dark:from-purple-500/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-4 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-100/20 to-purple-200/20 dark:from-purple-600/10 dark:to-purple-700/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <AnimatedSection animation="fadeUp" delay={0}>
              <div className="mb-4 sm:mb-6">
                <p className="text-base sm:text-lg md:text-xl text-purple-600 font-semibold mb-2">
                  Hi, I'm Suraj Kumar Sah
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4">
                  <span
                    className={`bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}
                  >
                    Full-Stack Developer
                  </span>
                </h1>
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ${classes.textSecondary} mb-4 sm:mb-6`}
                >
                  at ESSPL
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={200}>
              <p
                className={`text-base sm:text-lg md:text-xl ${classes.textMuted} mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed`}
              >
                Crafting modern web experiences with React.js and Python
                FastAPI. I build scalable applications that solve real-world
                problems and deliver exceptional user experiences.
              </p>
            </AnimatedSection>

            {/* Call-to-action buttons */}
            <AnimatedSection animation="fadeUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                <Link
                  to="/portfolio"
                  className="bg-primary text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-center text-sm sm:text-base touch-manipulation"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-purple-600 text-purple-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105 text-center text-sm sm:text-base touch-manipulation"
                >
                  Get In Touch
                </Link>
              </div>
            </AnimatedSection>

            {/* Quick stats */}
            <AnimatedSection animation="fadeUp" delay={600}>
              <div
                className={`flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm ${classes.textMuted} justify-center lg:justify-start`}
              >
                <div className="flex items-center gap-2 transition-all duration-300 hover:text-green-600 touch-manipulation">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Available for freelance</span>
                </div>
                <div className="flex items-center gap-2 transition-all duration-300 hover:text-purple-600 touch-manipulation">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  <span>4+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2 transition-all duration-300 hover:text-blue-600 touch-manipulation">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  <span>Full-Stack Expertise</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Professional Photo Section */}
          <AnimatedSection
            animation="slideLeft"
            delay={300}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Photo placeholder with gradient border */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 p-1 transition-all duration-300 hover:scale-105 mx-auto">
                <div className="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for professional photo */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 bg-gray-500 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-600 touch-manipulation">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm font-medium">
                        Professional Photo
                      </p>
                      <p className="text-xs">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <AnimatedSection animation="fadeIn" delay={800}>
          <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center transition-all duration-300 hover:border-purple-500 touch-manipulation">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
