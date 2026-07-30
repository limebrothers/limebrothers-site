# Architecture

## Purpose

This document describes the architectural decisions behind the Lime Brothers Co website.

The objective is to build a modern, maintainable and highly performant static website that reflects the company's engineering mindset.

---

# Architectural Principles

- Simplicity over complexity.
- Performance first.
- Accessibility first.
- SEO first.
- Reusable components.
- Semantic HTML.
- Progressive enhancement.

---

# Technology Stack

| Layer | Technology |
|--------|------------|
| Framework | Astro |
| Language | TypeScript |
| Styling | CSS (Custom Properties) |
| Icons | Bootstrap Icons |
| Animations | AOS |
| Deployment | Cloudflare Pages / Vercel |

---

# Project Structure

```
src/
│
├── assets/
│
├── components/
│   ├── home/
│   ├── layout/
│   ├── shared/
│   └── ui/
│
├── layouts/
│
├── pages/
│
├── styles/
│
└── lib/
```

---

# Component Strategy

Every component should have a single responsibility.

Examples:

- Navbar
- Hero
- Button
- Footer
- Card
- Timeline
- CTA

Avoid monolithic components.

---

# Styling Strategy

The project does not use Bootstrap CSS or Tailwind.

The design is entirely custom.

Styles are divided into:

- tokens.css
- typography.css
- globals.css
- utilities.css
- animations.css

---

# JavaScript Philosophy

Use JavaScript only when necessary.

Prefer CSS whenever possible.

Examples of acceptable JavaScript:

- Mobile menu
- Theme switch
- Scroll animations

Avoid unnecessary DOM manipulation.

---

# Performance Goals

- Lighthouse Performance > 95
- Accessibility = 100
- Best Practices = 100
- SEO = 100

---

# Accessibility

The project follows WCAG AA guidelines.

Requirements:

- Keyboard navigation
- Semantic HTML
- Visible focus
- Accessible forms
- High color contrast

---

# SEO

Every page must contain:

- unique title
- description
- canonical URL
- OpenGraph
- Twitter Cards
- Schema.org

---

# Future Evolution

The architecture should support:

- Blog
- Case Studies
- Workshops
- White Papers
- Customer Portal

without requiring structural changes.