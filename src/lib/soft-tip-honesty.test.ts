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

const LIVE_TIP = '00034-6vs'
const STALE_TIP = '00027-5zg'
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
  'PLAN.md',
] as const

describe('soft tip honesty', () => {
  it(`SOFT_TIP is exactly ${LIVE_TIP}`, () => {
    expect(SOFT_TIP).toBe(LIVE_TIP)
  })

  it(`owned copy sources do not mention stale tip ${STALE_TIP}`, () => {
    for (const rel of COPY_SOURCES) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).not.toContain(STALE_TIP)
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
      'src/components/OfficialLinks.tsx',
    ] as const
    for (const rel of liveSources) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).not.toMatch(/is MEV-proof|MEV-proof wallet/i)
      expect(text, rel).not.toMatch(/is gasless|fully gasless/i)
      expect(text, rel).not.toMatch(/F6\.4/)
    }
  })

  it('hero headline stays Telegram-native non-custodial, not Ultimate DeFi', () => {
    const hero = readFileSync(resolve(ROOT, 'src/components/Hero.tsx'), 'utf8')
    expect(hero).toContain('Telegram-native')
    expect(hero).toContain('non-custodial')
    expect(hero).toContain(`tip {SOFT_TIP}`)
    expect(hero).not.toMatch(/ultimate de[fF]i trading wallet/i)
    expect(hero).toContain("Open {TG_BOT_HANDLE}")
    expect(hero).toContain('Open Mini App')
  })

  it('hero CTAs show Live · dogfood and distinguish bot vs Mini App run.app', () => {
    const hero = readFileSync(resolve(ROOT, 'src/components/Hero.tsx'), 'utf8')
    expect(hero).toContain('Live · dogfood')
    expect(hero).toContain('Primary entry')
    expect(hero).toContain('run.app')
    expect(hero).toContain('start at the bot')
    expect(hero).toContain('<HeroGraphic')
  })

  it('hero graphic uses portal logo + multichain ring and labels Coming', () => {
    const graphic = readFileSync(
      resolve(ROOT, 'src/components/HeroGraphic.tsx'),
      'utf8',
    )
    expect(graphic).toContain('/brand/portal-hero.webp')
    expect(graphic).toContain('/brand/multichain-ring.svg')
    expect(graphic).toContain('Coming')
    expect(graphic).toContain('not a live availability list')
  })

  it('official surfaces are locked and include LinkedIn + YouTube (no X)', () => {
    expect(TG_CHANNEL_URL).toBe('https://t.me/PortaWallet')
    expect(TG_NEWS_URL).toBe('https://t.me/PortaNews')
    expect(LINKEDIN_URL).toBe('https://www.linkedin.com/company/portawallet')
    expect(YOUTUBE_URL).toBe('https://www.youtube.com/@PortaWallet')
    const hrefs = OFFICIAL_LINKS.map((link) => link.href)
    expect(hrefs).toEqual([
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
    expect(live).toContain('run.app')
  })
})
