import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HeroGraphic } from '@/components/hero-graphic'
import { HERO } from '@/content/copy'
import { BRAND } from '@/lib/brand'
import { MINI_APP_URL, TG_BOT_URL } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div aria-hidden className="hero-wash pointer-events-none absolute inset-0 -z-10" />
      <Image
        src={BRAND.mesh}
        alt=""
        width={900}
        height={720}
        className="hero-mesh pointer-events-none absolute top-[-6%] -left-8 -z-10 hidden h-[110%] w-[48%] max-w-none sm:block"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)]">
        <div className="relative z-10 text-left">
          <p className="eyebrow">{HERO.eyebrow}</p>
          <p className="mt-4 inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            {HERO.independence}
          </p>
          <h1 className="hero-display mt-6 text-foreground">
            <span className="hero-keyword">AA smart-contract</span> wallet —
            first in Telegram
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {HERO.lede}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg">
              <a href={TG_BOT_URL} target="_blank" rel="noopener noreferrer">
                {HERO.primaryCta}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={MINI_APP_URL} target="_blank" rel="noopener noreferrer">
                {HERO.secondaryCta}
              </a>
            </Button>
            <Badge variant="live" className="self-start sm:self-center">
              {HERO.status}
            </Badge>
          </div>

          <p className="mt-6 inline-flex rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium">
            {HERO.tip}
          </p>
          <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground">
            {HERO.keys}
          </p>
        </div>

        <HeroGraphic />
      </div>
    </section>
  )
}
