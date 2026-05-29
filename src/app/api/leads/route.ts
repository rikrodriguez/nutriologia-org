import crypto from "crypto";
import { NextResponse } from "next/server";
import { getGuideBySlug } from "@/data/resourceGuides";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadBody = {
  name?: string;
  email?: string;
  company?: string;
  consent?: boolean;
  guideSlug?: string;
  guideTitle?: string;
  sourcePath?: string;
};

type SupabaseConfig = {
  url: string;
  key: string;
};

function hashIp(value: string | null) {
  if (!value) return null;
  return crypto.createHash("sha256").update(value).digest("hex");
}

function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return null;
  }

  try {
    return { url: new URL(url).origin, key };
  } catch {
    return null;
  }
}

function jsonError(error: string, status: number) {
  return NextResponse.json(
    { error },
    {
      status,
      headers: { "Cache-Control": "no-store" },
    },
  );
}

export async function POST(request: Request) {
  let body: LeadBody;

  try {
    body = await request.json();
  } catch {
    return jsonError("Solicitud inválida.", 400);
  }

  if (body.company) {
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  const email = String(body.email || "").trim().toLowerCase();
  const name = String(body.name || "").trim();
  const guideSlug = String(body.guideSlug || "").trim();
  const guide = getGuideBySlug(guideSlug);

  if (!name || name.length < 2) {
    return jsonError("Ingresa tu nombre.", 400);
  }

  if (!emailPattern.test(email)) {
    return jsonError("Ingresa un email válido.", 400);
  }

  if (!body.consent) {
    return jsonError("Necesitamos tu autorización para enviarte la guía.", 400);
  }

  if (!guide) {
    return jsonError("La guía solicitada no existe.", 404);
  }

  const supabase = getSupabaseConfig();

  if (!supabase) {
    return jsonError(
      "Falta configurar SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en Vercel.",
      503,
    );
  }

  const now = new Date().toISOString();
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
  const payload = {
    email,
    full_name: name,
    guide_slug: guide.slug,
    guide_title: guide.title,
    source_path: body.sourcePath || "/recursos/" + guide.slug,
    consent: true,
    user_agent: request.headers.get("user-agent"),
    ip_hash: hashIp(forwardedFor),
    updated_at: now,
  };

  const endpoint = new URL("/rest/v1/lead_magnet_subscribers", supabase.url);
  endpoint.searchParams.set("on_conflict", "email,guide_slug");

  const response = await fetch(endpoint.toString(), {
    method: "POST",
    headers: {
      apikey: supabase.key,
      Authorization: "Bearer " + supabase.key,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Supabase lead insert failed", details);
    return jsonError("No se pudo guardar el registro en Supabase.", 502);
  }

  return NextResponse.json(
    { ok: true, downloadUrl: guide.pdfPath },
    { headers: { "Cache-Control": "no-store" } },
  );
}
