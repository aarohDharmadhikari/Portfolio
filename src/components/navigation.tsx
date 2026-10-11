
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hasResume = Boolean(profile.resumeUrl);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Aaroh Dharmadhikari — Home"
          data-cursor="link"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold transition-all duration-500",
            scrolled ? "glass" : "border border-transparent"
          )}
        >
          AD
        </Link>

        <nav
          aria-label="Main navigation"
          className={cn(
            "hidden items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 md:flex",
            scrolled && "glass"
          )}
        >
          {navigationLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="link"
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm transition-colors duration-200 lg:px-4",
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-emerald/30"
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
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

          <Link
            href="/contact"
            data-cursor="link"
            className="rounded-full bg-emerald px-5 py-2.5 text-sm font-medium text-void transition-colors duration-300 hover:bg-emerald-glow"
          >
            Let&apos;s talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          data-cursor="link"
          className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
        >
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-void/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-display text-sm font-semibold"
              >
                AD
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                data-cursor="link"
                className="glass flex h-10 w-10 items-center justify-center rounded-full"
              >
                <X size={18} />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="flex flex-1 flex-col items-start justify-center gap-2 overflow-y-auto px-8 pb-8"
            >
              {navigationLinks.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 * index,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      data-cursor="link"
                      className={cn(
                        "font-display text-3xl font-medium transition-colors sm:text-4xl",
                        active
                          ? "text-emerald"
                          : "text-ink-muted hover:text-ink"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              {hasResume && (
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-emerald"
                >
                  <Download size={16} />
                  Download résumé
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
