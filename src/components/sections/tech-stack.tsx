"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { webStack, aiStack, learningStack } from "@/data/tech-stack";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max animate-marquee gap-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="glass whitespace-nowrap rounded-full px-6 py-3 font-mono text-sm text-ink-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I reach for"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 space-y-5">
          <MarqueeRow items={webStack} />
          <MarqueeRow items={aiStack} reverse />
        </div>

        {learningStack.length > 0 && (
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Currently learning
            </span>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {learningStack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
