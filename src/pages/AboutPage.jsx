import {
  experience,
  professionalSummary,
  careerMilestones,
  professionalMetrics,
} from "../data/experience";
import { skillCategories } from "../data/skills";
import { primaryContacts } from "../data/social";
import { useTheme } from "../contexts/ThemeContext";

const AboutPage = () => {
  const currentRole = experience.find((exp) => exp.current);
  const { classes } = useTheme();

  return (
    <div
      className={`container mx-auto p-8 ${classes.bg} min-h-screen transition-colors duration-300`}
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p
          className={`text-xl md:text-2xl ${classes.textMuted} max-w-4xl mx-auto leading-relaxed`}
        >
          Passionate Full-Stack Developer crafting modern web experiences with
          expertise in React.js and Python
        </p>
      </div>

      {/* Professional Summary Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-20">
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src="/images/profile.jpg"
              alt="Suraj Kumar Sah - Full Stack Developer at ESSPL"
              className="rounded-2xl w-80 h-80 object-cover shadow-2xl border-4 border-purple-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="font-bold">Available for Freelance</span>
            </div>
          </div>
        </div>

        <div className="flex-grow text-center lg:text-left">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${classes.text}`}>
            {professionalSummary.title}
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
            <span className="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-500/30 transition-colors duration-300">
              {professionalSummary.experience} Experience
            </span>
            <span className="bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-500/30 transition-colors duration-300">
              {professionalSummary.specialization}
            </span>
          </div>

          <p
            className={`text-lg md:text-xl leading-relaxed mb-6 ${classes.textSecondary}`}
          >
            I'm a passionate{" "}
            <span className="font-bold text-purple-600">
              Full-Stack Developer
            </span>{" "}
            currently working at
            <span className="font-bold text-purple-600"> ESSPL</span>,
            specializing in creating scalable web applications that make a real
            impact. With expertise in{" "}
            <span className="font-bold text-purple-600">
              React.js, Python, and FastAPI
            </span>
            , I help startups and growing businesses transform their ideas into
            powerful digital solutions.
          </p>

          <p
            className={`text-lg leading-relaxed mb-8 ${classes.textSecondary}`}
          >
            My approach combines technical excellence with clear communication
            and user-centered design. I believe in writing clean, maintainable
            code and building applications that not only work flawlessly but
            also provide exceptional user experiences. Currently leading
            projects at ESSPL while remaining
            <span className="font-bold text-green-600">
              {" "}
              available for freelance opportunities
            </span>
            .
          </p>

          {/* Professional Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div
              className={`${classes.cardBg} p-4 rounded-xl text-center ${classes.border} shadow-sm transition-colors duration-300`}
            >
              <div className="text-2xl font-bold text-purple-600">
                {professionalMetrics.projectsCompleted}+
              </div>
              <div className={`text-sm ${classes.textMuted}`}>
                Projects Completed
              </div>
            </div>
            <div
              className={`${classes.cardBg} p-4 rounded-xl text-center ${classes.border} shadow-sm transition-colors duration-300`}
            >
              <div className="text-2xl font-bold text-green-600">
                {professionalMetrics.clientSatisfaction}%
              </div>
              <div className={`text-sm ${classes.textMuted}`}>
                Client Satisfaction
              </div>
            </div>
            <div
              className={`${classes.cardBg} p-4 rounded-xl text-center ${classes.border} shadow-sm transition-colors duration-300`}
            >
              <div className="text-2xl font-bold text-blue-600">
                {professionalMetrics.yearsExperience}+
              </div>
              <div className={`text-sm ${classes.textMuted}`}>
                Years Experience
              </div>
            </div>
            <div
              className={`${classes.cardBg} p-4 rounded-xl text-center ${classes.border} shadow-sm transition-colors duration-300`}
            >
              <div className="text-2xl font-bold text-orange-600">
                {professionalMetrics.clientsServed}+
              </div>
              <div className={`text-sm ${classes.textMuted}`}>
                Clients Served
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div
              className={`${classes.cardBg} p-4 rounded-lg ${classes.border} shadow-sm transition-colors duration-300`}
            >
              <h4 className="font-bold text-purple-600 mb-1">Current Role</h4>
              <p className={classes.textSecondary}>
                {currentRole?.position} at {currentRole?.company}
              </p>
            </div>
            <div
              className={`${classes.cardBg} p-4 rounded-lg ${classes.border} shadow-sm transition-colors duration-300`}
            >
              <h4 className="font-bold text-purple-600 mb-1">Availability</h4>
              <p className={classes.textSecondary}>
                Open for Freelance Projects
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-start space-x-4">
            {primaryContacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contact.color} ${contact.hoverColor} transition-all duration-300 transform hover:scale-110 p-3 rounded-full ${contact.bgColor} hover:shadow-lg`}
                title={contact.name}
              >
                <span className="text-2xl">{contact.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Career Journey Section */}
      <div className="mb-20">
        <h2 className={`text-4xl font-bold text-center mb-12 ${classes.text}`}>
          Career Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          {careerMilestones.map((milestone, index) => (
            <div
              key={index}
              className={`${classes.cardBg} p-8 rounded-2xl shadow-lg ${classes.border} mb-8 ${classes.cardHover} transition-colors duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-bold text-center">
                    {milestone.period}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-purple-600 mb-3">
                    {milestone.title}
                  </h3>
                  <p
                    className={`${classes.textSecondary} mb-4 leading-relaxed`}
                  >
                    {milestone.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {milestone.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="text-green-600 font-semibold">
                    🏆 {milestone.achievement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Overview */}
      <div className="mb-20">
        <h2 className={`text-4xl font-bold text-center mb-12 ${classes.text}`}>
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${category.color} p-8 rounded-2xl shadow-xl border-2 ${classes.cardHover} transition-colors duration-300`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`text-2xl font-bold mb-4 ${category.textColor}`}>
                  {category.title}
                </h3>
                <p className={`${classes.textMuted} mb-6`}>
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.skills.slice(0, 3).map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-semibold ${classes.text}`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm ${classes.textMuted}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`w-full ${classes.border} rounded-full h-2 bg-gray-200 dark:bg-gray-700`}
                      >
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Role Highlights */}
      <div className="mb-20">
        <h2 className={`text-4xl font-bold text-center mb-12 ${classes.text}`}>
          Current Role at ESSPL
        </h2>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-8 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-500/30 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-6">
                Key Responsibilities
              </h3>
              <ul className="space-y-3">
                {currentRole?.responsibilities
                  .slice(0, 6)
                  .map((responsibility, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 ${classes.textSecondary}`}
                    >
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-6">
                Major Achievements
              </h3>
              <ul className="space-y-3">
                {currentRole?.achievements
                  .slice(0, 6)
                  .map((achievement, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 ${classes.textSecondary}`}
                    >
                      <span className="text-yellow-600 mt-1">🏆</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-12 rounded-2xl border border-purple-200 dark:border-purple-500/30 transition-colors duration-300">
        <h2 className={`text-4xl font-bold mb-6 ${classes.text}`}>
          Let's Work Together
        </h2>
        <p className={`text-xl ${classes.textMuted} mb-8 max-w-3xl mx-auto`}>
          Ready to bring your ideas to life? I'm available for freelance
          projects and always excited to work on innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
          <a
            href="/portfolio"
            className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="/resume"
            className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
