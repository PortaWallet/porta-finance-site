import type { Metadata } from 'next'
import { RoadmapPage } from '@/components/roadmap'
import { ROADMAP, ROADMAP_PATH } from '@/content/roadmap'
import { SITE_URL } from '@/lib/site'

export const revalidate = 86400

export const metadata: Metadata = {
  title: ROADMAP.pageTitle,
  description: ROADMAP.lede,
  alternates: { canonical: `${SITE_URL}${ROADMAP_PATH}` },
  openGraph: {
    title: ROADMAP.pageTitle,
    description: ROADMAP.lede,
    url: `${SITE_URL}${ROADMAP_PATH}`,
  },
}

export default function CryptoDefiRoadmapPage() {
  return <RoadmapPage />
}
