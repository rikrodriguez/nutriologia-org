type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy text-balance md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-ink/70">{description}</p>
      ) : null}
      {isCentered ? <div className="gold-rule mx-auto mt-5" /> : null}
    </div>
  );
}
