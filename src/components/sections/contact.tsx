"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Check, Copy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { useMagnetic } from "@/lib/use-magnetic";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const magnetic = useMagnetic(0.3);
  const hasEmail = profile.email.length > 0;
  const hasGithub = profile.social.github.length > 0;
  const hasLinkedin = profile.social.linkedin.length > 0;

  async function copyEmail() {
    if (!hasEmail) return;
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link below still works.
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28 md:py-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="glass-strong mx-auto max-w-4xl rounded-[2rem] px-8 py-16 text-center sm:px-16"
      >
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth shipping"
          description="Open to full-time roles and interesting AI-adjacent problems."
          align="center"
          className="mx-auto"
        />

        {hasEmail ? (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={`mailto:${profile.email}`}
              data-cursor="link"
              style={{ x: magnetic.x, y: magnetic.y }}
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-medium text-void shadow-[0_0_0_1px_rgba(47,209,143,0.4),0_8px_30px_-8px_rgba(47,209,143,0.55)] transition-colors duration-300 hover:bg-emerald-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-void"
            >
              <Mail size={16} />
              {profile.email}
            </motion.a>
            <Button variant="ghost" onClick={copyEmail} aria-label="Copy email address">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>
        ) : (
          <p className="mt-10 font-mono text-sm text-ink-faint">
            [ Add your email in src/data/profile.ts to activate this section ]
          </p>
        )}

        {(hasGithub || hasLinkedin) && (
          <div className="mt-8 flex items-center justify-center gap-3">
            {hasGithub && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                data-cursor="link"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-ink"
              >
                <Github size={18} />
              </a>
            )}
            {hasLinkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                data-cursor="link"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-ink"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
}
