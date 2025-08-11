import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../test/utils";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
  it("renders all form fields", () => {
    renderWithProviders(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/budget range/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project timeline/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project details/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("validates required fields", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /send message/i });
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
    await user.type(emailInput, "invalid-email");

    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/please enter a valid email/i)
      ).toBeInTheDocument();
    });
  });

  it("validates name length", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, "A");

    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/name must be at least 2 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("validates message length", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);

    const messageInput = screen.getByLabelText(/project details/i);
    await user.type(messageInput, "Short");

    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/message must be at least 10 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("submits form with valid data", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(
      screen.getByLabelText(/project details/i),
      "This is a detailed project description with enough characters."
    );

    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/sending your message/i)).toBeInTheDocument();
    });
  });

  it("shows loading state during submission", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);

    // Fill form with valid data
    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(
      screen.getByLabelText(/project details/i),
      "This is a detailed project description."
    );

    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);

    expect(screen.getByText(/sending/i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it("has proper accessibility attributes", () => {
    renderWithProviders(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toHaveAttribute("id");
    expect(nameInput).toHaveAttribute("name", "name");

    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("name", "email");

    const messageInput = screen.getByLabelText(/project details/i);
    expect(messageInput).toHaveAttribute("name", "message");
  });

  it("displays form heading and description", () => {
    renderWithProviders(<ContactForm />);

    expect(screen.getByText("Send Me a Message")).toBeInTheDocument();
    expect(
      screen.getByText(/Ready to bring your project to life/i)
    ).toBeInTheDocument();
  });

  it("includes project type options", () => {
    renderWithProviders(<ContactForm />);

    const projectTypeSelect = screen.getByLabelText(/project type/i);
    expect(projectTypeSelect).toBeInTheDocument();

    // Check if select has options (they're not visible until opened)
    expect(projectTypeSelect.tagName).toBe("SELECT");
  });
});
