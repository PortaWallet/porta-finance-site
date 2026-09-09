import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HOW } from '@/content/copy'

export function How() {
  return (
    <MotionSection id="how" className="section-y">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-2">{HOW.eyebrow}</p>
        <h2 className="section-title max-w-2xl">{HOW.title}</h2>
        <MotionStagger className="mt-8 grid gap-4 sm:grid-cols-3">
          {HOW.steps.map((step) => (
            <MotionItem key={step.n} className="h-full">
              <Card className="app-card h-full">
                <CardHeader className="p-5">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-primary tabular-nums">
                    {step.n}
                  </p>
                  <CardTitle className="mt-2 text-lg">{step.title}</CardTitle>
                  <CardDescription className="mt-1.5 leading-relaxed">
                    {step.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </MotionSection>
  )
}
