import { ArrowUpRight, Puzzle, Smartphone, Send } from 'lucide-react'
import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_SURFACES, APPS_SECTION } from '@/content/apps'

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
    <MotionSection id="apps" className="section-y">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-2xl">
          <p className="eyebrow mb-2">{APPS_SECTION.eyebrow}</p>
          <h2 className="section-title">{APPS_SECTION.title}</h2>
          <p className="mt-2 text-sm leading-snug text-muted-foreground">
            {APPS_SECTION.lede}
          </p>
        </div>

        <MotionStagger className="grid gap-3 lg:grid-cols-3">
          {APP_SURFACES.map((app) => {
            const Icon = icons[app.id]
            return (
              <MotionItem key={app.id} className="h-full">
                <Card className="app-card h-full">
                  <CardHeader className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="app-card-icon" aria-hidden>
                        <Icon className="size-4" />
                      </span>
                      <Badge variant={statusVariant(app.status)}>{app.statusLabel}</Badge>
                    </div>
                    <CardTitle className="text-lg">{app.title}</CardTitle>
                    <CardDescription className="mt-1">{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-col items-start gap-1 px-5 pb-5">
                    {app.disabled || !app.href ? (
                      <span className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground">
                        {app.cta}
                      </span>
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
                      <Button asChild variant="link" className="h-8 px-0">
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
