import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SEOProvider from "../providers/SEOProvider";

// Custom render function that includes providers
export function renderWithProviders(ui, options = {}) {
  const { initialEntries = ["/"], ...renderOptions } = options;

  function Wrapper({ children }) {
    return (
      <SEOProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </SEOProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Mock data for testing
export const mockProject = {
  id: "test-project",
  title: "Test Project",
  description: "A test project description",
  longDescription: "A longer test project description",
  image: "/images/test-project.jpg",
  technologies: ["React.js", "Python", "FastAPI"],
  category: "Full-Stack",
  featured: true,
  status: "Completed",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/test/project",
  challenges: ["Test challenge 1", "Test challenge 2"],
  solutions: ["Test solution 1", "Test solution 2"],
  outcomes: ["Test outcome 1", "Test outcome 2"],
};

export const mockSkill = {
  name: "React.js",
  level: 90,
  icon: "⚛️",
  category: "Frontend",
};

export const mockTestimonial = {
  id: 1,
  name: "Test Client",
  position: "CEO",
  company: "Test Company",
  project: "Test Project",
  testimonial: "Great work on the project!",
  rating: 5,
  image: "/images/test-client.jpg",
  date: "2024",
};

// Accessibility testing helper
export const axeConfig = {
  rules: {
    // Disable color-contrast rule for testing (can be enabled for specific tests)
    "color-contrast": { enabled: false },
  },
};
