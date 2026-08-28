import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";
import { skillGroups } from "@/data/skills";
import { CONTAINER, SECTIONS } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 scroll-mt-20 bg-surface">
      <div className={CONTAINER}>
        <FadeIn>
          <SectionHeader
            label={SECTIONS.skills.label}
            title={SECTIONS.skills.title}
            className="mb-10 sm:mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs tracking-[0.08em] uppercase text-accent font-semibold mb-2.5">
                  {group.title}
                </h3>
                <div className="h-px bg-border mb-3" />
                <p className="text-[13px] text-muted leading-snug">
                  {group.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
