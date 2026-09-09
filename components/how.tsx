import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HOW } from '@/content/copy'

export function How() {
  return (
    <MotionSection id="how" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">{HOW.eyebrow}</p>
        <h2 className="section-title max-w-xl">{HOW.title}</h2>
        <MotionStagger className="mt-10 grid gap-4 sm:grid-cols-3">
          {HOW.steps.map((step) => (
            <MotionItem key={step.n} className="h-full">
              <Card className="h-full">
                <CardHeader>
                  <p className="text-[11px] font-semibold tracking-wider text-muted-foreground tabular-nums">
                    {step.n}
                  </p>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.body}</CardDescription>
                </CardContent>
              </Card>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </MotionSection>
  )
}
