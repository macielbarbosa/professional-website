import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-16 bg-accent-soft/40 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="section-heading">{t.sections.skills}</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((skill) => (
            <li
              key={skill.name}
              className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm"
            >
              <span className="font-medium text-ink">{skill.name}</span>
              <span className="text-xs text-muted">
                {skill.years} {t.years}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
