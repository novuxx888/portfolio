import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "@/components/footer";

describe("Footer", () => {
  it("renders GitHub link with correct URL", () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText(
      "Visit Andrew Xiong's GitHub profile"
    );
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/novuxx888"
    );
  });

  it("renders LinkedIn link with correct URL", () => {
    render(<Footer />);
    const linkedinLink = screen.getByLabelText(
      "Visit Andrew Xiong's LinkedIn profile"
    );
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/andrew-xiong-767aa5213/"
    );
  });

  it("renders Email link with mailto", () => {
    render(<Footer />);
    const emailLink = screen.getByLabelText("Send an email to Andrew Xiong");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:andrewxiong@ucsb.edu");
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/Andrew Xiong/i)).toBeInTheDocument();
  });
});

