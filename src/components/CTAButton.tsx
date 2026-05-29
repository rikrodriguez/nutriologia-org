import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "outline";
  icon?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-navy text-white shadow-[0_14px_32px_rgb(28_29_32/0.18)] hover:bg-deep-blue",
  secondary:
    "border border-navy/20 bg-white text-navy hover:border-gold/60 hover:bg-cream",
  gold: "bg-gold text-white hover:bg-deep-blue",
  outline:
    "border border-white/35 bg-white/5 text-white hover:border-gold hover:bg-white/10",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  icon = false,
  className = "",
}: CTAButtonProps) {
  const classes = [
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors",
    variants[variant],
    className,
  ].join(" ");
  const textColor =
    variant === "primary" || variant === "outline" || variant === "gold" ? "#ffffff" : "#1c1d20";
  const textStyle = { color: textColor };

  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes} style={textStyle}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={textStyle}>
      {content}
    </Link>
  );
}
