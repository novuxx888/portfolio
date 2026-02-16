# Static Web App Constitution

## Core Principles

### I. Static-First
All content must be static files (HTML, CSS, JavaScript, images, fonts); No server-side processing or database; Content served as-is from web server

### II. Simple Structure
Organized directory structure with clear separation of concerns; Assets organized by type (css/, js/, images/); No complex build processes required for basic functionality

### III. Browser Compatibility
Support modern evergreen browsers (Chrome, Firefox, Safari, Edge); Progressive enhancement for older browsers; No framework dependencies for core functionality

### IV. Performance
Minimize file sizes and HTTP requests; Optimize images and assets; Leverage browser caching

### V. Accessibility
Semantic HTML markup; ARIA labels where appropriate; Keyboard navigation support

## Technical Constraints

All files must be servable via standard HTTP/HTTPS; No backend services or APIs required for core functionality; Client-side JavaScript optional but must degrade gracefully

## File Organization

Root index.html as entry point; CSS in /css or /styles directory; JavaScript in /js or /scripts directory; Images and media in /images or /assets directory

## Governance

Changes must maintain static-only architecture; New features cannot require server-side processing; This constitution guides all development decisions

**Version**: 1.0.0 | **Ratified**: 2026-02-16 | **Last Amended**: 2026-02-16
