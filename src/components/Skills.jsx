import React from "react";
import { skillCategories } from "../data/skills";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { classes } = useTheme();

  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 ${classes.cardBg} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl ${classes.textMuted} max-w-3xl mx-auto px-4`}
          >
            Expertise in modern web technologies with a focus on full-stack
            development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`card-hover rounded-xl p-4 sm:p-6 border-2 ${category.color} group touch-manipulation`}
            >
              {/* Category Header */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl">{category.icon}</span>
                </div>
                <h3
                  className={`text-lg sm:text-xl font-bold mb-2 ${category.textColor}`}
                >
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-2 sm:space-y-3">
                {category.skills.slice(0, 3).map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-between ${classes.cardBg} rounded-lg p-2 sm:p-3 shadow-sm hover:shadow-md transition-all duration-300 touch-manipulation ${classes.border}`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <span className="text-base sm:text-lg flex-shrink-0">
                        {skill.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`font-medium ${classes.text} text-xs sm:text-sm truncate`}
                        >
                          {skill.name}
                        </p>
                        <p className={`text-xs ${classes.textLight} truncate`}>
                          {skill.experience}
                        </p>
                      </div>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                            i < Math.floor(skill.level / 20)
                              ? "bg-purple-500"
                              : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                {/* Show more indicator */}
                {category.skills.length > 3 && (
                  <div className="text-center pt-1 sm:pt-2">
                    <span className="text-xs text-gray-500 font-medium">
                      +{category.skills.length - 3} more skills
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Core Technologies Highlight */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-4 sm:p-6 lg:p-8 transition-colors duration-300">
          <div className="text-center mb-6 sm:mb-8">
            <h3
              className={`text-xl sm:text-2xl font-bold ${classes.text} mb-2`}
            >
              Core Technology Stack
            </h3>
            <p className={`text-sm sm:text-base ${classes.textMuted}`}>
              Primary technologies I use for full-stack development
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-3 sm:gap-4">
            {[
              { name: "React.js", icon: "⚛️", color: "bg-blue-500" },
              { name: "Python", icon: "🐍", color: "bg-green-500" },
              { name: "FastAPI", icon: "⚡", color: "bg-emerald-500" },
              { name: "SQL Server", icon: "🗄️", color: "bg-red-500" },
              { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-500" },
              { name: "JavaScript", icon: "🟨", color: "bg-yellow-500" },
            ].map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-2 sm:gap-3 ${classes.cardBg} rounded-xl px-3 sm:px-4 lg:px-6 py-3 sm:py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 touch-manipulation`}
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 ${tech.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-lg sm:text-xl">{tech.icon}</span>
                </div>
                <span
                  className={`font-semibold ${classes.text} text-sm sm:text-base truncate`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
              15+
            </div>
            <div className={`text-xs sm:text-sm ${classes.textMuted}`}>
              Technologies
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
              4+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
              4
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Major Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
              100%
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
