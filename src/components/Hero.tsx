import { SOFT_TIP, TG_BOT_HANDLE, TG_BOT_URL, MINI_APP_URL } from '../lib/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
      <div aria-hidden className="hero-cosmos pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="glow-particles pointer-events-none absolute inset-0 -z-10" />
      <img
        src="/brand/mesh.svg"
        alt=""
        width={900}
        height={720}
        decoding="async"
        className="pointer-events-none absolute -left-16 top-0 -z-10 h-[120%] w-[78%] max-w-none opacity-50 sm:-left-8 sm:w-[62%] lg:w-[52%]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-5">Porta Wallet</p>
        <h1 className="text-balance text-[1.875rem] font-bold leading-[1.2] tracking-tight text-porta-text sm:text-5xl sm:leading-[1.1] lg:text-[3.4rem] lg:leading-[1.08]">
          Telegram-native{' '}
          <span className="text-porta-lavender">non-custodial</span> wallet
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-porta-muted sm:text-lg">
          Create or import a wallet, check balances, send, and swap with a clear
          review step — right inside Telegram. Smarter alerts and trading are on
          the roadmap.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={TG_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full px-6 text-sm sm:w-auto"
          >
            Open {TG_BOT_HANDLE}
          </a>
          <a
            href={MINI_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full px-6 text-sm sm:w-auto"
          >
            Open Mini App
          </a>
        </div>
        <p className="mt-6 inline-flex items-center rounded-full border border-porta-border/80 bg-porta-surface/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-porta-muted">
          Soft dogfood via {TG_BOT_HANDLE} · tip {SOFT_TIP}
        </p>
        <p className="mt-3 text-xs font-medium tracking-wide text-porta-muted/80">
          Non-custodial · keys stay on your device
        </p>
      </div>
    </section>
  )
}
