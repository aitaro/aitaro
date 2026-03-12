import { Section } from "./Section";

export function Project() {
  return (
    <Section title="Project">
      <a
        href="https://uzu-app.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl bg-surface p-7 transition-all hover:bg-surface-hover hover:-translate-y-0.5"
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 opacity-0 transition-opacity group-hover:opacity-100" />
        <h3 className="mb-2 text-lg font-semibold">
          マーダーミステリーアプリ「ウズ」
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">
          自動ゲームマスター機能、アプリ内通話を備えたマーダーミステリー専用アプリ。毎週新シナリオを公開中。プレイ人数2〜5名、プレイ時間30分〜180分の幅広いシナリオを掲載。
        </p>
        <span className="mt-3 inline-block text-xs text-accent-1">
          uzu-app.com →
        </span>
      </a>
    </Section>
  );
}
