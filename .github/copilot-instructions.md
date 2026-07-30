# GitHub Copilot Instructions

## Project Overview

This repository contains the official website of Lime Brothers Co.

Lime Brothers Co is positioned as an Engineering Acceleration Company.

The website must communicate engineering excellence rather than traditional IT consulting.

---

# Primary Goals

Build a premium website.

Prioritize:

Maintainability

Performance

Accessibility

SEO

Responsiveness

Reusable components

---

# Preferred Technologies

Astro

TypeScript

CSS

Bootstrap Icons

AOS

Avoid introducing additional frameworks unless explicitly requested.

---

# Architecture

Prefer:

Component composition

Reusable layouts

Small focused files

Single Responsibility Principle

Avoid duplicated code.

---

# HTML

Always generate semantic HTML.

Prefer:

<header>

<nav>

<main>

<section>

<article>

<footer>

Never generate div-heavy layouts when semantic elements are available.

---

# CSS

Prefer:

CSS Variables

Flexbox

Grid

Logical properties

Clamp()

Modern CSS

Avoid:

!important

Deep selectors

Excessive nesting

Large CSS files

---

# JavaScript

Use modern ES modules.

Keep JavaScript minimal.

Avoid unnecessary DOM manipulation.

Prefer CSS over JavaScript when possible.

---

# Accessibility

Always include:

alt attributes

aria-label when appropriate

visible focus

keyboard navigation

high color contrast

semantic headings

---

# Performance

Minimize JavaScript.

Optimize images.

Prefer SVG.

Avoid render blocking.

Keep Lighthouse score above 95.

---

# Components

Prefer reusable components.

Examples:

Button

Card

Container

Hero

Navbar

Footer

Section

Timeline

Badge

CTA

---

# Design

Inspired by:

Stripe

Vercel

Linear

Raycast

Hashicorp

Notion

Minimalistic.

Premium.

Engineering focused.

Avoid generic Bootstrap appearance.

---

# SEO

Every page should include:

Unique title

Description

Canonical URL

OpenGraph metadata

Twitter Card metadata

Structured Data

---

# Commit Messages

Use Conventional Commits.

Examples:

feat(hero): create landing hero

feat(navbar): responsive navigation

feat(contact): create contact page

fix(layout): improve spacing

refactor(button): simplify styles

docs(readme): update documentation

---

# Preferred Coding Style

Readable code over clever code.

Composition over inheritance.

Small functions.

Reusable styles.

Consistent naming.

Avoid unnecessary abstractions.

---

# AI Behavior

When suggesting code:

Prefer production-ready implementations.

Avoid placeholders when a complete solution can be generated.

Explain architectural decisions.

Keep consistency across the project.

If multiple options exist, recommend the most maintainable one.