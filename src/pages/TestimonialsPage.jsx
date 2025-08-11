import React, { useState } from "react";
import testimonials from "../data/testimonials";
import { professionalMetrics } from "../data/experience";
import { useTheme } from "../contexts/ThemeContext";

const TestimonialsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const { classes } = useTheme();

  // Get unique technologies and projects for filtering
  const allTechnologies = [
    ...new Set(testimonials.flatMap((t) => t.technologies || [])),
  ];
  const allProjects = [...new Set(testimonials.map((t) => t.project))];

  // Filter testimonials based on selected filter
  const filteredTestimonials = testimonials.filter((testimonial) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "recent") return testimonial.date === "2024";
    if (allTechnologies.includes(selectedFilter)) {
      return testimonial.technologies?.includes(selectedFilter);
    }
    if (allProjects.includes(selectedFilter)) {
      return testimonial.project === selectedFilter;
    }
    return true;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <div
      className={`min-h-screen ${classes.bg} transition-colors duration-300`}
    >
      {/* Hero Section */}
      <div
        className={`${classes.cardBg} shadow-sm transition-colors duration-300`}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1
              className={`text-4xl md:text-5xl font-bold ${classes.text} mb-4`}
            >
              Client Testimonials
            </h1>
            <p
              className={`text-xl ${classes.textMuted} mb-8 max-w-3xl mx-auto`}
            >
              What clients and colleagues say about working with me on React.js
              and Python projects
            </p>

            {/* Professional Credibility Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {testimonials.length}
                </div>
                <div className={`${classes.textMuted} text-sm`}>
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {averageRating.toFixed(1)}
                </div>
                <div className={`${classes.textMuted} text-sm`}>
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {professionalMetrics.clientSatisfaction}%
                </div>
                <div className={`${classes.textMuted} text-sm`}>
                  Satisfaction Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {professionalMetrics.projectsCompleted}
                </div>
                <div className={`${classes.textMuted} text-sm`}>
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Filter Section */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold ${classes.text} mb-6`}>
            Filter Testimonials
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === "all"
                  ? "bg-purple-600 text-white"
                  : `${classes.cardBg} ${classes.textSecondary} ${classes.border} ${classes.hover}`
              }`}
            >
              All Testimonials
            </button>
            <button
              onClick={() => setSelectedFilter("recent")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === "recent"
                  ? "bg-purple-600 text-white"
                  : `${classes.cardBg} ${classes.textSecondary} ${classes.border} ${classes.hover}`
              }`}
            >
              Recent (2024)
            </button>

            {/* Technology Filters */}
            {allTechnologies.slice(0, 4).map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedFilter(tech)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === tech
                    ? "bg-purple-600 text-white"
                    : `${classes.cardBg} ${classes.textSecondary} ${classes.border} ${classes.hover}`
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${classes.cardBg} rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer ${classes.border}`}
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex mr-3">
                  {renderStars(testimonial.rating)}
                </div>
                <span className={`${classes.textMuted} text-sm`}>
                  {testimonial.rating}/5 stars
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote
                className={`${classes.textSecondary} mb-6 leading-relaxed`}
              >
                "{testimonial.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <span className="text-purple-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className={`font-bold ${classes.text}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`${classes.textMuted} text-sm`}>
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className={`border-t ${classes.borderLight} pt-4`}>
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-semibold ${classes.text}`}>
                    Project:
                  </span>
                  <span className="text-purple-600 font-medium">
                    {testimonial.project}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-semibold ${classes.text}`}>Year:</span>
                  <span className={classes.textSecondary}>
                    {testimonial.date}
                  </span>
                </div>

                {/* Technologies Used */}
                {testimonial.technologies && (
                  <div>
                    <span
                      className={`font-semibold ${classes.text} block mb-2`}
                    >
                      Technologies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 rounded text-sm border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Professional References Section */}
        <section
          className={`${classes.cardBg} rounded-xl shadow-lg p-8 mb-12 transition-colors duration-300`}
        >
          <h2 className={`text-2xl font-bold ${classes.text} mb-6`}>
            Professional References
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className={`font-bold ${classes.text} mb-2`}>
                ESSPL Team Lead
              </h3>
              <p className={`${classes.textMuted} mb-3`}>
                "Exceptional technical skills and leadership qualities.
                Consistently delivers high-quality code and mentors junior
                developers effectively."
              </p>
              <div className={`text-sm ${classes.textLight}`}>
                Available upon request for professional reference
              </div>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className={`font-bold ${classes.text} mb-2`}>
                Senior Developer Colleague
              </h3>
              <p className={`${classes.textMuted} mb-3`}>
                "Great collaborator with strong problem-solving skills. Always
                willing to help team members and contributes innovative
                solutions to complex challenges."
              </p>
              <div className={`text-sm ${classes.textLight}`}>
                Available upon request for professional reference
              </div>
            </div>
          </div>
        </section>

        {/* LinkedIn Recommendations Section */}
        <section
          className={`${classes.cardBg} rounded-xl shadow-lg p-8 mb-12 transition-colors duration-300`}
        >
          <h2 className={`text-2xl font-bold ${classes.text} mb-6`}>
            LinkedIn Recommendations
          </h2>
          <div className="space-y-6">
            <div
              className={`${classes.border} rounded-lg p-6 transition-colors duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <span className="text-blue-600 font-bold">LI</span>
                </div>
                <div>
                  <h4 className={`font-bold ${classes.text}`}>
                    Professional Colleague
                  </h4>
                  <p className={`${classes.textMuted} text-sm`}>
                    Full-Stack Developer at ESSPL
                  </p>
                </div>
              </div>
              <blockquote
                className={`${classes.textSecondary} leading-relaxed`}
              >
                "I had the pleasure of working alongside this talented developer
                on multiple projects. Their expertise in React.js and Python is
                exceptional, and they consistently deliver clean, efficient
                code. A true professional who I would highly recommend for any
                full-stack development role."
              </blockquote>
            </div>

            <div
              className={`${classes.border} rounded-lg p-6 transition-colors duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                  <span className="text-blue-600 font-bold">LI</span>
                </div>
                <div>
                  <h4 className={`font-bold ${classes.text}`}>
                    Project Manager
                  </h4>
                  <p className={`${classes.textMuted} text-sm`}>
                    Technical Project Manager
                  </p>
                </div>
              </div>
              <blockquote
                className={`${classes.textSecondary} leading-relaxed`}
              >
                "Excellent communication skills and technical expertise. Always
                meets deadlines and provides clear updates on project progress.
                Their ability to translate complex technical concepts into
                understandable terms is invaluable."
              </blockquote>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span className="mr-2">💼</span>
              View Full LinkedIn Profile
            </a>
          </div>
        </section>

        {/* Professional Credibility Indicators */}
        <section
          className={`${classes.cardBg} rounded-xl shadow-lg p-8 transition-colors duration-300`}
        >
          <h2 className={`text-2xl font-bold ${classes.text} mb-6`}>
            Professional Credibility
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className={`font-bold ${classes.text} mb-2`}>
                Verified Skills
              </h3>
              <p className={`${classes.textMuted} text-sm`}>
                All technical skills verified through successful project
                deliveries and client feedback
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className={`font-bold ${classes.text} mb-2`}>
                Quality Assurance
              </h3>
              <p className={`${classes.textMuted} text-sm`}>
                Consistent high-quality deliveries with{" "}
                {professionalMetrics.clientSatisfaction}% client satisfaction
                rate
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className={`font-bold ${classes.text} mb-2`}>
                Reliable Delivery
              </h3>
              <p className={`${classes.textMuted} text-sm`}>
                {professionalMetrics.onTimeDelivery}% on-time delivery rate with
                professional communication throughout
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className={`${classes.cardBg} rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300`}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className={`text-2xl font-bold ${classes.text}`}>
                  Detailed Testimonial
                </h3>
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className={`${classes.textLight} hover:${classes.textMuted} text-2xl`}
                >
                  ×
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {renderStars(selectedTestimonial.rating)}
                </div>
                <span className={classes.textMuted}>
                  {selectedTestimonial.rating}/5 stars
                </span>
              </div>

              {/* Full Testimonial */}
              <blockquote
                className={`text-lg ${classes.textSecondary} mb-8 leading-relaxed border-l-4 border-purple-600 pl-6`}
              >
                "{selectedTestimonial.testimonial}"
              </blockquote>

              {/* Client Details */}
              <div
                className={`${classes.bg} rounded-lg p-6 mb-6 transition-colors duration-300`}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className={`font-bold ${classes.text} mb-1`}>
                      {selectedTestimonial.name}
                    </h4>
                    <p className={`${classes.textMuted} mb-2`}>
                      {selectedTestimonial.position}
                    </p>
                    <p className="text-purple-600 font-semibold">
                      {selectedTestimonial.company}
                    </p>
                  </div>
                  <div>
                    <div className="mb-2">
                      <span className={`font-semibold ${classes.text}`}>
                        Project:{" "}
                      </span>
                      <span className={classes.textSecondary}>
                        {selectedTestimonial.project}
                      </span>
                    </div>
                    <div>
                      <span className={`font-semibold ${classes.text}`}>
                        Year:{" "}
                      </span>
                      <span className={classes.textSecondary}>
                        {selectedTestimonial.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              {selectedTestimonial.technologies && (
                <div>
                  <h5 className={`font-semibold ${classes.text} mb-3`}>
                    Technologies Used in Project
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedTestimonial.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 rounded-lg border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;
