export interface Translation {
  title: string;
  location: string;
  nav: {
    about: string;
    experience: string;
    clients: string;
    education: string;
    contact: string;
  };
  hero: {
    downloadCv: string;
    contactMe: string;
  };
  sections: {
    about: string;
    experience: string;
    clients: string;
    education: string;
    contact: string;
  };
  summary: string;
  years: string;
  year: string;
  education: {
    degree: string;
    institution: string;
  };
  contact: {
    subtitle: string;
    email: string;
    phone: string;
    downloadCv: string;
  };
  footer: {
    rights: string;
  };
  winoverPeriod: string;
  winoverRole: string;
  winoverProjectPrefix: string;
  dataAgrin: string;
  winoverActivities: string[];
  imdPeriod: string;
  imdRole: string;
  imdProjectPrefix: string;
  multiprova3: string;
  smartSuite: string;
  imdActivities: string[];
  squadraPeriod: string;
  squadraRole: string;
  squadraProjectPrefix: string;
  smDireto: string;
  pasi: string;
  danone: string;
  mrs: string;
  squadraActivities: string[];
  sinfoPeriod: string;
  sinfoRole: string;
  sinfoActivities: string;
  ectPeriod: string;
  ectRole: string;
  ectProjectPrefix: string;
  aulaInterativa: string;
  ectActivities: string;
}

export const en: Translation = {
  title: "Senior Full-Stack Developer",
  location: "Brazil",
  nav: {
    about: "About",
    experience: "Experience",
    clients: "Clients",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    downloadCv: "Download CV",
    contactMe: "Contact me",
  },
  sections: {
    about: "Professional Summary",
    experience: "Professional Experience",
    clients: "Clients & Projects",
    education: "Education",
    contact: "Get in Touch",
  },
  summary:
    "Senior Full-Stack Developer with solid experience in web interfaces, building and maintaining solutions with high quality, performance, usability, and responsiveness. Highly technical and analytical profile, contributing to business rule design, complex problem solving, and collaboration with multidisciplinary teams.",
  years: "years",
  year: "year",
  education: {
    degree: "Bachelor in Science and Technology",
    institution: "Federal University of Rio Grande do Norte (UFRN)",
  },
  contact: {
    subtitle: "Feel free to reach out for opportunities or collaborations.",
    email: "Email",
    phone: "Phone",
    downloadCv: "Download my CV (PDF)",
  },
  footer: {
    rights: "All rights reserved.",
  },
  winoverPeriod: "Oct/2025 — Jun/2026",
  winoverRole: "Senior Full-Stack Developer",
  winoverProjectPrefix: "Projects:",
  dataAgrin: "Data Agrin",
  winoverActivities: [
    "Full-stack development of the Data Agrin Agro ERP with fiscal, financial, harvest, inventory, and rural producer registration modules",
    "Integration of artificial intelligence into the system's business flow",
    "Relational database architecture with PostgreSQL and TypeORM, including migrations, enums, and fiscal fields (NCM, CEST, NF-e)",
    "UI implementation with React, Next.js, Radix UI, and Tailwind CSS, focused on accessibility and responsiveness",
  ],
  imdPeriod: "May/2018 — Present",
  imdRole: "Mid-Level Full-Stack and Front-end Developer",
  imdProjectPrefix: "Projects:",
  multiprova3: "Multiprova3",
  smartSuite: "Smart Suite",
  imdActivities: [
    "Development and maintenance of the Multiprova3 platform — integrated system for creating, managing, and delivering virtual and in-person exams at scale",
    "Work on B2B platform (Smart Suite) for product and sales management",
    "Evolution of microservices-based architecture with RabbitMQ and Docker",
    "E2E testing with Cypress and unit tests with Jest; code quality monitored via SonarQube",
  ],
  squadraPeriod: "May/2022 — Oct/2023",
  squadraRole: "Mid-Level Frontend Developer",
  squadraProjectPrefix: "Clients:",
  smDireto: "SM Direto",
  pasi: "PASI",
  danone: "Danone",
  mrs: "MRS",
  squadraActivities: [
    "Development and maintenance of frontend projects for clients such as Danone, MRS, PASI, and SM Direto",
    "Work in multidisciplinary squads with continuous delivery in an agile environment",
  ],
  sinfoPeriod: "Oct/2017 — Jun/2018",
  sinfoRole: "Frontend Intern",
  sinfoActivities:
    "Development and maintenance of web systems for the Federal University of Rio Grande do Norte.",
  ectPeriod: "Apr/2017 — Dec/2017",
  ectRole: "Web Development Scholar",
  ectProjectPrefix: "Project:",
  aulaInterativa: "Aula Interativa",
  ectActivities:
    "Development of the Aula Interativa teaching platform for the School of Science and Technology at UFRN.",
};
