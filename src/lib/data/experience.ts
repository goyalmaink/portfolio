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
      "Full-stack engineer working on the ABCD platform, a 13+ product-line financial super-app for Aditya Birla Capital.",

    highlights: [
      "Owned the Health Insurance journey across the React/Next.js frontend and Kotlin/Spring WebFlux orchestrator, with 180+ commits.",
      "Contributed 438 commits to a shared Storybook design system used across the platform.",
      "Developed Gold Loan, Fixed Deposit & Mutual Fund, Credit Score, and Digital Gold journeys using Next.js.",
      "Integrated 25+ downstream REST APIs through a reactive Backend-for-Frontend (BFF) layer.",
      "Implemented platform-wide analytics using a declarative GTM and BigQuery event-mapping layer.",
      "Worked within a ~179-microservice ecosystem using Docker, Kafka, MongoDB, Helm, and GCP.",
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

    summary:
      "Worked on backend services and REST APIs using Node.js, Express.js, and MongoDB.",

    highlights: [
      "Developed RESTful CRUD APIs using Node.js, Express.js, and MongoDB with Mongoose.",
      "Designed database schemas, controllers, and routes with validation and structured error handling.",
      "Tested and debugged APIs using Postman to maintain reliable API contracts and data integrity.",
    ],

    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Postman",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Arbro Pharmaceutical",
    period: "Jul 2025 — Aug 2025",
    summary:
      "Developed internal web applications and a Lead Management System using C#, ASP.NET, AJAX, and SQL Server.",
    highlights: [
      "Developed a Lead Management System using C#, ASP.NET, AJAX, and SQL Server to manage and track employee leads and workflows.",
      "Built an admin panel to assign and allocate leads and tasks to employees across the organisation.",
      "Integrated REST APIs into form controls, replacing static dropdown values with dynamically fetched and updated data.",
      "Implemented dynamic dropdowns and dependent form fields to improve data accuracy and reduce manual input.",
      "Developed a real-time internal chat system using ASP.NET, C#, and SignalR, improving communication speed by 60%.",
      "Optimized C# services and SQL queries, reducing page load time by 40%.",
    ],
    stack: [
      "C#",
      "ASP.NET",
      "AJAX",
      "SignalR",
      "SQL Server",
      "REST APIs",
      "jQuery",
    ],
  },

  {
    role: "Frontend Developer Intern",
    company: "Clickmecha",
    period: "Apr 2025 — Jun 2025",

    summary:
      "Worked on frontend development and real-time data integration for internal applications.",

    highlights: [
      "Integrated REST APIs for real-time data flow, improving application response time by 35%.",
      "Integrated MongoDB for live data updates, improving decision-making speed by 25%.",
      "Developed an Android admin dashboard that reduced training time by 50%.",
    ],

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];