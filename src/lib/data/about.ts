export type Stat = { value: number; suffix: string; label: string };

export const STATS: Stat[] = [
  { value: 7, suffix: "+", label: "Products Delivered" },
  { value: 40, suffix: "+", label: "Production Releases" },
  { value: 438, suffix: "", label: "Design-System Commits" },
  { value: 28, suffix: "+", label: "APIs Integrated" },
  { value: 13, suffix: "+", label: "Product Lines Shipped" },
];

export type TimelineNode = {
  year: string;
  title: string;
  body: string;
};

export const TIMELINE: TimelineNode[] = [
  {
    year: "2022",
    title: "Started Coding",
    body: "Pursued a B.Tech in Computer Science at BVCOE, New Delhi, developing a strong foundation in programming, data structures, algorithms, and core computer science concepts.",
  },

  {
    year: "2023",
    title: "Frontend Development",
    body: "Focused on modern frontend engineering with React, component-driven architecture, responsive design, and accessibility, translating product requirements and designs into reliable user experiences.",
  },

  {
    year: "2024",
    title: "Full Stack Engineering",
    body: "Expanded into full-stack development with Node.js, Express, MongoDB, and real-time WebSockets, building end-to-end applications while leading GDSC outreach initiatives supporting 100+ students.",
  },

  {
    year: "2025",
    title: "Enterprise Engineering",
    body: "Gained industry experience across ASP.NET, SignalR, and Node.js backend systems, developing real-time applications and APIs with a focus on scalability, reliability, and maintainable engineering practices.",
  },

  {
    year: "2026",
    title: "EY — ABCD Platform",
    body: "Engineering a financial super-app spanning 13+ product lines, building production-grade React 19 and Next.js 16 frontends alongside Kotlin and Spring WebFlux microservices with a focus on scalability, reliability, and reusable architecture.",
  },

  {
    year: "Now",
    title: "AI & Emerging Technology",
    body: "Building AI-assisted product experiences and exploring Generative AI, NLP, and intelligent software systems to bring automation and contextual intelligence into modern applications.",
  },
];