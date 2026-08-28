interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] sm:text-xs font-medium tracking-[0.12em] uppercase text-accent mb-3 ${className}`}
    >
      {children}
    </p>
  );
}
