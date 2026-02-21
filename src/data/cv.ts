export const contact = {
  name: 'Ilijan Militar',
  title: 'Front End Developer',
  email: 'ilijan.militar@gmail.com',
  phone: '066/510-5410',
  location: 'Belgrade, Serbia',
  github: 'https://github.com/Ilijan91',
} as const

export const about = `Over the past several years, I have worked extensively with Angular, React and TypeScript, creating responsive and dynamic user interfaces for a variety of web applications. I am well-versed in the latest web development technologies and tools, including HTML5, CSS3, and JavaScript, and I have a deep understanding of front-end architecture and design patterns.`

export interface ExperienceItem {
  company: string
  role: string
  dates: string
  location: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'FXGT',
    role: 'Frontend Developer',
    dates: '07/2025 – Present',
    location: 'Remote',
    bullets: [
      'Developing and maintaining internal CRM platform using Angular.',
      'Building and enhancing TradeManager platform using React.js with modern functional components and hooks.',
      'Implementing real-time trading features using WebSocket integrations.',
      'Designing scalable component architecture for high-frequency financial data.',
    ],
  },
  {
    company: 'Nenergy',
    role: 'Frontend Developer',
    dates: '06/2024 – Present',
    location: 'Remote / Part Time',
    bullets: [
      'Developed a blog management application using Angular (frontend) and .NET C# (backend).',
      'Designed and implemented full-stack features including content creation, editing workflows, and API integrations.',
      'Built scalable REST APIs using .NET for content management and publishing.',
      'Contributed to the development of NenFlow platform as a frontend developer.',
      'Implemented reusable Angular components and improved UI consistency across the application.',
      'Collaborated with cross-functional teams in an international environment.',
    ],
  },
  {
    company: 'Dassom Digital',
    role: 'Front End Developer',
    dates: '07/2024 – 07/2025',
    location: 'Remote',
    bullets: [
      'Contributed to Finance Automation Portal for eToro using Angular and React.',
      'Developed Client Money Reconciliation (CMR) modules ensuring compliance with financial regulations.',
      'Built PSP (Payment Service Provider) systems transforming raw financial data through structured data pipelines.',
      'Designed modular dynamic reporting systems for financial analytics and audit tracking.',
      'Improved frontend maintainability through reusable components and modular architecture.',
    ],
  },
  {
    company: 'Felicons DOO',
    role: 'Front End Developer',
    dates: '12/2022 – 07/2024',
    location: 'Belgrade, Serbia',
    bullets: [
      'Developed Risk Exposure Monitoring software with real-time financial data visualization.',
      'Implemented WebSocket-based live data streaming for trading dashboards.',
      'Built interactive filtering systems for risk analysis tools.',
      'Contributed to FXGT trading platform interfaces supporting forex and crypto markets.',
      'Integrated REST APIs and WebSocket streams for live order execution and pricing updates.',
      'Optimized UI responsiveness and application performance for time-sensitive trading environments.',
    ],
  },
  {
    company: 'Things Solver',
    role: 'Front End Developer',
    dates: '09/2020 – 12/2022',
    location: 'Belgrade, Serbia',
    bullets: [
      'Built AI-driven customer engagement platforms and marketing automation tools.',
      'Developed Campaigning Studio, Segmentation Studio, and Customer Studio interfaces.',
      'Created reusable component libraries using Angular and React.',
      'Improved frontend efficiency through structured architecture and shared UI modules.',
    ],
  },
  {
    company: 'Quantox Technology',
    role: 'Internship / Full Stack Developer',
    dates: '02/2020 – 08/2020',
    location: 'Belgrade, Serbia',
    bullets: [
      'Developed frontend features using Angular.',
      'Built backend services with Laravel.',
      'Applied Git workflows and software development best practices.',
    ],
  },
]

export const skillsByCategory: Record<string, string[]> = {
  'Frontend': ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Ionic', 'RxJs', 'Redux'],
  'UI / Libraries': ['Material UI', 'Angular Material', 'PrimeNG', 'Ng Prime', 'Bootstrap'],
  'Tools & DevOps': ['GIT', 'Docker', 'Webpack', 'NPM', 'WebSocket'],
  'Testing': ['Jasmine', 'Karma', 'Unit Test'],
  'Other': ['Agile', 'OOP', 'Redis', 'MySQL', 'C#'],
}

export const education = {
  degree: 'Software Developer',
  school: 'IT Academy',
  dates: '2016 – 2018',
  technologies: 'HTML/CSS, Bootstrap, JavaScript, TypeScript, PHP, MySQL',
} as const

export const languages = ['Serbian', 'English']

export const interests = ['ASP.NET', 'C#', 'Microservices', 'PHP']
