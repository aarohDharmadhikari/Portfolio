"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { skillGroups } from "@/data/skills";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Where engineering meets AI"
          description="The stack I reach for when moving from a research idea to a shipped product."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {skillGroups.map((group, i) => (
            <GlassCard key={group.category} delay={i * 0.1} className="p-7">
              <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-emerald-deep to-emerald block" />
              <h3 className="mt-4 font-display text-lg font-medium text-ink">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
