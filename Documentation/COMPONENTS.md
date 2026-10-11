
# Component Documentation

## Purpose

This document records the responsibilities and conventions of reusable UI components.

Component names and responsibilities should be updated to match the actual source code as the redesign progresses.

## Component Categories

### Layout Components

Responsible for shared page structure and navigation.

Examples may include:
- Root layout.
- Site navigation.
- Footer.
- Shared page container.
- Section heading.

### Presentation Components

Responsible for displaying content consistently.

Examples may include:
- Project card.
- Skill category.
- Certification item.
- Education entry.
- Experience entry.
- Contact link.

### Interaction Components

Responsible for user-triggered behavior.

Examples may include:
- Mobile navigation menu.
- Copy-email control.
- Animated button.
- Expandable content, where required.

### Visual Components

Responsible for decorative or supporting visual effects.

Examples may include:
- Background treatment.
- Subtle motion effects.
- Decorative grid or gradient.

Visual components should not interfere with content readability, interaction, or performance.

## Component Design Principles

1. Give each component a clear responsibility.
2. Prefer composition over large, tightly coupled components.
3. Define explicit TypeScript props for reusable components.
4. Keep repeated content in structured data where appropriate.
5. Avoid duplicating business logic across pages.
6. Use semantic HTML elements.
7. Provide accessible labels and interaction states.
8. Respect reduced-motion preferences.
9. Avoid adding components that do not improve usability or maintainability.

## Client and Server Components

Use Server Components by default.

Use Client Components when interactivity, browser APIs, client-side state, or client-dependent animation is necessary.

Do not convert an entire page into a Client Component merely because one small component requires interactivity.

## Dependency Management

Before removing a component or package, search the project for imports, references, and related configuration.

Remove dependencies only when their functionality is no longer used and the application still passes the relevant checks.

## Maintenance

When a shared component changes materially, update this document with its actual responsibility, relevant props or dependencies, and accessibility considerations.
