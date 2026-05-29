-- Nutriologia lead magnets
-- Run this in the Supabase SQL editor for the project connected to Vercel.

create extension if not exists pgcrypto;

create table if not exists public.lead_magnet_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  full_name text not null,
  guide_slug text not null,
  guide_title text not null,
  source_path text,
  consent boolean not null default true,
  user_agent text,
  ip_hash text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lead_magnet_email_format check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  constraint lead_magnet_unique_email_guide unique (email, guide_slug)
);

alter table public.lead_magnet_subscribers enable row level security;

-- The website writes through a Next.js server route using a Supabase secret/service key.
-- No anonymous browser access is required.
-- If your Supabase Data API settings do not auto-expose new public tables,
-- explicitly expose public.lead_magnet_subscribers in the dashboard API settings.
revoke all on table public.lead_magnet_subscribers from anon;
revoke all on table public.lead_magnet_subscribers from authenticated;

grant all on table public.lead_magnet_subscribers to service_role;

create index if not exists lead_magnet_subscribers_guide_slug_idx
  on public.lead_magnet_subscribers (guide_slug);

create index if not exists lead_magnet_subscribers_created_at_idx
  on public.lead_magnet_subscribers (created_at desc);

comment on table public.lead_magnet_subscribers is
  'Emails captured from Nutriologia guide lead magnets. Written only by the Next.js server route.';
