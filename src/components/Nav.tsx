const links = [
  { href: '#live', label: 'Live' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#official', label: 'Official' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="site-nav sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:px-6 sm:py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="/" className="flex min-h-11 shrink-0 items-center">
            <img
              src="/logo.png"
              alt="Porta"
              width={267}
              height={72}
              fetchPriority="high"
              decoding="async"
              className="h-8 w-auto object-contain sm:h-10"
            />
          </a>
          <a
            href="#live"
            className="btn-primary shrink-0 px-3 text-sm sm:hidden"
          >
            Get Porta
          </a>
        </div>
        <div className="flex items-center justify-between gap-1 sm:justify-end sm:gap-2">
          <ul className="flex items-center">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg px-2 text-xs font-medium text-porta-muted transition hover:bg-white/5 hover:text-porta-lavender sm:px-3 sm:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#live"
            className="btn-primary hidden shrink-0 px-4 text-sm sm:inline-flex"
          >
            Get Porta
          </a>
        </div>
      </nav>
    </header>
  )
}
