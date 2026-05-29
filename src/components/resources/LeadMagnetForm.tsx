"use client";

import { useState } from "react";
import { CheckCircle2, Download, Loader2, LockKeyhole } from "lucide-react";

type LeadMagnetFormProps = {
  guideSlug: string;
  guideTitle: string;
};

type LeadResponse = {
  ok?: boolean;
  error?: string;
  downloadUrl?: string;
};

export function LeadMagnetForm({ guideSlug, guideTitle }: LeadMagnetFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [consent, setConsent] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setDownloadUrl("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          consent,
          guideSlug,
          guideTitle,
          sourcePath: window.location.pathname,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as LeadResponse;

      if (!response.ok) {
        throw new Error(payload.error || "No se pudo registrar el correo.");
      }

      if (!payload.downloadUrl) {
        throw new Error("El PDF se registró, pero no recibimos el enlace de descarga.");
      }

      setDownloadUrl(payload.downloadUrl);
      setStatus("success");
      setMessage("Listo. Tu PDF está desbloqueado.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "No se pudo registrar el correo.");
    }
  }

  return (
    <section id="descargar" className="rounded-[12px] border border-gold/35 bg-white p-5 shadow-[0_14px_34px_rgb(28_29_32/0.08)]">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-gold">
          {status === "success" ? <CheckCircle2 className="h-5 w-5" /> : <LockKeyhole className="h-5 w-5" />}
        </span>
        <div>
          <h2 className="text-[20px] font-black leading-tight text-navy">Descarga la guía profesional</h2>
          <p className="mt-2 text-[13px] font-medium leading-6 text-[#666666]">
            Recibe acceso inmediato al PDF de 10 páginas. Guardamos tu correo para enviarte recursos clínicos relacionados.
          </p>
        </div>
      </div>

      {status === "success" ? (
        <div className="mt-5 rounded-[10px] bg-[#f7fbf8] p-4 ring-1 ring-[#cfe8d5]">
          <p className="text-sm font-bold text-navy" role="status" aria-live="polite">{message}</p>
          <a
            href={downloadUrl}
            download
            className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-navy px-5 py-3 text-sm font-black text-white transition hover:bg-deep-blue"
            style={{ color: "#ffffff" }}
          >
            <Download className="h-4 w-4" /> Descargar PDF ahora
          </a>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 grid gap-3">
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <label className="grid gap-1.5 text-[12px] font-black uppercase tracking-wide text-navy">
            Nombre
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              name="name"
              autoComplete="name"
              placeholder="Tu nombre"
              className="h-11 rounded-[8px] border border-[#E5E5E5] px-3 text-sm font-medium normal-case tracking-normal text-navy outline-none transition focus:border-gold"
            />
          </label>
          <label className="grid gap-1.5 text-[12px] font-black uppercase tracking-wide text-navy">
            Email
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              name="email"
              autoComplete="email"
              type="email"
              placeholder="tu@email.com"
              className="h-11 rounded-[8px] border border-[#E5E5E5] px-3 text-sm font-medium normal-case tracking-normal text-navy outline-none transition focus:border-gold"
            />
          </label>
          <label className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#666666]">
            <input
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              required
              type="checkbox"
              className="mt-1"
            />
            Acepto recibir recursos educativos de Nutriología. Puedo dejar de recibirlos cuando quiera.
          </label>
          <button
            disabled={status === "loading"}
            type="submit"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-navy px-5 py-3 text-sm font-black text-white transition hover:bg-deep-blue disabled:cursor-not-allowed disabled:opacity-70"
            style={{ color: "#ffffff" }}
          >
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            Descargar guía
          </button>
          {status === "error" ? <p className="text-[12px] font-semibold leading-5 text-[#b42318]" role="alert" aria-live="polite">{message}</p> : null}
        </form>
      )}
    </section>
  );
}
