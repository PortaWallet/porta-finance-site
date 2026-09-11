import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal'
import { POLICY, POLICY_PATH } from '@/content/legal'
import { SITE_URL } from '@/lib/site'

export const revalidate = 86400

export const metadata: Metadata = {
  title: POLICY.title,
  description: POLICY.lede,
  alternates: { canonical: `${SITE_URL}${POLICY_PATH}` },
  openGraph: {
    title: POLICY.title,
    description: POLICY.lede,
    url: `${SITE_URL}${POLICY_PATH}`,
  },
}

export default function PrivacyPage() {
  return <LegalPage doc={POLICY} />
}
