import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HardwareCard } from "@/components/hardware-card";

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
    <img
      src={props.src as string}
      alt={props.alt as string}
      data-testid="hardware-image"
    />
  ),
}));

describe("HardwareCard", () => {
  it("renders Pi Camera Node title", () => {
    render(<HardwareCard />);
    expect(screen.getByText("Pi Camera Node")).toBeInTheDocument();
  });

  it("renders ESP32 Architecture spec", () => {
    render(<HardwareCard />);
    expect(screen.getByText("ESP32 Architecture")).toBeInTheDocument();
  });

  it("renders Custom 4-Layer PCB spec", () => {
    render(<HardwareCard />);
    expect(screen.getByText("Custom 4-Layer PCB")).toBeInTheDocument();
  });

  it("renders JLCPCB Manufactured spec", () => {
    render(<HardwareCard />);
    expect(screen.getByText("JLCPCB Manufactured")).toBeInTheDocument();
  });

  it("renders PCB image", () => {
    render(<HardwareCard />);
    const img = screen.getByTestId("hardware-image");
    expect(img).toHaveAttribute("src", "/images/pcb-layers.svg");
  });

  it("renders schematics link", () => {
    render(<HardwareCard />);
    const link = screen.getByLabelText(
      "View KiCad schematics for Pi Camera Node"
    );
    expect(link).toBeInTheDocument();
  });
});

