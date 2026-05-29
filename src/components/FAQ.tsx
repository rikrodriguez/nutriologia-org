type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="hairline group rounded-lg bg-white p-5">
          <summary className="cursor-pointer list-none text-lg font-semibold text-navy">
            <span className="inline-flex w-full items-center justify-between gap-4">
              {item.question}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-gold group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 leading-7 text-ink/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
