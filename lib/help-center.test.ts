import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import sitemap from '@/app/sitemap'
import {
  getHelpTopic,
  getHelpTopics,
  helpAnchorHref,
  helpStaticParams,
  readHelpSpec,
} from '@/content-help/help'
import {
  blocksToPlain,
  collectCode,
  collectHrefs,
  countSoon,
  inlineToText,
  parseInlines,
  splitHelpSpec,
  walkBlocks,
} from '@/content-help/parse'
import { helpTopicMatches } from '@/content-help/search'
import { SITE_URL } from '@/lib/site'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const HELP_SLUGS = [
  'platforms',
  'getting-started',
  'home-and-balances',
  'networks',
  'send',
  'receive',
  'address-book',
  'swap',
  'bridge',
  'mandates',
  'notifications',
  'settings-and-security',
  'faq',
  'developers',
] as const

const BANNED = /sepolia|testnet/i

const SECTION_15 = [
  'Open questions / discrepancies',
  'internal — remove before publishing',
  'twitter_consumer_secret',
  'WalletAccountV3',
  'withSepoliaDogfood',
  'mainnet_refused',
  'SETTINGS_MAINNET_ENABLED',
  'Added for the multi-chain, multi-platform edit',
  'Repo roots are',
  'no-retry semantics',
  'Mandate cap semantics',
  '## 15.',
] as const

const PRODUCTION_CHAINS = [
  'Ethereum',
  'Polygon',
  'Arbitrum',
  'Base',
  'Avalanche',
  'Optimism',
  'BNB Chain',
] as const

function walkFiles(dir: string): string[] {
  if (!existsSync(dir)) return []
  const out: string[] = []
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) out.push(...walkFiles(path))
    else out.push(path)
  }
  return out
}

function helpFiles(): string[] {
  const roots = [
    resolve(ROOT, 'content-help'),
    resolve(ROOT, 'app/help'),
    resolve(ROOT, 'components/help'),
  ]
  const files = roots.flatMap((dir) => walkFiles(dir))
  files.push(resolve(ROOT, 'app/sitemap.ts'))
  files.push(resolve(ROOT, 'components/site-nav.tsx'))
  files.push(resolve(ROOT, 'components/site-footer.tsx'))
  return files
}

function words(text: string): string[] {
  return text.split(/\s+/).filter(Boolean)
}

function hold(store: string[], value: string): string {
  const index = store.length
  store.push(value)
  return `\u0000${index}\u0000`
}

/** Visible words of the spec source, with markdown syntax removed. */
function visibleWords(raw: string): string[] {
  const held: string[] = []
  let text = raw.replace(/<a id="[^"]+"><\/a>/g, '')
  text = text.replace(/```[^\n]*\n([\s\S]*?)```/g, (_, body: string) => hold(held, body))
  text = text.replace(/`([^`]*)`/g, (_, code: string) =>
    hold(held, code === '[LINK TBD]' ? 'Coming soon' : code),
  )
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
  text = text.replace(/\*/g, '')
  text = text.replace(/^\s*(?:-|\d+\.)\s+/gm, '')
  text = text.replace(/^#{2,4}\s+/gm, '')
  text = text.replace(/^---\s*$/gm, '')
  text = text.replace(/^\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/gm, '')
  text = text.replace(/\|/g, ' ')
  text = text.replace(/^>\s?/gm, '')
  text = text.replace(/\u0000(\d+)\u0000/g, (_, index: string) => held[Number(index)] ?? '')
  return words(text)
}

function sameWords(actual: string[], expected: string[]) {
  const limit = Math.max(actual.length, expected.length)
  for (let i = 0; i < limit; i += 1) {
    if (actual[i] === expected[i]) continue
    const around = (list: string[]) => list.slice(Math.max(0, i - 5), i + 8).join(' | ')
    expect(actual[i], `word ${i}\nactual: ${around(actual)}\nexpected: ${around(expected)}`).toBe(
      expected[i],
    )
  }
  expect(actual.length).toBe(expected.length)
}

describe('help center', () => {
  it('publishes 14 unique topic slugs and each one resolves', () => {
    const topics = getHelpTopics()
    const slugs = topics.map((topic) => topic.slug)
    expect(slugs).toEqual([...HELP_SLUGS])
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(helpStaticParams()).toEqual(slugs.map((slug) => ({ slug })))
    for (const slug of slugs) {
      expect(getHelpTopic(slug)?.slug).toBe(slug)
      expect(getHelpTopic(slug)?.heading.length).toBeGreaterThan(0)
      expect(getHelpTopic(slug)?.blocks.length).toBeGreaterThan(0)
    }
    expect(getHelpTopic('open-questions')).toBeUndefined()
    expect(getHelpTopic('missing-topic')).toBeUndefined()
  })

  it('keeps approved prose verbatim, including seven production chains', () => {
    const md = readHelpSpec()
    const topics = getHelpTopics()
    const raw = splitHelpSpec(md)
    expect(raw.map((topic) => topic.slug)).toEqual(topics.map((topic) => topic.slug))
    expect(raw.map((topic) => topic.heading)).toEqual(topics.map((topic) => topic.heading))
    const actual = topics.flatMap((topic) => [
      ...words(topic.heading),
      ...words(blocksToPlain(topic.blocks)),
    ])
    sameWords(actual, visibleWords(md))

    const networks = getHelpTopic('networks')
    expect(networks?.searchText).toContain('PortaWallet supports seven production networks.')
    for (const chain of PRODUCTION_CHAINS) {
      expect(networks?.searchText).toContain(chain)
    }
    expect(networks?.searchText).toContain('42161')
    expect(networks?.searchText).toContain('8453')
    expect(networks?.searchText).toContain('43114')
  })

  it('fails if help content contains sepolia or testnet', () => {
    for (const file of helpFiles()) {
      const text = readFileSync(file, 'utf8')
      expect(text, file).not.toMatch(BANNED)
    }
    for (const topic of getHelpTopics()) {
      expect(topic.heading, topic.slug).not.toMatch(BANNED)
      expect(topic.searchText, topic.slug).not.toMatch(BANNED)
      expect(blocksToPlain(topic.blocks), topic.slug).not.toMatch(BANNED)
    }
  })

  it('omits section 15, the internal open-questions note', () => {
    const blobs = [
      readHelpSpec(),
      ...helpFiles().map((file) => readFileSync(file, 'utf8')),
      ...getHelpTopics().map((topic) => topic.searchText),
    ]
    for (const phrase of SECTION_15) {
      for (const blob of blobs) {
        expect(blob).not.toContain(phrase)
      }
    }
    expect(getHelpTopics().some((topic) => topic.slug === 'open-questions')).toBe(false)
  })

  it('resolves in-article anchors and turns store placeholders into Coming soon', () => {
    const md = readHelpSpec()
    const ids = [...md.matchAll(/\]\(#([a-z0-9-]+)\)/g)].map((match) => match[1] ?? '')
    expect(ids.length).toBeGreaterThan(0)
    for (const id of new Set(ids)) {
      if (id === 'open-questions') {
        expect(helpAnchorHref(id)).toBeUndefined()
      } else {
        expect(helpAnchorHref(id), id).toMatch(/^\/help\//)
      }
    }

    const hrefs = getHelpTopics().flatMap((topic) => collectHrefs(topic.blocks))
    expect(hrefs.some((href) => href.includes('open-questions'))).toBe(false)
    for (const href of hrefs) {
      expect(href.startsWith('/help/') || href.startsWith('https://'), href).toBe(true)
    }
    expect(hrefs).toContain('/help/networks')
    expect(hrefs).toContain('/help/getting-started#password-setup')
    expect(hrefs).toContain('/help/send#smart-account-deploy')
    expect(hrefs).toContain('https://t.me/PortaWallet_bot')

    let soon = 0
    for (const topic of getHelpTopics()) {
      soon += countSoon(topic.blocks)
      expect(topic.searchText).not.toContain('[LINK TBD]')
      walkBlocks(topic.blocks, (block) => {
        if (block.t !== 'table') return
        for (const row of block.rows) {
          expect(row.length, topic.slug).toBe(block.header.length)
        }
      })
    }
    expect(soon).toBe(4)
    expect(getHelpTopic('platforms')?.searchText).toContain('Coming soon')
  })

  it('gives every developer code block copyable source', () => {
    const code = collectCode(getHelpTopic('developers')?.blocks ?? [])
    expect(code.map((block) => block.lang)).toEqual(['json', 'ts', 'js'])
    expect(code[0]?.code).toContain('"requestId"')
    expect(code[1]?.code).toContain('createPortaMandates')
    expect(code[1]?.code).toContain('https://api.porta.finance/api')
    expect(code[2]?.code).toContain('timingSafeEqual')
    expect(code[2]?.code).toContain('PORTA_WEBHOOK_SECRET')
    const total = getHelpTopics().reduce(
      (count, topic) => count + collectCode(topic.blocks).length,
      0,
    )
    expect(total).toBe(3)
    const body = readFileSync(resolve(ROOT, 'components/help/help-body.tsx'), 'utf8')
    expect(body).toContain('CopyCodeButton')
    const button = readFileSync(resolve(ROOT, 'components/help/copy-code-button.tsx'), 'utf8')
    expect(button).toContain('navigator.clipboard.writeText(code)')
    const page = readFileSync(resolve(ROOT, 'app/help/[slug]/page.tsx'), 'utf8')
    expect(page).toContain('generateStaticParams')
    expect(page).toContain('helpStaticParams')
    expect(page).toContain('getHelpTopic')
    expect(page).toContain('notFound')
    const index = readFileSync(resolve(ROOT, 'app/help/page.tsx'), 'utf8')
    expect(index).toContain('HelpSearch')
  })

  it('searches topic titles and body text', () => {
    const topics = getHelpTopics()
    expect(helpTopicMatches('Send', 'anything', '')).toBe(true)
    expect(helpTopicMatches('Send', 'Receiving address', 'receiving')).toBe(true)
    expect(helpTopicMatches('Send', 'Receiving address', 'SEND')).toBe(true)
    expect(helpTopicMatches('Send', 'Receiving address', 'webhook')).toBe(false)
    const developers = topics.find((topic) => topic.slug === 'developers')
    expect(
      helpTopicMatches(developers?.heading ?? '', developers?.searchText ?? '', 'X-Porta-Merchant-Key'),
    ).toBe(true)
    const networks = topics.find((topic) => topic.slug === 'networks')
    expect(helpTopicMatches(networks?.heading ?? '', networks?.searchText ?? '', 'polygon')).toBe(
      true,
    )
    expect(
      topics.filter((topic) => helpTopicMatches(topic.heading, topic.searchText, 'secret phrase'))
        .length,
    ).toBeGreaterThan(1)
  })

  it('lists every help route in the sitemap and the site chrome', () => {
    const urls = sitemap().map((entry) => entry.url)
    expect(urls).toContain(`${SITE_URL}/help`)
    for (const slug of HELP_SLUGS) {
      expect(urls).toContain(`${SITE_URL}/help/${slug}`)
    }
    const nav = readFileSync(resolve(ROOT, 'content/copy.ts'), 'utf8')
    expect(nav).toContain("href: '/help'")
    expect(nav).toContain("label: 'Help'")
    const footer = readFileSync(resolve(ROOT, 'components/site-footer.tsx'), 'utf8')
    expect(footer).toContain('href="/help"')
    expect(footer).toMatch(/>\s*Help\s*</)
  })

  it('parses emphasis and code the way the articles use them', () => {
    expect(inlineToText(parseInlines('**Sending *token***'))).toBe('Sending token')
    expect(inlineToText(parseInlines('***Network* network fee**'))).toBe('Network network fee')
    expect(inlineToText(parseInlines('**`201` response**'))).toBe('201 response')
    expect(inlineToText(parseInlines('*Platform note:* **Welcome to Porta**'))).toBe(
      'Platform note: Welcome to Porta',
    )
    expect(inlineToText(parseInlines('`[LINK TBD]`'))).toBe('Coming soon')
    expect(parseInlines('`[LINK TBD]`')).toEqual([{ t: 'soon' }])
  })
})
