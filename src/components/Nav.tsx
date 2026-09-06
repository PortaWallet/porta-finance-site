const links = [
  { href: '#live', label: 'Live' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#official', label: 'Official' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="site-nav sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
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
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg px-1.5 text-xs font-medium text-porta-muted transition hover:bg-white/5 hover:text-porta-lavender sm:px-3 sm:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#live"
            className="btn-primary shrink-0 px-3 text-sm sm:px-4"
          >
            Get Porta
          </a>
        </div>
      </nav>
    </header>
  )
}
