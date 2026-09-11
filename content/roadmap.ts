/**
 * Crypto + DeFi Product SoT — English only.
 * Structure/status from Porta ops qa/2026-09-12-CRYPTO-DEFI-ROADMAP-UPDATED.md.
 * Do not invent LIVE features, dates, tokens, or metrics.
 */
export const ROADMAP_PATH = '/roadmap'

export const ROADMAP = {
  eyebrow: 'Product',
  title: 'Crypto + DeFi',
  pageTitle: 'Crypto + DeFi roadmap',
  lede: 'Honest status only. Sponsorship is not live. Retail execute is not live. No tokens, TVL, or invented metrics.',
  updatedLabel: '12 September 2026',
  updatedIso: '2026-09-12',
  pageLink: 'Open the one-pager',
  back: 'Back to Porta',
  holds: {
    id: 'holds',
    eyebrow: 'HOLD',
    title: 'Not shipping',
    lede: 'These stay HOLD. They are not shipped.',
    items: [
      {
        title: 'F6.4 VerifyingPaymaster sponsorship',
        body: 'NO-GO. Gas is self-funded. No paymaster cover, no gasless sends, no sponsored UI.',
        status: 'HOLD · NO-GO',
      },
      {
        title: 'Retail DeFi feature flags',
        body: 'OFF. Quote review is not a retail execute path. Feature flags stay off until Joshua GO.',
        status: 'HOLD · OFF',
      },
      {
        title: 'AcceptAll',
        body: 'Dead. One-tap accept is intentionally absent.',
        status: 'HOLD · dead',
      },
    ],
  },
  live: {
    id: 'live',
    eyebrow: 'Live',
    title: 'Shipped — honest',
    lede: 'Only what is actually shipped. Not sponsorship. Not retail execute.',
    items: [
      {
        title: 'AA Send',
        body: 'Self-funded UserOps. You pay gas.',
        status: 'LIVE',
      },
      {
        title: 'Canon pins + Porta JWT RPC',
        body: 'Canonical EntryPoint and factory pins. Porta JWT RPC.',
        status: 'LIVE',
      },
      {
        title: 'Mandate Agents UI',
        body: 'Agents screens on Telegram, the extension, mobile, and web. You lend a small, controlled budget — not the wallet.',
        status: 'LIVE',
      },
      {
        title: 'Sepolia Mandate V2',
        body: 'Mandate V2 implementation, FactoryV2, and a sample proxy on Sepolia. Public testnet — not the production default for new wallets.',
        status: 'LIVE',
      },
      {
        title: 'F1 / F2 swap + bridge honesty',
        body: 'See every swap before you confirm. Review quote / Confirm quote — review, not retail execute.',
        status: 'LIVE',
      },
      {
        title: 'Quotes, Search, and Feed',
        body: 'Quotes carry TTL, slippage, and minReceived. Search and Feed notify — they do not execute.',
        status: 'LIVE',
      },
    ],
  },
  next: {
    id: 'next',
    eyebrow: 'Coming · not live',
    title: 'What’s next',
    lede: 'Nothing in this list is live.',
    badge: 'Not live yet',
    items: [
      {
        title: 'Agents UserOp-65 sign path',
        body: 'Signing path for Agents UserOps. Not live.',
        status: 'Coming',
      },
      {
        title: 'FactoryV2 default + V1 → V2 upgrade',
        body: 'FactoryV2 as the default for new wallets, and a V1 to V2 upgrade path. Sepolia V2 is not that default.',
        status: 'Coming',
      },
      {
        title: 'Linea-first curated chains',
        body: 'Linea-first curated chain set, plus testnets and faucets. Not a live network list.',
        status: 'Coming',
      },
      {
        title: 'Social recovery',
        body: 'Account-abstraction social recovery. Not live.',
        status: 'Coming',
      },
      {
        title: 'Smart Actions',
        body: 'Alerts that open a review — not a trade.',
        status: 'Coming',
      },
      {
        title: 'Retail flags after Joshua GO',
        body: 'Retail DeFi flags stay off until Joshua GO. Limit / TWAP later — not now.',
        status: 'Coming',
      },
      {
        title: 'ZK privacy lane',
        body: 'Design only. Not live.',
        status: 'Coming',
      },
      {
        title: 'Perps and restaking',
        body: 'Design only. Not live.',
        status: 'Coming',
      },
    ],
  },
} as const
