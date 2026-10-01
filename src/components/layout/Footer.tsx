import { footer, nav, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { WordmarkLogo } from "@/components/ui/Wordmark";

function ColumnHeading({ children }: { children: string }) {
  return (
    <div className="text-[11px] font-semibold tracking-wider text-subtle uppercase">
      {children}
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-canvas font-mono text-xs text-muted">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="space-y-4 lg:col-span-2">
            <WordmarkLogo />
            <p className="max-w-sm font-sans text-xs leading-relaxed">
              {footer.blurb}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                {footer.badge}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <ColumnHeading>Directory</ColumnHeading>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-fg">
                    {item.longLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <ColumnHeading>Destinations</ColumnHeading>
            <ul className="space-y-2">
              {footer.destinations.map((d) => (
                <li key={d.label}>
                  {d.href ? (
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                    >
                      <span>{d.label}</span>
                      <span className="text-[10px]" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="text-subtle">{d.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <ColumnHeading>Direct Mail</ColumnHeading>
            <ul className="space-y-2">
              {footer.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="transition-colors hover:text-fg">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[11px] text-subtle sm:flex-row">
          <div>
            &copy; {year} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {footer.bottomNotes.map((note, i) => (
              <span key={note} className="flex items-center gap-6">
                {i > 0 && <span aria-hidden="true">&middot;</span>}
                <span>{note}</span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
