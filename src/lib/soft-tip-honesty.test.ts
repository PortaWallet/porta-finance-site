import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  LINKEDIN_URL,
  OFFICIAL_LINKS,
  SOFT_TIP,
  TG_CHANNEL_URL,
  TG_NEWS_URL,
  YOUTUBE_URL,
} from './site'

const LIVE_TIP = '00036-8zr'
const STALE_TIPS = ['00027-5zg', '00034-6vs'] as const
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..')

/** Marketing copy we own — not a DOM suite. */
const COPY_SOURCES = [
  'src/lib/site.ts',
  'src/components/LiveNow.tsx',
  'src/components/Hero.tsx',
  'src/components/HeroGraphic.tsx',
  'src/components/Footer.tsx',
  'src/components/OfficialLinks.tsx',
  'src/components/Roadmap.tsx',
  'src/components/How.tsx',
  'src/components/Trust.tsx',
  'src/components/Contact.tsx',
  'src/components/Nav.tsx',
  'src/components/BrandImg.tsx',
  'src/lib/brand.ts',
  'index.html',
  'PLAN.md',
  'DNS-CUTOVER.md',
  'qa/2026-09-06-grok-fe-porta-finance-live-rebrand-baseline.md',
] as const

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
      'src/lib/site.ts',
      'src/components/LiveNow.tsx',
      'src/components/Hero.tsx',
      'src/components/HeroGraphic.tsx',
      'src/components/Footer.tsx',
      'src/components/Contact.tsx',
      'src/components/OfficialLinks.tsx',
    ] as const
    for (const rel of liveSources) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).not.toMatch(/is MEV-proof|MEV-proof wallet/i)
      expect(text, rel).not.toMatch(/is gasless|fully gasless/i)
      expect(text, rel).not.toMatch(/F6\.4/)
    }
  })

  it('nav is Live · Roadmap · Official · Contact · Get Porta', () => {
    const nav = readFileSync(resolve(ROOT, 'src/components/Nav.tsx'), 'utf8')
    expect(nav).toContain("href: '#live'")
    expect(nav).toContain("href: '#roadmap'")
    expect(nav).toContain("href: '#official'")
    expect(nav).toContain("href: '#contact'")
    expect(nav).toContain("label: 'Official'")
    expect(nav).toContain("label: 'Contact'")
    expect(nav).toContain('Get Porta')
    expect(nav).not.toContain("label: 'Open bot'")
    expect(nav).not.toContain("label: 'Follow'")
    expect(nav).not.toContain('TG_BOT_URL')
    expect(nav).not.toMatch(/x\.com|twitter\.com/i)
  })

  it('contact is hello@porta.finance only — Talk to Porta, no form, no support@', () => {
    const contact = readFileSync(resolve(ROOT, 'src/components/Contact.tsx'), 'utf8')
    expect(contact).toContain('id="contact"')
    expect(contact).toContain('Talk to Porta')
    expect(contact).toContain('Email {CONTACT_EMAIL}')
    expect(contact).toContain('CONTACT_MAILTO')
    expect(contact).not.toContain('support@')
    expect(contact).not.toMatch(/<form/i)
    expect(contact).toContain('Never send seeds')
    const footer = readFileSync(resolve(ROOT, 'src/components/Footer.tsx'), 'utf8')
    expect(footer).toContain('CONTACT_EMAIL')
    expect(footer).toContain('© 2026 DracoLabs Ltd')
    expect(footer).not.toContain('support@')
  })

  it('how is Create → Fund → Review and live H2 is Get Porta', () => {
    const how = readFileSync(resolve(ROOT, 'src/components/How.tsx'), 'utf8')
    expect(how).toContain('Create → Fund → Review')
    expect(how).toContain("title: 'Create'")
    expect(how).toContain("title: 'Fund'")
    expect(how).toContain("title: 'Review'")
    const live = readFileSync(resolve(ROOT, 'src/components/LiveNow.tsx'), 'utf8')
    expect(live).toContain('Get Porta')
    expect(live).toContain('review swaps')
  })

  it('roadmap H2 is What’s next with locked JTBD Coming titles', () => {
    const roadmap = readFileSync(resolve(ROOT, 'src/components/Roadmap.tsx'), 'utf8')
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

  it('R1/R2: locked H1 and title — no Telegram-native, no wallet in Telegram', () => {
    const hero = readFileSync(resolve(ROOT, 'src/components/Hero.tsx'), 'utf8')
    const h1 = hero.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? ''
    const h1Text = h1.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    expect(h1Text).toBe(
      'Non-custodial wallet — create, send, and swap with clear review',
    )
    expect(h1).not.toMatch(/in Telegram|Telegram-native/i)
    expect(hero).toContain('Independent non-custodial wallet · not a Telegram product')
    expect(hero).toContain(
      'Create or import, check balances, send, and review swaps —',
    )
    expect(hero).toContain('available in Telegram via bot and Mini App')
    expect(hero).toContain('Alerts and smarter trading are on the roadmap')
    expect(hero).toContain(`tip {SOFT_TIP}`)
    expect(hero).not.toMatch(/ultimate de[fF]i trading wallet/i)
    expect(hero).toContain("Open {TG_BOT_HANDLE}")
    expect(hero).toContain('Open Mini App')
    const html = readFileSync(resolve(ROOT, 'index.html'), 'utf8')
    expect(html).toContain('<title>Porta — non-custodial wallet</title>')
    expect(html).not.toContain('Telegram-native')
    expect(html).not.toContain('wallet in Telegram')
  })

  it('R3: one Live · dogfood chip; no run.app paragraph in hero', () => {
    const hero = readFileSync(resolve(ROOT, 'src/components/Hero.tsx'), 'utf8')
    expect(hero.match(/Live · dogfood/g)).toHaveLength(1)
    expect(hero).not.toContain('run.app')
    expect(hero).not.toContain('Cloud Run')
    expect(hero).toContain('<HeroGraphic')
  })

  it('R6: portal + ring figcaption is Brand art · Coming — not a live network list', () => {
    const graphic = readFileSync(
      resolve(ROOT, 'src/components/HeroGraphic.tsx'),
      'utf8',
    )
    expect(graphic).toContain('/brand/portal-hero.webp')
    expect(graphic).toContain('/brand/multichain-ring.svg')
    expect(graphic).toContain('Brand art')
    expect(graphic).toContain('Coming')
    expect(graphic).toContain('not a live network list')
    expect(graphic).not.toMatch(/Ethereum|CHAINS|12 EVM|name dump/i)
  })

  it('R5: APK is Dogfood/Soon, never Live', () => {
    const live = readFileSync(resolve(ROOT, 'src/components/LiveNow.tsx'), 'utf8')
    expect(live).toContain("title: 'Android APK'")
    expect(live).toContain("status: 'soon'")
    expect(live).toContain("'Dogfood'")
    expect(live).not.toMatch(/Android APK[\s\S]{0,200}status: 'live'/)
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

  it('footer + Live now render the official-links set', () => {
    const official = readFileSync(
      resolve(ROOT, 'src/components/OfficialLinks.tsx'),
      'utf8',
    )
    expect(official).toContain('OFFICIAL_LINKS')
    for (const rel of [
      'src/components/Footer.tsx',
      'src/components/LiveNow.tsx',
    ] as const) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).toContain('OfficialLinks')
    }
    const live = readFileSync(resolve(ROOT, 'src/components/LiveNow.tsx'), 'utf8')
    expect(live).toContain('TG_CHANNEL_URL')
    expect(live).toContain('TG_NEWS_URL')
    expect(live).toContain('LINKEDIN_URL')
    expect(live).toContain('YOUTUBE_URL')
    expect(live).toContain('MINI_APP_URL')
    expect(live).not.toMatch(/run\.app|Cloud Run/)
  })
})
