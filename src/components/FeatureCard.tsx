import type { FeatureItem } from "@/data/features";

export function FeatureCard({ title, description, icon: Icon }: FeatureItem) {
  return (
    <article className="hairline rounded-lg bg-white p-6 soft-shadow">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-gold">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold leading-7 text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink/70">{description}</p>
    </article>
  );
}
