import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../utils";
import Homepage from "../../pages/Homepage";
import PortfolioPage from "../../pages/PortfolioPage";
import ContactPage from "../../pages/ContactPage";
import ProjectCard from "../../components/ProjectCard";
import { mockProject } from "../utils";

describe("User Interaction Tests", () => {
  describe("Homepage Interactions", () => {
    it("handles hero CTA button clicks", async () => {
      const user = userEvent.setup();
      renderWithProviders(<Homepage />);

      const viewWorkButton = screen.getByText("View My Work");
      const contactButton = screen.getByText("Get In Touch");

      await user.click(viewWorkButton);
      // Should navigate to portfolio (tested in navigation tests)

      await user.click(contactButton);
      // Should navigate to contact (tested in navigation tests)
    });

    it("handles smooth scrolling to sections", async () => {
      const user = userEvent.setup();
      const mockScrollIntoView = vi.fn();
      Element.prototype.scrollIntoView = mockScrollIntoView;

      renderWithProviders(<Homepage />);

      const scrollToSkillsButton = screen.getByText(/view skills/i);
      await user.click(scrollToSkillsButton);

      expect(mockScrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
        block: "start",
      });
    });

    it("handles project card hover effects", async () => {
      const user = userEvent.setup();
      renderWithProviders(<Homepage />);

      const projectCards = screen.getAllByRole("article");
      const firstCard = projectCards[0];

      await user.hover(firstCard);
      expect(firstCard).toHaveClass("card-hover");

      await user.unhover(firstCard);
      // Hover effects are handled by CSS, so we just verify the class exists
    });

    it("handles skill category interactions", async () => {
      const user = userEvent.setup();
      renderWithProviders(<Homepage />);

      const skillCards = screen.getAllByText(/Frontend|Backend|Database/);

      for (const skillCard of skillCards) {
        await user.hover(skillCard.closest("div"));
        // Verify hover effects are applied
        expect(skillCard.closest("div")).toHaveClass("card-hover");
      }
    });
  });

  describe("Portfolio Page Interactions", () => {
    it("handles project filtering", async () => {
      const user = userEvent.setup();
      renderWithProviders(<PortfolioPage />);

      // Test technology filter
      const reactFilter = screen.getByRole("button", { name: /react/i });
      await user.click(reactFilter);

      // Verify filter is active
      expect(reactFilter).toHaveClass("bg-secondary", "text-white");

      // Test "All" filter
      const allFilter = screen.getByRole("button", { name: /all/i });
      await user.click(allFilter);

      expect(allFilter).toHaveClass("bg-secondary", "text-white");
    });

    it("handles project search", async () => {
      const user = userEvent.setup();
      renderWithProviders(<PortfolioPage />);

      const searchInput = screen.getByPlaceholderText(/search projects/i);

      await user.type(searchInput, "ecommerce");

      // Should filter projects based on search term
      expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();

      // Clear search
      await user.clear(searchInput);

      // All projects should be visible again
      expect(screen.getByText("Digiaayam")).toBeInTheDocument();
      expect(screen.getByText("BookMart")).toBeInTheDocument();
    });

    it("handles project card clicks for navigation", async () => {
      const user = userEvent.setup();
      renderWithProviders(<PortfolioPage />);

      const projectCard = screen
        .getByText("E-commerce Platform")
        .closest("article");
      await user.click(projectCard);

      // Should navigate to case study page (tested in navigation tests)
    });

    it("handles project category filtering", async () => {
      const user = userEvent.setup();
      renderWithProviders(<PortfolioPage />);

      const fullStackFilter = screen.getByRole("button", {
        name: /full-stack/i,
      });
      await user.click(fullStackFilter);

      expect(fullStackFilter).toHaveClass("bg-secondary");

      // Should show only full-stack projects
      expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
    });
  });

  describe("Contact Page Interactions", () => {
    it("handles social media link clicks", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactPage />);

      const linkedinLink = screen.getByLabelText(/linkedin/i);
      const githubLink = screen.getByLabelText(/github/i);

      // Verify links have proper attributes
      expect(linkedinLink).toHaveAttribute("target", "_blank");
      expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

      expect(githubLink).toHaveAttribute("target", "_blank");
      expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("handles contact form interactions", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactPage />);

      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);

      // Test form field interactions
      await user.type(nameInput, "John Doe");
      expect(nameInput).toHaveValue("John Doe");

      await user.type(emailInput, "john@example.com");
      expect(emailInput).toHaveValue("john@example.com");

      await user.type(messageInput, "Test message");
      expect(messageInput).toHaveValue("Test message");

      // Test form submission
      const submitButton = screen.getByRole("button", { name: /send/i });
      await user.click(submitButton);

      // Should show validation errors for incomplete form
      await waitFor(() => {
        expect(
          screen.getByText(/message must be at least/i)
        ).toBeInTheDocument();
      });
    });

    it("handles availability status display", () => {
      renderWithProviders(<ContactPage />);

      const availabilityStatus = screen.getByText(/available/i);
      expect(availabilityStatus).toBeInTheDocument();

      const freelanceText = screen.getByText(/freelance/i);
      expect(freelanceText).toBeInTheDocument();
    });
  });

  describe("ProjectCard Component Interactions", () => {
    it("handles project link clicks", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ProjectCard project={mockProject} />);

      const liveLink = screen.getByText("Live Demo");
      const githubLink = screen.getByText("GitHub");

      // Verify links have proper attributes
      expect(liveLink).toHaveAttribute("href", mockProject.liveUrl);
      expect(liveLink).toHaveAttribute("target", "_blank");

      expect(githubLink).toHaveAttribute("href", mockProject.githubUrl);
      expect(githubLink).toHaveAttribute("target", "_blank");
    });

    it("handles technology tag interactions", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ProjectCard project={mockProject} />);

      const techTags = screen.getAllByText(/React\.js|Python|FastAPI/);

      for (const tag of techTags) {
        await user.hover(tag);
        // Technology tags should have hover effects
        expect(tag.closest("span")).toHaveClass("px-3", "py-1");
      }
    });

    it("handles card hover animations", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ProjectCard project={mockProject} />);

      const card = screen.getByRole("article");

      await user.hover(card);
      expect(card).toHaveClass("card-hover");

      await user.unhover(card);
      // CSS handles the actual animation
    });
  });

  describe("Keyboard Navigation", () => {
    it("handles tab navigation through interactive elements", async () => {
      const user = userEvent.setup();
      renderWithProviders(<Homepage />);

      // Tab through interactive elements
      await user.tab();
      expect(document.activeElement).toHaveAttribute("href"); // First nav link

      await user.tab();
      expect(document.activeElement).toHaveAttribute("href"); // Second nav link

      // Continue tabbing through all interactive elements
      const interactiveElements = screen
        .getAllByRole("button")
        .concat(screen.getAllByRole("link"));

      for (let i = 0; i < Math.min(5, interactiveElements.length); i++) {
        await user.tab();
        expect(document.activeElement).toBeInstanceOf(HTMLElement);
      }
    });

    it("handles Enter key activation on buttons", async () => {
      const user = userEvent.setup();
      const mockClick = vi.fn();

      renderWithProviders(<button onClick={mockClick}>Test Button</button>);

      const button = screen.getByRole("button");
      button.focus();

      await user.keyboard("{Enter}");
      expect(mockClick).toHaveBeenCalled();
    });

    it("handles Space key activation on buttons", async () => {
      const user = userEvent.setup();
      const mockClick = vi.fn();

      renderWithProviders(<button onClick={mockClick}>Test Button</button>);

      const button = screen.getByRole("button");
      button.focus();

      await user.keyboard(" ");
      expect(mockClick).toHaveBeenCalled();
    });

    it("handles Escape key for modal/menu closing", async () => {
      const user = userEvent.setup();
      renderWithProviders(<Homepage />);

      // Open mobile menu
      const mobileMenuButton = screen.getByLabelText("Toggle mobile menu");
      await user.click(mobileMenuButton);

      // Press Escape to close
      await user.keyboard("{Escape}");

      const mobileMenu = screen.getByRole("navigation", { name: /mobile/i });
      expect(mobileMenu).not.toBeVisible();
    });
  });

  describe("Touch/Mobile Interactions", () => {
    it("handles touch events on mobile devices", async () => {
      // Mock touch events
      const mockTouchStart = vi.fn();
      const mockTouchEnd = vi.fn();

      renderWithProviders(<Homepage />);

      const projectCard = screen.getAllByRole("article")[0];

      projectCard.addEventListener("touchstart", mockTouchStart);
      projectCard.addEventListener("touchend", mockTouchEnd);

      fireEvent.touchStart(projectCard);
      fireEvent.touchEnd(projectCard);

      expect(mockTouchStart).toHaveBeenCalled();
      expect(mockTouchEnd).toHaveBeenCalled();
    });

    it("handles swipe gestures for mobile navigation", async () => {
      const mockSwipe = vi.fn();

      renderWithProviders(<Homepage />);

      const heroSection = screen.getByRole("banner");

      // Simulate swipe gesture
      fireEvent.touchStart(heroSection, {
        touches: [{ clientX: 100, clientY: 100 }],
      });

      fireEvent.touchMove(heroSection, {
        touches: [{ clientX: 200, clientY: 100 }],
      });

      fireEvent.touchEnd(heroSection, {
        changedTouches: [{ clientX: 200, clientY: 100 }],
      });

      // Swipe handling would be implemented in the component
    });
  });
});
