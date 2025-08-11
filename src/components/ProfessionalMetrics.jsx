import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ProfessionalMetrics = () => {
  const { classes } = useTheme();
  const metrics = [
    {
      id: 1,
      category: "Communication",
      metrics: [
        {
          label: "Response Time",
          value: "< 24 hours",
          description: "Average response to client inquiries",
          icon: "⚡",
          status: "excellent",
        },
        {
          label: "Availability",
          value: "95%",
          description: "Available for project discussions",
          icon: "📅",
          status: "excellent",
        },
      ],
    },
    {
      id: 2,
      category: "Project Delivery",
      metrics: [
        {
          label: "Success Rate",
          value: "100%",
          description: "Projects completed successfully",
          icon: "✅",
          status: "excellent",
        },
        {
          label: "On-Time Delivery",
          value: "95%",
          description: "Projects delivered on schedule",
          icon: "🎯",
          status: "excellent",
        },
      ],
    },
    {
      id: 3,
      category: "Client Satisfaction",
      metrics: [
        {
          label: "Client Rating",
          value: "5.0/5.0",
          description: "Average client satisfaction rating",
          icon: "⭐",
          status: "excellent",
        },
        {
          label: "Repeat Clients",
          value: "80%",
          description: "Clients who return for more projects",
          icon: "🔄",
          status: "excellent",
        },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
        return "text-green-600 bg-green-100 dark:bg-green-500/20 dark:text-green-400";
      case "good":
        return "text-blue-600 bg-blue-100 dark:bg-blue-500/20 dark:text-blue-400";
      case "average":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-500/20 dark:text-yellow-400";
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-500/20 dark:text-gray-400";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "excellent":
        return "Excellent";
      case "good":
        return "Good";
      case "average":
        return "Average";
      default:
        return "N/A";
    }
  };

  return (
    <section
      className={`py-16 ${classes.cardBg} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${classes.text} mb-4`}>
            Professional Metrics Dashboard
          </h2>
          <p className={`text-xl ${classes.textMuted} max-w-3xl mx-auto`}>
            Transparent performance metrics that demonstrate reliability and
            professional excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {metrics.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`${classes.bg} rounded-xl p-8 ${classes.border} transition-colors duration-300`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${
                  categoryIndex * 0.2
                }s both`,
              }}
            >
              <h3
                className={`text-2xl font-bold ${classes.text} mb-6 text-center`}
              >
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.metrics.map((metric, metricIndex) => (
                  <div
                    key={metricIndex}
                    className={`${classes.cardBg} rounded-lg p-6 shadow-sm ${classes.borderLight} hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{metric.icon}</span>
                        <div>
                          <h4 className={`font-semibold ${classes.text}`}>
                            {metric.label}
                          </h4>
                          <p className={`text-sm ${classes.textMuted}`}>
                            {metric.description}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${getStatusColor(
                          metric.status
                        )}`}
                      >
                        {getStatusBadge(metric.status)}
                      </span>
                    </div>

                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Guarantee */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Professional Guarantee</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold mb-2">Quality Assurance</h4>
              <p className="text-sm opacity-90">
                Every project undergoes thorough testing and quality checks
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💬</div>
              <h4 className="font-semibold mb-2">Clear Communication</h4>
              <p className="text-sm opacity-90">
                Regular updates and transparent project progress reporting
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-semibold mb-2">Post-Launch Support</h4>
              <p className="text-sm opacity-90">
                Continued support and maintenance after project delivery
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className={`text-lg ${classes.textMuted} mb-6`}>
            Experience these professional standards on your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/testimonials"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300"
            >
              Read Testimonials
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

export default ProfessionalMetrics;
