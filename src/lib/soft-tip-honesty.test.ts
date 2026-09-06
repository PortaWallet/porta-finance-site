import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { SOFT_TIP, TG_CHANNEL_URL } from './site'

const LIVE_TIP = '00034-6vs'
const STALE_TIP = '00027-5zg'
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..')

/** Marketing copy we own — not a DOM suite. */
const COPY_SOURCES = [
  'src/lib/site.ts',
  'src/components/LiveNow.tsx',
  'src/components/Hero.tsx',
  'src/components/Footer.tsx',
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

  it('official Telegram channel URL is locked and linked from footer + Live now', () => {
    expect(TG_CHANNEL_URL).toBe('https://t.me/PortaWallet')
    const site = readFileSync(resolve(ROOT, 'src/lib/site.ts'), 'utf8')
    expect(site).toContain("export const TG_CHANNEL_URL = 'https://t.me/PortaWallet'")
    for (const rel of [
      'src/components/Footer.tsx',
      'src/components/LiveNow.tsx',
    ] as const) {
      const text = readFileSync(resolve(ROOT, rel), 'utf8')
      expect(text, rel).toContain('TG_CHANNEL_URL')
    }
  })
})
