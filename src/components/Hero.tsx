import { SOFT_TIP, TG_BOT_HANDLE, TG_BOT_URL, MINI_APP_URL } from '../lib/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            'radial-gradient(ellipse 75% 55% at 50% -8%, rgba(118,101,245,0.22), transparent 58%)',
            'radial-gradient(ellipse 45% 35% at 85% 40%, rgba(35,247,221,0.06), transparent 70%)',
          ].join(', '),
        }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-porta-accent">
          Porta Wallet
        </p>
        <h1 className="text-balance text-4xl font-bold leading-[1.12] tracking-tight text-porta-text sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem]">
          Telegram-native wallet — create, send, and swap with clear review
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
            className="btn-primary w-full px-6 py-3 text-sm sm:w-auto"
          >
            Open {TG_BOT_HANDLE}
          </a>
          <a
            href={MINI_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl border border-porta-border bg-porta-surface/60 px-6 py-3 text-sm font-semibold text-porta-text transition hover:border-porta-primary/45 hover:text-porta-accent sm:w-auto"
          >
            Open Mini App
          </a>
        </div>
        <p className="mt-5 inline-flex items-center rounded-full border border-porta-border/80 bg-porta-surface/50 px-3 py-1 text-[11px] font-medium tracking-wide text-porta-muted">
          Soft dogfood via {TG_BOT_HANDLE} · tip {SOFT_TIP}
        </p>
        <p className="mt-3 text-[11px] font-medium tracking-wide text-porta-muted/80">
          Non-custodial · keys stay on your device
        </p>
      </div>
    </section>
  )
}
