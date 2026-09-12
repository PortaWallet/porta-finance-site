export const SUBSCRIPTIONS = {
  eyebrow: 'Subscriptions',
  title: 'Recurring pay with a cap — not unlimited auto-debit',
  teaser:
    'Pick amount, days, and one address. The contract stops anything outside that.',
  intro: [
    'A Porta subscription is a **mandate**: USDC cap, an end date, and the vendor address.',
    'It is not a credit card on file. Pause or revoke anytime. Your owner key does not change.',
  ],
  howTitle: 'How to set one',
  how: [
    'Open **Subscriptions** / **Agents** in the Mini App or web wallet.',
    'Enter **amount** (USDC), **days**, and the **pay-to address**.',
    'Confirm with **your** owner signature. Gas is self-funded — sponsorship is not live.',
    'If the send path is not ready, the screen stays honest. It will not pretend the payment went through.',
    '**Pause all** stops every mandate. **Revoke** stops one.',
  ],
  dont: [
    'Do not expect gasless / sponsored charges (not live).',
    'Do not expect daily auto-renew beyond the cap you set.',
    'Do not put a wildcard address. One vendor at a time in this version.',
  ],
} as const
