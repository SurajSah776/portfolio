import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const ContactForm = () => {
  const { classes } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fix the errors above");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending your message...");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus(
        "✅ Message sent successfully! I will get back to you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setStatus(
        "❌ Failed to send message. Please try again or contact me directly via email."
      );
      console.error("Contact form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = `w-full px-4 py-3 rounded-xl ${classes.input} ${classes.border} transition-all duration-300 focus:outline-none focus:ring-2`;
    const errorClass = errors[fieldName]
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : `${classes.inputFocus}`;
    return `${baseClass} ${errorClass}`;
  };

  return (
    <div
      className={`${classes.cardBg} p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg ${classes.border} transition-colors duration-300`}
    >
      <div className="text-center mb-6 sm:mb-8">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${classes.text}`}
        >
          Send Me a Message
        </h2>
        <p className={`${classes.textMuted} text-sm sm:text-base`}>
          Ready to bring your project to life? Let's discuss how I can help you
          build something amazing.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className={`block text-base sm:text-lg font-semibold ${classes.textSecondary} mb-2`}
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={getInputClassName("name")}
            placeholder="Your full name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-2 text-red-600 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className={`block text-base sm:text-lg font-semibold ${classes.textSecondary} mb-2`}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={getInputClassName("email")}
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-2 text-red-600 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        {/* Project Type and Budget Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label
              htmlFor="projectType"
              className={`block text-base sm:text-lg font-semibold ${classes.textSecondary} mb-2`}
            >
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={getInputClassName("projectType")}
              disabled={isSubmitting}
            >
              <option value="">Select a project type</option>
              <option value="react-frontend">
                React.js Frontend Development
              </option>
              <option value="python-backend">Python FastAPI Backend</option>
              <option value="full-stack">Full-Stack Web Application</option>
              <option value="ecommerce">E-commerce Platform</option>
              <option value="api-development">API Development</option>
              <option value="ui-implementation">UI/UX Implementation</option>
              <option value="consulting">Technical Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className={`block text-base sm:text-lg font-semibold ${classes.textSecondary} mb-2`}
            >
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={getInputClassName("budget")}
              disabled={isSubmitting}
            >
              <option value="">Select budget range</option>
              <option value="under-1k">Under $1,000</option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-plus">$25,000+</option>
              <option value="discuss">Let's discuss</option>
            </select>
          </div>
        </div>

        {/* Timeline Field */}
        <div>
          <label
            htmlFor="timeline"
            className={`block text-base sm:text-lg font-semibold ${classes.textSecondary} mb-2`}
          >
            Project Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={getInputClassName("timeline")}
            disabled={isSubmitting}
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP (Rush job)</option>
            <option value="1-2-weeks">1-2 weeks</option>
            <option value="1-month">1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-months-plus">6+ months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className={`block text-base sm:text-lg font-semibold ${classes.textSecondary} mb-2`}
          >
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={getInputClassName("message")}
            placeholder="Tell me about your project, specific requirements, features needed, target audience, and any technical preferences..."
            disabled={isSubmitting}
          ></textarea>
          {errors.message && (
            <p className="mt-2 text-red-600 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg text-lg sm:text-xl touch-manipulation ${
            isSubmitting
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-primary text-white hover:shadow-xl hover:transform hover:scale-[1.02]"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Status Message */}
        {status && (
          <div
            className={`text-center mt-4 p-3 sm:p-4 rounded-lg text-sm sm:text-lg ${
              status.includes("✅")
                ? "bg-green-50 text-green-700 border border-green-200"
                : status.includes("❌")
                ? "bg-red-50 text-red-700 border border-red-200"
                : "bg-blue-50 text-blue-700 border border-blue-200"
            }`}
          >
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
