import { about } from "@/content/site";
import { Eyebrow, Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about">
      <div className="relative border border-line bg-surface p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <Eyebrow number="02" label={about.eyebrow} />
            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {about.headline[0]}
              <br />
              {about.headline[1]}
            </h2>
            <div className="pt-2">
              <span className="inline-block border-l-2 border-signal py-1 pl-3 font-mono text-xs text-muted">
                {about.byline}
              </span>
            </div>
          </div>

          <div className="space-y-6 border-line text-base leading-relaxed text-muted sm:text-lg lg:col-span-8 lg:border-l lg:pl-8">
            <p>{about.body}</p>

            <div className="grid grid-cols-1 gap-6 border-t border-line/70 pt-6 font-mono text-xs sm:grid-cols-3">
              {about.principles.map((p) => (
                <div key={p.title}>
                  <div className="mb-1 font-semibold text-fg">{p.title}</div>
                  <p className="font-sans text-[12px] leading-normal text-subtle">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
