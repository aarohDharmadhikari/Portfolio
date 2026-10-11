
# Application Architecture

## Overview

The portfolio is built with Next.js and React using TypeScript. The application uses the Next.js App Router to organize layouts, pages, metadata, and global styling.

The architecture should separate page composition, reusable interface components, portfolio content, and shared utilities.

## Technology Layers

| Layer | Responsibility | Technology |
|---|---|---|
| Application | Routing, layouts, rendering | Next.js |
| Interface | Components and page composition | React |
| Type system | Static type checking | TypeScript |
| Styling | Layout, colors, responsiveness | Tailwind CSS |
| Animation | Motion and transitions | Framer Motion |
| Icons | Interface iconography | Lucide React |
| Visual effects | Specialized graphics where required | Three.js |

## Directory Responsibilities

### `src/app/`

Contains application routes, shared layouts, global styles, and route-level metadata.

### `src/components/`

Contains reusable UI components, shared layout elements, and page-specific components.

### `src/data/`

Contains structured portfolio content, such as profile information, projects, and skills, where applicable.

### `src/lib/`

Contains shared helper functions and utilities.

### `public/`

Contains static assets served directly by the application, including images and other public resources.

### `docs/`

Contains technical documentation for the portfolio.

## Rendering Strategy

Use Server Components by default where practical.

Client Components should be used when browser-side behavior is necessary, such as interactive menus, local state, event handlers, or animation behavior that requires client-side execution.

Client-side code should remain focused on the interaction it supports.

## Content Flow

The intended content flow is:

1. Portfolio information is maintained in structured data or appropriate page content.
2. Pages retrieve or import the required information.
3. Shared components present that information consistently.
4. Styling and interaction layers control presentation and behavior.

Avoid duplicating the same profile or project information across unrelated components when a shared source is practical.

## Shared Layout

The root layout should provide the common document structure, global styles, metadata defaults, and shared site-wide interface elements.

Page-specific content should be owned by the corresponding route.

## Architectural Constraints

- Avoid unnecessary global state.
- Keep reusable components focused.
- Avoid duplicating route content.
- Use typed data structures for repeated content.
- Keep browser-only behavior out of Server Components.
- Remove unused dependencies only after verifying they have no remaining use.
- Update this document whenever architectural decisions materially change.

## Implementation Status

This document describes the intended architecture and the existing Next.js application baseline. Specific routes, components, dependencies, and rendering behavior must be verified against the current source code before being documented as implemented.
