import type { Project, ContactLink } from "./types";
import { EXTERNAL_LINKS } from "./constants";

// ============================================================================
// Projects
// ============================================================================

export const knyteProject: Project = {
  id: "knyte",
  name: "Knyte Inc.",
  type: "venture",
  status: "current",
  role: "Founder/CEO",
  description:
    "Managed cloud infrastructure for autonomous AI employees on isolated virtual machines.",
  metadata: {
    funding: "Y Combinator S26 Applicant",
    pivotFrom: "Sherbit",
  },
  links: [
    {
      label: "View Knyte",
      url: EXTERNAL_LINKS.knyte,
      ariaLabel: "Visit Knyte company website",
      openInNewTab: true,
    },
  ],
  visual: {
    id: "knyte-topology",
    type: "svg",
    source: "/images/knyte-topology.svg",
    altText: "Minimalist server and cloud infrastructure topology diagram",
    displayMode: "static",
  },
};

export const piCameraNodeProject: Project = {
  id: "pi-camera-node",
  name: "Pi Camera Node",
  type: "hardware",
  status: "current",
  role: "Hardware Engineer",
  description:
    "Custom hardware platform for distributed camera systems with edge processing capabilities.",
  specifications: [
    "ESP32 Architecture",
    "Custom 4-Layer PCB",
    "JLCPCB Manufactured",
  ],
  links: [
    {
      label: "View Schematics",
      url: EXTERNAL_LINKS.kicadSchematics,
      ariaLabel: "View KiCad schematics for Pi Camera Node",
      openInNewTab: true,
    },
  ],
  visual: {
    id: "pcb-layers",
    type: "image",
    source: "/images/pcb-layers.png",
    altText: "Exploded view of 4-layer PCB design for Pi Camera Node",
    displayMode: "static",
  },
};

export const mlResearchProject: Project = {
  id: "ml-research",
  name: "Machine Learning",
  type: "research",
  status: "ongoing",
  role: "Researcher",
  description:
    "Applied machine learning research focusing on practical data processing and classification techniques.",
  specifications: [
    "Data Preprocessing",
    "Binary Classification",
    "Decision Tree Logic",
  ],
};

export const projects: Project[] = [
  knyteProject,
  piCameraNodeProject,
  mlResearchProject,
];

// ============================================================================
// Contact Links
// ============================================================================

export const contactLinks: ContactLink[] = [
  {
    platform: "github",
    label: "GitHub",
    url: EXTERNAL_LINKS.github,
    icon: "github",
    ariaLabel: "Visit Andrew Xiong's GitHub profile",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: EXTERNAL_LINKS.linkedin,
    icon: "linkedin",
    ariaLabel: "Visit Andrew Xiong's LinkedIn profile",
  },
  {
    platform: "email",
    label: "Email",
    url: EXTERNAL_LINKS.email,
    icon: "mail",
    ariaLabel: "Send an email to Andrew Xiong",
  },
];

