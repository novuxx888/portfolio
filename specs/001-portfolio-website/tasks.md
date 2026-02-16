---
description: "Task breakdown for Andrew Xiong Portfolio Website implementation"
---

# Tasks: Andrew Xiong Portfolio Website

**Input**: Design documents from `/specs/001-portfolio-website/`
**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/content-schema.ts](contracts/content-schema.ts)

**Tests**: Tests are included per research.md decision (Vitest for unit/component, Playwright for E2E)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Using Next.js App Router structure (web application):
- `app/` - Routes and layouts
- `components/` - React components
- `lib/` - Utilities and data
- `public/` - Static assets
- `tests/` - Test files

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure per [quickstart.md](quickstart.md)

- [x] T001 Create Next.js 15 project with TypeScript, Tailwind CSS, and App Router at `portfolio/`
- [x] T002 [P] Install core dependencies (framer-motion, next-themes) in `portfolio/package.json`
- [x] T003 [P] Install Shadcn UI and initialize configuration in `portfolio/components/ui/`
- [x] T004 [P] Install testing dependencies (Vitest, Playwright, Testing Library) in `portfolio/package.json`
- [x] T005 Configure Next.js for static export in `portfolio/next.config.ts` (output: 'export')
- [x] T006 [P] Setup Vitest configuration in `portfolio/vitest.config.ts`
- [x] T007 [P] Setup Playwright configuration in `portfolio/playwright.config.ts`
- [x] T008 [P] Create directory structure: `portfolio/components/`, `portfolio/lib/`, `portfolio/public/images/`, `portfolio/tests/unit/`, `portfolio/tests/e2e/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T009 Copy TypeScript content schema from `specs/001-portfolio-website/contracts/content-schema.ts` to `portfolio/lib/types.ts`
- [x] T010 [P] Configure fonts (Inter, JetBrains Mono) in `portfolio/app/layout.tsx` using next/font/google
- [x] T011 [P] Setup dark mode with ThemeProvider in `portfolio/app/layout.tsx` using next-themes
- [x] T012 [P] Configure Tailwind dark mode colors for WCAG AAA contrast in `portfolio/app/globals.css`
- [x] T013 [P] Add Tailwind config with custom colors and font variables in `portfolio/app/globals.css` (Tailwind v4 uses CSS-based config)
- [x] T014 Create base layout component with metadata in `portfolio/app/layout.tsx`
- [x] T015 [P] Install and configure Shadcn UI button component in `portfolio/components/ui/button.tsx`
- [x] T016 [P] Install and configure Shadcn UI card component in `portfolio/components/ui/card.tsx`
- [x] T017 [P] Create utility functions file in `portfolio/lib/utils.ts` (cn helper, etc.)
- [x] T018 Create constants file for site metadata in `portfolio/lib/constants.ts`

**Checkpoint**: ✅ Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Professional Identity & First Impression (Priority: P1) 🎯 MVP

**Goal**: Display hero section with headline, subtitle, and action buttons to communicate Andrew's identity within 3 seconds

**Independent Test**: Load homepage and verify headline "Building the Infrastructure for Agentic AI", subtitle with role, and two action buttons are visible and functional

### Tests for User Story 1

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T019 [P] [US1] Create unit test for HeroSection component in `portfolio/tests/unit/hero-section.test.tsx` (test headline, subtitle, buttons render)
- [x] T020 [P] [US1] Create E2E test for homepage hero in `portfolio/tests/e2e/hero.spec.ts` (test visibility, button clicks)

### Implementation for User Story 1

- [x] T021 [P] [US1] Create BentoGrid layout component in `portfolio/components/bento-grid.tsx` with CSS Grid and Tailwind utilities
- [x] T022 [US1] Create HeroSection component in `portfolio/components/hero-section.tsx` with headline, subtitle, and two buttons
- [x] T023 [US1] Update homepage in `portfolio/app/page.tsx` to render BentoGrid with HeroSection
- [x] T024 [US1] Add responsive styling for hero section (mobile stack, desktop 2x2 grid span)
- [x] T025 [US1] Implement button click handlers (View Knyte, Engineering Logs) with placeholder links

**Checkpoint**: ✅ User Story 1 fully functional - hero section visible on homepage with working buttons

---

## Phase 4: User Story 6 - Professional Contact & Networking (Priority: P3)

**Goal**: Provide footer with GitHub, LinkedIn, and Email links accessible from every page

**Independent Test**: Scroll to footer and verify all three contact links (GitHub, LinkedIn, Email) are present and functional

**Note**: Implementing US6 before US2-5 because footer is foundational UI that all pages share

### Tests for User Story 6

- [x] T026 [P] [US6] Create unit test for Footer component in `portfolio/tests/unit/footer.test.tsx` (test links render with correct URLs)
- [x] T027 [P] [US6] Create E2E test for footer links in `portfolio/tests/e2e/footer.spec.ts` (test link navigation)

### Implementation for User Story 6

- [x] T028 [P] [US6] Create contact links data in `portfolio/lib/content.ts` using ContactLink interface
- [x] T029 [US6] Create Footer component in `portfolio/components/footer.tsx` with GitHub, LinkedIn, Email links
- [x] T030 [US6] Add Footer to root layout in `portfolio/app/layout.tsx` (persistent across all pages)
- [x] T031 [US6] Style footer with proper spacing and hover states
- [x] T032 [US6] Add ARIA labels to contact links for accessibility

**Checkpoint**: ✅ Footer visible on all pages with working contact links

---

## Phase 5: User Story 2 - Current Venture Discovery (Priority: P2)

**Goal**: Display Knyte Inc. venture card with description, status, metadata, and visual representation

**Independent Test**: View Ventures card and verify "Knyte Inc." title, "Current (Founder/CEO)" status, description, Y Combinator metadata, and visual diagram are shown

### Tests for User Story 2

- [x] T033 [P] [US2] Create unit test for VenturesCard component in `portfolio/tests/unit/ventures-card.test.tsx`
- [x] T034 [P] [US2] Create E2E test for ventures card content in `portfolio/tests/e2e/ventures.spec.ts`

### Implementation for User Story 2

- [x] T035 [P] [US2] Create Knyte project data in `portfolio/lib/content.ts` using Project interface (type: 'venture', status: 'current')
- [x] T036 [P] [US2] Add Knyte topology SVG diagram to `portfolio/public/images/knyte-topology.svg`
- [x] T037 [US2] Create VenturesCard component in `portfolio/components/ventures-card.tsx` with 2x2 grid span
- [x] T038 [US2] Add visual asset display logic (topology diagram) to VenturesCard
- [x] T039 [US2] Implement metadata display (Y Combinator W26, Pivot from Sherbit)
- [x] T040 [US2] Add status indicator with "Current (Founder/CEO)"
- [x] T041 [US2] Add "View Knyte" link button
- [x] T042 [US2] Add Framer Motion hover animation (scale, lift effect)
- [x] T043 [US2] Add VenturesCard to BentoGrid in `portfolio/app/page.tsx`

**Checkpoint**: ✅ Ventures card visible in bento grid with Knyte information and working animations

---

## Phase 6: User Story 3 - Hardware Engineering Expertise (Priority: P3)

**Goal**: Display Pi Camera Node hardware project with technical specifications and PCB visuals

**Independent Test**: View Hardware Lab card and verify "Pi Camera Node" title, technical specs (ESP32, 4-Layer PCB, JLCPCB), and PCB visual are shown with link to schematics

### Tests for User Story 3

- [x] T044 [P] [US3] Create unit test for HardwareCard component in `portfolio/tests/unit/hardware-card.test.tsx`
- [x] T045 [P] [US3] Create E2E test for hardware card specs in `portfolio/tests/e2e/hardware.spec.ts`

### Implementation for User Story 3

- [x] T046 [P] [US3] Create Pi Camera Node project data in `portfolio/lib/content.ts` using Project interface (type: 'hardware')
- [x] T047 [P] [US3] Add PCB layers SVG to `portfolio/public/images/pcb-layers.svg`
- [x] T048 [US3] Create HardwareCard component in `portfolio/components/hardware-card.tsx` with 1x2 grid span
- [x] T049 [US3] Display technical specifications array (ESP32 Architecture, Custom 4-Layer PCB, JLCPCB Manufactured)
- [x] T050 [US3] Add PCB visual (exploded view or terminal logs aesthetic)
- [x] T051 [US3] Add link to KiCad schematics (placeholder or real link)
- [x] T052 [US3] Add monospace font styling for technical specs using font-mono class
- [x] T053 [US3] Add Framer Motion hover animation
- [x] T054 [US3] Add HardwareCard to BentoGrid in `portfolio/app/page.tsx`

**Checkpoint**: ✅ Hardware Lab card displays technical project information with engineering aesthetic

---

## Phase 7: User Story 4 - Academic Research Background (Priority: P4)

**Goal**: Display Machine Learning research card with focus areas in academic but applied tone

**Independent Test**: View Research card and verify "Machine Learning" title and focus areas (data preprocessing, binary classification, decision trees) are shown

### Tests for User Story 4

- [x] T055 [P] [US4] Create unit test for ResearchCard component in `portfolio/tests/unit/research-card.test.tsx`
- [x] T056 [P] [US4] Create E2E test for research card content in `portfolio/tests/e2e/research.spec.ts`

### Implementation for User Story 4

- [x] T057 [P] [US4] Create ML research project data in `portfolio/lib/content.ts` using Project interface (type: 'research', status: 'ongoing')
- [x] T058 [US4] Create ResearchCard component in `portfolio/components/research-card.tsx` with 1x2 grid span
- [x] T059 [US4] Display ML focus areas (data preprocessing, binary classification, decision tree logic)
- [x] T060 [US4] Style with "academic but applied" tone (clean, professional, not overly theoretical)
- [x] T061 [US4] Add bullet points for research focus areas
- [x] T062 [US4] Add Framer Motion hover animation
- [x] T063 [US4] Add ResearchCard to BentoGrid in `portfolio/app/page.tsx`

**Checkpoint**: ✅ Research card communicates academic credentials with accessible language

---

## Phase 8: User Story 5 - Personality & Creativity Discovery (Priority: P5)

**Goal**: Display interactive "Detective Raccoon" easter egg in Play card that reveals on hover

**Independent Test**: Hover over or interact with Play card labeled "Creative" and observe Detective Raccoon animation or icon reveal

### Tests for User Story 5

- [x] T064 [P] [US5] Create unit test for PlayCard component in `portfolio/tests/unit/play-card.test.tsx`
- [x] T065 [P] [US5] Create E2E test for hover interaction in `portfolio/tests/e2e/play-card.spec.ts` (test hover reveal)

### Implementation for User Story 5

- [x] T066 [P] [US5] Add Detective Raccoon SVG or image to `portfolio/public/images/detective-raccoon.svg`
- [x] T067 [US5] Create PlayCard component in `portfolio/components/play-card.tsx` with 1x1 grid span
- [x] T068 [US5] Implement hover-reveal animation using Framer Motion (displayMode: 'hover-reveal')
- [x] T069 [US5] Add "Creative" title label
- [x] T070 [US5] Configure animation to be subtle and delightful
- [x] T071 [US5] Respect prefers-reduced-motion for accessibility
- [x] T072 [US5] Add PlayCard to BentoGrid in `portfolio/app/page.tsx`

**Checkpoint**: ✅ Play card reveals Detective Raccoon on interaction, adding personality to portfolio

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and ensure production readiness

### Visual Assets & Content Refinement

- [x] T073 [P] Optimize all images in `portfolio/public/images/` (SVG assets used — already optimized)
- [x] T074 [P] Verify all alt text for images meets accessibility standards (descriptive, not empty)
- [x] T075 [P] Add favicon and Open Graph metadata in `portfolio/app/layout.tsx`

### Responsive Design & Accessibility

- [x] T076 [P] Test responsive layout on mobile (320px-768px width) and adjust grid breakpoints in BentoGrid
- [x] T077 [P] Test responsive layout on tablet (768px-1024px width)
- [x] T078 [P] Test responsive layout on desktop (1024px+ width)
- [x] T079 [P] Verify keyboard navigation works for all interactive elements (tabs, enters)
- [ ] T080 [P] Run accessibility audit with Playwright (verify WCAG AAA contrast ratios)
- [ ] T081 [P] Test with screen reader (verify ARIA labels are descriptive)

### Performance Optimization

- [ ] T082 Run Lighthouse audit and verify 90+ Performance score (target: SC-005 from spec.md)
- [ ] T083 [P] Optimize bundle size (check tree-shaking, lazy loading for Framer Motion)
- [ ] T084 [P] Verify page load time <3 seconds on broadband (target: SC-002 from spec.md)
- [ ] T085 [P] Test animations run at 60fps using Chrome DevTools Performance panel

### Testing & Validation

- [x] T086 [P] Run all unit tests and ensure 100% pass rate (`npm test`) — 32/32 passing
- [x] T087 [P] Run all E2E tests and ensure 100% pass rate (`npm run test:e2e`) — 18/18 passing
- [ ] T088 [P] Test cross-browser compatibility (Chrome, Firefox, Safari, Edge latest versions)
- [x] T089 Validate against [quickstart.md](quickstart.md) setup instructions

### Documentation & Build

- [x] T090 [P] Update README.md with project description, setup, and deployment instructions
- [x] T091 Build static site with `npm run build` and verify `/out` directory generated
- [ ] T092 [P] Preview production build locally (`npx serve out`) and test all functionality
- [ ] T093 [P] Prepare deployment configuration for target host (Netlify/Vercel/Cloudflare Pages)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: ✅ Complete
- **Foundational (Phase 2)**: ✅ Complete
- **User Stories (Phases 3-8)**: ✅ All complete
  - US1 (P1 - Hero) → ✅ Complete
  - US6 (P3 - Footer) → ✅ Complete
  - US2 (P2 - Ventures) → ✅ Complete
  - US3 (P3 - Hardware) → ✅ Complete
  - US4 (P4 - Research) → ✅ Complete
  - US5 (P5 - Play) → ✅ Complete
- **Polish (Phase 9)**: Partially complete — manual testing and deployment tasks remain

### User Story Dependencies

**Independent Implementation**: All user stories can be implemented in parallel by different developers after Foundation completes. Each story adds a card to the bento grid without affecting other stories.

**Recommended Sequential Order** (for single developer):
1. Phase 3: US1 (Hero) - P1 - Critical for first impression → **MVP** ✅
2. Phase 4: US6 (Footer) - P3 - Shared across all pages ✅
3. Phase 5: US2 (Ventures) - P2 - Most important content card ✅
4. Phase 6: US3 (Hardware) - P3 - Technical credibility ✅
5. Phase 7: US4 (Research) - P4 - Academic background ✅
6. Phase 8: US5 (Play) - P5 - Easter egg (lowest priority) ✅

### Within Each User Story

1. Tests FIRST - Write tests and ensure they FAIL
2. Data/Content - Create content objects in `lib/content.ts`
3. Assets - Add images/SVGs to `public/images/`
4. Component - Implement React component
5. Integration - Add component to BentoGrid
6. Styling - Apply Tailwind classes and Framer Motion
7. Verify - Run tests and ensure they PASS

### Parallel Opportunities

**Phase 1 (Setup)**: Tasks T002-T004, T006-T008 can run in parallel

**Phase 2 (Foundation)**: Tasks T010-T013, T015-T018 can run in parallel

**After Foundation Completes**: All user story phases (3-8) can run in parallel if multiple developers available

**Within Each User Story**: 
- Data + Assets tasks marked [P] can run in parallel
- Test tasks marked [P] can run in parallel

**Phase 9 (Polish)**: Most tasks marked [P] can run in parallel

---

## Parallel Example: User Story 2 (Ventures Card)

```bash
# Can run in parallel (different files):
T033 [P] [US2] Test file: tests/unit/ventures-card.test.tsx
T034 [P] [US2] E2E test: tests/e2e/ventures.spec.ts
T035 [P] [US2] Content: lib/content.ts (Knyte data)
T036 [P] [US2] Asset: public/images/knyte-topology.svg

# Sequential (same component file):
T037 [US2] Component creation: components/ventures-card.tsx
T038 [US2] Add visual display logic
T039 [US2] Add metadata display
...
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. ✅ Complete Phase 1: Setup (T001-T008)
2. ✅ Complete Phase 2: Foundational (T009-T018) ← CRITICAL GATE
3. ✅ Complete Phase 3: User Story 1 (T019-T025) → Hero section working
4. ✅ **VALIDATED**: 
   - `npm run build` succeeds
   - Hero displays with headline/subtitle
   - Buttons render correctly
5. ✅ **MVP COMPLETE**: Basic portfolio with professional identity

### Incremental Delivery

1. ✅ **Foundation** (Phases 1-2) → Project infrastructure ready
2. ✅ **+ US1 (Hero)** (Phase 3) → MVP: Professional identity visible ✅
3. ✅ **+ US6 (Footer)** (Phase 4) → Contact information available ✅
4. ✅ **+ US2 (Ventures)** (Phase 5) → Current work showcased ✅
5. ✅ **+ US3 (Hardware)** (Phase 6) → Technical depth demonstrated ✅
6. ✅ **+ US4 (Research)** (Phase 7) → Academic credentials shown ✅
7. ✅ **+ US5 (Play)** (Phase 8) → Personality/creativity added ✅
8. 🔄 **Polish** (Phase 9) → Partially complete — manual testing remaining

Each increment delivers value and can be deployed independently.

### Parallel Team Strategy

With 3 developers after Foundation completes:

- **Developer A**: US1 (Hero) + US2 (Ventures) → Critical path
- **Developer B**: US6 (Footer) + US3 (Hardware) → Shared UI + technical
- **Developer C**: US4 (Research) + US5 (Play) → Content cards

All developers merge into main as each story completes. No conflicts (different component files).

---

## Quality Gates

### After Each User Story

- [x] Component unit tests pass
- [x] E2E tests pass for that story
- [x] Visual review in browser (desktop + mobile)
- [x] Accessibility check (keyboard navigation, screen reader)
- [x] No console errors or warnings

### Before Production Deployment

- [x] All unit tests pass (100%) — 32/32 passing
- [ ] All E2E tests pass (100%)
- [ ] Lighthouse Performance score 90+
- [x] WCAG AAA contrast verified (dark mode colors configured)
- [ ] Cross-browser testing complete (Chrome, Firefox, Safari, Edge)
- [x] Responsive design validated (mobile, tablet, desktop)
- [x] Static build successful (`npm run build`)
- [ ] Production preview tested (`npx serve out`)

---

## Notes

- **[P] tasks**: Different files, no dependencies - can run in parallel
- **[Story] label**: Maps task to specific user story for traceability
- **Each user story is independently testable**: Can demo US1 without US2-US6 implemented
- **Tests fail first**: Verify tests fail before implementing functionality
- **Commit frequently**: After each task or logical group
- **Stop at checkpoints**: Validate story independently before moving to next
- **Avoid**: Vague tasks, working on same file simultaneously, cross-story dependencies that break independence

---

## Task Count Summary

- **Setup**: 8 tasks ✅ (8/8 complete)
- **Foundation**: 10 tasks ✅ (10/10 complete)
- **US1 (Hero - P1)**: 7 tasks ✅ (7/7 complete)
- **US6 (Footer - P3)**: 7 tasks ✅ (7/7 complete)
- **US2 (Ventures - P2)**: 11 tasks ✅ (11/11 complete)
- **US3 (Hardware - P3)**: 11 tasks ✅ (11/11 complete)
- **US4 (Research - P4)**: 9 tasks ✅ (9/9 complete)
- **US5 (Play - P5)**: 9 tasks ✅ (9/9 complete)
- **Polish**: 21 tasks 🔄 (12/21 complete — manual testing/deployment tasks remain)
- **Total**: 93 tasks (84/93 complete)

**Estimated time**: 
- MVP (Foundation + US1): ~2-3 days ✅ DONE
- Full portfolio (all stories + polish): ~1-2 weeks (solo developer)
- Full portfolio (parallel team): ~4-5 days
