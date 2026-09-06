import { MotionSection } from './MotionSection'
import { SOFT_TIP } from '../lib/site'

const items = [
  {
    n: '01',
    title: 'See every swap before you confirm',
    body: 'Clearer quotes, fees, and review copy so nothing is a surprise. Swap means review — not auto-trade.',
  },
  {
    n: '02',
    title: 'Alerts that open a review — not a trade',
    body: 'Alerts that land you in a review flow inside Porta. Available via Telegram as a surface — not a Telegram product.',
  },
  {
    n: '03',
    title: 'Optional protected swaps',
    body: 'Opt-in protections around swaps. Never marketed as MEV-proof — honest about what it does and does not cover.',
  },
  {
    n: '04',
    title: 'Recovery & session limits',
    body: 'Recovery and session limits are in progress. Not gasless today — and we will not claim it is.',
  },
  {
    n: '05',
    title: 'Advanced trading later',
    body: 'Strategies and copy-style flows come later. Wallet trust is the brand lead — not a trading slogan.',
  },
] as const

export default function Roadmap() {
  return (
    <MotionSection
      id="roadmap"
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Coming · not live</p>
            <h2 className="text-3xl font-bold tracking-tight text-porta-text sm:text-4xl">
              What’s next
            </h2>
            <p className="mt-4 text-base leading-relaxed text-porta-muted">
              Ambitions with receipts. Nothing below is live on soft tip{' '}
              {SOFT_TIP}.
            </p>
          </div>
          <span className="rounded-full border border-porta-border bg-porta-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-porta-muted">
            Not live yet
          </span>
        </div>

        <ol className="relative space-y-0 border-l border-porta-primary/25 pl-6 sm:pl-10">
          {items.map((item) => (
            <li key={item.title} className="relative pb-8 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[1.95rem] top-7 h-3 w-3 rounded-full border-2 border-porta-primary bg-porta-bg shadow-[0_0_16px_rgba(0,234,255,0.45)] sm:-left-[2.7rem]"
              />
              <article className="glass-elevated rounded-3xl p-6 sm:p-7">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold tabular-nums tracking-wider text-porta-lavender">
                    {item.n}
                  </span>
                  <span className="rounded-full bg-porta-lavender/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-porta-lavender ring-1 ring-porta-lavender/35">
                    Coming
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-porta-text sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-porta-muted">
                  {item.body}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </MotionSection>
  )
}
