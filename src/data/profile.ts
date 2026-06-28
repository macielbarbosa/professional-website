type ProjectLabelKey =
  | "dataAgrin"
  | "multiprova3"
  | "smartSuite"
  | "smDireto"
  | "pasi"
  | "danone"
  | "mrs"
  | "aulaInterativa";

type ProjectPrefixKey =
  | "winoverProjectPrefix"
  | "imdProjectPrefix"
  | "squadraProjectPrefix"
  | "ectProjectPrefix";

export const profile = {
  name: "Maciel Barbosa da Silva",
  email: "macielbarbosa@outlook.com",
  phone: "+5584981253837",
  phoneDisplay: "+55 (84) 98125-3837",
  github: "https://github.com/macielbarbosa",
  linkedin: "https://linkedin.com/in/macielbarbosa",
  jobs: [
    {
      id: "winover",
      company: "Winover",
      periodKey: "winoverPeriod" as const,
      roleKey: "winoverRole" as const,
      projectPrefixKey: "winoverProjectPrefix" as const,
      projectItems: [
        {
          labelKey: "dataAgrin" as ProjectLabelKey,
          url: "https://www.dataagrin.com.br/",
        },
      ],
      activitiesKey: "winoverActivities" as const,
      tech: [
        "React",
        "Next.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
        "TypeORM",
        "Jotai",
        "React Query",
        "Radix UI",
        "Tailwind",
        "Jest",
        "Docker",
        "CI/CD",
      ],
    },
    {
      id: "imd",
      company: "Instituto Metrópole Digital / UFRN",
      periodKey: "imdPeriod" as const,
      roleKey: "imdRole" as const,
      projectPrefixKey: "imdProjectPrefix" as const,
      projectItems: [
        {
          labelKey: "multiprova3" as ProjectLabelKey,
          url: "https://site.multiprova.ufrn.br/",
        },
        { labelKey: "smartSuite" as ProjectLabelKey },
      ],
      activitiesKey: "imdActivities" as const,
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "MobX",
        "Redux",
        "Material UI",
        "Styled Components",
        "LoopBack 3",
        "MongoDB",
        "Microsserviços",
        "RabbitMQ",
        "Docker",
        "Cypress",
        "Jest",
        "SonarQube",
        "CI/CD",
      ],
    },
    {
      id: "squadra",
      company: "Squadra Digital",
      periodKey: "squadraPeriod" as const,
      roleKey: "squadraRole" as const,
      projectPrefixKey: "squadraProjectPrefix" as const,
      projectItems: [
        {
          labelKey: "smDireto" as ProjectLabelKey,
          url: "https://www.smdireto.com.br/",
        },
        {
          labelKey: "pasi" as ProjectLabelKey,
          url: "https://www.pasi.com.br/",
        },
        {
          labelKey: "danone" as ProjectLabelKey,
          url: "https://www.danone.com/",
        },
        {
          labelKey: "mrs" as ProjectLabelKey,
          url: "https://www.mrs.com.br/",
        },
      ],
      activitiesKey: "squadraActivities" as const,
      tech: [
        "React",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "Redux",
        "MobX",
        "Material UI",
        "Tailwind",
        "Drupal",
        "Cypress",
        "Jest",
        "Docker",
        "CI/CD",
      ],
    },
    {
      id: "sinfo",
      company: "SINFO / UFRN",
      periodKey: "sinfoPeriod" as const,
      roleKey: "sinfoRole" as const,
      projectPrefixKey: null,
      projectItems: null,
      activitiesKey: "sinfoActivities" as const,
      tech: [
        "Vue.js",
        "Angular",
        "TypeScript",
        "Redux",
        "Vuex",
        "Bootstrap",
        "SCSS",
      ],
    },
    {
      id: "ect",
      company: "ECT / UFRN",
      periodKey: "ectPeriod" as const,
      roleKey: "ectRole" as const,
      projectPrefixKey: "ectProjectPrefix" as const,
      projectItems: [
        {
          labelKey: "aulaInterativa" as ProjectLabelKey,
          url: "https://aulainterativa.ect.ufrn.br",
        },
      ],
      activitiesKey: "ectActivities" as const,
      tech: ["HTML", "JavaScript", "CSS", "Geogebra"],
    },
  ],
} as const;

export type Job = (typeof profile.jobs)[number];
export type { ProjectLabelKey, ProjectPrefixKey };
