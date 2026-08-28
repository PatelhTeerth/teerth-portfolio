export default function FpgaArchitectureBreakdown() {
  const blocks = [
    { label: "Control", value: "FSM" },
    { label: "Timing", value: "Clock Divider + Synchronous Counter" },
    { label: "Input", value: "Debounce Logic" },
    { label: "Output", value: "Seven-Segment Decoder" },
  ];

  return (
    <section className="mb-10 sm:mb-12">
      <p className="text-xs tracking-[0.1em] uppercase text-accent font-medium mb-3">
        Architecture Breakdown
      </p>
      <div className="h-px bg-border mb-5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="flex gap-4 border-l border-border pl-4"
          >
            <p className="text-xs text-muted w-16 shrink-0 pt-0.5">
              {block.label}
            </p>
            <p className="text-sm text-foreground font-mono leading-snug">
              {block.value}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted/70 font-mono">
        RTL block diagram — illustrative
      </p>
    </section>
  );
}
