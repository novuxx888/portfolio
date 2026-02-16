# Research: Andrew Xiong Portfolio Website

**Date**: 2026-02-16  
**Feature**: [spec.md](spec.md) | [plan.md](plan.md)

## Overview

This document consolidates research findings for technical decisions required to implement the portfolio website. Each section addresses unknowns identified in the Technical Context and explores best practices for the chosen technology stack.

---

## 1. Testing Framework Selection

**Unknown from Technical Context**: Testing framework choice (Vitest/Jest/Playwright/Cypress)

### Decision: Vitest + Playwright

**Rationale**:
- **Vitest** for unit/component testing:
  - Native ESM support (aligns with Next.js 15 modern module system)
  - Vite-powered (faster than Jest for modern projects)
  - Jest-compatible API (easy migration, familiar syntax)
  - Better TypeScript support out-of-the-box
  - Integrated with React Testing Library
  
- **Playwright** for E2E testing:
  - Multi-browser support (Chrome, Firefox, Safari, Edge) matches FR-012
  - Better performance than Cypress for static sites
  - Built-in accessibility testing capabilities (supports FR-019, SC-007)
  - Lighthouse integration for performance audits (SC-005)
  - Screenshot/visual regression testing for responsive design validation

**Alternatives Considered**:
- **Jest**: Mature but slower; requires additional ESM configuration for Next.js 15
- **Cypress**: Good for E2E but slower than Playwright; no native accessibility tree inspection
- **Testing Library alone**: Insufficient for full E2E browser testing and performance metrics

---

## 2. Bento Grid Layout Implementation

**Context**: Bento grid is the core layout pattern (FR-004) with mixed card sizes (1x1, 1x2, 2x2)

### Decision: CSS Grid with Tailwind Utilities

**Rationale**:
- CSS Grid native support for explicit row/column spanning
- Tailwind provides responsive grid utilities: `grid`, `grid-cols-*`, `col-span-*`, `row-span-*`
- Mobile-first responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:` for adaptive layouts
- No additional JavaScript library needed (aligns with Static-First principle)

**Implementation Pattern**:
```tsx
// Bento grid container
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Hero - full width on mobile, 2x2 on desktop */}
  <div className="col-span-1 md:col-span-2 row-span-2">
    <HeroSection />
  </div>
  
  {/* Ventures card - 2x2 */}
  <div className="col-span-1 md:col-span-2 row-span-2">
    <VenturesCard />
  </div>
  
  {/* Hardware - 1x2 */}
  <div className="col-span-1 row-span-2">
    <HardwareCard />
  </div>
  
  {/* Research - 1x2 */}
  <div className="col-span-1 row-span-2">
    <ResearchCard />
  </div>
  
  {/* Play - 1x1 */}
  <div className="col-span-1 row-span-1">
    <PlayCard />
  </div>
</div>
```

**Best Practices**:
- Use `grid-auto-rows-[minmax(0,1fr)]` for consistent row heights
- Implement responsive breakpoints: mobile (stack vertically), tablet (2 columns), desktop (4 columns)
- Use `gap-*` for consistent spacing between cards
- Test with CSS Grid Inspector in browser DevTools

**Alternatives Considered**:
- **Flexbox**: Less suitable for complex 2D grid layouts with explicit spanning
- **Third-party grid libraries** (e.g., React Grid Layout): Unnecessary complexity; overkill for static layout

---

## 3. Framer Motion Performance for Static Sites

**Context**: Framer Motion required for card hover states and page transitions (FR-015, FR-018) while maintaining 60fps (Performance Goals)

### Decision: Selective Animation with Hardware Acceleration

**Rationale**:
- Framer Motion is industry standard for React animations
- Static site generation compatible (animations run client-side after hydration)
- Proper configuration prevents performance bottlenecks

**Best Practices for 60fps on Static Sites**:

1. **Animate GPU-accelerated properties only**:
   - ✅ `transform`, `opacity`, `scale`, `rotate`
   - ❌ Avoid `width`, `height`, `top`, `left` (cause layout reflow)

2. **Use `layoutId` sparingly**:
   - Shared layout animations require DOM measurements (expensive)
   - Only needed for complex transitions between routes (not needed for hover states)

3. **Lazy load Framer Motion**:
   ```tsx
   // Only load for interactive cards
   const MotionCard = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
     ssr: false // Skip SSR/SSG for animation components
   })
   ```

4. **Optimize hover interactions**:
   ```tsx
   <motion.div
     whileHover={{ scale: 1.02, y: -4 }}
     transition={{ type: "spring", stiffness: 300, damping: 20 }}
   >
     {/* Card content */}
   </motion.div>
   ```
   - Use `spring` animations for natural feel
   - Set reasonable stiffness/damping to avoid jank

5. **Reduce motion for accessibility**:
   ```tsx
   const prefersReducedMotion = useReducedMotion()
   
   <motion.div
     animate={prefersReducedMotion ? {} : { ... }}
   >
   ```

**Performance Validation**:
- Use Chrome DevTools Performance panel to profile animations
- Verify 60fps with `Rendering > Frame Rendering Stats`
- Test on lower-end devices (throttle CPU 4x-6x)

**Alternatives Considered**:
- **CSS transitions only**: Simpler but less flexible for complex interactions (Detective Raccoon reveal)
- **GSAP**: More powerful but larger bundle size; overkill for simple hover states
- **React Spring**: Good alternative but Framer Motion has better Next.js integration and documentation

---

## 4. Dark Mode Implementation in Next.js 15

**Context**: Dark mode is default (FR-010) with high contrast and WCAG AAA compliance (FR-010, SC-008)

### Decision: Tailwind Dark Mode with next-themes

**Rationale**:
- **Tailwind dark mode** provides `dark:` variant for all utilities
- **next-themes** handles theme persistence, SSG hydration, and prevents flash of wrong theme
- Automatic system preference detection with manual override option

**Implementation Pattern**:

1. **Configure Tailwind** (`tailwind.config.ts`):
   ```ts
   export default {
     darkMode: 'class', // Use class-based dark mode
     theme: {
       extend: {
         colors: {
           background: 'hsl(var(--background))',
           foreground: 'hsl(var(--foreground))',
           // High contrast color system
         }
       }
     }
   }
   ```

2. **Setup next-themes** in root layout:
   ```tsx
   import { ThemeProvider } from 'next-themes'
   
   export default function RootLayout({ children }) {
     return (
       <html lang="en" suppressHydrationWarning>
         <body>
           <ThemeProvider
             attribute="class"
             defaultTheme="dark"
             enableSystem={true}
           >
             {children}
           </ThemeProvider>
         </body>
       </html>
     )
   }
   ```

3. **WCAG AAA Contrast Colors**:
   ```css
   /* globals.css - Dark mode palette */
   :root.dark {
     --background: 222 47% 11%;    /* Near black #0a0a0a */
     --foreground: 0 0% 95%;       /* Off white #f5f5f5 */
     --primary: 210 100% 60%;      /* High contrast blue */
     --accent: 47 100% 70%;        /* High contrast yellow */
   }
   ```
   - Ensure 7:1 contrast for normal text (WCAG AAA)
   - Ensure 4.5:1 for large text (18pt+)
   - Use tools: Contrast Checker, Accessible Colors

**Best Practices**:
- Use CSS custom properties (CSS variables) for theme colors
- Test with browser DevTools contrast ratio analyzer
- Provide hover states with sufficient contrast (>3:1 from base)
- Use Shadcn UI components (pre-configured with accessible dark mode)

**Alternatives Considered**:
- **Manual dark mode toggle**: Requires custom localStorage logic; next-themes handles this
- **System preference only**: Removes user control; better to default dark but allow override
- **Separate dark stylesheets**: Causes flash of unstyled content; Tailwind `dark:` variant is instant

---

## 5. Typography System (Inter + JetBrains Mono)

**Context**: FR-011 requires sans-serif (Inter) for headers and monospace (JetBrains Mono) for technical details

### Decision: Next.js Font Optimization with Google Fonts

**Rationale**:
- Next.js `next/font/google` automatically optimizes font loading
- Self-hosts fonts (no external requests to Google)
- Eliminates layout shift with `font-display: swap` and size-adjust
- Supports variable fonts for better performance (Inter has 9 weights in single file)

**Implementation Pattern**:

```tsx
// app/layout.tsx
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

```css
/* globals.css */
@layer base {
  body {
    @apply font-sans; /* Inter by default */
  }
  
  code, pre, .mono {
    @apply font-mono; /* JetBrains Mono for technical text */
  }
}
```

**Best Practices**:
- Use variable fonts to reduce file size (single file for all weights)
- Preload critical font weights (400, 600, 700 for Inter)
- Use `font-display: swap` to prevent invisible text during load

**Alternatives Considered**:
- **Manual font files**: Requires manual optimization; Next.js font loader is superior
- **System fonts only**: Doesn't match Linear-style aesthetic requirement

---

## 6. Static Site Generation Configuration

**Context**: FR-014 requires static generation; Constitution requires static-only architecture

### Decision: Next.js Static Export with `output: 'export'`

**Rationale**:
- Generates pure HTML/CSS/JS files (no Node.js server required)
- Deployable to any CDN/static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages)
- Meets constitutional requirement for static-only architecture
- Maintains all Next.js optimizations (image optimization via static paths)

**Configuration**:

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export (or use fixed image sizes)
  },
  trailingSlash: true, // Optional: adds .html to routes for compatibility
}

export default nextConfig
```

**Build Process**:
```bash
npm run build   # Generates static files to /out directory
# /out contains complete static site ready for deployment
```

**Limitations Accepted**:
- No dynamic routes with `getServerSideProps` (not needed - all content is static)
- No API routes (not needed - no backend)
- No image optimization at runtime (use fixed sizes or `unoptimized: true`)

**Deployment Targets**:
- Netlify: Drop `/out` folder or connect to Git
- Vercel: Automatically detects static export
- Cloudflare Pages: Deploy `/out` directory
- GitHub Pages: Deploy `/out` to gh-pages branch
- Any CDN: Upload `/out` contents

**Alternatives Considered**:
- **Server-side rendering (SSR)**: Violates constitution (requires server)
- **Incremental Static Regeneration (ISR)**: Requires server for revalidation
- **Gatsby**: More opinionated, steeper learning curve than Next.js

---

## Summary of Resolved Unknowns

| Unknown from Technical Context | Decision | Key Takeaway |
|-------------------------------|----------|--------------|
| Testing framework | Vitest + Playwright | Modern, fast, comprehensive coverage |
| Bento grid implementation | CSS Grid + Tailwind | Native browser support, no extra libraries |
| Animation performance | Framer Motion with GPU acceleration | 60fps achievable with best practices |
| Dark mode strategy | Tailwind + next-themes | Prevents flash, WCAG AAA compliant |
| Font loading | Next.js font optimization | Self-hosted, zero layout shift |
| Static generation | `output: 'export'` | Pure static files, CDN-ready |

**All NEEDS CLARIFICATION items resolved.** Ready to proceed to Phase 1 (Data Model & Contracts).
