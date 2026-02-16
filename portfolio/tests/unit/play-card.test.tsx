import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PlayCard } from "@/components/play-card";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      className,
      onHoverStart,
      onHoverEnd,
      onMouseEnter,
      onMouseLeave,
      ...props
    }: React.HTMLAttributes<HTMLDivElement> & {
      onHoverStart?: () => void;
      onHoverEnd?: () => void;
    }) => (
      <div
        className={className}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        {...props}
      >
        {children}
      </div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useReducedMotion: () => false,
}));

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => (
    <img
      src={props.src as string}
      alt={props.alt as string}
      data-testid="raccoon-image"
    />
  ),
}));

describe("PlayCard", () => {
  it('renders Creative label', () => {
    render(<PlayCard />);
    expect(screen.getByText("Creative")).toBeInTheDocument();
  });

  it('shows "Hover to discover" text initially', () => {
    render(<PlayCard />);
    expect(screen.getByText("Hover to discover")).toBeInTheDocument();
  });

  it("reveals Detective Raccoon on hover", () => {
    render(<PlayCard />);
    const card = screen.getByRole("button");
    fireEvent.mouseEnter(card);
    expect(screen.getByText("🔍 Detective Raccoon")).toBeInTheDocument();
  });

  it("has proper aria label", () => {
    render(<PlayCard />);
    const card = screen.getByRole("button");
    expect(card).toHaveAttribute(
      "aria-label",
      "Creative — hover to reveal the Detective Raccoon easter egg"
    );
  });
});

