/**
 * Content Schema: Andrew Xiong Portfolio Website
 * 
 * This file defines TypeScript interfaces for all content structures
 * used in the static portfolio site. These interfaces ensure type safety
 * and serve as contracts for content creation.
 * 
 * Date: 2026-02-16
 * Feature: specs/001-portfolio-website/
 */

// ============================================================================
// Enumerations
// ============================================================================

/**
 * Card types in the bento grid layout
 */
export type CardType = 'hero' | 'ventures' | 'hardware' | 'research' | 'play';

/**
 * Project categories
 */
export type ProjectType = 'venture' | 'hardware' | 'research' | 'creative';

/**
 * Project status states
 */
export type ProjectStatus = 'current' | 'ongoing' | 'past';

/**
 * Contact platforms
 */
export type ContactPlatform = 'github' | 'linkedin' | 'email';

/**
 * Visual asset types
 */
export type AssetType = 'image' | 'svg' | 'animation' | 'video';

/**
 * Asset display modes
 */
export type DisplayMode = 'static' | 'hover-reveal' | 'background' | 'animated';

// ============================================================================
// Supporting Types
// ============================================================================

/**
 * Grid span configuration for bento grid layout
 */
export interface GridSpan {
  cols: 1 | 2;
  rows: 1 | 2;
}

/**
 * Responsive grid overrides for different breakpoints
 */
export interface ResponsiveSpan {
  mobile?: GridSpan;
  tablet?: GridSpan;
  desktop?: GridSpan;
}

/**
 * Grid size specification with responsive overrides
 */
export interface GridSize {
  span: GridSpan;
  responsive?: ResponsiveSpan;
}

/**
 * Asset dimensions (optional, for optimization)
 */
export interface AssetDimensions {
  width: number;
  height: number;
}

/**
 * Framer Motion animation configuration
 */
export interface AnimationConfig {
  type: 'spring' | 'tween' | 'inertia';
  duration?: number;
  delay?: number;
  stiffness?: number;
  damping?: number;
  ease?: string | number[];
}

/**
 * Project metadata (flexible key-value pairs)
 */
export interface ProjectMetadata {
  funding?: string;
  stage?: string;
  pivotFrom?: string;
  timeline?: string;
  team?: string;
  [key: string]: string | undefined;
}

/**
 * Card content (flexible structure for different card types)
 */
export interface CardContent {
  headline?: string;
  subtext?: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  [key: string]: unknown;
}

// ============================================================================
// Core Entities
// ============================================================================

/**
 * External link (actions, resources)
 */
export interface ExternalLink {
  label: string;
  url: string;
  icon?: string;
  ariaLabel?: string;
  openInNewTab?: boolean;
}

/**
 * Card action link or button
 */
export interface CardLink extends ExternalLink {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

/**
 * Visual asset (images, SVGs, animations)
 */
export interface VisualAsset {
  id: string;
  type: AssetType;
  source: string;
  altText: string;
  displayMode: DisplayMode;
  dimensions?: AssetDimensions;
  animationConfig?: AnimationConfig;
}

/**
 * Contact link for footer
 */
export interface ContactLink {
  platform: ContactPlatform;
  label: string;
  url: string;
  icon?: string;
  ariaLabel: string;
}

/**
 * Project or venture
 */
export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  status: ProjectStatus;
  role: string;
  description: string;
  specifications?: string[];
  metadata?: ProjectMetadata;
  links?: ExternalLink[];
  visual?: VisualAsset;
}

/**
 * Portfolio card in bento grid
 */
export interface PortfolioCard {
  id: string;
  title: string;
  type: CardType;
  gridSize: GridSize;
  content: CardContent;
  visual?: VisualAsset;
  links?: CardLink[];
  interactive: boolean;
  metadata?: Record<string, string>;
}

// ============================================================================
// Content Collections
// ============================================================================

/**
 * Complete site content structure
 */
export interface SiteContent {
  cards: PortfolioCard[];
  projects: Project[];
  contactLinks: ContactLink[];
  metadata: SiteMetadata;
}

/**
 * Site-wide metadata
 */
export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  url: string;
  ogImage?: string;
  themeColor: string;
}

// ============================================================================
// Example Data Structure (for reference)
// ============================================================================

/**
 * Example: Ventures card with Knyte project
 */
export const EXAMPLE_VENTURES_CARD: PortfolioCard = {
  id: 'ventures',
  title: 'Ventures',
  type: 'ventures',
  gridSize: {
    span: { cols: 2, rows: 2 },
    responsive: {
      mobile: { cols: 1, rows: 1 },
      tablet: { cols: 2, rows: 1 },
      desktop: { cols: 2, rows: 2 },
    },
  },
  content: {
    headline: 'Knyte Inc.',
    description: 'Managed cloud infrastructure for autonomous AI employees on isolated virtual machines.',
    tags: ['Y Combinator W26 Applicant', 'Pivot from Sherbit'],
  },
  visual: {
    id: 'knyte-topology',
    type: 'svg',
    source: '/images/knyte-topology.svg',
    altText: 'Minimalist server and cloud infrastructure topology diagram',
    displayMode: 'static',
  },
  links: [
    {
      label: 'View Knyte',
      url: 'https://knyte.com',
      ariaLabel: 'Visit Knyte company website',
      variant: 'primary',
      openInNewTab: true,
    },
  ],
  interactive: true,
  metadata: {
    status: 'current',
  },
};

/**
 * Example: Contact links
 */
export const EXAMPLE_CONTACT_LINKS: ContactLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/andrewxiong',
    icon: 'github',
    ariaLabel: "Visit Andrew Xiong's GitHub profile",
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/andrewxiong',
    icon: 'linkedin',
    ariaLabel: "Visit Andrew Xiong's LinkedIn profile",
  },
  {
    platform: 'email',
    label: 'Email',
    url: 'mailto:andrew@knyte.com',
    icon: 'mail',
    ariaLabel: 'Send an email to Andrew Xiong',
  },
];

// ============================================================================
// Type Guards (for runtime validation if needed)
// ============================================================================

/**
 * Type guard: Check if object is a valid PortfolioCard
 */
export function isPortfolioCard(obj: unknown): obj is PortfolioCard {
  if (typeof obj !== 'object' || obj === null) return false;
  const card = obj as PortfolioCard;
  
  return (
    typeof card.id === 'string' &&
    typeof card.title === 'string' &&
    typeof card.type === 'string' &&
    typeof card.gridSize === 'object' &&
    typeof card.content === 'object' &&
    typeof card.interactive === 'boolean'
  );
}

/**
 * Type guard: Check if object is a valid Project
 */
export function isProject(obj: unknown): obj is Project {
  if (typeof obj !== 'object' || obj === null) return false;
  const project = obj as Project;
  
  return (
    typeof project.id === 'string' &&
    typeof project.name === 'string' &&
    typeof project.type === 'string' &&
    typeof project.status === 'string' &&
    typeof project.role === 'string' &&
    typeof project.description === 'string'
  );
}

/**
 * Type guard: Check if object is a valid ContactLink
 */
export function isContactLink(obj: unknown): obj is ContactLink {
  if (typeof obj !== 'object' || obj === null) return false;
  const link = obj as ContactLink;
  
  return (
    typeof link.platform === 'string' &&
    typeof link.label === 'string' &&
    typeof link.url === 'string' &&
    typeof link.ariaLabel === 'string'
  );
}
