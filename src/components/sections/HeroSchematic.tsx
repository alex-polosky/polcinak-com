type Node = {
  label: string;
  sublabel: string;
  box: { x: number; y: number; w: number; h: number };
  connector: [number, number, number, number];
  active?: boolean;
};

const nodes: Node[] = [
  {
    label: "CONSULTING",
    sublabel: "Software Eng.",
    box: { x: 25, y: 38, w: 105, h: 42 },
    connector: [150, 105, 80, 60],
    active: true,
  },
  {
    label: "PRINTING",
    sublabel: "3D & Fine Art",
    box: { x: 230, y: 38, w: 105, h: 42 },
    connector: [210, 105, 275, 60],
  },
  {
    label: "TERRACAST",
    sublabel: "Tabletop Gaming",
    box: { x: 120, y: 195, w: 120, h: 46 },
    connector: [180, 166, 180, 195],
  },
];

/** Blueprint-style diagram of the group hub and its operating domains. */
export function HeroSchematic() {
  return (
    <svg
      className="relative z-10 h-full w-full"
      viewBox="0 0 360 260"
      fill="none"
      role="img"
      aria-label="Technical schematic representing connected business disciplines"
    >
      <line x1="20" y1="130" x2="340" y2="130" className="stroke-line" strokeDasharray="2 4" />
      <line x1="180" y1="20" x2="180" y2="240" className="stroke-line" strokeDasharray="2 4" />

      <circle cx="180" cy="130" r="36" strokeWidth="1.5" fillOpacity="0.8" className="fill-surface stroke-signal" />
      <circle cx="180" cy="130" r="44" strokeDasharray="4 4" className="stroke-line" />
      <text x="180" y="126" textAnchor="middle" fontSize="9" fontWeight="600" className="fill-fg font-mono">
        THE POLCINAK
      </text>
      <text x="180" y="138" textAnchor="middle" fontSize="8" className="fill-accent font-mono">
        GROUP
      </text>

      {nodes.map(({ label, sublabel, box, connector, active }) => {
        const [x1, y1, x2, y2] = connector;
        const textY = box.y + 16;
        return (
          <g
            key={label}
            className="origin-center transition-transform duration-200 [transform-box:fill-box] hover:scale-105"
          >
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth="1.5"
              className={active ? "stroke-signal" : "stroke-line"}
            />
            <rect x={box.x} y={box.y} width={box.w} height={box.h} className="fill-surface stroke-line" />
            <rect
              x={box.x}
              y={box.y}
              width="4"
              height={box.h}
              className={active ? "fill-signal" : "fill-subtle"}
            />
            <text x={box.x + 11} y={textY} fontSize="10" fontWeight="600" className="fill-fg font-sans">
              {label}
            </text>
            <text x={box.x + 11} y={textY + 14} fontSize="8" className="fill-muted font-mono">
              {sublabel}
            </text>
          </g>
        );
      })}

      <circle cx="180" cy="130" r="110" strokeWidth="0.75" strokeDasharray="2 6" className="stroke-line" />
    </svg>
  );
}
