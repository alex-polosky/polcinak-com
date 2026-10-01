import { structure, type StructureBranch, type StructureUnit } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";

function UnitDescription({ unit }: { unit: StructureUnit }) {
  if (!unit.imprints) return <>{unit.description}</>;
  return (
    <>
      {unit.description}{" "}
      {unit.imprints.map((imprint, i) => (
        <span key={imprint.name}>
          {i > 0 && " and "}
          <strong className="text-fg">{imprint.name}</strong> ({imprint.genre})
        </span>
      ))}
      .
    </>
  );
}

function Unit({ unit, compact }: { unit: StructureUnit; compact: boolean }) {
  const active = unit.status === "active";
  return (
    <div className={`border border-line bg-surface ${compact ? "p-3.5" : "p-4"}`}>
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold text-fg">{unit.name}</h4>
        <span className={`font-mono text-[11px] ${active ? "text-accent" : "text-muted"}`}>
          {unit.statusLabel}
        </span>
      </div>
      <p className={`text-xs text-muted ${compact ? "mt-1" : "mt-1.5"}`}>
        <UnitDescription unit={unit} />
      </p>
      {unit.link && (
        <div className="mt-3 font-mono text-xs">
          <a
            href={unit.link.href}
            {...(unit.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-accent hover:underline"
          >
            {unit.link.label} &rarr;
          </a>
        </div>
      )}
    </div>
  );
}

function Branch({ branch }: { branch: StructureBranch }) {
  const compact = branch.units.length > 1;
  return (
    <div className="relative border border-line bg-canvas p-6">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-line pb-3">
        <div>
          <h3 className="text-lg font-bold text-fg">{branch.name}</h3>
          <p className="mt-0.5 text-xs text-muted">{branch.description}</p>
        </div>
        <span className="shrink-0 bg-line/30 px-2 py-0.5 font-mono text-[10px] text-muted">
          {branch.tag}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {branch.units.map((unit) => (
          <Unit key={unit.name} unit={unit} compact={compact} />
        ))}
      </div>

      {branch.contact && (
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3 font-mono text-xs">
          <span className="text-subtle">{branch.contact.label}</span>
          <a href={`mailto:${branch.contact.email}`} className="text-accent hover:underline">
            {branch.contact.email}
          </a>
        </div>
      )}
    </div>
  );
}

export function Structure() {
  const { parent, branches } = structure;
  return (
    <Section id="structure">
      <SectionHeader
        number="03"
        eyebrow="Organization Architecture"
        title="Our Structure"
        intro="A unified framework dividing active consulting, venture incubation, and shared production equipment."
        className="mb-10"
      />

      <div className="border border-line bg-surface p-6 sm:p-8">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-[11px] tracking-wider text-subtle uppercase">
              {parent.label}
            </span>
            <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xl font-bold text-fg sm:text-2xl">
              <span>{parent.name}</span>
              <span className="border border-line bg-line/40 px-2 py-0.5 font-mono text-xs font-normal text-muted">
                {parent.tag}
              </span>
            </div>
          </div>
          <div className="font-mono text-xs text-muted">{parent.location}</div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {branches.map((branch) => (
            <Branch key={branch.name} branch={branch} />
          ))}
        </div>
      </div>
    </Section>
  );
}
