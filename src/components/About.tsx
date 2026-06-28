import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="section-heading">{t.sections.about}</h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {t.summary}
        </p>
      </div>
    </section>
  );
}
