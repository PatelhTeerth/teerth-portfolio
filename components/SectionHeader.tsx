import SectionLabel from "./SectionLabel";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}
