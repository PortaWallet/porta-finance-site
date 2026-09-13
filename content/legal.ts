import { CONTACT_EMAIL, SITE_HOST } from '@/lib/site'

/** Section ids on dedicated legal pages. Prefer /privacy and /terms deep links. */
export const POLICY_ID = 'policy'
export const TERMS_ID = 'terms'

/** Canonical legal deep links. Mini App / older links also open the aliases. TOS is /terms only. */
export const POLICY_PATH = '/privacy'
export const TERMS_PATH = '/terms'
export const POLICY_ALIASES = ['/privacy-policy'] as const
export const TERMS_ALIASES = ['/terms-of-service'] as const
/** Legacy OAuth hashes — homepage redirects these to POLICY_PATH / TERMS_PATH. */
export const POLICY_HASH_PATH = `/#${POLICY_ID}`
export const TERMS_HASH_PATH = `/#${TERMS_ID}`

export const LEGAL_UPDATED_ISO = '2026-09-13'
export const LEGAL_UPDATED_LABEL = '13 September 2026'

export const LEGAL_DRAFT_NOTE =
  'Draft product language. It describes how Porta works today and is not a counsel-reviewed contract.'

export const LEGAL_LINKS = [
  { href: POLICY_PATH, hash: `#${POLICY_ID}`, id: POLICY_ID, label: 'Privacy' },
  { href: TERMS_PATH, hash: `#${TERMS_ID}`, id: TERMS_ID, label: 'Terms' },
] as const

export const POLICY = {
  id: POLICY_ID,
  eyebrow: 'Privacy',
  title: 'Privacy Policy',
  lede: 'Porta is a non-custodial AA wallet. Keys stay on your device. This page says what we actually receive — not a generated legal wall.',
  draft: LEGAL_DRAFT_NOTE,
  sections: [
    {
      title: 'Who we are',
      body: `DracoLabs Ltd operates Porta and ${SITE_HOST}. Contact: ${CONTACT_EMAIL}.`,
    },
    {
      title: 'Local keys',
      body: 'Creating or importing a wallet happens on your device. We do not hold your seed phrase, private keys, or assets. We cannot sign, freeze, or reverse a transaction for you.',
    },
    {
      title: 'What we collect',
      body: `Support — if you email ${CONTACT_EMAIL}, we receive your address and the message so we can reply. Google sign-in — if you authenticate with Google, we receive the email and basic profile Google shares for that OAuth consent, and we use it to sign you in. We do not get your Google password. Telegram Mini App — if you open Porta in Telegram, Telegram hosts that surface; we do not receive your Telegram password. Hosting and mail — GitHub Pages and our email provider process the technical data they need to serve the site and deliver mail.`,
    },
    {
      title: 'What we do not do',
      body: 'We do not sell personal data. This site does not run an ad or analytics pixel. We will never ask for your seed phrase.',
    },
    {
      title: 'On-chain data',
      body: 'Transfers you make on public networks are public. That is how the chains work, not a Porta database of your holdings.',
    },
    {
      title: 'Changes',
      body: 'If this policy changes, we update the date on this page.',
    },
  ],
} as const

export const TERMS = {
  id: TERMS_ID,
  eyebrow: 'Terms',
  title: 'Terms of Service',
  lede: 'Porta is software you run. We do not custody your assets. Read this before you sign anything.',
  draft: LEGAL_DRAFT_NOTE,
  sections: [
    {
      title: 'The software',
      body: 'Porta is provided as-is, without a warranty that it will be available, bug-free, or fit for a particular purpose. Chains, RPCs, and Telegram can be down. You use the software at your own risk.',
    },
    {
      title: 'No custody',
      body: 'We do not take custody of your assets. You control the keys. If you lose them, we cannot restore the wallet. We are not a bank, custodian, or broker.',
    },
    {
      title: 'Network risk',
      body: 'You pay gas. Transactions you confirm are typically irreversible. Smart contracts and networks can fail or be congested. Review every send and swap before you confirm. Review is not execute — nothing trades without your confirmation. Review is not a guarantee against loss.',
    },
    {
      title: 'Mandates',
      body: 'A mandate is a scoped recurring-pay approval: one payee, an Amount cap for one period (not a lump for the whole Days window), and an expiry. Mandates are Coming until Sepolia is live — not Delivered. Approving a mandate is not execute; pause, revoke, and stop-all stay under your owner key. This site does not claim login or TG↔APK auth alignment.',
    },
    {
      title: 'Not advice',
      body: 'Nothing on this site is financial, legal, or tax advice. You are responsible for your own compliance.',
    },
    {
      title: 'Contact',
      body: `Questions: ${CONTACT_EMAIL}. If these terms change, we update the date on this page.`,
    },
  ],
} as const
