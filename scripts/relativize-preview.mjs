import { readdirSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { join, extname } from 'node:path'

const ROOT = join(process.cwd(), 'out')

/** Keep the preview bundle small and off the live APK host. */
const apkDir = join(ROOT, 'downloads')
if (existsSync(apkDir)) {
  rmSync(apkDir, { recursive: true, force: true })
}

const TEXT_EXT = new Set(['.html', '.js', '.css', '.xml', '.txt', '.json'])

const replacements = [
  ['"/_next/', '"./_next/'],
  ["'/_next/", "'./_next/"],
  ['"/brand/', '"./brand/'],
  ["'/brand/", "'./brand/"],
  ['"/portal-mark.png', '"./portal-mark.png'],
  ["'/portal-mark.png", "'./portal-mark.png"],
  ['"/logo.png', '"./logo.png'],
  ["'/logo.png", "'./logo.png"],
  ['"/logo.svg', '"./logo.svg'],
  ["'/logo.svg", "'./logo.svg"],
  ['"/favicon.png', '"./favicon.png'],
  ["'/favicon.png", "'./favicon.png"],
  ['"/favicon.svg', '"./favicon.svg'],
  ["'/favicon.svg", "'./favicon.svg"],
  ['"/apple-touch-icon.png', '"./apple-touch-icon.png'],
  ["'/apple-touch-icon.png", "'./apple-touch-icon.png"],
  ['"/og.png', '"./og.png'],
  ["'/og.png", "'./og.png"],
  ['"/downloads/', '"./downloads/'],
  ["'/downloads/", "'./downloads/"],
  ['url(/_next/', 'url(./_next/'],
  ['url(/brand/', 'url(./brand/'],
  ['href="/"', 'href="./"'],
  ["href='/'", "href='./'"],
  ['href="/#policy"', 'href="./#policy"'],
  ["href='/#policy'", "href='./#policy'"],
  ['href="/#terms"', 'href="./#terms"'],
  ["href='/#terms'", "href='./#terms'"],
  ['href="/privacy-policy"', 'href="./privacy-policy/"'],
  ["href='/privacy-policy'", "href='./privacy-policy/'"],
  ['href="/terms-of-service"', 'href="./terms-of-service/"'],
  ["href='/terms-of-service'", "href='./terms-of-service/'"],
  ['href="/privacy"', 'href="./privacy/"'],
  ["href='/privacy'", "href='./privacy/'"],
  ['href="/terms"', 'href="./terms/"'],
  ["href='/terms'", "href='./terms/'"],
  ['href="/roadmap"', 'href="./roadmap/"'],
  ["href='/roadmap'", "href='./roadmap/'"],
]

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const abs = join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(abs)
      continue
    }
    if (!TEXT_EXT.has(extname(entry.name))) continue
    let text = readFileSync(abs, 'utf8')
    let next = text
    for (const [from, to] of replacements) {
      next = next.replaceAll(from, to)
    }
    if (next !== text) writeFileSync(abs, next)
  }
}

walk(ROOT)
console.log('Relativized preview asset paths in out/')
