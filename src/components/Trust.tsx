import { MotionSection } from './MotionSection'
import BrandImg from './BrandImg'
import { useKo } from '../lib/locale'

export default function Trust() {
  const k = useKo()

  return (
    <MotionSection
      id="trust"
      className="section-void scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">{k?.trust.eyebrow ?? 'Trust'}</p>
        <h2 className="section-title max-w-2xl">
          {k?.trust.title ?? 'Keys stay on your device'}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-porta-muted sm:text-lg">
          {k?.trust.body ??
            'Porta is non-custodial. Ethereum smart contract wallet with account abstraction (ERC-4337 / EIP-4337). Every swap is a review — not auto-trade. Soft dogfood: polish in progress, honest claims only.'}
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
            {k?.trust.panel ??
              'Independent wallet. Review every swap. Keys never leave your device.'}
          </p>
        </div>
      </div>
    </MotionSection>
  )
}
