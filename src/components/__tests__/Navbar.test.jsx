import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/utils";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders navigation links correctly", () => {
    renderWithProviders(<Navbar />);

    // Use getAllByText since there are desktop and mobile versions
    expect(screen.getAllByText("About")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Portfolio")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Services")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Experience")[0]).toBeInTheDocument();
  });

  it("renders logo with home link", () => {
    renderWithProviders(<Navbar />);

    const homeLink = screen.getByLabelText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders hire me CTA button", () => {
    renderWithProviders(<Navbar />);

    const hireMeButtons = screen.getAllByText("Hire Me");
    expect(hireMeButtons[0]).toBeInTheDocument();
    expect(hireMeButtons[0].closest("a")).toHaveAttribute("href", "/contact");
  });

  it("has navigation link structure for active states", () => {
    renderWithProviders(<Navbar />);

    // Check that navigation links have the proper structure for active states
    const aboutLinks = screen.getAllByText("About");
    const desktopAboutLink = aboutLinks[0].closest("a");
    expect(desktopAboutLink).toHaveClass(
      "font-medium",
      "transition-all",
      "duration-300"
    );

    // Check that the link has the underline span for active state indication
    const underlineSpan = desktopAboutLink.querySelector("span");
    expect(underlineSpan).toBeInTheDocument();
    expect(underlineSpan).toHaveClass("bg-purple-500");
  });

  it("has proper main navigation structure", () => {
    renderWithProviders(<Navbar />);

    // Get the main navigation (first one)
    const navs = screen.getAllByRole("navigation");
    const mainNav = navs[0];
    expect(mainNav).toBeInTheDocument();
    expect(mainNav).toHaveClass("sticky", "top-0", "z-50");
  });

  it("shows desktop navigation on larger screens", () => {
    renderWithProviders(<Navbar />);

    const desktopNav = screen.getByRole("list");
    expect(desktopNav).toBeInTheDocument();
    expect(desktopNav).toHaveClass("flex", "space-x-8");
  });

  it("has proper logo styling", () => {
    renderWithProviders(<Navbar />);

    const logo = screen.getByAltText("Portfolio Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("w-6", "h-6");
  });

  it("includes mobile navigation toggle", () => {
    renderWithProviders(<Navbar />);

    const mobileToggle = screen.getByLabelText("Toggle navigation menu");
    expect(mobileToggle).toBeInTheDocument();
    expect(mobileToggle).toHaveAttribute("aria-expanded", "false");
  });
});
