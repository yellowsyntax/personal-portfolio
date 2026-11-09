import { contact } from "../assets/icons";

export const site = {
  brand: "christian",
  name: "Christian Oduro",
  title: "Software Engineer & IT Officer",
  location: "Ga East, Ghana",
  email: "bluebird23szn@gmail.com",
  phone: "+233 500 073 292",
  headline: ["SYSTEMS", "THAT DELIVER"],
  tagline:
    "Software engineer and IT officer from Ghana — building backend, AI, and cloud systems for healthcare, security, recruitment, and logistics, then keeping them running in the real world.",
  services: [
    "Backend & APIs",
    "AI / Computer Vision",
    "Cloud & DevOps",
    "Networking & IT",
  ],
  recentWork: {
    label: "Live Project",
    name: "Diatel",
    image: "/images/hero.jpg?v=3",
    link: "https://diateldelivery.com",
  },
  cta: {
    label: "View All Projects",
    link: "/projects",
  },
  projectsHero: {
    image: "/images/projects-hero.png?v=3",
    headline: ["BUILT", "IN THE WILD"],
    kicker: "Selected Work · Production Systems",
    tagline:
      "Healthcare AI, claims engines, delivery logistics, CCTV analytics, and IT tooling — shipped and supported end to end.",
  },
  contactHero: {
    image: "/images/contact-hero.jpg?v=1",
    headline: ["LET'S", "TALK"],
    kicker: "Contact · Open for Work",
    tagline:
      "Have a project, collaboration, or role in mind — send a note and I’ll get back to you.",
    watermark: "alpine",
  },
};

export const skillGroups = [
  {
    title: "Backend & APIs",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSocket",
      "PostgreSQL (Neon)",
      "Frontend development",
      "Website design",
      "Web apps",
    ],
  },
  {
    title: "AI / Computer Vision",
    items: [
      "YOLO",
      "Face recognition",
      "Retrieval QA",
      "OCR (Tesseract)",
      "Presidio",
      "NeMo Guardrails",
      "DeepSeek API",
      "CVAT",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2)",
      "Docker",
      "Terraform",
      "Nginx",
      "Linux (Ubuntu)",
      "Server config",
    ],
  },
  {
    title: "Networking & IT",
    items: [
      "LAN / Wi-Fi",
      "Cisco",
      "Active Directory",
      "Google Workspace",
      "Helpdesk",
      "AnyDesk",
    ],
  },
];

// Kept for any older imports; About now uses skillGroups
export const skills = skillGroups.flatMap((group) =>
  group.items.map((name) => ({ name, type: group.title }))
);

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Blvcksapphire Gh LTD",
    initials: "BS",
    iconBg: "#B8F5D4",
    date: "Jan 2023 – Present",
    points: [
      "Build and support production systems for healthcare, security, recruitment, and logistics clients across backend, AI, cloud, and network deployment.",
      "Presented live demos to prospective clients and senior stakeholders, including the Minister of Health.",
      "NHIS claims backend and rules engine for approve / reject / flag decisions against clinical guidelines, plus WebSocket facility dashboards.",
      "Helix AI: retrieval-based clinical QA with local embeddings, PHI de-identification (Presidio), NeMo Guardrails, and AWS EC2 Docker staging.",
      "CCTV analytics with YOLO detection, number-plate and face recognition, running 8 camera streams on AWS EC2.",
      "Built Diatel (diateldelivery.com) end to end — customer delivery requests across Accra and operations order management.",
      "Pharmacy POS for 6 pharmacies; job portal serving ~400 applicants; CVAT mining-area annotation for model training.",
    ],
  },
  {
    title: "IT Officer",
    company_name: "Pharmacy Council Ghana, Koforidua",
    initials: "PC",
    iconBg: "#7dd3fc",
    date: "Sep 2025 – Oct 2026",
    points: [
      "Sole IT officer for the office — network, systems, security, and end-user support for 7 staff.",
      "Built an Arkesel messaging app to reach ~3,000 OTC medicine sellers across the Eastern Region, plus a monitoring web app for SMS delivery status.",
      "Set up and maintained LAN / Wi-Fi with Cisco gear, routers, switches, and structured cabling; managed ISP connectivity.",
      "Handled OS installs, antivirus, Active Directory / Google Workspace accounts, backups, licensing, helpdesk (WhatsApp + AnyDesk), and vendor coordination.",
    ],
  },
  {
    title: "Frontend Developer & IT Support Intern",
    company_name: "Mobile Web Ghana | American Corner",
    initials: "MW",
    iconBg: "#fcd34d",
    date: "Internship",
    points: [
      "Designed websites as a frontend developer.",
      "Provided IT support and handled presentations.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "Accra Technical University, Accra, Ghana",
  date: "Expected Sep 2027",
};

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
];

export const projects = [
  {
    name: "Diatel Delivery",
    description:
      "Live delivery platform for Accra — customer request/tracking app and operations order management, built end to end.",
    status: "live",
    url: "https://diateldelivery.com",
  },
  {
    name: "Helix AI (Helix Health)",
    description:
      "Retrieval-based clinical QA with local embeddings, Presidio PHI de-identification, NeMo Guardrails, and Docker deployment on AWS EC2.",
    status: "private",
    url: null,
  },
  {
    name: "NHIS Claims System",
    description:
      "Backend and rules-based decision engine for patient claims against Standard Treatment Guidelines, with WebSocket facility dashboards.",
    status: "private",
    url: null,
  },
  {
    name: "CCTV Analytics",
    description:
      "Multi-camera analytics with YOLO person/vehicle detection, number-plate OCR, and face recognition vector matching on AWS EC2.",
    status: "private",
    url: null,
  },
  {
    name: "Pharmacy POS",
    description:
      "Point-of-sale apps for 6 pharmacies covering sales, inventory, receipts, and reporting.",
    status: "private",
    url: null,
  },
  {
    name: "Seller Messaging System",
    description:
      "Arkesel-powered notices to ~3,000 OTC sellers across the Eastern Region, with SMS status monitoring for Pharmacy Council Ghana.",
    status: "private",
    url: null,
  },
];
