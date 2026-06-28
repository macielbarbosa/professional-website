import { profile } from "../data/profile";
import type { ProjectPrefixKey } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import type { Translation } from "../i18n/en";

function ProjectItems({
  prefixKey,
  items,
  t,
}: {
  prefixKey: ProjectPrefixKey;
  items: NonNullable<(typeof profile.jobs)[number]["projectItems"]>;
  t: Translation;
}) {
  return (
    <p className="mt-1 text-sm text-muted">
      <span className="font-semibold text-ink">{t[prefixKey]} </span>
      {items.map((item, index) => (
        <span key={item.labelKey}>
          {index > 0 && ", "}
          {"url" in item && item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {t[item.labelKey]}
            </a>
          ) : (
            t[item.labelKey]
          )}
        </span>
      ))}
    </p>
  );
}

function Activities({ activities }: { activities: string | string[] }) {
  if (Array.isArray(activities)) {
    return (
      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted">
        {activities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="mt-2 text-sm leading-relaxed text-muted">{activities}</p>
  );
}

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="section-heading">{t.sections.experience}</h2>
        <ol className="relative space-y-8 border-l-2 border-accent/20 pl-6 sm:pl-8">
          {profile.jobs.map((job) => (
            <li key={job.id} className="relative">
              <span className="absolute -left-[calc(0.75rem+1px)] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white sm:-left-[calc(1rem+1px)]" />
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-ink">{job.company}</h3>
                  <time className="text-xs font-medium text-muted">
                    {t[job.periodKey]}
                  </time>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent">
                  {t[job.roleKey]}
                </p>
                {job.projectPrefixKey && job.projectItems && (
                  <ProjectItems
                    prefixKey={job.projectPrefixKey}
                    items={job.projectItems}
                    t={t}
                  />
                )}
                <Activities activities={t[job.activitiesKey]} />
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {job.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-border bg-slate-50 px-2 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
