
"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldAlert } from "lucide-react";

export function RestrictedBoundary() {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartY = useRef(0);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousOverscroll = html.style.overscrollBehavior;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";

    const triggerWarning = () => {
      setActive(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setActive(false);
        timeoutRef.current = null;
      }, 850);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        event.preventDefault();
        triggerWarning();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const blockedKeys = [
        "ArrowDown",
        "PageDown",
        "End",
        " ",
      ];

      if (blockedKeys.includes(event.key)) {
        event.preventDefault();
        triggerWarning();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY ?? touchStartY.current;

      // Finger moving upward attempts to move the page downward.
      if (currentY < touchStartY.current) {
        event.preventDefault();
        triggerWarning();
      }

      touchStartY.current = currentY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      html.style.overscrollBehavior = previousOverscroll;
    };
  }, []);

  return (
    <div
      aria-live="assertive"
      className={`pointer-events-none fixed inset-0 z-[9999] transition-colors duration-100 ${
        active ? "bg-red-600/15" : "bg-transparent"
      }`}
    >
      {/* Red restricted-zone frame */}
      <div
        className={`absolute inset-0 border-[5px] transition-all duration-100 ${
          active
            ? "border-red-500 shadow-[inset_0_0_100px_rgba(255,0,0,0.45)]"
            : "border-transparent"
        }`}
      />

      {/* Game-style warning */}
      <div
        className={`absolute left-1/2 top-1/2 w-[min(90%,420px)] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          active
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0"
        }`}
      >
        <div className="border border-red-500/70 bg-[#160707]/95 p-6 text-center shadow-[0_0_60px_rgba(255,0,0,0.3)] backdrop-blur-md">
          <div className="mb-4 flex justify-center">
            <ShieldAlert
              size={42}
              strokeWidth={1.5}
              className="text-red-500"
            />
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-400">
            Access boundary detected
          </p>

          <h2 className="mt-3 text-xl font-bold uppercase tracking-wide text-white">
            Restricted area
          </h2>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            This portfolio is still under development.
            Further navigation is temporarily restricted.
          </p>

          <div className="mt-5 h-1 overflow-hidden bg-red-950">
            <div className="h-full w-full bg-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
