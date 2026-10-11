"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { navSections, profile } from "@/data/profile";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navSections[0].id);
  const hasResume = profile.resumeUrl.length > 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlights whichever section currently owns the vertical
  // center band of the viewport, so the active nav item tracks scroll
  // position instead of only reacting to clicks.
  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => scrollToSection("hero")}
          aria-label="Scroll to top"
          data-cursor="link"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold transition-all duration-500",
            scrolled ? "glass" : "border border-transparent"
          )}
        >
          AD
        </button>

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 md:flex",
            scrolled && "glass"
          )}
        >
          {navSections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                data-cursor="link"
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-200",
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-emerald/30"
                  />
                )}
                <span className="relative">{section.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {hasResume && (
            <a
              href={profile.resumeUrl}
              download
              data-cursor="link"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-line-strong hover:bg-white/[0.06]"
            >
              <Download size={15} />
              Resume
            </a>
          )}
          <button
            onClick={() => scrollToSection("contact")}
            data-cursor="link"
            className="rounded-full bg-emerald px-5 py-2.5 text-sm font-medium text-void transition-colors duration-300 hover:bg-emerald-glow"
          >
            Let&rsquo;s talk
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          data-cursor="link"
          className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
        >
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-void/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-sm font-semibold">AD</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                data-cursor="link"
                className="glass flex h-10 w-10 items-center justify-center rounded-full"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {navSections.map((section, i) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    setMenuOpen(false);
                    scrollToSection(section.id);
                  }}
                  data-cursor="link"
                  className="font-display text-4xl font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {section.label}
                </motion.button>
              ))}
              {hasResume && (
                <motion.a
                  href={profile.resumeUrl}
                  download
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * navSections.length, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-emerald"
                >
                  <Download size={16} />
                  Download résumé
                </motion.a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
