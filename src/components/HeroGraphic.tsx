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
    <figure className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem]">
      <div className="relative aspect-square">
        <img
          src="/brand/multichain-ring.svg"
          alt=""
          width={520}
          height={520}
          decoding="async"
          className="absolute inset-0 h-full w-full"
        />
        <img
          src="/brand/portal-hero.webp"
          alt="Porta portal sphere"
          width={256}
          height={256}
          fetchPriority="high"
          decoding="async"
          className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_0_28px_rgba(0,234,255,0.28)]"
        />
      </div>
      <figcaption className="mt-2 text-center text-xs leading-relaxed text-porta-text/80">
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
