import { ROADMAP_PATH } from '@/content/roadmap'

/** Preview-export home href. Empty on the Node/Vercel build. */
export const PREVIEW_EXPORT = process.env.NEXT_PUBLIC_PREVIEW_EXPORT === '1'

export const HOME_HREF = PREVIEW_EXPORT ? './' : '/'
export const ROADMAP_HREF = PREVIEW_EXPORT
  ? `.${ROADMAP_PATH}/`
  : ROADMAP_PATH

/** Hash sections stay on home; absolute paths work from /privacy and /roadmap. */
export function navHref(href: string) {
  if (href.startsWith('#')) return `${HOME_HREF}${href}`
  if (PREVIEW_EXPORT) return href.endsWith('/') ? `.${href}` : `.${href}/`
  return href
}
