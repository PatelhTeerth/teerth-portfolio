interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="mb-10 sm:mb-12">
      <h2 className="text-xs tracking-[0.1em] uppercase text-accent font-medium mb-3">
        {title}
      </h2>
      <div className="h-px bg-border mb-5" />
      <div className="text-muted leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}
