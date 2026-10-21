"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/animations";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="hero" className="relative flex min-h-[92svh] items-center overflow-hidden px-6 pb-20 pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute right-[-8rem] top-[12rem] h-[28rem] w-[28rem] rounded-full bg-plum/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-line-strong to-transparent" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_.65fr]"
      >
        <div>
          <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald" />
            <span className="font-mono text-xs uppercase tracking-[.18em] text-ink-muted">
              {profile.location} <span className="px-2 text-plum">/</span> {profile.availability}
            </span>
          </motion.div>

          <motion.p custom={0.05} variants={fadeUp} className="mt-10 font-mono text-sm text-emerald">
            Portfolio / 2026
          </motion.p>
          <motion.h1 custom={0.1} variants={fadeUp} className="mt-4 max-w-4xl font-display text-display-xl font-medium leading-none tracking-tight text-ink">
            {profile.firstName}<br />
            <span className="text-emerald">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>
          <motion.div custom={0.2} variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3">
            <span className="border border-line-strong px-3 py-1.5 text-sm text-ink">{profile.title}</span>
            <span className="text-sm text-ink-muted">{profile.subtitle}</span>
          </motion.div>
          <motion.p custom={0.3} variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-ink-muted">
            I build web experiences and applied AI projects, with a focus on clear interfaces, useful tools, and thoughtful engineering.
          </motion.p>
          <motion.div custom={0.4} variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Button onClick={() => scrollToSection("work")}>Explore selected work <ArrowDownRight size={16} /></Button>
            <Link href="/#about" className="inline-flex items-center gap-2 border-b border-line-strong px-1 py-3 text-sm text-ink transition-colors hover:border-emerald hover:text-emerald">
              More about me <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>

        <motion.div custom={0.25} variants={fadeUp} className="relative mx-auto w-full max-w-[22rem] lg:mt-10">
          <div className="absolute -left-4 -top-4 z-10 border border-line-strong bg-void px-3 py-2 font-mono text-[10px] uppercase tracking-[.15em] text-emerald">Developer / Pune</div>
          <div className="relative aspect-[4/5] overflow-hidden border border-line-strong bg-surface">
            {imageFailed ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 text-ink-faint">
                <User size={34} strokeWidth={1.25} />
                <span className="font-mono text-[10px] uppercase tracking-[.15em]">Portrait unavailable</span>
              </div>
            ) : (
              <Image src={profile.portraitSrc} alt={profile.name} fill priority sizes="(max-width: 1024px) 70vw, 22rem" className="object-cover" onError={() => setImageFailed(true)} />
            )}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[.12em] text-ink-faint">
            <span>Software / Applied AI</span><span>01 — 04</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
