import Image from 'next/image'
import { BRAND } from '@/lib/brand'
import { SOFT_TIP, TG_BOT_HANDLE } from '@/lib/site'

export function HeroGraphic() {
  return (
    <figure className="relative mx-auto hidden min-h-[28rem] w-full lg:block">
      <div
        aria-hidden
        className="portal-stage pointer-events-none absolute right-[-6%] top-1/2 -translate-y-1/2"
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

      <div className="relative z-10 mt-[22%] w-[min(100%,21rem)] rounded-2xl border border-border bg-card/90 p-0 shadow-[0_24px_80px_oklch(0.2_0.03_270/0.18)] backdrop-blur-md">
        <div className="flex min-h-11 items-center gap-2 border-b border-border px-4 py-3">
          <Image
            src={BRAND.portalMark}
            alt=""
            width={20}
            height={20}
            className="size-5 rounded-full object-cover"
          />
          <p className="flex-1 text-xs font-semibold text-foreground">
            Porta · {TG_BOT_HANDLE}
          </p>
          <span className="size-2 shrink-0 rounded-full bg-primary" />
        </div>

        <div className="space-y-2.5 px-4 py-4">
          <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Review · not auto-trade
          </p>
          <div className="review-row">
            <span className="text-muted-foreground">From</span>
            <span className="font-semibold text-foreground">— · your wallet</span>
          </div>
          <div className="review-row">
            <span className="text-muted-foreground">To</span>
            <span className="font-semibold text-foreground">— · review first</span>
          </div>
          <div className="review-row">
            <span className="text-muted-foreground">Fees</span>
            <span className="font-semibold">Shown before confirm</span>
          </div>
          <p className="rounded-xl bg-muted/60 px-3 py-2 text-[13px] leading-relaxed">
            Create or import a wallet. Keys stay on your device.
          </p>
          <p className="ml-auto max-w-[90%] rounded-xl border border-border px-3 py-2 text-[13px] leading-relaxed">
            Review this swap before I confirm.
          </p>
        </div>

        <p className="border-t border-border px-4 py-3 text-[11px] font-medium text-muted-foreground">
          Soft tip {SOFT_TIP} · no balances invented
        </p>
      </div>
      <figcaption className="relative z-10 mt-5 text-left text-xs leading-relaxed text-muted-foreground">
        Brand art ·{' '}
        <span className="font-semibold tracking-wide uppercase">Coming</span>
        {' — '}
        not a live network list
      </figcaption>
    </figure>
  )
}
