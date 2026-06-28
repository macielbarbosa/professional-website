import { useLanguage } from "../i18n/LanguageContext";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="scroll-mt-16 bg-accent-soft/40 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="section-heading">{t.sections.education}</h2>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-ink">
            {t.education.degree}
          </h3>
          <p className="mt-1 text-sm text-muted">{t.education.institution}</p>
        </div>
      </div>
    </section>
  );
}
