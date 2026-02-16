# Data Model: Andrew Xiong Portfolio Website

**Date**: 2026-02-16  
**Feature**: [spec.md](spec.md) | [plan.md](plan.md)

## Overview

This document defines the data structures for the portfolio website. Since this is a static site with embedded content (no database), these entities represent TypeScript interfaces and content objects that will be statically defined in code.

---

## Core Entities

### 1. PortfolioCard

Represents a module in the bento grid layout containing content, visual elements, and layout specifications.

**Attributes**:
- `id`: string - Unique identifier for the card (e.g., "hero", "ventures", "hardware")
- `title`: string - Display title of the card
- `type`: CardType - Type of card (hero | ventures | hardware | research | play)
- `gridSize`: GridSize - Layout size specification
- `content`: CardContent - Main content of the card
- `visual`: VisualAsset | null - Associated visual element
- `links`: CardLink[] - Action buttons or external links
- `interactive`: boolean - Whether card has hover/interaction effects
- `metadata`: Record<string, string> | null - Additional key-value data (e.g., status, tags)

**Validation Rules**:
- `id` must be unique across all cards
- `gridSize` must match available grid slots (see GridSize entity)
- Hero card must have `type: 'hero'` and `gridSize.span: { cols: 2, rows: 2 }`
- Cards with `interactive: true` must define hover behavior in component

**State Transitions**: N/A (static content, no state changes)

**Relationships**:
- Has one optional VisualAsset
- Has zero or more CardLinks
- Belongs to BentoGrid layout

---

### 2. Project

Represents a professional endeavor, venture, or work showcase.

**Attributes**:
- `id`: string - Unique identifier
- `name`: string - Project name (e.g., "Knyte Inc.")
- `type`: ProjectType - Category (venture | hardware | research | creative)
- `status`: ProjectStatus - Current state (current | past | ongoing)
- `role`: string - Andrew's role (e.g., "Founder/CEO", "Hardware Engineer")
- `description`: string - Brief description of the project
- `specifications`: string[] | null - Technical specs (for hardware/research)
- `metadata`: ProjectMetadata - Additional context (e.g., Y Combinator status, pivot history)
- `links`: ExternalLink[] - Related resources (GitHub, documentation, live demo)
- `visual`: VisualAsset | null - Representative image or diagram

**Validation Rules**:
- `name` must be non-empty string
- `status: 'current'` projects should appear before `status: 'past'` in displays
- Hardware projects should include `specifications`
- Venture projects should include `metadata.funding` or `metadata.stage` if applicable

**State Transitions**: N/A (static content)

**Relationships**:
- Is displayed in one PortfolioCard
- Has zero or more ExternalLinks
- Has zero or one VisualAsset

---

### 3. ContactLink

Represents an external profile or communication channel.

**Attributes**:
- `platform`: ContactPlatform - Platform name (github | linkedin | email)
- `label`: string - Display text (e.g., "GitHub", "LinkedIn", "Email")
- `url`: string - Destination URL or mailto link
- `icon`: string | null - Icon identifier (for rendering platform icon)
- `ariaLabel`: string - Accessibility label for screen readers

**Validation Rules**:
- `url` must be valid URL or mailto link
- `platform: 'email'` must use `mailto:` protocol
- `platform: 'github'` must link to GitHub profile (https://github.com/*)
- `platform: 'linkedin'` must link to LinkedIn profile (https://linkedin.com/in/*)
- `ariaLabel` should describe the action (e.g., "Visit Andrew's GitHub profile")

**Relationships**:
- Is displayed in Footer component
- May be referenced in PortfolioCard links

---

### 4. VisualAsset

Represents imagery, diagrams, or animations associated with cards.

**Attributes**:
- `id`: string - Unique identifier
- `type`: AssetType - Type of asset (image | svg | animation | video)
- `source`: string - File path or URL (e.g., "/images/knyte-topology.svg")
- `altText`: string - Accessibility description
- `displayMode`: DisplayMode - How asset is shown (static | hover-reveal | background | animated)
- `dimensions`: AssetDimensions | null - Width and height (if fixed size)
- `animationConfig`: AnimationConfig | null - Framer Motion configuration (if animated)

**Validation Rules**:
- `source` must be valid file path in `/public` directory or absolute URL
- `altText` must be descriptive for screen readers (not empty string)
- `type: 'animation'` requires `animationConfig` to be defined
- `type: 'image'` should include `dimensions` for layout optimization
- `displayMode: 'hover-reveal'` only valid for Play card (Detective Raccoon)

**Relationships**:
- Is associated with zero or one PortfolioCard
- Is associated with zero or one Project

---

## Supporting Types

### CardType
Enumeration of card types:
- `hero` - Hero section (headline, subtitle, CTAs)
- `ventures` - Current ventures/companies
- `hardware` - Hardware projects
- `research` - Academic/research work
- `play` - Creative/easter egg content

### GridSize
Layout dimensions for bento grid positioning:

**Attributes**:
- `span`: { cols: number, rows: number } - Grid span (e.g., { cols: 2, rows: 2 })
- `responsive`: ResponsiveSpan - Responsive breakpoint overrides

**Allowed Values**:
- Small (1x1): `{ cols: 1, rows: 1 }`
- Medium (1x2): `{ cols: 1, rows: 2 }`
- Large (2x2): `{ cols: 2, rows: 2 }`

**Responsive Overrides**:
```typescript
{
  mobile: { cols: 1, rows: 1 },    // Stack vertically on mobile
  tablet: { cols: 2, rows: 1 },    // 2 columns on tablet
  desktop: { cols: 2, rows: 2 }    // Full size on desktop
}
```

### ProjectStatus
Enumeration of project states:
- `current` - Actively working on
- `ongoing` - Continuous work (e.g., research)
- `past` - Completed or archived

### ProjectType
Enumeration of project categories:
- `venture` - Startup/company
- `hardware` - Physical engineering project
- `research` - Academic/ML research
- `creative` - Creative/fun project

### ContactPlatform
Enumeration of contact platforms:
- `github` - GitHub profile
- `linkedin` - LinkedIn profile
- `email` - Email address

### AssetType
Enumeration of visual asset types:
- `image` - Static image (PNG, JPG, WebP)
- `svg` - Scalable vector graphic
- `animation` - Animated element (Framer Motion)
- `video` - Video file (MP4, WebM)

### DisplayMode
Enumeration of asset display modes:
- `static` - Always visible
- `hover-reveal` - Shows on hover/interaction
- `background` - Used as card background
- `animated` - Plays animation loop

---

## Data Relationships Diagram

```
BentoGrid
    │
    ├── PortfolioCard (Hero)
    │       ├── CardContent
    │       └── CardLinks[]
    │
    ├── PortfolioCard (Ventures)
    │       ├── Project (Knyte Inc.)
    │       │       ├── VisualAsset (topology diagram)
    │       │       └── ProjectMetadata
    │       └── CardLinks[]
    │
    ├── PortfolioCard (Hardware)
    │       ├── Project (Pi Camera Node)
    │       │       ├── VisualAsset (PCB layers)
    │       │       └── specifications[]
    │       └── CardLinks[]
    │
    ├── PortfolioCard (Research)
    │       ├── Project (ML research)
    │       └── CardContent
    │
    └── PortfolioCard (Play)
            └── VisualAsset (Detective Raccoon)
                    └── AnimationConfig

Footer
    └── ContactLinks[]
            ├── GitHub
            ├── LinkedIn
            └── Email
```

---

## Content Storage Strategy

Since this is a static site with no database, content will be stored as:

### 1. TypeScript Data Files (`/lib/content.ts`)

```typescript
// Example structure
export const projects: Project[] = [
  {
    id: 'knyte',
    name: 'Knyte Inc.',
    type: 'venture',
    status: 'current',
    role: 'Founder/CEO',
    description: 'Managed cloud infrastructure for autonomous AI employees...',
    metadata: {
      funding: 'Y Combinator W26 Applicant',
      pivotFrom: 'Sherbit'
    },
    visual: {
      id: 'knyte-topology',
      type: 'svg',
      source: '/images/knyte-topology.svg',
      altText: 'Cloud infrastructure topology diagram',
      displayMode: 'static'
    }
  },
  // ... more projects
]

export const contactLinks: ContactLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/andrewxiong',
    icon: 'github',
    ariaLabel: "Visit Andrew's GitHub profile"
  },
  // ... more links
]
```

### 2. Component-Embedded Content

For card-specific content (headlines, descriptions), content may be directly embedded in React components for simplicity:

```tsx
// components/hero-section.tsx
export function HeroSection() {
  return (
    <section>
      <h1>Building the Infrastructure for Agentic AI.</h1>
      <p>Andrew Xiong. CEO @ Knyte. Hardware Engineer. Builder.</p>
    </section>
  )
}
```

**Rationale**: Since content rarely changes and there's no CMS, embedding in components reduces abstraction overhead for a single-user portfolio.

---

## Validation & Constraints Summary

| Entity | Key Constraint | Validation Method |
|--------|---------------|-------------------|
| PortfolioCard | Unique IDs, valid grid sizes | TypeScript compile-time checks |
| Project | Non-empty names, valid status | Runtime validation in data file |
| ContactLink | Valid URLs, correct protocols | URL validation in constants |
| VisualAsset | Valid file paths, non-empty alt text | File existence check + linting |

**No runtime database validation needed** - TypeScript interfaces enforce structure at compile time.

---

## Next Steps

- Define TypeScript interfaces in `/lib/types.ts` (see [contracts/content-schema.ts](contracts/content-schema.ts))
- Create content data in `/lib/content.ts` using defined interfaces
- Implement components that consume these data structures
- Validate with TypeScript strict mode enabled
