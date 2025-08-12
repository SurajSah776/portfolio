import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
  experience,
  timeline,
  professionalMetrics,
  currentRoleHighlights,
  professionalDevelopment,
} from "../data/experience";
import { skillProgression } from "../data/skills";

const ExperiencePage = () => {
  const { classes } = useTheme();
  const currentRole = experience.find((exp) => exp.current);
  const sortedTimeline = [...timeline].reverse(); // Most recent first

  return (
    <div
      className={`min-h-screen ${classes.bg} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p
            className={`text-xl md:text-2xl ${classes.textMuted} max-w-4xl mx-auto leading-relaxed`}
          >
            A journey through my professional growth, achievements, and the
            evolution of my technical expertise
          </p>
        </div>

        {/* Professional Metrics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          <div
            className={`${classes.cardBg} p-6 rounded-xl text-center ${classes.border} shadow-sm`}
          >
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {professionalMetrics.projectsCompleted}
            </div>
            <div className={`text-sm ${classes.textLight}`}>Projects</div>
          </div>

          {/* <div
            className={`${classes.cardBg} p-6 rounded-xl text-center ${classes.border} shadow-sm`}
          >
            <div className="text-3xl font-bold text-green-600 mb-2">
              {professionalMetrics.clientSatisfaction}%
            </div>
            <div className={`text-sm ${classes.textLight}`}>Satisfaction</div>
          </div> */}

          <div
            className={`${classes.cardBg} p-6 rounded-xl text-center ${classes.border} shadow-sm`}
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {professionalMetrics.yearsExperience}
            </div>
            <div className={`text-sm ${classes.textLight}`}>Years Exp.</div>
          </div>
          <div
            className={`${classes.cardBg} p-6 rounded-xl text-center ${classes.border} shadow-sm`}
          >
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {professionalMetrics.clientsServed}
            </div>
            <div className={`text-sm ${classes.textLight}`}>Clients</div>
          </div>
          <div
            className={`${classes.cardBg} p-6 rounded-xl text-center ${classes.border} shadow-sm`}
          >
            <div className="text-3xl font-bold text-red-600 mb-2">
              {professionalMetrics.teamMembersLed}
            </div>
            <div className={`text-sm ${classes.textLight}`}>Team Led</div>
          </div>
          <div
            className={`${classes.cardBg} p-6 rounded-xl text-center ${classes.border} shadow-sm`}
          >
            <div className="text-3xl font-bold text-cyan-600 mb-2">
              {professionalMetrics.onTimeDelivery}%
            </div>
            <div className={`text-sm ${classes.textLight}`}>On Time</div>
          </div>
        </div>

        {/* Current Role Highlight */}
        <div className="mb-20">
          <h2
            className={`text-4xl font-bold text-center mb-12 ${classes.text}`}
          >
            Current Role
          </h2>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/50 dark:to-blue-900/50 p-8 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-500/30 transition-colors duration-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">
                {currentRole?.position}
              </h3>
              <p className="text-xl text-blue-600 mb-2">
                {currentRole?.company}
              </p>
              <p className={classes.textSecondary}>
                {currentRole?.duration} • {currentRole?.location}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-purple-600 mb-4">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {currentRoleHighlights.keyResponsibilities.map(
                    (responsibility, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-2 ${classes.textSecondary}`}
                      >
                        <span className="text-green-600 mt-1">•</span>
                        <span className="text-sm">{responsibility}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-purple-600 mb-4">
                  Major Projects
                </h4>
                <ul className="space-y-2">
                  {currentRoleHighlights.majorProjects.map((project, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-2 ${classes.textSecondary}`}
                    >
                      <span className="text-blue-600 mt-1">🚀</span>
                      <span className="text-sm">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-purple-600 mb-4">
                  Technical Leadership
                </h4>
                <ul className="space-y-2">
                  {currentRoleHighlights.technicalLeadership.map(
                    (leadership, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-2 ${classes.textSecondary}`}
                      >
                        <span className="text-yellow-600 mt-1">⭐</span>
                        <span className="text-sm">{leadership}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Timeline */}
        <div className="mb-20">
          <h2
            className={`text-4xl font-bold text-center mb-12 ${classes.text}`}
          >
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className={`${classes.cardBg} rounded-2xl shadow-lg ${classes.border} overflow-hidden ${classes.cardHover} transition-colors duration-300`}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`px-4 py-2 rounded-lg font-bold text-center ${
                          exp.current
                            ? "bg-green-500 text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {exp.duration}
                      </div>
                      <div className="text-center mt-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            exp.type === "Full-time"
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-purple-500/20 text-purple-300"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-purple-600 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-xl text-blue-600 mb-2">
                            {exp.company}
                          </p>
                          <p className={classes.textLight}>
                            {exp.location} • {exp.industry}
                          </p>
                        </div>
                        {exp.current && (
                          <div
                            className={`${classes.success} px-3 py-1 rounded-full text-sm font-semibold`}
                          >
                            Current Position
                          </div>
                        )}
                      </div>

                      <p
                        className={`${classes.textSecondary} mb-6 leading-relaxed`}
                      >
                        {exp.description}
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold text-purple-600 mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements
                              .slice(0, 4)
                              .map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className={`flex items-start gap-2 ${classes.textSecondary}`}
                                >
                                  <span className="text-green-600 mt-1">✓</span>
                                  <span className="text-sm">{achievement}</span>
                                </li>
                              ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-purple-600 mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {exp.keyProjects && (
                        <div>
                          <h4 className="text-lg font-bold text-purple-600 mb-3">
                            Notable Projects
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {exp.keyProjects.map((project, idx) => (
                              <div
                                key={idx}
                                className={`${classes.cardBg} p-4 rounded-lg ${classes.border} shadow-sm`}
                              >
                                <h5 className="font-bold text-blue-600 mb-1">
                                  {project.name}
                                </h5>
                                <p
                                  className={`text-sm ${classes.textLight} mb-2`}
                                >
                                  {project.role}
                                </p>
                                <p
                                  className={`text-sm ${classes.textSecondary} mb-2`}
                                >
                                  {project.impact}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 px-2 py-1 rounded text-xs border border-blue-200 dark:border-blue-500/30 transition-colors duration-300"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline Visualization */}
        <div className="mb-20">
          <h2
            className={`text-4xl font-bold text-center mb-12 ${classes.text}`}
          >
            Career Timeline
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            <div className="space-y-8">
              {sortedTimeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-grow ${classes.cardBg} p-6 rounded-xl shadow-lg ${classes.border} ${classes.cardHover} transition-colors duration-300`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-purple-600">
                        {item.title}
                      </h3>
                      <span className={`text-sm ${classes.textLight}`}>
                        {item.month} {item.year}
                      </span>
                    </div>
                    <p className={`${classes.textSecondary} mb-2`}>
                      {item.description}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === "career"
                          ? classes.success
                          : item.type === "skill"
                          ? classes.info
                          : item.type === "project"
                          ? "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-500/30"
                          : item.type === "achievement"
                          ? classes.warning
                          : `${classes.buttonSecondary}`
                      } border transition-colors duration-300`}
                    >
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Evolution */}
        <div className="mb-20">
          <h2
            className={`text-4xl font-bold text-center mb-12 ${classes.text}`}
          >
            Skills Evolution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillProgression.map((yearData, index) => (
              <div
                key={index}
                className={`${classes.cardBg} p-6 rounded-xl shadow-lg ${classes.border} ${classes.cardHover} transition-colors duration-300`}
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">
                    {yearData.year}
                  </h3>
                  <p className={`text-sm ${classes.textLight}`}>
                    {yearData.milestone}
                  </p>
                </div>
                <div className="space-y-2">
                  {yearData.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 px-3 py-2 rounded-lg text-center text-sm border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Development */}
        <div className="mb-20">
          <h2
            className={`text-4xl font-bold text-center mb-12 ${classes.text}`}
          >
            Professional Development
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {professionalDevelopment.map((category, index) => (
              <div
                key={index}
                className={`${classes.cardBg} p-8 rounded-2xl shadow-lg ${classes.border} ${classes.cardHover} transition-colors duration-300`}
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-6 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 ${classes.textSecondary}`}
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-12 rounded-2xl border border-purple-200 dark:border-purple-500/30 transition-colors duration-300">
          <h2 className={`text-4xl font-bold mb-6 ${classes.text}`}>
            Ready for New Challenges
          </h2>
          <p className={`text-xl ${classes.textMuted} mb-8 max-w-3xl mx-auto`}>
            With a proven track record of successful project delivery and
            continuous learning, I'm excited to take on new challenges and
            contribute to innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discuss Opportunities
            </a>
            <a
              href="/portfolio"
              className="border-2 border-purple-500 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
