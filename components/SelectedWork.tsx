import SectionHeader from "./SectionHeader";
import ProjectPreview from "./ProjectPreview";
import FadeIn from "./FadeIn";
import { projectPreviews } from "@/data/projects";
import { CONTAINER, SECTIONS } from "@/lib/constants";

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 scroll-mt-20">
      <div className={CONTAINER}>
        <FadeIn>
          <SectionHeader
            label={SECTIONS.work.label}
            title={SECTIONS.work.title}
            className="mb-14 sm:mb-20"
          />
          <div className="space-y-16 sm:space-y-20">
            {projectPreviews.map((project, i) => (
              <ProjectPreview
                key={project.slug}
                project={project}
                index={i}
                isLast={i === projectPreviews.length - 1}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
