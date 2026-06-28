import { clients } from "../data/clients";
import { useLanguage } from "../i18n/LanguageContext";

function LogoImage({ name, logo }: { name: string; logo: string }) {
  return (
    <img
      src={logo}
      alt={name}
      className="h-14 w-full max-w-[180px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
    />
  );
}

export function Clients() {
  const { t } = useLanguage();

  return (
    <section
      id="clients"
      className="scroll-mt-16 bg-accent-soft/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="section-heading">{t.sections.clients}</h2>
        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <li key={client.name} className="flex items-center justify-center">
              {client.url ? (
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={client.name}
                  className="group flex h-16 w-full items-center justify-center rounded-lg px-4 py-3 transition-colors hover:bg-white/60"
                >
                  <LogoImage name={client.name} logo={client.logo} />
                </a>
              ) : (
                <div
                  aria-label={client.name}
                  className="group flex h-16 w-full cursor-default items-center justify-center rounded-lg px-4 py-3"
                >
                  <LogoImage name={client.name} logo={client.logo} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
