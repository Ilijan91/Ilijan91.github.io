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
    company: 'Dassom Digital',
    role: 'Front End Developer',
    dates: '07/2024 – Present',
    location: 'Remote',
    bullets: [
      'Developed and maintained highly responsive user interfaces using Angular (v18) and React (v15).',
      'PSP (Payment Service Provider): Transformed raw payment data through a hierarchical framework from Bronze to Silver to Gold data levels; streamlined payment processing and compliance.',
      'Client Money Reconciliation (CMR): Developed features for managing client money reconciliation, regulatory compliance, and reconciliation between client accounts and operational ledgers.',
      'Crypto Wallet: Designed an intuitive, secure interface for accountants to manage cryptocurrency transactions, balances, and audit trails.',
      'PSP Modular Dynamic Report Mapping (FAP): Created a dynamic reporting module for customizable financial analytics; mapped data from multiple payment sources into unified reports.',
    ],
  },
  {
    company: 'Felicons DOO',
    role: 'Front End Developer',
    dates: '12/2022 – 07/2024',
    location: 'Belgrade, Serbia',
    bullets: [
      'Developed responsive UIs with Angular (v13, v15, v17), React (v15, v16), and Ionic.',
      'Risk Tool Exposure Monitoring: Real-time risk exposure system; interactive dashboards with dynamic filtering; WebSockets for live data; compliance and data encryption.',
      'FXGT Trading Platform: Responsive trading interfaces for forex/crypto; real-time charts (Chart.js, D3.js); REST and WebSocket APIs; optimized performance for time-sensitive transactions.',
    ],
  },
  {
    company: 'Things Solver',
    role: 'Front End Developer',
    dates: '09/2020 – 12/2022',
    location: 'Belgrade, Serbia',
    bullets: [
      'Designed and implemented AI-driven product services and customer engagement platforms.',
      'Campaigning Studio (Viber, email), Segmentation Studio, Customer Studio for personalized marketing and data-driven decisions.',
      'Built modular, reusable UI components with Angular and React, improving team efficiency by ~30%.',
    ],
  },
  {
    company: 'Quantox Technology',
    role: 'Internship / Full Stack Developer',
    dates: '02/2020 – 08/2020',
    location: 'Belgrade, Serbia',
    bullets: [
      'Full-stack development with Laravel (backend) and Angular (frontend).',
      'Built and tested web application features; GIT and industry best practices.',
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
