
# SEO and Deployment

## Purpose

This document records search visibility, metadata, and deployment requirements for the personal portfolio.

## Metadata

The website should provide:
- A clear page title.
- A concise, accurate meta description.
- Appropriate Open Graph metadata.
- A suitable social sharing image where configured.
- Consistent canonical URLs where required.
- Relevant indexing directives.

The professional designation must be consistent across page titles, descriptions, and social metadata.

Do not retain obsolete titles or descriptions from earlier versions of the portfolio.

## Domain and Public URLs

The live portfolio URL currently recorded in the project documentation is:

https://portfolio-xi-ivory-f5wgx7e77w.vercel.app/

Verify that this remains the intended public URL before release.

Any custom domain must be verified as owned or controlled before being used in `metadataBase` or canonical URLs.

## Search Engine Files

Where configured, review:
- `robots.txt`
- `sitemap.xml`
- Canonical metadata
- Open Graph metadata
- Social sharing images

Ensure these resources reference the correct production domain.

## Deployment Preparation

Before deployment:

1. Review the changed files.
2. Verify environment configuration.
3. Run the applicable validation checks.
4. Run a production build.
5. Test important routes and links.
6. Verify metadata and public asset paths.
7. Review the final changes before publishing.

## Environment Variables

If environment variables become necessary, document their purpose and names without exposing secret values.

Keep private credentials out of source control and public client-side bundles.

## Post-Deployment Verification

After deployment:
- Open the public website.
- Verify important routes.
- Check mobile and desktop layouts.
- Test contact and external links.
- Confirm that images and social previews work.
- Review browser-console and deployment errors where applicable.

## Release Records

Record significant changes in `CHANGELOG.md`.

Do not claim that a deployment, build, or SEO check succeeded unless it has actually been verified.
