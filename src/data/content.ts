// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
// Edit values here; components read from this file. No HTML digging required.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Mukundan Ramesh',
  initials: 'MR',
  title: 'Mukundan Ramesh — Quality Engineer & AI/ML Learner',
  role: 'Quality Engineer · AI/ML Learner',
  location: 'Chennai, India',
  description:
    'Quality Engineer with telecom (Plintron) and enterprise product (Appian) ' +
    'experience, now transitioning into AI/ML. Testing strategy, automation, ' +
    'accessibility, performance engineering, and data-driven projects.',
  // Used for Open Graph / canonical. Keep in sync with astro.config.mjs.
  url: 'https://mukundnaramesh2605.github.io/mukundan_portfolio',
};

export const social = {
  email: 'mukunramesh96@gmail.com', // TODO: confirm — account email is mukund1996ramesh@gmail.com
  linkedin: 'https://www.linkedin.com/in/mukundanramesh',
  github: 'https://github.com/mukundnaramesh2605',
  // Put resume.pdf in /public and set to 'resume.pdf', or leave empty to hide the button.
  resume: '',
};

export const hero = {
  tag: 'Quality Engineer · AI/ML Learner',
  headline: ['Designing quality-driven digital experiences,', 'now evolving', 'into AI/ML.'],
  sub:
    'I bring hands-on experience from telecom systems at Plintron and enterprise ' +
    'product quality at Appian — combining testing strategy, automation, ' +
    'accessibility, performance engineering, and AI/ML learning.',
  stats: [
    { val: '2+', label: 'Years at Appian' },
    { val: 'Telecom', label: 'Domain at Plintron' },
    { val: 'AI/ML', label: 'Current Focus' },
  ],
};

export const about = {
  paragraphs: [
    'I started my professional journey in the telecom domain at <strong>Plintron</strong>, where I built a strong foundation in testing, debugging, and understanding real-world platform behavior.',
    'Later at <strong>Appian</strong>, I worked on enterprise-grade product quality, automation, accessibility, performance testing, and release readiness — owning end-to-end quality for complex, distributed enterprise software.',
    'I am now transitioning into <span class="accent"><strong>AI/ML</strong></span> with a focus on building practical, data-driven projects that bridge quality engineering principles with intelligent automation.',
  ],
};

export const experience = [
  {
    company: 'Appian',
    role: 'Quality Engineer 2',
    accent: '#1A7FE6',
    tag: 'Enterprise Product Quality',
    quote: 'Led quality ownership for enterprise-grade features across multiple release cycles.',
    chips: [
      'Enterprise product quality',
      'Python · Selenium · Pytest',
      'Accessibility testing',
      'Performance testing (Locust)',
      'Release quality ownership',
      'Jira dashboards & metrics',
      'CI/CD quality reporting',
      'AI-assisted testing workflows',
    ],
  },
  {
    company: 'Plintron',
    role: 'QA Engineer',
    accent: 'var(--accent)',
    tag: 'Telecom Domain',
    quote: 'Built deep domain expertise in MVNO telecom platform testing and system behavior.',
    chips: [
      'Telecom domain testing',
      'Functional testing',
      'Defect analysis',
      'System understanding',
      'Regression validation',
      'Cross-team collaboration',
    ],
  },
];

export const skills = [
  {
    icon: '✦',
    title: 'Quality Engineering',
    tags: ['Test Strategy', 'Functional Testing', 'Regression Testing', 'Defect Analysis', 'Release Readiness', 'Test Planning'],
  },
  {
    icon: '⟳',
    title: 'Automation',
    tags: ['Python', 'Selenium', 'Pytest', 'CI/CD Integration', 'Framework Design', 'AI-assisted Testing'],
  },
  {
    icon: '◈',
    title: 'Performance Testing',
    tags: ['Locust', 'Load Testing', 'Scalability Analysis', 'Performance Reporting', 'Bottleneck Identification'],
  },
  {
    icon: '◎',
    title: 'Accessibility',
    tags: ['WCAG Compliance', 'Screen Reader Testing', 'Keyboard Navigation', 'Color Contrast', 'Shift-Left Accessibility'],
  },
  {
    icon: '◆',
    title: 'AI/ML Learning',
    tags: ['Python (ML)', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Analysis', 'NLP Basics', 'Computer Vision'],
  },
  {
    icon: '⊞',
    title: 'Tools & Platforms',
    tags: ['Jira', 'Confluence', 'Git', 'GitHub', 'Appian Platform', 'Telecom Systems'],
  },
];

export const projects = [
  {
    num: '01',
    status: 'in-progress', // 'in-progress' | 'planned'
    title: 'Machine Learning Project',
    desc: 'A supervised learning project exploring classification or regression techniques on real-world datasets. Details coming soon.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    github: '',
    demo: '',
  },
  {
    num: '02',
    status: 'planned',
    title: 'Data Analysis Project',
    desc: 'End-to-end data analysis pipeline covering EDA, visualization, and actionable insights. Details coming soon.',
    tech: ['Python', 'Pandas', 'Seaborn', 'Jupyter'],
    github: '',
    demo: '',
  },
  {
    num: '03',
    status: 'planned',
    title: 'NLP Project',
    desc: 'Natural language processing application — sentiment analysis, text classification, or topic modeling. Details coming soon.',
    tech: ['Python', 'NLTK', 'spaCy', 'Transformers'],
    github: '',
    demo: '',
  },
  {
    num: '04',
    status: 'planned',
    title: 'Computer Vision Project',
    desc: 'Image recognition or object detection project using modern CV techniques. Details coming soon.',
    tech: ['Python', 'OpenCV', 'PyTorch', 'Pillow'],
    github: '',
    demo: '',
  },
];

export const impact = [
  {
    icon: '⟲',
    metric: 'Efficiency↑',
    title: 'Reduced Regression Effort',
    desc: 'Streamlined regression test cycles through smart test selection and automation, reducing manual effort and shortening release timelines.',
  },
  {
    icon: '◈',
    metric: 'Coverage↑',
    title: 'Automation Coverage',
    desc: 'Expanded automation coverage using Python, Selenium, and Pytest — converting manual test cases into reliable, maintainable automated suites.',
  },
  {
    icon: '◎',
    metric: 'WCAG Compliant',
    title: 'Accessibility Shift-Left',
    desc: 'Introduced accessibility testing early in the development cycle, ensuring WCAG compliance and inclusive product experiences before release.',
  },
  {
    icon: '◆',
    metric: 'Load Insights',
    title: 'Performance Testing',
    desc: 'Designed and executed performance test scenarios using Locust, delivering actionable reports on system behavior under load.',
  },
  {
    icon: '⊞',
    metric: 'Visibility↑',
    title: 'Quality Dashboards',
    desc: 'Built Jira dashboards and quality metrics reports that gave stakeholders real-time visibility into defect trends and release readiness.',
  },
];
