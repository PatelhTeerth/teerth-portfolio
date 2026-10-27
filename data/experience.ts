export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Rice University",
    role: "Undergraduate Researcher, ECE",
    period: "May 2026 – October 2026",
    highlights: [
      "Integrated TI AWR1843 and Analog Devices TinyRad radar with ZED stereo vision on an NVIDIA Jetson Xavier NX, coordinating embedded digital sensor interfaces for synchronized acquisition.",
      "Developed Python/Linux acquisition routines and validated 300+ synchronized frames through timestamp and structural checks.",
    ],
  },
  {
    company: "Corveus Medical",
    role: "Electrical Engineering Intern",
    period: "May 2026 – September 2026",
    highlights: [
      "Designed a mixed-signal waveform generator around a DAC8831 16-bit DAC, SPI control, isolated ±15 V power, precision signal conditioning, and a Howland current-source output stage.",
      "Developed Python/FTDI control and validation software for 16-bit command generation, device initialization, waveform updates, and oscilloscope-based hardware bring-up.",
    ],
  },
  {
    company: "PSMS Controls Services",
    role: "Hardware Engineering Intern",
    period: "Jan 2026 – September 2026",
    highlights: [
      "Debugged UART, SPI, and RS-485 interfaces with oscilloscopes and logic analyzers, resolving 20+ timing, grounding, and signal-integrity faults during system commissioning.",
      "Validated 50+ analog and digital I/O channels while analyzing interface behavior, power distribution, filtering, and transient protection.",
    ],
  },
  {
    company: "Longhorn Baja",
    role: "Research & Development — Electronics Lead",
    period: "Aug 2025 – Present",
    highlights: [
      "Led debugging and validation across 15+ vehicle electrical subsystems.",
      "Diagnosed communication faults, grounding problems, connector failures, and voltage irregularities.",
      "Standardized electrical validation and troubleshooting workflows.",
      "Contributed to a 30% increase in vehicle uptime during competition endurance events.",
    ],
  },
];
