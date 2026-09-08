export type SkillGroup = { category: string; blurb: string; skills: string[] };
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    blurb: "Interfaces that feel fast and considered.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "styled-components",
      "Framer Motion",
      "GSAP",
      "Storybook",
      "Accessibility",
    ],
  },
  {
    category: "Backend",
    blurb: "Services that stay up under load.",
    skills: [
      "Node.js",
      "Express",
      "Kotlin",
      "Spring WebFlux",
      "REST APIs",
      "BFF",
      "ASP.NET / C#",
      "Java",
    ],
  },
  {
    category: "Enterprise",
    blurb: "Systems built for teams and scale.",
    skills: [
      "Microservices",
      "Design Systems",
      "Strapi CMS",
      "Apache Kafka",
      "MongoDB",
      "Redis",
      "Docker",
      "Helm",
      "GCP",
      "CI/CD",
    ],
  },
  {
    category: "AI & Emerging",
    blurb: "Intelligence woven into product.",
    skills: ["GenAI", "NLP", "Machine Learning", "Gemini API", "Prompt Design"],
  },
];
