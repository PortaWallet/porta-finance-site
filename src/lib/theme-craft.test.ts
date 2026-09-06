import { existsSync, readFileSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { BRAND_ASSET_PATHS } from './brand'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..')

describe('theme-hard brand pack', () => {
  it('required brand assets exist and are non-empty', () => {
    for (const rel of BRAND_ASSET_PATHS) {
      const abs = resolve(ROOT, rel)
      expect(existsSync(abs), rel).toBe(true)
      expect(statSync(abs).size, rel).toBeGreaterThan(200)
    }
  })

  it('tokens steer purple cosmos + cyan CTA, not a cyan flood', () => {
    const css = readFileSync(resolve(ROOT, 'src/index.css'), 'utf8')
    expect(css).toContain('#07060f')
    expect(css).toContain('#7665f5')
    expect(css).toContain('#bc29ff')
    expect(css).toContain('#00eaff')
    expect(css).toContain('#a89eff')
    expect(css).toContain('#141022')
    expect(css).toContain('#1c1530')
    expect(css).toContain('rgba(0, 234, 255, 0.16)')
    expect(css).toContain('linear-gradient(108deg, #00eaff')
    expect(css).not.toContain('.glow-particles')
    expect(css).toContain('prefers-reduced-motion')
    expect(css).toContain('portal-pulse')
    expect(css).toContain('portal-drift')
    expect(css).toContain('min-height: 46vh')
    expect(css).toContain('hero-display')
    expect(css).toContain('section-void')
    expect(css).toContain('section-cyan')
    expect(css).toContain('section-magenta')
  })

  it('hero keeps one tip chip and uses brand pack paths', () => {
    const hero = readFileSync(resolve(ROOT, 'src/components/Hero.tsx'), 'utf8')
    expect(hero.match(/tip \{SOFT_TIP\}/g)).toHaveLength(1)
    expect(hero).toContain('/brand/mesh.svg')
    expect(hero).toContain('/brand/portal-hero.webp')
    expect(hero).toContain('hero-display')
    expect(hero).not.toContain('glow-particles')
    expect(hero).not.toMatch(/banner-ultimate-defi-trading-wallet/i)
  })

  it('does not touch GitHub Pages deploy workflows', () => {
    const pages = readFileSync(resolve(ROOT, '.github/workflows/pages.yml'), 'utf8')
    const deploy = readFileSync(
      resolve(ROOT, '.github/workflows/deploy-pages.yml'),
      'utf8',
    )
    expect(pages).toContain('Deploy GitHub Pages')
    expect(deploy).toContain('Deploy to GitHub Pages')
  })
})
