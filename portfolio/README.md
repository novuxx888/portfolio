# Andrew Xiong — Portfolio

A modern, sleek portfolio website built with Next.js, featuring a bento grid layout that showcases Andrew Xiong's professional identity as Founder/CEO of Knyte and Hardware Engineer.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, Shadcn UI
- **Animations**: Framer Motion
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Theme**: Dark mode default via next-themes

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

```bash
# Run unit tests (32 tests)
npm test

# Run E2E tests (18 tests)
npm run test:e2e
```

## Building for Production

```bash
# Build static site (output to /out)
npm run build

# Preview the production build locally
npx serve out
```

The `/out` directory contains the complete static site ready for deployment to any CDN or static host.

## Deployment

Deploy the `/out` directory to any static hosting provider:

- **Vercel**: Connect your repo — auto-detects Next.js static export
- **Netlify**: Set build command to `npm run build` and publish directory to `out`
- **Cloudflare Pages**: Deploy the `out` directory
- **GitHub Pages**: Push `out` contents to `gh-pages` branch

## Project Structure

```
portfolio/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, theme, footer)
│   ├── page.tsx            # Homepage with bento grid
│   └── globals.css         # Tailwind + dark mode variables
├── components/              # React components
│   ├── ui/                 # Shadcn UI (button, card)
│   ├── bento-grid.tsx      # Grid layout container
│   ├── hero-section.tsx    # Hero (headline, CTAs)
│   ├── ventures-card.tsx   # Knyte Inc. card
│   ├── hardware-card.tsx   # Pi Camera Node card
│   ├── research-card.tsx   # ML research card
│   ├── play-card.tsx       # Detective Raccoon easter egg
│   └── footer.tsx          # Contact links
├── lib/                     # Data & utilities
│   ├── types.ts            # TypeScript interfaces
│   ├── content.ts          # Static content data
│   ├── constants.ts        # Site metadata & links
│   └── utils.ts            # Helpers (cn)
├── public/images/           # SVG assets
└── tests/                   # Unit & E2E tests
```

## Features

- **Bento Grid Layout** — Modular card-based design (1×1, 1×2, 2×2 sizes)
- **Dark Mode** — Default dark theme with WCAG AAA contrast
- **Responsive** — Mobile → tablet → desktop breakpoints
- **Accessible** — ARIA labels, keyboard navigation, reduced motion support
- **Static Export** — Pure HTML/CSS/JS, no server required
- **Animations** — GPU-accelerated hover effects via Framer Motion

## Specification

Full design documentation is in `specs/001-portfolio-website/`:
- `spec.md` — Feature specification & user stories
- `plan.md` — Implementation plan
- `tasks.md` — Task breakdown (93 tasks)
- `data-model.md` — Entity definitions
- `contracts/content-schema.ts` — TypeScript interfaces
