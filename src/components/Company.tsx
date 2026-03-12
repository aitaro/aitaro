import { Section } from "./Section";

export function Company() {
  return (
    <Section title="Company">
      <a
        href="https://sally-inc.jp"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl bg-surface p-7 transition-all hover:bg-surface-hover hover:-translate-y-0.5"
      >
        <h3 className="mb-2 text-lg font-semibold">Sally, Inc.</h3>
        <p className="text-sm text-text-muted">
          マーダーミステリーアプリ「ウズ」、マーダーミステリー専用エディタ「ウズスタジオ」を開発・運営。
        </p>
        <span className="mt-3 inline-block rounded-full bg-accent-1/15 px-3 py-1 text-xs font-medium text-accent-1">
          エンジニア募集中
        </span>
      </a>
    </Section>
  );
}
