import Link from "next/link";
import { ProjectPreview } from "@/data/projects";

interface MoreWorkProps {
  projects: ProjectPreview[];
}

export default function MoreWork({ projects }: MoreWorkProps) {
  if (projects.length === 0) return null;

  return (
    <details className="mt-16 sm:mt-20 pt-8 border-t border-border group">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-1 text-sm font-medium text-accent hover:text-foreground transition-colors duration-200 [&::-webkit-details-marker]:hidden">
        <span className="tracking-wide">More Work</span>
        <span
          className="text-muted transition-transform duration-200 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <ul className="mt-6 divide-y divide-border border-t border-border">
        {projects.map((project) => (
          <li key={project.slug} className="py-5">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.12em] uppercase text-accent mb-2">
              {project.organization}
            </p>
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground mb-2">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:text-accent transition-colors duration-200"
              >
                {project.title}
              </Link>
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3 max-w-2xl">
              {project.description}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all duration-200"
            >
              View Case Study
              <span aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
