export const PERSONAL_INFO = {
  name: "Muhammed Shameem S",
  title: "Fullstack Software Engineer",
  location: "Kerala, India",
  email: "muhammadshami977@gmail.com",
  phone: "+91 8086714525",
  github: "https://github.com/muhammed-shameem",
  linkedin: "https://linkedin.com/in/muhammed-shameem-s",
  gitlab: "https://gitlab.com/muhammed-shameem",
  summary: "Fullstack Software Engineer with 5+ years of experience building scalable enterprise applications using React.js, Node.js, and modern web technologies. Currently working at IQVIA, developing automation platforms and low-code testing systems.",
};

export const EXPERIENCE = [
  {
    company: "IQVIA",
    role: "Software Development Engineer 2",
    period: "June 2024 - Present",
    description: "IQVIA is a global leader in healthcare analytics. Developing automation platforms and low-code testing systems including prompt-driven solutions.",
    highlights: [
      "Built PAF Studio, an Electron-based desktop application for low-code test automation.",
      "Implemented prompt-driven automation to generate test scripts from natural language.",
      "Migrated legacy Hiring Application to modern React.js and Node.js architecture.",
      "Engineered dynamic workflow system for configurable hiring processes.",
      "Optimized chatbot platform performance by improving Cosmos DB indexing."
    ]
  },
  {
    company: "Simelabs",
    role: "Software Engineer",
    period: "Nov 2020 - June 2024",
    description: "Product engineering organization specializing in AI, AR/VR, IoT, and scalable web solutions.",
    highlights: [
      "Led fullstack development across multiple projects handling frontend, backend, and API integrations.",
      "Built scalable and responsive UI applications using React.js, Next.js, and Redux.",
      "Developed REST APIs using Django Rest Framework and Node.js.",
      "Integrated data visualization tools using Leaflet and ECharts.",
      "Contributed to NFT-based and blockchain-integrated applications."
    ]
  }
];

export const PROJECTS = [
  {
    title: "PAF Studio",
    client: "IQVIA",
    description: "Electron-based desktop application for low-code test automation built on a custom PAF framework. Features NLP-to-script generation using AI.",
    tags: ["Electron", "React", "Node.js", "Selenium", "AI"]
  },
  {
    title: "Chatbot Platform",
    client: "IQVIA",
    description: "High-performance chatbot system with Cosmos DB optimization. Supports multiple integration modes including standalone and injected scripts.",
    tags: ["React", "Cosmos DB", "Node.js", "Chatbot"]
  },
  {
    title: "Hiring Application",
    client: "IQVIA",
    description: "Enterprise hiring and workflow management system supporting multiple business units. Features a dynamic workflow engine and automated GitLab CI/CD pipelines.",
    tags: ["React.js", "Node.js", "GitLab CI/CD"]
  },
  {
    title: "PAF Dashboard",
    client: "IQVIA",
    description: "Internal administrative dashboard for managing automation users, system configurations, and monitoring testing ecosystem health.",
    tags: ["React", "Admin Portal", "Node.js"]
  },
  {
    title: "ADEONA",
    client: "Simelabs",
    description: "Enterprise freight forwarding platform for the logistics industry. Features automated quote logic and multi-user offer approval workflows.",
    tags: ["React", "TypeScript", "Logistics", "Chat Engine"]
  },
  {
    title: "3M Traffic Sign Tool",
    client: "Simelabs",
    description: "A precision design application for creating road signboards according to IRC-67 rules. Automates geometry calculations based on road constraints.",
    tags: ["React", "TypeScript", "Regulatory Tech", "SVG"]
  }
];

export const SKILLS = {
  frontend: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "SCSS", "Redux", "Tailwind CSS"],
  backend: ["Node.js", "Django", "REST API"],
  databases: ["Cosmos DB", "MySQL", "PL/SQL"],
  tools: ["Electron.js", "Microsoft Bot Framework", "Git", "Jira", "GitLab CI/CD", "Copilot"]
};
