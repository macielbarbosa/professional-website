export interface Translation {
  title: string;
  location: string;
  nav: {
    about: string;
    skills: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    downloadCv: string;
    contactMe: string;
  };
  sections: {
    about: string;
    skills: string;
    experience: string;
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
  winoverProject: string;
  winoverActivities: string;
  imdPeriod: string;
  imdRole: string;
  imdProject: string;
  imdActivities: string;
  squadraPeriod: string;
  squadraRole: string;
  squadraProject: string;
  squadraActivities: string;
  sinfoPeriod: string;
  sinfoRole: string;
  sinfoActivities: string;
  ectPeriod: string;
  ectRole: string;
  ectProject: string;
  ectActivities: string;
}

export const en: Translation = {
  title: "Senior Full-Stack Developer",
  location: "Brazil",
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    downloadCv: "Download CV",
    contactMe: "Contact me",
  },
  sections: {
    about: "Professional Summary",
    skills: "Technical Skills",
    experience: "Professional Experience",
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
  winoverProject: "Client: Data Agrin",
  winoverActivities:
    "Development of an Agro ERP with integrated artificial intelligence.",
  imdPeriod: "May/2018 — Present",
  imdRole: "Mid-Level Full-Stack and Front-end Developer",
  imdProject: "Projects: Multiprova3, Smart Suite",
  imdActivities:
    "Development of an integrated platform for creating, managing, and delivering virtual and in-person exams; development of a B2B product and sales management platform.",
  squadraPeriod: "May/2022 — Oct/2023",
  squadraRole: "Mid-Level Frontend Developer",
  squadraProject: "Clients: SM Direto, PASI, Danone, MRS",
  squadraActivities:
    "Development and maintenance of projects for external clients.",
  sinfoPeriod: "Oct/2017 — Jun/2018",
  sinfoRole: "Frontend Intern",
  sinfoActivities:
    "Development and maintenance of web systems for the Federal University of Rio Grande do Norte.",
  ectPeriod: "Apr/2017 — Dec/2017",
  ectRole: "Web Development Scholar",
  ectProject: "Project: Aula Interativa",
  ectActivities:
    "Development of the Aula Interativa teaching platform for the School of Science and Technology at UFRN.",
};
