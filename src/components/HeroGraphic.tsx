import { TG_BOT_HANDLE } from '../lib/site'

export default function HeroGraphic() {
  return (
    <figure className="relative mx-auto w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-none">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-8 h-40 w-40 opacity-80 sm:h-52 sm:w-52"
        >
          <div className="portal-halo absolute inset-0" />
          <img
            src="/brand/multichain-ring.svg"
            alt=""
            width={208}
            height={208}
            decoding="async"
            className="portal-ring absolute inset-0 h-full w-full"
          />
          <img
            src="/brand/portal-hero.webp"
            alt=""
            width={128}
            height={128}
            fetchPriority="high"
            decoding="async"
            className="portal-sphere absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>

        <div className="product-surface relative z-10 mt-10 sm:mt-6">
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-porta-accent/80" />
            <p className="text-xs font-semibold text-porta-text">
              Porta · {TG_BOT_HANDLE}
            </p>
            <span className="ml-auto rounded-full bg-porta-accent/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-porta-accent">
              Live · dogfood
            </span>
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
