import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroSection } from "@/components/hero-section";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    section: ({
      children,
      className,
      ...props
    }: React.HTMLAttributes<HTMLElement>) => (
      <section className={className} {...props}>
        {children}
      </section>
    ),
  },
}));

describe("HeroSection", () => {
  it("renders the headline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Building the Infrastructure for Agentic AI/i)
    ).toBeInTheDocument();
  });

  it("renders the subtitle with role", () => {
    render(<HeroSection />);
    expect(screen.getByText(/CEO @ Knyte/i)).toBeInTheDocument();
    expect(screen.getByText(/Hardware Engineer/i)).toBeInTheDocument();
  });

  it("renders the View Knyte button", () => {
    render(<HeroSection />);
    expect(screen.getByText("View Knyte")).toBeInTheDocument();
  });

  it("renders the Engineering Logs button", () => {
    render(<HeroSection />);
    expect(screen.getByText("Engineering Logs")).toBeInTheDocument();
  });

  it("has correct link for View Knyte", () => {
    render(<HeroSection />);
    const knyteLink = screen.getByLabelText("View Knyte company website");
    expect(knyteLink).toHaveAttribute("href", "https://knyte.com");
    expect(knyteLink).toHaveAttribute("target", "_blank");
  });
});

