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
          title="Tools, methods, and practice"
          description="A snapshot of the technologies and areas represented in my current work."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {skillGroups.map((group, index) => (
            <GlassCard key={group.category} delay={index * 0.08} className="p-7">
              <span className="block h-1 w-10 bg-gradient-to-r from-emerald to-plum" />
              <h3 className="mt-5 font-display text-lg font-medium text-ink">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => <Badge key={item}>{item}</Badge>)}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
