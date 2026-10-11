"use client";

import { Laptop, Cpu, MonitorPlay, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { devSetup } from "@/data/dev-setup";
import { viewportOnce } from "@/lib/animations";

const icons = [Cpu, MonitorPlay, Monitor];

export function DevSetup() {
  return (
    <section id="dev-setup" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Dev setup"
          title="What I build on"
          description="The machine behind everything above."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <GlassCard hoverLift={false} className="mt-10 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                <Laptop size={26} />
              </div>
              <h3 className="font-display text-xl font-medium text-ink">
                {devSetup.model}
              </h3>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {devSetup.specs.map((spec, i) => {
                const Icon = icons[i] ?? Cpu;
                return (
                  <div key={spec.label} className="border-t border-line pt-4">
                    <div className="flex items-center gap-2 text-ink-faint">
                      <Icon size={14} />
                      <span className="font-mono text-xs uppercase tracking-[0.15em]">
                        {spec.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {spec.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
