"use client";

import { siteConfig } from "@/data/site";
import { CONTAINER } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className={CONTAINER}>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-foreground">
              {siteConfig.name}
            </p>
            <p className="text-xs text-muted mt-0.5">{siteConfig.role}</p>
            <p className="text-xs text-muted mt-3">
              &copy; {year} {siteConfig.name}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-muted hover:text-accent transition-colors duration-200"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
