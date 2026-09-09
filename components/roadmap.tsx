import { MotionSection } from '@/components/motion-section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ROADMAP } from '@/content/roadmap'

export function Roadmap() {
  return (
    <MotionSection id="roadmap" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">{ROADMAP.eyebrow}</p>
            <h2 className="section-title">{ROADMAP.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {ROADMAP.lede}
            </p>
          </div>
          <Badge variant="coming">{ROADMAP.badge}</Badge>
        </div>

        <ol className="relative space-y-4 pl-1">
          {ROADMAP.items.map((item) => (
            <li key={item.title}>
              <Card>
                <CardHeader className="gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold tracking-wider text-muted-foreground tabular-nums">
                      {item.n}
                    </span>
                    <Badge variant="coming">Coming</Badge>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.body}</CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </MotionSection>
  )
}
