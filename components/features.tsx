import { ArrowLeftRight, Inbox, Send, ShieldCheck } from 'lucide-react'
import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
        <MotionStagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.items.map((item) => {
            const Icon = icons[item.title]
            return (
              <MotionItem key={item.title} className="h-full">
                <Card className="app-card h-full">
                  <CardHeader className="p-5">
                    <span className="app-card-icon mb-3" aria-hidden>
                      <Icon className="size-4" />
                    </span>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <CardDescription>{item.body}</CardDescription>
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
