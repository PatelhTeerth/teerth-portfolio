import SectionHeader from "./SectionHeader";
import ProjectPreview from "./ProjectPreview";
import MoreWork from "./MoreWork";
import FadeIn from "./FadeIn";
import { projectPreviews } from "@/data/projects";
import { CONTAINER, SECTIONS } from "@/lib/constants";

export default function SelectedWork() {
  const featured = projectPreviews.filter((project) => project.featured !== false);
  const moreWork = projectPreviews.filter((project) => project.featured === false);

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
            {featured.map((project, i) => (
              <ProjectPreview
                key={project.slug}
                project={project}
                index={i}
                isLast={i === featured.length - 1}
              />
            ))}
          </div>
          <MoreWork projects={moreWork} />
        </FadeIn>
      </div>
    </section>
  );
}
