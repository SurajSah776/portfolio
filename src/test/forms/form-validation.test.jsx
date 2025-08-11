import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../utils";
import ContactForm from "../../components/ContactForm";
import ProjectInquiryForm from "../../components/ProjectInquiryForm";

describe("Form Validation Tests", () => {
  describe("ContactForm Validation", () => {
    it("validates required fields on submit", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      const submitButton = screen.getByRole("button", {
        name: /send message/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });
    });

    it("validates email format", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole("button", {
        name: /send message/i,
      });

      // Test invalid email formats
      const invalidEmails = [
        "invalid",
        "test@",
        "@domain.com",
        "test.domain.com",
      ];

      for (const email of invalidEmails) {
        await user.clear(emailInput);
        await user.type(emailInput, email);
        await user.click(submitButton);

        await waitFor(() => {
          expect(
            screen.getByText(/please enter a valid email/i)
          ).toBeInTheDocument();
        });
      }
    });

    it("validates name field length", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      const nameInput = screen.getByLabelText(/name/i);
      const submitButton = screen.getByRole("button", {
        name: /send message/i,
      });

      // Test name too short
      await user.type(nameInput, "A");
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText(/name must be at least 2 characters/i)
        ).toBeInTheDocument();
      });

      // Test name too long
      await user.clear(nameInput);
      await user.type(nameInput, "A".repeat(101));
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText(/name must be less than 100 characters/i)
        ).toBeInTheDocument();
      });
    });

    it("validates message field length", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      const messageInput = screen.getByLabelText(/message/i);
      const submitButton = screen.getByRole("button", {
        name: /send message/i,
      });

      // Test message too short
      await user.type(messageInput, "Hi");
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText(/message must be at least 10 characters/i)
        ).toBeInTheDocument();
      });
    });

    it("shows real-time validation feedback", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      const emailInput = screen.getByLabelText(/email/i);

      // Type invalid email
      await user.type(emailInput, "invalid-email");
      await user.tab(); // Trigger blur event

      await waitFor(() => {
        expect(
          screen.getByText(/please enter a valid email/i)
        ).toBeInTheDocument();
      });

      // Fix the email
      await user.clear(emailInput);
      await user.type(emailInput, "valid@example.com");
      await user.tab();

      await waitFor(() => {
        expect(
          screen.queryByText(/please enter a valid email/i)
        ).not.toBeInTheDocument();
      });
    });

    it("prevents submission with invalid data", async () => {
      const user = userEvent.setup();
      const mockSubmit = vi.fn();
      renderWithProviders(<ContactForm onSubmit={mockSubmit} />);

      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole("button", {
        name: /send message/i,
      });

      // Fill with invalid data
      await user.type(nameInput, "A"); // Too short
      await user.type(emailInput, "invalid-email");
      await user.click(submitButton);

      await waitFor(() => {
        expect(mockSubmit).not.toHaveBeenCalled();
      });
    });

    it("submits successfully with valid data", async () => {
      const user = userEvent.setup();
      const mockSubmit = vi.fn();
      renderWithProviders(<ContactForm onSubmit={mockSubmit} />);

      // Fill with valid data
      await user.type(screen.getByLabelText(/name/i), "John Doe");
      await user.type(screen.getByLabelText(/email/i), "john@example.com");
      await user.type(screen.getByLabelText(/subject/i), "Test Subject");
      await user.type(
        screen.getByLabelText(/message/i),
        "This is a test message with enough characters."
      );

      const submitButton = screen.getByRole("button", {
        name: /send message/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalledWith({
          name: "John Doe",
          email: "john@example.com",
          subject: "Test Subject",
          message: "This is a test message with enough characters.",
        });
      });
    });
  });

  describe("ProjectInquiryForm Validation", () => {
    it("validates project type selection", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ProjectInquiryForm />);

      const submitButton = screen.getByRole("button", {
        name: /submit inquiry/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText(/please select a project type/i)
        ).toBeInTheDocument();
      });
    });

    it("validates budget range selection", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ProjectInquiryForm />);

      const submitButton = screen.getByRole("button", {
        name: /submit inquiry/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText(/please select a budget range/i)
        ).toBeInTheDocument();
      });
    });

    it("validates timeline selection", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ProjectInquiryForm />);

      const submitButton = screen.getByRole("button", {
        name: /submit inquiry/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText(/please select a timeline/i)
        ).toBeInTheDocument();
      });
    });

    it("validates project description length", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ProjectInquiryForm />);

      const descriptionInput = screen.getByLabelText(/project description/i);
      const submitButton = screen.getByRole("button", {
        name: /submit inquiry/i,
      });

      // Test description too short
      await user.type(descriptionInput, "Short");
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText(/description must be at least 20 characters/i)
        ).toBeInTheDocument();
      });
    });
  });

  describe("Form Accessibility", () => {
    it("associates labels with form controls", () => {
      renderWithProviders(<ContactForm />);

      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);

      expect(nameInput).toHaveAttribute("id");
      expect(emailInput).toHaveAttribute("id");
      expect(messageInput).toHaveAttribute("id");

      const nameLabel = screen.getByText(/name/i);
      const emailLabel = screen.getByText(/email/i);
      const messageLabel = screen.getByText(/message/i);

      expect(nameLabel).toHaveAttribute("for", nameInput.id);
      expect(emailLabel).toHaveAttribute("for", emailInput.id);
      expect(messageLabel).toHaveAttribute("for", messageInput.id);
    });

    it("provides error messages with proper ARIA attributes", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      const submitButton = screen.getByRole("button", {
        name: /send message/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        const nameInput = screen.getByLabelText(/name/i);
        const errorMessage = screen.getByText(/name is required/i);

        expect(nameInput).toHaveAttribute("aria-describedby");
        expect(errorMessage).toHaveAttribute(
          "id",
          nameInput.getAttribute("aria-describedby")
        );
        expect(errorMessage).toHaveAttribute("role", "alert");
      });
    });

    it("marks required fields appropriately", () => {
      renderWithProviders(<ContactForm />);

      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);

      expect(nameInput).toHaveAttribute("required");
      expect(emailInput).toHaveAttribute("required");
      expect(messageInput).toHaveAttribute("required");

      expect(nameInput).toHaveAttribute("aria-required", "true");
      expect(emailInput).toHaveAttribute("aria-required", "true");
      expect(messageInput).toHaveAttribute("aria-required", "true");
    });

    it("provides proper form submission feedback", async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      // Fill form with valid data
      await user.type(screen.getByLabelText(/name/i), "John Doe");
      await user.type(screen.getByLabelText(/email/i), "john@example.com");
      await user.type(
        screen.getByLabelText(/message/i),
        "This is a test message."
      );

      const submitButton = screen.getByRole("button", {
        name: /send message/i,
      });
      await user.click(submitButton);

      // Should show loading state
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
      expect(submitButton).toHaveAttribute("aria-disabled", "true");
    });
  });
});
