import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = resolve(ROOT, 'dist')
const INDEX = resolve(DIST, 'index.html')

const EN_TITLE = 'Porta Wallet — Non-custodial Crypto Wallet | Soft Dogfood'
const EN_DESC =
  'Non-custodial crypto wallet via Telegram bot & Mini App. Create/import, balances, send, review swaps. Ethereum smart contract wallet with account abstraction (ERC-4337 / EIP-4337). Soft dogfood tip 00044-47z. Not a Telegram product.'
const KO_TITLE = 'Porta Wallet — 비수탁 암호화폐 지갑 | 소프트 도그푸드'
const KO_DESC =
  '텔레그램 봇·미니앱으로 쓰는 비수탁 크립토 지갑. 생성·가져오기, 잔액, 전송, 스왑 리뷰. 이더리움 스마트 컨트랙트 지갑, 계정 추상화(ERC-4337 / EIP-4337). 소프트 도그푸드 tip 00044-47z. 텔레그램 제품 아님.'
const EN_KEYWORDS =
  'non-custodial crypto wallet, Ethereum, Ethereum wallet, ETH wallet, smart contract wallet, Account Abstraction, ERC-4337, EIP-4337, create wallet, import wallet, balances, send, review swaps, Telegram bot, Mini App'
const KO_KEYWORDS =
  '비수탁 크립토 지갑, 이더리움, Ethereum, 스마트 컨트랙트 지갑, 계정 추상화, Account Abstraction, ERC-4337, EIP-4337, 생성, 가져오기, 잔액, 전송, 스왑 리뷰, 텔레그램 봇, 미니앱'

for (const rel of ['robots.txt', 'sitemap.xml', 'content/social-board.json']) {
  if (!existsSync(resolve(DIST, rel))) {
    throw new Error(`dist/${rel} missing — public static file did not copy`)
  }
}

if (!existsSync(INDEX)) {
  throw new Error('dist/index.html missing')
}

let html = readFileSync(INDEX, 'utf8')
if (!html.includes(EN_TITLE) || !html.includes(EN_DESC)) {
  throw new Error('dist/index.html is missing locked EN title/description')
}
if (!html.includes('00044-47z')) {
  throw new Error('dist/index.html must mention soft tip 00044-47z')
}

html = html.replaceAll('<html lang="en">', '<html lang="ko">')
html = html.replaceAll(EN_TITLE, KO_TITLE)
html = html.replaceAll(EN_DESC, KO_DESC)
html = html.replaceAll(EN_KEYWORDS, KO_KEYWORDS)
html = html.replaceAll('og:locale" content="en_US"', 'og:locale" content="ko_KR"')
html = html.replace(
  '<link rel="canonical" href="https://www.porta.finance/" />',
  '<link rel="canonical" href="https://www.porta.finance/ko" />',
)
html = html.replace(
  '<meta property="og:url" content="https://www.porta.finance/" />',
  '<meta property="og:url" content="https://www.porta.finance/ko" />',
)
html = html.replace(
  /<noscript>[\s\S]*?<\/noscript>/,
  `<noscript>
      <h1>비수탁 지갑 — 생성, 전송, 스왑을 명확히 검토</h1>
      <p>소프트 도그푸드 tip 00044-47z. 텔레그램 제품 아님.</p>
    </noscript>`,
)
html = html.replaceAll('="./', '="../')
html = html.replaceAll("url('./", "url('../")

const koDir = resolve(DIST, 'ko')
mkdirSync(koDir, { recursive: true })
writeFileSync(resolve(koDir, 'index.html'), html)

const koHtml = readFileSync(resolve(koDir, 'index.html'), 'utf8')
if (!koHtml.includes(KO_TITLE) || !koHtml.includes(KO_DESC)) {
  throw new Error('dist/ko/index.html missing locked KO title/description')
}
if (!koHtml.includes('00044-47z') || !koHtml.includes('비수탁 지갑')) {
  throw new Error('dist/ko/index.html must keep tip 00044-47z and 비수탁 지갑')
}

const robots = readFileSync(resolve(DIST, 'robots.txt'), 'utf8')
for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
  if (!robots.includes(bot)) {
    throw new Error(`dist/robots.txt must Allow ${bot}`)
  }
}
if (!robots.includes('https://www.porta.finance/sitemap.xml')) {
  throw new Error('dist/robots.txt must list the www sitemap')
}

const sitemap = readFileSync(resolve(DIST, 'sitemap.xml'), 'utf8')
if (
  !sitemap.includes('https://www.porta.finance/</loc>') &&
  !sitemap.includes('https://www.porta.finance/</loc>')
) {
  // loc tags include the trailing slash home
}
if (!sitemap.includes('https://www.porta.finance/</loc>')) {
  throw new Error('dist/sitemap.xml must include EN home')
}
if (!sitemap.includes('https://www.porta.finance/ko</loc>')) {
  throw new Error('dist/sitemap.xml must include KO route')
}

console.log('wrote dist/ko/index.html and verified static SEO files')
