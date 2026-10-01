import type { Business } from "@/content/site";
import { ExternalLinkIcon, MailIcon } from "@/components/ui/icons";
import { StatusBadge, Tag } from "@/components/ui/Tag";
import { BusinessVisual } from "./BusinessVisual";

export function BusinessCard({ business }: { business: Business }) {
  const active = business.status === "active";
  const { cta } = business;

  return (
    <article
      className={`group relative flex flex-col border border-line bg-surface transition-all duration-200 ${
        active ? "hover:border-signal" : "hover:border-muted"
      }`}
    >
      <div className={`h-1 w-full ${active ? "bg-signal" : "bg-subtle/50"}`} aria-hidden="true" />

      <div className="flex flex-grow flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="mb-4 flex items-center justify-between font-mono text-xs">
            <span className="text-muted uppercase">
              {business.index} / {business.category}
            </span>
            <StatusBadge active={active}>{business.statusLabel}</StatusBadge>
          </div>

          <h3
            className={`mb-3 text-2xl font-bold text-fg ${
              active ? "transition-colors group-hover:text-accent" : ""
            }`}
          >
            {business.name}
          </h3>

          <p
            className={`text-sm leading-relaxed text-muted ${
              business.imprints ? "mb-4" : "mb-6"
            }`}
          >
            {business.description}
          </p>

          {business.imprints && (
            <div className="mb-4 space-y-2 border border-line/70 bg-canvas p-3">
              <div className="font-mono text-[10px] tracking-wider text-subtle uppercase">
                {business.name.split(" ")[0]} Imprints &amp; Lines
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                {business.imprints.map((imprint, i) => (
                  <div
                    key={imprint.name}
                    className={`border-l-2 pl-2 ${i === 0 ? "border-signal" : "border-subtle"}`}
                  >
                    <div className="font-semibold text-fg">{imprint.name}</div>
                    <div className="text-[11px] text-muted">{imprint.genre}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <div className="mb-2 font-mono text-[10px] tracking-wider text-subtle uppercase">
              Capabilities
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {business.capabilities.map((cap) => (
                <Tag key={cap}>{cap}</Tag>
              ))}
            </div>
          </div>

          <BusinessVisual visual={business.visual} />
        </div>

        <div className="space-y-3 border-t border-line pt-6">
          <a
            href={cta.href}
            {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`inline-flex w-full items-center justify-between px-4 py-2.5 font-mono text-xs font-medium transition-colors focus:ring-2 focus:ring-signal focus:outline-none ${
              active
                ? "bg-accent text-on-accent hover:bg-accent-hover"
                : "border border-line bg-canvas text-fg hover:border-signal hover:text-accent"
            }`}
          >
            <span>{cta.label}</span>
            {cta.external ? (
              <ExternalLinkIcon className="ml-1 h-3.5 w-3.5" />
            ) : (
              <MailIcon className="ml-1 h-3.5 w-3.5" />
            )}
          </a>
          <div className="flex items-center justify-between pt-1 font-mono text-xs">
            <span className="text-subtle">Direct Inquiry:</span>
            <a
              href={`mailto:${business.email}`}
              className="text-muted underline decoration-line underline-offset-4 hover:text-accent"
            >
              {business.email}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
