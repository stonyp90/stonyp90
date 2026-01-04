export const personalInfo = {
  name: 'Anthony Paquet',
  title: 'Visionary Engineering Leader',
  subtitle: 'Head of Engineering at CREE8',
  location: 'Canada, Quebec',
  phone: '418-564-6162',
  email: 'Anthonypaquet1508@gmail.com',
  tagline: 'Operating where data meets context, accelerating innovation and business impact through AI-powered transformation.',
  summary: `Visionary Engineering Leader operating where data meets context, accelerating innovation and business impact. Passionate about AI-powered transformation, I design and scale secure, cost-optimized, and highly available systems that drive outcomes. Skilled in taking products from 0→1 to enterprise scale, I bring strong FinOps expertise to help organizations cut costs and maximize value. With a DevSecOps mindset, I enable teams to iterate faster, more securely, and with greater resilience. Customer-obsessed and outcome-driven, I have a proven track record of delivering scalable, resilient, and business-aligned cloud solutions that create lasting value.`,
  philosophy: 'Knowledge is the ultimate wealth — the more you share, the more it grows. I believe in continuous learning and empowering others through expertise.',
}

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/anthony-paquet-94a31085',
  github: 'https://github.com/stonyp90',
  email: 'mailto:Anthonypaquet1508@gmail.com',
}

export const urslyProject = {
  name: 'Ursly',
  tagline: 'AI-Powered Cloud File System & Agent Platform',
  description: 'A comprehensive AI ecosystem featuring an intelligent cloud-driven file system and an open-source AI agent orchestration platform. The Ursly Agent enables building, deploying, and managing AI agents with enterprise-grade architecture.',
  techStack: ['NestJS', 'React', 'TypeScript', 'Tauri', 'MongoDB', 'Keycloak', 'gRPC', 'WebSockets', 'Ollama', 'Rust'],
  agentGithubUrl: 'https://github.com/stonyp90/Usrly-Agent',
  websiteUrl: 'https://www.ursly.io',
  hasPrivateVFS: true,
  privateNote: 'The AI Cloud-Driven File System is a proprietary solution (not open source). Only the Ursly Agent is open source.',
  highlights: [
    'Open-source AI Agent Orchestration Platform',
    'Multi-model LLM support (Ollama, OpenAI-compatible APIs)',
    'Enterprise-grade authentication with Keycloak OIDC',
    'Clean Architecture & Domain-Driven Design (DDD)',
    'Real-time agent orchestration via WebSockets & gRPC',
    'Cross-platform desktop app with Tauri 2.0 & Rust',
    'AI Cloud-Driven VFS (Private/Proprietary)',
  ],
}

export const experiences = [
  {
    company: 'CREE8',
    position: 'Head of Engineering / Founding Engineer',
    location: 'California, United States',
    period: '12/2023 - Present',
    description: 'CREE8 streamlines cloud adoption, easing creator workflows through centralization, efficiency, and automation. It empowers creative teams to fully leverage cloud-native capabilities by simplifying complex processes.',
    achievements: [
      'Built and led a team of 10 senior SREs, DevOps, Full-Stack engineers to deploy enterprise-grade cloud solutions',
      'Achieved SOC 2 Type II and TPN Gold certifications within 6 months by implementing AI-driven compliance automation workflows',
      'Optimized multi-cloud operations, cutting costs by 60% across AWS, GCP, and Azure through FinOps practices and architecture improvements',
      'Pioneered Camera-to-Cloud workflows, enhancing content ingestion and collaboration among 50+ distributed creative teams',
      'Accelerated iteration speed by 40%, strengthened system security, and boosted resilience by adopting AI and DevSecOps practices',
    ],
    tags: ['AWS', 'GCP', 'Azure', 'FinOps', 'DevSecOps', 'SOC 2', 'AI Automation', 'Camera-to-Cloud'],
  },
  {
    company: 'Videotron',
    position: 'Senior Cloud DevOps Engineer',
    location: 'Québec, Canada',
    period: '08/2023 - 02/2024',
    description: 'Led DevOps for websites and streaming platforms.',
    achievements: [
      'Deployed monitoring and analytics tools for streaming platforms',
      'Implemented scalable infrastructure for high-traffic websites',
      'Enhanced security posture and system resilience',
    ],
    tags: ['DevOps', 'Streaming', 'AWS', 'Monitoring', 'Security'],
  },
  {
    company: 'Banque Fairstone',
    position: 'Senior Cloud Engineer',
    location: 'Montréal, Canada',
    period: '09/2022 - 08/2023',
    description: 'Led multi-region, multi-account disaster recovery on AWS.',
    achievements: [
      'Designed and implemented multi-region disaster recovery architecture',
      'Integrated comprehensive monitoring tools for system resilience',
      'Ensured compliance with financial industry regulations',
    ],
    tags: ['AWS', 'Disaster Recovery', 'Multi-Region', 'FinTech', 'Compliance'],
  },
  {
    company: 'SSENSE',
    position: 'Senior Cloud Engineer',
    location: 'Montréal, Canada',
    period: '05/2022 - 09/2022',
    description: 'Implemented a Loyalty system via Talon One integration.',
    achievements: [
      'Synchronized historical and real-time customer data',
      'Built reliable data exchange between internal systems',
      'Optimized for high-volume e-commerce operations',
    ],
    tags: ['Cloud Engineering', 'Integration', 'E-commerce', 'Real-time Data'],
  },
  {
    company: 'Dormakaba Americas',
    position: 'Senior Cloud Engineer',
    location: 'Montréal, Canada',
    period: '10/2021 - 05/2022',
    description: 'Led design of a public API enabling third-party integration.',
    achievements: [
      'Built an abstraction layer simplifying smart lock configuration',
      'Enhanced client usability and developer experience',
      'Enabled scalable third-party integrations',
    ],
    tags: ['API Design', 'IoT', 'Smart Access', 'Cloud Architecture'],
  },
  {
    company: 'Vanderlande',
    position: 'Cloud Software Developer',
    location: 'Québec, Canada',
    period: '03/2018 - 10/2021',
    description: 'Developed software solutions for airport security and logistics.',
    achievements: [
      'Developed PAX Divesting Assistant for airport checkpoint efficiency',
      'Created decentralized software optimizing luggage throughput',
      'Deployed globally, enhancing passenger experience',
    ],
    tags: ['Cloud Software', 'Airport Systems', 'Automation', 'Global Deployment'],
  },
  {
    company: 'PetalMD',
    position: 'Software Developer',
    location: 'Québec, Canada',
    period: '04/2017 - 03/2018',
    description: 'Developed a secure cloud platform for healthcare.',
    achievements: [
      'Built real-time patient care orchestration system',
      'Implemented secure, HIPAA-compliant architecture',
      'Improved healthcare operational efficiency',
    ],
    tags: ['Healthcare', 'Cloud Platform', 'Security', 'Real-time Systems'],
  },
  {
    company: 'CGI - National Defense',
    position: 'Software Developer and DevOps',
    location: 'Québec, Canada',
    period: '12/2014 - 04/2017',
    description: 'Worked on military planning and decision-making systems.',
    achievements: [
      'Developed mission-critical defense software',
      'Implemented DevOps practices for secure deployments',
    ],
    tags: ['Defense', 'DevOps', 'Mission-Critical Systems'],
  },
  {
    company: 'Logical',
    position: 'Co-Founder and CTO',
    location: 'Québec, Canada',
    period: '09/2011 - 01/2014',
    description: 'Software company designing and developing custom web applications.',
    achievements: [
      'Led technical strategy and development team',
      'Delivered custom web applications for diverse clients',
    ],
    tags: ['Startup', 'CTO', 'Web Development', 'Leadership'],
  },
]

export const skills = {
  cloud: [
    { name: 'AWS', level: 95 },
    { name: 'GCP', level: 85 },
    { name: 'Azure', level: 80 },
    { name: 'Vercel', level: 35 },
    { name: 'Oracle Cloud', level: 30 },
  ],
  languages: [
    { name: 'Node.js', level: 95 },
    { name: 'TypeScript', level: 95 },
    { name: 'Python', level: 85 },
    { name: 'Go', level: 80 },
    { name: 'Rust', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'Bash/Shell', level: 90 },
  ],
  devops: [
    { name: 'Kubernetes', level: 90 },
    { name: 'Docker', level: 95 },
    { name: 'CI/CD', level: 95 },
    { name: 'GitHub Actions', level: 90 },
    { name: 'Terraform', level: 90 },
    { name: 'Git', level: 95 },
  ],
  databases: [
    { name: 'SQL', level: 90 },
    { name: 'NoSQL', level: 90 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'DynamoDB', level: 85 },
    { name: 'Redis', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'Elasticsearch', level: 85 },
  ],
  dataAnalytics: [
    { name: 'BigQuery', level: 85 },
    { name: 'Looker', level: 80 },
    { name: 'Datadog', level: 90 },
    { name: 'CloudWatch', level: 90 },
    { name: 'Grafana', level: 85 },
  ],
  frameworks: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'Angular', level: 75 },
    { name: 'Express', level: 90 },
    { name: 'NestJS', level: 80 },
  ],
  specialties: [
    { name: 'AI/ML', level: 85 },
    { name: 'LLM Integration', level: 90 },
    { name: 'FinOps', level: 95 },
    { name: 'DevSecOps', level: 90 },
    { name: 'Serverless', level: 90 },
    { name: 'Big Data', level: 80 },
  ],
  methodologies: [
    { name: 'Clean Architecture', level: 95 },
    { name: 'Domain-Driven Design (DDD)', level: 90 },
    { name: 'Event-Driven Systems', level: 95 },
    { name: 'Behavior-Driven Development (BDD)', level: 85 },
    { name: 'Test-Driven Development (TDD)', level: 90 },
    { name: 'Microservices', level: 95 },
    { name: 'CQRS/Event Sourcing', level: 85 },
  ],
  devsecops: [
    { name: 'Security Automation', level: 95 },
    { name: 'SAST/DAST', level: 90 },
    { name: 'Secret Management', level: 95 },
    { name: 'Compliance Automation', level: 95 },
    { name: 'SOC 2 / TPN Gold', level: 95 },
    { name: 'Vulnerability Scanning', level: 90 },
    { name: 'Zero Trust Architecture', level: 85 },
    { name: 'IAM & RBAC', level: 90 },
  ],
}

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    icon: '☁️',
    credlyUrl: 'https://www.credly.com/badges/34b7839a-dc9d-4183-95d7-0cc6b9d596d7/linked_in_profile',
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services (AWS)',
    icon: '⚡',
    credlyUrl: 'https://www.credly.com/badges/2fc2506e-0e1c-4019-96c4-4f1fb09f5583/linked_in_profile',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    icon: '🌐',
    credlyUrl: 'https://www.credly.com/badges/ba61181f-893c-4e91-be07-790f167f6835',
  },
]

export const education = {
  degree: 'Computer Science',
  institution: 'Cégep Garneau',
  period: '01/2008 - 01/2011',
  location: 'Québec, Canada',
}

export const languages = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Fluent' },
]

export const additionalExpertise = [
  'gRPC & Protocol Buffers',
  'GraphQL',
  'REST API Design',
  'WebSockets',
  'Message Queues (RabbitMQ, SQS, Kafka)',
  'Elasticsearch',
  'Datadog & Monitoring',
  'Security Best Practices',
  'Performance Optimization',
  'System Design',
  'Technical Leadership',
  'Agile & Scrum',
  'Code Review & Mentorship',
  'Technical Documentation',
]
