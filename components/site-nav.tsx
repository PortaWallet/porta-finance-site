import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteLogo } from '@/components/site-logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { NAV_LINKS } from '@/content/copy'
import { PRIMARY_CTA_LABEL } from '@/lib/site'
import { TG_BOT_URL } from '@/lib/site'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <Link href="/" className="inline-flex min-h-11 items-center">
          <SiteLogo />
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Button asChild size="sm">
            <a
              href={TG_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {PRIMARY_CTA_LABEL}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Button>
        </div>
      </nav>
      <nav
        aria-label="Sections"
        className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-2 md:hidden sm:px-6"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex min-h-10 shrink-0 items-center rounded-full px-3 text-xs font-medium text-muted-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
