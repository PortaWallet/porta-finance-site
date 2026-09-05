import { MotionSection, MotionStagger, MotionItem } from './MotionSection'

const TG_BOT = 'https://t.me/PortaWallet_bot'
const MINI_APP =
  'https://production-wallet-telegram-omytp43vwa-ew.a.run.app'

type LiveCard = {
  title: string
  description: string
  status: 'live' | 'soon'
  href?: string
  cta: string
  disabled?: boolean
  download?: boolean
}

const cards: LiveCard[] = [
  {
    title: 'Telegram bot',
    description: 'Talk to Porta in chat — wallet create/import and core flows.',
    status: 'live',
    href: TG_BOT,
    cta: 'Open @PortaWallet_bot',
  },
  {
    title: 'Mini App',
    description:
      'Full Telegram Mini App — balances, send, and swap review. Tip 00027-5zg until DevOps cutover URL change.',
    status: 'live',
    href: MINI_APP,
    cta: 'Open Mini App',
  },
  {
    title: 'Chrome extension',
    description: 'Browser wallet for day-to-day use alongside Telegram.',
    status: 'soon',
    cta: 'Chrome Web Store Unlisted — dogfood soon',
    disabled: true,
  },
  {
    title: 'Android APK',
    description:
      'Dogfood placeholder build for sideload testing — not a Play Store release.',
    status: 'live',
    href: '/downloads/porta-wallet.apk',
    cta: 'Download dogfood APK',
    download: true,
  },
]

function CardInner({ card }: { card: LiveCard }) {
  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-porta-text">{card.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
            card.status === 'live'
              ? 'bg-porta-accent/15 text-porta-accent ring-1 ring-porta-accent/25'
              : 'bg-white/5 text-porta-muted ring-1 ring-white/10'
          }`}
        >
          {card.status === 'live' ? 'Live' : 'Soon'}
        </span>
      </div>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-porta-muted">
        {card.description}
      </p>
      <span
        className={`inline-flex text-sm font-medium ${
          card.disabled
            ? 'cursor-not-allowed text-porta-muted'
            : 'text-porta-accent group-hover:underline'
        }`}
      >
        {card.cta}
        {!card.disabled && (
          <span aria-hidden className="ml-1">
            →
          </span>
        )}
      </span>
    </>
  )
}

export default function LiveNow() {
  return (
    <MotionSection id="live" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-porta-accent">
            Live &amp; dogfood entry points
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-porta-text sm:text-3xl">
            Get Porta
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-porta-muted sm:text-base">
            What you can use today. Porta is in active dogfood — tip context{' '}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-porta-accent">
              00027-5zg
            </code>
            . Expect polish, not perfection. No seed phrases or keys are ever
            published here.
          </p>
        </div>

        <MotionStagger className="grid auto-rows-fr gap-4 sm:grid-cols-2">
          {cards.map((card) => {
            const shell =
              'glass group flex h-full flex-col rounded-2xl p-5 transition duration-200 sm:p-6'

            if (card.disabled || !card.href) {
              return (
                <MotionItem key={card.title} className="h-full">
                  <div className={`${shell} cursor-not-allowed opacity-75`}>
                    <CardInner card={card} />
                  </div>
                </MotionItem>
              )
            }

            const isExternal = card.href.startsWith('http')
            return (
              <MotionItem key={card.title} className="h-full">
                <a
                  href={card.href}
                  className={`${shell} hover:border-porta-primary/40 hover:primary-glow`}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  {...(card.download ? { download: 'porta-wallet.apk' } : {})}
                >
                  <CardInner card={card} />
                </a>
              </MotionItem>
            )
          })}
        </MotionStagger>
      </div>
    </MotionSection>
  )
}
