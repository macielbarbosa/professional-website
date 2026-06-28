import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import curriculumPdf from "../../assets/curriculum.pdf";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="section-heading">{t.sections.contact}</h2>
        <p className="mb-8 text-muted">{t.contact.subtitle}</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:flex lg:w-full lg:gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-accent-soft lg:w-[30%]"
          >
            <MailIcon className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-medium text-muted">
                {t.contact.email}
              </p>
              <p className="break-all text-sm font-medium text-ink">
                {profile.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-accent-soft lg:w-[25%]"
          >
            <PhoneIcon className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-medium text-muted">
                {t.contact.phone}
              </p>
              <p className="break-all text-sm font-medium text-ink">
                {profile.phoneDisplay}
              </p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-accent-soft lg:w-[20%]"
          >
            <GitHubIcon className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-medium text-muted">GitHub</p>
              <p className="break-all text-sm font-medium text-ink">
                macielbarbosa
              </p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent hover:bg-accent-soft lg:w-[20%]"
          >
            <LinkedInIcon className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-medium text-muted">LinkedIn</p>
              <p className="break-all text-sm font-medium text-ink">
                macielbarbosa
              </p>
            </div>
          </a>
        </div>

        <div className="mt-8">
          <a
            href={curriculumPdf}
            download="Maciel_Barbosa_CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <DownloadIcon className="h-4 w-4" />
            {t.contact.downloadCv}
          </a>
        </div>
      </div>
    </section>
  );
}
