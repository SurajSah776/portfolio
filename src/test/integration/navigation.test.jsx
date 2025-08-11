import { describe, it, expect } from "vitest";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../utils";
import App from "../../App";

describe("Navigation Integration", () => {
  it("navigates between main pages correctly", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    // Start on homepage
    expect(screen.getByText(/Full-Stack Developer/i)).toBeInTheDocument();

    // Navigate to About page
    const aboutLink = screen.getByText("About");
    await user.click(aboutLink);

    await waitFor(() => {
      expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    });

    // Navigate to Portfolio page
    const portfolioLink = screen.getByText("Portfolio");
    await user.click(portfolioLink);

    await waitFor(() => {
      expect(screen.getByText(/My Projects/i)).toBeInTheDocument();
    });

    // Navigate to Services page
    const servicesLink = screen.getByText("Services");
    await user.click(servicesLink);

    await waitFor(() => {
      expect(screen.getByText(/Services/i)).toBeInTheDocument();
    });

    // Navigate to Contact page
    const contactLink = screen.getByText("Contact");
    await user.click(contactLink);

    await waitFor(() => {
      expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
    });
  });

  it("highlights active navigation link", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    const aboutLink = screen.getByText("About");
    await user.click(aboutLink);

    await waitFor(() => {
      expect(aboutLink.closest("a")).toHaveClass("text-secondary");
    });
  });

  it("handles mobile navigation correctly", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    const mobileMenuButton = screen.getByLabelText("Toggle mobile menu");
    await user.click(mobileMenuButton);

    const mobileAboutLink = screen.getAllByText("About")[1]; // Mobile menu link
    await user.click(mobileAboutLink);

    await waitFor(() => {
      expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    });

    // Mobile menu should close after navigation
    const mobileMenu = screen.getByRole("navigation", { name: /mobile/i });
    expect(mobileMenu).not.toBeVisible();
  });

  it("navigates to project case studies", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    // Go to portfolio page first
    const portfolioLink = screen.getByText("Portfolio");
    await user.click(portfolioLink);

    await waitFor(() => {
      const projectLink = screen.getByText("E-commerce Platform");
      user.click(projectLink);
    });

    await waitFor(() => {
      expect(screen.getByText(/Case Study/i)).toBeInTheDocument();
    });
  });

  it("shows breadcrumb navigation on sub-pages", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    const portfolioLink = screen.getByText("Portfolio");
    await user.click(portfolioLink);

    await waitFor(() => {
      const breadcrumb = screen.getByRole("navigation", {
        name: /breadcrumb/i,
      });
      expect(breadcrumb).toBeInTheDocument();
    });
  });

  it("maintains scroll position on navigation", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    // Scroll down on homepage
    window.scrollTo(0, 500);

    // Navigate to another page
    const aboutLink = screen.getByText("About");
    await user.click(aboutLink);

    await waitFor(() => {
      expect(window.scrollY).toBe(0); // Should scroll to top on new page
    });
  });

  it("handles secondary navigation correctly", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    const secondaryNav = screen.getByRole("navigation", { name: /secondary/i });
    expect(secondaryNav).toBeInTheDocument();

    const resumeLink = screen.getByText("Resume");
    await user.click(resumeLink);

    await waitFor(() => {
      expect(screen.getByText(/Resume/i)).toBeInTheDocument();
    });
  });

  it("shows loading states during navigation", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    const aboutLink = screen.getByText("About");
    await user.click(aboutLink);

    // Should show skeleton loader briefly
    expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId("skeleton-loader")).not.toBeInTheDocument();
    });
  });
});
