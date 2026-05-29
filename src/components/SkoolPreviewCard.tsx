import { BookOpen, MessageCircle, ThumbsUp } from "lucide-react";

type SkoolPreviewCardProps = {
  title: string;
  body?: string;
  meta?: string;
  tag?: string;
  kind?: "post" | "course";
};

export function SkoolPreviewCard({
  title,
  body,
  meta,
  tag,
  kind = "post",
}: SkoolPreviewCardProps) {
  const Icon = kind === "course" ? BookOpen : MessageCircle;

  return (
    <article className="hairline rounded-lg bg-white p-5 soft-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-gold">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            {meta ? <p className="text-sm text-muted">{meta}</p> : null}
            {tag ? <p className="text-xs font-semibold uppercase text-gold">{tag}</p> : null}
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-7 text-navy">{title}</h3>
      {body ? <p className="mt-3 leading-7 text-ink/70">{body}</p> : null}
      <div className="mt-5 flex items-center gap-5 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <ThumbsUp className="h-4 w-4" /> 18
        </span>
        <span>Comentarios</span>
      </div>
    </article>
  );
}
