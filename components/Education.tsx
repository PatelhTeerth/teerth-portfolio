import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";
import { CONTAINER, SECTIONS } from "@/lib/constants";

const coursework = [
  "Circuit Theory",
  "Digital Logic Design",
  "VLSI Design",
  "Embedded Systems",
  "Signals and Systems",
];

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 scroll-mt-20">
      <div className={CONTAINER}>
        <FadeIn>
          <SectionHeader
            label={SECTIONS.education.label}
            title={SECTIONS.education.title}
            className="mb-8 sm:mb-10"
          />
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 pb-8 border-b border-border">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                University of Texas at Austin
              </h3>
            </div>
            <div className="sm:text-right">
              <p className="text-sm text-foreground">
                B.S. in Electrical and Computer Engineering
              </p>
              <p className="text-sm text-muted mt-1">Expected May 2028</p>
              <p className="text-sm text-foreground mt-2">
                GPA <span className="font-semibold">3.75 / 4.0</span>
              </p>
            </div>
          </div>
          <div className="pt-6">
            <p className="text-xs tracking-[0.1em] uppercase text-accent mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-x-1 gap-y-1">
              {coursework.map((course, i) => (
                <span key={course} className="text-sm text-muted">
                  {i > 0 && <span className="mx-2 text-border">·</span>}
                  {course}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
