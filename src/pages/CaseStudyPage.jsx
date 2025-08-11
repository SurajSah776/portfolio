import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../data/projects.js";
import { useTheme } from "../contexts/ThemeContext";
import SEO from "../components/SEO";
import { generateProjectSEO } from "../data/seoData";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = getProjectById(slug);
  const { classes } = useTheme();

  if (!project) {
    return (
      <div
        className={`container mx-auto p-8 ${classes.bg} min-h-screen flex items-center justify-center transition-colors duration-300`}
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className={`text-4xl font-bold mb-4 ${classes.text}`}>
            Project Not Found
          </h1>
          <p className={`${classes.textLight} mb-8`}>
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/portfolio"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${classes.bg} min-h-screen transition-colors duration-300`}
    >
      <SEO {...generateProjectSEO(project)} />
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent dark:from-gray-900 dark:via-gray-900/70`}
        ></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto p-8">
            <Link
              to="/portfolio"
              className="text-purple-400 hover:text-purple-300 mb-4 inline-flex items-center transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Portfolio
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === "Completed"
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                }`}
              >
                {project.status}
              </span>
              <span className="text-gray-400">{project.duration}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{project.category}</span>
              {project.featured && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                    Featured
                  </span>
                </>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8">
        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Details Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Role</span>
                  <p className="font-medium">{project.role}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Duration</span>
                  <p className="font-medium">{project.duration}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Team Size</span>
                  <p className="font-medium">{project.teamSize}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Status</span>
                  <p className="font-medium">{project.status}</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-3 py-2 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub Repository</span>
                  </a>
                )}
                {project.demoVideo && project.demoVideo !== "#" && (
                  <a
                    href={project.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4M9 10V8a2 2 0 012-2h2a2 2 0 012 2v2"
                      />
                    </svg>
                    <span>Demo Video</span>
                  </a>
                )}
              </div>
            </div>

            {/* Project Metrics */}
            {project.metrics && (
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Project Metrics</h3>
                <div className="space-y-3">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="font-medium text-purple-300">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
          <div className="bg-gray-800 rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        </div>

        {/* Solution Approach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Solution Approach</h2>
          <div className="bg-gray-800 rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {project.solutionApproach}
            </p>

            {/* Technical Implementation */}
            {project.technicalImplementation && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Technical Implementation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.technicalImplementation.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Challenges</h2>
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Solutions</h2>
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Outcomes & Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Outcomes & Results</h2>
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learnings */}
        {project.learnings && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.learnings.map((learning, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Similar Work?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I specialize in building modern web applications with React.js and
            Python. Let's discuss how I can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
