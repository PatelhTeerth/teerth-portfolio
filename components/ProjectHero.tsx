import { ProjectDetail } from "@/data/projects";
import { CONTAINER } from "@/lib/constants";
import SafeImage from "./SafeImage";
import FpgaVisual from "./FpgaVisual";
import NeurotechVisual from "./NeurotechVisual";
import SectionLabel from "./SectionLabel";

interface ProjectHeroProps {
  project: ProjectDetail;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const isRice = project.slug === "radar-stereo-vision";
  const isCorveus = project.slug === "mixed-signal-waveform";

  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className={CONTAINER}>
        <SectionLabel>{project.organization.toUpperCase()}</SectionLabel>
        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-foreground leading-tight mb-5 max-w-3xl">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mb-10">
          {project.introduction}
        </p>
        <figure>
          <div
            className={`relative overflow-hidden rounded-md border border-border bg-[#f0eeeb] ${
              isRice
                ? "aspect-[16/10] sm:aspect-[2/1]"
                : isCorveus
                  ? "aspect-[4/3]"
                  : "aspect-[16/10] sm:aspect-[2/1]"
            }`}
          >
            {project.heroImage ? (
              <SafeImage
                src={project.heroImage}
                alt={project.title}
                fill
                className={
                  isRice
                    ? "object-cover object-top"
                    : isCorveus
                      ? "object-contain p-6 sm:p-10 bg-[#f5f4f2]"
                      : "object-cover"
                }
                sizes="(max-width: 768px) 100vw, 1024px"
                priority
                fallbackLabel={project.title}
              />
            ) : project.visual === "fpga" ? (
              <FpgaVisual className="border-0 rounded-md min-h-[300px]" />
            ) : project.visual === "neurotech" ? (
              <NeurotechVisual className="border-0 rounded-md min-h-[300px]" />
            ) : null}
          </div>
          {project.heroCaption && (
            <figcaption className="mt-2.5 text-xs text-muted leading-relaxed">
              {project.heroCaption}
            </figcaption>
          )}
          {!project.heroImage && project.visual === "fpga" && (
            <figcaption className="mt-2.5 text-xs text-muted/70 font-mono">
              RTL block diagram — illustrative
            </figcaption>
          )}
          {!project.heroImage && project.visual === "neurotech" && (
            <figcaption className="mt-2.5 text-xs text-muted/70 font-mono">
              System architecture — illustrative
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}
