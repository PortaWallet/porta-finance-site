import type { MetadataRoute } from 'next'
import { POLICY_PATH, TERMS_PATH } from '@/content/legal'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date('2026-09-11'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}${POLICY_PATH}`,
      lastModified: new Date('2026-09-11'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${SITE_URL}${TERMS_PATH}`,
      lastModified: new Date('2026-09-11'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]
}
