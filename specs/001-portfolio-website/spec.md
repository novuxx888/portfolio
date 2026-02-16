# Feature Specification: Andrew Xiong Portfolio Website

**Feature Branch**: `001-portfolio-website`  
**Created**: 2026-02-16  
**Status**: Draft  
**Input**: User description: "I am building a modern website for my portfolio. I want it to look sleek, something that would stand out."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Professional Identity & First Impression (Priority: P1)

A visitor lands on the portfolio and immediately understands Andrew's professional identity, current role, and primary value proposition through a hero section with headline, subtitle, and call-to-action buttons.

**Why this priority**: The hero section is the first point of contact and must communicate identity within 3 seconds. Without this, visitors cannot understand who Andrew is or what he does, making all other content irrelevant.

**Independent Test**: Can be fully tested by loading the homepage and verifying that the headline "Building the Infrastructure for Agentic AI", subtitle "Andrew Xiong. CEO @ Knyte. Hardware Engineer. Builder.", and two action buttons [View Knyte] and [Engineering Logs] are visible and functional.

**Acceptance Scenarios**:

1. **Given** a visitor arrives at the homepage, **When** the page loads, **Then** they see the headline "Building the Infrastructure for Agentic AI" prominently displayed in the hero section
2. **Given** the hero section is visible, **When** a visitor views it, **Then** they see the subtitle "Andrew Xiong. CEO @ Knyte. Hardware Engineer. Builder."
3. **Given** the hero section is displayed, **When** a visitor looks for actions, **Then** they see two clearly labeled buttons: "View Knyte" and "Engineering Logs"
4. **Given** the buttons are visible, **When** a visitor clicks "View Knyte", **Then** they are directed to Knyte company information
5. **Given** the buttons are visible, **When** a visitor clicks "Engineering Logs", **Then** they are directed to Andrew's engineering content

---

### User Story 2 - Current Venture Discovery (Priority: P2)

A visitor wants to learn about Andrew's current startup venture and can view detailed information about Knyte Inc. through a prominent card that showcases the company description, status, and context (Y Combinator applicant, pivot from Sherbit).

**Why this priority**: Current professional activity demonstrates active work and is most relevant to potential investors, collaborators, or employers. This is the primary differentiator from a static resume.

**Independent Test**: Can be fully tested by viewing the Ventures card and verifying it displays "Knyte Inc.", status as "Current (Founder/CEO)", description of the managed cloud infrastructure service, and metadata about Y Combinator and the Sherbit pivot.

**Acceptance Scenarios**:

1. **Given** a visitor is viewing the portfolio, **When** they scan the bento grid layout, **Then** they see a large (double-width, double-height) Ventures card
2. **Given** the Ventures card is visible, **When** a visitor reads it, **Then** they see "Knyte Inc." as the title
3. **Given** the Ventures card shows Knyte Inc., **When** a visitor reviews the status, **Then** they see "Current (Founder/CEO)"
4. **Given** the card displays company info, **When** a visitor reads the description, **Then** they see "Managed cloud infrastructure for autonomous AI employees on isolated virtual machines"
5. **Given** the description is shown, **When** a visitor looks for additional context, **Then** they see metadata indicating "Y Combinator W26 Applicant" and "Pivot from Sherbit"
6. **Given** the card content is displayed, **When** a visitor views the card, **Then** they see a minimalist visual representation (server/cloud topology diagram or abstract node animation)

---

### User Story 3 - Hardware Engineering Expertise (Priority: P3)

A visitor interested in Andrew's technical capabilities can view his hardware engineering project (Pi Camera Node) with technical specifications and visual documentation through a dedicated Hardware Lab card.

**Why this priority**: Demonstrates hands-on technical expertise and differentiates Andrew from pure software engineers or business-only founders. Important for technical credibility but secondary to current venture.

**Independent Test**: Can be fully tested by viewing the Hardware Lab card and verifying it shows "Pi Camera Node" title, technical specs (ESP32, PCB details, manufacturer), and links to detailed schematics.

**Acceptance Scenarios**:

1. **Given** a visitor is viewing the portfolio, **When** they scan the grid, **Then** they see a medium-sized (single-width, double-height) Hardware Lab card
2. **Given** the Hardware Lab card is visible, **When** a visitor reads it, **Then** they see "Pi Camera Node" as the title
3. **Given** the card shows the project, **When** a visitor reviews specs, **Then** they see "ESP32 Architecture", "Custom 4-Layer PCB", and "JLCPCB Manufactured"
4. **Given** specs are displayed, **When** a visitor views the card, **Then** they see visual documentation (exploded PCB layer view or terminal boot logs)
5. **Given** the card is visible, **When** a visitor wants more details, **Then** they can access a link to KiCad schematics

---

### User Story 4 - Academic Research Background (Priority: P4)

A visitor researching Andrew's qualifications can view his machine learning research experience through a Research card that highlights focus areas without overwhelming technical jargon.

**Why this priority**: Provides academic credibility and shows depth of knowledge, but is less immediately actionable than current work or hands-on projects. Relevant for academic collaborations or research-oriented roles.

**Independent Test**: Can be fully tested by viewing the Research card and verifying it displays "Machine Learning" title and focus areas (data preprocessing, binary classification, decision trees) with an "academic but applied" tone.

**Acceptance Scenarios**:

1. **Given** a visitor is viewing the portfolio, **When** they scan the grid, **Then** they see a medium-sized Research card
2. **Given** the Research card is visible, **When** a visitor reads it, **Then** they see "Machine Learning" as the title
3. **Given** the card shows research area, **When** a visitor reviews focus areas, **Then** they see "Data preprocessing, binary classification, and decision tree logic"
4. **Given** focus areas are listed, **When** a visitor reads the description, **Then** the tone is "academic but applied" (not overly theoretical)

---

### User Story 5 - Personality & Creativity Discovery (Priority: P5)

A visitor exploring the portfolio discovers Andrew's creative side through an interactive "Detective Raccoon" easter egg in a Play card that reveals personality beyond professional achievements.

**Why this priority**: Adds personality and memorability but is purely supplementary. Nice-to-have for making the portfolio stand out but not essential for conveying professional value.

**Independent Test**: Can be fully tested by hovering over or interacting with the small Play card and observing the "Detective Raccoon" animation or icon reveal.

**Acceptance Scenarios**:

1. **Given** a visitor is viewing the portfolio, **When** they scan the grid, **Then** they see a small (single square) Play card labeled "Creative"
2. **Given** the Play card is visible, **When** a visitor hovers over or interacts with it, **Then** a "Detective Raccoon" icon or animation is revealed
3. **Given** the easter egg is triggered, **When** a visitor observes it, **Then** it provides a subtle, delightful moment that shows personality

---

### User Story 6 - Professional Contact & Networking (Priority: P3)

A visitor who wants to connect with Andrew can easily find and use contact links (GitHub, LinkedIn, Email) through a footer navigation that is accessible from every part of the page.

**Why this priority**: Essential for converting interest into connections, but only valuable after visitors have seen content that interests them. Should be persistent but unobtrusive.

**Independent Test**: Can be fully tested by scrolling to the footer and verifying all three contact links (GitHub, LinkedIn, Email) are present and functional.

**Acceptance Scenarios**:

1. **Given** a visitor wants to contact Andrew, **When** they scroll to the footer, **Then** they see simple links to GitHub, LinkedIn, and Email
2. **Given** the footer links are visible, **When** a visitor clicks the GitHub link, **Then** they are directed to Andrew's GitHub profile
3. **Given** the footer is displayed, **When** a visitor clicks the LinkedIn link, **Then** they are directed to Andrew's LinkedIn profile
4. **Given** contact options are shown, **When** a visitor clicks the Email link, **Then** their default email client opens with Andrew's email address pre-populated

---

### Edge Cases

- What happens when a visitor uses a screen reader or requires keyboard navigation?
- How does the grid layout adapt on different screen sizes (mobile, tablet, desktop, ultrawide)?
- What happens if external links (GitHub, LinkedIn, Knyte) are unavailable or broken?
- How does the site perform on slower network connections?
- What happens when a visitor has animations disabled in their browser preferences?
- How does dark mode display on devices with different color calibrations?
- What happens if a visitor zooms in/out significantly (200%+ or 50% zoom)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Site MUST display a hero section containing the headline "Building the Infrastructure for Agentic AI"
- **FR-002**: Site MUST display the subtitle "Andrew Xiong. CEO @ Knyte. Hardware Engineer. Builder." in the hero section
- **FR-003**: Site MUST provide two action buttons in the hero section labeled "View Knyte" and "Engineering Logs"
- **FR-004**: Site MUST organize content in a bento grid layout (modular grid of cards rather than vertical scrolling list)
- **FR-005**: Site MUST display a large Ventures card (2x2 grid slots) containing Knyte Inc. information, status, description, and metadata
- **FR-006**: Site MUST display a medium Hardware Lab card (1x2 grid slots) with Pi Camera Node title, technical specifications, and visual documentation
- **FR-007**: Site MUST display a medium Research card (1x2 grid slots) with Machine Learning focus and key areas (data preprocessing, binary classification, decision trees)
- **FR-008**: Site MUST display a small Play card (1x1 grid slot) with "Creative" title and interactive Detective Raccoon element
- **FR-009**: Site MUST provide a footer with links to GitHub, LinkedIn, and Email (mailto)
- **FR-010**: Site MUST use dark mode as the default color scheme with high contrast
- **FR-011**: Site MUST use sans-serif typography for headers and monospace typography for technical details
- **FR-012**: Site MUST support modern browsers (Chrome, Firefox, Safari, Edge current versions)
- **FR-013**: Site MUST be responsive and adapt layout to different screen sizes
- **FR-014**: Site MUST generate pages statically (no server-side rendering required at request time)
- **FR-015**: Site MUST include visual elements for cards (diagrams, animations, or static images as appropriate)
- **FR-016**: Hardware Lab card MUST provide access to detailed KiCad schematics
- **FR-017**: Ventures card MUST display visual representation of cloud/server infrastructure
- **FR-018**: Play card element MUST reveal on hover or user interaction
- **FR-019**: Site MUST be accessible via keyboard navigation
- **FR-020**: Site MUST use status indicators where appropriate (e.g., "Current" for active projects)
- **FR-021**: Site MUST avoid generic "About Me" paragraphs in favor of bullet points and concise information

### Key Entities

- **Portfolio Card**: Represents a module in the bento grid, containing title, content, visual elements, size specification (1x1, 1x2, 2x2), and optional interaction behavior
- **Project/Venture**: Represents a professional endeavor with title, status (current/past), description, metadata, and visual representation
- **Contact Link**: Represents an external profile or communication channel with platform name (GitHub/LinkedIn/Email) and destination URL
- **Visual Asset**: Represents imagery, diagrams, or animations associated with cards, containing type (static/animated), purpose, and display conditions

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors can identify Andrew's current role and primary value proposition within 5 seconds of page load
- **SC-002**: Site loads and displays all critical content (hero + at least one card) in under 3 seconds on standard broadband connection (25 Mbps)
- **SC-003**: All interactive elements (buttons, hover states, links) respond to user input in under 200 milliseconds
- **SC-004**: Grid layout adapts to mobile, tablet, and desktop viewports without horizontal scrolling
- **SC-005**: Site achieves at least 90/100 on Lighthouse Performance score for static pages
- **SC-006**: All contact links in footer successfully direct users to correct destinations (GitHub profile, LinkedIn profile, email client) 100% of the time
- **SC-007**: Visitors can navigate the entire site using only keyboard controls
- **SC-008**: Page content is readable with minimum contrast ratio of 7:1 for normal text and 4.5:1 for large text (WCAG AAA standard for dark mode)
- **SC-009**: Interactive Detective Raccoon element reveals successfully on hover/interaction 95%+ of attempts
- **SC-010**: Site displays correctly in latest versions of Chrome, Firefox, Safari, and Edge browsers without layout breaks
