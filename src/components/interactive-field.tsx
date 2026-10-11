"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 70;
const CONNECT_DISTANCE = 120;
const MOUSE_RADIUS = 140;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function InteractiveField() {
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

    // No cursor to react to, or the user asked for less motion — skip entirely.
    if (prefersReducedMotion || !hasFinePointer) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const mouse = { x: -1000, y: -1000 };
    let raf = 0;
    let paused = false;

    function onResize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
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
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    function tick() {
      if (paused) return;
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0.01) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.x += (dx / dist) * force * 1.8;
          p.y += (dy / dist) * force * 1.8;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]!;
          const b = particles[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DISTANCE) {
            ctx!.strokeStyle = `rgba(47,209,143,${0.14 * (1 - dist / CONNECT_DISTANCE)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const near = Math.sqrt(dx * dx + dy * dy) < MOUSE_RADIUS;
        ctx!.fillStyle = near ? "rgba(92,242,184,0.9)" : "rgba(138,154,147,0.45)";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, near ? 2.2 : 1.3, 0, Math.PI * 2);
        ctx!.fill();
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
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
