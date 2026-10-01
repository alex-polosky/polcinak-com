import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-b border-line bg-canvas py-20 lg:py-24"
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  number,
  label,
  className = "",
}: {
  number: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 font-mono text-xs tracking-wider text-accent uppercase ${className}`}
    >
      <span>Section {number}</span>
      <span aria-hidden="true">{"//"}</span>
      <span>{label}</span>
    </div>
  );
}

export function SectionHeader({
  number,
  eyebrow,
  title,
  intro,
  className = "mb-12",
}: {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-between border-b border-line pb-6 md:flex-row md:items-end ${className}`}
    >
      <div>
        <Eyebrow number={number} label={eyebrow} className="mb-2" />
        <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {title}
        </h2>
      </div>
      <p className="mt-4 max-w-md font-mono text-sm text-muted md:mt-0">
        {intro}
      </p>
    </div>
  );
}
