import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HelpBody } from '@/components/help/help-body'
import { HelpShell } from '@/components/help/help-shell'
import { MotionSection } from '@/components/motion-section'
import { getHelpTopic, helpStaticParams } from '@/content-help/help'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = 86400

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return helpStaticParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const topic = getHelpTopic(slug)
  if (!topic) return { title: 'Help' }
  return {
    title: topic.heading,
    description: topic.excerpt,
    alternates: { canonical: `${SITE_URL}/help/${topic.slug}` },
  }
}

export default async function HelpTopicPage({ params }: Props) {
  const { slug } = await params
  const topic = getHelpTopic(slug)
  if (!topic) notFound()

  return (
    <HelpShell>
      <MotionSection className="section-y">
        <article className="mx-auto max-w-6xl">
          <p className="eyebrow mb-2">Help</p>
          <h1 id={topic.slug} className="section-title scroll-mt-32 max-w-3xl">
            {topic.heading}
          </h1>
          {topic.toc.length > 0 ? (
            <nav aria-label="On this page" className="mt-6 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                On this page
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                {topic.toc.map((item) => (
                  <li key={item.id} className={item.level === 4 ? 'pl-4' : undefined}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          <div className="mt-8">
            <HelpBody blocks={topic.blocks} />
          </div>
          <p className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
            <Link href="/help" className="underline-offset-4 hover:text-primary hover:underline">
              All help topics
            </Link>
            <Link href="/" className="underline-offset-4 hover:text-primary hover:underline">
              Back to Porta
            </Link>
          </p>
        </article>
      </MotionSection>
    </HelpShell>
  )
}
