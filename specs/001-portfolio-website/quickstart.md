# Quickstart Guide: Andrew Xiong Portfolio Website

**Feature**: [spec.md](spec.md) | [plan.md](plan.md) | [data-model.md](data-model.md)  
**Last Updated**: 2026-02-16

## Prerequisites

Before you begin, ensure you have:

- **Node.js**: v18.17 or later ([download](https://nodejs.org/))
- **npm**: v9.6 or later (comes with Node.js)
- **Git**: For version control ([download](https://git-scm.com/))
- **Code Editor**: VS Code recommended ([download](https://code.visualstudio.com/))

---

## Quick Start (5 minutes)

### 1. Create Next.js Project

```bash
# Create new Next.js 15 project with App Router and TypeScript
npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir

# Navigate to project directory
cd portfolio
```

**Configuration prompts** (select these options):
```
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … No
✔ Would you like to use App Router? … Yes
✔ Would you like to customize the default import alias? … No
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install framer-motion next-themes

# Shadcn UI setup (installs CLI)
npx shadcn@latest init
```

**Shadcn configuration** (select these options):
```
✔ Which style would you like to use? › New York
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? … Yes
```

```bash
# Install Shadcn UI components
npx shadcn@latest add button card
```

### 3. Install Development Dependencies

```bash
# Testing frameworks
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test

# Initialize Playwright
npx playwright install
```

### 4. Configure Next.js for Static Export

Edit `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
```

### 5. Set Up Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

### 6. Configure Dark Mode

```bash
# Install next-themes (if not already installed)
npm install next-themes
```

Update `app/layout.tsx` to wrap children with ThemeProvider:

```typescript
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

Edit `app/globals.css` to add dark mode colors:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* Add other light mode variables */
  }

  .dark {
    --background: 222 47% 11%;
    --foreground: 0 0% 95%;
    /* High contrast dark mode palette */
  }
}

@layer base {
  body {
    @apply bg-background text-foreground font-sans;
  }
  
  code, pre {
    @apply font-mono;
  }
}
```

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure Setup

Create the recommended directory structure:

```bash
# Create directories
mkdir -p components/ui
mkdir -p lib
mkdir -p public/images

# Create content schema file
New-Item -ItemType File -Path "lib/types.ts"
New-Item -ItemType File -Path "lib/content.ts"
New-Item -ItemType File -Path "lib/utils.ts"
New-Item -ItemType File -Path "lib/constants.ts"
```

### Copy Content Schema

Copy the TypeScript interfaces from [contracts/content-schema.ts](contracts/content-schema.ts) to `lib/types.ts`.

---

## Building Components

### Create Bento Grid Layout

`components/bento-grid.tsx`:

```typescript
import { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {children}
    </div>
  );
}
```

### Create Hero Section

`components/hero-section.tsx`:

```typescript
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-card p-8 rounded-lg">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Building the Infrastructure for Agentic AI.
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8">
        Andrew Xiong. CEO @ Knyte. Hardware Engineer. Builder.
      </p>
      <div className="flex gap-4">
        <Button size="lg">View Knyte</Button>
        <Button size="lg" variant="outline">Engineering Logs</Button>
      </div>
    </section>
  );
}
```

### Update Homepage

`app/page.tsx`:

```typescript
import { BentoGrid } from '@/components/bento-grid';
import { HeroSection } from '@/components/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <BentoGrid>
        <HeroSection />
        {/* Add more cards here */}
      </BentoGrid>
    </main>
  );
}
```

---

## Testing Setup

### Vitest Configuration

Create `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

Create `tests/setup.ts`:

```typescript
import '@testing-library/jest-dom';
```

Add test script to `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test"
  }
}
```

### Example Unit Test

Create `tests/unit/hero-section.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/hero-section';

describe('HeroSection', () => {
  it('renders headline', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Building the Infrastructure for Agentic AI/i)).toBeInTheDocument();
  });

  it('renders subtitle with role', () => {
    render(<HeroSection />);
    expect(screen.getByText(/CEO @ Knyte/i)).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<HeroSection />);
    expect(screen.getByText('View Knyte')).toBeInTheDocument();
    expect(screen.getByText('Engineering Logs')).toBeInTheDocument();
  });
});
```

Run tests:

```bash
npm test
```

---

## Building for Production

### Build Static Site

```bash
# Build static export
npm run build

# Output is in /out directory
# Deploy /out to any static host (Netlify, Vercel, Cloudflare Pages, etc.)
```

### Preview Production Build

```bash
# Serve the /out directory locally
npx serve out
```

---

## Next Steps

1. **Implement Cards**: Create components for Ventures, Hardware, Research, and Play cards
2. **Add Content**: Populate `lib/content.ts` with your project data
3. **Add Visuals**: Place images in `public/images/` directory
4. **Style Cards**: Add Framer Motion animations for hover states
5. **Create Footer**: Implement footer with contact links
6. **Test**: Write unit tests for components and E2E tests with Playwright
7. **Deploy**: Push to GitHub and deploy to Vercel/Netlify

---

## Common Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Testing
npm test                 # Run unit tests
npm run test:e2e         # Run E2E tests

# Building
npm run build            # Build static site
npm run lint             # Run ESLint

# Production
npx serve out            # Preview production build locally
```

---

## Resources

- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Shadcn UI**: [ui.shadcn.com](https://ui.shadcn.com)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **Vitest**: [vitest.dev](https://vitest.dev/)
- **Playwright**: [playwright.dev](https://playwright.dev/)

---

## Troubleshooting

### Build fails with "Image optimization requires server"

**Fix**: Set `images.unoptimized: true` in `next.config.mjs` (already done in step 4)

### Dark mode flashes on page load

**Fix**: Ensure `suppressHydrationWarning` is on `<html>` tag and ThemeProvider is in root layout

### TypeScript errors with Shadcn components

**Fix**: Run `npx shadcn@latest add [component-name]` to ensure proper installation

### Fonts not loading

**Fix**: Verify `next/font/google` imports are in `layout.tsx` and CSS variables are applied to `<html>` tag

---

## Support

For issues specific to this project, refer to:
- [Specification](spec.md)
- [Implementation Plan](plan.md)
- [Data Model](data-model.md)
- [Type Definitions](contracts/content-schema.ts)
