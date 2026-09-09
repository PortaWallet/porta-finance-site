import { MotionSection } from '@/components/motion-section'
import { AA } from '@/content/copy'

export function AccountAbstraction() {
  return (
    <MotionSection id="aa" className="section-y">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-2">{AA.eyebrow}</p>
        <h2 className="section-title max-w-xl">{AA.title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-snug text-muted-foreground sm:text-base">
          {AA.body}
        </p>
      </div>
    </MotionSection>
  )
}
