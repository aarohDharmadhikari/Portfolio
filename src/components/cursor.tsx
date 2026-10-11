"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorKind = "link" | "view" | "drag";

interface CursorTarget {
  kind: CursorKind;
  label?: string;
}

/**
 * Global cursor replacement. A precise leading dot plus a trailing ring.
 * The ring behaves in one of three ways depending on what's under the
 * pointer:
 *  - default: a small ring that free-follows the mouse
 *  - data-cursor="link": the ring grows into a soft pill
 *  - data-cursor="view": the ring morphs to exactly match the hovered
 *    element's bounding box, with an optional label centered inside it
 *
 * Disabled entirely on touch devices and under prefers-reduced-motion —
 * both fall back to the native cursor.
 */
export function CursorSystem() {
  const [enabled, setEnabled] = useState(false);
  const [target, setTarget] = useState<CursorTarget | null>(null);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const boxMode = useRef(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const dotSpringX = useSpring(dotX, { stiffness: 900, damping: 45, mass: 0.3 });
  const dotSpringY = useSpring(dotY, { stiffness: 900, damping: 45, mass: 0.3 });

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const ringW = useMotionValue(28);
  const ringH = useMotionValue(28);
  const ringRadius = useMotionValue(28);

  const ringSpringX = useSpring(ringX, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringSpringY = useSpring(ringY, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringSpringW = useSpring(ringW, { stiffness: 320, damping: 30 });
  const ringSpringH = useSpring(ringH, { stiffness: 320, damping: 30 });
  const ringSpringRadius = useSpring(ringRadius, { stiffness: 320, damping: 30 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    function applyDefaultRing(x: number, y: number) {
      ringX.set(x);
      ringY.set(y);
      ringW.set(28);
      ringH.set(28);
      ringRadius.set(28);
    }

    function onMove(e: MouseEvent) {
      setVisible(true);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const el = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;

      if (!el) {
        boxMode.current = false;
        setTarget(null);
        applyDefaultRing(e.clientX, e.clientY);
        return;
      }

      const kind = (el.dataset.cursor as CursorKind) ?? "link";
      const label = el.dataset.cursorLabel;
      setTarget({ kind, label });

      if (kind === "view") {
        boxMode.current = true;
        const rect = el.getBoundingClientRect();
        const pad = 0;
        ringX.set(rect.left + rect.width / 2 - pad);
        ringY.set(rect.top + rect.height / 2 - pad);
        ringW.set(rect.width + pad * 2);
        ringH.set(rect.height + pad * 2);
        ringRadius.set(16);
      } else {
        boxMode.current = false;
        ringX.set(e.clientX);
        ringY.set(e.clientY);
        ringW.set(64);
        ringH.set(64);
        ringRadius.set(64);
      }
    }

    function onLeaveWindow() {
      setVisible(false);
    }
    function onDown() {
      setPressed(true);
    }
    function onUp() {
      setPressed(false);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeaveWindow);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeaveWindow);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  const kind = target?.kind;
  const isBox = kind === "view";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}
    >
      {/* Leading dot — hidden while the ring has morphed into a box */}
      <motion.div
        style={{
          translateX: dotSpringX,
          translateY: dotSpringY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isBox ? 0 : pressed ? 0.6 : 1,
          opacity: isBox ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-emerald"
      />

      {/* Trailing ring — free-follows by default, snaps to element bounds
          for data-cursor="view" targets */}
      <motion.div
        style={{
          translateX: ringSpringX,
          translateY: ringSpringY,
          width: ringSpringW,
          height: ringSpringH,
          borderRadius: ringSpringRadius,
          x: "-50%",
          y: "-50%",
        }}
        animate={{ scale: pressed ? 0.92 : 1 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={
          kind === "link"
            ? "fixed left-0 top-0 flex items-center justify-center border border-emerald/60 bg-emerald/[0.06]"
            : isBox
            ? "fixed left-0 top-0 flex items-center justify-center border border-emerald/70 bg-emerald/[0.04]"
            : "fixed left-0 top-0 flex items-center justify-center border border-ink-muted/30"
        }
      >
        {target?.label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-glow"
          >
            {target.label}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
