import { SITE_URL, TG_BOT_URL, CONTACT_EMAIL } from '@/lib/site'

export const SITE_TITLE = 'Porta — AA smart-contract wallet'
export const SITE_DESCRIPTION =
  'Porta is an account-abstraction smart-contract wallet. Open it in Telegram to create or import, receive assets, send, and review swaps. You lend a small, controlled budget — not the wallet. Self-funded gas — sponsorship is not live.'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Porta',
    legalName: 'DracoLabs Ltd',
    url: SITE_URL,
    email: CONTACT_EMAIL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://t.me/PortaWallet_bot',
      'https://t.me/PortaWallet',
      'https://t.me/PortaNews',
      'https://www.linkedin.com/company/portawallet',
      'https://www.youtube.com/@PortaWallet',
      'https://x.com/PortaWallet',
    ],
  }
}

export function softwareJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Porta Wallet',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Telegram Mini App',
    url: SITE_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: SITE_DESCRIPTION,
    installUrl: TG_BOT_URL,
  }
}
