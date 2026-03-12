import { useFadeIn } from "../hooks/useFadeIn";

export function Hero() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <header
      ref={ref}
      className="mb-16 text-center opacity-0 translate-y-5 transition-all duration-600"
    >
      <div className="relative mb-7 inline-block">
        <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-accent-1 via-accent-2 to-accent-3 animate-spin [animation-duration:6s]" />
        <img
          src="/icon_v3.png"
          alt="茶屋 愛太郎"
          className="relative block h-[140px] w-[140px] rounded-full border-4 border-bg object-cover"
        />
      </div>
      <h1 className="mb-2 text-[2rem] font-bold bg-gradient-to-br from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent">
        茶屋 愛太郎
      </h1>
      <p className="text-text-muted">Software Engineer — Tokyo, Shibuya</p>

      <div className="mt-5 flex flex-wrap justify-center gap-4">
        <SocialLink href="https://github.com/aitaro" icon={<GitHubIcon />}>
          GitHub
        </SocialLink>
        <SocialLink href="https://twitter.com/aitarochaya" icon={<XIcon />}>
          X (Twitter)
        </SocialLink>
      </div>
    </header>
  );
}

function SocialLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-sm text-text-muted transition-all hover:bg-surface-hover hover:text-text hover:-translate-y-0.5"
    >
      {icon}
      {children}
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
