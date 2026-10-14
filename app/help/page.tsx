import type { Metadata } from 'next'
import Link from 'next/link'
import { HelpHashRedirect } from '@/components/help/help-hash-redirect'
import { HelpSearch } from '@/components/help/help-search'
import { HelpShell } from '@/components/help/help-shell'
import { MotionSection } from '@/components/motion-section'
import { getHelpTopics, IN_APP_HELP_ANCHORS } from '@/content-help/help'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'
export const revalidate = 86400

const TITLE = 'Help Center'
const DESCRIPTION =
  'How to use PortaWallet on Telegram, Android, iOS, the web, and the browser extension.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/help` },
}

export default function HelpPage() {
  const topics = getHelpTopics().map((topic) => ({
    slug: topic.slug,
    heading: topic.heading,
    excerpt: topic.excerpt,
    searchText: topic.searchText,
  }))

  return (
    <HelpShell>
      <HelpHashRedirect anchors={IN_APP_HELP_ANCHORS} />
      <MotionSection className="section-y">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-2">Help</p>
          <h1 className="section-title max-w-2xl">{TITLE}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {DESCRIPTION}
          </p>
          <HelpSearch topics={topics} />
          <p className="mt-8 text-sm font-medium">
            <Link href="/" className="underline-offset-4 hover:text-primary hover:underline">
              Back to Porta
            </Link>
          </p>
        </div>
      </MotionSection>
    </HelpShell>
  )
}
