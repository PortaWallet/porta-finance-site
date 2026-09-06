import { SOFT_TIP, TG_BOT_HANDLE, TG_BOT_URL, MINI_APP_URL } from '../lib/site'
import BrandImg from './BrandImg'
import HeroGraphic from './HeroGraphic'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:pb-28 lg:pt-16">
      <div aria-hidden className="hero-cosmos pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="hero-vignette pointer-events-none absolute inset-0 -z-10" />
      <BrandImg
        src="/brand/mesh.svg"
        alt=""
        width={900}
        height={720}
        decoding="async"
        className="hero-mesh pointer-events-none absolute -left-10 top-[-4%] -z-10 hidden h-[118%] w-[58%] max-w-none sm:block lg:w-[46%]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)] lg:gap-8">
        <div className="relative z-10 text-left">
          <div className="portal-peek lg:hidden" aria-hidden>
            <BrandImg
              src="/brand/portal-hero.webp"
              alt=""
              width={168}
              height={168}
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="mb-5 flex flex-col items-start gap-3">
            <p className="eyebrow">Porta Wallet</p>
            <p className="independence-chip">
              Independent non-custodial wallet · not a Telegram product
            </p>
          </div>

          <h1 className="hero-display text-porta-text">
            <span className="hero-keyword">Non-custodial</span> wallet — create,
            send, and swap with clear review
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-porta-muted sm:text-lg">
            Create or import, check balances, send, and review swaps —
            available in Telegram via bot and Mini App. Soft tip dogfood —
            polish in progress. Alerts and smarter trading are on the roadmap.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={TG_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full px-7 text-base sm:w-auto"
            >
              Open {TG_BOT_HANDLE}
            </a>
            <a
              href={MINI_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-h-11 w-full justify-center text-sm sm:w-auto"
            >
              Open Mini App
            </a>
            <span className="status-live self-start sm:self-center">
              Live · dogfood
            </span>
          </div>

          <p className="tip-chip mt-6">
            Soft dogfood via {TG_BOT_HANDLE} · tip {SOFT_TIP}
          </p>
          <p className="mt-3 text-xs font-medium tracking-wide text-porta-text/80">
            Non-custodial · keys stay on your device
          </p>
        </div>

        <HeroGraphic />
      </div>
    </section>
  )
}
