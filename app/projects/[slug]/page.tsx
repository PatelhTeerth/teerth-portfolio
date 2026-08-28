import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectSection from "@/components/ProjectSection";
import TechnicalTags from "@/components/TechnicalTags";
import AtAGlance from "@/components/AtAGlance";
import NarrativeImageBlock from "@/components/NarrativeImageBlock";
import FpgaArchitectureBreakdown from "@/components/FpgaArchitectureBreakdown";
import ProjectNavigation from "@/components/ProjectNavigation";
import BackToWork from "@/components/BackToWork";
import { projectDetails } from "@/data/projects";
import { siteConfig } from "@/data/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.metaDescription,
    openGraph: {
      title: project.title,
      description: project.metaDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  const isRice = slug === "radar-stereo-vision";
  const isCorveus = slug === "mixed-signal-waveform";

  return (
    <>
      <Navbar />
      <main>
        <ProjectHero project={project} />

        <div className="max-w-3xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28">
          <div className="mb-8">
            <BackToWork />
          </div>

          <AtAGlance items={project.atAGlance} />

          <ProjectSection title="Overview">
            <p>{project.overview}</p>
          </ProjectSection>

          <ProjectSection title="Challenge / Goal">
            <p>{project.goal}</p>
          </ProjectSection>

          <ProjectSection title="My Role">
            <p>{project.role}</p>
          </ProjectSection>

          <ProjectSection title="Engineering Implementation">
            <ul className="space-y-3">
              {project.implementation.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="shrink-0 mt-[9px] w-3 h-px bg-border"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {project.implementationImages?.map((image) => (
              <NarrativeImageBlock
                key={image.src}
                image={image}
                aspectClass={isRice ? "aspect-[16/10]" : "aspect-[4/3]"}
                imageClassName={
                  isRice
                    ? "object-cover object-top"
                    : isCorveus
                      ? "object-cover"
                      : "object-cover"
                }
              />
            ))}
          </ProjectSection>

          <ProjectSection title="Testing & Validation">
            <ul className="space-y-3">
              {project.validation.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="shrink-0 mt-[9px] w-3 h-px bg-border"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {project.validationImages?.map((image) => (
              <NarrativeImageBlock
                key={image.src}
                image={image}
                aspectClass="aspect-[4/3]"
                imageClassName="object-cover"
              />
            ))}
          </ProjectSection>

          {project.showFpgaBreakdown && <FpgaArchitectureBreakdown />}

          <ProjectSection title="Technologies">
            <TechnicalTags tags={project.technologies} className="text-sm" />
          </ProjectSection>

          <ProjectNavigation currentSlug={slug} />
        </div>
      </main>
      <Footer />
    </>
  );
}
