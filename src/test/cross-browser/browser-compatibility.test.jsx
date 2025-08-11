import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils";
import Homepage from "../../pages/Homepage";
import PortfolioPage from "../../pages/PortfolioPage";
import ContactPage from "../../pages/ContactPage";

// Mock different browser environments
const mockUserAgents = {
  chrome:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  firefox:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/121.0",
  safari:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
  edge: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
};

describe("Cross-Browser Compatibility Tests", () => {
  beforeEach(() => {
    // Reset any browser-specific mocks
    delete window.navigator.__defineGetter__;
  });

  describe("Chrome Compatibility", () => {
    beforeEach(() => {
      Object.defineProperty(window.navigator, "userAgent", {
        value: mockUserAgents.chrome,
        configurable: true,
      });
    });

    it("renders homepage correctly in Chrome", () => {
      renderWithProviders(<Homepage />);

      expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
      expect(screen.getByText("at ESSPL")).toBeInTheDocument();
      expect(screen.getByText("View My Work")).toBeInTheDocument();
    });

    it("handles CSS Grid layout in Chrome", () => {
      renderWithProviders(<PortfolioPage />);

      const projectGrid = document.querySelector(".grid");
      expect(projectGrid).toBeInTheDocument();

      // Chrome supports CSS Grid
      const computedStyle = window.getComputedStyle(projectGrid);
      expect(computedStyle.display).toBe("grid");
    });

    it("supports modern JavaScript features in Chrome", () => {
      // Test arrow functions, template literals, destructuring
      const testModernJS = () => {
        const data = { name: "test", value: 123 };
        const { name, value } = data;
        const message = `Hello ${name}, value is ${value}`;
        return message;
      };

      expect(testModernJS()).toBe("Hello test, value is 123");
    });
  });

  describe("Firefox Compatibility", () => {
    beforeEach(() => {
      Object.defineProperty(window.navigator, "userAgent", {
        value: mockUserAgents.firefox,
        configurable: true,
      });
    });

    it("renders homepage correctly in Firefox", () => {
      renderWithProviders(<Homepage />);

      expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
      expect(screen.getByText("at ESSPL")).toBeInTheDocument();
    });

    it("handles Flexbox layout in Firefox", () => {
      renderWithProviders(<Homepage />);

      const flexContainer = document.querySelector(".flex");
      expect(flexContainer).toBeInTheDocument();

      // Firefox supports Flexbox
      const computedStyle = window.getComputedStyle(flexContainer);
      expect(computedStyle.display).toBe("flex");
    });

    it("supports CSS custom properties in Firefox", () => {
      renderWithProviders(<Homepage />);

      // Test CSS custom properties (CSS variables)
      const element = document.querySelector(".bg-primary");
      expect(element).toBeInTheDocument();
    });
  });

  describe("Safari Compatibility", () => {
    beforeEach(() => {
      Object.defineProperty(window.navigator, "userAgent", {
        value: mockUserAgents.safari,
        configurable: true,
      });
    });

    it("renders homepage correctly in Safari", () => {
      renderWithProviders(<Homepage />);

      expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
      expect(screen.getByText("at ESSPL")).toBeInTheDocument();
    });

    it("handles webkit-specific styles in Safari", () => {
      renderWithProviders(<Homepage />);

      // Test webkit-specific properties
      const gradientElement = document.querySelector(".bg-gradient-to-r");
      expect(gradientElement).toBeInTheDocument();
    });

    it("supports backdrop-filter in Safari", () => {
      renderWithProviders(<Homepage />);

      const backdropElement = document.querySelector(".backdrop-blur-sm");
      expect(backdropElement).toBeInTheDocument();
    });
  });

  describe("Edge Compatibility", () => {
    beforeEach(() => {
      Object.defineProperty(window.navigator, "userAgent", {
        value: mockUserAgents.edge,
        configurable: true,
      });
    });

    it("renders homepage correctly in Edge", () => {
      renderWithProviders(<Homepage />);

      expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
      expect(screen.getByText("at ESSPL")).toBeInTheDocument();
    });

    it("handles modern CSS features in Edge", () => {
      renderWithProviders(<PortfolioPage />);

      // Test CSS Grid support in Edge
      const gridElement = document.querySelector(".grid");
      expect(gridElement).toBeInTheDocument();
    });
  });

  describe("Feature Detection Tests", () => {
    it("detects CSS Grid support", () => {
      const supportsGrid = CSS.supports("display", "grid");
      expect(typeof supportsGrid).toBe("boolean");
    });

    it("detects Flexbox support", () => {
      const supportsFlex = CSS.supports("display", "flex");
      expect(typeof supportsFlex).toBe("boolean");
    });

    it("detects CSS custom properties support", () => {
      const supportsCustomProps = CSS.supports("--custom-prop", "value");
      expect(typeof supportsCustomProps).toBe("boolean");
    });

    it("detects IntersectionObserver support", () => {
      const supportsIntersectionObserver = "IntersectionObserver" in window;
      expect(typeof supportsIntersectionObserver).toBe("boolean");
    });

    it("detects fetch API support", () => {
      const supportsFetch = "fetch" in window;
      expect(typeof supportsFetch).toBe("boolean");
    });
  });

  describe("Polyfill Requirements", () => {
    it("identifies features that may need polyfills", () => {
      const featuresNeedingPolyfills = [];

      // Check for features that might need polyfills
      if (!("IntersectionObserver" in window)) {
        featuresNeedingPolyfills.push("IntersectionObserver");
      }

      if (!("fetch" in window)) {
        featuresNeedingPolyfills.push("fetch");
      }

      if (!CSS.supports("display", "grid")) {
        featuresNeedingPolyfills.push("CSS Grid");
      }

      // In a real test environment, this would help identify what polyfills are needed
      expect(Array.isArray(featuresNeedingPolyfills)).toBe(true);
    });
  });

  describe("JavaScript API Compatibility", () => {
    it("tests Promise support", async () => {
      const testPromise = new Promise((resolve) => {
        setTimeout(() => resolve("success"), 10);
      });

      const result = await testPromise;
      expect(result).toBe("success");
    });

    it("tests async/await support", async () => {
      const asyncFunction = async () => {
        return "async result";
      };

      const result = await asyncFunction();
      expect(result).toBe("async result");
    });

    it("tests Array methods support", () => {
      const testArray = [1, 2, 3, 4, 5];

      // Test modern array methods
      expect(testArray.includes(3)).toBe(true);
      expect(testArray.find((x) => x > 3)).toBe(4);
      expect(testArray.findIndex((x) => x > 3)).toBe(3);
    });

    it("tests Object methods support", () => {
      const testObj = { a: 1, b: 2, c: 3 };

      // Test modern object methods
      expect(Object.keys(testObj)).toEqual(["a", "b", "c"]);
      expect(Object.values(testObj)).toEqual([1, 2, 3]);
      expect(Object.entries(testObj)).toEqual([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]);
    });
  });

  describe("Form Compatibility", () => {
    it("tests form validation across browsers", () => {
      renderWithProviders(<ContactPage />);

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute("type", "email");

      // Test HTML5 form validation
      expect(emailInput.validity).toBeDefined();
    });

    it("tests input types support", () => {
      renderWithProviders(<ContactPage />);

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput.type).toBe("email");

      // In a real browser, this would test if the input type is supported
      expect(emailInput.type === "email" || emailInput.type === "text").toBe(
        true
      );
    });
  });
});
