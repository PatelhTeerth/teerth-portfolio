"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { CONTAINER } from "@/lib/constants";

const navLinks = [
  { label: "Work", href: "/#work", section: "work" },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Resume", href: siteConfig.resume, external: true },
  { label: "Contact", href: "/#contact", section: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["work", "experience", "about", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (section?: string) =>
    `text-sm text-muted hover:text-accent transition-colors duration-200 link-underline ${
      section && activeSection === section ? "text-accent" : ""
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`${CONTAINER} h-14 sm:h-16 flex items-center justify-between`}
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass()}
                  data-active="false"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={linkClass(link.section)}
                  data-active={activeSection === link.section ? "true" : "false"}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <ul className={`${CONTAINER} py-3 space-y-0.5`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2.5 text-sm text-muted hover:text-accent transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2.5 text-sm text-muted hover:text-accent transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
