/**
 * Content Schema: Andrew Xiong Portfolio Website
 *
 * TypeScript interfaces for all content structures used in the static portfolio site.
 */

// ============================================================================
// Enumerations
// ============================================================================

export type CardType = "hero" | "ventures" | "hardware" | "research" | "play";
export type ProjectType = "venture" | "hardware" | "research" | "creative";
export type ProjectStatus = "current" | "ongoing" | "past";
export type ContactPlatform = "github" | "linkedin" | "email";
export type AssetType = "image" | "svg" | "animation" | "video";
export type DisplayMode = "static" | "hover-reveal" | "background" | "animated";

// ============================================================================
// Supporting Types
// ============================================================================

export interface GridSpan {
  cols: 1 | 2;
  rows: 1 | 2;
}

export interface ResponsiveSpan {
  mobile?: GridSpan;
  tablet?: GridSpan;
  desktop?: GridSpan;
}

export interface GridSize {
  span: GridSpan;
  responsive?: ResponsiveSpan;
}

export interface AssetDimensions {
  width: number;
  height: number;
}

export interface AnimationConfig {
  type: "spring" | "tween" | "inertia";
  duration?: number;
  delay?: number;
  stiffness?: number;
  damping?: number;
  ease?: string | number[];
}

export interface ProjectMetadata {
  funding?: string;
  stage?: string;
  pivotFrom?: string;
  timeline?: string;
  team?: string;
  [key: string]: string | undefined;
}

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

export interface ExternalLink {
  label: string;
  url: string;
  icon?: string;
  ariaLabel?: string;
  openInNewTab?: boolean;
}

export interface CardLink extends ExternalLink {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export interface VisualAsset {
  id: string;
  type: AssetType;
  source: string;
  altText: string;
  displayMode: DisplayMode;
  dimensions?: AssetDimensions;
  animationConfig?: AnimationConfig;
}

export interface ContactLink {
  platform: ContactPlatform;
  label: string;
  url: string;
  icon?: string;
  ariaLabel: string;
}

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

export interface SiteContent {
  cards: PortfolioCard[];
  projects: Project[];
  contactLinks: ContactLink[];
  metadata: SiteMetadata;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  url: string;
  ogImage?: string;
  themeColor: string;
}

