import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import { useTheme } from "../contexts/ThemeContext";
import LazyImage from "./LazyImage";

const FeaturedProjects = () => {
  const { classes } = useTheme();

  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 ${classes.bg} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl ${classes.textMuted} max-w-3xl mx-auto px-4`}
          >
            Showcasing my expertise in full-stack development with React.js,
            Python, and modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className={`card-hover ${classes.cardBg} rounded-xl shadow-lg overflow-hidden group touch-manipulation transition-colors duration-300`}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <LazyImage
                  src={project.image || "/api/placeholder/400/300"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  placeholder={
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                      <div className="text-center text-purple-700">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 bg-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-xl sm:text-2xl text-white">
                            {project.category === "Full-Stack"
                              ? "🚀"
                              : project.category === "Startup"
                              ? "💡"
                              : project.category === "Marketplace"
                              ? "🛒"
                              : "📱"}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium px-2">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20"></div>

                {/* Status Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-2 ${classes.text} group-hover:text-purple-600 transition-colors duration-300`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${classes.textMuted} text-sm leading-relaxed line-clamp-2`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Stats */}
                <div
                  className={`flex justify-between items-center text-xs ${classes.textLight} mb-3 sm:mb-4`}
                >
                  <span>{project.duration}</span>
                  <span>{project.teamSize}</span>
                </div>

                {/* Action Links */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="flex-1 bg-primary text-white text-center py-2 px-3 sm:px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg text-sm touch-manipulation"
                  >
                    View Case Study
                  </Link>
                  <a
                    href={project.liveUrl}
                    className={`px-3 sm:px-4 py-2 ${classes.border} ${classes.textSecondary} rounded-lg hover:border-purple-300 hover:text-purple-700 transition-all duration-300 text-sm font-medium text-center touch-manipulation`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className={`inline-flex items-center gap-2 ${classes.cardBg} border-2 border-purple-600 text-purple-600 font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 touch-manipulation text-sm sm:text-base`}
          >
            View All Projects
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
