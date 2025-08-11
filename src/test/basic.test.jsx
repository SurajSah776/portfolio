import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Basic Test", () => {
  it("should work", () => {
    render(<div>Hello World</div>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
