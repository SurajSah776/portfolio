import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/utils";
import Homepage from "../Homepage";

describe("Homepage", () => {
  it("renders all main sections", () => {
    renderWithProviders(<Homepage />);

    // Hero section
    expect(screen.getByText(/Full-Stack Developer/i)).toBeInTheDocument();

    // Featured projects section
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();

    // Skills section
    expect(screen.getByText(/Technical Skills/i)).toBeInTheDocument();

    // About preview section
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });

  it("displays call-to-action buttons", () => {
    renderWithProviders(<Homepage />);

    expect(screen.getByText("View My Work")).toBeInTheDocument();
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  it("shows featured projects", () => {
    renderWithProviders(<Homepage />);

    // Should show top 3 featured projects
    expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
    expect(screen.getByText("Digiaayam")).toBeInTheDocument();
    expect(screen.getByText("BookMart")).toBeInTheDocument();
  });

  it("has proper page structure and semantics", () => {
    renderWithProviders(<Homepage />);

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);

    // Check for proper heading hierarchy
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });

  it("includes navigation to other pages", () => {
    renderWithProviders(<Homepage />);

    const portfolioLinks = screen.getAllByText(/view.*portfolio/i);
    expect(portfolioLinks.length).toBeGreaterThan(0);

    const contactLinks = screen.getAllByText(/contact/i);
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it("displays professional branding elements", () => {
    renderWithProviders(<Homepage />);

    expect(screen.getByText(/ESSPL/i)).toBeInTheDocument();
    expect(screen.getByText(/React.js/i)).toBeInTheDocument();
    expect(screen.getByText(/Python/i)).toBeInTheDocument();
  });

  it("has responsive design classes", () => {
    renderWithProviders(<Homepage />);

    const heroSection = screen.getByRole("banner");
    expect(heroSection).toHaveClass("min-h-screen");

    const sections = screen.getAllByRole("region");
    sections.forEach((section) => {
      expect(section.className).toMatch(/py-\d+/);
    });
  });
});
