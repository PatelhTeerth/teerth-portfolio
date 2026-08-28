import Link from "next/link";
import { PROJECT_SLUGS } from "@/lib/constants";
import { projectDetails } from "@/data/projects";
import BackToWork from "./BackToWork";

interface ProjectNavigationProps {
  currentSlug: string;
}

export default function ProjectNavigation({
  currentSlug,
}: ProjectNavigationProps) {
  const currentIndex = PROJECT_SLUGS.indexOf(
    currentSlug as (typeof PROJECT_SLUGS)[number]
  );
  const prevSlug =
    currentIndex > 0 ? PROJECT_SLUGS[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < PROJECT_SLUGS.length - 1
      ? PROJECT_SLUGS[currentIndex + 1]
      : null;

  const prevProject = prevSlug ? projectDetails[prevSlug] : null;
  const nextProject = nextSlug ? projectDetails[nextSlug] : null;

  return (
    <div className="mt-16 pt-8 border-t border-border space-y-8">
      <BackToWork />

      {(prevProject || nextProject) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-border">
          {prevProject ? (
            <Link
              href={`/projects/${prevSlug}`}
              className="group block"
            >
              <span className="block text-xs text-accent mb-2 tracking-wide">
                Previous Project
              </span>
              <span className="flex items-start gap-2 text-sm text-muted group-hover:text-accent transition-colors duration-200">
                <span
                  className="shrink-0 mt-0.5 transition-transform duration-200 group-hover:-translate-x-0.5"
                  aria-hidden="true"
                >
                  ←
                </span>
                <span className="leading-snug">{prevProject.title}</span>
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextSlug}`}
              className="group block sm:text-right"
            >
              <span className="block text-xs text-accent mb-2 tracking-wide">
                Next Project
              </span>
              <span className="flex items-start gap-2 text-sm text-muted group-hover:text-accent transition-colors duration-200 sm:justify-end sm:flex-row-reverse">
                <span
                  className="shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
                <span className="leading-snug">{nextProject.title}</span>
              </span>
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}
