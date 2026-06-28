import { useState } from "react";
import { profile } from "../data/profile";
import { useLanguage, type Language } from "../i18n/LanguageContext";
import curriculumPdf from "../assets/curriculum.pdf";
import {
  CloseIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
} from "./Icons";

const navLinks = [
  { href: "#about", key: "about" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#clients", key: "clients" as const },
  { href: "#education", key: "education" as const },
  { href: "#contact", key: "contact" as const },
];

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const langs: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "pt", label: "PT" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-white p-0.5">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
            language === code
              ? "bg-accent text-white"
              : "text-muted hover:text-ink"
          }`}
          aria-pressed={language === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-sm font-bold text-ink sm:text-base"
          onClick={closeMenu}
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="text-accent">{profile.name.split(" ")[1]}</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, key }) => (
            <li key={key}>
              <a
                href={href}
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={curriculumPdf}
            download="Maciel_Barbosa_CV.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            {t.hero.downloadCv}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-ink"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-ink"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <LanguageSelector />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSelector />
          <button
            type="button"
            className="rounded-lg p-2 text-ink hover:bg-accent-soft"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, key }) => (
              <li key={key}>
                <a
                  href={href}
                  className="block text-sm font-medium text-muted transition-colors hover:text-accent"
                  onClick={closeMenu}
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-2">
              <a
                href={curriculumPdf}
                download="Maciel_Barbosa_CV.pdf"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                onClick={closeMenu}
              >
                <DownloadIcon className="h-4 w-4" />
                {t.hero.downloadCv}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5 text-muted" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5 text-muted" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
