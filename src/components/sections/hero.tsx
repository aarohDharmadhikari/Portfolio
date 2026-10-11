"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero3DScene } from "@/components/hero-3d-scene";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/animations";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center px-6 pt-32 pb-20"
    >
      <Hero3DScene />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.4fr_1fr]"
      >
        <div>
          <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
              {profile.availability} · {profile.location}
            </span>
          </motion.div>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="mt-8 font-display text-display-xl font-medium text-gradient"
          >
            {profile.name}
          </motion.h1>

          <motion.div custom={0.2} variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-line-strong px-4 py-1.5 font-mono text-sm text-ink">
              {profile.title}
            </span>
            <span className="rounded-full bg-emerald/10 px-4 py-1.5 font-mono text-sm text-emerald-glow">
              {profile.subtitle}
            </span>
          </motion.div>

          <motion.p
            custom={0.3}
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            I build production-grade software and the AI systems underneath it 
            from speech models to autonomous agents.
          </motion.p>

          <motion.div custom={0.4} variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="primary" onClick={() => scrollToSection("work")}>
              View work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Get in touch
            </Button>
          </motion.div>
        </div>

        <motion.div
          custom={0.25}
          variants={fadeUp}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-emerald/10 blur-3xl" />
          <div className="glass-strong relative h-full w-full overflow-hidden rounded-[1.75rem] p-2">
            <div
              className="relative h-full w-full overflow-hidden rounded-[1.4rem]"
              style={{
                maskImage:
                  "linear-gradient(180deg, black 78%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 78%, transparent 100%)",
              }}
            >
              {imageFailed ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-surface text-ink-faint">
                  <User size={40} strokeWidth={1.25} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                    Add portrait.jpg
                  </span>
                </div>
              ) : (
                <Image
                  src={profile.portraitSrc}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 24rem"
                  className="object-cover grayscale-[15%]"
                  onError={() => setImageFailed(true)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-emerald/10" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollToSection("work")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-faint transition-colors hover:text-ink-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
