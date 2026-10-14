import { PREVIEW_EXPORT } from '@/lib/preview'

/**
 * Learn more hashes from the in-app sheets (INAPP-SHEETS).
 * `/help#<slug>` redirects to `/help/<topic>#<section>`.
 */
export const IN_APP_HELP_ANCHORS = {
  'password-setup': { topic: 'getting-started', section: 'password-setup' },
  unlock: { topic: 'getting-started', section: 'unlock' },
  'forgot-unlock-password': { topic: 'getting-started', section: 'forgot-unlock-password' },
  'mandate-review': { topic: 'mandates', section: 'mandate-review' },
  'advanced-swap': { topic: 'swap', section: 'advanced-swap' },
  'metered-grant': { topic: 'mandates', section: 'metered-grant' },
  'send-confirm': { topic: 'send', section: 'send-confirm' },
} as const

export type InAppHelpSlug = keyof typeof IN_APP_HELP_ANCHORS

const SLUG = /^[a-z0-9-]+$/

function readHelpHash(hash: string): string | undefined {
  const raw = hash.trim()
  const body = raw.startsWith('#') ? raw.slice(1) : raw
  if (!body) return undefined
  let decoded: string
  try {
    decoded = decodeURIComponent(body)
  } catch {
    return undefined
  }
  if (!SLUG.test(decoded)) return undefined
  return decoded
}

export function isInAppHelpSlug(slug: string): slug is InAppHelpSlug {
  return Object.prototype.hasOwnProperty.call(IN_APP_HELP_ANCHORS, slug)
}

/** Path for a help hash. Unknown hashes return undefined so /help stays put. */
export function inAppHelpDestination(
  hash: string,
  trailingSlash = PREVIEW_EXPORT,
): string | undefined {
  const slug = readHelpHash(hash)
  if (!slug || !isInAppHelpSlug(slug)) return undefined
  const target = IN_APP_HELP_ANCHORS[slug]
  const path = trailingSlash ? `/help/${target.topic}/` : `/help/${target.topic}`
  return `${path}#${target.section}`
}
