# kupitnezabyt website

Static Russian-language marketing site for the kupitnezabyt PWA.

## Local development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env` only for local development. Production variables
belong in Vercel and must not be committed.

## Scripts

- `pnpm dev` — local dev server
- `pnpm typecheck` / `pnpm lint` — both run `astro check` (there is no ESLint
  config; lint currently equals typecheck)
- `pnpm test` — node test runner via tsx
- `pnpm build` — static build to `dist/`

## Configuration

- `PUBLIC_SITE_URL` — final canonical marketing-site URL. Leave unset until the
  Vercel production domain is selected.
- `PUBLIC_APP_URL` — PWA URL used by all application CTAs.
- `PUBLIC_ANALYTICS_PROVIDER`, `PUBLIC_ANALYTICS_SITE_ID` — intentionally
  blank: analytics is disabled pending a provider and privacy decision.

## Deployment

GitHub repository → Vercel. Every pull request gets a preview deployment;
production serves the confirmed domain. Set the environment variables in the
Vercel project settings (Settings → Environment Variables), not in the repo.

### Caveat: absolute URLs need `PUBLIC_SITE_URL`

Canonical links, `og:url`, `sitemap.xml` `<loc>` entries and the robots.txt
`sitemap` reference are built from `PUBLIC_SITE_URL` at build time. Set
`PUBLIC_SITE_URL` in Vercel **before launch**, otherwise:

- canonical and `og:url` meta tags are omitted;
- `og:image` falls back to the root-relative `/images/og-cover.png` (the tag
  exists but is not an absolute URL, which some crawlers ignore);
- sitemap/robots use relative locs, which Google does not accept for sitemaps.

## Screenshots workflow

The site shows only real, pre-anonymized PWA screenshots with demo data. To add
one:

1. Drop the exported PNG (and an optional WebP variant) into `public/images/`.
2. Add an entry to `screenshots` in `src/content/screenshots.ts`. Read the file
   header for the exact contract: real width/height, meaningful `alt`, no
   personal data (email, notes, invitation links).

Reserved ids: `hero` (first screen), `step-1`…`step-3` (step fragments);
everything else lands in the «Экран за экраном» gallery.

## Legal pages

`/privacy` and `/terms` are structure and placeholders. They must not be
treated as approved legal content until the owner provides and approves the
legal owner, contact, jurisdiction, processors, storage, retention and
applicable terms (see `WEBSITE_SPEC.md` §8).
