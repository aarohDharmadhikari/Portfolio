"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { projects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/animations";

function ProjectLinks({ repoUrl, demoUrl }: { repoUrl?: string; demoUrl?: string }) {
  if (!repoUrl && !demoUrl) return null;
  return (
    <div className="flex items-center gap-2">
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View source on GitHub"
          onClick={(e) => e.stopPropagation()}
          data-cursor="link"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-ink"
        >
          <Github size={16} />
        </a>
      )}
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View live demo"
          onClick={(e) => e.stopPropagation()}
          data-cursor="link"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-ink"
        >
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const compact = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="What I'm building"
          description="Two systems currently in active development, plus a handful of applied AI experiments."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {featured.map((project, i) => (
            <GlassCard
              key={project.slug}
              delay={i * 0.1}
              tilt
              cursor="view"
              cursorLabel="View"
              className="flex flex-col p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-medium text-ink">
                  {project.name}
                </h3>
                <div className="flex shrink-0 items-center gap-2">
                  {project.status && (
                    <Badge tone="emerald" className="font-mono">
                      {project.status}
                    </Badge>
                  )}
                  <ProjectLinks repoUrl={project.repoUrl} demoUrl={project.demoUrl} />
                </div>
              </div>

              <p className="mt-4 flex-1 text-base leading-relaxed text-ink-muted">
                {project.description}
              </p>

              {typeof project.progress === "number" && (
                <div className="mt-6">
                  <div className="flex items-center justify-between font-mono text-xs text-ink-faint">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={viewportOnce}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-deep to-emerald"
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-6 grid gap-6 md:grid-cols-3"
        >
          {compact.map((project, i) => (
            <GlassCard
              key={project.slug}
              delay={i * 0.1}
              cursor="view"
              cursorLabel="View"
              className="p-6"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-display text-lg font-medium text-ink">
                  {project.name}
                </h4>
                <ProjectLinks repoUrl={project.repoUrl} demoUrl={project.demoUrl} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
