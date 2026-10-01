import type { BusinessVisual as Visual } from "@/content/site";

function DeployBars() {
  return (
    <div className="z-10 space-y-1.5">
      <div className="h-2 w-3/4 bg-line" />
      <div className="h-2 w-1/2 bg-signal/40" />
      <div className="h-2 w-2/3 bg-line/60" />
    </div>
  );
}

function LayerLines() {
  return (
    <div className="z-10 space-y-1 py-2">
      <div className="h-0.5 w-full bg-line" />
      <div className="h-0.5 w-4/5 bg-line" />
      <div className="h-0.5 w-3/4 bg-line" />
      <div className="h-0.5 w-2/3 bg-line" />
      <div className="h-0.5 w-1/2 bg-signal/50" />
    </div>
  );
}

function EncounterTile() {
  return (
    <div className="z-10 flex items-center justify-center py-2">
      <div className="flex h-10 w-16 rotate-12 items-center justify-center border border-signal font-mono text-[9px] text-accent">
        ENCOUNTER
      </div>
    </div>
  );
}

const variants = {
  deploy: { body: DeployBars, pattern: "bg-grid-pattern opacity-25", accentCorner: true },
  fabrication: { body: LayerLines, pattern: "bg-dot-pattern opacity-30", accentCorner: false },
  terrain: { body: EncounterTile, pattern: "bg-grid-pattern opacity-40", accentCorner: false },
} as const;

/**
 * Technical placeholder panel for each business card. Swap for photography
 * once it exists.
 */
export function BusinessVisual({ visual }: { visual: Visual }) {
  const { body: Body, pattern, accentCorner } = variants[visual.kind];

  return (
    <div
      aria-hidden="true"
      className="relative mb-6 flex aspect-[16/9] flex-col justify-between overflow-hidden border border-line bg-canvas p-4 transition-colors group-hover:border-signal/50"
    >
      <div className={`absolute inset-0 ${pattern}`} />
      <div className="z-10 flex items-center justify-between font-mono text-[10px] text-subtle">
        <span>{visual.topLeft}</span>
        <span className={accentCorner ? "text-accent" : undefined}>{visual.topRight}</span>
      </div>
      <Body />
      <div className="z-10 flex items-center justify-between font-mono text-[10px] text-muted">
        <span>{visual.bottomLeft}</span>
        <span className={accentCorner ? "text-accent" : "text-subtle"}>{visual.bottomRight}</span>
      </div>
    </div>
  );
}
