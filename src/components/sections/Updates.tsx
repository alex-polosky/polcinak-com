import { updates } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Updates() {
  return (
    <Section id="updates">
      <SectionHeader
        number="04"
        eyebrow={updates.eyebrow}
        title={updates.title}
        intro={updates.intro}
      />

      {/* Intentional empty state; replace with an entries grid once posts exist. */}
      <div className="relative overflow-hidden border border-line bg-surface p-8 sm:p-12">
        <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-2xl space-y-4 py-6 text-center">
          <div className="inline-flex h-10 w-10 items-center justify-center border border-line bg-canvas font-mono text-sm text-accent">
            00
          </div>
          <h3 className="text-xl font-bold text-fg sm:text-2xl">{updates.emptyTitle}</h3>
          <p className="text-sm leading-relaxed text-muted sm:text-base">{updates.emptyBody}</p>

          <ul className="grid grid-cols-1 gap-4 pt-8 text-left opacity-60 sm:grid-cols-3">
            {updates.planned.map((title, i) => (
              <li key={title} className="border border-dashed border-line p-3 font-mono text-[11px]">
                <div className="mb-1 text-subtle">
                  PLANNED ENTRY {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-muted">{title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
