import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ResearchCard } from "@/components/research-card";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      className,
      ...props
    }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
  },
}));

describe("ResearchCard", () => {
  it("renders Machine Learning title", () => {
    render(<ResearchCard />);
    expect(screen.getByText("Machine Learning")).toBeInTheDocument();
  });

  it("renders ongoing status", () => {
    render(<ResearchCard />);
    expect(screen.getByText("Ongoing")).toBeInTheDocument();
  });

  it("renders data preprocessing focus area", () => {
    render(<ResearchCard />);
    expect(screen.getByText("Data Preprocessing")).toBeInTheDocument();
  });

  it("renders binary classification focus area", () => {
    render(<ResearchCard />);
    expect(screen.getByText("Binary Classification")).toBeInTheDocument();
  });

  it("renders decision tree logic focus area", () => {
    render(<ResearchCard />);
    expect(screen.getByText("Decision Tree Logic")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<ResearchCard />);
    expect(
      screen.getByText(/Applied machine learning research/i)
    ).toBeInTheDocument();
  });
});

