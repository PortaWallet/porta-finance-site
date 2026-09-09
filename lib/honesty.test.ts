import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { HOLDS, PUBLISH_HOLD } from '@/content/holds'
import {
  FLAGS,
  isOneTapAcceptEnabled,
  isF64Live,
  isRetailCtaAllowed,
} from '@/lib/flags'
import {
  LINKEDIN_URL,
  OFFICIAL_LINKS,
  PRIMARY_CTA_LABEL,
  SOFT_TIP,
  TG_CHANNEL_URL,
  TG_NEWS_URL,
  YOUTUBE_URL,
} from '@/lib/site'

const LIVE_TIP = '00044-47z'
const STALE_TIPS = [
  '00027-5zg',
  '00034-6vs',
  '00036-8zr',
  '00037-d46',
  '00038-lzb',
  '00039-42b',
  '00041-rt9',
  '00042-n4v',
  '00043-2qj',
] as const
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const COPY_SOURCES = [
  'lib/site.ts',
  'lib/seo.ts',
  'lib/flags.ts',
  'lib/brand.ts',
  'content/copy.ts',
  'content/apps.ts',
  'content/roadmap.ts',
  'content/holds.ts',
  'components/apps.tsx',
  'components/hero.tsx',
  'components/hero-graphic.tsx',
  'components/site-footer.tsx',
  'components/official-links.tsx',
  'components/roadmap.tsx',
  'components/how.tsx',
  'components/trust.tsx',
  'components/contact.tsx',
  'components/site-nav.tsx',
  'app/layout.tsx',
  'app/page.tsx',
  'PLAN.md',
  'README.md',
  '.github/workflows/preview.yml',
  'lib/preview.ts',
] as const

const RETAIL_CTA = /Swap now|Bridge now|Confirm swap|Accept all|AcceptAll/i

describe('soft tip honesty', () => {
  it(`SOFT_TIP is exactly ${LIVE_TIP}`, () => {
    expect(SOFT_TIP).toBe(LIVE_TIP)
  })

  it('owned copy sources do not mention stale tips', () => {
    for (const rel of COPY_SOURCES) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      for (const stale of STALE_TIPS) {
        expect(text, `${rel} · ${stale}`).not.toContain(stale)
      }
    }
  })

  it('marketing sources do not contain X / Twitter hrefs', () => {
    for (const rel of COPY_SOURCES) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).not.toMatch(/x\.com|twitter\.com/i)
    }
  })

  it('does not claim gasless, MEV-proof, or F6.4 as shipped', () => {
    const liveSources = [
      'lib/site.ts',
      'lib/seo.ts',
      'content/copy.ts',
      'content/apps.ts',
      'components/apps.tsx',
      'components/hero.tsx',
      'components/hero-graphic.tsx',
      'components/site-footer.tsx',
      'components/contact.tsx',
      'components/official-links.tsx',
    ] as const
    for (const rel of liveSources) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).not.toMatch(/is MEV-proof|MEV-proof wallet/i)
      expect(text, rel).not.toMatch(/is gasless|fully gasless/i)
      expect(text, rel).not.toMatch(/F6\.4/)
    }
  })

  it('forbids retail execution CTAs in product UI and content', () => {
    const marketing = COPY_SOURCES.filter(
      (rel) => !rel.endsWith('.md'),
    )
    for (const rel of marketing) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).not.toMatch(RETAIL_CTA)
    }
  })

  it('nav is Apps · Roadmap · Official · Contact · Open in Telegram', () => {
    const nav = readFileSync(resolve(ROOT, 'components/site-nav.tsx'), 'utf8')
    const copy = readFileSync(resolve(ROOT, 'content/copy.ts'), 'utf8')
    expect(copy).toContain("href: '#apps'")
    expect(copy).toContain("href: '#roadmap'")
    expect(copy).toContain("href: '#official'")
    expect(copy).toContain("href: '#contact'")
    expect(copy).toContain("label: 'Official'")
    expect(copy).toContain("label: 'Contact'")
    expect(nav).toContain('PRIMARY_CTA_LABEL')
    expect(nav).toContain('TG_BOT_URL')
    expect(nav).toContain('NAV_LINKS')
    expect(nav).not.toContain("label: 'Open bot'")
    expect(nav).not.toContain("label: 'Follow'")
    expect(nav).not.toMatch(/x\.com|twitter\.com/i)
    expect(PRIMARY_CTA_LABEL).toBe('Open in Telegram')
  })

  it('contact is hello@porta.finance only — Talk to Porta, no form, no support@', () => {
    const contact = readFileSync(resolve(ROOT, 'components/contact.tsx'), 'utf8')
    expect(contact).toContain('id="contact"')
    expect(contact).toContain('CONTACT.title')
    expect(contact).toContain('Email {CONTACT_EMAIL}')
    expect(contact).toContain('CONTACT_MAILTO')
    expect(contact).not.toContain('support@')
    expect(contact).not.toMatch(/<form/i)
    const copy = readFileSync(resolve(ROOT, 'content/copy.ts'), 'utf8')
    expect(copy).toContain('Talk to Porta')
    expect(copy).toContain('Never send seeds')
    const footer = readFileSync(resolve(ROOT, 'components/site-footer.tsx'), 'utf8')
    expect(footer).toContain('CONTACT_EMAIL')
    expect(footer).toContain('FOOTER.legal')
    expect(footer).not.toContain('support@')
    const footerCopy = readFileSync(resolve(ROOT, 'content/copy.ts'), 'utf8')
    expect(footerCopy).toContain('© 2026 DracoLabs Ltd')
  })

  it('how is Create → Fund → Review and apps H2 is Where Porta lives', () => {
    const how = readFileSync(resolve(ROOT, 'content/copy.ts'), 'utf8')
    expect(how).toContain('Create → Fund → Review')
    expect(how).toContain("title: 'Create'")
    expect(how).toContain("title: 'Fund'")
    expect(how).toContain("title: 'Review'")
    const apps = readFileSync(resolve(ROOT, 'content/apps.ts'), 'utf8')
    expect(apps).toContain('Where Porta lives')
    expect(apps).toContain('review swaps')
    expect(apps).toContain('Telegram Mini App')
    expect(apps).toContain('Browser extension')
    expect(apps).toContain("title: 'Mobile'")
  })

  it('roadmap H2 is What’s next with locked JTBD Coming titles', () => {
    const roadmap = readFileSync(resolve(ROOT, 'content/roadmap.ts'), 'utf8')
    expect(roadmap).toContain('What’s next')
    expect(roadmap).toContain('Coming · not live')
    expect(roadmap).toContain('Not live yet')
    expect(roadmap).toContain('See every swap before you confirm')
    expect(roadmap).toContain('Alerts that open a review — not a trade')
    expect(roadmap).toContain('Optional protected swaps')
    expect(roadmap).toContain('Recovery & session limits')
    expect(roadmap).toContain('Advanced trading later')
    expect(roadmap).not.toMatch(/F6\.|G1–G8|Phase 1/)
  })

  it('R1/R2: locked H1 positions AA wallet + Telegram Mini App first', () => {
    const hero = readFileSync(resolve(ROOT, 'components/hero.tsx'), 'utf8')
    const copy = readFileSync(resolve(ROOT, 'content/copy.ts'), 'utf8')
    const h1 = hero.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? ''
    const h1Text = h1.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    expect(h1Text).toBe('AA smart-contract wallet — first in Telegram')
    expect(copy).toContain("h1: 'AA smart-contract wallet — first in Telegram'")
    expect(copy).toContain(
      'Independent AA smart-contract wallet · not a Telegram product',
    )
    expect(copy).toContain("secondaryCta: 'Open Mini App'")
    expect(copy).toContain('PRIMARY_CTA_LABEL')
    const layout = readFileSync(resolve(ROOT, 'app/layout.tsx'), 'utf8')
    expect(layout).toContain('SITE_TITLE')
    const seo = readFileSync(resolve(ROOT, 'lib/seo.ts'), 'utf8')
    expect(seo).toContain('Porta — AA smart-contract wallet')
    expect(seo).not.toContain('Telegram-native')
  })

  it('R3: one Live · dogfood chip; no run.app paragraph in hero', () => {
    const hero = readFileSync(resolve(ROOT, 'components/hero.tsx'), 'utf8')
    const copy = readFileSync(resolve(ROOT, 'content/copy.ts'), 'utf8')
    expect(copy.match(/Live · dogfood/g)).toHaveLength(1)
    expect(hero).toContain('HERO.status')
    expect(hero).not.toContain('run.app')
    expect(hero).not.toContain('Cloud Run')
    expect(hero).toContain('<HeroGraphic')
  })

  it('R6: portal + ring figcaption is Brand art · Coming — not a live network list', () => {
    const graphic = readFileSync(
      resolve(ROOT, 'components/hero-graphic.tsx'),
      'utf8',
    )
    expect(graphic).toContain('BRAND.portalHero')
    expect(graphic).toContain('BRAND.ring')
    const brand = readFileSync(resolve(ROOT, 'lib/brand.ts'), 'utf8')
    expect(brand).toContain("/brand/portal-hero.webp")
    expect(brand).toContain('/brand/multichain-ring.svg')
    expect(graphic).toContain('Brand art')
    expect(graphic).toContain('Coming')
    expect(graphic).toContain('not a live network list')
    expect(graphic).not.toMatch(/Ethereum|CHAINS|12 EVM|name dump/i)
  })

  it('R5: APK / mobile is Dogfood or Coming, never Live', () => {
    const apps = readFileSync(resolve(ROOT, 'content/apps.ts'), 'utf8')
    expect(apps).toContain("title: 'Mobile'")
    expect(apps).toContain("'Dogfood'")
    expect(apps).not.toMatch(/id: 'mobile'[\s\S]{0,220}status: 'live'/)
  })

  it('official surfaces are locked and include LinkedIn + YouTube (no X)', () => {
    expect(TG_CHANNEL_URL).toBe('https://t.me/PortaWallet')
    expect(TG_NEWS_URL).toBe('https://t.me/PortaNews')
    expect(LINKEDIN_URL).toBe('https://www.linkedin.com/company/portawallet')
    expect(YOUTUBE_URL).toBe('https://www.youtube.com/@PortaWallet')
    const hrefs = OFFICIAL_LINKS.map((link) => link.href)
    expect(hrefs).toEqual([
      'mailto:hello@porta.finance',
      'https://www.porta.finance',
      'https://t.me/PortaWallet_bot',
      'https://t.me/PortaWallet',
      'https://t.me/PortaNews',
      'https://www.linkedin.com/company/portawallet',
      'https://www.youtube.com/@PortaWallet',
    ])
    expect(hrefs.join(' ')).not.toMatch(/x\.com|twitter\.com/i)
  })

  it('footer + apps render the official-links set', () => {
    const official = readFileSync(
      resolve(ROOT, 'components/official-links.tsx'),
      'utf8',
    )
    expect(official).toContain('OFFICIAL_LINKS')
    for (const rel of [
      'components/site-footer.tsx',
      'components/apps.tsx',
    ] as const) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).toContain('OfficialLinks')
    }
    const apps = readFileSync(resolve(ROOT, 'components/apps.tsx'), 'utf8')
    expect(apps).toContain('TG_CHANNEL_URL')
    expect(apps).toContain('TG_NEWS_URL')
    expect(apps).toContain('LINKEDIN_URL')
    expect(apps).toContain('YOUTUBE_URL')
    expect(apps).not.toMatch(/run\.app|Cloud Run/)
  })
})

describe('HOLDs', () => {
  it('keeps F6.4, retail FF, and AcceptAll off', () => {
    expect(HOLDS.F6_4).toBe(false)
    expect(HOLDS.RETAIL_FEATURE_FLAGS).toBe(false)
    expect(HOLDS.ACCEPT_ALL).toBe(false)
    expect(FLAGS.f64).toBe(false)
    expect(FLAGS.retailFeatureFlags).toBe(false)
    expect(FLAGS.oneTapAccept).toBe(false)
    expect(isF64Live()).toBe(false)
    expect(isRetailCtaAllowed()).toBe(false)
    expect(isOneTapAcceptEnabled()).toBe(false)
    expect(PUBLISH_HOLD).toBe(true)
  })
})
