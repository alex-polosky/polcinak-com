import { hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ArrowDownIcon } from "@/components/ui/icons";
import { CornerMarks } from "@/components/ui/Tag";
import { HeroSchematic } from "./HeroSchematic";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-canvas">
      <div
        aria-hidden="true"
        className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-60"
      />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 border border-line bg-surface px-3 py-1 font-mono text-xs tracking-wider text-muted">
              <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
              <span>{hero.chip}</span>
            </div>

            <h1 className="text-3xl leading-[1.12] font-bold tracking-tight text-fg sm:text-5xl lg:text-6xl">
              {hero.headline}
              <br />
              <span className="text-accent">{hero.headlineAccent}</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.body}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center bg-accent px-6 py-3 font-mono text-sm font-medium tracking-wide text-on-accent shadow-sm transition-all hover:bg-accent-hover focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-canvas focus:outline-none"
              >
                {hero.primaryCta.label}
                <ArrowDownIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center border border-line bg-surface px-6 py-3 font-mono text-sm font-medium tracking-wide text-fg transition-all hover:border-signal focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-canvas focus:outline-none"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <dl className="grid max-w-lg grid-cols-3 gap-4 border-t border-line/60 pt-4 font-mono text-xs">
              {hero.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[10px] text-subtle uppercase">{fact.label}</dt>
                  <dd className="font-medium text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <figure className="relative w-full max-w-md border border-line bg-surface p-6">
              <CornerMarks />

              <div className="mb-4 flex items-center justify-between border-b border-line pb-3 font-mono text-xs">
                <span className="text-muted">SYS // POLCINAK_CORE</span>
                <span className="flex items-center gap-1.5 text-accent">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-signal" aria-hidden="true" />
                  ACTIVE NODE
                </span>
              </div>

              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-line-soft bg-canvas p-4">
                <div className="bg-dot-pattern absolute inset-0 opacity-40" aria-hidden="true" />
                <HeroSchematic />
              </div>

              <figcaption className="mt-3 flex items-center justify-between font-mono text-[11px] text-muted">
                <span>FIG 1.0 — INTERLOCKING OPERATING DOMAINS</span>
                <span className="text-accent">EST. OHIO</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
