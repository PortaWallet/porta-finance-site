import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { HOW } from '@/content/copy'

export function How() {
  return (
    <MotionSection id="how" className="section-y">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">{HOW.eyebrow}</p>
        <h2 className="section-title max-w-2xl">{HOW.title}</h2>
        <MotionStagger className="mt-10 grid gap-10 sm:grid-cols-3">
          {HOW.steps.map((step) => (
            <MotionItem key={step.n}>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground tabular-nums">
                {step.n}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </MotionSection>
  )
}
