/**
 * Subscriptions guide — cloned from Mini App wallet chrome (build 9a2f1ed).
 * Honest Coming only. Retail + social bots stay Coming until retail flags ship.
 * Trading bot is Coming later — never fake LIVE. Review is not execute.
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
      body: 'Social and copy-style bots — Coming until retail flags ship. Review is not execute.',
      statusLabel: 'Coming' as const,
    },
  ],
  howTitle: 'How to set one',
  how: [
    'Open **Subscriptions** in the Mini App or web wallet (menu: Caps, merchants, pause or cancel).',
    'Tap **New subscription** — Amount, days, payee.',
    'Choose **Recurring pay**. **Trading bot** (social/copy bots) stays muted — Coming until retail flags ship. Review is not execute.',
    'Enter **Amount (USDC)**, **Days**, and **Payee address**. Continue.',
    'Confirm with **your** owner signature. Gas is self-funded — sponsorship is not live.',
    'If the path is not ready, the wallet stays honest: **Can’t send yet** / **Can’t pause yet**. It will not pretend the payment went through.',
    '**Stop all** stops every subscription. Revoke stops one.',
  ],
  dont: [
    'Do not expect gasless / sponsored charges (not live).',
    'Do not treat **Trading bot** or social bots as live — Coming until retail flags ship. Review is not execute.',
    'Do not put a wildcard address. One merchant at a time in this version.',
  ],
} as const
