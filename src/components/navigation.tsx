
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isActive = (href: string) => {
    // Anchor links share the homepage, so only mark Home active here.
    // The browser's hash and scroll position remain responsible for the section.
    return href === "/#hero" && pathname === "/";
  };

  const linkClass = (active: boolean) => cn(
    "rounded-full px-3 py-2 text-sm transition-colors duration-200 lg:px-4",
    active ? "text-ink" : "text-ink-muted hover:text-ink"
  );

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "py-3" : "py-6")}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/#hero" aria-label="Aaroh Dharmadhikari — Home" className={cn("flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold", scrolled ? "glass" : "border border-transparent")}>
          AD
        </Link>

        <nav aria-label="Main navigation" className={cn("hidden items-center gap-1 rounded-full px-2 py-2 md:flex", scrolled && "glass")}>
          {navigationLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={linkClass(active)}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink">
            GitHub <ArrowUpRight size={14} />
          </a>
          <Link href="/#contact" className="rounded-full bg-emerald px-5 py-2.5 text-sm font-medium text-void transition-colors hover:bg-emerald-glow">
            Let&apos;s talk
          </Link>
        </div>

        <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="mobile-navigation" className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden">
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div id="mobile-navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-[60] flex flex-col bg-void/95 backdrop-blur-xl md:hidden">
            <div className="flex items-center justify-between px-6 py-6">
              <Link href="/#hero" onClick={() => setMenuOpen(false)} className="font-display text-sm font-semibold">AD</Link>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu" className="glass flex h-10 w-10 items-center justify-center rounded-full"><X size={18} /></button>
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-1 flex-col items-start justify-center gap-3 overflow-y-auto px-8 pb-8">
              {navigationLinks.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * index, duration: 0.25 }}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)} className="font-display text-3xl font-medium text-ink-muted transition-colors hover:text-emerald sm:text-4xl">{item.label}</Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
