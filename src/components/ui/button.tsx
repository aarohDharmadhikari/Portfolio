"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/lib/use-magnetic";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, onMouseMove, onMouseLeave, ...props }, ref) => {
    const magnetic = useMagnetic(0.3);

    return (
      <motion.button
        ref={ref}
        data-cursor="link"
        style={{ x: magnetic.x, y: magnetic.y }}
        onMouseMove={(e) => {
          magnetic.onMouseMove(e);
          onMouseMove?.(e);
        }}
        onMouseLeave={(e) => {
          magnetic.onMouseLeave();
          onMouseLeave?.(e);
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-void",
          variant === "primary" &&
            "bg-emerald text-void hover:bg-emerald-glow shadow-[0_0_0_1px_rgba(47,209,143,0.4),0_8px_30px_-8px_rgba(47,209,143,0.55)]",
          variant === "ghost" &&
            "glass text-ink hover:border-line-strong hover:bg-white/[0.06]",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
