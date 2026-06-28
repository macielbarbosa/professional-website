import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import bannerImg from "../assets/banner.png";
import profileImg from "../assets/personal-picture.png";
import curriculumPdf from "../assets/curriculum.pdf";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MapPinIcon } from "./Icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden bg-ink"
      aria-label="Introduction"
    >
      <img
        src={bannerImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/50" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-16 sm:px-6 sm:py-24 md:flex-row md:items-center md:gap-12">
        <div className="shrink-0">
          <img
            src={profileImg}
            alt={profile.name}
            className="h-36 w-36 rounded-full border-4 border-white/20 object-cover shadow-xl sm:h-44 sm:w-44"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-blue-300 sm:text-xl">
            {t.title}
          </p>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-white/70 md:justify-start">
            <MapPinIcon className="h-4 w-4 shrink-0" />
            {t.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={curriculumPdf}
              download="Maciel_Barbosa_CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-700"
            >
              <DownloadIcon className="h-4 w-4" />
              {t.hero.downloadCv}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.hero.contactMe}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white transition-colors hover:bg-white/10"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white transition-colors hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
