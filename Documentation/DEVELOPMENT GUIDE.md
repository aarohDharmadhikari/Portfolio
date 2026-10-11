
# Development Guide

## Purpose

This guide records the development and maintenance conventions for my personal portfolio.

## Environment

The project uses Next.js, React, TypeScript, and npm.

Use a supported Node.js version compatible with the project's installed Next.js release.

## Dependency Installation

Install the project's dependencies using npm:

```bash
npm install
```

## Local Development

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Next.js in the terminal.

Stop the server using `Ctrl+C`.

## Available Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run lint` | Run the configured lint command |
| `npm run build` | Build the production application |
| `npm run start` | Start the production server after building |

The exact behavior of each command is defined in `package.json`.

If a command fails because of a script or framework version mismatch, fix the underlying configuration rather than documenting the failure as expected behavior.

## Coding Conventions

- Use TypeScript for application code.
- Prefer clear and descriptive names.
- Keep components focused on a specific responsibility.
- Avoid duplicating shared content.
- Keep content data separate from presentation where practical.
- Use semantic HTML.
- Handle interactive state explicitly.
- Avoid unnecessary packages and abstractions.
- Preserve existing functionality unless the redesign intentionally changes it.

## Content Changes

When updating a project, skill, certification, or profile detail, check for duplicate references across pages and metadata.

Update the relevant documentation when the change affects architecture, design, routes, or maintenance procedures.

## Asset Management

Store public website assets in the appropriate location under `public/`.

Use meaningful filenames and appropriate image formats. Verify image paths and alternative text.

Do not commit secrets, credentials, private keys, or local environment files containing sensitive information.

## Troubleshooting

### TypeScript errors

Run the available type-checking command if configured. Review the complete error output and fix the underlying type issue.

### Missing modules

Check the import path, filename casing, package installation, and whether the module exists.

### Build failures

Review the first meaningful error in the build output. Confirm that route components, metadata, and imports are valid.

### Missing images

Verify the asset's exact filename, extension, and location under `public/`.

## Change Discipline

Make focused changes, validate the affected functionality, and review the final diff before committing.

Do not record a successful validation result unless the corresponding command or test was actually run.
