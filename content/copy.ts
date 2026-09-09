import {
  PRIMARY_CTA_LABEL,
  SOFT_TIP,
  TG_BOT_HANDLE,
} from '@/lib/site'

export const NAV_LINKS = [
  { href: '#apps', label: 'Apps' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#official', label: 'Official' },
  { href: '#contact', label: 'Contact' },
] as const

export const HERO = {
  eyebrow: 'Porta Wallet',
  independence:
    'Independent AA smart-contract wallet · not a Telegram product',
  h1: 'AA smart-contract wallet — first in Telegram',
  lede: `Create or import, send, and review swaps in the Telegram Mini App. AA is the product direction — social recovery, session limits, and gasless are not live.`,
  primaryCta: PRIMARY_CTA_LABEL,
  secondaryCta: 'Open Mini App',
  status: 'Live · dogfood',
  tip: `Soft dogfood via ${TG_BOT_HANDLE} · tip ${SOFT_TIP}`,
  keys: 'Non-custodial · keys stay on your device',
} as const

export const TRUST = {
  eyebrow: 'Trust',
  title: 'Keys stay on your device',
  body: 'Non-custodial. Every swap is a review — not auto-trade. We do not claim MEV-proof, gasless, or live social recovery.',
  panel:
    'Independent wallet. Review every swap. Keys never leave your device.',
} as const

export const HOW = {
  eyebrow: 'How it works',
  title: 'Create → Fund → Review',
  steps: [
    {
      n: '01',
      title: 'Create',
      body: 'Create or import. Keys stay on your device — Porta is non-custodial.',
    },
    {
      n: '02',
      title: 'Fund',
      body: 'Bring assets you already hold. No live on-ramp claim.',
    },
    {
      n: '03',
      title: 'Review',
      body: 'Send and review every swap before you confirm.',
    },
  ],
} as const

export const CONTACT = {
  eyebrow: 'Contact',
  title: 'Talk to Porta',
  body: `Independent AA smart-contract wallet — not a Telegram product. Soft tip ${SOFT_TIP}. We will never ask for your seed phrase.`,
  never: 'Never send seeds, keys, or recovery phrases. No form. Official email only.',
} as const

export const FOOTER = {
  legal: '© 2026 DracoLabs Ltd',
  honesty:
    'Honest claims only. Non-custodial — keys stay on your device. No official X. Publish HOLD — this rebuild is not a live cutover.',
} as const
