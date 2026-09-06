import { MotionSection, MotionStagger, MotionItem } from './MotionSection'
import OfficialLinks from './OfficialLinks'
import {
  SITE_HOST,
  SITE_URL,
  SOFT_TIP,
  TG_BOT_HANDLE,
  TG_BOT_URL,
  TG_CHANNEL_HANDLE,
  TG_CHANNEL_URL,
  TG_NEWS_HANDLE,
  TG_NEWS_URL,
  LINKEDIN_LABEL,
  LINKEDIN_URL,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
  MINI_APP_URL,
  APK_AVAILABLE,
  APK_HREF,
} from '../lib/site'

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
    description: `Primary dogfood entry. Create or import, then send and review swaps in chat — not auto-trade.`,
    status: 'live',
    href: TG_BOT_URL,
    cta: `Open ${TG_BOT_HANDLE}`,
  },
  {
    title: 'Mini App',
    description: `Telegram WebView of the same dogfood wallet (Cloud Run host on run.app). Soft dogfood tip ${SOFT_TIP}. Primary entry is still ${TG_BOT_HANDLE} — not a separate launch.`,
    status: 'live',
    href: MINI_APP_URL,
    cta: 'Open Mini App',
  },
  {
    title: 'Chrome extension',
    description: 'Browser wallet for day-to-day use alongside Telegram.',
    status: 'soon',
    cta: 'Chrome Web Store Unlisted — dogfood soon',
    disabled: true,
  },
  ...(APK_AVAILABLE
    ? [
        {
          title: 'Android APK',
          description:
            'Dogfood placeholder build for sideload testing — not a Play Store release. Not live.',
          status: 'soon' as const,
          href: APK_HREF,
          cta: 'Download dogfood APK',
          download: true,
        } satisfies LiveCard,
      ]
    : []),
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
          {card.status === 'live'
            ? 'Live'
            : card.title === 'Android APK'
              ? 'Dogfood'
              : 'Soon'}
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
    <MotionSection id="live" className="relative scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">Live &amp; dogfood</p>
          <h2 className="section-title">Get Porta</h2>
          <p className="mt-3 text-sm leading-relaxed text-porta-muted sm:text-base">
            What you can use today. Porta is in active dogfood — soft tip{' '}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-porta-accent">
              {SOFT_TIP}
            </code>
            . Primary entry is {TG_BOT_HANDLE}. Expect polish, not perfection. No
            seed phrases or keys are ever published here.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-porta-muted/80">
            Official links only —{' '}
            <a
              href={SITE_URL}
              className="text-porta-text transition hover:text-porta-accent"
            >
              {SITE_HOST}
            </a>
            ,{' '}
            <a
              href={TG_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-accent"
            >
              {TG_BOT_HANDLE}
            </a>
            ,{' '}
            <a
              href={TG_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-accent"
            >
              {TG_CHANNEL_HANDLE}
            </a>
            ,{' '}
            <a
              href={TG_NEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-accent"
            >
              {TG_NEWS_HANDLE}
            </a>
            ,{' '}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-accent"
            >
              {LINKEDIN_LABEL}
            </a>
            , and{' '}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-accent"
            >
              YouTube {YOUTUBE_HANDLE}
            </a>
            . Ignore lookalike accounts (including on X).
          </p>
          <OfficialLinks className="mt-4" />
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
