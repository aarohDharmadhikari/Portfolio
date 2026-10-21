"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

const footerLinks = [
  { label: "Projects", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/#hero" className="font-display text-sm font-medium text-ink-muted transition-colors hover:text-ink">
          {profile.name}
        </Link>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-ink-faint transition-colors hover:text-ink-muted">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-ink-muted transition-colors hover:text-emerald"><Github size={17} /></a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-ink-muted transition-colors hover:text-emerald"><Linkedin size={17} /></a>
          <span className="font-mono text-xs text-ink-faint">© {year}</span>
          <Link href="/#hero" aria-label="Back to top" className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-ink">
            <ArrowUp size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

