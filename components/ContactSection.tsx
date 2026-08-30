import { Mail, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";
import { siteConfig } from "@/data/site";
import { CONTAINER, SECTIONS } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 scroll-mt-20 bg-[#f3f1ed] border-t border-border"
    >
      <div className={CONTAINER}>
        <FadeIn>
          <div className="grid sm:grid-cols-2 gap-10 sm:gap-16">
            <div>
              <SectionHeader
                label={SECTIONS.contact.label}
                title={SECTIONS.contact.title}
                className="mb-5"
              />
              <p className="text-muted leading-relaxed text-[15px] max-w-sm">
                I&apos;m always interested in opportunities involving embedded
                systems, hardware design, FPGA/ASIC development, robotics, and
                electrical engineering.
              </p>
            </div>

            <div className="border-y border-foreground/25 divide-y divide-foreground/25 sm:border-0 sm:divide-y-0 sm:space-y-4 sm:pt-10">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-3 py-5 sm:py-0 text-muted hover:text-accent transition-colors duration-200"
              >
                <Mail
                  size={16}
                  className="shrink-0 mt-0.5 text-muted group-hover:text-accent transition-colors duration-200"
                />
                <div className="min-w-0">
                  <p className="text-xs text-muted mb-0.5">Email</p>
                  <p className="text-sm font-medium sm:font-normal text-foreground break-words [overflow-wrap:anywhere] group-hover:text-accent transition-colors duration-200">
                    {siteConfig.email}
                  </p>
                </div>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="group flex items-start gap-3 py-5 sm:py-0 text-muted hover:text-accent transition-colors duration-200"
              >
                <Phone
                  size={16}
                  className="shrink-0 mt-0.5 text-muted group-hover:text-accent transition-colors duration-200"
                />
                <div className="min-w-0">
                  <p className="text-xs text-muted mb-0.5">Phone</p>
                  <p className="text-sm font-medium sm:font-normal text-foreground group-hover:text-accent transition-colors duration-200">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 py-5 sm:py-0 text-muted hover:text-accent transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5 text-muted group-hover:text-accent transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <div className="min-w-0">
                  <p className="text-xs text-muted mb-0.5">LinkedIn</p>
                  <p className="text-sm font-medium sm:font-normal text-foreground break-words [overflow-wrap:anywhere] group-hover:text-accent transition-colors duration-200">
                    linkedin.com/in/patelhteerth
                  </p>
                </div>
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 py-5 sm:py-0 text-muted hover:text-accent transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5 text-muted group-hover:text-accent transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div className="min-w-0">
                  <p className="text-xs text-muted mb-0.5">GitHub</p>
                  <p className="text-sm font-medium sm:font-normal text-foreground break-words [overflow-wrap:anywhere] group-hover:text-accent transition-colors duration-200">
                    github.com/PatelhTeerth
                  </p>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
