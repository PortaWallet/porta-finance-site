/**
 * Header hrefs.
 * Hash targets are root-absolute (`/#apps`). On the GitHub Pages export,
 * `HOME_HREF` is `./`, and `./#apps` resolves inside the current directory
 * (`/help/#apps`, `/guides/#apps`) so Apps, Roadmap, and Contact do nothing.
 */
const EXTERNAL = /^(https?:|mailto:|tel:)/i

export function navHref(href: string): string {
  if (EXTERNAL.test(href)) return href
  if (href.startsWith('#')) return `/${href}`
  if (href.startsWith('/')) return href
  const stripped = href.replace(/^\.\//, '')
  return stripped.startsWith('#') ? `/${stripped}` : `/${stripped}`
}

export function normalizePath(pathname: string): string {
  const path = pathname.split('#')[0]?.split('?')[0] ?? '/'
  if (path === '' || path === '/') return '/'
  const trimmed = path.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

/** Fragment id when `href` addresses a hash on `pathname`, otherwise null. */
export function samePageHashId(href: string, pathname: string): string | null {
  const resolved = navHref(href)
  const hashAt = resolved.indexOf('#')
  if (hashAt < 0) return null
  const id = decodeURIComponent(resolved.slice(hashAt + 1))
  if (!id) return null
  const path = resolved.slice(0, hashAt) || '/'
  if (normalizePath(path) !== normalizePath(pathname)) return null
  return id
}
