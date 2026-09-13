export const GUIDES = {
  eyebrow: 'Guides',
  title: 'Stuck? Start here',
  lede: 'Short pages for each feature. Home stays short. Detail lives here. Agents and Subscriptions are Coming — not Delivered.',
  items: [
    {
      href: '/agents',
      title: 'Agents',
      body: 'Temporary key, caps, revoke, panic. Use this if Create mandate is confusing. Coming — not Delivered.',
      statusLabel: 'Coming' as const,
    },
    {
      href: '/subscriptions',
      title: 'Subscriptions',
      body: 'Caps, merchants, pause or cancel. Retail and social bots Coming until retail flags ship. Trading bot Coming later. Coming — not Delivered.',
      statusLabel: 'Coming' as const,
    },
  ],
} as const
