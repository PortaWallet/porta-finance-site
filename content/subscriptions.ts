/**
 * Subscriptions guide — cloned from APK wallet chrome (amount / days / pause).
 * Honest Coming until Sepolia is live. Swap bot / Trading bot Coming later — never fake LIVE.
 * Confirm / Stop all stay muted when the send path is not wired.
 */
export const SUBSCRIPTIONS = {
  eyebrow: 'Subscriptions',
  title: 'Recurring pay — one merchant, cap and expiry',
  teaser: 'Caps, merchants, pause or cancel',
  statusLabel: 'Coming',
  intro: [
    'Approve a cap to one address. Pause or cancel any time.',
    'A Porta subscription is a **mandate**: amount (USDC), days, and one **payee address**.',
    'It is not a credit card on file. Your owner key does not change.',
    'Product status: **Coming until Sepolia is live** — not Delivered. Review is not execute.',
  ],
  typesTitle: 'Type',
  types: [
    {
      title: 'Recurring pay',
      body: 'One merchant, cap and expiry.',
      statusLabel: 'Coming' as const,
    },
    {
      title: 'Trading bot',
      body: 'Swap bot Coming later — not LIVE.',
      statusLabel: 'Coming' as const,
    },
  ],
  screensTitle: 'Screens (APK chrome)',
  screens: [
    {
      title: 'Amount',
      body: 'Amount (USDC) — the cap for this mandate. One number, not unlimited auto-debit.',
    },
    {
      title: 'Days',
      body: 'Days — how long the mandate lasts. Expiry is part of the contract, not a card on file.',
    },
    {
      title: 'Pause',
      body: 'Pause or cancel any time. When the path is not wired: **Can’t pause yet** — no pretend success.',
    },
  ],
  howTitle: 'How to set one',
  how: [
    'Open **Subscriptions** in the **APK**, Mini App, or web wallet (menu: Caps, merchants, pause or cancel).',
    'Tap **New subscription** — Amount, days, payee.',
    'Choose **Recurring pay**. **Trading bot** / Swap bot stays muted — Coming later, not LIVE.',
    'Enter **Amount (USDC)**, **Days**, and **Payee address**. Continue.',
    'Confirm with **your** owner signature. Gas is self-funded — sponsorship is not live.',
    'If the path is not ready, the wallet stays honest: **Can’t send yet** / **Can’t pause yet**. It will not pretend the payment went through.',
    '**Stop all** stops every subscription. Revoke stops one.',
  ],
  dont: [
    'Do not expect gasless / sponsored charges (not live).',
    'Do not treat **Trading bot** / Swap bot as live — Coming later.',
    'Do not put a wildcard address. One merchant at a time in this version.',
    'Do not call this Delivered until Sepolia is live.',
  ],
} as const
