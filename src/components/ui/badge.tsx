import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "emerald";
}

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "default" && "border-line-strong bg-white/[0.03] text-ink-muted",
        tone === "emerald" && "border-emerald/30 bg-emerald/10 text-emerald-glow",
        className
      )}
    >
      {children}
    </span>
  );
}
