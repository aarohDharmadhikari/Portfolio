
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Project experience"
          title="Experience built through projects"
          description="A selection of projects and collaborations that reflect my practical engineering work. This timeline describes project experience, not employment history."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative mt-14 space-y-10 border-l border-line pl-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-emerald shadow-[0_0_0_4px_rgba(47,209,143,0.15)]" />

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-medium text-ink">
                  {project.name}
                </h3>

                <Badge className="font-mono">
                  {project.status}
                </Badge>
              </div>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
                {project.description}
              </p>

              {project.contribution && (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald">
                  {project.contribution}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm text-ink-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-emerald"
                >
                  View repository ↗
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
