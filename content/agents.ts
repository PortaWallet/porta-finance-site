/**
 * Joshua Agents SoT: EN only on www.
 * Home shows teaser only. Full guide lives at /agents.
 */
export const AGENTS = {
  eyebrow: 'Agents',
  title: 'What Agents mean in the wallet',
  teaserTitle: 'Agents',
  teaser:
    'An agent gets a temporary key — not yours. Caps, addresses, and time live in the contract.',
  teaserCta: 'How Agents work',
  stuckCta: 'Can’t create one? Open the guide',
  intro: [
    'You own the wallet.',
    'An **agent** is a person or a program you give a **temporary key** — not your own key.',
    'They can pay **only** within what you approved: how much, to which addresses, and for how long.',
    'Anything beyond that — the account blocks it. Even if the agent key is stolen, the wallet stays yours.',
  ],
  whyTitle: 'Why this helps in real life',
  why: [
    {
      title: '1. Subscription / API that pays itself',
      body: 'A bot that pays a vendor ($20/week, only that vendor). You do not approve every charge by hand.',
    },
    {
      title: '2. A helper that trades for you',
      body: 'You wanted software to swap tokens. In the current version this is **still closed** (exchange swaps). When it opens — a capped limit for 24 hours, not the whole wallet.',
    },
    {
      title: '3. Someone on the team who needs to pay vendors',
      body: 'You give them a cap and vendor addresses. They cannot send to themselves outside the list.',
    },
    {
      title: '4. Try without fear',
      body: 'Want to try a new tool? Give it $20/week. Not a fit — tap **Revoke** or **Panic**. Your owner key does not change.',
    },
  ],
  howTitle: 'How to use it (screen by screen)',
  how: [
    'Open **Agents** (on the web: from Portfolio, or `/agents`).',
    'If there is no mandate yet — **Create mandate**.',
    'Choose **pay_api**: 20 USDC, 7 days, ordinary transfers only.\n(`swap_24h` is greyed — not active yet.)',
    'Paste the agent’s **public key**. Their secret key never enters the wallet.',
    'Read the line: “The agent is not the owner. Limits live in the contract.”',
    '**You** sign (owner key).',
    'You get a settings file **with no secrets** — give it to the agent’s machine/bot.',
    'In the list you see how much of the cap remains.',
    '**Revoke** = that agent stops on the next block.',
    '**Panic** = all agents stop immediately.',
  ],
  dontTitle: 'What not to do',
  dont: [
    'Do not store the agent’s secret key in the wallet backup.',
    'Do not approve “everything” / every contract in the world — that option is intentionally absent.',
    'Do not confuse: the signature on this screen is **yours**, not the agent’s.',
  ],
  oneLineLabel: 'One line:',
  oneLiner: 'You lend a small, controlled budget — not the wallet.',
} as const
