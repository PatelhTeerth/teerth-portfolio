export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://teerth-portfolio.vercel.app";

export const CONTAINER = "max-w-5xl mx-auto px-5 sm:px-8";

export const SECTIONS = {
  work: { label: "01 / SELECTED WORK", title: "Selected Work" },
  experience: { label: "02 / EXPERIENCE", title: "Experience" },
  education: { label: "03 / EDUCATION", title: "Education" },
  skills: { label: "04 / TECHNICAL SKILLS", title: "Technical Skills" },
  about: { label: "05 / ABOUT", title: "About Me" },
  contact: { label: "06 / CONTACT", title: "Let's Connect" },
} as const;

export const PROJECT_SLUGS = [
  "radar-stereo-vision",
  "mixed-signal-waveform",
  "asynchronous-fifo-cdc",
  "fpga-stopwatch",
  "neurotech",
] as const;
