import { Download, FileText } from "lucide-react";
import type { Resource } from "@/data/resources";

const categoryStyles: Record<string, string> = {
  Diabetes: "from-[#E8F4F3] to-[#F0F7F4] text-deep-blue",
  "Salud renal": "from-[#E8F4F3] to-[#F0F7F4] text-deep-blue",
  Embarazo: "from-[#F0F7F4] to-[#F0F7F4] text-deep-blue",
  Prediabetes: "from-[#F0F7F4] to-[#F0F7F4] text-deep-blue",
  Digestión: "from-[#F0F7F4] to-[#F0F7F4] text-deep-blue",
  Inflamación: "from-[#E8F4F3] to-[#F0F7F4] text-deep-blue",
  SOP: "from-[#F0F7F4] to-[#F0F7F4] text-deep-blue",
  Hipertensión: "from-[#E8F4F3] to-[#F0F7F4] text-deep-blue",
};

export function ResourceCard({ resource }: { resource: Resource }) {
  const visualClass = [
    "relative h-36 bg-gradient-to-br",
    categoryStyles[resource.category] || categoryStyles.Diabetes,
  ].join(" ");

  return (
    <article className="hairline overflow-hidden rounded-lg bg-white soft-shadow">
      <div className={visualClass}>
        <div className="absolute inset-0 clinical-grid opacity-60" />
        <div className="absolute left-4 top-4 rounded-md bg-navy px-3 py-1 text-xs font-semibold uppercase text-white">
          {resource.category}
        </div>
        <FileText className="absolute bottom-5 right-5 h-16 w-16 text-gold/70" />
      </div>
      <div className="p-5">
        <h3 className="min-h-16 text-xl font-semibold leading-7 text-navy">
          {resource.title}
        </h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-ink/68">
          {resource.description}
        </p>
        <div className="mt-5 flex items-center justify-between text-sm text-muted">
          <span>
            {resource.type} · {resource.pages} págs.
          </span>
          <Download className="h-4 w-4 text-deep-blue" aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}
