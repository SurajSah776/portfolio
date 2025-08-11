import React, { useState } from "react";
import {
  certifications,
  education,
  continuousLearning,
  awards,
} from "../data/certifications";
import { useTheme } from "../contexts/ThemeContext";

const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCertification, setSelectedCertification] = useState(null);
  const { classes } = useTheme();

  // Filter certifications based on selected category
  const filteredCertifications = certifications.filter((cert) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "active") return cert.status === "active";
    if (selectedCategory === "recent")
      return cert.date === "2023" || cert.date === "2024";
    return cert.type === selectedCategory;
  });

  const handleVerifyCredential = (cert) => {
    if (cert.verificationUrl && cert.verificationUrl !== "#") {
      window.open(cert.verificationUrl, "_blank");
    } else {
      alert(
        `Credential ID: ${cert.credentialId}\nVerification available upon request`
      );
    }
  };

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
              Certifications & Education
            </h1>
            <p
              className={`text-xl ${classes.textMuted} mb-8 max-w-3xl mx-auto`}
            >
              Professional certifications, educational background, and
              continuous learning journey in full-stack development
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {certifications.length}
                </div>
                <div className={`${classes.textMuted} text-sm`}>
                  Certifications
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {education.length}
                </div>
                <div className={`${classes.textMuted} text-sm`}>Degrees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {continuousLearning.length}
                </div>
                <div className={`${classes.textMuted} text-sm`}>
                  Ongoing Courses
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {awards.length}
                </div>
                <div className={`${classes.textMuted} text-sm`}>Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Education Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold ${classes.text} mb-8`}>
            Educational Background
          </h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className={`${classes.cardBg} rounded-xl shadow-lg p-8 transition-colors duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex-grow">
                    <h3 className={`text-2xl font-bold ${classes.text} mb-2`}>
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {edu.field}
                    </p>
                    <p className={`${classes.textMuted} mb-2`}>
                      {edu.institution} • {edu.location}
                    </p>
                    <div
                      className={`flex items-center space-x-4 ${classes.textMuted}`}
                    >
                      <span>
                        {edu.startYear} - {edu.endYear}
                      </span>
                      <span className="bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                        Grade: {edu.grade}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-2xl">🎓</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className={`font-bold ${classes.text} mb-4`}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className={classes.textSecondary}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`font-bold ${classes.text} mb-4`}>
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 rounded-lg text-sm border border-blue-200 dark:border-blue-500/30 transition-colors duration-300"
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
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <h2 className={`text-3xl font-bold ${classes.text} mb-4 md:mb-0`}>
              Professional Certifications
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-purple-600 text-white"
                    : `${classes.cardBg} ${classes.textSecondary} ${classes.border} ${classes.hover}`
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory("active")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "active"
                    ? "bg-purple-600 text-white"
                    : `${classes.cardBg} ${classes.textSecondary} ${classes.border} ${classes.hover}`
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setSelectedCategory("recent")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "recent"
                    ? "bg-purple-600 text-white"
                    : `${classes.cardBg} ${classes.textSecondary} ${classes.border} ${classes.hover}`
                }`}
              >
                Recent
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.id}
                className={`${classes.cardBg} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedCertification(cert)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <h3 className={`text-xl font-bold ${classes.text} mb-2`}>
                      {cert.name}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-2">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className={`${classes.textMuted} text-sm`}>
                      Issued:
                    </span>
                    <span className={`font-medium ${classes.text}`}>
                      {cert.date}
                    </span>
                  </div>
                  {cert.expiry && (
                    <div className="flex justify-between items-center">
                      <span className={`${classes.textMuted} text-sm`}>
                        Expires:
                      </span>
                      <span className={`font-medium ${classes.text}`}>
                        {cert.expiry}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className={`${classes.textMuted} text-sm`}>
                      Status:
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                        cert.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
                      }`}
                    >
                      {cert.status.charAt(0).toUpperCase() +
                        cert.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className={`font-semibold ${classes.text} mb-2`}>
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 rounded text-sm border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span
                        className={`px-2 py-1 ${classes.buttonSecondary} rounded text-sm transition-colors duration-300`}
                      >
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className={`${classes.textMuted} text-sm`}>
                    ID: {cert.credentialId}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVerifyCredential(cert);
                    }}
                    className="text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 font-medium text-sm transition-colors duration-300"
                  >
                    Verify →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold ${classes.text} mb-8`}>
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`${classes.cardBg} rounded-xl shadow-lg p-6 transition-colors duration-300`}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-colors duration-300">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-xl font-bold ${classes.text} mb-1`}>
                      {award.title}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-2">
                      {award.organization}
                    </p>
                    <p className={`${classes.textMuted} text-sm mb-3`}>
                      {award.date}
                    </p>
                  </div>
                </div>
                <p className={`${classes.textSecondary} leading-relaxed`}>
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Continuous Learning Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold ${classes.text} mb-8`}>
            Continuous Learning
          </h2>
          <div
            className={`${classes.cardBg} rounded-xl shadow-lg p-8 transition-colors duration-300`}
          >
            <p className={`${classes.textMuted} mb-6`}>
              Committed to staying current with the latest technologies and best
              practices in full-stack development.
            </p>
            <div className="space-y-4">
              {continuousLearning.map((course, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 ${classes.border} rounded-lg transition-colors duration-300`}
                >
                  <div className="flex-grow">
                    <h4 className={`font-bold ${classes.text} mb-1`}>
                      {course.title}
                    </h4>
                    <p className={`${classes.textMuted} text-sm`}>
                      {course.provider}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`${classes.textMuted} text-sm`}>
                      {course.date}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                        course.status === "completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
                          : course.status === "in-progress"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
                      }`}
                    >
                      {course.status.charAt(0).toUpperCase() +
                        course.status.slice(1).replace("-", " ")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Development Goals */}
        <section>
          <h2 className={`text-3xl font-bold ${classes.text} mb-8`}>
            Professional Development Goals
          </h2>
          <div
            className={`${classes.cardBg} rounded-xl shadow-lg p-8 transition-colors duration-300`}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className={`font-bold ${classes.text} mb-2`}>
                  Technical Excellence
                </h3>
                <p className={`${classes.textMuted} text-sm`}>
                  Continuously improving technical skills in React.js, Python,
                  and emerging technologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className={`font-bold ${classes.text} mb-2`}>
                  Leadership Growth
                </h3>
                <p className={`${classes.textMuted} text-sm`}>
                  Developing leadership and mentoring skills to guide
                  development teams effectively
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className={`font-bold ${classes.text} mb-2`}>
                  Innovation Focus
                </h3>
                <p className={`${classes.textMuted} text-sm`}>
                  Exploring new technologies and methodologies to deliver
                  innovative solutions
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Certification Detail Modal */}
      {selectedCertification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className={`${classes.cardBg} rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300`}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className={`text-2xl font-bold ${classes.text}`}>
                  Certification Details
                </h3>
                <button
                  onClick={() => setSelectedCertification(null)}
                  className={`${classes.textLight} hover:${classes.textMuted} text-2xl`}
                >
                  ×
                </button>
              </div>

              <div className="flex items-start mb-6">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 transition-colors duration-300">
                  <span className="text-3xl">🏆</span>
                </div>
                <div className="flex-grow">
                  <h4 className={`text-xl font-bold ${classes.text} mb-2`}>
                    {selectedCertification.name}
                  </h4>
                  <p className="text-purple-600 font-semibold text-lg mb-2">
                    {selectedCertification.issuer}
                  </p>
                  <div className={`space-y-1 ${classes.textMuted}`}>
                    <p>Issued: {selectedCertification.date}</p>
                    {selectedCertification.expiry && (
                      <p>Expires: {selectedCertification.expiry}</p>
                    )}
                    <p>Credential ID: {selectedCertification.credentialId}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className={`font-bold ${classes.text} mb-3`}>
                  Skills & Competencies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedCertification.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 rounded-lg border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span
                  className={`px-4 py-2 rounded-full font-medium ${
                    selectedCertification.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  Status:{" "}
                  {selectedCertification.status.charAt(0).toUpperCase() +
                    selectedCertification.status.slice(1)}
                </span>
                <button
                  onClick={() => handleVerifyCredential(selectedCertification)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Verify Credential
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsPage;
