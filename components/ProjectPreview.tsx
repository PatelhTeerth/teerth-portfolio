import Link from "next/link";
import { ProjectPreview as ProjectPreviewType } from "@/data/projects";
import SafeImage from "./SafeImage";
import TechnicalTags from "./TechnicalTags";
import FpgaVisual from "./FpgaVisual";
import NeurotechVisual from "./NeurotechVisual";
import FifoVisual from "./FifoVisual";
import SectionLabel from "./SectionLabel";

interface ProjectPreviewProps {
  project: ProjectPreviewType;
  index: number;
  isLast?: boolean;
}

export default function ProjectPreview({
  project,
  index,
  isLast = false,
}: ProjectPreviewProps) {
  const isReversed = project.reverse;
  const projectNum = String(index + 1).padStart(2, "0");

  return (
    <article className={`group ${!isLast ? "pb-16 sm:pb-20 border-b border-border" : ""}`}>
      <div
        className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
          isReversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className={`${isReversed ? "lg:[direction:ltr]" : ""}`}>
          <Link
            href={`/projects/${project.slug}`}
            className="block"
            aria-label={`View case study: ${project.title}`}
          >
            <div
              className={`relative ${project.aspectClass ?? "aspect-[16/10]"} overflow-hidden rounded-md border border-border bg-[#f0eeeb] transition-transform duration-300 group-hover:scale-[1.01]`}
            >
              {project.image ? (
                <SafeImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-500 ${project.imageClassName ?? "object-cover"}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  fallbackLabel={project.title}
                />
              ) : project.visual === "fpga" ? (
                <FpgaVisual className="border-0 rounded-md" />
              ) : project.visual === "neurotech" ? (
                <NeurotechVisual className="border-0 rounded-md" />
              ) : project.visual === "fifo" ? (
                <FifoVisual className="border-0 rounded-md" />
              ) : null}
            </div>
          </Link>
        </div>

        <div className={`${isReversed ? "lg:[direction:ltr]" : ""}`}>
          <SectionLabel>
            {projectNum} / {project.organization.toUpperCase()}
          </SectionLabel>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-3 leading-snug">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-accent transition-colors duration-200"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-muted leading-relaxed mb-5 text-[15px]">
            {project.description}
          </p>
          <TechnicalTags tags={project.technologies} className="mb-6" />
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all duration-200 group/link"
          >
            View Case Study
            <span
              className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
