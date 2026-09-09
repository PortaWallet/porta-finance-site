import { existsSync, readFileSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { BRAND_ASSET_PATHS } from '@/lib/brand'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

describe('theme-hard brand pack', () => {
  it('required brand assets exist and are non-empty', () => {
    for (const rel of BRAND_ASSET_PATHS) {
      const abs = resolve(ROOT, rel)
      expect(existsSync(abs), rel).toBe(true)
      expect(statSync(abs).size, rel).toBeGreaterThan(200)
    }
  })

  it('tokens use Inter + OKLCH with reduced-motion support', () => {
    const css = readFileSync(resolve(ROOT, 'app/globals.css'), 'utf8')
    expect(css).toContain('oklch(')
    expect(css).toContain('--font-inter')
    expect(css).toContain('prefers-reduced-motion')
    expect(css).toContain('portal-pulse')
    expect(css).toContain('portal-drift')
    expect(css).toContain('min-height: 46vh')
    expect(css).toContain('hero-display')
    expect(css).toContain('.section-y')
    expect(css).not.toContain('.glow-particles')
    const layout = readFileSync(resolve(ROOT, 'app/layout.tsx'), 'utf8')
    expect(layout).toContain('Inter')
    expect(layout).toContain('next/font/google')
  })

  it('motion sections stay visible without whileInView opacity 0', () => {
    const motion = readFileSync(
      resolve(ROOT, 'components/motion-section.tsx'),
      'utf8',
    )
    expect(motion).toContain('initial={false}')
    expect(motion).not.toContain('initial="hidden"')
    expect(motion).not.toContain('whileInView')
    expect(motion).not.toContain('opacity: 0')
  })

  it('hero uses brand pack paths and keeps tip off the public hero', () => {
    const hero = readFileSync(resolve(ROOT, 'components/hero.tsx'), 'utf8')
    expect(hero).toContain('hero-display')
    expect(hero).not.toContain('HERO.tip')
    expect(hero).not.toContain('SOFT_TIP')
    expect(hero).not.toContain('glow-particles')
    expect(hero).not.toMatch(/banner-ultimate-defi-trading-wallet/i)
    const graphic = readFileSync(
      resolve(ROOT, 'components/hero-graphic.tsx'),
      'utf8',
    )
    expect(graphic).toContain('BRAND.portalHero')
    expect(graphic).not.toContain('SOFT_TIP')
  })

  it('does not touch GitHub Pages deploy workflows', () => {
    const pages = readFileSync(resolve(ROOT, '.github/workflows/pages.yml'), 'utf8')
    const deploy = readFileSync(
      resolve(ROOT, '.github/workflows/deploy-pages.yml'),
      'utf8',
    )
    expect(pages).toContain('Deploy GitHub Pages')
    expect(deploy).toContain('Deploy to GitHub Pages')
    const preview = readFileSync(
      resolve(ROOT, '.github/workflows/preview.yml'),
      'utf8',
    )
    expect(preview).toContain('PR preview (HOLD)')
    expect(preview).toContain('publish_branch: preview-pr-')
    expect(preview).toContain('publish_branch: preview/pr-')
    expect(preview).not.toContain('actions/deploy-pages')
    expect(preview).not.toContain('www.porta.finance')
    expect(preview).not.toMatch(/environment:\s*\n\s*name: github-pages/)
  })

  it('does not embed client-side API keys or secrets', () => {
    const sources = [
      'lib/site.ts',
      'lib/seo.ts',
      'app/layout.tsx',
      'app/page.tsx',
      'components/hero.tsx',
      'components/apps.tsx',
    ] as const
    for (const rel of sources) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).not.toMatch(/sk_live|sk_test|NEXT_PUBLIC_[A-Z0-9_]*SECRET/i)
      expect(text, rel).not.toMatch(/apiKey\s*[:=]/i)
    }
  })
})
