# Nutriologia.org Agent Rules

This repository is the source of truth for the static Nutriologia.org marketing site.

## Scope
- Static Next.js App Router site only.
- No backend, API routes, auth, dashboards, database, Stripe, or checkout.
- Commercial CTAs must use `NEXT_PUBLIC_SKOOL_URL` through `src/lib/links.ts`.
- Keep assets lightweight and avoid committing heavy local screenshots or raw PNG references.

## Quality
- Preserve serious clinical Spanish copy.
- Avoid risky health claims such as cure, reverse, guarantee, or medical outcome promises.
- Run lint and build before proposing deploy.
