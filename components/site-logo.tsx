import Image from 'next/image'
import { BRAND } from '@/lib/brand'

export function SiteLogo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src={BRAND.portalMark}
        alt=""
        width={28}
        height={28}
        className="size-7 rounded-full object-cover"
        priority
      />
      <span className="text-[15px] font-semibold tracking-[0.18em] text-foreground uppercase">
        Porta
      </span>
    </span>
  )
}
