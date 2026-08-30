const TECHNICAL_PHRASES = [
  "NVIDIA Jetson Xavier NX",
  "Analog Devices TinyRad",
  "Howland current-source",
  "ZED stereo vision",
  "Python/FTDI",
  "16-bit DAC",
  "TI AWR1843",
  "logic analyzers",
  "oscilloscopes",
  "RS-485",
  "±15 V",
  "UART",
  "SPI",
  "Python",
] as const;

const METRIC_TEST = /^\d+\+$|^\d+%$|^≤\d+\s*ms$|^\d+\s*Hz$/;

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const EMPHASIS_PATTERN = new RegExp(
  `(${[...TECHNICAL_PHRASES]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|")}|\\d+\\+|\\d+%|≤\\d+\\s*ms|\\d+\\s*Hz)`,
  "g",
);

function isEmphasized(part: string) {
  return METRIC_TEST.test(part) || (TECHNICAL_PHRASES as readonly string[]).includes(part);
}

export function highlightMetrics(text: string): React.ReactNode[] {
  const parts = text.split(EMPHASIS_PATTERN);
  return parts.map((part, i) =>
    isEmphasized(part) ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}
