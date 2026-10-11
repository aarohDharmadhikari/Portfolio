
# Testing and Quality Assurance

## Purpose

This document defines the quality checks used before changes to the portfolio are considered complete.

It is a checklist, not a claim that all tests have already passed.

## Code Validation

Run the relevant checks supported by the project:

```bash
npm run lint
npm run build
```

If a type-checking script is available, run it as well.

Review warnings and errors rather than assuming a successful development-server start proves the application is production-ready.

## Route Testing

Verify each intended route directly:

- [ ] Home
- [ ] About Me
- [ ] Skills
- [ ] Experience
- [ ] Projects
- [ ] Contact
- [ ] Services

Check direct navigation, refresh behavior, internal links, and missing-route handling.

## Responsive Testing

Check the website at:
- [ ] Narrow mobile width
- [ ] Typical mobile width
- [ ] Tablet width
- [ ] Laptop width
- [ ] Wide desktop width

Verify that text, cards, navigation, and images do not overflow or become unusable.

## Interaction Testing

- [ ] Desktop navigation works.
- [ ] Mobile navigation opens and closes correctly.
- [ ] Internal and external links lead to the intended destinations.
- [ ] Contact actions work.
- [ ] Copy-email functionality works, if implemented.
- [ ] Buttons provide clear feedback.
- [ ] Keyboard focus is visible.
- [ ] Reduced-motion preferences are respected.

## Content Verification

- [ ] No obsolete project descriptions remain.
- [ ] No unsupported employment claims are present.
- [ ] Project statuses are accurate.
- [ ] Collaborative contributions are attributed correctly.
- [ ] Certification titles are verified.
- [ ] Contact details and profile URLs are correct.
- [ ] No unfinished feature is presented as complete.

## SEO and Assets

- [ ] Page titles and descriptions are appropriate.
- [ ] Social preview metadata is correct.
- [ ] Images load successfully.
- [ ] Meaningful images have appropriate alternative text.
- [ ] No broken internal links remain.
- [ ] Public URLs and canonical metadata are verified.

## Release Readiness

A release should not be considered ready until relevant checks have been performed, critical issues have been resolved, and the final code changes have been reviewed.

Record real failures and unresolved issues rather than hiding them.
