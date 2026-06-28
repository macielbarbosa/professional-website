import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink py-8 text-white/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm">
          &copy; {year} {profile.name}. {t.footer.rights}
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <li>
              <a href="#about" className="transition-colors hover:text-white">
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#experience" className="transition-colors hover:text-white">
                {t.nav.experience}
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-white">
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
