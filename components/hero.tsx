import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { HeroGraphic } from '@/components/hero-graphic'
import { Button } from '@/components/ui/button'
import { HERO } from '@/content/copy'
import { BRAND } from '@/lib/brand'
import { MINI_APP_URL, TG_BOT_URL } from '@/lib/site'

const HERO_CHIPS = [HERO.keys, HERO.review, HERO.aa, HERO.gas] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-12 sm:px-6 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-20">
      <div aria-hidden className="hero-wash pointer-events-none absolute inset-0 -z-10" />
      <Image
        src={BRAND.mesh}
        alt=""
        width={900}
        height={720}
        className="hero-mesh pointer-events-none absolute top-[-6%] -left-8 -z-10 hidden h-[110%] w-[48%] max-w-none sm:block"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(22rem,1fr)] lg:gap-12">
        <div className="relative z-10 text-left">
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1 className="hero-display mt-4 text-foreground">
            <span className="hero-keyword">AA smart-contract</span> wallet —
            first in Telegram
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {HERO.lede}
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={TG_BOT_URL} target="_blank" rel="noopener noreferrer">
                {HERO.primaryCta}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <a href={MINI_APP_URL} target="_blank" rel="noopener noreferrer">
                {HERO.secondaryCta}
              </a>
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {HERO_CHIPS.map((chip) => (
              <li key={chip} className="chip">
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <HeroGraphic />
      </div>
    </section>
  )
}
