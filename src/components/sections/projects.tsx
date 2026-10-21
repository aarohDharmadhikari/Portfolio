"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { projects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const compact = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="section-light relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects, in progress and shipped"
          description="A factual overview of current builds, completed work, and longer-term concepts."
        />

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer} className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <GlassCard key={project.slug} delay={index * 0.08} hoverLift={false} className="flex flex-col p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-medium text-ink">{project.name}</h3>
                <Badge tone="emerald">{project.status}</Badge>
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink-muted">{project.description}</p>
              {project.contribution && <p className="mt-4 text-sm leading-relaxed text-emerald">{project.contribution}</p>}
              <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-line pt-5">
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-emerald">Project details <ArrowUpRight size={15} /></Link>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-emerald"><Github size={15} /> Source code <ArrowUpRight size={14} /></a>
              </div>
            </GlassCard>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer} className="mt-6 grid gap-6 md:grid-cols-3">
          {compact.map((project, index) => (
            <GlassCard key={project.slug} delay={index * 0.06} hoverLift={false} className="flex flex-col p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-lg font-medium text-ink">{project.name}</h3>
                <Badge>{project.status}</Badge>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>
              {project.contribution && <p className="mt-3 text-sm leading-relaxed text-emerald">{project.contribution}</p>}
              <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-4">
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-emerald">Details <ArrowUpRight size={14} /></Link>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-emerald"><Github size={14} /> GitHub</a>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
