import { ExperienceEntry } from "@/data/experience";
import { highlightMetrics } from "@/lib/highlightMetrics";

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export default function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-3 md:gap-10 py-8 border-b border-border last:border-b-0">
      <div className="md:pt-0.5">
        <p className="text-xs text-muted tracking-wide whitespace-nowrap">
          {entry.period}
        </p>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-0.5">
          {entry.company}
        </h3>
        <p className="text-sm text-accent mb-4">{entry.role}</p>
        <ul className="space-y-2.5">
          {entry.highlights.map((highlight, i) => (
            <li
              key={i}
              className="text-sm text-muted leading-relaxed flex gap-3"
            >
              <span
                className="shrink-0 mt-[9px] w-3 h-px bg-border"
                aria-hidden="true"
              />
              <span>{highlightMetrics(highlight)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
