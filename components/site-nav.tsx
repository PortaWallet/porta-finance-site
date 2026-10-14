'use client'

import { useEffect, type MouseEvent } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteLogo } from '@/components/site-logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { NAV_LINKS } from '@/content/copy'
import { navHref, samePageHashId } from '@/lib/nav'
import { PRIMARY_CTA_LABEL, TG_BOT_URL } from '@/lib/site'

function followNav(event: MouseEvent<HTMLAnchorElement>) {
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return
  }
  const anchor = event.currentTarget
  const href = anchor.getAttribute('href') ?? ''
  const details = anchor.closest('details')
  if (details) details.open = false

  const id = samePageHashId(href, window.location.pathname)
  if (!id) return
  const target = document.getElementById(id)
  if (!target) return
  event.preventDefault()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    const next = `${window.location.pathname}${window.location.search}#${id}`
    window.history.pushState(null, '', next)
  })
}

function NavItems({ className, linkClassName }: { className: string; linkClassName: string }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.label}>
          <a href={navHref(link.href)} className={linkClassName} onClick={followNav}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SiteNav() {
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      document.querySelectorAll('details[open]').forEach((el) => {
        if (el.id === 'mobile-menu') el.removeAttribute('open')
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <Link href="/" className="inline-flex min-h-10 items-center">
          <SiteLogo />
        </Link>
        <div className="flex items-center gap-1">
          <NavItems
            className="hidden items-center md:flex"
            linkClassName="inline-flex min-h-10 items-center rounded-full px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          />
          <details id="mobile-menu" className="group relative md:hidden">
            <summary className="inline-flex size-9 cursor-pointer list-none items-center justify-center rounded-full text-foreground hover:bg-muted/70 [&::-webkit-details-marker]:hidden">
              <Menu className="size-4 group-open:hidden" aria-hidden />
              <X className="hidden size-4 group-open:block" aria-hidden />
              <span className="sr-only">Open menu</span>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-border bg-background p-2 shadow-lg"
            >
              <NavItems
                className="flex flex-col"
                linkClassName="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted/70"
              />
            </nav>
          </details>
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={TG_BOT_URL} target="_blank" rel="noopener noreferrer">
              {PRIMARY_CTA_LABEL}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  )
}
