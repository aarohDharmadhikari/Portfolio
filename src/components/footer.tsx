"use client";

import { ArrowUp } from "lucide-react";
import { navSections, profile } from "@/data/profile";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          data-cursor="link"
          className="font-display text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          {profile.name}
        </button>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              data-cursor="link"
              className="text-sm text-ink-faint transition-colors hover:text-ink-muted"
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-ink-faint">© {year}</span>
          <button
            onClick={() => scrollToSection("hero")}
            aria-label="Back to top"
            data-cursor="link"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
