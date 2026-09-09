import Image from 'next/image'
import { Shield } from 'lucide-react'
import { MotionSection } from '@/components/motion-section'
import { Card, CardContent } from '@/components/ui/card'
import { TRUST } from '@/content/copy'
import { BRAND } from '@/lib/brand'

export function Trust() {
  return (
    <MotionSection id="trust" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">{TRUST.eyebrow}</p>
        <h2 className="section-title max-w-2xl">{TRUST.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {TRUST.body}
        </p>
        <Card className="mt-8 max-w-2xl">
          <CardContent className="flex items-center gap-4 pt-6">
            <Image
              src={BRAND.portalMark}
              alt=""
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-full object-cover"
            />
            <p className="text-sm leading-relaxed text-foreground">{TRUST.panel}</p>
            <Shield className="ml-auto hidden size-5 text-muted-foreground sm:block" aria-hidden />
          </CardContent>
        </Card>
      </div>
    </MotionSection>
  )
}
