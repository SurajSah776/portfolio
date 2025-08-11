import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/utils";
import Hero from "../Hero";

describe("Hero", () => {
  it("renders hero content correctly", () => {
    renderWithProviders(<Hero />);

    expect(screen.getByText("Hi, I'm Suraj Kumar Sah")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("at ESSPL")).toBeInTheDocument();
    expect(
      screen.getByText(/Crafting modern web experiences/i)
    ).toBeInTheDocument();
  });

  it("displays call-to-action buttons", () => {
    renderWithProviders(<Hero />);

    const viewWorkButton = screen.getByText("View My Work");
    const contactButton = screen.getByText("Get In Touch");

    expect(viewWorkButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();

    expect(viewWorkButton.closest("a")).toHaveAttribute("href", "/portfolio");
    expect(contactButton.closest("a")).toHaveAttribute("href", "/contact");
  });

  it("has proper heading hierarchy", () => {
    renderWithProviders(<Hero />);

    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading).toHaveTextContent("Full-Stack Developer");

    const subHeading = screen.getByRole("heading", { level: 2 });
    expect(subHeading).toBeInTheDocument();
    expect(subHeading).toHaveTextContent("at ESSPL");
  });

  it("displays professional stats", () => {
    renderWithProviders(<Hero />);

    expect(screen.getByText("Available for freelance")).toBeInTheDocument();
    expect(screen.getByText("4+ Projects Completed")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Expertise")).toBeInTheDocument();
  });

  it("shows professional photo placeholder", () => {
    renderWithProviders(<Hero />);

    expect(screen.getByText("Professional Photo")).toBeInTheDocument();
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });

  it("has proper section structure", () => {
    renderWithProviders(<Hero />);

    const heroSection = document.querySelector("section");
    expect(heroSection).toBeInTheDocument();
    expect(heroSection).toHaveClass("min-h-screen");
  });

  it("includes scroll indicator", () => {
    renderWithProviders(<Hero />);

    // Scroll indicator is hidden on mobile but present in DOM
    const scrollIndicator = document.querySelector(".animate-bounce");
    expect(scrollIndicator).toBeInTheDocument();
  });
});
