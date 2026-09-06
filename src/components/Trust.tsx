import { MotionSection } from './MotionSection'
import BrandImg from './BrandImg'

export default function Trust() {
  return (
    <MotionSection
      id="trust"
      className="section-void scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">Trust</p>
        <h2 className="section-title max-w-2xl">Keys stay on your device</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-porta-muted sm:text-lg">
          Porta is non-custodial. Every swap is a review — not auto-trade. Soft
          dogfood: polish in progress, honest claims only.
        </p>
        <div className="panel panel-violet mt-8 flex max-w-2xl items-center gap-4 rounded-3xl p-5">
          <BrandImg
            src="/portal-mark.png"
            alt=""
            width={40}
            height={40}
            decoding="async"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <p className="text-sm leading-relaxed text-porta-text">
            Independent wallet. Review every swap. Keys never leave your device.
          </p>
        </div>
      </div>
    </MotionSection>
  )
}
