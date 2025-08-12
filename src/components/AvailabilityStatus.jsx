import React from "react";
import { availability, achievements } from "../data/experience";
import { useTheme } from "../contexts/ThemeContext";

const AvailabilityStatus = ({ compact = false }) => {
  const { classes } = useTheme();

  if (compact) {
    return (
      <div
        className={`${classes.cardBg} rounded-xl shadow-lg ${classes.border} p-6 transition-colors duration-300`}
      >
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 mb-4 transition-colors duration-300">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="font-semibold text-green-700 dark:text-green-400">
              Available for Projects
            </span>
          </div>
          <div className={`space-y-2 ${classes.textMuted}`}>
            <p>
              <span className="text-purple-600 font-semibold">Response:</span>{" "}
              &lt; 24 hours
            </p>
            <p>
              <span className="text-purple-600 font-semibold">Capacity:</span>{" "}
              85% available
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Current Availability */}
      <div
        className={`${classes.cardBg} p-6 rounded-2xl shadow-lg ${classes.border} transition-colors duration-300`}
      >
        <h3 className={`text-2xl font-bold ${classes.text} mb-6 text-center`}>
          Current Availability
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 mb-4 transition-colors duration-300">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="font-bold text-green-700 dark:text-green-400">
                {availability.status}
              </span>
            </div>
            <div className={`space-y-2 ${classes.textMuted}`}>
              <p>
                <span className="text-purple-600 font-semibold">Capacity:</span>{" "}
                {availability.capacity}
              </p>
              <p>
                <span className="text-purple-600 font-semibold">
                  Next Available:
                </span>{" "}
                {availability.nextAvailable}
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⏰</div>
            <div className={`space-y-2 ${classes.textMuted}`}>
              <p>
                <span className="text-purple-600 font-semibold">
                  Response Time:
                </span>{" "}
                {availability.responseTime}
              </p>
              <p>
                <span className="text-purple-600 font-semibold">
                  Working Hours:
                </span>{" "}
                {availability.workingHours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Metrics */}
      <div
        className={`${classes.cardBg} p-6 rounded-2xl shadow-lg ${classes.border} transition-colors duration-300`}
      >
        <h3 className={`text-2xl font-bold ${classes.text} mb-6 text-center`}>
          Professional Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center p-4 ${classes.bg} rounded-lg ${classes.borderLight} transition-colors duration-300`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {achievement.value}
              </div>
              <div className={`text-sm ${classes.textMuted}`}>
                {achievement.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics Details */}
      <div
        className={`${classes.cardBg} p-6 rounded-2xl shadow-lg ${classes.border} transition-colors duration-300`}
      >
        <h3 className={`text-2xl font-bold ${classes.text} mb-6 text-center`}>
          Success Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 p-4 ${classes.bg} rounded-lg ${classes.borderLight} transition-colors duration-300`}
            >
              <div className="text-2xl">{achievement.icon}</div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xl font-bold text-purple-600">
                    {achievement.value}
                  </span>
                  <span className={`${classes.text} font-semibold`}>
                    {achievement.title}
                  </span>
                </div>
                <p className={`${classes.textMuted} text-sm`}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Commitment */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-2xl border border-purple-200 dark:border-purple-500/30 transition-colors duration-300">
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4 text-center">
          Professional Commitment
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${classes.textSecondary}`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-purple-600">✓</span>
            <span>Dedicated project management</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-purple-600">✓</span>
            <span>Regular progress updates</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-purple-600">✓</span>
            <span>Quality assurance testing</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-purple-600">✓</span>
            <span>Post-launch support included</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;
