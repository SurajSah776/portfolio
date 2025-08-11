import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const AchievementShowcase = () => {
  const { classes } = useTheme();

  const achievements = [
    {
      id: 1,
      title: "Projects Completed",
      value: "15+",
      description: "Successfully delivered full-stack projects",
      icon: "🚀",
      color: "from-purple-500 to-blue-500",
    },
    {
      id: 2,
      title: "Lines of Code",
      value: "50K+",
      description: "Clean, maintainable code written",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Technologies Mastered",
      value: "10+",
      description: "Modern web development technologies",
      icon: "⚡",
      color: "from-cyan-500 to-green-500",
    },
    {
      id: 4,
      title: "Client Satisfaction",
      value: "100%",
      description: "Positive feedback from all projects",
      icon: "⭐",
      color: "from-green-500 to-yellow-500",
    },
    {
      id: 5,
      title: "Response Time",
      value: "<24h",
      description: "Average response to client inquiries",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      title: "On-Time Delivery",
      value: "95%",
      description: "Projects delivered on schedule",
      icon: "🎯",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className={`py-16 ${classes.bg} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${classes.text} mb-4`}>
            Professional Achievements
          </h2>
          <p className={`text-xl ${classes.textMuted} max-w-3xl mx-auto`}>
            Delivering excellence in Full-Stack development with measurable
            results and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="relative group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className={`${classes.cardBg} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${classes.border} group-hover:border-purple-200 dark:group-hover:border-purple-500 transform hover:-translate-y-2`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <div
                    className={`text-4xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                  >
                    {achievement.value}
                  </div>
                  <h3 className={`text-xl font-semibold ${classes.text} mb-2`}>
                    {achievement.title}
                  </h3>
                  <p className={classes.textMuted}>{achievement.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${achievement.color}`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className={`text-lg ${classes.textMuted} mb-6`}>
            Ready to add your project to these achievements?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AchievementShowcase;
