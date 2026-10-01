import { contact } from "@/content/site";
import { Eyebrow, Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section id="contact">
      <div className="mb-12 max-w-3xl">
        <Eyebrow number="05" label={contact.eyebrow} className="mb-2" />
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {contact.headline}
        </h2>
        <p className="text-base leading-relaxed text-muted">{contact.intro}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {contact.routes.map((route) => (
          <div
            key={route.email}
            className="flex flex-col justify-between border border-line bg-surface p-6 transition-colors hover:border-signal"
          >
            <div>
              <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
                <span>
                  {route.index} {"//"} {route.department}
                </span>
                <span className={route.status === "active" ? "text-accent" : "text-subtle"}>
                  {route.label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-fg">{route.title}</h3>
              <p className="mt-1 mb-6 text-xs text-muted">{route.description}</p>
            </div>
            <a
              href={`mailto:${route.email}`}
              className="inline-flex items-center justify-between border-t border-line pt-3 font-mono text-sm font-medium text-accent hover:text-accent-hover"
            >
              <span>{route.email}</span>
              <span className="text-base" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
