"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Download, Search, SlidersHorizontal } from "lucide-react";
import type { ResourceGuideCard } from "@/data/resourceGuides";

type ResourceLibraryProps = {
  guides: ResourceGuideCard[];
  categories: string[];
};

export function ResourceLibrary({ guides, categories }: ResourceLibraryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");

  const filteredGuides = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return guides.filter((guide) => {
      const matchesCategory = category === "Todas" || guide.category === category;
      const searchable = [guide.title, guide.category, guide.description, guide.type].join(" ").toLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, guides, query]);

  return (
    <section className="rounded-[12px] border border-[#E5E5E5] bg-white p-4 shadow-[0_10px_30px_rgb(28_29_32/0.04)] sm:p-5">
      <div className="grid gap-3 md:grid-cols-[1fr_auto]">
        <label className="flex h-12 items-center gap-3 rounded-[10px] border border-[#E5E5E5] bg-white px-4 text-[14px] font-medium text-[#666666]">
          <Search className="h-5 w-5 text-[#0A6B6B]" strokeWidth={1.8} />
          <span className="sr-only">Buscar recursos</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por condición, guía o tema..."
            className="h-full w-full bg-transparent text-navy outline-none placeholder:text-[#666666]"
          />
        </label>
        <div className="flex h-12 items-center justify-center gap-2 rounded-[10px] border border-[#E5E5E5] bg-white px-4 text-[14px] font-bold text-[#0A6B6B]">
          <SlidersHorizontal className="h-4 w-4" /> {filteredGuides.length} recursos
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            type="button"
            className={
              item === category
                ? "rounded-full bg-navy px-5 py-2.5 text-[12px] font-black text-white shadow-[0_8px_18px_rgb(28_29_32/0.18)]"
                : "rounded-full border border-[#E5E5E5] bg-white px-5 py-2.5 text-[12px] font-bold text-[#666666] transition hover:border-gold/45 hover:text-navy"
            }
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-black text-navy">Guías clínicas destacadas</h2>
          <p className="mt-1 text-[13px] font-medium text-[#666666]">Cada recurso abre una página completa con artículo, referencias y PDF descargable.</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredGuides.map((guide) => (
          <Link
            key={guide.slug}
            href={"/recursos/" + guide.slug}
            className="group overflow-hidden rounded-[10px] border border-[#E5E5E5] bg-white shadow-[0_8px_24px_rgb(28_29_32/0.05)] transition hover:-translate-y-0.5 hover:border-gold/45 hover:shadow-[0_18px_38px_rgb(28_29_32/0.1)]"
          >
            <div className="relative h-[168px] overflow-hidden bg-[#F0F7F4]">
              <Image
                src={guide.image}
                alt={"Imagen del recurso: " + guide.title}
                fill
                sizes="(min-width: 1280px) 380px, (min-width: 640px) 50vw, 100vw"
                quality={95}
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/24 via-transparent to-white/4" />
              <span className="absolute bottom-3 left-3 rounded-[5px] bg-navy px-2.5 py-1 text-[10px] font-black uppercase leading-none text-white shadow-[0_6px_16px_rgb(28_29_32/0.24)]">
                {guide.category}
              </span>
            </div>
            <div className="p-4 pt-4">
              <h3 className="min-h-[58px] text-[18px] font-black leading-[1.24] text-navy">
                {guide.title}
              </h3>
              <p className="mt-3 min-h-[72px] text-[13px] font-medium leading-[1.55] text-[#4A4A4A]">
                {guide.description}
              </p>
              <div className="mt-5 flex items-center justify-between text-[12px] font-semibold text-[#4A4A4A]">
                <span className="inline-flex items-center gap-2"><Download className="h-4 w-4" /> PDF · {guide.pages} págs.</span>
                <span className="inline-flex items-center gap-1 text-navy group-hover:text-gold">Leer <ArrowRight className="h-4 w-4" /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredGuides.length === 0 ? (
        <div className="mt-8 rounded-[10px] border border-[#E5E5E5] bg-[#FAFAFA] p-8 text-center">
          <p className="text-[18px] font-black text-navy">No encontré una guía con ese término.</p>
          <p className="mt-2 text-sm font-medium text-[#666666]">Prueba con diabetes, renal, embarazo, digestión, hipertensión o prediabetes.</p>
        </div>
      ) : null}
    </section>
  );
}
