import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { renderWithProviders } from "../utils";
import Homepage from "../../pages/Homepage";
import AboutPage from "../../pages/AboutPage";
import PortfolioPage from "../../pages/PortfolioPage";
import ContactPage from "../../pages/ContactPage";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ContactForm from "../../components/ContactForm";

// Extend expect with jest-axe matchers
expect.extend(toHaveNoViolations);

describe("Accessibility Tests", () => {
  it("Homepage should not have accessibility violations", async () => {
    const { container } = renderWithProviders(<Homepage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("About page should not have accessibility violations", async () => {
    const { container } = renderWithProviders(<AboutPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Portfolio page should not have accessibility violations", async () => {
    const { container } = renderWithProviders(<PortfolioPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Contact page should not have accessibility violations", async () => {
    const { container } = renderWithProviders(<ContactPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Navbar should not have accessibility violations", async () => {
    const { container } = renderWithProviders(<Navbar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Hero component should not have accessibility violations", async () => {
    const { container } = renderWithProviders(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Contact form should not have accessibility violations", async () => {
    const { container } = renderWithProviders(<ContactForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have proper heading hierarchy", () => {
    renderWithProviders(<Homepage />);

    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const headingLevels = Array.from(headings).map((h) =>
      parseInt(h.tagName.charAt(1))
    );

    // Should start with h1
    expect(headingLevels[0]).toBe(1);

    // Check that heading levels don't skip (e.g., h1 -> h3)
    for (let i = 1; i < headingLevels.length; i++) {
      const currentLevel = headingLevels[i];
      const previousLevel = headingLevels[i - 1];
      expect(currentLevel - previousLevel).toBeLessThanOrEqual(1);
    }
  });

  it("should have proper alt text for images", () => {
    renderWithProviders(<Homepage />);

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  it("should have proper form labels", () => {
    renderWithProviders(<ContactPage />);

    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      const id = input.getAttribute("id");
      if (id) {
        const label = document.querySelector(`label[for="${id}"]`);
        expect(label).toBeInTheDocument();
      }
    });
  });

  it("should have proper link accessibility", () => {
    renderWithProviders(<Homepage />);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      // Links should have accessible text or aria-label
      const hasText = link.textContent.trim().length > 0;
      const hasAriaLabel = link.hasAttribute("aria-label");
      const hasAriaLabelledBy = link.hasAttribute("aria-labelledby");

      expect(hasText || hasAriaLabel || hasAriaLabelledBy).toBe(true);
    });
  });

  it("should have proper button accessibility", () => {
    renderWithProviders(<Homepage />);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      // Buttons should have accessible text or aria-label
      const hasText = button.textContent.trim().length > 0;
      const hasAriaLabel = button.hasAttribute("aria-label");
      const hasAriaLabelledBy = button.hasAttribute("aria-labelledby");

      expect(hasText || hasAriaLabel || hasAriaLabelledBy).toBe(true);
    });
  });

  it("should have proper color contrast", () => {
    renderWithProviders(<Homepage />);

    // This is a basic check - in a real scenario, you'd use tools like axe-core
    // to automatically check color contrast ratios
    const textElements = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6, span, a"
    );

    textElements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;

      // Basic check that text has color (not transparent)
      expect(color).not.toBe("rgba(0, 0, 0, 0)");
      expect(color).not.toBe("transparent");
    });
  });

  it("should have proper focus management", () => {
    renderWithProviders(<ContactPage />);

    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      // Elements should be focusable
      element.focus();
      expect(document.activeElement).toBe(element);
    });
  });

  it("should have proper ARIA attributes", () => {
    renderWithProviders(<Homepage />);

    // Check for proper use of ARIA landmarks
    const main = document.querySelector("main");
    expect(main).toBeInTheDocument();

    const nav = document.querySelector("nav");
    expect(nav).toBeInTheDocument();

    // Check for proper ARIA labels on interactive elements
    const buttons = document.querySelectorAll(
      "button[aria-label], button[aria-labelledby]"
    );
    buttons.forEach((button) => {
      const ariaLabel = button.getAttribute("aria-label");
      const ariaLabelledBy = button.getAttribute("aria-labelledby");

      if (ariaLabel) {
        expect(ariaLabel.trim()).not.toBe("");
      }

      if (ariaLabelledBy) {
        const labelElement = document.getElementById(ariaLabelledBy);
        expect(labelElement).toBeInTheDocument();
      }
    });
  });
});
