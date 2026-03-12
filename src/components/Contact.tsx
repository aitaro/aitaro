import { Section } from "./Section";

export function Contact() {
  return (
    <Section title="Contact">
      <div className="rounded-2xl bg-surface p-7 text-center">
        <p className="text-sm text-text-muted">
          <a
            href="https://twitter.com/aitarochaya"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-2 hover:underline"
          >
            X (Twitter)
          </a>{" "}
          の DM からお気軽にどうぞ
        </p>
      </div>
    </Section>
  );
}
