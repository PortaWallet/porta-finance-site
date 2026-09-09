import {
  APK_AVAILABLE,
  APK_HREF,
  MINI_APP_URL,
  TG_BOT_HANDLE,
  TG_BOT_URL,
} from '@/lib/site'

export type AppStatus = 'live' | 'coming'

export type AppSurface = {
  id: 'telegram' | 'extension' | 'mobile'
  title: string
  description: string
  status: AppStatus
  statusLabel?: string
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
  lede: `Primary entry is ${TG_BOT_HANDLE}. Create or import, receive assets, send, and review swaps.`,
} as const

export const APP_SURFACES: readonly AppSurface[] = [
  {
    id: 'telegram',
    title: 'Telegram Mini App',
    description:
      'Open the official bot, then the Mini App — create or import, send, and review swaps. Not auto-trade.',
    status: 'live',
    href: TG_BOT_URL,
    cta: 'Open in Telegram',
    secondaryHref: MINI_APP_URL,
    secondaryCta: 'Open Mini App',
  },
  {
    id: 'extension',
    title: 'Browser extension',
    description:
      'Browser wallet alongside Telegram. Chrome Web Store Unlisted is not live.',
    status: 'coming',
    statusLabel: 'Coming',
    cta: 'CWS Unlisted soon',
    disabled: true,
  },
  ...(APK_AVAILABLE
    ? [
        {
          id: 'mobile' as const,
          title: 'Mobile',
          description:
            'Android APK for install outside a store. Not a store release.',
          status: 'coming' as const,
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
