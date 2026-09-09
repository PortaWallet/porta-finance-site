import { ArrowUpRight, Puzzle, Smartphone, Send } from 'lucide-react'
import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { OfficialLinks } from '@/components/official-links'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_SURFACES, APPS_SECTION } from '@/content/apps'
import {
  LINKEDIN_LABEL,
  LINKEDIN_URL,
  SITE_HOST,
  SITE_URL,
  SOFT_TIP,
  TG_BOT_HANDLE,
  TG_BOT_URL,
  TG_CHANNEL_HANDLE,
  TG_CHANNEL_URL,
  TG_NEWS_HANDLE,
  TG_NEWS_URL,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
} from '@/lib/site'

const icons = {
  telegram: Send,
  extension: Puzzle,
  mobile: Smartphone,
} as const

function statusVariant(status: (typeof APP_SURFACES)[number]['status']) {
  if (status === 'live') return 'live' as const
  if (status === 'dogfood') return 'dogfood' as const
  return 'coming' as const
}

export function Apps() {
  return (
    <MotionSection id="apps" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">{APPS_SECTION.eyebrow}</p>
          <h2 className="section-title">{APPS_SECTION.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {APPS_SECTION.lede} Soft tip{' '}
            <code className="rounded-md bg-muted px-1.5 py-0.5 text-xs">{SOFT_TIP}</code>.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Official links only —{' '}
            <a href={SITE_URL} className="text-foreground hover:text-primary">
              {SITE_HOST}
            </a>
            ,{' '}
            <a
              href={TG_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              {TG_BOT_HANDLE}
            </a>
            ,{' '}
            <a
              href={TG_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              {TG_CHANNEL_HANDLE}
            </a>
            ,{' '}
            <a
              href={TG_NEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              {TG_NEWS_HANDLE}
            </a>
            ,{' '}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              {LINKEDIN_LABEL}
            </a>
            , and{' '}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              YouTube {YOUTUBE_HANDLE}
            </a>
            . Ignore lookalike accounts (including on X).
          </p>
          <OfficialLinks className="mt-4" />
        </div>

        <MotionStagger className="grid gap-4 lg:grid-cols-3">
          {APP_SURFACES.map((app) => {
            const Icon = icons[app.id]
            return (
              <MotionItem key={app.id} className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <Icon className="size-5 text-muted-foreground" aria-hidden />
                      <Badge variant={statusVariant(app.status)}>{app.statusLabel}</Badge>
                    </div>
                    <CardTitle>{app.title}</CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-col items-start gap-2">
                    {app.disabled || !app.href ? (
                      <span className="text-sm font-medium text-muted-foreground">{app.cta}</span>
                    ) : (
                      <Button asChild>
                        <a
                          href={app.href}
                          {...(app.href.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          {...(app.download ? { download: 'porta-wallet.apk' } : {})}
                        >
                          {app.cta}
                          <ArrowUpRight className="size-3.5" aria-hidden />
                        </a>
                      </Button>
                    )}
                    {app.secondaryHref && app.secondaryCta ? (
                      <Button asChild variant="link">
                        <a
                          href={app.secondaryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {app.secondaryCta}
                        </a>
                      </Button>
                    ) : null}
                  </CardContent>
                </Card>
              </MotionItem>
            )
          })}
        </MotionStagger>
      </div>
    </MotionSection>
  )
}
