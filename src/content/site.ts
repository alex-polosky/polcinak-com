// Site copy and structure for polcinak.com. Components render from this file,
// so most content edits should happen here rather than in JSX.

export type NavItem = {
  href: `#${string}`;
  label: string;
  longLabel: string;
};

export type Link = {
  label: string;
  href: string;
  external?: boolean;
};

export type BusinessStatus = "active" | "soon";

export type Imprint = {
  name: string;
  genre: string;
};

export type BusinessVisual = {
  kind: "deploy" | "fabrication" | "terrain";
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
};

export type Business = {
  id: string;
  index: string;
  category: string;
  name: string;
  description: string;
  status: BusinessStatus;
  statusLabel: string;
  capabilities: string[];
  imprints?: Imprint[];
  visual: BusinessVisual;
  cta: Link;
  email: string;
};

export type StructureUnit = {
  name: string;
  status: BusinessStatus;
  statusLabel: string;
  description: string;
  imprints?: Imprint[];
  link?: Link;
};

export type StructureBranch = {
  name: string;
  description: string;
  tag: string;
  units: StructureUnit[];
  contact?: { label: string; email: string };
};

export type ContactRoute = {
  index: string;
  department: string;
  label: string;
  status: BusinessStatus;
  title: string;
  description: string;
  email: string;
};

export const site = {
  name: "The Polcinak Group",
  wordmark: "POLCINAK",
  tagline: "Independent businesses. Shared ambition.",
  description:
    "A family-owned group in Northeast Ohio, building across software engineering, print production, and tabletop gaming.",
  url: "https://polcinak.com",
  location: "Northeast Ohio",
} as const;

export const nav: NavItem[] = [
  { href: "#businesses", label: "Our Businesses", longLabel: "Our Businesses" },
  { href: "#about", label: "About", longLabel: "About the Group" },
  { href: "#structure", label: "Our Structure", longLabel: "Our Structure" },
  { href: "#updates", label: "Updates", longLabel: "Updates" },
  { href: "#contact", label: "Contact", longLabel: "Contact Inquiries" },
];

export const hero = {
  chip: "Family-owned · Northeast Ohio",
  headline: "Independent businesses.",
  headlineAccent: "Shared ambition.",
  body: site.description,
  primaryCta: { label: "Explore Our Businesses", href: "#businesses" },
  secondaryCta: { label: "Get in Touch", href: "#contact" },
  facts: [
    { label: "Headquarters", value: "NE Ohio, USA" },
    { label: "Entity Type", value: "Family Group" },
    { label: "Core Sectors", value: "Tech & Making" },
  ],
};

const imprints: Imprint[] = [
  { name: "Worldmancer", genre: "High fantasy" },
  { name: "Pulsemancer", genre: "Science fantasy" },
];

export const businesses: Business[] = [
  {
    id: "consulting",
    index: "01",
    category: "Software",
    name: "Polcinak Consulting",
    description:
      "Software engineering consulting for websites, applications, and SaaS products—from initial concept to ongoing development.",
    status: "active",
    statusLabel: "Available for Projects",
    capabilities: ["Software Engineering", "Websites", "SaaS Development"],
    visual: {
      kind: "deploy",
      topLeft: "MODULE: CLIENT_DEPLOY",
      topRight: "STAGE // READY",
      bottomLeft: "ARCH: CLOUD / DISTRIBUTED",
      bottomRight: "</>",
    },
    cta: {
      label: "Explore Consulting",
      href: "https://alex.polosky.com",
      external: true,
    },
    email: "alex@polosky.com",
  },
  {
    id: "printing",
    index: "02",
    category: "Fabrication",
    name: "Polcinak Printing",
    description:
      "Print-on-demand services spanning resin and FDM 3D printing, canvas, fine art, and custom print projects.",
    status: "soon",
    statusLabel: "Coming Soon",
    capabilities: ["Resin & FDM", "Canvas", "Fine Art"],
    visual: {
      kind: "fabrication",
      topLeft: "FAB // MULTI-LAYER BED",
      topRight: "TOLERANCE 0.05mm",
      bottomLeft: "SURFACES: POLYMER / CANVAS",
      bottomRight: "CALIBRATION",
    },
    cta: {
      label: "Contact Printing",
      href: "mailto:prints@polcinak.com?subject=Polcinak%20Printing%20Inquiry",
    },
    email: "prints@polcinak.com",
  },
  {
    id: "terracast",
    index: "03",
    category: "Tabletop Gaming",
    name: "Terracast Games",
    description:
      "Premium tabletop roleplaying encounter boxes that bring together miniatures, terrain, maps, and adventure content.",
    status: "soon",
    statusLabel: "Coming Soon",
    capabilities: ["Encounter Boxes", "Miniatures", "Maps & Terrain"],
    imprints,
    visual: {
      kind: "terrain",
      topLeft: "GRID // 1-INCH TACTICAL",
      topRight: "SCALE 28mm-32mm",
      bottomLeft: "BOX: MODULAR TERRAIN",
      bottomRight: "SYSTEM READY",
    },
    cta: {
      label: "Contact Terracast Games",
      href: "mailto:info@terracast.games?subject=Terracast%20Games%20Inquiry",
    },
    email: "info@terracast.games",
  },
];

export const about = {
  eyebrow: "Origins & Intent",
  headline: ["Built by family.", "Driven by ideas."],
  byline: "Alex & Amanda · Northeast Ohio",
  body: "Founded by Alex and Amanda in Northeast Ohio, The Polcinak Group brings technical and creative work together under one family-owned umbrella. We are developing businesses that turn ideas into useful software, physical products, and memorable tabletop experiences.",
  principles: [
    {
      title: "01 / Practical Craft",
      body: "Focusing on solid engineering and tangible physical production.",
    },
    {
      title: "02 / Independent Vision",
      body: "Self-directed initiatives built without short-term corporate compromises.",
    },
    {
      title: "03 / Long-Term Anchor",
      body: "Rooted in Northeast Ohio with multi-disciplinary growth.",
    },
  ],
};

export const structure = {
  parent: {
    label: "Parent Organization",
    name: site.name,
    tag: "Holding & Direction",
    location: `Location: ${site.location}`,
  },
  branches: [
    {
      name: "Polcinak Holdings",
      description: "A home for established businesses within the group.",
      tag: "BRANCH // 01",
      units: [
        {
          name: "Polcinak Consulting",
          status: "active",
          statusLabel: "Available Now",
          description:
            "Client engagements, engineering direction, and production web applications.",
          link: {
            label: "alex.polosky.com",
            href: "https://alex.polosky.com",
            external: true,
          },
        },
      ],
    },
    {
      name: "Polcinak Ventures",
      description:
        "The group’s platform for developing and launching new businesses.",
      tag: "BRANCH // 02",
      units: [
        {
          name: "Polcinak Equipment",
          status: "soon",
          statusLabel: "Launching Soon",
          description:
            "Equipment ownership and lending to support group operations and future projects.",
        },
        {
          name: "Polcinak Printing",
          status: "soon",
          statusLabel: "Launching Soon",
          description:
            "On-demand 3D fabrication (Resin/FDM) and wide-format fine art printing.",
        },
        {
          name: "Terracast Games",
          status: "soon",
          statusLabel: "Launching Soon",
          description: "Tabletop gaming experiences, containing imprints",
          imprints,
        },
      ],
      contact: {
        label: "Ventures Platform Contact:",
        email: "ventures@polcinak.com",
      },
    },
  ] satisfies StructureBranch[],
};

export const updates = {
  eyebrow: "Dispatches & Milestones",
  title: "Updates",
  intro:
    "Chronicle of business developments, project dispatches, and public releases.",
  emptyTitle: "More from the group, soon.",
  emptyBody:
    "Launch announcements, project notes, and updates will appear here as our businesses develop.",
  planned: [
    "Consulting Case Notes",
    "Print Workshop Tour",
    "Terracast Box Reveals",
  ],
};

export const contact = {
  eyebrow: "Communication Inquiries",
  headline: "Find the right conversation.",
  intro:
    "Reach out directly to the responsible business lead. We respond to prospective software clients, venture discussions, print inquiries, and tabletop gaming partners.",
  routes: [
    {
      index: "01",
      department: "CLIENT SERVICES",
      label: "ACTIVE",
      status: "active",
      title: "Consulting",
      description:
        "For custom web applications, software engineering consulting, and SaaS product roadmaps.",
      email: "alex@polosky.com",
    },
    {
      index: "02",
      department: "GROUP DIRECTION",
      label: "VENTURES",
      status: "soon",
      title: "Ventures & General Inquiries",
      description:
        "For business incubation ideas, partnerships, group operations, and general administrative queries.",
      email: "ventures@polcinak.com",
    },
    {
      index: "03",
      department: "FABRICATION LAB",
      label: "PRINTING",
      status: "soon",
      title: "Printing",
      description:
        "For on-demand 3D resin & FDM queries, fine art canvas reproductions, and batch printing specs.",
      email: "prints@polcinak.com",
    },
    {
      index: "04",
      department: "TABLETOP DIVISION",
      label: "GAMING",
      status: "soon",
      title: "Terracast Games",
      description:
        "For tabletop RPG inquiries, encounter box retail questions, and Worldmancer / Pulsemancer lore.",
      email: "info@terracast.games",
    },
  ] satisfies ContactRoute[],
};

export const footer = {
  blurb:
    "The Polcinak Group brings together software engineering, 3D printing, fine art reproduction, and tabletop gaming into an integrated, family-owned enterprise.",
  badge: "Family-owned. Northeast Ohio.",
  destinations: [
    { label: "alex.polosky.com", href: "https://alex.polosky.com" },
    { label: "prints.polcinak.com (Soon)" },
    { label: "terracast.games (Soon)" },
  ] as { label: string; href?: string }[],
  emails: [
    "alex@polosky.com",
    "ventures@polcinak.com",
    "prints@polcinak.com",
    "info@terracast.games",
  ],
  bottomNotes: ["Based in Northeast Ohio", "Precision Industrial Design"],
};
