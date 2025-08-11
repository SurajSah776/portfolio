import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const ProjectInquiryForm = () => {
  const { classes } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    technologies: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    "React.js Frontend Development",
    "Python FastAPI Backend Development",
    "Full-Stack E-commerce Solution",
    "UI/UX Implementation",
    "Technical Consulting",
    "Other",
  ];

  const budgetRanges = [
    "Under $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "Above $25,000",
    "Let's discuss",
  ];

  const timelineOptions = [
    "ASAP (Rush project)",
    "2-4 weeks",
    "1-2 months",
    "2-3 months",
    "3+ months",
    "Flexible",
  ];

  const availableTechnologies = [
    "React.js",
    "JavaScript",
    "Python",
    "FastAPI",
    "Django",
    "SQL Server",
    "Tailwind CSS",
    "Vite",
    "JWT",
    "REST API",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTechnologyToggle = (tech) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
        technologies: [],
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`${classes.cardBg} p-8 rounded-2xl shadow-xl ${classes.border} transition-colors duration-300`}
    >
      <h3 className={`text-2xl font-bold ${classes.text} mb-6 text-center`}>
        Project Inquiry Form
      </h3>

      {submitStatus === "success" && (
        <div className="bg-green-500/20 border border-green-500/30 text-green-600 dark:text-green-400 p-4 rounded-lg mb-6 transition-colors duration-300">
          <p className="font-semibold">Thank you for your inquiry!</p>
          <p>I'll get back to you within 24 hours with a detailed proposal.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-500/20 border border-red-500/30 text-red-600 dark:text-red-400 p-4 rounded-lg mb-6 transition-colors duration-300">
          <p>
            There was an error submitting your inquiry. Please try again or
            contact me directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-purple-600 font-semibold mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full p-3 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none transition-colors duration-300`}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-purple-600 font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full p-3 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none transition-colors duration-300`}
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-purple-600 font-semibold mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={`w-full p-3 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none transition-colors duration-300`}
            placeholder="Your company name (optional)"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-purple-600 font-semibold mb-2">
              Project Type *
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
              className={`w-full p-3 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none transition-colors duration-300`}
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-purple-600 font-semibold mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className={`w-full p-3 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none transition-colors duration-300`}
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-purple-600 font-semibold mb-2">
            Timeline
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className={`w-full p-3 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none transition-colors duration-300`}
          >
            <option value="">Select timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Technologies */}
        <div>
          <label className="block text-purple-600 font-semibold mb-2">
            Preferred Technologies
          </label>
          <div className="flex flex-wrap gap-2">
            {availableTechnologies.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => handleTechnologyToggle(tech)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  formData.technologies.includes(tech)
                    ? "bg-purple-500 text-white"
                    : `${classes.buttonSecondary} ${classes.hover}`
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-purple-600 font-semibold mb-2">
            Project Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={5}
            className={`w-full p-3 ${classes.input} ${classes.border} rounded-lg ${classes.inputFocus} focus:outline-none resize-vertical transition-colors duration-300`}
            placeholder="Please describe your project requirements, goals, and any specific features you need..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-primary text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-purple-600"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Project Inquiry"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectInquiryForm;
