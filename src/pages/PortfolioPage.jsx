import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import {
  projects,
  projectCategories,
  allTechnologies,
} from "../data/projects.js";
import LazyImage from "../components/LazyImage";
import { useDebounce } from "../hooks/usePerformance";

const PortfolioPage = () => {
  const { classes } = useTheme();
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [technologyFilter, setTechnologyFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured"); // featured, title, duration, status

  // Debounce search query for better performance
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Memoized filtered and sorted projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (categoryFilter !== "All") {
      filtered = filtered.filter(
        (project) => project.category === categoryFilter
      );
    }

    // Filter by technology
    if (technologyFilter !== "All") {
      filtered = filtered.filter((project) =>
        project.technologies.includes(technologyFilter)
      );
    }

    // Filter by search query (using debounced value)
    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(query)
          )
      );
    }

    // Sort projects
    switch (sortBy) {
      case "title":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "duration":
        filtered.sort((a, b) => {
          const getDurationMonths = (duration) => {
            const match = duration.match(/(\d+)/);
            return match ? parseInt(match[1]) : 0;
          };
          return getDurationMonths(b.duration) - getDurationMonths(a.duration);
        });
        break;
      case "status":
        filtered.sort((a, b) => {
          const statusOrder = { "In Development": 0, Completed: 1 };
          return statusOrder[a.status] - statusOrder[b.status];
        });
        break;
      case "featured":
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return filtered;
  }, [categoryFilter, technologyFilter, debouncedSearchQuery, sortBy]);

  const clearFilters = () => {
    setCategoryFilter("All");
    setTechnologyFilter("All");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div
      className={`container mx-auto p-4 sm:p-6 lg:p-8 ${classes.bg} min-h-screen transition-colors duration-300`}
    >
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}
        >
          My Portfolio
        </h1>
        <p
          className={`text-lg sm:text-xl ${classes.textMuted} max-w-3xl mx-auto px-4`}
        >
          Explore my projects showcasing full-stack development expertise with
          React.js, Python, and modern web technologies.
        </p>
        <div className={`mt-4 sm:mt-6 ${classes.textLight}`}>
          <span className="text-purple-600 font-semibold">
            {filteredProjects.length}
          </span>{" "}
          projects found
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-3 pl-12 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none focus:ring-1 text-sm sm:text-base transition-colors duration-300`}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className={`h-4 w-4 sm:h-5 sm:w-5 ${classes.textLight}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 items-center justify-center w-full">
            <span
              className={`${classes.textLight} text-xs sm:text-sm font-medium`}
            >
              Category:
            </span>
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 touch-manipulation ${
                  categoryFilter === category
                    ? "bg-primary text-white shadow-lg"
                    : `${classes.buttonSecondary} hover:bg-purple-100 hover:text-purple-700`
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 items-center">
          <span
            className={`${classes.textLight} text-xs sm:text-sm font-medium`}
          >
            Technology:
          </span>
          <select
            value={technologyFilter}
            onChange={(e) => setTechnologyFilter(e.target.value)}
            className={`px-3 sm:px-4 py-2 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none text-xs sm:text-sm transition-colors duration-300`}
          >
            <option value="All">All Technologies</option>
            {allTechnologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>

          {/* Sort Options */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-3 sm:px-4 py-2 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none text-xs sm:text-sm transition-colors duration-300`}
          >
            <option value="featured">Featured First</option>
            <option value="title">Alphabetical</option>
            <option value="duration">By Duration</option>
            <option value="status">By Status</option>
          </select>

          {/* Clear Filters Button */}
          {(categoryFilter !== "All" ||
            technologyFilter !== "All" ||
            debouncedSearchQuery ||
            sortBy !== "featured") && (
            <button
              onClick={clearFilters}
              className="px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300 touch-manipulation"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 sm:py-20">
          <div className="text-4xl sm:text-6xl mb-4">🔍</div>
          <h3
            className={`text-xl sm:text-2xl font-bold mb-2 ${classes.textSecondary}`}
          >
            No projects found
          </h3>
          <p
            className={`${classes.textLight} mb-4 sm:mb-6 text-sm sm:text-base`}
          >
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={clearFilters}
            className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base touch-manipulation"
          >
            Show All Projects
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${classes.cardBg} rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${classes.border} ${classes.cardHover} group card-hover touch-manipulation`}
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={project.image || "/api/placeholder/400/300"}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholder={
                    <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-700 animate-pulse flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                          </svg>
                        </div>
                        <p className="text-xs">Loading...</p>
                      </div>
                    </div>
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project Status Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold border border-purple-500/30">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-bold ${classes.text}`}
                  >
                    {project.title}
                  </h3>
                  <span className={`text-xs sm:text-sm ${classes.textLight}`}>
                    {project.duration}
                  </span>
                </div>

                <p
                  className={`${classes.textSecondary} mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span
                      className={`${classes.textLight} text-xs sm:text-sm px-2 sm:px-3 py-1`}
                    >
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="bg-primary text-white px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg text-xs sm:text-sm text-center touch-manipulation"
                  >
                    View Case Study
                  </Link>
                  <div className="flex space-x-3 justify-center sm:justify-end">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${classes.textLight} hover:text-purple-600 transition-colors duration-300 text-sm touch-manipulation`}
                        title="Live Demo"
                      >
                        🔗
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${classes.textLight} hover:text-purple-600 transition-colors duration-300 text-sm touch-manipulation`}
                        title="GitHub Repository"
                      >
                        📁
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
