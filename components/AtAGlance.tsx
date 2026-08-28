import { AtAGlanceItem } from "@/data/projects";

interface AtAGlanceProps {
  items: AtAGlanceItem[];
}

export default function AtAGlance({ items }: AtAGlanceProps) {
  return (
    <section className="mb-10 sm:mb-12 py-6 border-y border-border">
      <p className="text-xs tracking-[0.1em] uppercase text-accent font-medium mb-5">
        At a Glance
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs text-muted mb-1.5">{item.label}</p>
            <p className="text-sm text-foreground leading-snug">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
