import { Section } from "./Section";

function InfoCard({
  label,
  value,
  full,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl bg-surface p-5 transition-all hover:bg-surface-hover hover:-translate-y-0.5 ${full ? "col-span-full" : ""}`}
    >
      <div className="mb-1.5 text-xs uppercase tracking-wider text-text-muted">
        {label}
      </div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

export function About() {
  return (
    <Section title="About">
      <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        <InfoCard label="名前" value="茶屋 愛太郎" />
        <InfoCard label="Born" value="1996年" />
        <InfoCard label="活動場所" value="東京・渋谷" full />
      </div>
    </Section>
  );
}
