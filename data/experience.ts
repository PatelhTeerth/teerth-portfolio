export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Corveus Medical",
    role: "Electrical Engineering Intern",
    period: "May 2026 – Present",
    highlights: [
      "Designed a mixed-signal waveform-generation architecture integrating a 16-bit DAC, digital SPI control, isolated ±15 V power, precision signal conditioning, and a Howland current-source output stage.",
      "Developed Python/FTDI SPI control and validation software for DAC operation, command generation, device initialization, waveform updates, and hardware validation.",
    ],
  },
  {
    company: "Rice University",
    role: "Undergraduate Researcher, ECE",
    period: "May 2026 – Present",
    highlights: [
      "Integrated TI AWR1843 and Analog Devices TinyRad radar systems with ZED stereo vision on an NVIDIA Jetson Xavier NX.",
      "Developed Python-based acquisition and synchronization routines.",
      "Validated 300+ synchronized frames using structural and timestamp checks.",
    ],
  },
  {
    company: "PSMS Controls Services",
    role: "Hardware Engineering Intern",
    period: "Jan 2026 – Present",
    highlights: [
      "Debugged UART, SPI, and RS-485 digital communication interfaces using oscilloscopes and logic analyzers.",
      "Resolved 20+ timing, grounding, and signal-integrity faults during commissioning.",
      "Debugged and validated 50+ analog and digital I/O channels.",
      "Worked with power distribution, filtering, transient protection, and embedded control hardware.",
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
