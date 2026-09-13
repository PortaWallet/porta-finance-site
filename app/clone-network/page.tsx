import type { Metadata } from 'next'
import Link from 'next/link'
import { Paragraphs, Rich } from '@/components/agents'
import { MotionSection } from '@/components/motion-section'
import { Badge } from '@/components/ui/badge'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { CLONE_NETWORK } from '@/content/clone-network'
import { SITE_URL } from '@/lib/site'

export const revalidate = 86400

export const metadata: Metadata = {
  title: CLONE_NETWORK.title,
  description: CLONE_NETWORK.teaser,
  alternates: { canonical: `${SITE_URL}/clone-network` },
}

export default function CloneNetworkPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <MotionSection className="section-y">
          <div className="mx-auto max-w-6xl">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <p className="eyebrow mb-0">{CLONE_NETWORK.eyebrow}</p>
              <Badge variant="coming">{CLONE_NETWORK.statusLabel}</Badge>
            </div>
            <h1 className="section-title max-w-2xl">{CLONE_NETWORK.title}</h1>
            <p className="mt-2 max-w-2xl text-base text-muted-foreground">
              {CLONE_NETWORK.teaser}
            </p>
            <div className="mt-4 max-w-2xl space-y-3">
              <Paragraphs lines={CLONE_NETWORK.intro} />
            </div>
            <h2 className="mt-10 text-lg font-semibold tracking-tight">
              {CLONE_NETWORK.sourcesTitle}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {CLONE_NETWORK.sources.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-border bg-card px-4 py-3"
                >
                  <h3 className="text-sm font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-lg font-semibold tracking-tight">
              {CLONE_NETWORK.fieldsTitle}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {CLONE_NETWORK.fields.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-border bg-card px-4 py-3"
                >
                  <h3 className="font-mono text-sm font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-lg font-semibold tracking-tight">
              {CLONE_NETWORK.howTitle}
            </h2>
            <ol className="mt-4 grid gap-3">
              {CLONE_NETWORK.how.map((step, index) => (
                <li key={step} className="rounded-xl border border-border bg-card px-4 py-3">
                  <div className="flex gap-3 text-sm leading-relaxed">
                    <span className="w-6 shrink-0 text-[11px] font-semibold tabular-nums tracking-wider text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-muted-foreground">
                      <Rich text={step} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <ul className="mt-8 grid gap-2">
              {CLONE_NETWORK.dont.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <Rich text={item} />
                </li>
              ))}
            </ul>
            <p className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              <Link href="/" className="underline-offset-4 hover:text-primary hover:underline">
                Back to Porta
              </Link>
              <Link
                href="/subscriptions"
                className="underline-offset-4 hover:text-primary hover:underline"
              >
                Subscriptions
              </Link>
              <Link href="/guides" className="underline-offset-4 hover:text-primary hover:underline">
                All guides
              </Link>
            </p>
          </div>
        </MotionSection>
      </main>
      <SiteFooter />
    </div>
  )
}
