import SectionHeader from "./SectionHeader";
import ExperienceItem from "./ExperienceItem";
import FadeIn from "./FadeIn";
import { experience } from "@/data/experience";
import { CONTAINER, SECTIONS } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 scroll-mt-20 bg-surface">
      <div className={CONTAINER}>
        <FadeIn>
          <SectionHeader
            label={SECTIONS.experience.label}
            title={SECTIONS.experience.title}
            className="mb-10 sm:mb-12"
          />
          <div className="border-t border-border">
            {experience.map((entry) => (
              <ExperienceItem key={entry.company} entry={entry} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
