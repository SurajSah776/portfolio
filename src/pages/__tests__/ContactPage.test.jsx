import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/utils";
import ContactPage from "../ContactPage";

describe("ContactPage", () => {
  it("renders contact page heading", () => {
    renderWithProviders(<ContactPage />);

    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
  });

  it("displays contact form", () => {
    renderWithProviders(<ContactPage />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("shows contact information", () => {
    renderWithProviders(<ContactPage />);

    expect(screen.getByText(/gmail/i)).toBeInTheDocument();
    expect(screen.getByText(/available for freelance/i)).toBeInTheDocument();
  });

  it("displays social media links", () => {
    renderWithProviders(<ContactPage />);

    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
  });

  it("shows availability status", () => {
    renderWithProviders(<ContactPage />);

    expect(screen.getByText(/available/i)).toBeInTheDocument();
    expect(screen.getByText(/freelance/i)).toBeInTheDocument();
  });

  it("has proper page structure", () => {
    renderWithProviders(<ContactPage />);

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();

    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it("includes professional contact methods", () => {
    renderWithProviders(<ContactPage />);

    const emailLinks = screen.getAllByRole("link", { name: /email/i });
    expect(emailLinks.length).toBeGreaterThan(0);

    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks.length).toBeGreaterThan(5); // Multiple social media links
  });

  it("displays response time information", () => {
    renderWithProviders(<ContactPage />);

    expect(screen.getByText(/24 hours/i)).toBeInTheDocument();
  });

  it("has accessible form elements", () => {
    renderWithProviders(<ContactPage />);

    const form = screen.getByRole("form");
    expect(form).toHaveAttribute("noValidate");

    const requiredFields = screen.getAllByAttribute("required");
    expect(requiredFields.length).toBeGreaterThan(0);
  });
});
