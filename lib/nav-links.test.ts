import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, extname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { NAV_LINKS } from '@/content/copy'
import { LEGAL_LINKS } from '@/content/legal'
import { navHref, normalizePath, samePageHashId } from '@/lib/nav'
import { CONTACT_MAILTO, OFFICIAL_LINKS, TG_BOT_URL } from '@/lib/site'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const APP_DIR = resolve(ROOT, 'app')

const TEXT_EXT = new Set(['.ts', '.tsx', '.js', '.mjs', '.md', '.css'])
const SKIP_DIR = new Set(['node_modules', '.git', '.next', 'out'])

type Routes = { staticRoutes: Set<string>; patterns: RegExp[] }

function collectAppRoutes(appDir: string): Routes {
  const staticRoutes = new Set<string>()
  const patterns: RegExp[] = []

  function walk(dir: string) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue
      const abs = join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(abs)
        continue
      }
      if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) continue
      const rel = relative(appDir, dir)
      const segments = rel === '' ? [] : rel.split(sep).filter(Boolean)
      const dynamic = segments.some((segment) => segment.startsWith('['))
      if (!dynamic) {
        staticRoutes.add(segments.length === 0 ? '/' : `/${segments.join('/')}`)
        continue
      }
      const body = segments
        .map((segment) => {
          if (segment.startsWith('[...') && segment.endsWith(']')) return '.+'
          if (segment.startsWith('[') && segment.endsWith(']')) return '[^/]+'
          return segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        })
        .join('/')
      patterns.push(new RegExp(`^/${body}$`))
    }
  }

  walk(appDir)
  return { staticRoutes, patterns }
}

function resolves(href: string, routes: Routes): boolean {
  if (/^mailto:/i.test(href)) return /^mailto:[^\s@]+@[^\s@]+$/i.test(href)
  if (/^tel:/i.test(href)) return href.length > 4
  if (/^https?:\/\//i.test(href)) {
    const url = new URL(href)
    return url.hostname.includes('.')
  }
  if (!href.startsWith('/')) return false
  const path = normalizePath(href.split('#')[0] || '/')
  if (routes.staticRoutes.has(path)) return true
  return routes.patterns.some((pattern) => pattern.test(path))
}

function fragmentId(href: string): string | null {
  const hashAt = href.indexOf('#')
  if (hashAt < 0) return null
  const id = href.slice(hashAt + 1)
  return id || null
}

function sourceHasId(id: string): boolean {
  const roots = [resolve(ROOT, 'components'), resolve(ROOT, 'app')]
  const needle = `id="${id}"`
  function walk(dir: string): boolean {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const abs = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (walk(abs)) return true
        continue
      }
      if (!/\.(tsx|ts)$/.test(entry.name)) continue
      if (readFileSync(abs, 'utf8').includes(needle)) return true
    }
    return false
  }
  return roots.some((dir) => walk(dir))
}

describe('nav and footer hrefs', () => {
  const routes = collectAppRoutes(APP_DIR)

  const header = ['/', ...NAV_LINKS.map((link) => navHref(link.href)), TG_BOT_URL]
  const footer = [
    '/help',
    ...LEGAL_LINKS.map((link) => navHref(link.href)),
    ...OFFICIAL_LINKS.map((link) => link.href),
    CONTACT_MAILTO,
  ]

  it('collects real app routes including help', () => {
    expect(routes.staticRoutes.has('/')).toBe(true)
    expect(routes.staticRoutes.has('/help')).toBe(true)
    expect(routes.staticRoutes.has('/guides')).toBe(true)
    expect(routes.staticRoutes.has('/agents')).toBe(true)
    expect(routes.staticRoutes.has('/subscriptions')).toBe(true)
    expect(routes.staticRoutes.has('/privacy')).toBe(true)
    expect(routes.staticRoutes.has('/terms')).toBe(true)
    expect(routes.patterns.some((pattern) => pattern.test('/help/getting-started'))).toBe(true)
  })

  it('resolves every header and footer href to a route or external URL', () => {
    const hrefs = [...header, ...footer]
    expect(hrefs.length).toBeGreaterThan(10)
    for (const href of hrefs) {
      expect(resolves(href, routes), href).toBe(true)
      const id = fragmentId(href)
      if (id) expect(sourceHasId(id), href).toBe(true)
    }
    expect(header).toContain('/#apps')
    expect(header).toContain('/#roadmap')
    expect(header).toContain('/#contact')
    expect(header).toContain('/#official')
    expect(header).toContain('/guides')
    expect(header).toContain('/help')
    expect(footer).toContain('/help')
    expect(footer).toContain('/privacy')
    expect(footer).toContain('/terms')
  })

  it('does not emit directory-relative hashes that stay on the current page', () => {
    expect(navHref('#apps')).toBe('/#apps')
    expect(navHref('#roadmap')).toBe('/#roadmap')
    expect(navHref('#contact')).toBe('/#contact')
    expect(navHref('#official')).toBe('/#official')
    expect(navHref('./#apps')).toBe('/#apps')
    expect(navHref('/guides')).toBe('/guides')
    expect(navHref('/help')).toBe('/help')
    for (const link of NAV_LINKS) {
      expect(navHref(link.href).startsWith('./'), link.label).toBe(false)
      expect(navHref(link.href).startsWith('#'), link.label).toBe(false)
    }
    expect(samePageHashId('/#apps', '/')).toBe('apps')
    expect(samePageHashId('/#roadmap', '/')).toBe('roadmap')
    expect(samePageHashId('/#contact', '/')).toBe('contact')
    expect(samePageHashId('/#official', '/')).toBe('official')
    expect(samePageHashId('/#apps', '/help/')).toBeNull()
    expect(samePageHashId('/#roadmap', '/guides/')).toBeNull()
    expect(samePageHashId('/#contact', '/privacy')).toBeNull()
    expect(samePageHashId('#apps', '/help/')).toBeNull()
  })

  it('wires the header menu and keeps the help footer link', () => {
    const nav = readFileSync(resolve(ROOT, 'components/site-nav.tsx'), 'utf8')
    const footer = readFileSync(resolve(ROOT, 'components/site-footer.tsx'), 'utf8')
    expect(nav).toContain('navHref(link.href)')
    expect(nav).toContain('id="mobile-menu"')
    expect(nav).toContain('<details')
    expect(nav).toContain('Open menu')
    expect(nav).toContain('aria-label="Mobile"')
    expect(nav).toContain('scrollIntoView')
    expect(nav).toContain('href="/"')
    expect(nav).not.toContain('HOME_HREF')
    expect(nav).not.toContain('./#')
    expect(footer).toContain('href="/help"')
    expect(footer).toContain('LEGAL_LINKS')
    expect(footer).toContain('OfficialLinks')
    const motion = readFileSync(resolve(ROOT, 'components/motion-section.tsx'), 'utf8')
    expect(motion).toContain('<section id={id}')
    expect(motion).not.toContain('<motion.section')
  })

  it('has no Sepolia or testnet wording outside the help-center ban', () => {
    const banned = /sepolia|testnet|mainnet is off/i
    function walk(dir: string) {
      for (const name of readdirSync(dir)) {
        if (SKIP_DIR.has(name)) continue
        const abs = join(dir, name)
        if (statSync(abs).isDirectory()) {
          walk(abs)
          continue
        }
        if (name.endsWith('.test.ts') || name === 'package-lock.json') continue
        if (!TEXT_EXT.has(extname(name))) continue
        expect(readFileSync(abs, 'utf8'), relative(ROOT, abs)).not.toMatch(banned)
      }
    }
    walk(ROOT)
  })
})
