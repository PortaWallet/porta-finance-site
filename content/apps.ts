import {
  APK_AVAILABLE,
  APK_HREF,
  MINI_APP_URL,
  TG_BOT_HANDLE,
  TG_BOT_URL,
} from '@/lib/site'

export type AppStatus = 'live' | 'coming' | 'dogfood'

export type AppSurface = {
  id: 'telegram' | 'extension' | 'mobile'
  title: string
  description: string
  status: AppStatus
  statusLabel: string
  href?: string
  cta: string
  disabled?: boolean
  download?: boolean
  secondaryHref?: string
  secondaryCta?: string
}

export const APPS_SECTION = {
  eyebrow: 'Apps',
  title: 'Where Porta lives',
  lede: `What you can use today. Primary entry is ${TG_BOT_HANDLE}. Expect polish, not perfection. No seed phrases or keys are ever published here.`,
} as const

export const APP_SURFACES: readonly AppSurface[] = [
  {
    id: 'telegram',
    title: 'Telegram Mini App',
    description:
      'Primary surface. Open the official bot, then the Mini App — create or import, send, and review swaps in chat. Not auto-trade.',
    status: 'live',
    statusLabel: 'Live · dogfood',
    href: TG_BOT_URL,
    cta: 'Open in Telegram',
    secondaryHref: MINI_APP_URL,
    secondaryCta: 'Open Mini App',
  },
  {
    id: 'extension',
    title: 'Browser extension',
    description:
      'Browser wallet for day-to-day use alongside Telegram. Chrome Web Store Unlisted path is not live.',
    status: 'coming',
    statusLabel: 'Coming',
    cta: 'Coming',
    disabled: true,
  },
  ...(APK_AVAILABLE
    ? [
        {
          id: 'mobile' as const,
          title: 'Mobile',
          description:
            'Placeholder Android APK for sideload testing — not a Play Store or App Store release. Not live.',
          status: 'dogfood' as const,
          statusLabel: 'Dogfood',
          href: APK_HREF,
          cta: 'Download APK',
          download: true,
        } satisfies AppSurface,
      ]
    : [
        {
          id: 'mobile' as const,
          title: 'Mobile',
          description:
            'iOS and Android store apps are not live. No fake store badges.',
          status: 'coming' as const,
          statusLabel: 'Coming',
          cta: 'Coming',
          disabled: true,
        } satisfies AppSurface,
      ]),
]
