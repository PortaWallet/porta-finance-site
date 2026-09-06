import { SOFT_TIP, TG_BOT_HANDLE, TG_BOT_URL, MINI_APP_URL } from '../lib/site'
import HeroGraphic from './HeroGraphic'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
      <div aria-hidden className="hero-cosmos pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="glow-particles pointer-events-none absolute inset-0 -z-10" />
      <img
        src="/brand/mesh.svg"
        alt=""
        width={900}
        height={720}
        decoding="async"
        className="pointer-events-none absolute -left-16 top-0 -z-10 h-[120%] w-[78%] max-w-none opacity-40 sm:-left-8 sm:w-[50%] lg:w-[42%]"
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:gap-12">
        <div className="text-center lg:text-left">
          <p className="eyebrow mb-4">Porta Wallet</p>
          <h1 className="text-balance text-[1.875rem] font-bold leading-[1.2] tracking-tight text-porta-text sm:text-5xl sm:leading-[1.1] lg:text-[3.15rem] lg:leading-[1.08]">
            Telegram-native{' '}
            <span className="text-porta-lavender">non-custodial</span> wallet
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-porta-muted lg:mx-0">
            Create or import a wallet, check balances, send, and swap with a
            clear review step — right inside Telegram. Smarter alerts and
            trading are on the roadmap.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center lg:justify-start">
              <a
                href={TG_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full px-6 text-sm sm:w-auto"
              >
                Open {TG_BOT_HANDLE}
              </a>
              <span className="status-live">Live · dogfood</span>
            </div>
            <p className="text-xs leading-relaxed text-porta-text/75 lg:max-w-md">
              Primary entry — start here. Talk to Porta in Telegram chat.
            </p>

            <div className="mt-1 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center lg:justify-start">
              <a
                href={MINI_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full px-6 text-sm sm:w-auto"
              >
                Open Mini App
              </a>
              <span className="status-live">Live · dogfood</span>
            </div>
            <p className="text-xs leading-relaxed text-porta-text/75 lg:max-w-md">
              Same dogfood wallet in Telegram WebView (Google Cloud Run host{' '}
              <code className="rounded bg-white/5 px-1 py-0.5 text-[11px] text-porta-lavender">
                run.app
              </code>
              ). Not a separate product — new users should start at the bot.
            </p>
          </div>

          <p className="tip-chip mt-5">
            Soft dogfood via {TG_BOT_HANDLE} · tip {SOFT_TIP}
          </p>
          <p className="mt-2 text-xs font-medium tracking-wide text-porta-text/70">
            Non-custodial · keys stay on your device
          </p>
        </div>

        <HeroGraphic />
      </div>
    </section>
  )
}
