import Link from 'next/link'
import { MotionSection } from '@/components/motion-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { Badge } from '@/components/ui/badge'
import { ROADMAP, ROADMAP_PATH } from '@/content/roadmap'
import { HOME_HREF, ROADMAP_HREF } from '@/lib/preview'

type BadgeVariant = 'live' | 'coming' | 'hold'

function statusVariant(status: string): BadgeVariant {
  if (status.startsWith('HOLD')) return 'hold'
  if (status === 'LIVE') return 'live'
  return 'coming'
}

function RoadmapArticle({ asPage = false }: { asPage?: boolean }) {
  const Title = asPage ? 'h1' : 'h2'
  const sections = [ROADMAP.holds, ROADMAP.live, ROADMAP.next] as const

  return (
    <MotionSection id="roadmap" className="section-y">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">{ROADMAP.eyebrow}</p>
            <Title className="section-title">
              {asPage ? ROADMAP.pageTitle : ROADMAP.title}
            </Title>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {ROADMAP.lede}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Status as of{' '}
              <time dateTime={ROADMAP.updatedIso}>{ROADMAP.updatedLabel}</time>
            </p>
          </div>
          {asPage ? (
            <Badge variant="coming">{ROADMAP.next.badge}</Badge>
          ) : (
            <Link
              href={ROADMAP_HREF}
              className="text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              {ROADMAP.pageLink}
            </Link>
          )}
        </div>

        <div className="grid gap-8">
          {sections.map((section) => (
            <section key={section.id} id={asPage ? section.id : undefined}>
              <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p className="eyebrow mb-1">{section.eyebrow}</p>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {section.lede}
                  </p>
                </div>
                {'badge' in section ? (
                  <Badge variant="coming">{section.badge}</Badge>
                ) : null}
              </div>
              <ol className="grid gap-3">
                {section.items.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl border border-border bg-card px-4 py-3"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-semibold tracking-tight sm:text-base">
                        {item.title}
                      </h4>
                      <Badge
                        variant={statusVariant(item.status)}
                        className="ml-auto"
                      >
                        {item.status}
                      </Badge>
                    </div>
                    {asPage ? (
                      <p className="mt-1 text-sm leading-snug text-muted-foreground">
                        {item.body}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        {asPage ? (
          <p className="mt-10 text-sm font-medium">
            <Link
              href={HOME_HREF}
              className="text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              {ROADMAP.back}
            </Link>
          </p>
        ) : (
          <p className="mt-6 text-sm text-muted-foreground">
            Full copy, HOLD labels, and coming work live on{' '}
            <Link
              href={ROADMAP_HREF}
              className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              {ROADMAP_PATH}
            </Link>
            .
          </p>
        )}
      </div>
    </MotionSection>
  )
}

export function Roadmap() {
  return <RoadmapArticle />
}

export function RoadmapPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <RoadmapArticle asPage />
      </main>
      <SiteFooter />
    </div>
  )
}
