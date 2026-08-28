import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";
import { CONTAINER, SECTIONS } from "@/lib/constants";

export default function AboutMe() {
  return (
    <section id="about" className="py-12 sm:py-16 scroll-mt-20">
      <div className={CONTAINER}>
        <FadeIn>
          <div className="grid sm:grid-cols-[1fr_1.4fr] gap-6 sm:gap-12 items-start">
            <SectionHeader
              label={SECTIONS.about.label}
              title={SECTIONS.about.title}
            />
            <p className="text-muted leading-relaxed text-[15px] sm:text-base sm:pt-8">
              I&apos;m an Electrical and Computer Engineering student at UT
              Austin interested in building systems that bridge hardware and
              software. My experience spans mixed-signal PCB design, embedded
              systems, FPGA/RTL development, robotics, and sensor integration.
              I enjoy taking projects from initial component research and design
              through prototyping, debugging, and real-world validation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
