import type { MouseEventHandler } from "react";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function BrandLogo({ className = "", onClick }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Ir al inicio de Nutriología"
      onClick={onClick}
      className={[
        "brand-logo inline-flex items-center leading-none text-navy",
        className,
      ].join(" ")}
    >
      <span>nutriologia</span>
      <span className="text-gold">.</span>
      <span>org</span>
    </Link>
  );
}
