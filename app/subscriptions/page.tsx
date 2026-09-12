import type { Metadata } from 'next'
import Link from 'next/link'
import { Paragraphs, Rich } from '@/components/agents'
import { MotionSection } from '@/components/motion-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { SUBSCRIPTIONS } from '@/content/subscriptions'
import { SITE_URL } from '@/lib/site'

export const revalidate = 86400

export const metadata: Metadata = {
  title: SUBSCRIPTIONS.title,
  description: SUBSCRIPTIONS.teaser,
  alternates: { canonical: `${SITE_URL}/subscriptions` },
}

export default function SubscriptionsPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <MotionSection className="section-y">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-2">{SUBSCRIPTIONS.eyebrow}</p>
            <h1 className="section-title max-w-2xl">{SUBSCRIPTIONS.title}</h1>
            <div className="mt-4 max-w-2xl space-y-3">
              <Paragraphs lines={SUBSCRIPTIONS.intro} />
            </div>
            <h2 className="mt-10 text-lg font-semibold tracking-tight">
              {SUBSCRIPTIONS.howTitle}
            </h2>
            <ol className="mt-4 grid gap-3">
              {SUBSCRIPTIONS.how.map((step, index) => (
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
              {SUBSCRIPTIONS.dont.map((item) => (
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
              <Link href="/agents" className="underline-offset-4 hover:text-primary hover:underline">
                Agents
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
