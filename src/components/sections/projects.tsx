
"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { projects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/animations";

function ProjectLinks({
  repoUrl,
  demoUrl,
}: {
  repoUrl?: string;
  demoUrl?: string;
}) {
  if (!repoUrl && !demoUrl) return null;

  return (
    <div className="flex shrink-0 items-center gap-2">
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
          title="View repository on GitHub"
          onClick={(event) => event.stopPropagation()}
          data-cursor="link"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-emerald"
        >
          <Github size={16} />
        </a>
      )}

      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View live demo"
          title="View live demo"
          onClick={(event) => event.stopPropagation()}
          data-cursor="link"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-emerald"
        >
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const compact = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've worked on"
          description="Explore my projects, from work currently in development to completed applications and longer-term concepts."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {featured.map((project, index) => (
            <GlassCard
              key={project.slug}
              delay={index * 0.1}
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

                  <ProjectLinks
                    repoUrl={project.repoUrl}
                    demoUrl={project.demoUrl}
                  />
                </div>
              </div>

              <p className="mt-4 flex-1 text-base leading-relaxed text-ink-muted">
                {project.description}
              </p>

              {project.contribution && (
                <p className="mt-4 text-sm leading-relaxed text-emerald">
                  {project.contribution}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-ink-muted transition-colors hover:text-emerald"
                >
                  <Github size={15} />
                  View repository
                  <span aria-hidden="true">↗</span>
                </a>
              )}
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
          {compact.map((project, index) => (
            <GlassCard
              key={project.slug}
              delay={index * 0.1}
              cursor="view"
              cursorLabel="View"
              className="flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-lg font-medium text-ink">
                  {project.name}
                </h4>

                <ProjectLinks
                  repoUrl={project.repoUrl}
                  demoUrl={project.demoUrl}
                />
              </div>

              {project.status && (
                <div className="mt-3">
                  <Badge>{project.status}</Badge>
                </div>
              )}

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              {project.contribution && (
                <p className="mt-3 text-sm leading-relaxed text-emerald">
                  {project.contribution}
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm text-ink-muted transition-colors hover:text-emerald"
                >
                  <Github size={15} />
                  View repository
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
