# DECISIONS.md

> Architecture Decision Log (ADR)

This document records important architectural and product decisions made throughout the development of the Lime Brothers Co website.

The goal is to preserve context, explain trade-offs and avoid revisiting previously solved problems without good reason.

---

# Status Legend

| Status | Meaning |
|----------|---------|
| Accepted | Decision currently adopted |
| Proposed | Under evaluation |
| Deprecated | No longer recommended |
| Superseded | Replaced by another decision |

---

# ADR-001

## Title

Use Astro as the website framework.

**Status**

Accepted

**Date**

2026-07-30

### Context

The project requires:

- Excellent SEO
- Extremely high performance
- Static generation
- Component reuse
- Long-term maintainability

### Decision

Use Astro as the website framework.

### Alternatives Considered

- HTML only
- Next.js
- Nuxt
- Gatsby

### Why Astro

- Generates static HTML
- Excellent Lighthouse scores
- Minimal JavaScript
- Component architecture
- Easy deployment
- Low maintenance
- Future blog support

### Consequences

Positive

- Better performance
- Better maintainability
- Better SEO

Negative

- Team must learn Astro syntax

---

# ADR-002

## Title

Do not use Bootstrap CSS.

**Status**

Accepted

**Date**

2026-07-30

### Context

Bootstrap accelerates development but creates generic interfaces.

The company website must communicate engineering excellence and have its own visual identity.

### Decision

Do not use Bootstrap CSS.

Bootstrap Icons remain allowed.

### Alternatives

- Bootstrap
- Tailwind CSS
- Bulma

### Why

A custom Design System provides:

- Better brand identity
- Lower CSS size
- Greater flexibility
- Better long-term consistency

### Consequences

Positive

- Unique appearance
- Complete design control

Negative

- Higher initial implementation effort

---

# ADR-003

## Title

Adopt a custom Design System.

**Status**

Accepted

**Date**

2026-07-30

### Context

Every page should feel visually consistent.

### Decision

Create a reusable Design System based on:

- Design Tokens
- CSS Variables
- Reusable Components

### Consequences

- Easier maintenance
- Faster feature development
- Better scalability

---

# ADR-004

## Title

Position the company as an Engineering Acceleration Company.

**Status**

Accepted

**Date**

2026-07-30

### Context

Traditional consultancy websites are often generic and emphasize technology rather than business outcomes.

### Decision

Position Lime Brothers Co as an Engineering Acceleration Company.

### Messaging

The company does NOT sell software development.

The company accelerates engineering organizations.

### Consequences

Positive

- Stronger positioning
- Higher perceived value
- Better differentiation

---

# ADR-005

## Title

Minimal JavaScript.

**Status**

Accepted

### Context

Modern browsers provide excellent CSS capabilities.

### Decision

Use JavaScript only when necessary.

Allowed examples:

- Mobile menu
- Theme switch
- Scroll animations

Everything else should be implemented using CSS whenever possible.

---

# ADR-006

## Title

Accessibility as a first-class requirement.

**Status**

Accepted

### Decision

The project shall comply with WCAG AA guidelines.

Requirements include:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Proper contrast
- Accessible forms

Accessibility is not optional.

---

# ADR-007

## Title

Performance over visual effects.

**Status**

Accepted

### Decision

Avoid heavy animations.

Prioritize:

- Fast loading
- Smooth scrolling
- Minimal JavaScript

Target Lighthouse:

Performance ≥ 95

Accessibility = 100

SEO = 100

Best Practices = 100

---

# ADR-008

## Title

Mobile First.

**Status**

Accepted

### Decision

Every component must be designed for mobile before desktop.

Desktop enhancements should progressively build on the mobile experience.

---

# ADR-009

## Title

English as the primary language.

**Status**

Accepted

### Context

The company's branding is international.

### Decision

The website will be written primarily in English.

Future multilingual support (Portuguese) may be added.

---

# ADR-010

## Title

AI-assisted development.

**Status**

Accepted

### Context

The project is intentionally developed with the assistance of AI tools.

### Decision

Documentation, coding standards and project context should enable consistent collaboration with AI assistants.

The source of truth remains the repository.

---

# Future Decisions

This section will be expanded during development.

Possible future ADRs:

- CMS adoption
- Blog architecture
- Analytics provider
- Contact form backend
- Newsletter integration
- Search engine
- Hosting provider
- CDN strategy

---

# Decision Template

## ADR-XXX

### Title

...

### Status

Proposed

### Date

YYYY-MM-DD

### Context

...

### Decision

...

### Alternatives

...

### Consequences

Positive

Negative

### References

Links, issues, pull requests or external documentation.