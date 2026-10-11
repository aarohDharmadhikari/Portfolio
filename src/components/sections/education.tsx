"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { profile } from "@/data/profile";
import { viewportOnce } from "@/lib/animations";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <GlassCard hoverLift={false} className="mt-10 flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
              <GraduationCap size={26} />
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-ink">
                {profile.education.degree}
              </h3>
              <p className="mt-1 text-ink-muted">{profile.education.institution}</p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
