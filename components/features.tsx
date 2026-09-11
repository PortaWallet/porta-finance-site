import { ArrowLeftRight, Inbox, KeyRound, Send, ShieldCheck } from 'lucide-react'
import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FEATURES } from '@/content/copy'

const icons = {
  Send,
  Receive: Inbox,
  Review: ShieldCheck,
  Agents: KeyRound,
  Bridge: ArrowLeftRight,
} as const

export function Features() {
  return (
    <MotionSection id="features" className="section-y">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-2">{FEATURES.eyebrow}</p>
        <h2 className="section-title max-w-xl">{FEATURES.title}</h2>
        <MotionStagger className="mt-8 grid gap-4 sm:grid-cols-2">
          {FEATURES.items.map((item) => {
            const Icon = icons[item.title]
            return (
              <MotionItem key={item.title} className="h-full">
                <Card className="app-card h-full">
                  <CardHeader className="flex flex-row items-start gap-4 p-5">
                    <span className="app-card-icon mt-0.5" aria-hidden>
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
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
