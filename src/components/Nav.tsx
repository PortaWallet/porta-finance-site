import { TG_BOT_URL } from '../lib/site'

const links = [
  { href: '#live', label: 'Live' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: TG_BOT_URL, label: 'Follow', external: true },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-porta-border/60 bg-porta-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6">
        <a href="/" className="group flex shrink-0 items-center">
          <img
            src="/logo.png"
            alt="Porta"
            width={167}
            height={64}
            decoding="async"
            className="h-7 w-auto object-contain sm:h-8"
          />
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-0.5 sm:flex sm:gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-porta-muted transition hover:bg-white/5 hover:text-porta-accent sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#live"
            className="btn-primary shrink-0 px-3 py-1.5 text-xs sm:px-3.5 sm:text-sm"
          >
            Get Porta
          </a>
        </div>
      </nav>
    </header>
  )
}
