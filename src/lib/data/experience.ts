export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "EY (Ernst & Young)",
    period: "Feb 2026 — Present",
    summary:
      "Full-stack engineer on the ABCD platform — Aditya Birla Capital's 13+ product-line financial super-app.",
    highlights: [
      "Owned the Health Insurance journey end-to-end — React/Next.js customer flow and its Kotlin/Spring WebFlux orchestrator (180+ commits).",
      "Contributed 438 commits to a shared Storybook design system powering every product on the platform.",
      "Built Gold Loan, Fixed Deposit & Mutual Fund, Credit Score, and Digital Gold journeys in Next.js.",
      "Integrated 25+ downstream REST APIs through a reactive Backend-for-Frontend (BFF) layer.",
      "Instrumented platform-wide analytics with a declarative GTM / BigQuery event-mapping layer.",
      "Shipped into a ~179-microservice platform with Docker, Kafka, MongoDB, Helm on GCP.",
    ],
    stack: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Kotlin",
      "Spring WebFlux",
      "Storybook",
      "Strapi CMS",
      "Kafka",
      "MongoDB",
      "Docker",
      "GCP",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "TechChefz Digital",
    period: "Dec 2025 — Feb 2026",
    summary: "Built RESTful services with a clean MVC architecture.",
    highlights: [
      "Developed RESTful CRUD APIs with Node.js, Express.js, and MongoDB (Mongoose).",
      "Designed schema models, controllers, and routes with validation and structured error handling.",
      "Tested and debugged APIs with Postman for consistent contracts and data integrity.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Postman"],
  },
  {
    role: "Software Developer Intern",
    company: "Arbro Pharmaceutical",
    period: "Jul 2025 — Aug 2025",
    summary: "Real-time internal systems and backend performance work.",
    highlights: [
      "Built a real-time internal chat with ASP.NET, C#, and SignalR — 60% faster communication.",
      "Devised a skill-based ticket-routing filter that cut task misallocation by 30%.",
      "Optimized C# services and SQL queries, cutting page load time by 40%.",
    ],
    stack: ["ASP.NET", "C#", "SignalR", "SQL Server", "jQuery", "AJAX"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Clickmecha",
    period: "Apr 2025 — Jun 2025",
    summary: "Frontend and real-time data integrations.",
    highlights: [
      "Integrated REST APIs for real-time data flow and state — 35% faster response.",
      "Connected MongoDB for live updates, improving decision speed by 25%.",
      "Built an Android admin dashboard, cutting training time by 50%.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];
