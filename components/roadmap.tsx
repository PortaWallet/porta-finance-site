import { MotionSection } from '@/components/motion-section'
import { Badge } from '@/components/ui/badge'
import { ROADMAP } from '@/content/roadmap'

export function Roadmap() {
  return (
    <MotionSection id="roadmap" className="section-y">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">{ROADMAP.eyebrow}</p>
            <h2 className="section-title">{ROADMAP.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {ROADMAP.lede}
            </p>
          </div>
          <Badge variant="coming">{ROADMAP.badge}</Badge>
        </div>

        <ol className="grid gap-4">
          {ROADMAP.items.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-border bg-card px-4 py-3"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold tracking-wider text-muted-foreground tabular-nums">
                  {item.n}
                </span>
                <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                  {item.title}
                </h3>
                <Badge variant="coming" className="ml-auto">
                  Coming
                </Badge>
              </div>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </MotionSection>
  )
}
