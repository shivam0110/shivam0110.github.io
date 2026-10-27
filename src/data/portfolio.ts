export const profile = {
  name: 'Shivam Malpani',
  email: 'mr.shivammalpani@gmail.com',
  phone: '+91-9979173770',
  github: 'https://github.com/shivam0110',
  linkedin: 'https://www.linkedin.com/in/shivammalpani/',
  description: 'Full-stack & AI engineer working with TypeScript, React, Python, Node.js, and PostgreSQL. Software Engineer II at Karbon and former founding engineer.',
};

export const coreStack = ['TypeScript', 'React', 'Python', 'Node.js', 'PostgreSQL'];

export const skills = [
  { area: 'Languages', description: 'The foundations I build on.', tools: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { area: 'Frontend', description: 'Responsive interfaces, forms, and data-heavy workflows.', tools: ['React', 'Next.js', 'Tailwind CSS', 'TanStack Query', 'React Hook Form', 'Zod'] },
  { area: 'Backend & APIs', description: 'Services, integrations, and developer-facing APIs.', tools: ['Node.js', 'NestJS', 'FastAPI', 'Django', 'Spring Boot', 'REST', 'GraphQL', 'Webhooks'] },
  { area: 'AI & agents', description: 'Multi-agent workflows, evaluation, and LLM cost and latency optimization.', tools: ['LLM APIs', 'LangChain', 'LangGraph', 'RAG', 'MCP', 'Tool calling', 'Structured outputs', 'LLM evaluations'] },
  { area: 'Data & search', description: 'Operational data, semantic retrieval, and knowledge pipelines.', tools: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch', 'pgvector', 'Embeddings', 'Vector search'] },
  { area: 'Systems & architecture', description: 'From system design to reliable asynchronous processing.', tools: ['System design', 'Event-driven architecture', 'Temporal', 'Amazon SQS', 'Background jobs', 'Caching'] },
  { area: 'Cloud & delivery', description: 'Deploying services and automating infrastructure and releases.', tools: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD'] },
  { area: 'Security & observability', description: 'Access control, service monitoring, and AI execution traces.', tools: ['OAuth', 'JWT', 'RBAC', 'OpenTelemetry', 'Sentry', 'LangSmith'] },
  { area: 'Testing & developer tools', description: 'Automated checks and tools that improve the development workflow.', tools: ['Jest', 'Playwright', 'API testing', 'Git', 'VS Code API'] },
];

export const projects = [
  {
    slug: 'stackhub', number: '01', title: 'StackHub', category: 'Developer tools · Open source',
    description: 'Small pull requests. A clearer review. Git stacks that live right in your editor.',
    tags: ['TypeScript', 'VS Code API', 'Git'],
  },
  {
    slug: 'invoice-processing', number: '02', title: 'AI invoice processing', category: 'Karbon · Product engineering',
    description: 'Making complex accounting workflows easier to process, review, and trust.',
    tags: ['Amazon SQS', 'Streaming ingestion', 'Virtualized UI'],
  },
  {
    slug: 'shadow-pm', number: '03', title: 'Shadow PM', category: 'Agentic AI · Product engineering',
    description: 'Connecting enterprise context, specialist agents, and prototype generation.',
    tags: ['Python', 'FastAPI', 'Temporal', 'LangSmith'],
  },
];

export const experience = [
  {
    slug: 'karbon', company: 'Karbon', role: 'Software Engineer II', period: 'Now', dates: 'Dec 2025 — Present',
    text: 'Building AI-powered accounting products and full-stack systems. Working with product and engineering to bring complex features from an idea through to delivery.',
    tags: ['Python', 'FastAPI', 'Amazon SQS', 'Temporal', 'LangSmith'],
    projects: ['invoice-processing', 'shadow-pm'],
  },
  {
    slug: 'salesmonk', company: 'Salesmonk', role: 'Software Engineer', period: 'Previously', dates: 'Jan 2025 — Nov 2025',
    text: 'Working across frontend and backend in a fast-moving startup. Solving technical problems alongside the team and turning evolving product needs into practical features.',
    tags: ['LLM APIs', 'RAG', 'Cloudflare R2', 'AutoRAG', 'CircleBack'],
    projects: [],
  },
  {
    slug: 'kusho', company: 'Kusho.ai', role: 'Founding engineer · First hire', period: 'Previously', dates: 'Aug 2023 — Jan 2025',
    text: 'Joined straight out of college and helped build an AI-powered API testing platform. Took ownership across engineering and the wider needs of an early-stage startup.',
    tags: ['JavaScript', 'Redis', 'RQ', 'REST', 'GraphQL', 'OpenAPI', 'LLM APIs'],
    projects: [],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  approved: boolean;
};

// Only approved quotes are included in production HTML.
export const testimonials: Testimonial[] = [
  {
    name: 'Abhishek Saikia', role: 'Co-founder', company: 'Kusho.ai', approved: true,
    quote: 'Shivam joined us as our first hire, straight out of college, and quickly became someone we could count on to get things done. He took ownership beyond engineering, stepping into whatever the startup needed and following through.',
  },
  {
    name: 'Rahul Gupta', role: 'Colleague', company: 'Salesmonk', approved: true,
    quote: 'Shivam combines strong technical skills with a practical approach to problem-solving. He breaks down difficult problems, asks thoughtful questions, and works through the details to arrive at simple, reliable solutions.',
  },
  {
    name: 'Harbhajan', role: 'Product Manager II', company: 'Karbon', approved: true,
    quote: 'Shivam helps turn complex requirements into well-built features, while guiding teammates through the difficult parts. He questions assumptions, improves on the original brief, and follows through on delivery without losing sight of quality or timelines.',
  },
];
