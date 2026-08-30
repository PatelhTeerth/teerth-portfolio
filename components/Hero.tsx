import Link from "next/link";
import { siteConfig } from "@/data/site";
import { CONTAINER } from "@/lib/constants";
import SectionLabel from "./SectionLabel";
import SafeImage from "./SafeImage";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
      <div className={CONTAINER}>
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <SectionLabel>00 / Intro</SectionLabel>
          <p className="text-[11px] sm:text-xs tracking-[0.1em] uppercase text-muted hidden sm:block">
            ECE · UT Austin
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-start">
          <div className="order-2 lg:order-1">
            <SectionLabel className="mb-4">
              Electrical & Computer Engineering
            </SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-foreground leading-[1.08] mb-5">
              {siteConfig.name}
            </h1>
            <p className="text-lg sm:text-xl text-foreground font-medium leading-snug mb-4 max-w-lg">
              Electrical & Computer Engineer building intelligent hardware
              systems.
            </p>
            <p className="text-[13px] tracking-wide text-muted/80 mb-5">
              Embedded Systems · Hardware · FPGA / RTL · Robotics
            </p>
            <p className="text-base text-muted leading-relaxed mb-8 max-w-md">
              I design embedded systems, mixed-signal hardware, FPGA logic,
              and robotics—from circuit design and digital interfaces to
              system integration and validation.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/#work"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-foreground text-surface rounded-sm hover:opacity-90 transition-opacity duration-200"
              >
                View Projects
              </Link>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-border text-foreground rounded-sm hover:border-accent hover:text-accent transition-colors duration-200"
              >
                Resume
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-muted hover:text-accent transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pt-2">
            <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-xs mx-auto lg:max-w-none lg:ml-auto overflow-hidden rounded-md border border-border bg-[#f0eeeb]">
              <SafeImage
                src="/images/teerth-headshot.png"
                alt="Teerth Patel headshot"
                fill
                className="object-cover object-[center_8%]"
                sizes="(max-width: 1024px) 280px, 35vw"
                priority
                fallbackLabel="Headshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
