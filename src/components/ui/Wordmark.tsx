import { site } from "@/content/site";

export function WordmarkLogo({ className = "text-lg" }: { className?: string }) {
  return (
    <span className="flex items-center gap-2">
      <span
        className={`font-mono font-bold tracking-widest text-fg transition-colors group-hover:text-accent ${className}`}
      >
        {site.wordmark}
      </span>
      <span className="inline-block h-1.5 w-1.5 bg-signal" aria-hidden="true" />
    </span>
  );
}
