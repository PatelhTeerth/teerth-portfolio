"use client";

import { useState, useEffect, useRef } from "react";
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
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasMenuOpenRef = useRef(false);

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

  useEffect(() => {
    if (menuOpen) {
      wasMenuOpenRef.current = true;
      firstLinkRef.current?.focus();
      return;
    }

    if (wasMenuOpenRef.current) {
      menuToggleRef.current?.focus();
      wasMenuOpenRef.current = false;
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const getFocusable = () => {
      const items: HTMLElement[] = [];
      if (menuToggleRef.current) items.push(menuToggleRef.current);
      const menu = menuRef.current;
      if (menu) {
        items.push(
          ...Array.from(menu.querySelectorAll<HTMLElement>("a[href], button")),
        );
      }
      return items;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (!active || active === first || !focusable.includes(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (!active || active === last || !focusable.includes(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
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
          ref={menuToggleRef}
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
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
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-surface border-b border-border"
        >
          <ul className={`${CONTAINER} py-3 space-y-0.5`}>
            {navLinks.map((link, index) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
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
                    ref={index === 0 ? firstLinkRef : undefined}
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
