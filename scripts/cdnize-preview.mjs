import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, extname } from 'node:path'

const cdn = (process.env.PREVIEW_CDN || '').replace(/\/$/, '')
if (!cdn) {
  console.error('PREVIEW_CDN is required')
  process.exit(1)
}

const ROOT = join(process.cwd(), 'out')
const TEXT_EXT = new Set(['.html', '.js', '.css', '.xml', '.txt', '.json'])

const replacements = [
  ['./_next/', `${cdn}/_next/`],
  ['./brand/', `${cdn}/brand/`],
  ['./portal-mark.png', `${cdn}/portal-mark.png`],
  ['./logo.png', `${cdn}/logo.png`],
  ['./logo.svg', `${cdn}/logo.svg`],
  ['./favicon.png', `${cdn}/favicon.png`],
  ['./favicon.svg', `${cdn}/favicon.svg`],
  ['./apple-touch-icon.png', `${cdn}/apple-touch-icon.png`],
]

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const abs = join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(abs)
      continue
    }
    if (!TEXT_EXT.has(extname(entry.name))) continue
    let text = readFileSync(abs, 'utf8')
    let next = text
    for (const [from, to] of replacements) next = next.replaceAll(from, to)
    if (next !== text) writeFileSync(abs, next)
  }
}

walk(ROOT)
console.log(`CDN-ized preview assets → ${cdn}`)
