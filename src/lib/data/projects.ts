export type CaseSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tags: string[];
  accent: string;
  summary: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  problem: string;
  responsibilities: string[];
  architecture: string;
  challenges: string[];
  impact: string[];
  learnings: string[];
  code?: {
    label: string;
    language: string;
    snippet: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "abcd-platform",
    index: "01",
    title: "ABCD PLATFORM",
    subtitle: "Enterprise financial super-app · 13+ product lines",
    year: "2026",
    role: "Full-Stack Engineer",
    tags: ["Next.js", "Kotlin", "Micro-Service", "BFF"],
    accent: "#FF6A00",

    summary:
      "Aditya Birla Capital's financial super-app covering Loans, Insurance, Investments, Digital Gold, Credit Cards, and Credit Score. The platform uses a micro-frontend and Backend-for-Frontend architecture across approximately 13 microservices.",

    metrics: [
      { value: "13+", label: "Products / Microservices" },
      { value: "7+", label: "Journeys shipped" },
      { value: "25+", label: "APIs integrated" },
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
      "The platform brings multiple financial products into a single digital experience. Each product is developed by different teams and has its own services and release cycle, while the customer experience needs to remain consistent across the entire platform.",

    responsibilities: [
      "Developed customer journeys using Next.js and React with the shared platform design system.",
      "Worked on the Health Insurance journey across both the React frontend and Kotlin/Spring WebFlux orchestration layer.",
      "Developed proposer, nominee, member declaration, revised-premium, and policy-related flows for Health Insurance.",
      "Implemented and integrated Kotlin/Spring WebFlux orchestrators to coordinate multiple downstream APIs.",
      "Integrated Strapi CMS for dynamic and content-driven product sections.",
      "Integrated SSO, OTP, JWT authentication, and analytics across product journeys.",
      "Integrated multiple REST APIs through the Backend-for-Frontend layer.",
    ],

    architecture:
      "The platform follows a micro-frontend architecture where individual product applications can be developed and deployed independently. Shared npm packages provide common components and utilities. A Backend-for-Frontend layer handles authentication, API aggregation, and data transformation, while Kotlin/Spring WebFlux orchestrators manage complex multi-step product journeys using reactive services, MongoDB, and Kafka.",

    challenges: [
      "Maintaining consistent UI and behavior across multiple independently developed product applications.",
      "Handling complex multi-step journeys where users can move between steps and resume an application later.",
      "Managing multiple API integrations while keeping the frontend contract simple and predictable.",
      "Maintaining a fully reactive backend flow without introducing blocking operations.",
    ],

    impact: [
      "Delivered 6 customer journeys to production across the financial platform.",
      "Contributed to the Health Insurance journey across both frontend and backend systems.",
      "Reduced repeated UI development through the shared design system.",
      "Enabled product teams to manage content through Strapi without requiring code changes for every update.",
    ],

    learnings: [
      "Gained practical experience working with micro-frontend architecture at enterprise scale.",
      "Learned how BFF and orchestration layers simplify complex frontend-to-service communication.",
      "Developed a deeper understanding of reactive programming using Kotlin and Spring WebFlux.",
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
    slug: "design-system",
    index: "02",
    title: "DESIGN SYSTEM",
    subtitle: "Shared Storybook component library · 438 commits",
    year: "2026",
    role: "Core Contributor",
    tags: ["React", "Storybook", "Vite", "Atomic Design"],
    accent: "#111111",

    summary:
      "A shared React component library used across multiple products on the ABCD platform. The library follows atomic design principles and provides reusable, tested, and documented components through versioned npm packages.",

    metrics: [
      { value: "438", label: "Commits authored" },
      { value: "10+", label: "Consuming apps" },
      { value: "A11y", label: "Accessibility tested" },
    ],

    stack: [
      "React 19",
      "TypeScript",
      "Storybook 10",
      "Vite",
      "Vitest",
      "styled-components",
    ],

    problem:
      "Multiple product teams were creating similar cards, banners, inputs, modals, and other UI elements independently. This resulted in duplicated work and differences in design and behavior across products.",

    responsibilities: [
      "Developed reusable components including lender cards, exclusive offer cards, investment banners, discount banners, FAQ components, and proposer/nominee toolkits.",
      "Added reusable props such as error messages, icons, and validation support across components.",
      "Created and maintained Storybook stories for component documentation and testing.",
      "Worked on components used by 6+ product applications across the platform.",
      "Contributed 438 commits to the shared design-system repository.",
    ],

    architecture:
      "The design system follows atomic design principles, organizing components from atoms to molecules, organisms, and templates. Components are developed using React, TypeScript, and Vite, documented through Storybook, and distributed as versioned npm packages. Vitest, Testing Library, and accessibility checks are used to maintain component quality.",

    challenges: [
      "Designing reusable component APIs that support different product requirements while maintaining consistency.",
      "Managing component changes while maintaining compatibility with multiple consuming applications.",
      "Maintaining accessibility and consistent behavior across reusable components.",
    ],

    impact: [
      "Reduced duplicate UI development across product teams.",
      "Improved consistency across applications through shared components.",
      "Established reusable accessibility and validation patterns across the platform.",
      "Contributed 438 commits to the shared design-system codebase.",
    ],

    learnings: [
      "Learned how to design reusable component APIs for large applications.",
      "Gained experience with Storybook-driven component development and documentation.",
      "Developed a better understanding of versioning and maintaining shared packages used by multiple applications.",
    ],

    code: {
      label: "Reusable typed component API",
      language: "typescript",
      snippet: `type DiscountBannerProps = {
  title: string;
  discountPct: number;
  icon?: React.ReactNode;
  errorMessage?: string;
  onApply?: () => void;
};

export const DiscountBanner = ({
  title,
  discountPct,
  icon,
  ...rest
}: DiscountBannerProps) => (
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
    index: "03",
    title: "ASKAURA AI",
    subtitle: "AI chatbot · real-time responses with Gemini",
    year: "2025",
    role: "Full-Stack Developer",
    tags: ["React", "Node.js", "Gemini API", "NLP"],
    accent: "#FF6A00",

    summary:
      "An AI-powered conversational application that provides real-time responses through a React frontend and Node.js API integrated with Google's Gemini API.",

    metrics: [
      { value: "+50%", label: "User engagement" },
      { value: "-35%", label: "Response latency" },
      { value: "Real-time", label: "AI responses" },
    ],

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Gemini API",
      "Figma",
    ],

    problem:
      "Users needed a faster and more natural way to interact with information instead of relying only on static FAQs and traditional forms.",

    responsibilities: [
      "Developed the conversational interface using React.",
      "Implemented the real-time response experience for AI-generated messages.",
      "Developed a Node.js and Express.js API layer to communicate with the Gemini API.",
      "Designed API flows for handling user queries and AI responses.",
      "Prototyped the conversational experience in Figma before implementation.",
    ],

    architecture:
      "The React frontend communicates with a Node.js and Express.js API layer, which handles requests to the Gemini API. The application processes user prompts and returns AI-generated responses to the conversational interface.",

    challenges: [
      "Reducing response latency while handling AI-generated responses.",
      "Designing a conversational interface that remains clear and responsive during AI processing.",
      "Creating a simple user experience around an AI-powered workflow.",
    ],

    impact: [
      "Improved user engagement by 50%.",
      "Reduced response latency by 35%.",
      "Provided users with real-time AI-generated responses.",
    ],

    learnings: [
      "Learned how to integrate Generative AI APIs into full-stack applications.",
      "Gained experience designing user interfaces around asynchronous AI responses.",
      "Learned that response handling and user experience are equally important in AI applications.",
    ],
  },

  // {
  //   slug: "lead-management-system",
  //   index: "04",
  //   title: "LEAD MANAGEMENT SYSTEM",
  //   subtitle: "Internal application · Lead & employee management",
  //   year: "2025",
  //   role: "Software Developer Intern",
  //   tags: ["C#", "ASP.NET", "AJAX", "SQL Server"],
  //   accent: "#FF8A3D",

  //   summary:
  //     "An internal Lead Management System developed for Arbro Pharmaceutical to manage leads, employee assignments, and administrative workflows through a centralized web application.",

  //   metrics: [
  //     { value: "API", label: "Dynamic data integration" },
  //     { value: "Admin", label: "Work allocation" },
  //     { value: "CRM", label: "Lead management" },
  //   ],

  //   stack: [
  //     "C#",
  //     "ASP.NET",
  //     "AJAX",
  //     "jQuery",
  //     "SQL Server",
  //     "REST APIs",
  //   ],

  //   problem:
  //     "The organisation needed a centralized application to manage leads and distribute work among employees. Several form fields also relied on static values that needed to be replaced with data retrieved from APIs.",

  //   responsibilities: [
  //     "Developed a Lead Management System using C#, ASP.NET, AJAX, and SQL Server.",
  //     "Developed an admin panel to assign and allocate leads and work to employees across the organisation.",
  //     "Integrated APIs with dropdowns and form controls to replace static values with dynamically retrieved data.",
  //     "Implemented dynamic form fields to display data based on API responses.",
  //     "Developed backend logic and database operations for lead and employee management.",
  //     "Worked on a real-time internal chat system using ASP.NET, C#, and SignalR.",
  //   ],

  //   architecture:
  //     "The application uses an ASP.NET backend with C# for application logic and SQL Server for data storage. AJAX and API integrations are used to retrieve data dynamically and populate frontend controls such as dropdowns. The admin panel provides centralized functionality for managing leads and assigning work to employees.",

  //   challenges: [
  //     "Replacing static dropdown values with dynamic API-driven data.",
  //     "Managing employee assignments through a simple and centralized admin workflow.",
  //     "Keeping frontend interactions responsive while communicating with backend APIs.",
  //     "Maintaining reliable data flow between the application, APIs, and SQL Server.",
  //   ],

  //   impact: [
  //     "Centralized lead management and employee work allocation.",
  //     "Reduced dependency on static application data through API-driven dropdowns.",
  //     "Improved administrative control over employee task distribution.",
  //     "Improved internal communication through the real-time chat system.",
  //   ],

  //   learnings: [
  //     "Gained practical experience with C# and ASP.NET application development.",
  //     "Learned how to integrate APIs with existing enterprise web applications.",
  //     "Developed experience working with SQL Server and backend data operations.",
  //     "Learned how internal business workflows can be converted into practical software solutions.",
  //   ],
  // },

  {
    slug: "real-estate-application",
    index: "03",
    title: "REAL ESTATE APPLICATION",
    subtitle: "Full-stack property platform · Real-time buyer-seller communication",
    year: "2024",
    role: "Full-Stack Developer",
    tags: ["React", "Node.js", "MongoDB", "WebSockets"],
    accent: "#FF6A00",

    summary:
      "A full-stack real estate platform that allows users to list, search, and filter properties, with real-time communication between buyers and sellers.",

    metrics: [
      { value: "40%", label: "Improved search efficiency" },
      { value: "15d", label: "Faster deal closure" },
      { value: "30%", label: "Faster data retrieval" },
    ],

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "WebSockets",
      "HTML",
      "CSS",
    ],

    problem:
      "Traditional property platforms can make it difficult for users to quickly discover relevant listings and communicate with sellers. The project focused on combining property discovery with real-time communication in one platform.",

    responsibilities: [
      "Developed a full-stack real estate platform for property listing, search, and filtering.",
      "Implemented property search and filtering functionality to help users find relevant listings more efficiently.",
      "Built a real-time buyer-seller chat system using WebSockets for instant communication.",
      "Integrated MongoDB with Prisma ORM for structured data access and persistence.",
      "Developed REST APIs using Node.js and Express.js for property and user-related operations.",
    ],

    architecture:
      "The application uses React.js for the frontend and Node.js with Express.js for backend APIs. MongoDB handles persistent data storage with Prisma ORM providing database access. WebSockets enable real-time communication between buyers and sellers.",

    challenges: [
      "Designing efficient property search and filtering functionality.",
      "Maintaining real-time communication between users.",
      "Managing property and user data through a consistent backend API.",
    ],

    impact: [
      "Improved property search efficiency by 40%.",
      "Enabled real-time communication between buyers and sellers.",
      "Reduced deal closure time by up to 15 days.",
      "Improved data retrieval performance by 30% using MongoDB and Prisma.",
    ],

    learnings: [
      "Gained practical experience developing a complete full-stack application.",
      "Learned how to implement real-time communication using WebSockets.",
      "Developed experience with MongoDB, Prisma ORM, and REST API design.",
    ],
  },

  {
    slug: "fake-news-detection",
    index: "04",
    title: "FAKE NEWS DETECTION",
    subtitle: "ML, NLP & blockchain · Decentralized news verification",
    year: "2025",
    role: "Full-Stack & ML Developer",
    tags: ["Python", "NLP", "Machine Learning", "Blockchain"],
    accent: "#FF6A00",

    summary:
      "A decentralized fake news verification system combining machine learning, NLP, and blockchain to assess news credibility and provide community-driven verification through signed auditor votes.",

    metrics: [
      { value: "89.9%", label: "Image accuracy" },
      { value: "82.2%", label: "Text accuracy" },
      { value: "3-Layer", label: "Blockchain network" },
    ],

    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "RoBERTa",
      "ResNet-50",
      "NLP",
      "Machine Learning",
      "Blockchain",
      "ECDSA",
      "JWT",
    ],

    problem:
      "The rapid spread of misinformation requires verification systems that are transparent and resistant to manipulation. The project combines automated ML-based credibility assessment with decentralized human verification instead of relying on a single centralized authority.",

    responsibilities: [
      "Developed a fake news detection system combining machine learning, NLP, and blockchain-based verification.",
      "Implemented a RoBERTa-based text classification pipeline for identifying potentially misleading news content.",
      "Implemented ResNet-50 based image classification and frame-based video analysis as separate processing pipelines.",
      "Developed a three-layer blockchain network consisting of public readers, a verification network, and private auditor nodes.",
      "Implemented cryptographic user identities using ECDSA public-private key pairs and digitally signed transactions.",
      "Implemented auditor voting and majority-based consensus for validating or rejecting submitted news.",
      "Developed reputation mechanisms for users and auditors based on the accuracy of their submissions and votes.",
      "Built the application interface using Streamlit with a FastAPI backend.",
    ],

    architecture:
      "The system combines three ML pipelines for text, images, and videos. Text is classified using RoBERTa, while ResNet-50 is used for image classification and extracted video frames. The resulting scores are passed to a three-layer blockchain network. Uploaded content becomes a signed transaction, auditors review the content and ML score, and majority voting determines whether the transaction is validated and added to the blockchain.",

    challenges: [
      "Combining different ML pipelines for text, images, and video analysis.",
      "Designing a verification workflow that combines automated ML scoring with human auditor decisions.",
      "Implementing secure digital signatures and identity verification for users and auditors.",
      "Maintaining blockchain transaction integrity through hashing, signatures, and consensus.",
    ],

    impact: [
      "Achieved 89.97% accuracy for image classification.",
      "Achieved 82.2% accuracy for text classification.",
      "Implemented a decentralized verification workflow using auditor voting and majority consensus.",
      "Provided tamper-resistant verification records through blockchain-based transaction storage.",
    ],

    learnings: [
      "Gained practical experience with NLP and machine learning model evaluation.",
      "Learned how blockchain can be combined with ML-based verification systems.",
      "Developed an understanding of cryptographic signatures, consensus, and decentralized system design.",
      "Learned how to connect ML inference, backend APIs, and an interactive application interface into one system.",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}