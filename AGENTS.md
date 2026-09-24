# AGENTS.md

## Project

`kupitnezabyt-website` is an independent marketing website for **kupitnezabyt**,
a PWA that helps people track regularly replenished essentials and buy them on
time. The site explains the product, shows anonymized real PWA screens, and
directs visitors to the PWA; it is not a second application client.

The source of truth for scope, content, and acceptance criteria is
`WEBSITE_SPEC.md`. This repository is separate from the main `kupitnezabyt`
application repository.

## Before starting

- Read `WEBSITE_SPEC.md` and inspect the existing repository before changing it.
- Follow the current architecture and established patterns.
- Report conflicts between implementation and the specification.
- Do not overwrite, revert, or reformat unrelated user changes.
- Do not invent product, legal, business, contact, pricing, or analytics facts.

## Scope and boundaries

- The v1 site contains only static marketing pages: `/`, `/install`, `/privacy`,
  `/terms`, and a 404 page.
- Do not add a backend, database, server API, authentication, CMS, blog,
  payments, Telegram integration, or access to application/user data without an
  explicit product decision.
- The site must not duplicate PWA functionality.
- Do not promise price monitoring, delivery, receipt scanning, AI
  recommendations, a native mobile app, or other capabilities outside the MVP.
- Mark collaboration/shared-list functionality as `beta` until it is publicly
  available in the PWA.

## Architecture

- Use the current stable Astro release with TypeScript, pnpm, and static output.
- Use ordinary CSS/CSS Modules and CSS custom properties. Do not add a UI
  framework or production dependency unless it is justified first.
- React is optional and may be introduced only for interaction that cannot be
  implemented reasonably with semantic HTML and CSS.
- Use the intended layout where applicable:

  ```text
  src/
    components/  # Header, Footer, CTA, FAQ, Screenshot
    content/     # copy, FAQ, metadata
    layouts/     # BaseLayout
    pages/       # routes
    styles/      # tokens, global and page styles
  public/
    images/
    favicon.png
    apple-touch-icon.png
    logo-512.png
    logo-512.webp
    robots.txt
  ```

- The specification names Astro, not the WordPress Astra theme. Treat Astro as
  the target stack; request an explicit decision before changing to Astra or
  WordPress.
- Keep site and application URLs in environment configuration. All app CTAs
  must be built from `PUBLIC_APP_URL` in one shared helper and add the agreed
  UTM parameters. Never duplicate the PWA URL in individual components.
- Static pages must build without secrets. Do not commit `.env` files or tokens.

## Content, privacy, and security

- Use only accurate, approved product copy. In particular, do not claim that
  starting is free or that no card is required unless the current product model
  confirms it.
- Legal pages are structure and placeholders until the owner provides and
  approves the legal owner, contact, jurisdiction, processors, storage,
  retention, age limits, account-deletion process, and applicable terms.
- Do not publish made-up email addresses, company details, legal entities, or
  policies.
- Keep analytics disabled until a provider, privacy review, and consent approach
  are explicitly approved. When enabled, send only the event names and
  non-personal properties defined in `WEBSITE_SPEC.md`; never send account IDs,
  email, IP addresses in explicit form, list contents, product names, notes,
  invitation links, or tokens.
- Never access, expose, or transmit user data from the PWA, its API, or its
  database.

## Assets and design

- Use real, pre-anonymized PWA screenshots containing demo data only. Never use
  stock photos or generated pseudo-screenshots in their place.
- Screenshots must not reveal email addresses, notes, invitation links, or other
  personal data. Provide meaningful `alt` text, dimensions, responsive sources,
  and optimized WebP/AVIF variants with a PNG fallback when needed.
- Build mobile-first from 320 px; check 320, 375, 768, 1024, and 1440 px.
- Preserve the product's semantic status colors. Brand pink `#F19FA7` is for
  the logo and primary CTA, not as the only signal for inventory statuses.
- Maintain at least 4.5:1 normal-text contrast, 44 x 44 px touch targets,
  keyboard navigation, visible `:focus-visible`, logical tab order, and
  `prefers-reduced-motion` support. Never convey meaning by color alone.
- Keep the visual style minimal, friendly, and mobile-first; avoid decorative
  gradients and generic delivery/SaaS styling.

## SEO and performance

- Give every page a unique title, description, canonical URL, one H1, semantic
  landmarks, and logical heading hierarchy.
- Maintain favicon, `robots.txt`, `sitemap.xml`, Open Graph/Twitter metadata,
  a correct 404 page, and `WebSite` JSON-LD that matches visible content.
- Include image width and height, responsive `srcset`, and lazy-load
  below-the-fold images.
- Avoid third-party trackers, heavy remote fonts, and JavaScript that blocks
  static content.
- Treat Lighthouse mobile scores of 90+ for Performance, Accessibility, Best
  Practices, and SEO as a release target, alongside manual device testing.

## Workflow

- Explain the implementation plan before large changes.
- Prefer small, maintainable, incremental changes over rewrites.
- Ask before destructive or irreversible actions.
- Preserve existing architecture unless a change is justified.
- Update relevant documentation whenever behavior, URLs, deployment, privacy,
  analytics, or content claims change.

## Verification

For code changes, run the repository's available targeted checks. Once the
Astro project is initialized, normally run:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

- Add or update tests for non-trivial logic, including the app CTA URL helper
  and interactive components when present.
- Manually check routes, CTA UTM parameters, links, keyboard navigation, focus,
  reduced motion, and responsive layouts at the required widths.
- Do not read long build or test logs in full: start with the summary and first
  error block. Read more only when required to diagnose a failure.
- If a check cannot be run, state why in the final response.

## Deployment

- The intended delivery path is GitHub to Vercel, with preview deployments for
  pull requests.
- Store production environment variables in Vercel, not in the repository.
- Confirm the production PWA URL, canonical domain, legal content, footer
  contact, analytics decision, and collaboration-beta messaging before launch.
- Do not guess DNS, domain ownership, email, legal details, or analytics
  provider settings.

## Final response

- Summarize what changed and list changed files.
- Report verification commands and results, including checks that could not run.
- Mention important assumptions, open owner decisions, and tradeoffs.
