import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal'
import { TERMS, TERMS_PATH } from '@/content/legal'
import { SITE_URL } from '@/lib/site'

export const revalidate = 86400

export const metadata: Metadata = {
  title: TERMS.title,
  description: TERMS.lede,
  alternates: { canonical: `${SITE_URL}${TERMS_PATH}` },
  openGraph: {
    title: TERMS.title,
    description: TERMS.lede,
    url: `${SITE_URL}${TERMS_PATH}`,
  },
}

export default function TermsPage() {
  return <LegalPage doc={TERMS} />
}
