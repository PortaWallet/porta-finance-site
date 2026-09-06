import { MotionSection } from './MotionSection'
import BrandImg from './BrandImg'

const steps = [
  {
    n: '01',
    title: 'Create',
    body: 'Create or import a wallet. Keys stay on your device — Porta is non-custodial.',
    tone: 'panel-violet',
  },
  {
    n: '02',
    title: 'Fund',
    body: 'Bring assets you already hold. No live on-ramp claim — move value in when you are ready.',
    tone: 'panel-cyan',
  },
  {
    n: '03',
    title: 'Review',
    body: 'Send and review every swap before you confirm. Soft dogfood — polish in progress.',
    tone: 'panel-magenta',
  },
] as const

export default function How() {
  return (
    <MotionSection
      id="how"
      className="section-cyan scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">How it works</p>
        <h2 className="section-title max-w-xl">Create → Fund → Review</h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className={`panel ${step.tone} rounded-3xl p-6`}>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[11px] font-semibold tabular-nums tracking-wider text-porta-lavender">
                  {step.n}
                </p>
                <BrandImg
                  src="/portal-mark.png"
                  alt=""
                  width={32}
                  height={32}
                  decoding="async"
                  className="h-8 w-8 rounded-full object-cover ring-1 ring-porta-lavender/30"
                />
              </div>
              <h3 className="text-xl font-semibold text-porta-text">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-porta-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </MotionSection>
  )
}
