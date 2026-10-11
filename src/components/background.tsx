export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void"
    >
      {/* Base vertical vignette so content stays readable at every scroll depth */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Faint blueprint grid, fades out toward the bottom of the viewport */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Precision diagonals — two long, hairline construction lines that
          cross behind the hero, like guide lines left on a drafting sheet.
          Static (no motion cost); pure geometry layered under the reactive
          grid mesh for extra depth. */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_18%,black_25%,transparent_80%)]"
        preserveAspectRatio="none"
      >
        <line x1="8%" y1="0" x2="46%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="100%" y1="6%" x2="58%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="82%" y1="0" x2="100%" y2="34%" stroke="rgba(47,209,143,0.14)" strokeWidth="1" />
      </svg>

      {/* Registration marks — corner brackets like a technical drawing sheet */}
      <div className="absolute left-5 top-24 h-6 w-6 border-l border-t border-line-strong opacity-70 sm:left-8" />
      <div className="absolute right-5 top-24 h-6 w-6 border-r border-t border-line-strong opacity-70 sm:right-8" />
      <div className="absolute bottom-8 left-5 h-6 w-6 border-b border-l border-line-strong opacity-70 sm:left-8" />
      <div className="absolute bottom-8 right-5 h-6 w-6 border-b border-r border-line-strong opacity-70 sm:right-8" />

      {/* A single measurement rule near the top, like a ruler guide on a drafting sheet */}
      <div className="absolute inset-x-0 top-24 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent md:block" />

      {/* Subtle bottom fade so footer content never fights the glow */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}
