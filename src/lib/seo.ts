/** Marketing SEO SoT — titles/descriptions are locked exact strings. */
export const CANONICAL_HOST = 'www.porta.finance'
export const CANONICAL_ORIGIN = 'https://www.porta.finance'
export const CANONICAL_URL = `${CANONICAL_ORIGIN}/`
export const KO_URL = `${CANONICAL_ORIGIN}/ko`
export const OG_IMAGE_URL = `${CANONICAL_ORIGIN}/brand/portal-hero.webp`

export const SEO = {
  en: {
    title: 'Porta Wallet — Non-custodial Crypto Wallet | Soft Dogfood',
    description:
      'Non-custodial crypto wallet via Telegram bot & Mini App. Create/import, balances, send, review swaps. Ethereum smart contract wallet with account abstraction (ERC-4337 / EIP-4337). Soft dogfood tip 00044-47z. Not a Telegram product.',
    locale: 'en_US',
    h1: 'Non-custodial wallet — create, send, and swap with clear review',
  },
  ko: {
    title: 'Porta Wallet — 비수탁 암호화폐 지갑 | 소프트 도그푸드',
    description:
      '텔레그램 봇·미니앱으로 쓰는 비수탁 크립토 지갑. 생성·가져오기, 잔액, 전송, 스왑 리뷰. 이더리움 스마트 컨트랙트 지갑, 계정 추상화(ERC-4337 / EIP-4337). 소프트 도그푸드 tip 00044-47z. 텔레그램 제품 아님.',
    locale: 'ko_KR',
    h1: '비수탁 지갑 — 생성, 전송, 스왑을 명확히 검토',
  },
} as const

/** Crypto CLEAR present-tense + wallet basics. Wallet product only. */
export const KEYWORDS = {
  en: [
    'non-custodial crypto wallet',
    'Ethereum',
    'Ethereum wallet',
    'ETH wallet',
    'smart contract wallet',
    'Account Abstraction',
    'ERC-4337',
    'EIP-4337',
    'create wallet',
    'import wallet',
    'balances',
    'send',
    'review swaps',
    'Telegram bot',
    'Mini App',
  ],
  ko: [
    '비수탁 크립토 지갑',
    '이더리움',
    'Ethereum',
    '스마트 컨트랙트 지갑',
    '계정 추상화',
    'Account Abstraction',
    'ERC-4337',
    'EIP-4337',
    '생성',
    '가져오기',
    '잔액',
    '전송',
    '스왑 리뷰',
    '텔레그램 봇',
    '미니앱',
  ],
} as const

export const ABOUT = [
  { '@type': 'Thing', name: 'Ethereum' },
  { '@type': 'Thing', name: 'smart contract wallet' },
  { '@type': 'Thing', name: 'Account Abstraction' },
  { '@type': 'Thing', name: 'ERC-4337' },
  { '@type': 'Thing', name: 'EIP-4337' },
] as const

export const FEATURE_LIST = [
  'Non-custodial crypto wallet',
  'Create or import a wallet',
  'Balances',
  'Send',
  'Review swaps',
  'Ethereum / ETH wallet',
  'Smart contract wallet',
  'Account Abstraction',
  'ERC-4337',
  'EIP-4337',
] as const

export const HREFLANG = [
  { lang: 'en', href: CANONICAL_URL },
  { lang: 'ko', href: KO_URL },
  { lang: 'x-default', href: CANONICAL_URL },
] as const

export const SAME_AS = [
  'https://t.me/PortaWallet_bot',
  'https://t.me/PortaWallet',
  'https://t.me/PortaNews',
  'https://www.linkedin.com/company/portawallet',
  'https://www.youtube.com/@PortaWallet',
] as const

export function jsonLdGraph(locale: 'en' | 'ko') {
  const seo = SEO[locale]
  const url = locale === 'ko' ? KO_URL : CANONICAL_URL
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Porta Wallet',
        legalName: 'DracoLabs Ltd',
        url: CANONICAL_URL,
        email: 'hello@porta.finance',
        sameAs: [...SAME_AS],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Porta Wallet',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web, Telegram',
        url,
        description: seo.description,
        keywords: KEYWORDS[locale].join(', '),
        about: ABOUT.map((item) => ({ ...item })),
        featureList: [...FEATURE_LIST],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  }
}

export const KEYWORDS_CONTENT = {
  en: KEYWORDS.en.join(', '),
  ko: KEYWORDS.ko.join(', '),
} as const
