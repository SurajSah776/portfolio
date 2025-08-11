import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../test/utils";
import PortfolioPage from "../PortfolioPage";

describe("PortfolioPage", () => {
  it("renders portfolio page heading", () => {
    renderWithProviders(<PortfolioPage />);

    expect(
      screen.getByRole("heading", { name: /portfolio/i })
    ).toBeInTheDocument();
  });

  it("displays all projects", () => {
    renderWithProviders(<PortfolioPage />);

    expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
    expect(screen.getByText("Digiaayam")).toBeInTheDocument();
    expect(screen.getByText("BookMart")).toBeInTheDocument();
    expect(screen.getByText("KiitHub")).toBeInTheDocument();
  });

  it("has filter functionality", () => {
    renderWithProviders(<PortfolioPage />);

    const filterButtons = screen.getAllByRole("button");
    const allFilter = filterButtons.find((btn) => btn.textContent === "All");
    const frontendFilter = filterButtons.find(
      (btn) => btn.textContent === "Frontend"
    );

    expect(allFilter).toBeInTheDocument();
    expect(frontendFilter).toBeInTheDocument();
  });

  it("filters projects by technology", async () => {
    const user = userEvent.setup();
    renderWithProviders(<PortfolioPage />);

    const reactFilter = screen.getByRole("button", { name: /react/i });
    await user.click(reactFilter);

    // All projects should still be visible since they all use React
    expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
    expect(screen.getByText("Digiaayam")).toBeInTheDocument();
  });

  it("has search functionality", async () => {
    const user = userEvent.setup();
    renderWithProviders(<PortfolioPage />);

    const searchInput = screen.getByPlaceholderText(/search projects/i);
    await user.type(searchInput, "ecommerce");

    expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
  });

  it("displays project cards with proper links", () => {
    renderWithProviders(<PortfolioPage />);

    const projectCards = screen.getAllByRole("article");
    expect(projectCards.length).toBeGreaterThan(0);

    projectCards.forEach((card) => {
      expect(card).toHaveClass("card-hover");
    });
  });

  it("has proper grid layout", () => {
    renderWithProviders(<PortfolioPage />);

    const projectGrid = screen.getByRole("main").querySelector(".grid");
    expect(projectGrid).toBeInTheDocument();
    expect(projectGrid).toHaveClass("md:grid-cols-2", "lg:grid-cols-3");
  });

  it("shows project categories", () => {
    renderWithProviders(<PortfolioPage />);

    expect(screen.getByText("Full-Stack")).toBeInTheDocument();
    expect(screen.getByText("Startup")).toBeInTheDocument();
    expect(screen.getByText("Marketplace")).toBeInTheDocument();
  });

  it("has accessible filter controls", () => {
    renderWithProviders(<PortfolioPage />);

    const filterSection = screen.getByRole("region", { name: /filter/i });
    expect(filterSection).toBeInTheDocument();

    const searchInput = screen.getByLabelText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });
});
