import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VenturesCard } from "@/components/ventures-card";

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

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={props.src as string}
      alt={props.alt as string}
      data-testid="venture-image"
    />
  ),
}));

describe("VenturesCard", () => {
  it("renders Knyte Inc. title", () => {
    render(<VenturesCard />);
    expect(screen.getByText("Knyte Inc.")).toBeInTheDocument();
  });

  it("renders current status", () => {
    render(<VenturesCard />);
    expect(screen.getByText(/Current \(Founder\/CEO\)/i)).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<VenturesCard />);
    expect(
      screen.getByText(/Managed cloud infrastructure/i)
    ).toBeInTheDocument();
  });

  it("renders Y Combinator metadata", () => {
    render(<VenturesCard />);
    expect(
      screen.getByText(/Y Combinator W26 Applicant/i)
    ).toBeInTheDocument();
  });

  it("renders pivot metadata", () => {
    render(<VenturesCard />);
    expect(screen.getByText(/Pivot from Sherbit/i)).toBeInTheDocument();
  });

  it("renders View Knyte link", () => {
    render(<VenturesCard />);
    const link = screen.getByLabelText("Visit Knyte company website");
    expect(link).toHaveAttribute("href", "https://knyte.net");
  });

  it("renders topology diagram", () => {
    render(<VenturesCard />);
    const img = screen.getByTestId("venture-image");
    expect(img).toHaveAttribute("src", "/images/knyte-topology.svg");
  });
});

