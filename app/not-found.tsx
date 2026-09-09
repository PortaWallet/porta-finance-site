import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export default function NotFound() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-28 sm:px-6">
        <p className="eyebrow">404</p>
        <h1 className="section-title">This page is not here</h1>
        <p className="max-w-md text-muted-foreground">
          The Porta marketing site is a single page. Head back home — or open
          the official Telegram bot.
        </p>
        <div>
          <Button asChild>
            <Link href="/">Back to Porta</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
