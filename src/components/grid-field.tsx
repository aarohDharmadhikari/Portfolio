"use client";

import { useEffect, useRef } from "react";

const SPACING = 64;
const REACH = 190;
const MAX_DISPLACE = 22;
const AMBIENT_AMPLITUDE = 2.4;

interface GridPoint {
  bx: number;
  by: number;
  x: number;
  y: number;
  phase: number;
}

/**
 * A structured grid mesh, not a particle cloud: fixed points on a fixed
 * lattice, connected only to their right/down neighbour. Points drift
 * gently on their own (ambient life) and bow away from the cursor with
 * an elastic falloff (the "fluid distortion" layer). No random links, no
 * node network — this stays a technical structure that happens to move.
 */
export function GridField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !hasFinePointer) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cols = 0;
    let rows = 0;
    let points: GridPoint[] = [];

    function build() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / SPACING) + 2;
      rows = Math.ceil(height / SPACING) + 2;
      points = [];
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const bx = i * SPACING;
          const by = j * SPACING;
          points.push({ bx, by, x: bx, y: by, phase: Math.random() * Math.PI * 2 });
        }
      }
    }

    const mouse = { x: -1000, y: -1000 };
    let raf = 0;
    let paused = false;
    let t = 0;

    function onResize() {
      build();
    }
    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }
    function onVisibility() {
      paused = document.hidden;
      if (!paused) tick();
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    build();

    function tick() {
      if (paused) return;
      t += 0.006;
      ctx!.clearRect(0, 0, width, height);

      for (const p of points) {
        const ambientX = Math.sin(t + p.phase) * AMBIENT_AMPLITUDE;
        const ambientY = Math.cos(t * 0.8 + p.phase) * AMBIENT_AMPLITUDE;

        const dx = p.bx - mouse.x;
        const dy = p.by - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let pushX = 0;
        let pushY = 0;
        if (dist < REACH && dist > 0.01) {
          const falloff = 1 - dist / REACH;
          const force = falloff * falloff * MAX_DISPLACE;
          pushX = (dx / dist) * force;
          pushY = (dy / dist) * force;
        }

        p.x = p.bx + ambientX + pushX;
        p.y = p.by + ambientY + pushY;
      }

      ctx!.lineWidth = 1;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const idx = j * cols + i;
          const p = points[idx]!;

          const dx = p.bx - mouse.x;
          const dy = p.by - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const near = Math.max(0, 1 - dist / REACH);
          const alpha = 0.05 + near * 0.22;

          if (i < cols - 1) {
            const right = points[idx + 1]!;
            ctx!.strokeStyle = `rgba(47,209,143,${alpha})`;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(right.x, right.y);
            ctx!.stroke();
          }
          if (j < rows - 1) {
            const down = points[idx + cols]!;
            ctx!.strokeStyle = `rgba(47,209,143,${alpha})`;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(down.x, down.y);
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_20%,black_35%,transparent_85%)]"
    />
  );
}
