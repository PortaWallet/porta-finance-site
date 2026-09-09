import { PRIMARY_CTA_LABEL } from '@/lib/site'

export const NAV_LINKS = [
  { href: '#apps', label: 'Apps' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#official', label: 'Official' },
  { href: '#contact', label: 'Contact' },
] as const

export const HERO = {
  eyebrow: 'Porta Wallet',
  h1: 'AA smart-contract wallet — first in Telegram',
  lede: 'Create or import, receive assets, send, and review swaps in the Telegram Mini App.',
  primaryCta: PRIMARY_CTA_LABEL,
  secondaryCta: 'Open Mini App',
  keys: 'Non-custodial · keys stay on your device',
} as const

export const FEATURES = {
  eyebrow: 'Wallet',
  title: 'Send, receive, review',
  items: [
    {
      title: 'Send',
      body: 'Send from your Porta wallet in the Mini App.',
    },
    {
      title: 'Receive',
      body: 'Receive assets you already hold.',
    },
    {
      title: 'Review',
      body: 'Review every swap before you confirm. Not auto-trade.',
    },
    {
      title: 'Bridge',
      body: 'Cross-chain bridge is not live.',
    },
  ],
} as const

export const HOW = {
  eyebrow: 'How it works',
  title: 'Create or import → Receive assets → Send and review swaps',
  steps: [
    {
      title: 'Create or import',
      body: 'Create a wallet or import one. Keys stay on your device.',
    },
    {
      title: 'Receive assets',
      body: 'Receive assets you already hold.',
    },
    {
      title: 'Send and review swaps',
      body: 'Send and review every swap before you confirm.',
    },
  ],
} as const

export const AA = {
  eyebrow: 'Account abstraction',
  title: 'AA is the direction',
  body: 'Porta is an AA smart-contract wallet. UserOps and self-funded gas are what we are building. Gasless and social recovery are not live.',
} as const

export const SECURITY = {
  eyebrow: 'Security',
  title: 'Keys stay on your device',
  body: 'Non-custodial. Review every swap — not auto-trade. No audit theater, TVL, or invented metrics.',
  items: [
    'Keys never leave your device',
    'We will never ask for your seed phrase',
    'No fake audits or TVL',
  ],
} as const

export const DEVELOPERS = {
  eyebrow: 'Developers',
  title: 'No public SDK yet',
  body: 'There is no public SDK, API, or docs site to claim. Official surfaces only.',
} as const

export const CONTACT = {
  eyebrow: 'Contact',
  title: 'Talk to Porta',
  body: 'AA smart-contract wallet in Telegram. We will never ask for your seed phrase.',
  never: 'Never send seeds, keys, or recovery phrases. No form. Official email only.',
} as const

export const FOOTER = {
  legal: '© 2026 DracoLabs Ltd',
  honesty:
    'Honest claims only. Non-custodial — keys stay on your device. No official X. Publish HOLD — this rebuild is not a live cutover.',
} as const
