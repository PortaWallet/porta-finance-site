export type Inline =
  | { t: 'text'; v: string }
  | { t: 'code'; v: string }
  | { t: 'soon' }
  | { t: 'bold'; c: Inline[] }
  | { t: 'italic'; c: Inline[] }
  | { t: 'link'; href: string; c: Inline[] }

export type ListItem = {
  c: Inline[]
  children: Block[]
}

export type Block =
  | { t: 'p'; id?: string; c: Inline[] }
  | { t: 'heading'; id: string; level: 3 | 4; c: Inline[] }
  | { t: 'quote'; id?: string; c: Inline[] }
  | { t: 'code'; id?: string; lang: string; code: string }
  | { t: 'ul'; id?: string; items: ListItem[] }
  | { t: 'ol'; id?: string; items: ListItem[] }
  | { t: 'table'; id?: string; header: Inline[][]; rows: Inline[][][] }

export type RawHelpTopic = {
  slug: string
  heading: string
  body: string
}

const LIST_LINE = /^(\s*)(-|\d+\.)\s+(.*)$/

function starRun(input: string, index: number): number {
  let run = 0
  while (input.charAt(index + run) === '*') run += 1
  return run
}

type Mode = 'root' | 'strong' | 'em'

function parseMode(input: string, mode: Mode): { nodes: Inline[]; rest: string } {
  const nodes: Inline[] = []
  let buf = ''
  let i = 0

  const flush = () => {
    if (buf.length === 0) return
    nodes.push({ t: 'text', v: buf })
    buf = ''
  }

  while (i < input.length) {
    const ch = input.charAt(i)

    if (ch === '`') {
      const j = input.indexOf('`', i + 1)
      if (j === -1) {
        buf += ch
        i += 1
        continue
      }
      flush()
      const code = input.slice(i + 1, j)
      nodes.push(code === '[LINK TBD]' ? { t: 'soon' } : { t: 'code', v: code })
      i = j + 1
      continue
    }

    if (ch === '[') {
      const match = /^\[([^\]]+)\]\(([^)\s]+)\)/.exec(input.slice(i))
      const label = match?.[1]
      const href = match?.[2]
      if (match && label && href) {
        flush()
        nodes.push({ t: 'link', href, c: parseInlines(label) })
        i += match[0].length
        continue
      }
    }

    if (ch === '*') {
      const run = starRun(input, i)
      if (mode === 'em' && run >= 1) {
        flush()
        return { nodes, rest: input.slice(i + 1) }
      }
      if (mode === 'strong' && run >= 2) {
        flush()
        return { nodes, rest: input.slice(i + 2) }
      }
      if (mode === 'root' && run >= 2) {
        flush()
        const inner = parseMode(input.slice(i + 2), 'strong')
        nodes.push({ t: 'bold', c: inner.nodes })
        const rest = parseMode(inner.rest, 'root')
        nodes.push(...rest.nodes)
        return { nodes, rest: rest.rest }
      }
      if ((mode === 'root' || mode === 'strong') && run === 1) {
        flush()
        const inner = parseMode(input.slice(i + 1), 'em')
        nodes.push({ t: 'italic', c: inner.nodes })
        const rest = parseMode(inner.rest, mode)
        nodes.push(...rest.nodes)
        return { nodes, rest: rest.rest }
      }
      buf += '*'.repeat(run)
      i += run
      continue
    }

    buf += ch
    i += 1
  }

  flush()
  return { nodes, rest: '' }
}

export function parseInlines(input: string): Inline[] {
  return parseMode(input, 'root').nodes
}

export function inlineToText(nodes: Inline[]): string {
  let out = ''
  for (const node of nodes) {
    if (node.t === 'text' || node.t === 'code') out += node.v
    else if (node.t === 'soon') out += 'Coming soon'
    else out += inlineToText(node.c)
  }
  return out
}

export function blocksToPlain(blocks: Block[]): string {
  const parts: string[] = []
  const walk = (list: Block[]) => {
    for (const block of list) {
      if (block.t === 'p' || block.t === 'quote' || block.t === 'heading') {
        parts.push(inlineToText(block.c))
      } else if (block.t === 'code') {
        parts.push(block.code)
      } else if (block.t === 'ul' || block.t === 'ol') {
        for (const item of block.items) {
          parts.push(inlineToText(item.c))
          walk(item.children)
        }
      } else if (block.t === 'table') {
        for (const cell of block.header) parts.push(inlineToText(cell))
        for (const row of block.rows) {
          for (const cell of row) parts.push(inlineToText(cell))
        }
      }
    }
  }
  walk(blocks)
  return parts.join('\n')
}

export function walkBlocks(blocks: Block[], visit: (block: Block) => void): void {
  for (const block of blocks) {
    visit(block)
    if (block.t === 'ul' || block.t === 'ol') {
      for (const item of block.items) walkBlocks(item.children, visit)
    }
  }
}

function forEachInline(blocks: Block[], visit: (nodes: Inline[]) => void): void {
  walkBlocks(blocks, (block) => {
    if (block.t === 'p' || block.t === 'quote' || block.t === 'heading') visit(block.c)
    else if (block.t === 'ul' || block.t === 'ol') {
      for (const item of block.items) visit(item.c)
    } else if (block.t === 'table') {
      for (const cell of block.header) visit(cell)
      for (const row of block.rows) {
        for (const cell of row) visit(cell)
      }
    }
  })
}

export function countSoon(blocks: Block[]): number {
  let count = 0
  const visit = (nodes: Inline[]) => {
    for (const node of nodes) {
      if (node.t === 'soon') count += 1
      else if (node.t === 'bold' || node.t === 'italic' || node.t === 'link') visit(node.c)
    }
  }
  forEachInline(blocks, visit)
  return count
}

export function collectCode(blocks: Block[]): { lang: string; code: string }[] {
  const code: { lang: string; code: string }[] = []
  walkBlocks(blocks, (block) => {
    if (block.t === 'code') code.push({ lang: block.lang, code: block.code })
  })
  return code
}

export function collectHrefs(blocks: Block[]): string[] {
  const hrefs: string[] = []
  const visit = (nodes: Inline[]) => {
    for (const node of nodes) {
      if (node.t === 'link') hrefs.push(node.href)
      if (node.t === 'bold' || node.t === 'italic' || node.t === 'link') visit(node.c)
    }
  }
  forEachInline(blocks, visit)
  return hrefs
}

function resolveInlineList(nodes: Inline[], anchors: ReadonlyMap<string, string>): Inline[] {
  const out: Inline[] = []
  for (const node of nodes) {
    if (node.t === 'bold' || node.t === 'italic') {
      out.push({ t: node.t, c: resolveInlineList(node.c, anchors) })
      continue
    }
    if (node.t === 'link') {
      const inner = resolveInlineList(node.c, anchors)
      if (node.href.startsWith('#')) {
        const href = anchors.get(node.href.slice(1))
        if (href) out.push({ t: 'link', href, c: inner })
        else out.push(...inner)
      } else {
        out.push({ t: 'link', href: node.href, c: inner })
      }
      continue
    }
    out.push(node)
  }
  return out
}

export function resolveHelpLinks(
  blocks: Block[],
  anchors: ReadonlyMap<string, string>,
): Block[] {
  return blocks.map((block) => {
    if (block.t === 'p' || block.t === 'quote' || block.t === 'heading') {
      return { ...block, c: resolveInlineList(block.c, anchors) }
    }
    if (block.t === 'ul' || block.t === 'ol') {
      return {
        ...block,
        items: block.items.map((item) => ({
          c: resolveInlineList(item.c, anchors),
          children: resolveHelpLinks(item.children, anchors),
        })),
      }
    }
    if (block.t === 'table') {
      return {
        ...block,
        header: block.header.map((cell) => resolveInlineList(cell, anchors)),
        rows: block.rows.map((row) => row.map((cell) => resolveInlineList(cell, anchors))),
      }
    }
    return block
  })
}

function indentOf(line: string): number {
  let i = 0
  while (line.charAt(i) === ' ') i += 1
  return i
}

function slugify(text: string): string {
  const slug = text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'section'
}

function splitCells(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '')
  return trimmed.split('|').map((cell) => cell.trim())
}

function isSeparatorRow(line: string): boolean {
  const cells = splitCells(line)
  return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell))
}

function parseTable(lines: string[]): { header: Inline[][]; rows: Inline[][][] } {
  const [head, ...rest] = lines
  const header = splitCells(head ?? '').map((cell) => parseInlines(cell))
  const body = rest[0] && isSeparatorRow(rest[0]) ? rest.slice(1) : rest
  const rows = body.map((line) => splitCells(line).map((cell) => parseInlines(cell)))
  return { header, rows }
}

function parseBlocks(lines: string[], start: number): { blocks: Block[]; next: number } {
  const blocks: Block[] = []
  let pendingId: string | undefined
  let i = start

  const takeId = () => {
    const id = pendingId
    pendingId = undefined
    return id
  }

  while (i < lines.length) {
    const line = lines[i] ?? ''
    const trimmed = line.trim()

    if (trimmed === '') {
      i += 1
      continue
    }

    if (trimmed === '---') {
      i += 1
      continue
    }

    const anchor = /^<a id="([^"]+)"><\/a>$/.exec(trimmed)
    if (anchor?.[1]) {
      pendingId = anchor[1]
      i += 1
      continue
    }

    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim()
      i += 1
      const codeLines: string[] = []
      while (i < lines.length && (lines[i] ?? '').trim() !== '```') {
        codeLines.push(lines[i] ?? '')
        i += 1
      }
      if (i < lines.length) i += 1
      blocks.push({ t: 'code', lang, code: codeLines.join('\n'), id: takeId() })
      continue
    }

    if (trimmed.startsWith('>')) {
      const quote: string[] = []
      while (i < lines.length && (lines[i] ?? '').trimStart().startsWith('>')) {
        quote.push((lines[i] ?? '').trimStart().replace(/^>\s?/, ''))
        i += 1
      }
      blocks.push({ t: 'quote', c: parseInlines(quote.join(' ')), id: takeId() })
      continue
    }

    if (trimmed.startsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && (lines[i] ?? '').trimStart().startsWith('|')) {
        tableLines.push(lines[i] ?? '')
        i += 1
      }
      blocks.push({ t: 'table', ...parseTable(tableLines), id: takeId() })
      continue
    }

    const heading = /^(#{3,4})\s+(.+)$/.exec(trimmed)
    if (heading?.[1] && heading[2]) {
      const level = heading[1].length === 4 ? 4 : 3
      blocks.push({
        t: 'heading',
        level,
        c: parseInlines(heading[2]),
        id: takeId() ?? slugify(heading[2]),
      })
      i += 1
      continue
    }

    if (LIST_LINE.test(line)) {
      const parsed = parseList(lines, i)
      const id = takeId()
      blocks.push(id ? { ...parsed.block, id } : parsed.block)
      i = parsed.next
      continue
    }

    if (/^##(?!#)\s/.test(trimmed)) {
      throw new Error(`Help parser found a topic heading inside a section: ${trimmed}`)
    }

    blocks.push({ t: 'p', c: parseInlines(trimmed), id: takeId() })
    i += 1
  }

  return { blocks, next: i }
}

function parseList(lines: string[], start: number): { block: Block; next: number } {
  const first = LIST_LINE.exec(lines[start] ?? '')
  const marker = first?.[2] ?? '-'
  const base = first?.[1]?.length ?? 0
  const ordered = /^\d+\.$/.test(marker)
  const items: ListItem[] = []
  let i = start

  while (i < lines.length) {
    const line = lines[i] ?? ''
    if (line.trim() === '') break
    const match = LIST_LINE.exec(line)
    if (!match) break
    const ind = match[1]?.length ?? 0
    if (ind !== base) break
    const item: ListItem = { c: parseInlines(match[3] ?? ''), children: [] }
    i += 1
    const nested: string[] = []
    while (i < lines.length) {
      const next = lines[i] ?? ''
      if (next.trim() === '') break
      if (indentOf(next) <= base) break
      nested.push(next)
      i += 1
    }
    if (nested.length > 0) {
      const parsed = parseBlocks(nested, 0)
      if (parsed.next !== nested.length) {
        throw new Error(`Nested help list stopped early: ${nested[parsed.next] ?? ''}`)
      }
      item.children = parsed.blocks
    }
    items.push(item)
  }

  if (i === start) {
    throw new Error(`Help list did not advance at: ${lines[start] ?? ''}`)
  }

  return { block: { t: ordered ? 'ol' : 'ul', items }, next: i }
}

export function parseHelpBody(body: string): Block[] {
  const lines = body.replace(/\r\n/g, '\n').split('\n')
  const parsed = parseBlocks(lines, 0)
  if (parsed.next !== lines.length) {
    throw new Error(`Help parser stopped early: ${lines[parsed.next] ?? ''}`)
  }
  return parsed.blocks
}

export function splitHelpSpec(md: string): RawHelpTopic[] {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const topics: RawHelpTopic[] = []
  let current: { slug: string; heading: string; lines: string[] } | null = null

  const finish = () => {
    if (!current) return
    topics.push({
      slug: current.slug,
      heading: current.heading,
      body: current.lines.join('\n'),
    })
    current = null
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i] ?? ''
    const anchor = /^<a id="([^"]+)"><\/a>$/.exec(line.trim())
    if (anchor?.[1]) {
      let j = i + 1
      while (j < lines.length && (lines[j] ?? '').trim() === '') j += 1
      const heading = /^##(?!#)\s+(.+)$/.exec(lines[j] ?? '')
      if (heading?.[1]) {
        finish()
        current = { slug: anchor[1], heading: heading[1].trim(), lines: [] }
        i = j
        continue
      }
    }
    if (current) current.lines.push(line)
  }

  finish()
  return topics
}

export function blockAnchorIds(blocks: Block[]): string[] {
  const ids: string[] = []
  walkBlocks(blocks, (block) => {
    if (block.id) ids.push(block.id)
  })
  return ids
}
