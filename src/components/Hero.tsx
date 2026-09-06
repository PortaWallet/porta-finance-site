import { SOFT_TIP, TG_BOT_HANDLE, TG_BOT_URL, MINI_APP_URL } from '../lib/site'
import HeroGraphic from './HeroGraphic'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <div aria-hidden className="hero-cosmos pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="glow-particles pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="hero-vignette pointer-events-none absolute inset-0 -z-10" />
      <img
        src="/brand/mesh.svg"
        alt=""
        width={900}
        height={720}
        decoding="async"
        className="pointer-events-none absolute -left-24 top-[-8%] -z-10 h-[140%] w-[92%] max-w-none opacity-55 sm:-left-10 sm:w-[62%] lg:w-[48%]"
      />
      <img
        src="/brand/mesh.svg"
        alt=""
        width={900}
        height={720}
        decoding="async"
        className="pointer-events-none absolute -right-32 bottom-[-20%] -z-10 hidden h-[90%] w-[46%] max-w-none rotate-180 opacity-25 lg:block"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,30rem)] lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="mb-5 flex flex-col items-center gap-3 lg:items-start">
            <p className="eyebrow">Porta Wallet</p>
            <p className="independence-chip">
              Independent non-custodial wallet · not a Telegram product
            </p>
          </div>

          <h1 className="text-balance text-[2.15rem] font-bold leading-[1.12] tracking-tight text-porta-text sm:text-5xl sm:leading-[1.08] lg:text-[3.65rem] lg:leading-[1.05]">
            <span className="hero-keyword">Non-custodial</span> wallet — create,
            send, and swap with clear review
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-porta-muted sm:text-lg lg:mx-0">
            Create or import, check balances, send, and review swaps. Use Porta
            via Telegram bot and Mini App. Soft tip dogfood — polish in progress.
          </p>

          <div className="cta-panel mx-auto mt-8 max-w-xl text-left lg:mx-0">
            <div className="mb-4">
              <span className="status-live">Live · dogfood</span>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <a
                  href={TG_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full px-7 text-base sm:w-auto"
                >
                  Open {TG_BOT_HANDLE}
                </a>
                <p className="mt-2 text-xs leading-relaxed text-porta-text/75">
                  Primary entry — start here.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div>
                <a
                  href={MINI_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full px-6 text-sm sm:w-auto"
                >
                  Open Mini App
                </a>
                <p className="mt-2 text-xs leading-relaxed text-porta-text/75">
                  Same wallet in Telegram’s Mini App. Start at the bot if you’re
                  new.
                </p>
              </div>
            </div>
          </div>

          <p className="tip-chip mt-6">
            Soft dogfood via {TG_BOT_HANDLE} · tip {SOFT_TIP}
          </p>
          <p className="mt-3 text-xs font-medium tracking-wide text-porta-text/70">
            Non-custodial · keys stay on your device
          </p>
        </div>

        <HeroGraphic />
      </div>
    </section>
  )
}
