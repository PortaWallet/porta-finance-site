import { Cpu, Fuel, Workflow } from 'lucide-react'
import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AA } from '@/content/copy'

const ICONS = {
  'Smart account': Cpu,
  UserOps: Workflow,
  Sponsorship: Fuel,
} as const

const STATUS = {
  'Smart account': null,
  UserOps: 'Building',
  Sponsorship: 'Not live',
} as const

export function AccountAbstraction() {
  return (
    <MotionSection id="aa" className="section-y section-band">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-2">{AA.eyebrow}</p>
        <h2 className="section-title max-w-2xl">{AA.title}</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {AA.body}
        </p>
        <MotionStagger className="mt-8 grid gap-4 md:grid-cols-3">
          {AA.items.map((item) => {
            const Icon = ICONS[item.title]
            const status = STATUS[item.title]
            return (
              <MotionItem key={item.title} className="h-full">
                <Card className="app-card h-full">
                  <CardHeader className="flex flex-row items-start gap-4 p-5">
                    <span className="app-card-icon mt-0.5" aria-hidden>
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        {status ? <Badge variant="coming">{status}</Badge> : null}
                      </div>
                      <CardDescription className="mt-1.5 leading-relaxed">
                        {item.body}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </MotionItem>
            )
          })}
        </MotionStagger>
      </div>
    </MotionSection>
  )
}
