import { MotionSection } from './MotionSection'

/** Brand-pack chain ring — direction only, not a live availability list. */
const CHAINS = [
  'Ethereum',
  'BNB Chain',
  'Arbitrum',
  'Polygon',
  'Avalanche',
  'Optimism',
  'Fantom',
  'zkSync',
  'Linea',
  'Base',
  'Mantle',
  'Scroll',
] as const

export default function Networks() {
  return (
    <MotionSection
      id="networks"
      className="scroll-mt-20 px-4 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2">Brand direction</p>
            <h2 className="text-2xl font-bold tracking-tight text-porta-text sm:text-3xl">
              Multichain <span className="text-porta-lavender">ring</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-porta-muted sm:text-base">
              EVM networks from Porta brand art. This is not a live availability
              list — dogfood today is Telegram-native.
            </p>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-porta-muted">
            Coming
          </span>
        </div>
        <ul className="flex flex-wrap gap-2">
          {CHAINS.map((name) => (
            <li
              key={name}
              className="inline-flex min-h-11 items-center rounded-full border border-porta-border/80 bg-porta-surface/70 px-3.5 text-sm font-medium text-porta-text"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  )
}
