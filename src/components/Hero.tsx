import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const MINI_APP =
  'https://production-wallet-telegram-omytp43vwa-ew.a.run.app'
const TG_BOT = 'https://t.me/PortaWallet_bot'

export default function Hero() {
  const reduced = usePrefersReducedMotion()
  // Opacity stays 1 for first-paint contrast; only rise on motion
  const initial = reduced ? false : { opacity: 1, y: 16 }
  const animate = { opacity: 1, y: 0 }
  const transition = (delay: number) =>
    reduced
      ? { duration: 0 }
      : { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay }

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
        <motion.p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-porta-accent"
          initial={initial}
          animate={animate}
          transition={transition(0)}
        >
          Porta Wallet
        </motion.p>
        <motion.h1
          className="text-balance text-4xl font-bold leading-[1.12] tracking-tight text-porta-text sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem]"
          initial={initial}
          animate={animate}
          transition={transition(0.06)}
        >
          Telegram-native wallet — create, send, and swap with clear review
        </motion.h1>
        <motion.p
          className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-porta-muted sm:text-lg"
          initial={initial}
          animate={animate}
          transition={transition(0.12)}
        >
          Create or import a wallet, check balances, send, and swap with a clear
          review step — right inside Telegram. Smarter alerts and trading are on
          the roadmap.
        </motion.p>
        <motion.div
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={initial}
          animate={animate}
          transition={transition(0.18)}
        >
          <a
            href={MINI_APP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full px-6 py-3 text-sm sm:w-auto"
          >
            Open Mini App
          </a>
          <a
            href={TG_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl border border-porta-border bg-porta-surface/60 px-6 py-3 text-sm font-semibold text-porta-text transition hover:border-porta-primary/45 hover:text-porta-accent sm:w-auto"
          >
            Open @PortaWallet_bot
          </a>
        </motion.div>
        <motion.p
          className="mt-5 inline-flex items-center rounded-full border border-porta-border/80 bg-porta-surface/50 px-3 py-1 text-[11px] font-medium tracking-wide text-porta-muted"
          initial={initial}
          animate={animate}
          transition={transition(0.24)}
        >
          Non-custodial · keys stay on your device
        </motion.p>
      </div>
    </section>
  )
}
