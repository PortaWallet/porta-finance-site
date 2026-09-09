import Image from 'next/image'
import { BRAND } from '@/lib/brand'

export function HeroGraphic() {
  return (
    <figure className="relative mx-auto w-full max-w-sm lg:max-w-none lg:min-h-[26rem]">
      <div
        aria-hidden
        className="portal-stage relative mx-auto"
      >
        <div className="portal-halo absolute inset-[8%]" />
        <Image
          src={BRAND.ring}
          alt=""
          width={520}
          height={520}
          className="portal-ring absolute inset-0 h-full w-full"
        />
        <Image
          src={BRAND.portalHero}
          alt=""
          width={168}
          height={168}
          priority
          className="portal-sphere absolute top-1/2 left-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>
      <figcaption className="relative z-10 mt-4 text-center text-xs leading-snug text-muted-foreground lg:text-left">
        Brand art ·{' '}
        <span className="font-semibold tracking-wide uppercase">Coming</span>
        {' — '}
        not a live network list
      </figcaption>
    </figure>
  )
}
