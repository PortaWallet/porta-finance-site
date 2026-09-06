import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { copy } from './copy'
import {
  FEATURE_LIST,
  KEYWORDS,
  KEYWORDS_CONTENT,
  KO_URL,
  SEO,
  jsonLdGraph,
} from './seo'
import { SOCIAL_BOARD } from './social-board'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..')

describe('SEO foundation', () => {
  it('locks exact EN and KO title/description and tip 00044-47z', () => {
    expect(SEO.en.title).toBe(
      'Porta Wallet — Non-custodial Crypto Wallet | Soft Dogfood',
    )
    expect(SEO.en.description).toBe(
      'Non-custodial crypto wallet via Telegram bot & Mini App. Create/import, balances, send, review swaps. Soft dogfood tip 00044-47z. Not a Telegram product.',
    )
    expect(SEO.ko.title).toBe(
      'Porta Wallet — 비수탁 암호화폐 지갑 | 소프트 도그푸드',
    )
    expect(SEO.ko.description).toBe(
      '텔레그램 봇·미니앱으로 쓰는 비수탁 크립토 지갑. 생성·가져오기, 잔액, 전송, 스왑 리뷰. 소프트 도그푸드 tip 00044-47z. 텔레그램 제품 아님.',
    )
    expect(SEO.en.description).toContain('00044-47z')
    expect(SEO.ko.description).toContain('00044-47z')
    expect(SEO.ko.h1).toContain('비수탁 지갑')
  })

  it('index.html ships EN meta, hreflang, OG/Twitter, JSON-LD, and crawler tip', () => {
    const html = readFileSync(resolve(ROOT, 'index.html'), 'utf8')
    expect(html).toContain(`<title>${SEO.en.title}</title>`)
    expect(html).toContain(`content="${SEO.en.description}"`)
    expect(html).toContain('rel="canonical" href="https://www.porta.finance/"')
    expect(html).toContain('hreflang="en" href="https://www.porta.finance/"')
    expect(html).toContain('hreflang="ko" href="https://www.porta.finance/ko"')
    expect(html).toContain(
      'hreflang="x-default" href="https://www.porta.finance/"',
    )
    expect(html).toContain('property="og:title"')
    expect(html).toContain('name="twitter:card"')
    expect(html).toContain('application/ld+json')
    expect(html).toContain('"@type": "Organization"')
    expect(html).toContain('"@type": "SoftwareApplication"')
    expect(html).toContain('featureList')
    expect(html).toContain('00044-47z')
    expect(html).not.toMatch(/Bitcoin|\bBTC\b|bit trading/i)
    expect(html).not.toContain('Send LIVE')
  })

  it('robots.txt allows AI bots and points at the www sitemap', () => {
    const robots = readFileSync(resolve(ROOT, 'public/robots.txt'), 'utf8')
    for (const bot of [
      'GPTBot',
      'ClaudeBot',
      'PerplexityBot',
      'Google-Extended',
    ]) {
      expect(robots).toContain(`User-agent: ${bot}`)
      expect(robots).toContain('Allow: /')
    }
    expect(robots).toContain('Host: www.porta.finance')
    expect(robots).toContain('Sitemap: https://www.porta.finance/sitemap.xml')
  })

  it('sitemap.xml lists EN home and KO with www absolute URLs', () => {
    const sitemap = readFileSync(resolve(ROOT, 'public/sitemap.xml'), 'utf8')
    expect(sitemap).toContain('<loc>https://www.porta.finance/</loc>')
    expect(sitemap).toContain('<loc>https://www.porta.finance/ko</loc>')
    expect(sitemap).toContain('hreflang="en"')
    expect(sitemap).toContain('hreflang="ko"')
    expect(sitemap).toContain('hreflang="x-default"')
    expect(KO_URL).toBe('https://www.porta.finance/ko')
  })

  it('Crypto CLEAR keywords + featureList include ETH/SCW/AA, not Bitcoin', () => {
    const joined = `${KEYWORDS.join(' ')} ${FEATURE_LIST.join(' ')}`
    expect(joined).toMatch(/Ethereum/)
    expect(joined).toMatch(/ETH wallet/)
    expect(joined).toMatch(/smart contract wallet/i)
    expect(joined).toMatch(/Account Abstraction/i)
    expect(joined).toContain('ERC-4337')
    expect(joined).toContain('EIP-4337')
    expect(joined).toMatch(/review swaps/i)
    expect(joined).not.toMatch(/Bitcoin|\bBTC\b|bit trading|gasless|F6\.4/i)
    const ld = JSON.stringify(jsonLdGraph('en'))
    expect(ld).toContain('featureList')
    expect(ld).toContain('ERC-4337')
    expect(ld).not.toMatch(/Bitcoin|\bBTC\b/)
    expect(KEYWORDS_CONTENT).toContain('Ethereum wallet')
  })
})

describe('KO copy shell + social board', () => {
  it('KO H1 lock and Coming cards are social + AI bot, not Bitcoin', () => {
    expect(copy.ko.hero.keyword).toBe('비수탁')
    expect(copy.ko.hero.h1After).toContain('지갑')
    const social = copy.ko.roadmap.items.find((item) =>
      item.title.includes('소셜 트레이딩'),
    )
    const ai = copy.ko.roadmap.items.find((item) =>
      item.title.includes('AI 봇 트레이딩'),
    )
    expect(social?.title).toBe('소셜 트레이딩 (이후)')
    expect(social?.body).toBe(
      '카피·커뮤니티 트레이딩은 이후 로드맵. tip 00044-47z에서는 라이브 소셜 트레이딩 제품이 아닙니다.',
    )
    expect(ai?.title).toBe('AI 봇 트레이딩')
    expect(ai?.body).toBe(
      'AI 지원 트레이딩 봇은 로드맵. tip 00044-47z에서는 라이브 AI 트레이딩 제품이 아닙니다.',
    )
    expect(JSON.stringify(copy)).not.toMatch(/Bitcoin|\bBTC\b|비트코인/)
  })

  it('social board is an honest empty state with a Marketing-ready shape', () => {
    expect(SOCIAL_BOARD.posts).toEqual([])
    const json = JSON.parse(
      readFileSync(resolve(ROOT, 'public/content/social-board.json'), 'utf8'),
    ) as { version: number; posts: unknown[] }
    expect(json.posts).toEqual([])
    const board = readFileSync(
      resolve(ROOT, 'src/components/SocialBoard.tsx'),
      'utf8',
    )
    expect(board).toContain('id="updates"')
    expect(board).toContain('Posts go live as we ship')
    expect(board).toContain('SOFT_TIP')
    expect(board).not.toMatch(/followers|impressions|views/i)
    expect(existsSync(resolve(ROOT, 'scripts/write-ko-html.mjs'))).toBe(true)
  })
})
