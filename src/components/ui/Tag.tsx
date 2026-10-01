import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-line/70 bg-canvas px-2 py-1 text-muted">
      {children}
    </span>
  );
}

export function StatusBadge({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center border px-2 py-0.5 text-[11px] font-medium ${
        active
          ? "border-signal/30 bg-signal/15 text-accent"
          : "border-line bg-line/40 text-muted"
      }`}
    >
      <span
        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${active ? "bg-signal" : "bg-muted"}`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export function CornerMarks() {
  const base = "absolute h-2 w-2 border-signal";
  return (
    <>
      <span aria-hidden="true" className={`${base} -top-1 -left-1 border-t-2 border-l-2`} />
      <span aria-hidden="true" className={`${base} -top-1 -right-1 border-t-2 border-r-2`} />
      <span aria-hidden="true" className={`${base} -bottom-1 -left-1 border-b-2 border-l-2`} />
      <span aria-hidden="true" className={`${base} -right-1 -bottom-1 border-r-2 border-b-2`} />
    </>
  );
}
