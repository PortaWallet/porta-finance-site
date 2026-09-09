import Image from 'next/image'
import { Shield } from 'lucide-react'
import { MotionSection } from '@/components/motion-section'
import { Card, CardContent } from '@/components/ui/card'
import { TRUST } from '@/content/copy'
import { BRAND } from '@/lib/brand'

export function Trust() {
  return (
    <MotionSection id="trust" className="section-y">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
        <div>
          <p className="eyebrow mb-2">{TRUST.eyebrow}</p>
          <h2 className="section-title max-w-xl">{TRUST.title}</h2>
          <p className="mt-2 max-w-xl text-sm leading-snug text-muted-foreground sm:text-base">
            {TRUST.body}
          </p>
        </div>
        <Card>
          <CardContent className="flex items-center gap-3 pt-4">
            <Image
              src={BRAND.portalMark}
              alt=""
              width={32}
              height={32}
              className="size-8 shrink-0 rounded-full object-cover"
            />
            <p className="text-sm leading-snug text-foreground">{TRUST.panel}</p>
            <Shield className="ml-auto hidden size-4 text-muted-foreground sm:block" aria-hidden />
          </CardContent>
        </Card>
      </div>
    </MotionSection>
  )
}
