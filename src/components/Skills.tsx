import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";

const SKILLS = [
  { name: "Dart / Flutter", level: "Primary", width: 95 },
  { name: "TypeScript / Next.js", level: "Advanced", width: 88 },
  { name: "Go", level: "Advanced", width: 75 },
  { name: "Ruby", level: "Intermediate", width: 60 },
  { name: "Python", level: "Intermediate", width: 58 },
] as const;

function SkillBar({
  name,
  level,
  width,
  animate,
}: {
  name: string;
  level: string;
  width: number;
  animate: boolean;
}) {
  return (
    <div className="rounded-xl bg-surface p-4 px-5">
      <div className="mb-2 flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-xs text-text-muted">{level}</span>
      </div>
      <div className="h-1 overflow-hidden rounded-sm bg-white/5">
        <div
          className="h-full rounded-sm bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 transition-all duration-1200 ease-out"
          style={{ width: animate ? `${width}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section title="Skills">
      <div ref={ref} className="flex flex-col gap-3.5">
        {SKILLS.map((skill) => (
          <SkillBar key={skill.name} {...skill} animate={animate} />
        ))}
      </div>
    </Section>
  );
}
