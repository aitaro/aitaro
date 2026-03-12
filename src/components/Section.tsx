import type { ReactNode } from "react";
import { useFadeIn } from "../hooks/useFadeIn";

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className="mb-12 opacity-0 translate-y-5 transition-all duration-600"
    >
      <h2 className="relative mb-5 pl-5 text-xs uppercase tracking-[3px] text-text-muted before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br before:from-accent-1 before:via-accent-2 before:to-accent-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
