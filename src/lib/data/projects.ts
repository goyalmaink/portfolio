export type CaseSection = { heading: string; body: string; bullets?: string[] };

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tags: string[];
  accent: string; // hex for the case-study accent
  summary: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  problem: string;
  responsibilities: string[];
  architecture: string;
  challenges: string[];
  impact: string[];
  learnings: string[];
  code?: { label: string; language: string; snippet: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "abcd-platform",
    index: "01",
    title: "ABCD PLATFORM",
    subtitle: "Enterprise financial super-app · 13+ product lines",
    year: "2026",
    role: "Full-Stack Engineer",
    tags: ["Next.js", "Kotlin", "Micro-Frontend", "BFF"],
    accent: "#FF6A00",
    summary:
      "Aditya Birla Capital's digital super-app — Loans, Insurance, Investments, Digital Gold, Credit Cards and Credit Score, unified behind a micro-frontend + BFF architecture on ~179 microservices.",
    metrics: [
      { value: "13+", label: "Product lines" },
      { value: "~179", label: "Microservices" },
      { value: "6", label: "Journeys shipped" },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Kotlin 2.2",
      "Spring WebFlux",
      "Reactive MongoDB",
      "Apache Kafka",
      "Strapi CMS",
      "Docker",
      "Helm",
      "GCP",
    ],
    problem:
      "A large financial institution needed a single, cohesive digital experience across a dozen independent product lines — each owned by different teams, deployed on its own cadence, yet feeling like one seamless app to the customer.",
    responsibilities: [
      "Built product journeys in Next.js (App Router) consuming a shared, versioned design system.",
      "Authored parts of the Kotlin/Spring WebFlux orchestrators that aggregate downstream services.",
      "Integrated Strapi CMS so marketing could ship content without a code deploy.",
      "Wired SSO / OTP / JWT auth and analytics instrumentation across journeys.",
    ],
    architecture:
      "Each product is an independently deployed Next.js app mounted at its own basePath, sharing versioned npm design libraries and SDKs, composed at runtime and fronted by a per-product Backend-for-Frontend. Orchestrators are reactive Kotlin/Spring WebFlux services over reactive MongoDB, coordinating downstream APIs through a step/flow state-machine and emitting events to Kafka.",
    challenges: [
      "Keeping a shared component library backward-compatible across 6+ consuming apps.",
      "Modelling resumable, multi-step journeys (a user can leave and return mid-application).",
      "Reactive (Mono/Flux) end-to-end without blocking calls sneaking in.",
    ],
    impact: [
      "Shipped 6 customer journeys into production for real banking customers.",
      "Cut duplicate UI work across teams via the shared design system.",
      "Reduced content release cycles from code-deploys to CMS edits.",
    ],
    learnings: [
      "How micro-frontends trade deploy independence for composition complexity.",
      "Why a BFF is the right seam for auth, shaping data, and hiding downstream chaos.",
      "Designing component APIs that survive breaking changes at scale.",
    ],
    code: {
      label: "Reactive orchestration step (Kotlin)",
      language: "kotlin",
      snippet: `override fun execute(ctx: StepContext): Mono<StepResult> =
    healthClient.fetchRevisedPremium(ctx.transactionId)
        .map { premium -> ctx.withRevisedPremium(premium) }
        .flatMap { decisionStrategy.evaluate(it) }
        .retryWhen(Retry.backoff(3, Duration.ofMillis(200)))
        .onErrorResume(::toSafeStepFailure)`,
    },
  },
  {
    slug: "health-insurance-journey",
    index: "02",
    title: "HEALTH INSURANCE",
    subtitle: "End-to-end journey · React ↔ Kotlin orchestrator",
    year: "2026",
    role: "Full-Stack Owner",
    tags: ["React", "Kotlin", "State Machine", "KYC"],
    accent: "#FF8A3D",
    summary:
      "The full health-insurance buying flow — proposer, nominee and member declarations, KYC, revised-premium recomputation and policy issuance — owned across the React frontend and the Kotlin/Spring orchestrator.",
    metrics: [
      { value: "180+", label: "Commits (FE+BE)" },
      { value: "8+", label: "APIs integrated" },
      { value: "E2E", label: "Full-stack ownership" },
    ],
    stack: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Kotlin",
      "Spring WebFlux",
      "Reactive MongoDB",
      "Kafka",
    ],
    problem:
      "Buying health insurance online is a long, branch-heavy journey — member declarations, medical questionnaires, KYC, add-ons and premium changes — that must stay resumable, validated, and correct at every step.",
    responsibilities: [
      "Built proposer, nominee and insured-member (spouse/son/daughter) screens with validation.",
      "Implemented revised-premium and super-top-up UI and mapping.",
      "Authored HealthFlow orchestration steps, decision strategies and premium recomputation in Kotlin.",
      "Integrated Relation, Occupation, Education, Income-Range and health-quote APIs.",
    ],
    architecture:
      "The frontend drives a transaction/step REST contract exposed by the orchestrator. Each screen maps to a Step; branching is handled by pluggable DecisionStrategy classes; state persists in reactive MongoDB so the journey can resume. GHD face-scan KYC redirects out and back into the flow.",
    challenges: [
      "Editing an earlier step (rewind) without corrupting downstream state.",
      "Recomputing premium correctly as add-ons and declarations change.",
      "Age/plan-type eligibility rules with many edge cases.",
    ],
    impact: [
      "Delivered a production health-insurance purchase flow end-to-end.",
      "Owned both sides of the stack for a single product — rare at intern level.",
    ],
    learnings: [
      "State machines make complex, resumable journeys tractable.",
      "The value of a typed API contract shared by FE and BE.",
    ],
    code: {
      label: "Age-eligibility guard (TypeScript)",
      language: "typescript",
      snippet: `export function isMemberEligible(dob: string, plan: PlanType): Eligibility {
  const age = yearsSince(dob);
  const { minAge, maxAge } = PLAN_AGE_BOUNDS[plan];
  if (age < minAge) return { ok: false, reason: "BELOW_MIN_AGE" };
  if (age > maxAge) return { ok: false, reason: "ABOVE_MAX_AGE" };
  return { ok: true, age };
}`,
    },
  },
  {
    slug: "design-system",
    index: "03",
    title: "DESIGN SYSTEM",
    subtitle: "Storybook component library · 438 commits",
    year: "2026",
    role: "Core Contributor",
    tags: ["React", "Storybook", "Vite", "Atomic Design"],
    accent: "#111111",
    summary:
      "A shared, atomic-design React component library — published as versioned npm packages and consumed by every product on the platform. My single largest footprint.",
    metrics: [
      { value: "438", label: "Commits authored" },
      { value: "6+", label: "Consuming apps" },
      { value: "A11y", label: "axe-tested" },
    ],
    stack: ["React 19", "TypeScript", "Storybook 10", "Vite", "Vitest", "styled-components"],
    problem:
      "Six product teams were rebuilding the same cards, banners, inputs and modals — inconsistent, slow, and impossible to keep on-brand.",
    responsibilities: [
      "Built reusable components: lender/exclusive offer cards, invest & discount banners, sidebar FAQ, proposer/nominee toolkits.",
      "Added cross-cutting props (error-message, icon) and shared validations.",
      "Wrote Storybook stories as living docs and visual-regression coverage.",
    ],
    architecture:
      "Atomic design (atoms → molecules → organisms → templates), built with Vite and published as tree-shakeable npm packages with per-component entry points. Storybook doubles as documentation and a visual-regression safety net; Vitest + Testing Library + axe enforce quality.",
    challenges: [
      "Designing component APIs flexible enough to reuse but strict enough to stay consistent.",
      "Rolling out breaking changes consumed by 6+ apps.",
    ],
    impact: [
      "Eliminated duplicate UI work across product teams.",
      "Made accessibility and brand consistency the default, not an afterthought.",
    ],
    learnings: [
      "A component library is a product — versioning and DX matter as much as pixels.",
      "Stories are the cheapest documentation you'll ever write.",
    ],
    code: {
      label: "Reusable, typed component API (TypeScript)",
      language: "typescript",
      snippet: `type DiscountBannerProps = {
  title: string;
  discountPct: number;
  icon?: React.ReactNode;
  errorMessage?: string;
  onApply?: () => void;
};

export const DiscountBanner = ({ title, discountPct, icon, ...rest }: DiscountBannerProps) => (
  <Surface tone="accent" role="region" aria-label={title}>
    {icon}
    <Heading>{title}</Heading>
    <Badge>{discountPct}% OFF</Badge>
  </Surface>
);`,
    },
  },
  {
    slug: "askaura-ai",
    index: "04",
    title: "ASKAURA AI",
    subtitle: "AI chatbot · real-time NLP with Gemini",
    year: "2025",
    role: "Full-Stack Developer",
    tags: ["React", "Node.js", "Gemini API", "NLP"],
    accent: "#FF6A00",
    summary:
      "An AI-powered conversational assistant with real-time NLP responses, a scalable API layer, and a designed conversational UI.",
    metrics: [
      { value: "+50%", label: "User engagement" },
      { value: "-35%", label: "Response latency" },
      { value: "Real-time", label: "NLP replies" },
    ],
    stack: ["React.js", "Node.js", "Express.js", "Gemini API", "Figma"],
    problem:
      "Users wanted instant, natural answers instead of static FAQs and forms.",
    responsibilities: [
      "Built the chat UI and streaming response experience in React.",
      "Designed a scalable Node/Express API around the Gemini model.",
      "Prototyped the conversational flow in Figma before building.",
    ],
    architecture:
      "A React client streams from a Node/Express API that wraps the Gemini API, with prompt shaping, and a responsive conversational UI.",
    challenges: [
      "Keeping latency low while streaming model output.",
      "Designing a conversational UX that feels alive, not robotic.",
    ],
    impact: ["Improved engagement by 50%.", "Reduced response latency by 35%."],
    learnings: ["Streaming UX is a product problem, not just an API detail."],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
