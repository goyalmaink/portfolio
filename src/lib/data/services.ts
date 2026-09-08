export type ServiceNode = {
  id: string;
  name: string;
  group: "web" | "orchestrator" | "platform" | "cms" | "infra";
  purpose: string;
  stack: string;
  contribution: string;
};

// Real services from the ABCD platform. `group` drives colour + clustering.
export const SERVICES: ServiceNode[] = [
  {
    id: "insurance-web",
    name: "insurance-web",
    group: "web",
    purpose: "Health, Motor, Pocket & Travel insurance customer journeys.",
    stack: "Next.js 16 · React 19 · TypeScript",
    contribution: "Owned the Health Insurance flow — proposer, nominee, revised-premium, My Policies.",
  },
  {
    id: "insurance-orchestrator",
    name: "insurance-orchestrator",
    group: "orchestrator",
    purpose: "Reactive BFF orchestrating the insurance application state-machine.",
    stack: "Kotlin · Spring WebFlux · Reactive MongoDB · Kafka",
    contribution: "Authored HealthFlow steps, decision strategies & premium recomputation (69 commits).",
  },
  {
    id: "loan-web",
    name: "loan-web",
    group: "web",
    purpose: "Personal & Gold Loan application journeys.",
    stack: "Next.js 16 · React 19 · Strapi CMS",
    contribution: "Built the Gold Loan apply flow, lender selection & CMS-driven landing (124 commits).",
  },
  {
    id: "investments-web",
    name: "investments-web",
    group: "web",
    purpose: "Mutual Funds & Fixed Deposit investment experiences.",
    stack: "Next.js 16 · React 19 · TypeScript",
    contribution: "Built the FD calculator, partner redirection & CMS sections (92 commits).",
  },
  {
    id: "tracks-web",
    name: "tracks-web",
    group: "web",
    purpose: "Credit-score tracking & credit-health dashboard.",
    stack: "Next.js 16 · React 19",
    contribution: "Built onboarding, credit-account API integration & analytics (23 commits).",
  },
  {
    id: "digimetal-web",
    name: "digimetal-web",
    group: "web",
    purpose: "Digital-gold buy / sell / SIP / gifting platform.",
    stack: "Next.js 16 · React 19",
    contribution: "Integrated the SimpliFi AI chatbot & refactored APIs (13 commits).",
  },
  {
    id: "cards-web",
    name: "cards-web",
    group: "web",
    purpose: "Credit-card application & offers.",
    stack: "Next.js 16 · React 19",
    contribution: "Contributed journey components.",
  },
  {
    id: "design-system",
    name: "design-system",
    group: "platform",
    purpose: "Shared atomic-design component library (Storybook).",
    stack: "React 19 · TypeScript · Vite · Storybook 10",
    contribution: "Core contributor — 438 commits of reusable components.",
  },
  {
    id: "commons-sdk",
    name: "commons-web-sdk",
    group: "platform",
    purpose: "Auth (SSO/OTP/JWT), BFF handler, CMS client, crypto & caching.",
    stack: "TypeScript · axios · Redis",
    contribution: "Consumed across every journey I built.",
  },
  {
    id: "analytics-sdk",
    name: "analytics-web-sdk",
    group: "platform",
    purpose: "Unified GTM / GA4 / CleverTap analytics.",
    stack: "TypeScript · GTM",
    contribution: "Instrumented declarative events across loan, investments & tracks.",
  },
  {
    id: "orchestration-core",
    name: "orchestration-core",
    group: "orchestrator",
    purpose: "Flow-engine framework: resumable step state-machine + DSL.",
    stack: "Kotlin · Spring WebFlux · MongoDB",
    contribution: "Built product flows on top of this core engine.",
  },
  {
    id: "loan-orchestrator",
    name: "loan-orchestrator",
    group: "orchestrator",
    purpose: "BFF for Personal & Gold Loan journeys (BRE eligibility).",
    stack: "Kotlin · Spring WebFlux · Kafka",
    contribution: "Integrated loan journey front-to-back.",
  },
  {
    id: "digimetal-orchestrator",
    name: "digimetal-orchestrator",
    group: "orchestrator",
    purpose: "BFF orchestrating digital-gold buy / sell / SIP / gifting flows.",
    stack: "Kotlin · Spring WebFlux · Kafka",
    contribution: "Integrated digital-gold journey front-to-back.",
  },
  {
    id: "strapi-cms",
    name: "strapi-cms",
    group: "cms",
    purpose: "Headless CMS driving landing content & feature toggles.",
    stack: "Strapi 5 · TypeScript · MySQL",
    contribution: "Integrated CMS content into loan & investment journeys.",
  },
  {
    id: "kafka",
    name: "kafka",
    group: "infra",
    purpose: "Async messaging backbone (KRaft mode) — DLQ + async signals.",
    stack: "Apache Kafka 3.8 · GCP Managed Kafka",
    contribution: "Journeys emit & react to transaction events.",
  },
  {
    id: "docker",
    name: "docker-compose-env",
    group: "infra",
    purpose: "Local dev environment — spins up every orchestrator + infra with one command.",
    stack: "Docker Compose · JFrog registry",
    contribution: "Ran the full orchestrator + Mongo/Kafka/Redis stack locally to build & debug flows.",
  },
  {
    id: "mongodb",
    name: "mongodb",
    group: "infra",
    purpose: "Reactive document store persisting resumable journey / step state.",
    stack: "MongoDB · reactive driver",
    contribution: "Every journey & step state I authored persists here.",
  },
  {
    id: "redis",
    name: "redis",
    group: "infra",
    purpose: "In-memory cache & session / token store.",
    stack: "Redis 7 · ioredis",
    contribution: "Backs auth & session caching consumed via the commons SDK.",
  },
];

export const SERVICE_COLORS: Record<ServiceNode["group"], string> = {
  web: "#FF6A00",
  orchestrator: "#111111",
  platform: "#FF8A3D",
  cms: "#8A5A2B",
  infra: "#4A5568",
};

export const SERVICE_LEGEND: { group: ServiceNode["group"]; label: string }[] = [
  { group: "web", label: "Web / Frontend" },
  { group: "orchestrator", label: "Orchestrator / BFF" },
  { group: "platform", label: "Platform / SDK" },
  { group: "cms", label: "CMS / Data" },
  { group: "infra", label: "Infra / Docker" },
];
