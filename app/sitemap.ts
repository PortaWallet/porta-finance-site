import type { MetadataRoute } from 'next'
import { getHelpTopics } from '@/content-help/help'
import { LEGAL_UPDATED_ISO, POLICY_PATH, TERMS_PATH } from '@/content/legal'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const helpUpdated = new Date('2026-10-15')
  return [
    { url: SITE_URL, lastModified: new Date('2026-09-13'), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/guides`, lastModified: new Date('2026-09-13'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/agents`, lastModified: new Date('2026-09-13'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/subscriptions`, lastModified: new Date('2026-09-13'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/help`, lastModified: helpUpdated, changeFrequency: 'weekly', priority: 0.8 },
    ...getHelpTopics().map((topic) => ({
      url: `${SITE_URL}/help/${topic.slug}`,
      lastModified: helpUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${SITE_URL}${POLICY_PATH}`, lastModified: new Date(LEGAL_UPDATED_ISO), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}${TERMS_PATH}`, lastModified: new Date(LEGAL_UPDATED_ISO), changeFrequency: 'monthly', priority: 0.4 },
  ]
}
