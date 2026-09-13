export const GUIDES = {
  eyebrow: 'Guides',
  title: 'Stuck? Start here',
  lede: 'Short pages for each feature. Home stays short. Detail lives here. Agents and Mandates are Coming until Sepolia is live — not Delivered.',
  items: [
    {
      href: '/agents',
      title: 'Agents',
      body: 'Temporary key, caps, revoke, panic. Use this if Create mandate is confusing. Coming until Sepolia is live — not Delivered.',
      statusLabel: 'Coming' as const,
    },
    {
      href: '/subscriptions',
      title: 'Mandates',
      body: 'APK chrome: Amount, Days, Pause. Period cap (not a lump). Caps, merchants, pause or cancel. Swap bot Coming later. Coming until Sepolia is live — not Delivered.',
      statusLabel: 'Coming' as const,
    },
  ],
} as const
