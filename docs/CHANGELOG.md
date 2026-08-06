# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog and this project follows Semantic Versioning.

---

## [Unreleased]

### Added

- Team section on the homepage with three role-based profile cards (Fractional CTO, AI Acceleration Lead, Delivery Excellence) and expertise tag pills
- Methodology section on the homepage with four-step engagement process: Diagnose, Align, Accelerate, Scale
- Services section on the homepage with Fractional CTO, AI Engineering Acceleration and Leadership & Culture cards

### Security

- Upgraded `astro` from `^4.16.0` to `^7.1.6` to patch reflected XSS (GHSA-4g3v-8h47-v7g6, GHSA-f48w-9m4c-m7f5, GHSA-7pw4-f3q4-r2p2) and Host header SSRF vulnerabilities
- Updated transitive dependency `sharp` to `>=0.35.0` to address inherited libvips CVEs (CVE-2026-33327, CVE-2026-33328, CVE-2026-35590, CVE-2026-35591)
- Hero section component on homepage with primary and secondary CTAs
- Reusable UI components: Button, Card, Badge, Container, Section
- Design system showcase page at `/design-system`
- Astro project initialization
- TypeScript strict configuration
- Base layout component with SEO metadata
- Homepage placeholder page
- Custom CSS design tokens aligned with Design System
- Global styles and reset
- Utility classes
- Subtle animation utilities
- Vite path aliases for TypeScript `@components`, `@layouts` and other aliases
- Project scaffolding matching documented architecture

---

## [0.1.0] - 2026-07-30

### Added

- Initial project documentation
- AI development guidelines
- Architecture documentation
- Design System documentation
- Product roadmap
