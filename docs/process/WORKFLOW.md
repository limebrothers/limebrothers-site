# WORKFLOW.md

> Engineering Workflow for the Lime Brothers Co Website

---

# Purpose

This document defines the official engineering workflow for this repository.

The objective is to ensure consistency, maintainability, high quality and predictable deliveries regardless of whether the work is performed by humans or AI assistants.

---

# Engineering Principles

Every change should improve the project.

Never sacrifice maintainability for speed.

Prefer simple solutions.

Favor readability over cleverness.

Avoid unnecessary complexity.

---

# Team Roles

## Product Owner

Responsible for:

- Product vision
- Prioritization
- Feature approval
- Acceptance criteria

---

## Principal Engineer (AI)

Responsible for:

- Architecture
- Technical decisions
- Code quality
- Documentation
- Component design
- Code review

The AI should always act as a Principal Engineer rather than a code generator.

---

## Developer

Responsible for:

- Implementing approved features
- Running tests
- Validating behavior
- Committing changes
- Deploying releases

---

# Development Cycle

Every feature follows the same lifecycle.

```
Idea
    │
    ▼

Feature Definition
    │
    ▼

Technical Planning
    │
    ▼

Architecture Review
    │
    ▼

Implementation
    │
    ▼

Validation
    │
    ▼

Code Review
    │
    ▼

Commit
    │
    ▼

Merge
```

---

# Feature Workflow

Each feature should contain:

- Objective
- Scope
- Requirements
- Dependencies
- Files Created
- Files Modified
- Implementation
- Validation Checklist
- Commit Message

---

# Definition of Ready (DoR)

A feature is ready for implementation only when:

- Objective is clearly defined.
- Scope is limited.
- Acceptance criteria exist.
- Dependencies are identified.
- Architecture impact is understood.

---

# Definition of Done (DoD)

A feature is complete only when:

- Implementation is finished.
- Documentation is updated.
- Responsive behavior is verified.
- Accessibility requirements are met.
- No console errors exist.
- No TypeScript errors exist.
- Code review has been completed.
- Commit message follows Conventional Commits.

---

# AI Workflow

Before writing code, the AI should:

1. Read the project documentation.
2. Understand the requested feature.
3. Identify impacted components.
4. Explain the proposed architecture.
5. Wait for approval if the implementation changes the architecture.

---

# Mandatory Context

The AI should always consider the following documents before implementing code:

- AI_CONTEXT.md
- CLAUDE.md
- docs/ARCHITECTURE.md
- docs/DESIGN_SYSTEM.md
- docs/DECISIONS.md
- docs/ROADMAP.md

If a proposed implementation conflicts with one of these documents, the conflict must be explicitly explained.

---

# Implementation Rules

Every implementation must include:

- Complete files
- No omitted code
- No placeholders
- No pseudo-code
- Production-ready implementation

Avoid partial snippets unless explicitly requested.

---

# Review Checklist

Before considering a feature complete, verify:

## Architecture

- Follows project standards
- Reuses existing components
- No duplicated logic

## HTML

- Semantic elements
- Correct heading hierarchy
- Accessible markup

## CSS

- Uses design tokens
- No duplicated styles
- Responsive behavior
- Mobile-first approach

## JavaScript / TypeScript

- Minimal JavaScript
- Strong typing
- No dead code
- No unnecessary complexity

## Accessibility

- Keyboard navigation
- Focus states
- Alt attributes
- Contrast
- Labels

## SEO

- Title
- Description
- Canonical
- Open Graph
- Structured Data

---

# Git Workflow

## Main Branch

Production-ready code only.

---

## Feature Branches

Naming convention:

```
feature/<feature-name>
```

Examples:

```
feature/design-system

feature/home-hero

feature/navbar

feature/contact-page
```

---

## Bug Fixes

```
fix/<bug-name>
```

---

## Refactoring

```
refactor/<description>
```

---

# Commit Convention

Use Conventional Commits.

Examples:

```
feat(hero): create landing hero

feat(layout): implement main layout

feat(theme): add dark mode

fix(navbar): improve accessibility

refactor(button): simplify component

docs(workflow): update engineering process
```

---

# Pull Request Checklist

Every Pull Request should answer:

- What problem does this solve?
- How was it implemented?
- Were architectural decisions affected?
- Were documents updated?
- How can it be tested?

---

# Prompt Template

When requesting a new feature from an AI assistant, use the following structure:

```
Sprint:

Feature:

Objective:

Requirements:

Constraints:

Expected Deliverables:

- Technical plan
- Files created
- Files modified
- Complete source code
- Validation steps
- Commit message
- Suggested next feature
```

---

# Documentation Policy

Whenever architecture changes:

Update:

- ARCHITECTURE.md
- DECISIONS.md

Whenever the visual language changes:

Update:

- DESIGN_SYSTEM.md

Whenever planning changes:

Update:

- ROADMAP.md

Whenever a release milestone is reached:

Update:

- CHANGELOG.md

---

# Long-Term Goal

This repository should remain understandable years from now.

Every engineering decision should be documented.

Every feature should be traceable.

Every implementation should prioritize clarity over cleverness.

The repository should reflect the same engineering standards that Lime Brothers Co delivers to its clients.