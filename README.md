# Teerth Patel — Engineering Portfolio

Personal engineering portfolio showcasing work across embedded systems, PCB/mixed-signal design, FPGA/RTL, robotics, sensing, and hardware/software integration.

## Live Site

https://teerth-portfolio.vercel.app

## Featured Work

- Portable Radar + Stereo-Vision Platform — Rice University
- Mixed-Signal Waveform Generation Hardware — Corveus Medical
- FPGA RTL Stopwatch
- Embedded Hardware Systems — Longhorn Neurotech

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- next/image
- Next.js Metadata API
- Lucide React

## Architecture

Project content lives in data files (`data/site.ts`, `data/experience.ts`, `data/projects.ts`) rather than being hard-coded into page layouts. Reusable React components render the homepage sections and shared project-page UI. Dynamic routes under `app/projects/[slug]` read from the same project data. Image assets live under `public/images`. Metadata, sitemap, and robots configuration use the shared `SITE_URL` constant (`NEXT_PUBLIC_SITE_URL` with a production fallback).

## Local Development

```bash
npm install
npm run dev
```
