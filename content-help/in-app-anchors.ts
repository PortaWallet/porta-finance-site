import { PREVIEW_EXPORT } from '@/lib/preview'

/**
 * Learn more hashes from the in-app sheets and the screen headers.
 * Sheet slugs first (six sheets, plus the unlock sheet's secondary link),
 * then the seven screen slugs, in the same order as the apps.
 * Each slug is resolved to a topic and section in `content-help/help.ts`.
 */
export const IN_APP_HELP_SLUGS = [
  'password-setup',
  'unlock',
  'forgot-unlock-password',
  'mandate-review',
  'advanced-swap',
  'metered-grant',
  'send-confirm',
  'send',
  'receive',
  'swap',
  'bridge',
  'mandates',
  'notifications',
  'settings-and-security',
] as const

export type InAppHelpSlug = (typeof IN_APP_HELP_SLUGS)[number]

export type InAppHelpTarget = {
  topic: string
  section: string
}

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
  return (IN_APP_HELP_SLUGS as readonly string[]).includes(slug)
}

/**
 * Path for a help hash. Unknown hashes return undefined so /help stays put.
 * `anchors` is the server-resolved map (`IN_APP_HELP_ANCHORS`).
 */
export function inAppHelpDestination(
  hash: string,
  trailingSlash = PREVIEW_EXPORT,
  anchors: Readonly<Partial<Record<InAppHelpSlug, InAppHelpTarget>>> = {},
): string | undefined {
  const slug = readHelpHash(hash)
  if (!slug || !isInAppHelpSlug(slug)) return undefined
  const target = anchors[slug]
  if (!target) return undefined
  const path = trailingSlash ? `/help/${target.topic}/` : `/help/${target.topic}`
  return `${path}#${target.section}`
}
