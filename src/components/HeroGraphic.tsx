import { TG_BOT_HANDLE } from '../lib/site'

export default function HeroGraphic() {
  return (
    <figure className="relative mx-auto w-full max-w-[22rem] sm:max-w-[28rem] lg:max-w-none">
      <div className="relative min-h-[22rem] sm:min-h-[26rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[18rem] w-[18rem] -translate-x-1/2 opacity-90 sm:h-[22rem] sm:w-[22rem] lg:left-auto lg:right-[-8%] lg:translate-x-0"
        >
          <div className="portal-halo absolute inset-[8%]" />
          <img
            src="/brand/multichain-ring.svg"
            alt=""
            width={352}
            height={352}
            decoding="async"
            className="portal-ring absolute inset-0 h-full w-full"
          />
          <img
            src="/brand/portal-hero.webp"
            alt=""
            width={168}
            height={168}
            fetchPriority="high"
            decoding="async"
            className="portal-sphere absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>

        <div className="product-surface relative z-10 mx-auto mt-[7.5rem] w-[92%] sm:mt-[8.5rem] lg:mx-0 lg:mt-24 lg:w-[88%]">
          <div className="flex min-h-11 items-center gap-2 border-b border-white/8 px-4 py-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-porta-accent/80" />
            <p className="text-xs font-semibold text-porta-text">
              Porta · {TG_BOT_HANDLE}
            </p>
          </div>
          <div className="space-y-3 px-4 py-5">
            <p className="bot-bubble-in">
              Create or import a wallet. Keys stay on your device.
            </p>
            <p className="bot-bubble-out">Review this swap before I confirm.</p>
            <p className="bot-bubble-in">
              Clear review — quotes and fees first. Soft dogfood, polish in
              progress.
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs leading-relaxed text-porta-text/80 lg:text-left">
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
