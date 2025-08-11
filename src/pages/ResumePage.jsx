import React, { useState } from "react";
import {
  experience,
  timeline,
  professionalMetrics,
  careerMilestones,
  professionalSummary,
} from "../data/experience";
import { skills } from "../data/skills";
import { certifications, education } from "../data/certifications";
import { useTheme } from "../contexts/ThemeContext";

const ResumePage = () => {
  const [printMode, setPrintMode] = useState(false);

  const { classes } = useTheme();

  const handlePrint = () => {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 100);
  };

  const downloadPDF = () => {
    // In a real implementation, this would generate and download a PDF
    alert("PDF download functionality would be implemented here");
  };

  return (
    <div
      className={`min-h-screen ${classes.bg} transition-colors duration-300 ${
        printMode ? "print-mode" : ""
      }`}
    >
      {/* Header Section */}
      <div
        className={`${classes.cardBg} shadow-sm print:shadow-none transition-colors duration-300`}
      >
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className={`text-4xl font-bold ${classes.text} mb-2`}>
                Professional Resume
              </h1>
              <p className={`text-lg ${classes.textMuted}`}>
                {professionalSummary.title} • {professionalSummary.experience}{" "}
                Experience
              </p>
            </div>

            {/* Action Buttons - Hidden in print */}
            <div className="flex gap-4 mt-4 md:mt-0 print:hidden">
              <button
                onClick={handlePrint}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Print Resume
              </button>
              <button
                onClick={downloadPDF}
                className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Professional Summary */}
        <section
          className={`${classes.cardBg} rounded-lg shadow-sm p-8 mb-8 print:shadow-none print:mb-6 transition-colors duration-300`}
        >
          <h2
            className={`text-2xl font-bold ${classes.text} mb-4 border-b-2 border-purple-600 pb-2`}
          >
            Professional Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className={`${classes.textSecondary} leading-relaxed mb-4`}>
                {professionalSummary.specialization} with{" "}
                {professionalSummary.experience} of experience in modern web
                development. Currently serving as {professionalSummary.title},
                specializing in {professionalSummary.currentFocus}.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className={`font-semibold ${classes.text} w-24`}>
                    Location:
                  </span>
                  <span className={classes.textSecondary}>
                    {professionalSummary.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className={`font-semibold ${classes.text} w-24`}>
                    Work Style:
                  </span>
                  <span className={classes.textSecondary}>
                    {professionalSummary.workStyle}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className={`font-semibold ${classes.text} w-24`}>
                    Status:
                  </span>
                  <span className="text-green-600 font-medium">
                    {professionalSummary.availability}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className={`font-semibold ${classes.text} mb-3`}>
                Key Strengths
              </h3>
              <ul className="space-y-1">
                {professionalSummary.keyStrengths.map((strength, index) => (
                  <li
                    key={index}
                    className={`flex items-center ${classes.textSecondary}`}
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section
          className={`${classes.cardBg} rounded-lg shadow-sm p-8 mb-8 print:shadow-none print:mb-6 transition-colors duration-300`}
        >
          <h2
            className={`text-2xl font-bold ${classes.text} mb-6 border-b-2 border-purple-600 pb-2`}
          >
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-purple-600 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className={`text-xl font-bold ${classes.text}`}>
                      {exp.position}
                    </h3>
                    <p className="text-lg text-purple-600 font-semibold">
                      {exp.company}
                    </p>
                    <p className={classes.textMuted}>
                      {exp.location} • {exp.type}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className={`font-semibold ${classes.text}`}>
                      {exp.duration}
                    </p>
                    {exp.current && (
                      <span className="inline-block bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400 px-2 py-1 rounded-full text-sm transition-colors duration-300">
                        Current Position
                      </span>
                    )}
                  </div>
                </div>

                <p className={`${classes.textSecondary} mb-4`}>
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-semibold ${classes.text} mb-2`}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {exp.achievements
                        .slice(0, 4)
                        .map((achievement, index) => (
                          <li
                            key={index}
                            className={`flex items-start ${classes.textSecondary}`}
                          >
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${classes.text} mb-2`}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 8).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 rounded text-sm border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section
          className={`${classes.cardBg} rounded-lg shadow-sm p-8 mb-8 print:shadow-none print:mb-6 transition-colors duration-300`}
        >
          <h2
            className={`text-2xl font-bold ${classes.text} mb-6 border-b-2 border-purple-600 pb-2`}
          >
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className={`font-semibold ${classes.text} mb-3 capitalize`}>
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <span className={`${classes.textSecondary} text-sm`}>
                        {skill.name}
                      </span>
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                          <div
                            className="h-2 bg-purple-600 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs ${classes.textLight}`}>
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section
          className={`${classes.cardBg} rounded-lg shadow-sm p-8 mb-8 print:shadow-none print:mb-6 transition-colors duration-300`}
        >
          <h2
            className={`text-2xl font-bold ${classes.text} mb-6 border-b-2 border-purple-600 pb-2`}
          >
            Education & Certifications
          </h2>

          {/* Education */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold ${classes.text} mb-4`}>
              Education
            </h3>
            {education.map((edu) => (
              <div
                key={edu.id}
                className="border-l-4 border-blue-500 pl-6 mb-6"
              >
                <h4 className={`font-bold ${classes.text}`}>{edu.degree}</h4>
                <p className="text-blue-600 font-semibold">{edu.field}</p>
                <p className={classes.textMuted}>
                  {edu.institution} • {edu.location}
                </p>
                <p className={classes.textMuted}>
                  {edu.startYear} - {edu.endYear} • Grade: {edu.grade}
                </p>

                <div className="mt-3 grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className={`font-semibold ${classes.text} mb-2`}>
                      Key Achievements
                    </h5>
                    <ul className="space-y-1 text-sm">
                      {edu.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className={`flex items-start ${classes.textSecondary}`}
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className={`font-semibold ${classes.text} mb-2`}>
                      Relevant Courses
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {edu.relevantCourses.map((course, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 rounded text-xs border border-blue-200 dark:border-blue-500/30 transition-colors duration-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className={`text-lg font-semibold ${classes.text} mb-4`}>
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`${classes.border} rounded-lg p-4 transition-colors duration-300`}
                >
                  <h4 className={`font-bold ${classes.text} mb-1`}>
                    {cert.name}
                  </h4>
                  <p className="text-purple-600 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`${classes.textMuted} text-sm`}>
                      Issued: {cert.date}
                    </span>
                    {cert.expiry && (
                      <span className={`${classes.textMuted} text-sm`}>
                        Expires: {cert.expiry}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 rounded text-xs border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Metrics */}
        <section
          className={`${classes.cardBg} rounded-lg shadow-sm p-8 mb-8 print:shadow-none print:mb-6 transition-colors duration-300`}
        >
          <h2
            className={`text-2xl font-bold ${classes.text} mb-6 border-b-2 border-purple-600 pb-2`}
          >
            Professional Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {professionalMetrics.projectsCompleted}
              </div>
              <div className={`${classes.textMuted} text-sm`}>
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {professionalMetrics.clientSatisfaction}%
              </div>
              <div className={`${classes.textMuted} text-sm`}>
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {professionalMetrics.yearsExperience}+
              </div>
              <div className={`${classes.textMuted} text-sm`}>
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {professionalMetrics.onTimeDelivery}%
              </div>
              <div className={`${classes.textMuted} text-sm`}>
                On-Time Delivery
              </div>
            </div>
          </div>
        </section>

        {/* Career Milestones */}
        <section
          className={`${classes.cardBg} rounded-lg shadow-sm p-8 print:shadow-none transition-colors duration-300`}
        >
          <h2
            className={`text-2xl font-bold ${classes.text} mb-6 border-b-2 border-purple-600 pb-2`}
          >
            Career Milestones
          </h2>
          <div className="space-y-6">
            {careerMilestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mt-2 mr-4"></div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className={`font-bold ${classes.text}`}>
                      {milestone.title}
                    </h3>
                    <span className="text-purple-600 font-semibold">
                      {milestone.period}
                    </span>
                  </div>
                  <p className={`${classes.textSecondary} mb-3`}>
                    {milestone.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {milestone.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-sm transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-purple-600 font-medium">
                    Achievement: {milestone.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:mb-6 {
            margin-bottom: 1.5rem !important;
          }
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          .print-mode {
            background: white !important;
          }
          .print-mode * {
            color: black !important;
          }
          .print-mode .bg-purple-600 {
            background-color: #7c3aed !important;
          }
          .print-mode .text-purple-600 {
            color: #7c3aed !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;
