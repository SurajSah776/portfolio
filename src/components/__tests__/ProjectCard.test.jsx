import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders, mockProject } from "../../test/utils";
import ProjectCard from "../ProjectCard";

describe("ProjectCard", () => {
  it("renders project information correctly", () => {
    renderWithProviders(<ProjectCard project={mockProject} />);

    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    expect(screen.getByAltText(mockProject.title)).toBeInTheDocument();
  });

  it("displays technology tags", () => {
    renderWithProviders(<ProjectCard project={mockProject} />);

    mockProject.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it("shows project links when available", () => {
    renderWithProviders(<ProjectCard project={mockProject} />);

    const liveLink = screen.getByText("Live Demo");
    const githubLink = screen.getByText("GitHub");

    expect(liveLink).toHaveAttribute("href", mockProject.liveUrl);
    expect(githubLink).toHaveAttribute("href", mockProject.githubUrl);
  });

  it("applies hover effects class", () => {
    renderWithProviders(<ProjectCard project={mockProject} />);

    const card = screen.getByRole("article");
    expect(card).toHaveClass("card-hover");
  });

  it("has proper image accessibility", () => {
    renderWithProviders(<ProjectCard project={mockProject} />);

    const image = screen.getByAltText(mockProject.title);
    expect(image).toHaveAttribute("src", mockProject.image);
  });

  it("handles missing optional data gracefully", () => {
    const minimalProject = {
      id: "minimal",
      title: "Minimal Project",
      description: "Basic description",
      image: "/test.jpg",
      technologies: ["React"],
    };

    renderWithProviders(<ProjectCard project={minimalProject} />);

    expect(screen.getByText("Minimal Project")).toBeInTheDocument();
    expect(screen.getByText("Basic description")).toBeInTheDocument();
  });
});
