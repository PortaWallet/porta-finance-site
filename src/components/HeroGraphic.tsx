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

export default function HeroGraphic() {
  return (
    <figure className="relative mx-auto w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-[32rem]">
      <div className="relative aspect-square">
        <div aria-hidden className="portal-halo" />
        <img
          src="/brand/multichain-ring.svg"
          alt=""
          width={520}
          height={520}
          decoding="async"
          className="portal-ring absolute inset-0 h-full w-full"
        />
        <img
          src="/brand/portal-hero.webp"
          alt="Porta portal sphere"
          width={256}
          height={256}
          fetchPriority="high"
          decoding="async"
          className="portal-sphere absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs leading-relaxed text-porta-text/80">
        Portal + multichain brand ring ·{' '}
        <span className="font-semibold uppercase tracking-wide text-porta-lavender">
          Coming
        </span>
        {' — '}
        not a live availability list ({CHAINS.length} EVM networks in brand art)
      </figcaption>
    </figure>
  )
}
