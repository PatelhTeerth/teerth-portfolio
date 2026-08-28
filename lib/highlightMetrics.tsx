const METRIC_PATTERN = /(\d+\+|\d+%|≤\d+\s*ms|\d+\s*Hz)/g;
const METRIC_TEST = /^\d+\+$|^\d+%$|^≤\d+\s*ms$|^\d+\s*Hz$/;

export function highlightMetrics(text: string): React.ReactNode[] {
  const parts = text.split(METRIC_PATTERN);
  return parts.map((part, i) =>
    METRIC_TEST.test(part) ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
