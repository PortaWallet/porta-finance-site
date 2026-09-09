import { ArrowDown, ArrowDownToLine, ArrowRight, Send, Wallet } from 'lucide-react'
import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HOW } from '@/content/copy'

const STEP_ICONS = {
  'Create or import': Wallet,
  'Receive assets': ArrowDownToLine,
  'Send and review swaps': Send,
} as const

export function How() {
  return (
    <MotionSection id="how" className="section-y section-band">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-2">{HOW.eyebrow}</p>
        <h2 className="section-title max-w-2xl">{HOW.title}</h2>
        <MotionStagger className="how-flow mt-8">
          {HOW.steps.map((step, index) => {
            const Icon = STEP_ICONS[step.title]
            return (
              <div key={step.title} className="how-flow-step">
                {index > 0 ? (
                  <span className="how-flow-arrow" aria-hidden>
                    <ArrowRight className="how-flow-arrow-across size-4" />
                    <ArrowDown className="how-flow-arrow-down size-4" />
                  </span>
                ) : null}
                <MotionItem className="h-full min-w-0 flex-1">
                  <Card className="app-card h-full">
                    <CardHeader className="p-5">
                      <span className="app-card-icon" aria-hidden>
                        <Icon className="size-4" />
                      </span>
                      <CardTitle className="mt-3 text-lg">{step.title}</CardTitle>
                      <CardDescription className="mt-1.5 leading-relaxed">
                        {step.body}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </MotionItem>
              </div>
            )
          })}
        </MotionStagger>
      </div>
    </MotionSection>
  )
}
