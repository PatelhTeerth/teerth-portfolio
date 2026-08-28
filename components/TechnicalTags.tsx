interface TechnicalTagsProps {
  tags: string[];
  className?: string;
}

export default function TechnicalTags({
  tags,
  className = "",
}: TechnicalTagsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-y-1 text-xs ${className}`}>
      {tags.map((tag, i) => (
        <span key={tag} className="inline-flex items-center text-muted">
          {i > 0 && (
            <span className="text-border mx-2.5 select-none" aria-hidden="true">
              /
            </span>
          )}
          <span>{tag}</span>
        </span>
      ))}
    </div>
  );
}
