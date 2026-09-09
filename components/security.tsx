import { Shield } from 'lucide-react'
import { MotionSection } from '@/components/motion-section'
import { Card, CardContent } from '@/components/ui/card'
import { SECURITY } from '@/content/copy'

export function Security() {
  return (
    <MotionSection id="security" className="section-y">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
        <div>
          <p className="eyebrow mb-2">{SECURITY.eyebrow}</p>
          <h2 className="section-title max-w-xl">{SECURITY.title}</h2>
          <p className="mt-2 max-w-xl text-sm leading-snug text-muted-foreground sm:text-base">
            {SECURITY.body}
          </p>
        </div>
        <Card className="app-card">
          <CardContent className="flex flex-col gap-3 pt-4">
            {SECURITY.items.map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm leading-snug">
                <Shield className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                {item}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </MotionSection>
  )
}
