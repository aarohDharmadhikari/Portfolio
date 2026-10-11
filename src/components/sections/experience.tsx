"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const timeline = projects
  .filter((p) => typeof p.progress === "number")
  .sort((a, b) => (b.progress ?? 0) - (a.progress ?? 0));

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on, project by project"
          description="I'm early in my career, so this is a build log rather than a job history — each entry is a real system I'm actively developing, ordered by how far along it is."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative mt-14 space-y-10 border-l border-line pl-8"
        >
          {timeline.map((project) => (
            <motion.div key={project.slug} variants={fadeUp} className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-emerald shadow-[0_0_0_4px_rgba(47,209,143,0.15)]" />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-medium text-ink">
                  {project.name}
                </h3>
                <Badge tone="emerald" className="font-mono">
                  {project.status}
                </Badge>
              </div>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
