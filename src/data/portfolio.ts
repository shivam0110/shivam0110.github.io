export const profile = {
  name: 'Shivam Malpani',
  email: 'mr.shivammalpani@gmail.com',
  phone: '+91-9979173770',
  github: 'https://github.com/shivam0110',
  linkedin: 'https://www.linkedin.com/in/shivammalpani/',
  description: 'Software Engineer II at Karbon. I build AI products and developer tools that make complex work simpler.',
};

export const projects = [
  {
    slug: 'stackhub', number: '01', title: 'StackHub', category: 'Developer tools · Open source',
    description: 'Small pull requests. A clearer review. Git stacks that live right in your editor.',
    tags: ['TypeScript', 'VS Code', 'Git'],
  },
  {
    slug: 'invoice-processing', number: '02', title: 'AI invoice processing', category: 'Karbon · Product engineering',
    description: 'Making complex accounting workflows easier to process, review, and trust.',
    tags: ['Full stack', 'AI workflows', 'Async processing'],
  },
  {
    slug: 'shadow-pm', number: '03', title: 'Shadow PM', category: 'Agentic AI · Project overview',
    description: 'Connecting enterprise context, specialist agents, and prototype generation.',
    tags: ['Multi-agent systems', 'Temporal', 'Prototyping'],
  },
];

export const experience = [
  { company: 'Karbon', role: 'Software Engineer II', period: 'Now', text: 'Building AI-powered accounting products and full-stack systems. Working with product and engineering to bring complex features from an idea through to delivery.' },
  { company: 'Salesmonk', role: 'Engineering', period: 'Previously', text: 'Working across frontend and backend in a fast-moving startup. Solving technical problems alongside the team and turning evolving product needs into practical features.' },
  { company: 'Kusho.ai', role: 'Founding engineer · First hire', period: 'Previously', text: 'Joined straight out of college and helped build an AI-powered API testing platform. Took ownership across engineering and the wider needs of an early-stage startup.' },
];

type Testimonial = {
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
