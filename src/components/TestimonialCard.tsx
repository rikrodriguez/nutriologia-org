type TestimonialCardProps = {
  quote: string;
  name: string;
  detail: string;
};

export function TestimonialCard({ quote, name, detail }: TestimonialCardProps) {
  return (
    <article className="hairline rounded-lg bg-white p-6 soft-shadow">
      <p className="font-display text-5xl leading-none text-gold">“</p>
      <p className="mt-1 min-h-32 leading-8 text-ink/78">{quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream font-semibold text-navy">
          {name.slice(0, 1)}
        </div>
        <div>
          <p className="font-semibold text-navy">{name}</p>
          <p className="text-sm text-muted">{detail}</p>
        </div>
      </div>
    </article>
  );
}
