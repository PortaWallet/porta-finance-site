import { SOFT_TIP } from '@/lib/site'

export const ROADMAP = {
  eyebrow: 'Coming · not live',
  title: 'What’s next',
  lede: `Ambitions with receipts. Nothing below is live on soft tip ${SOFT_TIP}.`,
  badge: 'Not live yet',
  items: [
    {
      n: '01',
      title: 'See every swap before you confirm',
      body: 'Clearer quotes, fees, and review copy so nothing is a surprise. Swap means review — not auto-trade.',
    },
    {
      n: '02',
      title: 'Alerts that open a review — not a trade',
      body: 'Alerts that land you in a review flow inside Porta. Available via Telegram as a surface — not a Telegram product.',
    },
    {
      n: '03',
      title: 'Optional protected swaps',
      body: 'Opt-in protections around swaps. Never marketed as MEV-proof — honest about what it does and does not cover.',
    },
    {
      n: '04',
      title: 'Recovery & session limits',
      body: 'Account-abstraction recovery and session limits are in progress. Not gasless today — and we will not claim it is.',
    },
    {
      n: '05',
      title: 'Advanced trading later',
      body: 'Strategies and copy-style flows come later. Wallet trust is the brand lead — not a trading slogan.',
    },
  ],
} as const
