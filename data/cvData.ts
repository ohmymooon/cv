export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectItem {
  name: string;
  subtitle: string;
  period: string;
  description?: string;
  role: string;
  tech: string;
  highlights: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string;
}

export interface EducationItem {
  university: string;
  degree: string;
  gpa: string;
  period: string;
}

export interface CVData {
  personal: {
    name: string;
    title: string;
    email: string;
    website: string;
    location: string;
  };
  summary: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
}

export const cvData: CVData = {
  personal: {
    name: "Imam Syuhada",
    title: "Software Engineer (Backend & DevOps)",
    email: "imamsy11@gmail.com",
    website: "imamsyuhada.com",
    location: "Canberra ACT, Australia",
  },
  summary:
    "As a Backend Developer, He designs and implements robust, scalable, and secure backend systems. By leveraging modern frameworks, databases, and API strategies, He ensures seamless data processing, high performance, and maintainability. With a strong emphasis on efficiency and best practices, He develops solutions that drive business scalability and technological innovation.",
  education: [
    {
      university: "Gadjah Mada University",
      degree: "Associate Degree of Instrumentation Technology",
      gpa: "3.2/4.00",
      period: "September 2014 - November 2018",
    },
    {
      university: "Canberra College of Management Technology",
      degree: "Information Technology",
      gpa: "-",
      period: "April 2025 - Present",
    },
  ],

  experience: [
    {
      title: "Chief Technology Officer",
      company: "Planet Nyemil Snack (PNS)",
      location: "Banten, Indonesia",
      period: "April 2025 - Present",
      responsibilities: [
        "Designed & develop Point of Sales application for snack retail shop",
      ],
    },
    {
      title: "Associate Backend Developer",
      company: "Prakasa Triputra Solusi (Praktis)",
      location: "Jakarta, Indonesia",
      period: "October 2022 - December 2024",
      responsibilities: [
        "Enhanced warehouse management system using Frappe.py and Django.py",
        "Created webhook for integrating with other product, work closely with other backend developers",
        "Collaborated closely with frontend developers to design and implement backend endpoints that support frontend features efficiently",
        "Initiated technical product documentation, including API docs, flow diagrams, and ERDs",
        "Utilized monitoring tools to track system health, proactively identifying and resolving issues",
        "Optimized database queries in MariaDB, improving performance and reducing response times",
      ],
    },
    {
      title: "Junior Backend Developer",
      company: "Aset Digital Berkat (TokoCrypto)",
      location: "Jakarta, Indonesia",
      period: "April 2022 - September 2022",
      responsibilities: [
        "Developed new features, fixed bugs, maintained legacy code",
        "Success to rewrite backend system JavaScript AWS Lambda (serverless) to Nest.JS in 3 months",
        "Played with Nest.JS, Type ORM, MySQL, Redis to develop and maintain server-side system",
        "Initialized Unit Testing using Jest",
        "Worked closely with mobile and frontend developers to ensure seamless integration of backend APIs with user interfaces",
        "Created comprehensive documentation for code and development processes to streamline onboarding and knowledge sharing within the team",
      ],
    },
    {
      title: "Backend Developer",
      company: "Metranet (Logee)",
      location: "South Jakarta, Indonesia",
      period: "April 2021 - Maret 2022",
      responsibilities: [
        "Working with a Scrum Team (PO, SM, QA, FE, Mobile, BE, UIUX) to deliver digital product features in the logistic sector and ensure it running well",
        "Developed new features, fixed bugs, maintained legacy code",
        "Played with several tech-stack and tools : Restify.js, MongoDB, Redis",
        "Got new insights & experiences to implement Microservices with Event Driven",
        "Created unit testing using Mocha & Sinon and kept coverage more than 80%",
        "Configured Jenkins pipelines for continuous integration and deployment, streamlining the release process",
      ],
    },
    {
      title: "Backend Developer & Infrastructure",
      company: "Sanbern Dynamics (Ditanamin, LalloBoat)",
      location: "Yogyakarta, Indonesia",
      period: "November 2018 - Maret 2021",
      responsibilities: [
        "Designed server-side system with stacks: Express.JS (JavaScript) and MongoDB",
        "Developed monolith Restful API to support client application (mobile or dashboard admin)",
        "Used droplet (Digital Ocean) to embed backend app",
        "Set up automated data backup routines for MongoDB to ensure data security and reliability",
        "Developed deployment pipelines for backend app using GitHub-Actions",
        "Performed load testing to assess application performance under peak loads and make necessary adjustments",
        "Setup Nginx as a Reverse Proxy: Configured Nginx to act as a reverse proxy, improving load distribution and managing traffic for the backend services",
      ],
    },
    {
      title: "Hardware IoT Engineer",
      company: "Widya Imersif Teknologi (WIT)",
      location: "Yogyakarta, Indonesia",
      period: "November 2018 - Maret 2021",
      responsibilities: [
        "Developed and optimized firmware for Arduino-based systems using C/C++ and the PlatformIO IDE, ensuring efficient control and communication with various sensors and actuators",
        "Built IoT medical checkup using Raspberry Pi as a hub for edge computing, with connectivity via MQTT",
        "Integrated Arduino and Raspberry Pi with sensors, displays, and actuators, creating robust communication systems between devices using protocols like I2C, SPI, and UART",
      ],
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: "JavaScript, TypeScript, Golang, Python",
    },
    {
      category: "Frontend Development",
      items: "Next.js, React.js, Tailwind, Bootstrap, CSS, SCSS",
    },
    {
      category: "Backend Development",
      items: "Nest.js, Gin, GoFiber",
    },
    {
      category: "Event Driven",
      items: "REST, GraphQL, gRPC, MQTT, RabbitMQ, Kafka",
    },
    {
      category: "Databases",
      items: "SQL, MySQL, PostgreSQL, MongoDB, Redis",
    },
    {
      category: "DevOps & SRE",
      items:
        "Provisioning[Terraform, Ansible], Continuous Inetegration [GitLab Runner, GitHub Action, Jenkins], Continuous Delivery [FluxCD, ArgoCD], Orchestration [Kubernetes, Docker]",
    },
    {
      category: "Other",
      items: "Project Management, Agile, Scrum, Value Proposition",
    },
  ],
};
