# Features

This document tracks implemented and planned features for the Lime Brothers Co website.

---

## Implemented

### F-001: Project Setup
- Astro 4 project initialization
- TypeScript strict configuration
- Base layout with SEO metadata
- Design tokens, global styles, utilities, animations
- `npm run build` verified

### F-002: Design System
- Reusable UI components: `Button`, `Card`, `Badge`, `Container`, `Section`
- Design system showcase page at `/design-system`
- CSS custom properties aligned with Design System
- `npm run build` verified

### F-003: Hero Section
- Homepage hero with value proposition
- Primary and secondary CTAs
- Responsive typography and layout
- Uses design-system components
- Vite aliases configured for TypeScript path mapping
- `npm run build` verified

### F-004: Services Section
- Services section on homepage
- Service cards with Bootstrap Icons
- Responsive grid layout
- CTA to dedicated services page
- `npm run build` verified

### F-005: Methodology Section
- Four-step process: Diagnose, Align, Accelerate, Scale
- Dark-background section for visual contrast after Services
- Responsive grid layout (4 columns → 1 column on mobile)
- Semantic `<ol>` for ordered process steps
- Uses design-system `Section`, `Container`, `Badge` components
- `npm run build` verified

### F-006: Team Section
- Three role-based profile cards: Fractional CTO, AI Acceleration Lead, Delivery Excellence
- Expertise tag pills per card for scannable credibility signals
- Responsive grid layout (3 columns → 1 column on mobile)
- Semantic `<ul>` with `role="list"` for team member cards
- Uses design-system `Section`, `Container`, `Badge` components
- `npm run build` verified

---

## In Progress

_None._

---

## Backlog

### F-007: Case Studies / Clients
Logos, testimonials or case-study excerpts.

### F-008: Contact / CTA Section
Contact form and final conversion call-to-action.

### F-009: Navigation Header
Sticky responsive navigation.

### F-010: Footer
Site footer with links and social metadata.

### F-011: Blog / Insights
Content marketing article listing.

### F-012: Performance & Accessibility Audit
Lighthouse, a11y checks, image optimization, sitemap.
