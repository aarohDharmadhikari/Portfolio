"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function StatusReadout() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date(), profile.timezone));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-y-0 right-6 z-40 hidden items-center lg:flex">
      <div className="glass flex flex-col items-center gap-4 rounded-full px-3 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
        </span>
        <span className="[writing-mode:vertical-rl] tracking-[0.2em] text-ink-muted">
          {profile.availability}
        </span>
        <span className="h-8 w-px bg-line-strong" />
        <span className="[writing-mode:vertical-rl] tabular-nums text-ink">
          {time ?? "--:--:--"}
        </span>
        <span className="[writing-mode:vertical-rl] tracking-[0.2em] text-ink-muted">
          IST · {profile.location}
        </span>
      </div>
    </div>
  );
}
