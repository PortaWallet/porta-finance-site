import { MotionSection } from '@/components/motion-section'
import {
  LEGAL_UPDATED_ISO,
  LEGAL_UPDATED_LABEL,
  POLICY,
  TERMS,
} from '@/content/legal'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/site'
import { cn } from '@/lib/utils'

type LegalDoc = typeof POLICY | typeof TERMS

function LegalArticle({
  doc,
  className,
}: {
  doc: LegalDoc
  className?: string
}) {
  return (
    <MotionSection id={doc.id} className={cn('section-y', className)}>
      <article className="mx-auto max-w-2xl">
        <p className="eyebrow mb-3">{doc.eyebrow}</p>
        <h2 className="section-title">{doc.title}</h2>
        <p className="mt-2 text-xs text-muted-foreground">
          Last updated{' '}
          <time dateTime={LEGAL_UPDATED_ISO}>{LEGAL_UPDATED_LABEL}</time>
        </p>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {doc.lede}
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
