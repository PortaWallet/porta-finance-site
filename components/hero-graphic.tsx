import Image from 'next/image'
import { BRAND } from '@/lib/brand'
import { TG_BOT_HANDLE } from '@/lib/site'
import { cn } from '@/lib/utils'

export function ReviewPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-full rounded-xl border border-border bg-card/95 shadow-[0_16px_48px_oklch(0.2_0.03_265/0.14)] backdrop-blur-md',
        className,
      )}
    >
      <div className="flex min-h-10 items-center gap-2 border-b border-border px-3 py-2">
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

      <div className="space-y-2 px-3 py-3">
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
        <p className="rounded-lg bg-muted/60 px-3 py-2 text-xs leading-snug">
          Create or import a wallet. Keys stay on your device.
        </p>
        <p className="ml-auto max-w-[92%] rounded-lg border border-border px-3 py-2 text-xs leading-snug">
          Review this swap before I confirm.
        </p>
      </div>

      <p className="border-t border-border px-3 py-2 text-[11px] font-medium text-muted-foreground">
        Review first · no balances invented
      </p>
    </div>
  )
}

export function HeroGraphic() {
  return (
    <figure className="relative mx-auto hidden w-full min-h-0 lg:block lg:min-h-[26rem]">
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

      <ReviewPanel className="relative z-10 mt-[18%] w-[min(100%,20rem)]" />
      <figcaption className="relative z-10 mt-4 text-left text-xs leading-snug text-muted-foreground">
        Brand art ·{' '}
        <span className="font-semibold tracking-wide uppercase">Coming</span>
        {' — '}
        not a live network list
      </figcaption>
    </figure>
  )
}
