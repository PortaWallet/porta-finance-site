import { TG_BOT_URL } from '../lib/site'

const links = [
  { href: '#live', label: 'Live' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: TG_BOT_URL, label: 'Open bot', external: true, hideOnMobile: true },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-porta-border/60 bg-porta-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6">
        <a href="/" className="flex min-h-11 shrink-0 items-center">
          <img
            src="/logo.png"
            alt="Porta"
            width={267}
            height={72}
            fetchPriority="high"
            decoding="async"
            className="h-7 w-auto object-contain sm:h-8"
          />
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center">
            {links.map((link) => (
              <li
                key={link.label}
                className={link.hideOnMobile ? 'hidden sm:block' : undefined}
              >
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="inline-flex min-h-11 items-center rounded-lg px-2.5 text-sm font-medium text-porta-muted transition hover:bg-white/5 hover:text-porta-lavender sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#live"
            className="btn-primary shrink-0 px-3.5 text-sm sm:px-4"
          >
            Get Porta
          </a>
        </div>
      </nav>
    </header>
  )
}
