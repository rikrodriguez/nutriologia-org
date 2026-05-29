# Nutriología

Conversion and resource site for **nutriologia.org**, built for the Nutriología Skool membership and public lead magnets.

## Scope

- Next.js App Router
- TypeScript
- Tailwind CSS
- Public routes: `/`, `/sales`, `/salud`, `/recursos`, `/membresia`
- Dynamic resource articles: `/recursos/[slug]`
- Lead magnet API route: `/api/leads`
- Supabase stores guide download leads
- No login
- No dashboard logic
- No Stripe
- No checkout
- Payments and community access happen in Skool

## Commercial Link

All commercial buttons use:

`NEXT_PUBLIC_SKOOL_URL`

Fallback value:

`https://www.skool.com/nutriologia/about`

The source is defined in:

`src/lib/links.ts`

## Lead Magnets And Supabase

Each public guide has:

- A blog-style article page
- A professional 10-page PDF in `public/downloads`
- A download form handled by `src/app/api/leads/route.ts`
- Email capture into Supabase table `lead_magnet_subscribers`
- The browser unlocks the PDF only after the server route confirms the Supabase insert

Create the table by running this SQL in Supabase SQL Editor:

`supabase/lead_magnet_subscribers.sql`

Then add these Vercel environment variables. Use the Vercel dashboard or the interactive CLI so the secret key is not pasted into shell history:

```bash
vercel env add NEXT_PUBLIC_SKOOL_URL production
vercel env add SUPABASE_URL production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
```

Values:

```bash
NEXT_PUBLIC_SKOOL_URL=https://www.skool.com/nutriologia/about
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVER_ONLY_SERVICE_ROLE_KEY
```

You may also use `SUPABASE_SECRET_KEY` instead of `SUPABASE_SERVICE_ROLE_KEY` if your Supabase project uses the newer secret key naming. Do **not** expose this key as `NEXT_PUBLIC_*`.

If the insert returns a REST/Data API permission error after running the SQL, confirm in Supabase Project Settings → API that the table `public.lead_magnet_subscribers` is exposed to the Data API. RLS should stay enabled and anonymous access should stay revoked.

## Local Commands

```bash
npm install
npm run lint
npm run build
npm run dev
```

## Deploy To Vercel

Current temporary-folder deploy flow:

```bash
vercel --prod --force \
  --build-env NEXT_PUBLIC_SKOOL_URL=https://www.skool.com/nutriologia/about \
  --env NEXT_PUBLIC_SKOOL_URL=https://www.skool.com/nutriologia/about
```

For Supabase lead capture, add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in the Vercel project dashboard before deploying. Do not pass the service role key inline in a deploy command.

## Domain

In Vercel, open the project settings and add:

```text
nutriologia.org
```

Follow Vercel DNS instructions for the apex domain and optional `www` redirect.

## Health Disclaimer

The site includes this disclaimer:

> La información de Nutriología es educativa y no reemplaza la consulta médica o nutricional personalizada. Para condiciones clínicas específicas, consulta con un profesional de salud.

## Asset Policy

- Do not commit raw heavy screenshots.
- Keep imagery optimized for web.
- Resource visuals use CSS/SVG-style vector graphics where possible to avoid pixelated text.
- PDFs are lightweight vector/text files, not raster screenshots.
- Future assets should be compressed before commit.
