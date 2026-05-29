"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SKOOL_URL } from "@/lib/links";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/membresia", label: "Membresía" },
  { href: "/recursos", label: "Recursos" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex min-h-[72px] items-center justify-between gap-4 md:min-h-[76px]">
        <BrandLogo className="text-[24px] sm:text-[28px]" onClick={() => setIsOpen(false)} />
        <nav className="hidden items-center gap-7 text-sm font-bold text-navy lg:flex">
          {navItems.slice(0, 3).map((item) => {
            const active = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} className="relative py-7" aria-current={active ? "page" : undefined}>
                {item.label}
                {active ? (
                  <span className="absolute inset-x-1 bottom-4 h-0.5 bg-gold" />
                ) : null}
              </Link>
            );
          })}
          <a href={SKOOL_URL} className="py-7">
            Iniciar sesión
          </a>
        </nav>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-cream"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          type="button"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen ? (
        <div className="absolute inset-x-0 top-full border-t border-navy/10 bg-white/96 shadow-[0_18px_36px_rgb(28_29_32/0.12)] backdrop-blur-xl">
          <nav className="container-shell grid gap-1 py-3 text-sm font-bold text-navy">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "flex min-h-11 items-center justify-between rounded-lg px-3 transition hover:bg-cream",
                    active ? "bg-cream text-navy" : "text-deep-blue",
                  ].join(" ")}
                >
                  {item.label}
                  {active ? <span className="h-2 w-2 rounded-full bg-gold" /> : null}
                </Link>
              );
            })}
            <a
              href={SKOOL_URL}
              onClick={() => setIsOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-navy px-4 text-center text-white"
              style={{ color: "#ffffff" }}
            >
              Entrar a la membresía
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
