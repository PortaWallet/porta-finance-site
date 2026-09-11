/** Single source of truth for live-site honesty (soft dogfood tip + entry points). */
export const SOFT_TIP = '00051-xsf'

export const SITE_HOST = 'porta.finance'
export const SITE_URL = 'https://www.porta.finance'

export const CONTACT_EMAIL = 'hello@porta.finance'
export const CONTACT_MAILTO = 'mailto:hello@porta.finance'

export const TG_BOT_HANDLE = '@PortaWallet_bot'
export const TG_BOT_URL = 'https://t.me/PortaWallet_bot'

export const TG_CHANNEL_HANDLE = '@PortaWallet'
export const TG_CHANNEL_URL = 'https://t.me/PortaWallet'

export const TG_NEWS_HANDLE = '@PortaNews'
export const TG_NEWS_URL = 'https://t.me/PortaNews'

export const LINKEDIN_LABEL = 'LinkedIn'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/portawallet'

export const YOUTUBE_HANDLE = '@PortaWallet'
export const YOUTUBE_URL = 'https://www.youtube.com/@PortaWallet'

export const GITHUB_LABEL = 'GitHub'
export const GITHUB_URL = 'https://github.com/PortaWallet'

export const X_HANDLE = '@PortaWallet'
export const X_URL = 'https://x.com/PortaWallet'
export const X_LABEL = `X / Twitter ${X_HANDLE}`

export const MINI_APP_URL =
  'https://production-wallet-telegram-omytp43vwa-ew.a.run.app'

/**
 * Android dogfood APK — never labeled Live, never a store release.
 * Hosted on the Porta-Wallet-Mobile GitHub release asset (not this site).
 * Update both URLs when a newer apk-dogfood-* tag ships.
 */
export const APK_HREF =
  'https://github.com/PortaWallet/Porta-Wallet-Mobile/releases/download/apk-dogfood-20260911-post202/porta_release_00057_82cf1b4.apk'
export const APK_RELEASE_HREF =
  'https://github.com/PortaWallet/Porta-Wallet-Mobile/releases/tag/apk-dogfood-20260911-post202'
export const APK_AVAILABLE = true

/** Official surfaces once (footer). Includes X / Twitter — do not duplicate into Apps. */
export const OFFICIAL_LINKS = [
  { href: CONTACT_MAILTO, label: CONTACT_EMAIL, external: false },
  { href: SITE_URL, label: SITE_HOST, external: false },
  { href: TG_BOT_URL, label: TG_BOT_HANDLE, external: true },
  { href: TG_CHANNEL_URL, label: TG_CHANNEL_HANDLE, external: true },
  { href: TG_NEWS_URL, label: TG_NEWS_HANDLE, external: true },
  { href: LINKEDIN_URL, label: LINKEDIN_LABEL, external: true },
  { href: YOUTUBE_URL, label: `YouTube ${YOUTUBE_HANDLE}`, external: true },
  { href: X_URL, label: X_LABEL, external: true },
] as const

export const PRIMARY_CTA_LABEL = 'Open in Telegram'
