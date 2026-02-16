# Implementation Plan: Andrew Xiong Portfolio Website

**Branch**: `001-portfolio-website` | **Date**: 2026-02-16 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-portfolio-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a Linear-style portfolio website featuring a bento grid layout showcasing Andrew Xiong's professional identity as Founder/CEO of Knyte and Hardware Engineer. The site will use Next.js 15 with static site generation, displaying content through modular cards (hero, ventures, hardware lab, research, creative easter egg) with dark mode, high contrast design, and responsive mobile support. No database or backend required - all content embedded statically.

## Technical Context

**Language/Version**: TypeScript/JavaScript with Next.js 15 (App Router)  
**Primary Dependencies**: Next.js 15, React 18, Tailwind CSS, Shadcn UI, Framer Motion  
**Storage**: N/A (static content embedded in components/data files)  
**Testing**: NEEDS CLARIFICATION (Vitest/Jest for unit, Playwright/Cypress for E2E, or testing library preference)  
**Target Platform**: Modern web browsers (Chrome, Firefox, Safari, Edge - latest versions), mobile responsive
**Project Type**: web (static site generation)  
**Performance Goals**: <3s initial page load, 90+ Lighthouse Performance score, 60fps animations  
**Constraints**: Static generation only (no SSR), no backend/database, responsive design (mobile-first), WCAG AAA contrast in dark mode  
**Scale/Scope**: Single-page portfolio with 5-6 content sections (hero + 4-5 cards), ~10-15 static routes total including detail pages

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: Static-First ✅ PASS
- All content will be static files (HTML, CSS, JavaScript, images, fonts)
- Next.js configured for static site generation (SSG) via `output: 'export'`
- No server-side processing or database required
- Content served as-is from web server or CDN

### Principle II: Simple Structure ✅ PASS
- Clear directory separation: `/components`, `/app`, `/public`, `/lib`
- Assets organized by type: `/public/images`, `/styles`
- Build process (Next.js) is industry-standard and well-documented
- Static export simplifies deployment to any CDN/static host

### Principle III: Browser Compatibility ✅ PASS
- Targets modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement: core content accessible without JavaScript
- Framework dependency (Next.js/React) acceptable as it compiles to standard HTML/CSS/JS
- Tailwind CSS ensures consistent cross-browser styling

### Principle IV: Performance ✅ PASS
- Next.js Image component automatically optimizes images
- Static generation minimizes HTTP requests
- Tailwind CSS tree-shaking reduces CSS bundle size
- Framer Motion animations will be optimized for 60fps

### Principle V: Accessibility ✅ PASS
- Semantic HTML through React components
- ARIA labels will be implemented via Shadcn UI components
- Keyboard navigation support required (FR-019)
- WCAG AAA contrast ratio enforced (SC-008)

### Technical Constraints ✅ PASS
- All files servable via HTTP/HTTPS (static export)
- No backend services required (static content)
- JavaScript enhances experience but core content accessible without it (progressive enhancement)

### File Organization ⚠️ DEVIATION (JUSTIFIED)
- Next.js App Router structure differs from traditional `/css`, `/js`, `/images`
- Modern convention: `/app` (routes), `/components` (React), `/public` (static assets), `/lib` (utilities)
- **Justification**: Next.js is industry standard for React static sites; structure is well-documented and widely adopted; simplifies development and deployment; constitutional intent (organized structure) is maintained through Next.js conventions

**GATE STATUS**: ✅ **PASS** - One justified deviation from traditional file organization (Next.js conventions superior for React/TypeScript projects)

---

### Post-Phase 1 Re-evaluation (2026-02-16)

*Re-check after data model, contracts, and quickstart design completed.*

#### Design Review Against Constitution

**Principle I: Static-First** ✅ **REINFORCED**
- Data model confirms no database (TypeScript interfaces for static content)
- Content stored in `/lib/content.ts` as static TypeScript objects
- All content compiles into JavaScript bundle at build time
- No runtime server requests for content

**Principle II: Simple Structure** ✅ **REINFORCED**
- Data model defines clear entity boundaries (PortfolioCard, Project, ContactLink, VisualAsset)
- Type system enforces structure at compile time (no runtime validation overhead)
- Content schema provides single source of truth for data contracts
- Quickstart demonstrates straightforward setup process (6 steps to running site)

**Principle III: Browser Compatibility** ✅ **MAINTAINED**
- TypeScript compiles to ES5+ JavaScript (broad compatibility)
- No browser-specific APIs used in data model
- Progressive enhancement maintained (content accessible without JavaScript hydration)

**Principle IV: Performance** ✅ **ENHANCED**
- Static data model eliminates database queries (zero latency)
- TypeScript tree-shaking removes unused data at build time
- Framer Motion research confirms 60fps achievable with GPU-accelerated transforms
- Font optimization via `next/font` eliminates layout shift
- Vitest + Playwright testing ensures performance regressions caught early

**Principle V: Accessibility** ✅ **VALIDATED**
- Data model includes `ariaLabel` in ContactLink and ExternalLink entities
- `altText` required for all VisualAsset entities (enforced by TypeScript)
- Dark mode implementation uses WCAG AAA contrast ratios (7:1 for text, 4.5:1 for large text)
- Keyboard navigation testable via Playwright accessibility APIs

**Technical Constraints** ✅ **CONFIRMED**
- Static export configuration documented in quickstart (`output: 'export'`)
- No backend APIs in contracts (all interfaces are client-side data structures)
- JavaScript optional: HTML content pre-rendered at build time
- Deployment targets confirm static hosting (Netlify, Vercel, Cloudflare Pages, GitHub Pages)

**File Organization** ✅ **CLARIFIED**
- Project structure clearly defined in plan.md
- Follows Next.js App Router conventions (industry standard)
- Clear separation: `/app` (routes), `/components` (UI), `/lib` (logic/data), `/public` (assets)
- Documentation structure: `/specs/001-portfolio-website/` for all planning artifacts

#### New Findings

**✅ No new constitutional violations introduced**

**✅ Additional compliance measures identified:**
1. Type safety enforces data integrity (prevents malformed content)
2. Content schema includes example data (reduces implementation errors)
3. Quickstart includes testing setup (ensures quality gates)
4. Research resolves all technical unknowns (no speculative implementation)

**Post-Phase 1 Gate Status**: ✅ **PASS** - Design reinforces constitutional principles and introduces no new violations

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-website/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
│   └── content-schema.ts  # TypeScript interfaces for content structure
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
portfolio/                    # Next.js application root
├── app/                     # Next.js App Router (pages & layouts)
│   ├── layout.tsx          # Root layout with fonts, metadata, dark mode
│   ├── page.tsx            # Homepage with bento grid
│   ├── globals.css         # Global styles, Tailwind imports
│   └── (routes)/           # Optional: detail pages for projects
│       ├── knyte/
│       └── hardware/
├── components/              # React components
│   ├── ui/                 # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── hero-section.tsx    # Hero with headline & CTAs
│   ├── bento-grid.tsx      # Grid layout container
│   ├── ventures-card.tsx   # Knyte Inc. card (2x2)
│   ├── hardware-card.tsx   # Pi Camera Node card (1x2)
│   ├── research-card.tsx   # ML research card (1x2)
│   ├── play-card.tsx       # Creative easter egg (1x1)
│   └── footer.tsx          # Contact links
├── lib/                     # Utility functions & data
│   ├── content.ts          # Static content data
│   ├── utils.ts            # Helper functions (cn, etc.)
│   └── constants.ts        # Config constants
├── public/                  # Static assets
│   ├── images/             # Project images, icons
│   │   ├── knyte-topology.svg
│   │   ├── pcb-layers.png
│   │   └── detective-raccoon.svg
│   └── fonts/              # Custom fonts if needed
├── tests/                   # Test files
│   ├── unit/               # Component unit tests
│   └── e2e/                # End-to-end tests
├── next.config.mjs          # Next.js config (output: 'export')
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

**Structure Decision**: Selected Next.js App Router structure (web application). This is the modern standard for React static sites, providing:
- Built-in static site generation (SSG)
- Optimized image handling
- File-based routing
- Component-based architecture
- TypeScript support out-of-the-box

The structure aligns with constitutional intent through clear separation of concerns (`/app` for routes, `/components` for UI, `/public` for assets, `/lib` for logic) while following industry-standard Next.js conventions.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Next.js file structure vs traditional `/css`, `/js`, `/images` | Next.js App Router is industry standard for React SSG; provides optimized builds, image handling, and routing out-of-the-box | Traditional structure would require manual setup of React, TypeScript, build tools, image optimization, routing - significantly more complex and error-prone |
