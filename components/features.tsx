import { ArrowLeftRight, Inbox, Send, ShieldCheck } from 'lucide-react'
import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FEATURES } from '@/content/copy'

const icons = {
  Send,
  Receive: Inbox,
  Review: ShieldCheck,
  Bridge: ArrowLeftRight,
} as const

export function Features() {
  return (
    <MotionSection id="features" className="section-y">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-2">{FEATURES.eyebrow}</p>
        <h2 className="section-title max-w-xl">{FEATURES.title}</h2>
        <MotionStagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.items.map((item) => {
            const Icon = icons[item.title]
            const status = 'status' in item ? item.status : undefined
            return (
              <MotionItem key={item.title} className="h-full">
                <Card className="app-card h-full">
                  <CardHeader className="p-5">
                    <span className="app-card-icon" aria-hidden>
                      <Icon className="size-4" />
                    </span>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      {status ? <Badge variant="coming">{status}</Badge> : null}
                    </div>
                    <CardDescription className="mt-1.5 leading-relaxed">
                      {item.body}
                    </CardDescription>
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
