import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  blockAnchorIds,
  blocksToPlain,
  inlineToText,
  parseHelpBody,
  resolveHelpLinks,
  splitHelpSpec,
  type Block,
} from '@/content-help/parse'

export type HelpTocItem = {
  id: string
  title: string
  level: number
}

export type HelpTopic = {
  slug: string
  heading: string
  excerpt: string
  searchText: string
  blocks: Block[]
  toc: HelpTocItem[]
}

const SPEC_PATH = join(process.cwd(), 'content-help', 'help-spec.md')

export function readHelpSpec(): string {
  return readFileSync(SPEC_PATH, 'utf8')
}

function clip(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const space = cut.lastIndexOf(' ')
  const base = space > 60 ? cut.slice(0, space) : cut
  return `${base.trim()}…`
}

function excerptOf(blocks: Block[]): string {
  for (const block of blocks) {
    if (block.t !== 'p' && block.t !== 'quote') continue
    const text = inlineToText(block.c).replace(/\s+/g, ' ').trim()
    if (text) return clip(text, 180)
  }
  return ''
}

function tocOf(blocks: Block[]): HelpTocItem[] {
  const toc: HelpTocItem[] = []
  for (const block of blocks) {
    if (block.t === 'heading') {
      toc.push({ id: block.id, title: inlineToText(block.c), level: block.level })
    } else if (block.t === 'p' && block.id) {
      toc.push({ id: block.id, title: inlineToText(block.c), level: 3 })
    }
  }
  return toc
}

function buildTopics(): HelpTopic[] {
  const raw = splitHelpSpec(readHelpSpec())
  const parsed = raw.map((topic) => ({
    ...topic,
    blocks: parseHelpBody(topic.body),
  }))

  const anchors = new Map<string, string>()
  const claim = (id: string, href: string) => {
    if (anchors.has(id)) throw new Error(`Duplicate help anchor: ${id}`)
    anchors.set(id, href)
  }

  for (const topic of parsed) {
    if (!/^[a-z0-9-]+$/.test(topic.slug)) {
      throw new Error(`Help slug is not a stable path segment: ${topic.slug}`)
    }
    claim(topic.slug, `/help/${topic.slug}`)
  }

  for (const topic of parsed) {
    for (const id of blockAnchorIds(topic.blocks)) {
      claim(id, `/help/${topic.slug}#${id}`)
    }
  }

  return parsed.map((topic) => {
    const blocks = resolveHelpLinks(topic.blocks, anchors)
    const plain = blocksToPlain(blocks)
    return {
      slug: topic.slug,
      heading: topic.heading,
      excerpt: excerptOf(blocks),
      searchText: `${topic.heading}\n${plain}`,
      blocks,
      toc: tocOf(blocks),
    }
  })
}

let cache: HelpTopic[] | null = null

export function getHelpTopics(): HelpTopic[] {
  if (!cache) cache = buildTopics()
  return cache
}

export function getHelpTopic(slug: string): HelpTopic | undefined {
  return getHelpTopics().find((topic) => topic.slug === slug)
}

export function helpStaticParams(): { slug: string }[] {
  return getHelpTopics().map((topic) => ({ slug: topic.slug }))
}

export function helpAnchorHref(id: string): string | undefined {
  const topics = getHelpTopics()
  const topic = topics.find((item) => item.slug === id)
  if (topic) return `/help/${topic.slug}`
  for (const item of topics) {
    if (item.toc.some((entry) => entry.id === id)) return `/help/${item.slug}#${id}`
    if (blockAnchorIds(item.blocks).includes(id)) return `/help/${item.slug}#${id}`
  }
  return undefined
}
