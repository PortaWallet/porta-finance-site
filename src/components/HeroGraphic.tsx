import { SOFT_TIP, TG_BOT_HANDLE } from '../lib/site'
import BrandImg from './BrandImg'

export default function HeroGraphic() {
  return (
    <figure className="relative mx-auto hidden w-full lg:block">
      <div className="relative min-h-[40vh]">
        <div
          aria-hidden
          className="portal-stage pointer-events-none absolute right-[-8%] top-1/2 -translate-y-1/2"
        >
          <div className="portal-halo absolute inset-[8%]" />
          <BrandImg
            src="/brand/multichain-ring.svg"
            alt=""
            width={520}
            height={520}
            decoding="async"
            className="portal-ring absolute inset-0 h-full w-full"
          />
          <BrandImg
            src="/brand/portal-hero.webp"
            alt=""
            width={168}
            height={168}
            fetchPriority="high"
            decoding="async"
            className="portal-sphere absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>

        <div className="product-surface relative z-10 ml-0 mt-10 w-[min(100%,22.5rem)]">
          <div className="flex min-h-11 items-center gap-2 border-b border-white/8 px-4 py-3">
            <BrandImg
              src="/portal-mark.png"
              alt=""
              width={20}
              height={20}
              decoding="async"
              className="h-5 w-5 rounded-full object-cover"
            />
            <p className="flex-1 text-xs font-semibold text-porta-text">
              Porta · {TG_BOT_HANDLE}
            </p>
            <span className="h-2 w-2 shrink-0 rounded-full bg-porta-primary shadow-[0_0_8px_rgba(0,234,255,0.7)]" />
          </div>

          <div className="space-y-2.5 px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-porta-lavender">
              Review · not auto-trade
            </p>
            <div className="review-row">
              <span className="text-porta-muted">From</span>
              <span className="font-semibold text-porta-text">— · your wallet</span>
            </div>
            <div className="review-row">
              <span className="text-porta-muted">To</span>
              <span className="font-semibold text-porta-text">— · review first</span>
            </div>
            <div className="review-row">
              <span className="text-porta-muted">Fees</span>
              <span className="font-semibold text-porta-lavender">Shown before confirm</span>
            </div>

            <p className="bot-bubble-in">
              Create or import a wallet. Keys stay on your device.
            </p>
            <p className="bot-bubble-out">Review this swap before I confirm.</p>
            <p className="bot-bubble-in">
              Clear review — quotes and fees first. Soft dogfood, polish in
              progress.
            </p>
          </div>

          <p className="border-t border-white/8 px-4 py-3 text-[11px] font-medium text-porta-muted">
            Soft tip {SOFT_TIP} · no balances invented
          </p>
        </div>
      </div>
      <figcaption className="mt-5 text-left text-xs leading-relaxed text-porta-text/80">
        Brand art ·{' '}
        <span className="font-semibold uppercase tracking-wide text-porta-lavender">
          Coming
        </span>
        {' — '}
        not a live network list
      </figcaption>
    </figure>
  )
}
