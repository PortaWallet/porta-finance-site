/**
 * Mandates guide (SPRINT-MONTHLY SoT) — APK chrome Amount / Days / Pause.
 * Product name: **Mandates** (not Subscriptions). Cap = one period, not a lump.
 * Honest Coming until Sepolia is live. Swap bot / Trading bot Coming later — never fake LIVE.
 * Confirm / Stop all stay muted when the send path is not wired. No login stories.
 */
export const SUBSCRIPTIONS = {
  eyebrow: 'Mandates',
  title: 'Recurring pay — one merchant, period cap and expiry',
  teaser: 'Caps, merchants, pause or cancel',
  statusLabel: 'Coming',
  intro: [
    'Approve a **period cap** to one address. Pause or cancel any time.',
    'A Porta **mandate** is amount (USDC) **per period**, days, and one **payee address**.',
    'The Amount cap is for **one period**, not a lump sum for the whole Days window.',
    'It is not a credit card on file. Your owner key does not change.',
    'Product status: **Coming until Sepolia is live** — not Delivered. Review is not execute.',
  ],
  typesTitle: 'Type',
  types: [
    {
      title: 'Recurring pay',
      body: 'One merchant, period cap and expiry.',
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
      body: 'Amount (USDC) — the cap for **one period**, not a lump across all days. One number per period, not unlimited auto-debit.',
    },
    {
      title: 'Days',
      body: 'Days — how long the mandate lasts. Periods renew inside that window until expiry; Amount is per period, not a total lump.',
    },
    {
      title: 'Pause',
      body: 'Pause or cancel any time. When the path is not wired: **Can’t pause yet** — no pretend success.',
    },
  ],
  howTitle: 'How to set one',
  how: [
    'Open **Mandates** in the **APK**, Mini App, or web wallet (menu: Caps, merchants, pause or cancel).',
    'Tap **New mandate** — Amount, days, payee.',
    'Choose **Recurring pay**. **Trading bot** / Swap bot stays muted — Coming later, not LIVE.',
    'Enter **Amount (USDC)** (cap for **one period**, not a lump), **Days**, and **Payee address**. Continue.',
    'Confirm with **your** owner signature. Gas is self-funded — sponsorship is not live.',
    'If the path is not ready, the wallet stays honest: **Can’t send yet** / **Can’t pause yet**. It will not pretend the payment went through.',
    '**Stop all** stops every mandate. Revoke stops one.',
  ],
  dont: [
    'Do not treat Amount as a lump for the full Days window — the cap is **one period**.',
    'Do not expect gasless / sponsored charges (not live).',
    'Do not treat **Trading bot** / Swap bot as live — Coming later.',
    'Do not put a wildcard address. One merchant at a time in this version.',
    'Do not call this Delivered until Sepolia is live.',
    'Do not invent login / TG↔APK auth stories here — out of scope.',
  ],
} as const
