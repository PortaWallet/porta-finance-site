import { MotionSection } from '@/components/motion-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import {
  LEGAL_UPDATED_ISO,
  LEGAL_UPDATED_LABEL,
  POLICY,
  POLICY_PATH,
  TERMS,
  TERMS_PATH,
} from '@/content/legal'
import { HOME_HREF } from '@/lib/preview'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/site'
import { cn } from '@/lib/utils'

type LegalDoc = typeof POLICY | typeof TERMS

function LegalArticle({
  doc,
  asPage = false,
  className,
}: {
  doc: LegalDoc
  asPage?: boolean
  className?: string
}) {
  const Title = asPage ? 'h1' : 'h2'
  const other = doc.id === POLICY.id ? TERMS : POLICY
  const otherHref = doc.id === POLICY.id ? TERMS_PATH : POLICY_PATH

  return (
    <MotionSection id={doc.id} className={cn('section-y', className)}>
      <article className="mx-auto max-w-2xl">
        <p className="eyebrow mb-3">{doc.eyebrow}</p>
        <Title className="section-title">{doc.title}</Title>
        <p className="mt-2 text-xs text-muted-foreground">
          Last updated{' '}
          <time dateTime={LEGAL_UPDATED_ISO}>{LEGAL_UPDATED_LABEL}</time>
        </p>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {doc.lede}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          {doc.draft}
        </p>
        <div className="mt-8 grid gap-6">
          {doc.sections.map((section) => (
            <section key={section.title}>
              <h3 className="text-sm font-semibold tracking-tight">
                {section.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {renderContact(section.body)}
              </p>
            </section>
          ))}
        </div>
        {asPage ? (
          <p className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
            <a
              href={HOME_HREF}
              className="text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Back to Porta
            </a>
            <a
              href={otherHref}
              className="text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              {other.title}
            </a>
          </p>
        ) : null}
      </article>
    </MotionSection>
  )
}

function renderContact(body: string) {
  if (!body.includes(CONTACT_EMAIL)) return body
  const parts = body.split(CONTACT_EMAIL)
  return parts.map((part, i) => (
    <span key={`${part}-${i}`}>
      {part}
      {i < parts.length - 1 ? (
        <a
          href={CONTACT_MAILTO}
          className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      ) : null}
    </span>
  ))
}

export function Policy() {
  return <LegalArticle doc={POLICY} className="section-band" />
}

export function Terms() {
  return <LegalArticle doc={TERMS} />
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <LegalArticle doc={doc} asPage />
      </main>
      <SiteFooter />
    </div>
  )
}
