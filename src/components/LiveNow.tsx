import { MotionSection, MotionStagger, MotionItem } from './MotionSection'
import OfficialLinks from './OfficialLinks'
import BrandImg from './BrandImg'
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
import { useKo } from '../lib/locale'

type SideCard = {
  title: string
  description: string
  status: 'soon'
  href?: string
  cta: string
  disabled?: boolean
  download?: boolean
}

const sideCards: SideCard[] = [
  {
    title: 'Chrome extension',
    description: 'Browser wallet for day-to-day use alongside Telegram.',
    status: 'soon',
    cta: 'Chrome Web Store Unlisted — soon',
    disabled: true,
  },
  ...(APK_AVAILABLE
    ? [
        {
          title: 'Android APK',
          description:
            'Placeholder build for sideload testing — not a Play Store release. Not live.',
          status: 'soon' as const,
          href: APK_HREF,
          cta: 'Download APK',
          download: true,
        } satisfies SideCard,
      ]
    : []),
]

export default function LiveNow() {
  const k = useKo()

  return (
    <MotionSection
      id="live"
      className="section-magenta relative scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">Live &amp; dogfood</p>
          <h2 className="section-title">Get Porta</h2>
          <p className="mt-3 text-sm leading-relaxed text-porta-muted sm:text-base">
            {k ? (
              k.live.lede
                .replace('{tip}', SOFT_TIP)
                .replace('{handle}', TG_BOT_HANDLE)
            ) : (
              <>
                What you can use today. Porta is in active review — soft tip{' '}
                <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-porta-primary">
                  {SOFT_TIP}
                </code>
                . Primary entry is {TG_BOT_HANDLE}. Expect polish, not
                perfection. No seed phrases or keys are ever published here.
              </>
            )}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-porta-muted">
            Official links only —{' '}
            <a
              href={SITE_URL}
              className="text-porta-text transition hover:text-porta-primary"
            >
              {SITE_HOST}
            </a>
            ,{' '}
            <a
              href={TG_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-primary"
            >
              {TG_BOT_HANDLE}
            </a>
            ,{' '}
            <a
              href={TG_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-primary"
            >
              {TG_CHANNEL_HANDLE}
            </a>
            ,{' '}
            <a
              href={TG_NEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-primary"
            >
              {TG_NEWS_HANDLE}
            </a>
            ,{' '}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-primary"
            >
              {LINKEDIN_LABEL}
            </a>
            , and{' '}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porta-text transition hover:text-porta-primary"
            >
              YouTube {YOUTUBE_HANDLE}
            </a>
            . Ignore lookalike accounts (including on X).
          </p>
          <OfficialLinks className="mt-4" />
        </div>

        <div className="panel panel-cyan mb-6 rounded-3xl p-6 sm:p-8">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <BrandImg
                src="/portal-mark.png"
                alt=""
                width={28}
                height={28}
                decoding="async"
                className="h-7 w-7 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-porta-text">
                Telegram bot
              </h3>
            </div>
            <span className="status-live">Live</span>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-porta-muted">
            {k?.live.botBody ??
              'Primary entry. Create or import, then send and review swaps in chat — not auto-trade.'}
          </p>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href={TG_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full px-7 text-base sm:w-auto"
            >
              Open {TG_BOT_HANDLE}
            </a>
            <a
              href={MINI_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-h-11 w-full justify-center text-sm sm:w-auto"
            >
              Open Mini App
            </a>
          </div>
        </div>

        <MotionStagger className="grid auto-rows-fr gap-4 sm:grid-cols-2">
          {sideCards.map((card) => {
            const inner = (
              <>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <BrandImg
                      src="/portal-mark.png"
                      alt=""
                      width={20}
                      height={20}
                      decoding="async"
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    <h3 className="text-base font-semibold text-porta-text">
                      {card.title}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-porta-lavender ring-1 ring-porta-lavender/35">
                    {card.title === 'Android APK' ? 'Dogfood' : 'Soon'}
                  </span>
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-porta-muted">
                  {card.title === 'Chrome extension'
                    ? (k?.live.chromeDesc ?? card.description)
                    : card.title === 'Android APK'
                      ? (k?.live.apkDesc ?? card.description)
                      : card.description}
                </p>
                <span
                  className={`inline-flex text-sm font-medium ${
                    card.disabled
                      ? 'cursor-not-allowed text-porta-muted'
                      : 'text-porta-lavender'
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

            if (card.disabled || !card.href) {
              return (
                <MotionItem key={card.title} className="h-full">
                  <div className="panel flex h-full flex-col rounded-3xl p-5 opacity-80 sm:p-6">
                    {inner}
                  </div>
                </MotionItem>
              )
            }

            return (
              <MotionItem key={card.title} className="h-full">
                <a
                  href={card.href}
                  className="panel group flex h-full flex-col rounded-3xl p-5 sm:p-6"
                  {...(card.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  {...(card.download ? { download: 'porta-wallet.apk' } : {})}
                >
                  {inner}
                </a>
              </MotionItem>
            )
          })}
        </MotionStagger>
      </div>
    </MotionSection>
  )
}
