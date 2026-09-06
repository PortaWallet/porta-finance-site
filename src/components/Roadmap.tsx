import { MotionSection } from './MotionSection'

const items = [
  {
    n: '01',
    title: 'Swap-trust honesty',
    body: 'Clearer quotes, fees, and review copy so every swap is understandable before you confirm.',
    note: 'Ships when swap-trust work is ready.',
  },
  {
    n: '02',
    title: 'Smart Actions alerts → Review in Porta',
    body: 'Telegram-native alerts that open straight into a review flow inside Porta — the GTM wedge.',
  },
  {
    n: '03',
    title: 'Protected swap (opt-in)',
    body: 'Optional protections around swaps. Never marketed as MEV-proof — honest about what it does and does not cover.',
  },
  {
    n: '04',
    title: 'Account abstraction: recovery & session limits',
    body: 'Social recovery and session limits are in progress. Not gasless today — and we will not claim it is.',
  },
  {
    n: '05',
    title: 'Advanced trading / copy',
    body: 'Strategies and copy-style flows come later. Not the brand lead — wallet trust comes first.',
  },
]

export default function Roadmap() {
  return (
    <MotionSection
      id="roadmap"
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Coming · not live</p>
            <h2 className="text-2xl font-bold tracking-tight text-porta-text sm:text-3xl">
              Roadmap
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-porta-muted sm:text-base">
              Ambitions, clearly labeled. Nothing below is live yet — ship when
              it is ready and honest.
            </p>
          </div>
          <span className="rounded-full border border-porta-border bg-porta-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-porta-muted">
            Not live yet
          </span>
        </div>

        <ol className="relative space-y-4 border-l border-porta-border/80 pl-6 sm:pl-8">
          {items.map((item) => (
            <li key={item.title} className="relative">
              <span
                aria-hidden
                className="absolute -left-[1.9rem] top-5 h-2.5 w-2.5 rounded-full border-2 border-porta-primary bg-porta-bg sm:-left-[2.4rem]"
              />
              <div className="glass rounded-2xl p-5 sm:p-6">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold tabular-nums tracking-wider text-porta-muted/70">
                    {item.n}
                  </span>
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-porta-muted ring-1 ring-white/10">
                    Coming
                  </span>
                </div>
                <h3 className="text-base font-semibold text-porta-text sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-porta-muted">
                  {item.body}
                </p>
                {'note' in item && item.note && (
                  <p className="mt-3 text-xs text-porta-muted/80">{item.note}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </MotionSection>
  )
}
