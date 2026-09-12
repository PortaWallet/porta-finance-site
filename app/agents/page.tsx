import type { Metadata } from 'next'
import { AgentsGuide } from '@/components/agents'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { AGENTS } from '@/content/agents'
import { SITE_URL } from '@/lib/site'

export const revalidate = 86400

export const metadata: Metadata = {
  title: AGENTS.title,
  description: AGENTS.oneLiner,
  alternates: { canonical: `${SITE_URL}/agents` },
}

export default function AgentsPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <AgentsGuide />
      </main>
      <SiteFooter />
    </div>
  )
}
