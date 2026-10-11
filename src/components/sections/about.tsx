"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, viewportOnce } from "@/lib/animations";

const facts = [
  { label: "Focus", value: "Full-stack systems + applied AI" },
  { label: "Currently building", value: "MAX iOS — an AI operating system" },
  { label: "Studying", value: profile.education.degree },
  { label: "Based in", value: profile.location },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="I build the product and the model underneath it"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted"
          >
            <p>
              I&rsquo;m {profile.firstName}, a {profile.title.toLowerCase()}{" "}
              working at the intersection of production software and applied
              AI. My background is in {profile.education.degree} at{" "}
              {profile.education.institution}, which shapes how I approach
              engineering — as much a modeling problem as a software one.
            </p>
            <p>
              Most of my current work sits between two poles: MAX iOS, an
              ambitious AI operating system still in its architecture phase,
              and a deep learning framework that normalizes spoken Ahirani
              into standard Marathi using Whisper. Alongside those, I work on
              smaller applied-AI tools — resume analysis, plagiarism
              detection, and prediction systems.
            </p>
          </motion.div>
        </div>

        <GlassCard delay={0.1} hoverLift={false} className="h-fit p-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald">
            At a glance
          </span>
          <dl className="mt-6 space-y-5">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-line pb-5 last:border-0 last:pb-0">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-base text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </GlassCard>
      </div>
    </section>
  );
}
