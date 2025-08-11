import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/utils";
import Skills from "../Skills";

describe("Skills", () => {
  it("renders skills section heading", () => {
    renderWithProviders(<Skills />);

    expect(
      screen.getByRole("heading", { name: /technical skills/i })
    ).toBeInTheDocument();
  });

  it("displays skill categories", () => {
    renderWithProviders(<Skills />);

    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
  });

  it("shows individual skills within categories", () => {
    renderWithProviders(<Skills />);

    // Frontend skills
    expect(screen.getByText("React.js")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();

    // Backend skills
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("FastAPI")).toBeInTheDocument();
    expect(screen.getByText("Django")).toBeInTheDocument();

    // Database skills
    expect(screen.getByText("SQL Server")).toBeInTheDocument();
  });

  it("displays skill category icons", () => {
    renderWithProviders(<Skills />);

    const skillCards = screen.getAllByRole("article");
    expect(skillCards).toHaveLength(3); // Frontend, Backend, Database

    skillCards.forEach((card) => {
      const icon = card.querySelector(".text-4xl");
      expect(icon).toBeInTheDocument();
    });
  });

  it("applies hover effects to skill cards", () => {
    renderWithProviders(<Skills />);

    const skillCards = screen.getAllByRole("article");
    skillCards.forEach((card) => {
      expect(card).toHaveClass("card-hover");
    });
  });

  it("has proper semantic structure", () => {
    renderWithProviders(<Skills />);

    const section = screen.getByRole("region", { name: /skills/i });
    expect(section).toBeInTheDocument();

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it("uses consistent styling classes", () => {
    renderWithProviders(<Skills />);

    const section = screen.getByRole("region", { name: /skills/i });
    expect(section).toHaveClass("py-20", "bg-gray-50");

    const skillCards = screen.getAllByRole("article");
    skillCards.forEach((card) => {
      expect(card).toHaveClass("bg-white", "p-8", "rounded-xl", "text-center");
    });
  });
});
