"use client";

import { useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverLift?: boolean;
  tilt?: boolean;
  /** Cursor state to expose when this card is hovered. Omit for static,
   * non-interactive cards (e.g. the About fact panel). */
  cursor?: "view" | "link";
  cursorLabel?: string;
}

export function GlassCard({
  children,
  className,
  delay = 0,
  hoverLift = true,
  tilt = false,
  cursor,
  cursorLabel,
}: GlassCardProps) {
  const [hovering, setHovering] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!tilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(-py * 8);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setHovering(false);
  }

  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onMouseLeave}
      whileHover={!tilt && hoverLift ? { y: -6 } : undefined}
      style={
        tilt
          ? {
              rotateX: springRotateX,
              rotateY: springRotateY,
              scale: hovering ? 1.015 : 1,
              transformPerspective: 800,
            }
          : undefined
      }
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      data-cursor={cursor}
      data-cursor-label={cursorLabel}
      className={cn(
        "panel rounded-2xl p-6 transition-colors duration-300 hover:border-line-strong",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
