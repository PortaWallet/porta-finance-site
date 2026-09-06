import { MotionSection } from './MotionSection'
import BrandImg from './BrandImg'
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
      className="section-void scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Coming · not live</p>
            <h2 className="section-title">What’s next</h2>
            <p className="mt-4 text-base leading-relaxed text-porta-muted">
              Ambitions with receipts. Nothing below is live on soft tip{' '}
              {SOFT_TIP}.
            </p>
          </div>
          <span className="rounded-full border border-porta-lavender/40 bg-porta-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-porta-lavender">
            Not live yet
          </span>
        </div>

        <ol className="relative space-y-0 pl-8 sm:pl-12">
          <span
            aria-hidden
            className="timeline-rail absolute left-[0.55rem] top-3 bottom-3 w-px sm:left-[0.7rem]"
          />
          {items.map((item) => (
            <li key={item.title} className="relative pb-8 last:pb-0">
              <span
                aria-hidden
                className="energy-node absolute -left-[0.05rem] top-8 h-3.5 w-3.5 rounded-full sm:left-[0.1rem] sm:h-4 sm:w-4"
              />
              <article className="panel panel-magenta rounded-3xl p-6 sm:p-7">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <BrandImg
                    src="/portal-mark.png"
                    alt=""
                    width={18}
                    height={18}
                    decoding="async"
                    className="h-[18px] w-[18px] rounded-full object-cover"
                  />
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
